import React, { Component } from "react";

import "antd/dist/antd.css";

import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

class Avatar extends Component {
  state = {
    loading: false,
    imageUrl: null,
  };
  componentDidMount() {
    this.setState({
      imageUrl: this.props.value,
    });
  }

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });

      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.

      getBase64(info.file.originFileObj, (imageUrl) => {
        this.props.addtoForm(imageUrl);
        this.setState({
          imageUrl,
          loading: false,
        });
      });
    }
  };

  render() {
    let image = this.props.value;
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    const uploader = (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        customRequest={this.props.sendData}
      >
        {image ? (
          <img src={image} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
    return <>{uploader}</>;
  }
}

export default Avatar;
