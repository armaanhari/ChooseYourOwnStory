import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The formal apology restores sponsor confidence, though team feels slightly micromanaged.
        </Text>
      <Link href="/ending27" style={styles.button}> Loosen control during championship week.</Link>

      <Link href="/ending28" style={styles.button}> Maintain tight discipline until final whistle.</Link>
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
