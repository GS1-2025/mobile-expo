import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { RootStackParamList } from "../types";
import axios from "axios"; // necessário para usar axios.isAxiosError

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", {
        email,
        senha: password,
      });

      console.log("Resposta da API:", response.data); // Diagnóstico

      const token = response?.data?.token;
      if (token) {
        await AsyncStorage.setItem("token", token);
        navigation.reset({ index: 0, routes: [{ name: "Home" }] });
      } else {
        Alert.alert("Erro", "Token não recebido.");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        let mensagem = "Erro desconhecido.";
        if (data && typeof data === "object") {
          mensagem = Object.values(data).join("\n");
        } else if (typeof data === "string") {
          mensagem = data;
        }

        Alert.alert("Erro ao fazer login", mensagem);
      } else {
        Alert.alert("Erro", "Erro inesperado. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#fffed2", "#ffecd1"]}
        style={styles.background}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.textBtn}>Entrar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
