import React from 'react'

import HeaderBurger from './../../components/Header'
import { Table } from 'antd';

import './Order.css'

function Orders() {
  const dataSource = [
    {
      key: '1',
      ingredients: 'Salad(1) Bacon(2) Cheese(1) Meat(1)',
      price: "4$"
    },
    {
      key: '2',
      ingredients: 'Salad(2) Bacon(4) Cheese(0) Meat(2)',
      price: "8$"
    },
    {
      key: '3',
      ingredients: 'Salad(1) Bacon(1) Cheese(2) Meat(3)',
      price: "10$"
    },
    {
      key: '4',
      ingredients: 'Salad(3) Bacon(0) Cheese(1) Meat(1)',
      price: "2$"
    },
  ];
  const columns = [
    {
      title: 'Ingredients',
      dataIndex: 'ingredients',
      key: 'ingredients',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: text => <a>{text}</a>,
    }
  ]
  return (
    <>
      <HeaderBurger />
      <div className="order">
        <Table className="order-table" dataSource={dataSource} columns={columns} />
      </div>
    </>
  )

}

export default Orders
