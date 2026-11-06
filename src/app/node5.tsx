import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>You keep Alex benched. The game ends in a gritty 0-0 draw. The locker room morale is high regarding team culture, but the team owner calls you that evening, demanding to know why your top-paid star didn't play a single minute in a broadcast rival game.
        </Text>
      <Link href="/node10" style={styles.button}> Stand firm with the owner and explain that culture wins titles in the long run.</Link>

      <Link href="/node11" style={styles.button}> Apologize to the owner and promise Alex will play full minutes next match.</Link>
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