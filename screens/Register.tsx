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
import axios from "axios";
type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function Register({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  async function handleRegister() {
    setLoading(true);
    setNetworkError(false);
    try {
      const response = await api.post("/auth/register", {
        nome: name,
        email,
        senha: password,
      });

      const token = response.data.token;
      if (token) {
        await AsyncStorage.setItem("token", token);
        navigation.reset({ index: 0, routes: [{ name: "Home" }] });
      } else {
        Alert.alert("Erro", "Token não recebido após cadastro");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && !error.response) {
        setNetworkError(true);
        Alert.alert(
          "Erro de rede",
          "Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente."
        );
      } else {
      }
    } finally {
      setLoading(false);
    }
  }

  {
    networkError && (
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#f00" }]}
        onPress={handleRegister}
      >
        <Text style={styles.textBtn}>Tentar novamente</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#fffed2", "#ffecd1"]}
        style={styles.background}
      />
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />

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
        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
          <Text style={styles.textBtn}>Cadastrar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
