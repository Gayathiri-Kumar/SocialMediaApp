import { Text, View, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main');
        }, 4000);
    }, []);
  return (
    <View style={styles.Container}>
    <Image source={require('../images/interaction.png')} style={styles.logo}/>
        <Text style={styles.title}>Connect to the World</Text>
    </View>
  )
}
 
export default Splash
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
    },
    logo: {
        width: '40%',
        height: '30%',
        resizeMode:'contain'
    },
    title: {
        color: '#E36414',
        marginLeft:15,
        fontSize:18,
    
    }
});