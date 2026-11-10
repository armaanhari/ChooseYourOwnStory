import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Focusing strictly on tactics pays off with a 3-game winning streak, but underlying personal friction remains unaddressed. A crucial championship contender fixture is next.
        </Text>
      <Link href="/node30" style={styles.button}> Stick with your current tactical scheme despite player fatigue.</Link>

      <Link href="/node31" style={styles.button}> Rotate 4 key starters to rest them for the postseason stretch.</Link>
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
