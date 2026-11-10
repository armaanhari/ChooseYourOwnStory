import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>PR firm boosts fan engagement to record numbers. The home stadium is an electric sea of support for the final game.
        </Text>
      <Link href="/ending11" style={styles.button}> Rattle the opposition early with maximum home crowd noise & tempo.</Link>

      <Link href="/ending12" style={styles.button}> Pace the game slowly to avoid early mistakes.</Link>
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
