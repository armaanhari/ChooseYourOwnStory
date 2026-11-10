import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The open-door session resolves internal tension. Players rally around each other for the championship run.
        </Text>
      <Link href="/ending17" style={styles.button}> Let the players vote on starting tactics.</Link>

      <Link href="/ending18" style={styles.button}> Retain strict manager control on tactics.</Link>
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
