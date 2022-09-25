import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Tooltip, Input } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;f
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`; // sử dụng để xử lý content bị tràn quá height

const WrapperStyled = styled.div`
  height: 100vh;
`


const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0px;
  border: 1px solid rgb(230,230, 230);
  border-radius: 2px;
  
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;
export default function ChatWindow() {
  return (
      <WrapperStyled>
          <HeaderStyled>
            <div className="header__info">
              <p className="header__title">Room 1</p>
              <span className="header__description">Day la room 1</span>
            </div>
            <div>
              <Button icon={<UserAddOutlined />} type="text">
                Mời
              </Button>
              <Avatar.Group
                  size="small"
                  maxCount={2}
                  maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
              >
                <ButtonGroupStyled>
                  <Tooltip title="A">
                    <Avatar>A</Avatar>e
                  </Tooltip>
                  <Tooltip title="B">
                    <Avatar>B</Avatar>
                  </Tooltip>
                  <Tooltip title="C">
                    <Avatar>C</Avatar>
                  </Tooltip>
                </ButtonGroupStyled>
              </Avatar.Group>
            </div>
          </HeaderStyled>
          <ContentStyled>
            <MessageListStyled>
              <Message text="Test" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="abc" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test111" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />
              <Message text="Test222" photoUrl={null} displayName="Hai" createAt="12/02/2022" />

            </MessageListStyled>
            <Form>
              <FormStyled>
                <Form.Item>
                  <Input placeholder="Nhập tin nhắn..." bordered={false} autoComplete="off" />
                </Form.Item>
                <Button type="primary">Gửi</Button>
              </FormStyled>
            </Form>
          </ContentStyled>
      </WrapperStyled>
  );
}
