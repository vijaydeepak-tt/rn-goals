import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {

    const [goal, setGoal] = useState('');

    const handleInputChange = (value) => {
        setGoal(value)
    }

    const addGoal = () => {
        props.onAddGoal(goal)
    }

    return (<Modal visible={props.visible}>
        <View style={styles.goalsInputBlock}>
            <TextInput placeholder='Goal'
                style={styles.inputField}
                onChangeText={handleInputChange} value={goal}
            />
            <View style={styles.buttonsBlock}>
                <View>
                    <Button title='Cancel' color='red' onPress={props.onCancel} />
                </View>
                <View>
                    <Button title='Add Goal' onPress={addGoal} />
                </View>
            </View>
        </View>
    </Modal>);
}

const styles = StyleSheet.create({
    goalsInputBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
      inputField: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonsBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;
