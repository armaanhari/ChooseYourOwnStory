import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Analytics tech yields key opponent insights, predicting their exact starting setup in the finals!
        </Text>
      <Link href="/ending9" style={styles.button}> Trust the data completely and hard-counter their formation.</Link>

      <Link href="/ending10" style={styles.button}> Trust your gut manager instinct over the data predictions.</Link>
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
