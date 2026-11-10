import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>You start Alex. Alex scores early, but looks sluggish on defensive tracking, leading to an equalizer by the rival team. Worse, veteran defender Marcus scowls at you on the bench, clearly unhappy with the double standard. During halftime, local press reporters tweet about internal squad friction. How do you handle the locker room?
        </Text>
      <Link href="/node6" style={styles.button}> Sub Alex off at halftime and address the squad's discipline directly.</Link>

      <Link href="/node7" style={styles.button}> Keep Alex on court and tell Marcus to focus on his own play.</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
});