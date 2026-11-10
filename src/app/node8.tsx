import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Your honesty earns praise from media columnists, but Alex feels betrayed by the public call-out. Headline news picks up the story, generating intense scrutiny. A sports nutrition brand approaches you with an endorsement deal for the team management, but wants exclusive access.
        </Text>
      <Link href="/node16" style={styles.button}> Accept the endorsement deal to boost team funds and medical gear.</Link>

      <Link href="/node17" style={styles.button}> Reject the deal to keep media distractions to a minimum.</Link>
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
