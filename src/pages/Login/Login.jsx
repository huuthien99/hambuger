import React from 'react'
import { Tabs, Input, Button, Form } from 'antd'

import HeaderBurger from '../../components/Header'
import './Login.css'

const { TabPane } = Tabs;
function Login() {
  return (
    <div>
      <HeaderBurger />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="SIGN IN" key="1">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="E-mail Address"
              name="email"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 11,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Sign In
        </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="SIGN UP" key="2">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail Address"
              name="email"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 11,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Sign Up
        </Button>
            </Form.Item>
          </Form>
        </TabPane>

      </Tabs>
    </div>
  )
}

export default Login
