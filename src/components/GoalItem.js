import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (<TouchableOpacity activeOpacity={0.5} onPress={props.onDelete}>
        <View style={styles.listItems}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 5,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#ccc'
    }
});

export default GoalItem;
