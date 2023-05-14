import { Button, Card, Image, Row, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { Text } = Typography;
  return (
    <div className="div">
      <Card style={{
        height: "900px"
      }}>
        <Row align="center">
        <Title>Welcome to Buket: Book Market!!</Title>
        </Row>
      
        <Row gutter={5} align="center">
        <Image src={logo}></Image>
        </Row>
        <Row gutter={5} align="center">
          <Text>
            Welcome to Buket, where books find new homes. Sell your books with
            ease and connect with passionate readers.<br></br> Join our community and
            share the joy of literature. Happy selling and happy reading!
          </Text>
        </Row>
        <br></br>
        <Row gutter={5} align="center">
        <Space>
            <Link to="/product">
            <Button type="primary" >Browse Products</Button>
            </Link>
          <Link to="/add-product">

          <Button >Sell Products</Button>

          </Link>
           
        </Space>
        </Row>
      </Card>
    </div>
  );
};

export default LandingPage;
