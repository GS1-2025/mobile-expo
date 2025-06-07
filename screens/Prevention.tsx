import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function Prevention() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dicas de Prevenção</Text>
      <Text style={styles.item}>- Hidrate-se com frequência.</Text>
      <Text style={styles.item}>- Evite exposição ao sol entre 10h e 16h.</Text>
      <Text style={styles.item}>- Use roupas leves e claras.</Text>
      <Text style={styles.item}>- Permaneça em locais ventilados.</Text>
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
  item: {
    fontSize: 16,
    marginBottom: 4,
  },
});
