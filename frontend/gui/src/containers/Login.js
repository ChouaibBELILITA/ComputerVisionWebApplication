import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../store/actions/auth";

import { Form, Input, Button, Checkbox } from "antd";
import { LoadingOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antSpin = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 8,
  },
};

class LoginForm extends Component {
  state = {};
  onFinish = (values) => {
    this.props.onAuth(values.username, values.password);
    this.props.history.push("/");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    return (
      <div>
        <br />
        <br />
        <br />
        {errorMessage}
        {this.props.loading ? (
          antSpin
        ) : (
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Nom d'utilisateur"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Entrer le Nom d'utilisateur!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mot de Passe"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Entrer le Mot de Pass Correct!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Envoyer
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
