import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Alex enters in the 60th minute, full of energy, and delivers a stunning assist to win the opener 1-0! However, in the post-game press conference, journalists push you on why Alex was benched initially. Do you tell the truth about the tardiness or cover for Alex to protect internal team dynamics?
        </Text>
      <Link href="/node8" style={styles.button}> Publicly address the tardiness to set a transparent tone for the press.</Link>

      <Link href="/node9" style={styles.button}> Cover for Alex by citing minor tactical adjustments/rest.</Link>
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