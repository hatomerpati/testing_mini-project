import { Card, Image, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { logo } from "../../assets/assets";

const About = () => {
  const { Text, Link } = Typography;
  return (
    <div className="div">
      <Card>
        <Row justify="center">
          <Title level={2}>About us</Title>
        </Row>
        <Row justify="center" align="center">
          <Image src={logo} width={300}></Image>
        </Row>
        <Row>
          <Text>
            Welcome to Buket: Book Market, your go-to online marketplace for
            selling books! At Buket, we understand the importance of books as a
            gateway to knowledge, imagination, and personal growth. Our platform
            aims to connect book enthusiasts who want to sell their books with
            avid readers seeking new literary treasures.
          </Text>
          <Text><Title level={3}>Our Mission:</Title>  At Buket,
            we envision a world where every book finds its rightful owner and
            continues to inspire and educate. We strive to create an inclusive
            community where people can easily sell their books while fostering a
            love for reading and learning.</Text>
          <Text><Title level={3}>Our Vision:</Title>  At Buket,
           Our Mission: Our mission is to
            provide a user-friendly and secure platform that empowers
            individuals to sell their books hassle-free. We are dedicated to
            creating a seamless experience for both book sellers and buyers,
            promoting sustainable practices, and promoting the joy of reading.</Text>
          <Text>
            <Title level={3}>Why Choose Buket:</Title> Extensive Book Selection: Buket provides access to
            a wide range of books across various genres, ensuring that both
            sellers and buyers find what they're looking for. Safe and Secure
            Transactions: We prioritize the security of our users. Our platform
            utilizes encryption and secure payment gateways to safeguard your
            personal and financial information. Supportive Community: Join our
            vibrant community of book lovers and connect with like-minded
            individuals who share your passion for literature. Engage in
            discussions, share recommendations, and expand your literary
            horizons. Seller Tools and Resources: Buket offers valuable
            resources and guidance to help sellers optimize their listings,
            attract buyers, and maximize their sales potential. Environmental
            Consciousness: We encourage sustainable practices by promoting the
            reuse and recycling of books. By selling your books on Buket, you
            contribute to reducing waste and conserving resources.
          </Text>
        </Row>
      </Card>
    </div>
  );
};

export default About;
