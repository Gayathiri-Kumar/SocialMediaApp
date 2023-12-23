import { Text, View, StyleSheet, TextInput, Image, caption } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
const Addpost = () => {
    const ref=useRef();
    const [imageData,setImageData]=useState(null)

    const openCamera=async()=>{
     const res=await launchCamera({mediaType:'photo'})
     if(!res.didCancel){
        setImageData(res)
    }
}
    const openGallery=async()=>{
     const res=await launchImageLibrary({mediaType:'photo'})
     if(!res.didCancel){
        setImageData(res)
    }
}
    return (
        <View style={styles.container}>
        <TouchableOpacity 
        activeOpacity={1} 
        style={styles.captionBox}
        onPress={()=>{
            ref.current.focus()
        }}>
        <TextInput 
        ref={ref} 
        placeholder="Type Caption here..."
        style={styles.input}
        />
        </TouchableOpacity>
        {imageData!=null && <View style={styles.selectedImageView}>
        <Image source={{uri:imageData.assets[0].uri}} style={styles.selectedImage}/>
        </View>}
        <TouchableOpacity style={[styles.picker, {marginTop: 20}]}
        onPress={()=>{
            openCamera()
        }}>
         <Image source={require('../images/camera.png')} style={styles.Icon}/>
         <Text style={styles.pickertitle}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.picker, {marginTop: 20}]}
        onPress={()=>{
            openGallery()
        }}>
         <Image source={require('../images/picture.png')} style={styles.Icon}/>
         <Text style={styles.pickertitle}>Open Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.postBtn, {backgroundColor:'#E36414'}]}>
    <Text style={styles.posttitle}>Post Now</Text>
</TouchableOpacity>

        </View>
    );
};

export default Addpost
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },captionBox:{
        width:'94%',
        height:130,
        borderWidth:.4,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        borderColor:'#E36414',
        padding:10
    },input:{
        width:'100%',
        fontStyle:'italic'
    },
    picker:{
        width:'90%',
        height:50,
        flexDirection:'row',
        alignSelf:'center',
        borderBottomWidth: 0.4,
        borderBottomColor:'#E36414',
        alignItems:'center',
    },
    Icon: {
        width: 34,
        height:34,
    },
    pickertitle: {
        color: '#E36414',
        marginLeft:15,
        fontSize:18,
        alignSelf:'center'
    },
    selectedImageView: {
        width:'90%',
        height:200,
        marginTop:20,
        borderRadius:10,
        marginBottom:10,
        alignSelf:'center'
    },
    selectedImage:{
        width:'100%',
        height:'100%',
        borderRadius:10,
    },
    postBtn:{
        width:'45%',
        height:50,
        marginTop:20,
        alignSelf:'center',
        justifyContent:'center',
        alignItem:'center',
        borderRadius:10,
        marginTop:20,
    },
    posttitle: {
        color: 'white',
        marginLeft:15,
        fontSize:18,
        alignSelf:'center',
    },
})