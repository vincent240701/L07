// Copy content from 3A and edit the code to complete exercise 3D

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

const Exercise3D = () => {
    return (
        <View style = {styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue', flex:1}]}>
                Child One
            </Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue' , flex:2}]}>
                Child Two
            </Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue' , flex:3}]}>
                Child Three
            </Text>
        </View>
    );
};

export default Exercise3D;