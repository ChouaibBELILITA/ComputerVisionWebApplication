import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Timeline } from "antd";
import "./charts.css";
import axios from "axios";
class Charts extends Component {
  state = {
    totalDetections: 0,
    suspectEvents: 0,

    suspecteventsdata: {},

    year: 2020,
    timeline: [],
  };
  componentDidMount() {
    const PersonId = this.props.id;

    let link =
      "http://127.0.0.1:8000/api/timeline/" + PersonId + "/" + this.state.year;

    axios.get(link).then((res) => {
      this.setState({
        timeline: res.data,
      });
    });

    link =
      "http://127.0.0.1:8000/api/persontotal/" +
      PersonId +
      "/" +
      this.state.year;
    let labels = [
      "jan",
      "fev",
      "mar",
      "avr",
      "mai",
      "juin",
      "juill",
      "aout",
      "sept",
      "oct",
      "nov",
      "dec",
    ];
    let initData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let suspectdata = {
      labels: labels,

      datasets: [
        {
          label: "Detections",
          data: [...initData],
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(54, 162, 235, 0.8)",
          ],
        },
        {
          label: "suspect events",

          data: [...initData],

          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(255, 99, 132, 0.8)",
          ],
        },
      ],
    };
    let total = 0;
    let suspect = 0;

    axios.get(link).then((res) => {
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        suspectdata.datasets[0].data[data[i].month - 1] +=
          data[i].detection_numbers;
        total += data[i].detection_numbers;
        if (data[i].suspect == true) {
          suspectdata.datasets[1].data[data[i].month - 1] +=
            data[i].detection_numbers;
          suspect = data[i].detection_numbers;
        }
      }
      this.setState({
        totalDetections: total,
        suspectEvents: suspect,

        suspecteventsdata: suspectdata,
      });
    });
  }
  rendtimeline = (data) => {
    console.log(data);
    let timeline = data.map((item) =>
      item.suspect == true ? (
        <Timeline.Item
          key={item.id}
          label={
            item.year +
            "-" +
            item.month +
            "-" +
            item.day +
            "  heur:" +
            item.hour
          }
          color="red"
        >
          suspect activity <br />
          camera{item.camera}
        </Timeline.Item>
      ) : (
        <Timeline.Item
          key={item.id}
          label={
            item.year +
            "-" +
            item.month +
            "-" +
            item.day +
            "  heur:" +
            item.hour
          }
        >
          normal activity <br />
          camera {item.camera}
        </Timeline.Item>
      )
    );
    return timeline;
  };
  render() {
    return (
      <div className="chart ">
        <br />
        <br />
        <br />

        <div className="col-xl-12" style={{ height: 200 }}>
          {" "}
          <div className="container-fluid w-auto d-flex  mh-100  ">
            <div className="row flex-fill col-6 mh-25 mr-4">
              <div className="col-xl-6 col-md-6 mb-4 mh-100">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-nowrap overflow-auto">
                          tous les detections
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {this.state.totalDetections}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-md-6 mb-4 mh-100">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-nowrap overflow-auto">
                          evenement suspect
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {this.state.suspectEvents}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 overflow-auto">
              <br />
              <div className="mh-100">
                {" "}
                <Timeline mode="alternate">
                  {this.rendtimeline(this.state.timeline)}
                </Timeline>
              </div>
            </div>
            ,
          </div>
        </div>
        <br />
        <div>
          <Line
            data={this.state.suspecteventsdata}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,

                      stepSize: 1,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Charts;
