import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Embracing viral social media creates enormous fan fandom. Stadium sells out for remainder of season.
        </Text>
      <Link href="/ending25" style={styles.button}> Capitalize with high-pressure flashy playstyle.</Link>

      <Link href="/ending26" style={styles.button}> Keep game strategy conservative despite hype.</Link>
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
