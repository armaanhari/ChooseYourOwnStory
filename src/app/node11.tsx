import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>You promise the owner Alex will play, but the team senses you backed down under pressure. Performance declines during mid-week practice. Do you hold an intense double-session workout or host a relaxation recovery day?
        </Text>
      <Link href="/node22" style={styles.button}> Push through with grueling double sessions to force focus.</Link>

      <Link href="/node23" style={styles.button}> Schedule a recovery spa & light training day to relieve stress.</Link>
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
