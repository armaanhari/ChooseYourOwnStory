import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Suspending Alex creates a media frenzy and divides fans. The team plays nervous basketball/soccer.
        </Text>
      <Link href="/ending19" style={styles.button}> Reinstate Alex on matchday 1 hour before kickoff.</Link>

      <Link href="/ending20" style={styles.button}> Stick to the suspension regardless of result.</Link>
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
