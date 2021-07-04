import React from 'react';
import styled from 'styled-components';

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar}/>
      <Caption>{props.caption}</Caption>
      <Author>{props.author}</Author>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  width: 335px;
  height: 315px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.5);
`;

const Cover = styled.View`
  height: 215px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  height: 48px;
  width: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255,255,255, 0.8);
  font-weight: 500;
  margin-left: 20px;
  text-transform: uppercase;
  `

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  height: 32px;
  width: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;

`;

const Caption = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: green;
`;

const Author = styled.Text`
  font-size: 13px;
  color: gray;
`;