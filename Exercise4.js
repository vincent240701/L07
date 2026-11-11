import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        marginTop: 30,
    },
    child: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[{backgroundColor: 'skyblue'}, styles.child]}>
                <Text>Square 1</Text>
            </View>
            <View style={[{backgroundColor: 'mediumaquamarine'}, styles.child]}>
                <Text>Square 2</Text>
            </View>
            <View style={[{backgroundColor: 'crimson'}, styles.child]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
