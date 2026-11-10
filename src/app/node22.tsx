import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Double sessions exhaust the players. Two starters pull hamstrings right before the title game.
        </Text>
      <Link href="/ending13" style={styles.button}> Start injured players on pain-relievers.</Link>

      <Link href="/ending14" style={styles.button}> Start hungry reserve players instead.</Link>
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
