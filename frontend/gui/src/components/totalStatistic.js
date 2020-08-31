import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "./charts.css";
import axios from "axios";
import { Radio } from "antd";
import { DatePicker } from "antd";

class Charts extends Component {
  state = {
    datePickerValue: ["date", "month", "year"],
    ageRange: [0, 1, 20, 30, 40, 50, 60, 100],
    ageData: {},
    todaygenderdata: {
      total: 0,
      man: 0,
      woman: 0,
      unknown: 0,
    },
    todayagedata: {
      total: {
        labels: ["NE", "<20", "20-29", "30-39", "40-50", "50-59", "60>"],

        datasets: [
          {
            label: "Age",
            data: [],
            backgroundColor: [
              "rgba(9, 214, 33, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(9, 2, 214, 0.8)",
              "rgba(214, 9, 11, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(75, 159, 33, 0.8)",
            ],
          },
        ],
      },
    },
    radioValue: 1,
    date: "",
    dategenderdata: {
      total: 0,
      man: 0,
      woman: 0,
      unknown: 0,
    },
    dateagedata: {
      total: {
        labels: ["NE", "<20", "20-29", "30-39", "40-50", "50-59", "60>"],

        datasets: [
          {
            label: "Age",
            data: [],
            backgroundColor: [
              "rgba(9, 214, 33, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(9, 2, 214, 0.8)",
              "rgba(214, 9, 11, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(75, 159, 33, 0.8)",
            ],
          },
        ],
      },
    },
  };

