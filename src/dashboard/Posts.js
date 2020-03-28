import React from "react";
import { Form, Input, Button } from "antd";

function Posts() {
  return (
    <div>
      <div>
        <h2>Add Parent</h2>
        <p>Fill up the parent details</p>
      </div>
      <Form>
        <h4>Father Name*</h4>
        <Input size="large" placeholder="Father name" style={{ width: 500 }} />
        <br />
        <br />
        <h4>Mother Name*</h4>
        <Input placeholder="Mother name" size="large" style={{ width: 500 }} />
        <br />
        <br />
        <h4>Email</h4>
        <Input placeholder="Enter Email" size="large" style={{ width: 500 }} />
        <br />
        <br />
        <h4>Password*</h4>
        <Input.Password
          placeholder="input password"
          size="large"
          style={{ width: 500 }}
        />
        <h4>Phone Number*</h4>
        <Input placeholder="phone number" size="large" style={{ width: 500 }} />
      </Form>
    </div>
  );
}
export default Posts;
