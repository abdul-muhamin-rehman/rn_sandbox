import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: 'pink' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={pressed => {
          pressed && styles.pressedItem; /*for Iphone*/
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'blue',
    marginBottom: 2,
    paddingLeft: 3,
    padding: 0,
  },
  goalText: { color: 'white', padding: 8, borderRadius: 6 },
  pressedItem: { opacity: 0.5 /*for Iphone*/ },
});
