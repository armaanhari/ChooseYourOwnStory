import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>Protecting Alex builds huge trust between you and your star player. Alex pulled you aside and promised total dedication. Mid-season trade deadline approaches, and an rival club offers a massive cash sum + top draft pick for Marcus.
        </Text>
      <Link href="/node18" style={styles.button}> Accept the trade to rebuild with young talent and cash reserves.</Link>

      <Link href="/node19" style={styles.button}> Decline the trade to keep your veteran defensive anchor for the playoffs.</Link>
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
