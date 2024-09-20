import React, { useEffect } from 'react'; 
import { View } from 'react-native';
import { useRouter } from 'expo-router'; 

import { LOGO } from '@/assets/svg';
import styles from './styles';
import { ms } from '@/utils/scalling';


export default function SplashScreen() {
  const router = useRouter(); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.replace('/(tabs)'); 
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <View style={styles.container}>
      <LOGO height={ms(45)} width={"60%"} />
    </View>
  );
}
