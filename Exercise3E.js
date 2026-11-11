import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: _______________,
        // justifyContent: _______________,
        justifyContent: "space-evenly",
        // justifyContent: _______________,
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

const Exercise3E = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
                Child One
            </Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
                Child Two
            </Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
                Child Three
            </Text>
        </View>
    );
};

export default Exercise3E;