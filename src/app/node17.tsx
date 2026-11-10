import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Keeping media away helps the team focus intensely. You reach the final match in peak physical condition. It comes down to a penalty shootout choice.
        </Text>
      <Link href="/ending3" style={styles.button}> Pick Alex to take the final decisive penalty kick.</Link>

      <Link href="/ending4" style={styles.button}> Pick veteran Marcus for the final kick.</Link>
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
