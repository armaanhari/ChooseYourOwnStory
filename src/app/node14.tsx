import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The weekend retreat breaks the ice, but an unscripted video of players messing around goes viral online, causing minor sponsor concern. How do you respond?
        </Text>
      <Link href="/node28" style={styles.button}> Embrace the viral trend and make lighthearted social media content.</Link>

      <Link href="/node29" style={styles.button}> Issue a formal team statement apologizing for unprofessional behavior.</Link>
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
