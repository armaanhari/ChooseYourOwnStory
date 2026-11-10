import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>The owner respects your backbone, giving you full operational authority. However, key sponsors are nervous about squad performance after back-to-back draws. Do you invest remaining budget in analytics tech or dynamic PR representation?
        </Text>
      <Link href="/node20" style={styles.button}> Invest in high-end biometric and tactical analytics software.</Link>

      <Link href="/node21" style={styles.button}> Hire a top-tier PR firm to boost fan engagement and sponsor trust.</Link>
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
