import React, { Component } from "react";
import axios from "axios";

import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  InputNumber,
} from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Avatar from "./uploadImage";
import { Spin } from "antd";

const { Option } = Select;
let fmData = new FormData();

class AddPerson extends Component {
  formRef = React.createRef();

  state = { visible: false, formLoading: false, image: null };
  componentDidMount() {
    let PersonId = this.props.id;
    PersonId = 1;

    let link = "http://127.0.0.1:8000/api/persons/";

    this.setState({
      link,
    });
  }

  showDrawer = () => {
    fmData = new FormData();
    axios.get(this.state.link).then((res) => {
      this.setState({
        visible: true,
      });
      this.formRef.current.setFieldsValue(res.data);
    });
  };
  setLoading = (value) => {
    this.setState({ formLoading: value });
  };

  onFinish = (values) => {
    this.setLoading(true);

    fmData.set("firstName", this.formRef.current.getFieldValue("firstName"));
    fmData.set("familyName", this.formRef.current.getFieldValue("familyName"));

    fmData.set("age", this.formRef.current.getFieldValue("age"));
    fmData.set("gender", this.formRef.current.getFieldValue("gender"));
    fmData.set("address", this.formRef.current.getFieldValue("address"));
    fmData.set("remark", this.formRef.current.getFieldValue("remark"));

    axios
      .post(this.state.link, fmData, {
        headers: {
          "content-type": "multipart/form-data", // do not forget this
        },
      })
      .then((res) => {
        console.log(res);
        this.props.reloadData();
        this.setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.request);
        console.log(error.message);
        this.setLoading(false);
      });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  submitForm = () => {
    this.formRef.current.submit();

    this.onClose();
  };
  addImageLink = (fileLink) => {
    console.log(fileLink);
    this.formRef.current.setFieldsValue({ picture: fileLink });
  };
  changeImage = ({ file, onSuccess }) => {
    setTimeout(() => {
      fmData.set("picture", file);
      onSuccess("ok");
    }, 0);
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <UserAddOutlined /> Ajouter
        </Button>

        <Drawer
          title="Ajouter un nouveau client"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Annuler
              </Button>
              <Button
                onClick={this.submitForm}
                type="primary"
                htmlType="submit"
              >
                Valider
              </Button>
            </div>
          }
        >
          <Spin spinning={this.state.formLoading}>
            <Form
              layout="vertical"
              ref={this.formRef}
              onFinish={this.onFinish}
              hideRequiredMark
            >
              <Row>
                <Form.Item name="picture" rules={[{ required: true }]}>
                  <Avatar
                    sendData={this.changeImage}
                    addtoForm={this.addImageLink}
                  ></Avatar>
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="firstName"
                    label="Nom"
                    rules={[{ required: true, message: "Enter le prenom" }]}
                  >
                    <Input placeholder="Enter le nom" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="familyName"
                    label="Prenom"
                    rules={[{ required: true, message: "Enter le prenom" }]}
                  >
                    <Input placeholder="Enter le prenom" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="gender"
                    label="sexe"
                    rules={[
                      {
                        required: false,
                        message: "Entrer le sex du client",
                      },
                    ]}
                  >
                    <Select placeholder="Entrer le sex du client">
                      <Option value="M">Male</Option>
                      <Option value="F"> Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="age" label="Age">
                    <InputNumber min={0} max={120} />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item
                    name="address"
                    label="Adresse"
                    rules={[
                      { required: false, message: "Entrer l'age du client" },
                    ]}
                  >
                    <Input placeholder="Entrer l'address du client " />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="remark"
                    label="Remark"
                    rules={[
                      {
                        required: false,
                        message: "Entrer un remark",
                      },
                    ]}
                  >
                    <Input.TextArea rows={4} placeholder="Entrer un remark " />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Spin>
        </Drawer>
      </>
    );
  }
}

export default AddPerson;
