import React from 'react'

import history from './../../utils/history'

import HeaderBurger from './../../components/Header'
import Burger from './../../components/burger/Burger'


import './Checkout.css'
import { Button, Input, Form } from 'antd'

function Checkout() {
  return (
    <>
      <HeaderBurger />
      <div className="checkout">
        <Burger />
        <div className="checkout-content">
          <div className="total-price">
            <p>Price</p>
            <p>5.8$</p>
          </div>
          <div className="checkout-form">
            <Form
              name="basic"
              // labelCol={{
              //   span: 8,
              // }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"

                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Name" style={{ marginTop: 15 }} />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input placeholder="Phone" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>
              <Form.Item
                name="note"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input.TextArea placeholder="Note" />
              </Form.Item>
            </Form>
          </div>
          <Button
            style={{ margin: "10px 0 30px" }}
            type="primary"
            className='checkout-btn'
            onClick={() => history.push("/order")}
          >
            ORDER
          </Button>
        </div>
      </div>
    </>
  )
}

export default Checkout
