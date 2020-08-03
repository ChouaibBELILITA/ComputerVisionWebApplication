import React, { Component } from "react";
import "./canvas.css";

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
  state = {
    websocket: null,
  };
  constructor(props) {
    super(props);
    var ws = new WebSocket("ws://" + props.link);
    this.state = {
      websocket: ws,
    };
  }

  render() {
    const self = this;
    this.state.websocket.onmessage = function (event) {
      var js = JSON.parse(atob(event.data.split(",")[0]));

      var data = b64toBlob(js["data"]);
      var personinfo = { infos: js["infos"] };
      //self.props.setdata(personinfo);

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

export default VideoSocket;
