import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>You bench Alex. The team respects your strong leadership, but your attack lacks spark, ending the first half locked in a 0-0 gridlock. In the locker room, veteran defender Marcus urges you to keep Alex on the bench to solidify team unity, while young mid-fielder Leo begs you to put Alex in to break the defense. What do you do?
        </Text>
      <Link href="/node4" style={styles.button}> Bring Alex in for the second half to push for the winning goal.</Link>

      <Link href="/node5" style={styles.button}> Keep Alex on the bench full-game to prove principles matter more than one match.</Link>
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