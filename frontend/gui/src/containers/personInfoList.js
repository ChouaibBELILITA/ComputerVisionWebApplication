import axios from "axios";
import React, { Component } from "react";
import PersonInfo from "../components/PersonInfo";
import { Radio } from "antd";
import { DatePicker } from "antd";
import { NavLink } from "react-router-dom";


class PersonInfoList extends Component {
  state = {
    datePickerValue: ["date", "month", "year"],
    todaydata: [],
    datedata: [],

    radioValue: 1,
    loading: false,
    visible: false,
    date: "",
    detaildate: {},
    modaldate: {},
    modaldata: {},
  };

  redirect = (person, dateortoday) => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    if (dateortoday == true) {
      year = this.state.modaldate.year;
      month = this.state.modaldate.month;
      day = this.state.modaldate.day;
    }
    let link =
      "http://127.0.0.1:8000/api/persondetails/day/" +
      person.id +
      "/" +
      year +
      "/" +
      month +
      "/" +
      day;
    if (month == null) {
      link =
        "http://127.0.0.1:8000/api/persondetails/year/" +
        person.id +
        "/" +
        year;
    } else if (day == null) {
      link =
        "http://127.0.0.1:8000/api/persondetails/month/" +
        person.id +
        "/" +
        year +
        "/" +
        month;
    }

    axios.get(link).then((res) => {
      this.setState({
        modaldata: {},
        visible: true,
      });
    });
  };

  componentDidMount() {
    const removeDups = (data) => {
      let newArray = [];

      let uniqueObject = {};

      for (let i in data) {
        uniqueObject[data[i].id] = data[i];
      }

      for (let i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }
      return newArray;
    };
    var d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let date = {
      year: year,
      month: month,
      day: day,
    };

    let link =
      "http://127.0.0.1:8000/api/details/" + year + "/" + month + "/" + day;
    axios.get(link).then((res) => {
      let data = removeDups(res.data);

      this.setState({
        detaildate: date,
        todaydata: data,
      });
    });
  }

  renderdata = (data, dateortoday) => {
    //dateortoday false==today

    let content = data.map((item) => (
      <NavLink to={"/details/" + item.id}>
        {" "}
        <PersonInfo
          key={item.id}
          showModal={this.showModal}
          person={item}
          dateortoday={dateortoday}
        ></PersonInfo>
      </NavLink>
    ));
    return content;
  };
  onChange = (date, dateString) => {
    const removeDups = (data) => {
      let newArray = [];

      let uniqueObject = {};

      for (let i in data) {
        uniqueObject[data[i].id] = data[i];
      }

      for (let i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }
      return newArray;
    };
    let radioValue = this.state.radioValue;
    if (radioValue == 0) {
      let year = date.format("YYYY");
      let month = date.format("M");
      let day = date.format("D");

      let link =
        "http://127.0.0.1:8000/api/details/" + year + "/" + month + "/" + day;
      axios.get(link).then((res) => {
        let data = removeDups(res.data);
        let date = {
          year: year,
          month: month,
          day: day,
        };

        this.setState({
          date: dateString,
          detaildate: date,
          modaldate: date,
          datedata: data,
        });
      });
    } else if (radioValue == 1) {
      let year = date.format("YYYY");
      let month = date.format("M");

      let link = "http://127.0.0.1:8000/api/details/" + year + "/" + month;
      axios.get(link).then((res) => {
        let data = removeDups(res.data);
        let date = {
          year: year,
          month: month,
          day: null,
        };
        this.setState({
          date: dateString,
          detaildate: date,
          modaldate: date,
          datedata: data,
        });
      });
    }
  };
  onChange2 = (e) => {
    this.setState({
      radioValue: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
    const { radioValue } = this.state;
    const { visible, loading } = this.state;
    return (
      <div>
        <div className=" today  container-fluid  .flex-fill">
          <div className="card  mb-4">
            <div className="card-header ">
              <h3 className="font-weight-bold center">
                detections pour aujourd'hui
              </h3>
            </div>

            <div className="card-body .flex-fill">
              <div className="d-flex flex-column flex-sm-column	flex-md-column flex-lg-row  p-2 bd-highlight d-flex align-items-stretch">
                <div className=" card container-fluid  ">
                  <div className="card-body container-fluid  d-flex flex-wrap">
                    {this.renderdata(this.state.todaydata, false)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="date  container-fluid  .flex-fill">
          <div className="card  mb-6">
            <div className="card-header ">
              <h3 className="font-weight-bold center">
                detections pour {this.state.date}
              </h3>
              <Radio.Group onChange={this.onChange2} value={radioValue}>
                <Radio style={radioStyle} value={0}>
                  Date
                </Radio>
                <Radio style={radioStyle} value={1}>
                  Month
                </Radio>
              </Radio.Group>

              <DatePicker
                key={this.state.radioValue}
                onChange={this.onChange}
                picker={this.state.datePickerValue[this.state.radioValue]}
              />
            </div>

            <div className="card-body .flex-fill">
              <div className="d-flex flex-column flex-sm-column	flex-md-column flex-lg-row  p-2 bd-highlight d-flex align-items-stretch">
                <div className=" card container-fluid  align-items-stretch ">
                  <div className="card-body container-fluid  d-flex flex-wrap align-items-stretch justify-content-around">
                    {this.renderdata(this.state.datedata, true)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInfoList;
