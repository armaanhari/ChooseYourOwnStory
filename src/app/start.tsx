import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>It's the night before the season opener against your fiercest rival. Your star striker, Alex, shows up 30 minutes late to the final tactical meeting, looking visibly exhausted and smelling faintly of street food. Alex claims they were helping a family member, but rumors suggest they were out late at a media launch party. Do you bench Alex for the first half to enforce discipline, or start them anyway to secure a strong offense?
        </Text>
      <Link href="/node2" style={styles.button}> Bench Alex for the first half to send a firm message about accountability.</Link>

      <Link href="/node3" style={styles.button}> Start Alex anyway to ensure maximum offensive power from the opening whistle.</Link>
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