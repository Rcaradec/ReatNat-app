import React from 'react';
import styled from 'styled-components';

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode='contain' />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: #fad57f;
  height: 60px; 
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.25);
  align-items: center;
  margin: 0 8px;
  `;

const Image = styled.Image`
  height: 45px;
  width: 100px;
  border-radius: 12px;;

`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 17px;
  margin-left: 8px;
`;