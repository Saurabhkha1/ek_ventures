import React from 'react';
import {  Text, View } from 'react-native';

import styles from './styles';
import strings from '@/constants/Strings';

export default function Report() {
  return (
  
    <View style={styles.container}>
    <Text>{strings.reports}</Text>
     
   </View>
  );
}


