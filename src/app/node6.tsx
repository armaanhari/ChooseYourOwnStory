import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Subbing Alex off calms Marcus and stabilizes the defense, securing a 1-1 draw. After the game, Alex is furious about being pulled and threatens to request a trade through their agent. You schedule a 1-on-1 meeting Monday morning.
        </Text>
      <Link href="/node12" style={styles.button}> Fine Alex a week's pay for poor discipline and media backlash.</Link>

      <Link href="/node13" style={styles.button}> Offer a heart-to-heart talk to understand why Alex came in late and help resolve it.</Link>
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