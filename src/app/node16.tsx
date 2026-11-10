import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The extra budget allows top-tier rehab tools, but cameras are constantly in the facility. In the playoff semi-final, you face a sudden tactical curveball from the opposing coach.
        </Text>
      <Link href="/ending1" style={styles.button}> Pivot to an aggressive, high-pressing counter-attack.</Link>

      <Link href="/ending2" style={styles.button}> Play conservatively to protect your lead and count on defense.</Link>
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
