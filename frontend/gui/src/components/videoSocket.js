import React, { Component } from "react";
import "./canvas.css";
import { connect } from "react-redux";
import { SET_PERSONS_INFOS } from "../store/actions/actionTypes";

function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[0]);

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
} /*
    ws.onmessage = function(event) {
        
        var img=document.getElementById("video_frames");
        var urlObject = URL.createObjectURL(event.data);
        img.src = urlObject;
        document.body.appendChild(img);
    }*/

class VideoSocket extends Component {
  ws = null;

  // single websocket instance for the own application and constantly trying to reconnect.

  componentDidMount() {
    this.connect();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /*
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    console.log(this.props.link);
    var ws = new WebSocket("ws://" + this.props.link);
    let that = this; // cache the this
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.ws = ws;

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = (e) => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };
    const self = this;
    var i = 0;
    ws.onmessage = (event) => {
      var js = JSON.parse(atob(event.data.split(",")[0]));

      var data = b64toBlob(js["data"]);
      var personinfo = { infos: js["infos"] };
      if (i == 0) {
        self.props.setData(personinfo);
      }
      i = (i + 1) % 15;

      var urlObject = URL.createObjectURL(data);

      var canvas = document.getElementById("tools_sketch");
      /*
      canvas.width = window.innerWidth; // equals window dimension
      canvas.height = window.innerHeight;*/
      var ctx = canvas.getContext("2d");

      var image = new Image();
      image.onload = function () {
        ctx.drawImage(
          image,
          0,
          0,
          image.width,
          image.height, // source rectangle
          0,
          0,
          canvas.width,
          canvas.height
        );
      };

      image.src = urlObject;
    };

    // websocket onerror event listener
    ws.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };
  };

  /*
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check = () => {
    const ws = this.ws;
    if (ws) {
      console.log("check");

      if (ws.readyState == WebSocket.CLOSED) this.connect();
    }
    //check if websocket instance is closed, if so call `connect` function.
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("update?");
    if (this.props.link == nextProps.link) {
      console.log("equal");
      return false;
    } else {
      console.log("not equal");
      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }

      return true;
    }
  }
  componentDidUpdate(prevProps, prevState, prevContext) {
    this.connect();
  }
  componentWillUnmount() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  render() {
    return (
      <div>
        <canvas
          id="tools_sketch"
          width={this.props.width}
          height={this.props.height}
        >
          Sorry, your browser doesn't support the &lt;canvas&gt; element.
        </canvas>
      </div>
    );
  }
}
const mapDispachToProps = (dispatch) => {
  //dispatch(todoAction);
  return {
    setData: (data) => {
      dispatch({ type: SET_PERSONS_INFOS, data: data });
    },
  };
};
export default connect(null, mapDispachToProps)(VideoSocket);
