import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Marcus remains captain and delivers world-class defensive displays. Alex plays brilliantly as a super-sub impact player.
        </Text>
      <Link href="/ending23" style={styles.button}> Keep Alex as permanent bench super-sub.</Link>

      <Link href="/ending24" style={styles.button}> Move Alex back into starting lineup for finals.</Link>
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
