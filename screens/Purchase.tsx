import React from "react";
import { View, Text, Linking, Button, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";


export default function Purchase() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fffed2', '#ffecd1']}
        style={styles.background}
      />
      <Text style={styles.titlePurchase}>Adquira seu Kit de Sensores</Text>
      <Text style={styles.subtitle}>
        Monitore sua casa com sensores de temperatura, umidade e UV.
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => Linking.openURL("https://loja.exemplo.com/kit")}
      >
        <Text style={styles.textBtn}>Comprar agora</Text>
      </TouchableOpacity>
    </View>
  );
}


