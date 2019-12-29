import React from 'react';
import { Text, StyleSheet,View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetails';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

const ImageScreen = () =>{
    return <View> 
            <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}
            imageDe
            />
            <ImageDetail 
            title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}
            />
            <ImageDetail 
                title="Sea" 
                imageSource={require('../../assets/sea.jpeg')}
            />
        </View>

};

const styles = StyleSheet.create({  });

export default ImageScreen;