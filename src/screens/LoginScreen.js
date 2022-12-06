import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function LoginScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Template de Login</Header>
      <Paragraph>Kit Start</Paragraph>
      
    </Background>
  );
}
