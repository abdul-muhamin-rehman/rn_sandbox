import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from 'react-native';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function AddGoalHandlerMethod() {
    props.GoalHandler(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.images}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Close" color="#f31282" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#b180f0"
              onPress={AddGoalHandlerMethod}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  images: { width: 100, height: 100, margin: 20 },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  buttonContainer: { flexDirection: 'row', marginTop: 16 },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
