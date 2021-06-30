import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';
import { Ionicons } from '@expo/vector-icons';
import Logo from './components/Logo';

export default function App() {
  return (
     <Container>
        <ScrollView style={{ height: '100%' }} >
          <TitleBar>
            <Avatar source={ require('./assets/pug.jpg')}/>
            <Title>Welcome back,</Title>
            <Name>Rémi</Name>
            <Ionicons 
                name="notifications-circle-outline" 
                size={32} 
                color="black"
                style={{ position:'absolute', right: 20, top: 5}} />
          </TitleBar>
          <ScrollView 
                style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30  }} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}>
            <Logo 
                image={require('./assets/plant-logo.jpg')}
                text ="Plantes" />
            <Logo 
                image={require('./assets/rocks-logo.jpg')}
                text ="Cailloux" />
            <Logo 
                image={require('./assets/animal-logo.jpg')}
                text ="Animaux" />
          </ScrollView>
          <Subtitle>Decouvre l'application</Subtitle>
          <ScrollView 
                horizontal={true} 
                style={{ paddingBottom: 30, backgroundColor: '#607058'}} 
                showsHorizontalScrollIndicator={false}>
            <Card 
                title="Nature"
                image={require('./assets/fleur-rose2.jpg')}
                logo={require('./assets/lotus.jpg')}
                caption="Art Floral"
                subtitle="Ikebana"

            />
            <Card 
                image={require('./assets/rocks.jpg')}
                logo={require('./assets/lotus.jpg')}
                caption="Art Cailloucal"
                subtitle="c'est beau"

            />
            <Card 
                image={require('./assets/lapin.jpg')}
                logo={require('./assets/lotus.jpg')}
                caption="Animaux"
                subtitle="Droles"

            />
          </ScrollView>
        </ScrollView>
      </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #768c6b;
  `;

  const Title = styled.Text`
    color: orangered;
    font-size: 17px;
  `;


  const Name = styled.Text`
  color: whitesmoke;
  font-size: 21px;

  `;


 const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
 `;

 const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: 10;
 `
 const Subtitle = styled.Text`
  color: white;
  font-weight: 500;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
  text-transform: uppercase;
  padding-bottom: 30px;
 `;