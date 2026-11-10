import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Trading Marcus brought youth, but defense suffers late in the season. You need one win to enter the postseason playoffs.
        </Text>
      <Link href="/ending5" style={styles.button}> Go all-in on offense, starting 3 attackers.</Link>

      <Link href="/ending6" style={styles.button}> Play ultra-defensive with academy rookies.</Link>
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
