import { Col, Row } from "antd";
import React from "react";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";

export default function Sidebar() {
  return (
    <Row>
      <Col span={24}>
        <UserInfo />
      </Col>
      <Col span={24}>
        <RoomList />
      </Col>
    </Row>
  );
}
