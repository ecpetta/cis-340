import React from 'react';
import { Text, View, SectionList} from 'react-native';



export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <SectionList
        sections={[
          {title: 'A', data: ['Alabama','Alaska','Arizona','Arkansas']},
          {title: 'B', data: ['California','Colorado','Conneticut']},
          {title: 'C', data: ['Delaware']},
          {title: 'D', data: ['Florida']},
          {title: 'E', data: ['Georgia']},
          {title: 'F', data: ['Hawaii']},
        ]} 

        returnItem={({item}) => <Text style={{padding: 10, fontsize: 20, height: 44}}> {item} </Text>}
        renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#9FA8DA',}}>{section.title}</Text>}
        keyExtractor={(item,index) =>index}
      
      />

    </View>


  );
}