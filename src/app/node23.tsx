import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Resting the team refreshes morale. The team enters the final week relaxed and confident.
        </Text>
      <Link href="/ending15" style={styles.button}> Play a fun, expressive free-form style.</Link>

      <Link href="/ending16" style={styles.button}> Enforce strict tactical guidelines.</Link>
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
