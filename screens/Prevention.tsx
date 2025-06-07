  import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";

export default function Prevention() {
  const dicas = [
    {
      titulo: "💧 Hidrate-se com frequência",
      descricao: "Beber água regularmente ajuda a manter a temperatura do corpo, previne desidratação e melhora o funcionamento dos órgãos.",
    },
    {
      titulo: "🌞 Evite exposição ao sol entre 10h e 16h",
      descricao: "Nesse período, os raios UV são mais intensos e aumentam o risco de queimaduras e insolação.",
    },
    {
      titulo: "👕 Use roupas leves e claras",
      descricao: "Elas ajudam a refletir a luz solar e a manter o corpo mais fresco.",
    },
    {
      titulo: "🌀 Permaneça em locais ventilados",
      descricao: "Ambientes arejados ajudam a regular a temperatura corporal e evitam o superaquecimento.",
    },
    {
      titulo: "🧴 Use protetor solar",
      descricao: "Aplique protetor solar com FPS adequado a cada 2 horas para proteger a pele dos raios UV.",
    },
    {
      titulo: "🍉 Consuma alimentos leves",
      descricao: "Frutas, saladas e alimentos com alto teor de água ajudam a manter o corpo hidratado e leve.",
    },
    {
      titulo: "🏖️ Evite atividades físicas intensas no calor",
      descricao: "Prefira se exercitar em horários mais frescos, como de manhã cedo ou no fim da tarde.",
    }
  ];


  return (
    <ScrollView contentContainerStyle={styles.containerPrevention}>
      <LinearGradient
        colors={['#fffed2', '#ffecd1']}
        style={styles.background}
      />
      <Text style={styles.title}>Dicas de Prevenção</Text>

      {dicas.map((dica, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{dica.titulo}</Text>
          <Text style={styles.cardDesc}>{dica.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
