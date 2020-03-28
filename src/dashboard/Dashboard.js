import React from "react";
import { Statistic, Card, Row, Col, Icon } from "antd";
import { Table } from "antd";

function Dashboard() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: "left",
      filters: [
        {
          text: "Joe",
          value: "Joe"
        },
        {
          text: "John",
          value: "John"
        }
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0
    },
    {
      title: "Other",
      children: [
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
          width: 150,
          sorter: (a, b) => a.age - b.age
        },
        {
          title: "Address",
          children: [
            {
              title: "Street",
              dataIndex: "street",
              key: "street",
              width: 150
            },
            {
              title: "Block",
              children: [
                {
                  title: "Building",
                  dataIndex: "building",
                  key: "building",
                  width: 100
                },
                {
                  title: "Door No.",
                  dataIndex: "number",
                  key: "number",
                  width: 100
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Company",
      children: [
        {
          title: "Company Address",
          dataIndex: "companyAddress",
          key: "companyAddress",
          width: 200
        },
        {
          title: "Company Name",
          dataIndex: "companyName",
          key: "companyName"
        }
      ]
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      fixed: "right"
    }
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: "John Brown",
      age: i + 1,
      street: "Lake Park",
      building: "C",
      number: 2035,
      companyAddress: "Lake Street 42",
      companyName: "SoftLake Co",
      gender: "M"
    });
  }
  return (
    <div style={{ background: "#ECECEC", padding: "30px" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<Icon type="arrow-up" />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          size="middle"
          // scroll={{ x: "calc(700px + 50%)", y: 240 }}
        />
        ,
      </div>
    </div>
  );
}
export default Dashboard;
