import React from 'react';
import { Text, TextInput, View } from 'react-native';

function MyApp() {

  // EXAMPLE CODE:
  // function getFullName(fName,mName,lName){
  //   return fName + " " + mName + " " + lName;
  // }
  // const pet = "Cat";

  {/* <TextInput
      style={{
      height: 40,
      borderColor: "gray",
      borderWidth: 1
      }}
      defaultValue="Enter input!"/> */}

  return (
    <View>
      <Text>
        Hello, I'm a student in CIS340.
      </Text>
    </View>

  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Welcome to my class!
      </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
    </View>
  )
}
