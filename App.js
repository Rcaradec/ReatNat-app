import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';
import { Ionicons } from '@expo/vector-icons';
import Logo from './components/Logo';
import Course from './components/Course';
import Menu from './components/Menu';

export default function App() {
  return (
     <Container>
       <Menu />
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
            {logos.map((logo, index) => (
             <Logo
             key= {index} 
             image={logo.image}
             text ={logo.text} 
             />
            ))}
            </ScrollView>
          <Subtitle>Decouvre l'application</Subtitle>
           <ScrollView 
                horizontal={true} 
                style={{ paddingBottom: 30, backgroundColor: '#607058'}} 
                showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Card 
              key={index}
              title={card.title}
              image={card.image}
              logo={card.logo}
              caption={card.caption}
              subtitle={card.subtitle}
              />
              ))}
            </ScrollView>
          <Subtitle>Les cours dispos</Subtitle>
           <ScrollView>
            {courses.map((course, index) => (
              <Course 
              key={index}
              title={course.title}
              subtitle={course.subtitle}
              image={course.image}
              logo={course.logo}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
            />
            ))}
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

 const logos = [
   {
     image:require('./assets/plant-logo.jpg'),
     text:"Plantes"
   },
   {
     image:require('./assets/rocks-logo.jpg'),
     text:"Cailloux"
   },
   {
     image:require('./assets/animal-logo.jpg'),
     text:"Animaux"
   },
   {
     image:require('./assets/swimming-logo.jpg'),
     text:"Natation"
   },
   {
     image:require('./assets/running-logo.jpg'),
     text:"Running"
   },
   {
     image:require('./assets/moto-logo.jpg'),
     text:"Moto"
   },
 ];

 const cards = [
    {
      title:"Nature",
      image:require('./assets/fleur-rose2.jpg'),
      logo:require('./assets/lotus.jpg'),
      caption:"Art Floral",
      subtitle:"Ikebana"
    },
    {
      image:require('./assets/rocks.jpg'),
      logo:require('./assets/lotus.jpg'),
      caption:"Art Cailloucal",
      subtitle:"c'est beau"
    },
    {
      image:require('./assets/lapin.jpg'),
      logo:require('./assets/lotus.jpg'),
      caption:"Animaux",
      subtitle:"Droles"
    }
  ];
   
  const courses = [
    {
      title:"Prototype in InVision Studio",
      subtitle:"10 sections",
      image: require("./assets/background13.jpg"),
      logo:require("./assets/logo-studio.png"),
      author: "Meng To",
      avatar: require("./assets/avatar.jpg"),
      caption: "Design an interactive prototype using Auto-Animate"
    },
    {
      title: "React for Designers",
      subtitle: "12 sections",
      image: require("./assets/background11.jpg"),
      logo: require("./assets/logo-react.png"),
      author: "Meng To",
      avatar: require("./assets/avatar.jpg"),
      caption: "Learn to design and code a React site"
    },
    {
      title: "Design and Code with Framer X",
      subtitle: "10 sections",
      image: require("./assets/background14.jpg"),
      logo: require("./assets/logo-framerx.png"),
      author: "Meng To",
      avatar: require("./assets/avatar.jpg"),
      caption: "Create powerful design and code components for your app"
    },
    {
      title: "Design System in Figma",
      subtitle: "10 sections",
      image: require("./assets/background6.jpg"),
      logo: require("./assets/logo-figma.png"),
      author: "Meng To",
      avatar: require("./assets/avatar.jpg"),
      caption:
        "Complete guide to designing a site using a collaborative design tool"
    }
  ];