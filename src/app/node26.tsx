import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Naming Alex captain inspires an MVP-caliber performance down the stretch. Marcus, however, sits quietly on the bench.
        </Text>
      <Link href="/ending21" style={styles.button}> Sub Marcus in for final 10 minutes to share the trophy moment.</Link>

      <Link href="/ending22" style={styles.button}> Keep Marcus on the bench to maintain winning rhythm.</Link>
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
