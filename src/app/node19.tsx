import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Marcus stays and anchors a historic defensive record! In the title decider, Alex and Marcus execute a perfect set-piece play.
        </Text>
      <Link href="/ending7" style={styles.button}> Instruct Alex to shoot directly from the free-kick.</Link>

      <Link href="/ending8" style={styles.button}> Execute a pass-and-screen routine to Marcus.</Link>
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
