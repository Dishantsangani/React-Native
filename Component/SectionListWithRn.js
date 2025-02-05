import React from 'react';
import {SectionList, Text, View} from 'react-native';

function SectionListWithRn() {
  const users = [
    {
      id: 1,
      name: 'Anil',
      data: ['Node js', 'React Js', 'Mongodb'],
    },
    {
      id: 2,
      name: 'peter',
      data: ['PHP', 'Angular', 'Java'],
    },
    {
      id: 3,
      name: 'Bruce',
      data: ['c', 'c++', 'python'],
    },
  ];
  return (
    <View>
      <Text>SectionListWithRn</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={{fontSize: 20}}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
}

export default SectionListWithRn;
