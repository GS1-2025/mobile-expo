import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";
import dev1 from '../assets/dev1.png';
import dev2 from '../assets/dev2.png';
import dev3 from '../assets/dev3.png';

export default function Devs() {
  const devs = [
    {
      nome: "Eric Issamu de Lima Yoshida",
      rm: "RM558763",
      foto: dev1,
    },
    {
      nome: "Gustavo Matias Teixeira",
      rm: "RM555010",
      foto: dev2,
    },
    {
      nome: "Gustavo Monção",
      rm: "RM557515",
      foto: dev3,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["#fffed2", "#ffecd1"]}
        style={styles.background}
      />
      <Text style={styles.title}>Desenvolvedores</Text>

      {devs.map((dev, index) => (
        <View key={index} style={styles.cardDev}>
          <Image source={dev.foto} style={styles.devImage} />
          <View>
            <Text style={styles.cardTitle}>{dev.nome}</Text>
            <Text style={styles.cardDesc}>{dev.rm}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
