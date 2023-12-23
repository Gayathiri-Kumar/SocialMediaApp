import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
const Main = () => {
  const navigation=useNavigation()
  const selectedTab=useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SocialWebion</Text>
      {selectedTab==0?<Profile/>:<Feed/>}
      <View style={styles.bottomNav}>
          <Image 
            source={require('../images/house.png')}
            style={styles.tabIcon}
          />
        <TouchableOpacity style={styles.addbutton}
        onPress={()=>{
          navigation.navigate("Addpost")
        }}>
          <Image 
            source={require('../images/add.png')}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}
        onPress={()=>{
          navigation.navigate("Profile")
        }}>
          <Image 
            source={require('../images/man.png')}
            style={styles.tabIcon}
          />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#E36414',
    fontWeight: '700',
    fontSize: 28,
    marginLeft: 20,
  },
  bottomNav: {
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomTab: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 34,
    height: 34,
  },
  addbutton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
