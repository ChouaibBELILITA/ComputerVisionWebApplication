import { Table, Button, Space } from "antd";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

const data = [];

class MyTable extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  /*
  componentDidMount() {
    let link = this.props.link;
    console.log(link);
    console.log(this.props.personinfo)
    if (link == null) {
      link = "http://127.0.0.1:8000/api/";
    }
    axios.get(link).then((res) => {
      this.setState({ detections: res.data });
    });
  }*/

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, row) => <a href={"/details/" + row.key}>{text}</a>,
        // filters: [
        //   { text: "Joe", value: "Joe" },
        //   { text: "Jim", value: "Jim" },
        // ],
        // filteredValue: filteredInfo.name || null,
        // onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name < b.name,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        // filters: [
        //   { text: "London", value: "London" },
        //   { text: "New York", value: "New York" },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address < b.address,
        sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}></Space>
        <Table
          columns={columns}
          dataSource={this.props.detections}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detections: [...state.personsInfo],
  };
};
export default connect(mapStateToProps)(MyTable);