  componentDidMount() {
    let setData = async () => {
      let datedata = {};

      var d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      let man = 0;
      let woman = 0;
      let unknown = 0;
      let totalcount = 0;

      let hourslabels = [];
      let hoursinitdata = [];

      for (let i = 0; i < 24; i++) {
        hourslabels[i] = i;
        hoursinitdata[i] = 0;
      }

      let link =
        "http://127.0.0.1:8000/api/gender/" + year + "/" + month + "/" + day;
      axios.get(link).then((res) => {
        let perHour = {};
        perHour.labels = hourslabels;
        perHour.datasets = [
          {
            label: "men",
            data: [...hoursinitdata],
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
            label: "women",
            data: [...hoursinitdata],
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
          {
            label: "non enregistré",
            data: [...hoursinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
        ];

        let dLen = res.data.length;

        for (let i = 0; i < dLen; i++) {
          if (res.data[i].gender == "M") {
            man += res.data[i].person_numbers;
            perHour.datasets[0].data[res.data[i].hour] =
              res.data[i].person_numbers;
          }
          if (res.data[i].gender == "F") {
            woman += res.data[i].person_numbers;
            perHour.datasets[1].data[res.data[i].hour] =
              res.data[i].person_numbers;
          }
          if (res.data[i].gender == "U") {
            unknown += res.data[i].person_numbers;
            perHour.datasets[2].data[res.data[i].hour] =
              res.data[i].person_numbers;
          }
        }

        totalcount = man + woman + unknown;
        datedata.genderdata = {
          total: totalcount,
          man: man,
          woman: woman,
          unknown: unknown,
          allDayData: perHour,
        };
        this.setState({
          todaygenderdata: datedata.genderdata,
        });
      });

      /*Age */
      let range = this.state.ageRange;
      let ageData = this.state.dateagedata.total;

      let perHour = {};
      perHour.labels = hourslabels;
      perHour.datasets = [
        {
          label: "non enregistré",
          data: [...hoursinitdata],
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
          label: "<20",
          data: [...hoursinitdata],
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
        {
          label: "20-29",
          data: [...hoursinitdata],
          backgroundColor: [
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
          ],
        },
        {
          label: "30-39",
          data: [...hoursinitdata],
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
          label: "40-49",
          data: [...hoursinitdata],
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
        {
          label: "50-59",
          data: [...hoursinitdata],
          backgroundColor: [
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
          ],
        },
        {
          label: "60>",
          data: [...hoursinitdata],
          backgroundColor: [
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
            "rgba(120, 99, 132, 0.8)",
          ],
        },
      ];

      let promises = [];

      for (let i = 0; i < range.length - 1; i++) {
        link =
          "http://127.0.0.1:8000/api/age/day/" +
          year +
          "/" +
          month +
          "/" +
          day +
          "/" +
          range[i] +
          "/" +
          range[i + 1];
        promises[i] = axios.get(link);
      }
      let results = await axios.all(promises);
      for (let i = 0; i < range.length - 1; i++) {
        let res = results[i];
        let number = 0;
        for (let j = 0; j < res.data.length; j++) {
          perHour.datasets[i].data[res.data[j].hour] =
            res.data[j].person_numbers;
          number += res.data[j].person_numbers;
        }
        ageData.datasets[0].data[i] = number;
        datedata.agedata = { total: ageData, hours: perHour };
      }

      this.setState({
        todayagedata: datedata.agedata,
      });
    };
    setData();
  }

  /////

  /////
  onChange = (date, dateString) => {
    this.setState({
      date: dateString,
    });

    //
    let getAgeData = async (radioValue) => {
      let datedata = {};
      if (radioValue == 0) {
        let year = date.format("YYYY");
        let month = date.format("M");
        let day = date.format("D");

        let man = 0;
        let woman = 0;
        let unknown = 0;
        let totalcount = 0;

        let hourslabels = [];
        let hoursinitdata = [];

        for (let i = 0; i < 24; i++) {
          hourslabels[i] = i;
          hoursinitdata[i] = 0;
        }

        let link =
          "http://127.0.0.1:8000/api/gender/" + year + "/" + month + "/" + day;
        axios.get(link).then((res) => {
          let perHour = {};
          perHour.labels = hourslabels;
          perHour.datasets = [
            {
              label: "men",
              data: [...hoursinitdata],
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
              label: "women",
              data: [...hoursinitdata],
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
            {
              label: "non enregistré",
              data: [...hoursinitdata],
              backgroundColor: [
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
              ],
            },
          ];

          let dLen = res.data.length;

          for (let i = 0; i < dLen; i++) {
            if (res.data[i].gender == "M") {
              man += res.data[i].person_numbers;
              perHour.datasets[0].data[res.data[i].hour] =
                res.data[i].person_numbers;
            }
            if (res.data[i].gender == "F") {
              woman += res.data[i].person_numbers;
              perHour.datasets[1].data[res.data[i].hour] =
                res.data[i].person_numbers;
            }
            if (res.data[i].gender == "U") {
              unknown += res.data[i].person_numbers;
              perHour.datasets[2].data[res.data[i].hour] =
                res.data[i].person_numbers;
            }
          }

          totalcount = man + woman + unknown;
          datedata.genderdata = {
            total: totalcount,
            man: man,
            woman: woman,
            unknown: unknown,
            allData: perHour,
          };
          this.setState({
            dategenderdata: datedata.genderdata,
          });
        });

        /*Age */
        let range = this.state.ageRange;
        let ageData = this.state.dateagedata.total;

        let perHour = {};
        perHour.labels = hourslabels;
        perHour.datasets = [
          {
            label: "non enregistré",
            data: [...hoursinitdata],
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
            label: "<20",
            data: [...hoursinitdata],
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
          {
            label: "20-29",
            data: [...hoursinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
          {
            label: "30-39",
            data: [...hoursinitdata],
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
            label: "40-49",
            data: [...hoursinitdata],
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
          {
            label: "50-59",
            data: [...hoursinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
          {
            label: "60>",
            data: [...hoursinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
        ];

        let promises = [];

        for (let i = 0; i < range.length - 1; i++) {
          link =
            "http://127.0.0.1:8000/api/age/day/" +
            year +
            "/" +
            month +
            "/" +
            day +
            "/" +
            range[i] +
            "/" +
            range[i + 1];
          promises[i] = axios.get(link);
        }
        let results = await axios.all(promises);
        for (let i = 0; i < range.length - 1; i++) {
          let res = results[i];
          let number = 0;
          for (let j = 0; j < res.data.length; j++) {
            perHour.datasets[i].data[res.data[j].hour] =
              res.data[j].person_numbers;
            number += res.data[j].person_numbers;
          }
          ageData.datasets[0].data[i] = number;
          datedata.agedata = { total: ageData, details: perHour };
        }

        this.setState({
          dateagedata: datedata.agedata,
        });
      } else if (radioValue == 1) {
        let year = date.format("YYYY");
        let month = date.format("M");

        let daysnumber = date.daysInMonth();

        let man = 0;
        let woman = 0;
        let unknown = 0;
        let totalcount = 0;

        let days = [];
        let daysinitdata = [];
        for (let i = 0; i < daysnumber; i++) {
          days[i] = i + 1;
          daysinitdata[i] = 0;
        }

        let link = "http://127.0.0.1:8000/api/gender/" + year + "/" + month;
        axios.get(link).then((res) => {
          let perday = {};
          perday.labels = days;

          perday.datasets = [
            {
              label: "men",
              data: [...daysinitdata],
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
              label: "women",
              data: [...daysinitdata],
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
            {
              label: "non enregistré",
              data: [...daysinitdata],
              backgroundColor: [
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
              ],
            },
          ];
          let dLen = res.data.length;

          for (let i = 0; i < dLen; i++) {
            if (res.data[i].gender == "M") {
              man += res.data[i].person_numbers;

              perday.datasets[0].data[res.data[i].day - 1] =
                res.data[i].person_numbers;
            }
            if (res.data[i].gender == "F") {
              woman += res.data[i].person_numbers;
              perday.datasets[1].data[res.data[i].day - 1] =
                res.data[i].person_numbers;
            }
            if (res.data[i].gender == "U") {
              unknown += res.data[i].person_numbers;
              perday.datasets[2].data[res.data[i].day - 1] =
                res.data[i].person_numbers;
            }
          }

          totalcount = man + woman + unknown;
          datedata.genderdata = {
            total: totalcount,
            man: man,
            woman: woman,
            unknown: unknown,
            allData: perday,
          };
          this.setState({
            dategenderdata: datedata.genderdata,
          });
        });
        /*Age */
        let range = this.state.ageRange;
        let ageData = this.state.dateagedata.total;

        let perday = {};
        perday.labels = days;
        perday.datasets = [
          {
            label: "non enregistré",
            data: [...daysinitdata],
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
            label: "<20",
            data: [...daysinitdata],
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
          {
            label: "20-29",
            data: [...daysinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
          {
            label: "30-39",
            data: [...daysinitdata],
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
            label: "40-49",
            data: [...daysinitdata],
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
          {
            label: "50-59",
            data: [...daysinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
          {
            label: "60>",
            data: [...daysinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
        ];
        let promises = [];

        for (let i = 0; i < range.length - 1; i++) {
          link =
            "http://127.0.0.1:8000/api/age/month/" +
            year +
            "/" +
            month +
            "/" +
            range[i] +
            "/" +
            range[i + 1];

          promises[i] = axios.get(link);
        }
        const results = await axios.all(promises);
        for (let i = 0; i < range.length - 1; i++) {
          let res = results[i];
          let number = 0;
          for (let j = 0; j < res.data.length; j++) {
            perday.datasets[i].data[res.data[j].day - 1] =
              res.data[j].person_numbers;
            number += res.data[j].person_numbers;
          }
          ageData.datasets[0].data[i] = number;
        }
        datedata.agedata = { total: ageData, details: perday };
        this.setState({
          dateagedata: datedata.agedata,
        });
      } else if (radioValue == 2) {
        var months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let year = date.format("YYYY");

        let monthsnumber = 12;

        let man = 0;
        let woman = 0;
        let unknown = 0;
        let totalcount = 0;

        let monthsinitdata = [];
        for (let i = 0; i < monthsnumber; i++) {
          monthsinitdata[i] = 0;
        }

        let link = "http://127.0.0.1:8000/api/gender/" + year;
        axios.get(link).then((res) => {
          let permonth = {};
          permonth.labels = months;

          permonth.datasets = [
            {
              label: "men",
              data: [...monthsinitdata],
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
              label: "women",
              data: [...monthsinitdata],
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
            {
              label: "no enregistré",
              data: [...monthsinitdata],
              backgroundColor: [
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
                "rgba(120, 99, 132, 0.8)",
              ],
            },
          ];
          let dLen = res.data.length;

          for (let i = 0; i < dLen; i++) {
            if (res.data[i].gender == "M") {
              man += res.data[i].person_number;
              console.log(man);
              permonth.datasets[0].data[res.data[i].month - 1] =
                res.data[i].person_number;
            }
            if (res.data[i].gender == "F") {
              woman += res.data[i].person_number;
              permonth.datasets[1].data[res.data[i].month - 1] =
                res.data[i].person_number;
            }
            if (res.data[i].gender == "U") {
              unknown += res.data[i].person_number;
              permonth.datasets[2].data[res.data[i].month - 1] =
                res.data[i].person_number;
            }
          }

          totalcount = man + woman + unknown;

          datedata.genderdata = {
            total: totalcount,
            man: man,
            woman: woman,
            unknown: unknown,
            allData: permonth,
          };
          this.setState({
            dategenderdata: datedata.genderdata,
          });
        });

        /*Age */
        let range = this.state.ageRange;
        let ageData = this.state.dateagedata.total;

        let permonth = {};
        permonth.labels = months;
        permonth.datasets = [
          {
            label: "non enregistré",
            data: [...monthsinitdata],
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
            label: "<20",
            data: [...monthsinitdata],
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
          {
            label: "20-29",
            data: [...monthsinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
          {
            label: "30-39",
            data: [...monthsinitdata],
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
            label: "40-49",
            data: [...monthsinitdata],
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
          {
            label: "50-59",
            data: [...monthsinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
          {
            label: "60>",
            data: [...monthsinitdata],
            backgroundColor: [
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
              "rgba(120, 99, 132, 0.8)",
            ],
          },
        ];
        let promises = [];
        for (let i = 0; i < range.length - 1; i++) {
          link =
            "http://127.0.0.1:8000/api/age/year/" +
            year +
            "/" +
            range[i] +
            "/" +
            range[i + 1];
          promises[i] = axios.get(link);
        }
        let results = await axios.all(promises);
        for (let i = 0; i < range.length - 1; i++) {
          let res = results[i];
          let number = 0;
          for (let j = 0; j < res.data.length; j++) {
            permonth.datasets[i].data[res.data[j].month - 1] =
              res.data[j].person_number;
            number += res.data[j].person_number;
          }
          ageData.datasets[0].data[i] = number;
          datedata.agedata = { total: ageData, details: permonth };
        }

        this.setState({
          dateagedata: datedata.agedata,
        });
      }
    };
    //
    getAgeData(this.state.radioValue);
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

    return (
      <div className="chart">
        <div className=" today  container-fluid  .flex-fill">
          <div className="card  mb-4">
            <div className="card-header ">
              <h3 className="font-weight-bold center">
                Statistics pour aujourd'hui
              </h3>
            </div>

            <div className="card-body .flex-fill">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h5 mb-0 text-gray-800">Nombres be Persons</h1>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Total
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.todaygenderdata.total}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Men
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.todaygenderdata.man}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Women
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.todaygenderdata.woman}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              non enregistré
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.todaygenderdata.unknown}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-column	flex-md-column flex-lg-row  p-2 bd-highlight d-flex align-items-stretch">
                <div className="col-xl-4 d-flex">
                  <div className="card shadow mb-4 .flex-fill">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Age Statistics
                      </h6>
                    </div>

                    <div className="card-body">
                      <div className="chart-donut pt-4">
                        <Doughnut
                          id="doughnut"
                          data={this.state.todayagedata.total}
                          options={{
                            maintainAspectRatio: false,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" d-flex flex-column bd-highlight mb-3 col-lg-6 col-xl-8">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Gender Per Hour
                      </h6>
                    </div>

                    <div className="card-body">
                      <div className="chart-Bar pt-4">
                        <Bar
                          id="Bar"
                          data={this.state.todaygenderdata.allDayData}
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
                  </div>

                  <div className="card shadow  .flex-fill">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Age per Hour
                      </h6>
                    </div>

                    <div className="card-body">
                      <div className="chart-Bar pt-4">
                        <Line
                          data={this.state.todayagedata.hours}
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
                Statistics pour {this.state.date}
              </h3>
              <Radio.Group onChange={this.onChange2} value={radioValue}>
                <Radio style={radioStyle} value={0}>
                  Date
                </Radio>
                <Radio style={radioStyle} value={1}>
                  Month
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Year
                </Radio>
              </Radio.Group>

              <DatePicker
                key={this.state.radioValue}
                onChange={this.onChange}
                picker={this.state.datePickerValue[this.state.radioValue]}
              />
            </div>

            <div className="card-body .flex-fill">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h5 mb-0 text-gray-800">Nombres be Persons</h1>
                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Total
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.dategenderdata.total}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Men
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.dategenderdata.man}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Women
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.dategenderdata.woman}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              non enregistré
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {this.state.dategenderdata.unknown}
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-column	flex-md-column flex-lg-row  p-2 bd-highlight d-flex align-items-stretch">
                <div className="col-xl-4 d-flex">
                  <div className="card shadow mb-4 .flex-fill">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Age Statistics
                      </h6>
                    </div>

                    <div className="card-body">
                      <div className="chart-donut pt-4">
                        <Doughnut
                          id="doughnut"
                          data={this.state.dateagedata.total}
                          options={{
                            maintainAspectRatio: false,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" d-flex flex-column bd-highlight mb-3 col-lg-6 col-xl-8">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Gender Per Hour
                      </h6>
                    </div>

                    <div className="card-body">
                      <div className="chart-Bar pt-4">
                        <Bar
                          id="Bar"
                          data={this.state.dategenderdata.allData}
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
                  </div>

                  <div className="card shadow  .flex-fill">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Age per Hour
                      </h6>
                    </div>

                    <div className="card-body">
                      <div className="chart-Bar pt-4">
                        <Line
                          data={this.state.dateagedata.details}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ,
      </div>
    );
  }
}

export default Charts;
