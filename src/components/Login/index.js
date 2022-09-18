import React from "react";
import { Button, Col, Row, Typography } from "antd";
import firebase, { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  const history = useHistory();
  auth.onAuthStateChanged((user) => {
    console.log({ user });
    if (user) {
      history.push("/");
    }
  });

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}