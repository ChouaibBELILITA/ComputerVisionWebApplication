import React, { Component } from "react";
import VideoSocket from "../components/videoSocket";
import "antd/dist/antd.css";

import { List, Card } from "antd";
const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];
class CanvasContainer extends Component {
  state = {};
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              {" "}
              <VideoSocket
                width={window.innerWidth / 7}
                height="100px"
                link=""
              ></VideoSocket>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default CanvasContainer;
