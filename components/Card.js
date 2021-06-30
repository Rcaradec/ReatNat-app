import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';


const Card = props => (

  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);


export default Card;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  margin-left: 15px;
  margin-top: 20px ;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0,0,0, 0.4);
  `
const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0 ;

  
`;

const Title = styled.Text`
  color: green;
  margin-top: 120px;
  margin-left: 70px;
  font-size: 24px;
  font-weight: bold;
  width: 170px
`;

const Content = styled.View`
  padding-left: 30px;
  flex-direction: row;
  align-items: center;
  align-items: center;
  height: 80px;

`;

const Logo = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 50px;
`;

const Wrapper = styled.View`
  margin-left: 30px;
`;


const Caption = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

const Subtitle = styled.Text`
  font-weight: bold;
  color: pink;
  font-size: 22px;

`;