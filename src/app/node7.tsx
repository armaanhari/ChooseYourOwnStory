import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Alex scores a late winner (2-1 victory), but Marcus refuses to join the team celebration and walks straight down the tunnel. The locker room is divided into two factions: veteran loyalists vs. star-player sympathizers.
        </Text>
      <Link href="/node14" style={styles.button}> Call an emergency team-only bonding retreat over the weekend.</Link>

      <Link href="/node15" style={styles.button}> Ignore the locker room drama and focus entirely on tactical film study.</Link>
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