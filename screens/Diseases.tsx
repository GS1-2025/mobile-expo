import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function Diseases() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Doenças Comuns</Text>
      <Text>- Insolação</Text>
      <Text>- Desidratação</Text>
      <Text>- Exaustão térmica</Text>
      <Text>- Cãibras causadas por calor</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
