import React from "react";
import "./canvas.css";
var ws = new WebSocket("ws://127.0.0.1:5678/");

function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[0]);

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/jpeg" });
}
ws.onmessage = function (event) {
  var js = JSON.parse(atob(event.data.split(",")[0]));
  console.log(js["id"]);
  var data = b64toBlob(js["data"]);

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
}; /*
    ws.onmessage = function(event) {
        
        var img=document.getElementById("video_frames");
        var urlObject = URL.createObjectURL(event.data);
        img.src = urlObject;
        document.body.appendChild(img);
    }*/

const VideoSocket = () => {
  return (
    <div>
      <canvas id="tools_sketch" width="1000px" height="400px">
        Sorry, your browser doesn't support the &lt;canvas&gt; element.
      </canvas>
    </div>
  );
};

export default VideoSocket;
