import React from "react";
import { ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";

export default function Disease() {
  const riscos = [
    {
      titulo: "🌡️ Insolação",
      descricao: "Exposição prolongada ao sol pode causar insolação, caracterizada por febre alta, tontura e confusão mental. Requer atenção médica imediata.",
    },
    {
      titulo: "🥵 Desidratação",
      descricao: "A perda excessiva de líquidos e sais minerais pode levar à desidratação, causando fraqueza, dor de cabeça e boca seca.",
    },
    {
      titulo: "😵‍💫 Exaustão pelo calor",
      descricao: "Sintomas como suor excessivo, tontura, náusea e pele fria podem indicar exaustão causada pelo calor intenso.",
    },
    {
      titulo: "💔 Agravamento de doenças cardíacas",
      descricao: "Temperaturas elevadas podem sobrecarregar o sistema cardiovascular, sendo perigosas para pessoas com problemas cardíacos.",
    },
    {
      titulo: "👶 Riscos para crianças e idosos",
      descricao: "Esses grupos são mais vulneráveis ao calor extremo e podem sofrer com desidratação ou insolação mais rapidamente.",
    },
    {
      titulo: "🐶 Perigos para animais de estimação",
      descricao: "Pets também sofrem com o calor. Evite passeios em horários quentes e mantenha água fresca disponível.",
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.containerPrevention}>
      <LinearGradient
        colors={['#fffed2', '#ffecd1']}
        style={styles.background}
      />
      <Text style={styles.title}>Doenças e Riscos</Text>

      {riscos.map((risco, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{risco.titulo}</Text>
          <Text style={styles.cardDesc}>{risco.descricao}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
