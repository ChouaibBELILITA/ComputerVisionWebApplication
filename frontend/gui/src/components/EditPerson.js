import React, { createRef, Component } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Avatar from "./uploadImage";
const { Option } = Select;

class EditPerson extends Component {
  formRef = React.createRef();
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  handleSubmit = (e) => {
    console.log("aaaaaaa");
    console.log(e);
  };
  onFinish = (values) => {
    console.log(values);
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  submitForm = () => {
    this.formRef.current.submit();
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> New account
        </Button>
        <Drawer
          title="Add a new Client"
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
                Cancel
              </Button>
              <Button
                onClick={this.submitForm}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          }
        >
          <Form
            layout="vertical"
            ref={this.formRef}
            
            onFinish={this.onFinish}
            hideRequiredMark
          >
            <Row>
              <Avatar></Avatar>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter user name" },
                  ]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: "Please enter url" }]}
                >
                  <Input
                    style={{ width: "100%" }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[
                    { required: true, message: "Please select an owner" },
                  ]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[
                    { required: true, message: "Please choose the type" },
                  ]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[
                    { required: true, message: "Please choose the approver" },
                  ]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "please enter url description",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default EditPerson;
