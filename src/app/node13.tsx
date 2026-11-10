import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Your empathetic approach works! Alex opens up about personal struggles and promises total commitment. With Alex fully re-engaged, do you name Alex team captain for the upcoming cup match or keep Marcus as captain?
        </Text>
      <Link href="/node26" style={styles.button}> Make Alex captain to reward emotional growth and boost confidence.</Link>

      <Link href="/node27" style={styles.button}> Retain Marcus as captain to maintain traditional leadership structures.</Link>
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
