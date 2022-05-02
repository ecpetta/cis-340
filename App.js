import React from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png",
    width: 80,
    height: 80
  };
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.image}>

      <Text style={styles.text}> CSU Logo </Text>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "green",
    fontSize: 40,
    fontWeight: 'bold',
  }
});
