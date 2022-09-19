import { Avatar, Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const WrapperUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid rga(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
  return (
    <WrapperUserInfo>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="username">ABC</Typography.Text>
      </div>
      <Button ghost>Đăng xuất</Button>
    </WrapperUserInfo>
  );
}
