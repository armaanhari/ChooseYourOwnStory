import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The fine makes Alex leak locker room frustration to a local reporter. Now sports talk radio is questioning your locker room authority. Do you address the leaks head-on in a team meeting or suspend the suspect?
        </Text>
      <Link href="/node24" style={styles.button}> Hold a closed-door meeting to air out grievances openly.</Link>

      <Link href="/node25" style={styles.button}> Suspend Alex indefinitely until a formal apology is issued.</Link>
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
