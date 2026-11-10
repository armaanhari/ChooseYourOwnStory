import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Player fatigue catches up in the 80th minute of the final match with a 1-0 lead.
        </Text>
      <Link href="/ending29" style={styles.button}> Use all remaining substitutions immediately.</Link>

      <Link href="/ending30" style={styles.button}> Trust tiring starters to grit it out.</Link>
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
