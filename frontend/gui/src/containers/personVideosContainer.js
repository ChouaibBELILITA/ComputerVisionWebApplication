import React, { Component } from "react";
import { Table, Modal } from "antd";

import axios from "axios";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Heur",
    dataIndex: "heur",
  },
  {
    title: "Nbr De Detections",
    dataIndex: "nbrPerson",
  },
];

function Clip(url) {
  return (
    <video className="mw-100 mh-100" key={url} controls autoPlay>
      <source src={url} />
    </video>
  );
}

class PersonVideosContainer extends Component {
  state = {
    loading: false,
    visible: false,
    data: [],
    year: 2020,
    active: {
      videopath: "",
      key: 0,
    },
  };
  componentDidMount() {
    const link =
      "http://127.0.0.1:8000/api/videos/" +
      this.props.personId +
      "/" +
      this.state.year;
    axios.get(link).then((res) => {
      let data = [];
      res.data.map((item) => {
        let heur = item.time.substring(0, 2);
        data.push({
          key: item.id,
          nbrPerson: item.persons,
          date: item.date,
          heur: heur,
          path: item.videopath,
        });
      });
      this.setState({ data });
    });
  }

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  };
  showModal = (active) => {
    console.log(active);
    this.setState({
      active,
    });
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    this.setState({
      active: {
        videopath: "",
      },
    });
  };

  render() {
    const { loading } = this.state;
    const video = (
      <video
        key={this.state.active.key + "vid"}
        className="mh-100 mw-100"
        controls
      >
        {" "}
        <source src={this.state.active.videopath} />
      </video>
    );

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <br />
        </div>
        <Table
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                this.showModal(record);
              },
            };
          }}
          dataSource={this.state.data}
        />
        <Modal
          title={this.state.active.date + "  heur:" + this.state.active.heur}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[]}
        >
          {Clip(this.state.active.path)}
        </Modal>
      </div>
    );
  }
}

export default PersonVideosContainer;
