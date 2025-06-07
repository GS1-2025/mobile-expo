import React from "react";
import { View, Text, Linking, Button, StyleSheet } from "react-native";

export default function Purchase() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adquira seu Kit de Sensores</Text>
      <Text style={styles.description}>
        Monitore sua casa com sensores de temperatura, umidade e UV.
      </Text>
      <Button
        title="Comprar agora"
        onPress={() => Linking.openURL("https://loja.exemplo.com/kit")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});
