import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Rotating starters leads to a mid-season loss, but squad enters playoffs 100% fresh.
        </Text>
      <Link href="/ending31" style={styles.button}> Unveil a brand-new surprise formation in the finals.</Link>

      <Link href="/ending32" style={styles.button}> Return to standard battle-tested formation.</Link>
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
