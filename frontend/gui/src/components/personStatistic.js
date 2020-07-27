import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import "./charts.css";
class Charts extends Component {
  state = {
    genderData: {
      labels: [
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
      ],

      datasets: [
        {
          label: "men",
          data: [
            54555,
            4564,
            54456,
            7812,
            87545,
            45275,
            4447,
            7812,
            87545,
            45275,
            0,
            0,
          ],
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
          label: "women",
          data: [
            21656,
            75541,
            87661,
            54576,
            25454,
            45275,
            4447,
            75541,
            87661,
            54576,
            0,
            0,
          ],
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
    },
    ageData: {
      labels: ["<20", "20-29", "30-39", "40-50", "50-59", "60>"],

      datasets: [
        {
          label: "population",
          data: [54555, 4564, 54456, 7812, 87545, 45275],
          backgroundColor: [
            "rgba(9, 2, 214, 0.8)",
            "rgba(214, 9, 11, 0.8)",
            "rgba(9, 214, 33, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
          ],
        },
      ],
    },
  };
  render() {
    return (
      <div className="chart">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Nombres be Persons</h1>
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                cette semaine
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  cet mois
                </a>
                <a className="dropdown-item" href="#">
                  cet anné
                </a>
                <a className="dropdown-item" href="#">
                  depuis le début
                </a>
              </div>
            </div>
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
                        40,000
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
                        Caméra 1
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        21,000
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
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Caméra2
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            10,000
                          </div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              width="50%"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
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
                        Caméras3
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
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

        <div>
          <div>
            {" "}
            <div></div>
            <div></div>
          </div>
          <div>
            {" "}
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="col-xl-12 col-lg-8">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>

            <div className="card-body">
              <div className="chart-Bar pt-4">
                <Bar
                  id="Bar"
                  data={this.state.genderData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>

            <div className="card-body">
              <div className="chart-donut pt-4">
                <Doughnut
                  id="doughnut"
                  data={this.state.ageData}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Line
            data={this.state.genderData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default Charts;
