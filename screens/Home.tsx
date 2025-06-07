import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { RootStackParamList } from "../types";
import { DecodedToken } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRole() {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decoded: DecodedToken = jwtDecode(token);
          // Verifica o role no token (ajuste aqui conforme seu formato)
          if (Array.isArray(decoded.roles)) {
            if (decoded.roles.includes("ROLE_ADMIN")) {
              setRole("admin");
            } else {
              setRole("user");
            }
          } else {
            setRole(decoded.roles === "ROLE_ADMIN" ? "admin" : "user");
          }
        } else {
          setRole(null); // não logado
        }
      } catch (error) {
        console.error("Erro ao decodificar token", error);
        setRole(null);
      } finally {
        setLoading(false);
      }
    }
    loadRole();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

/*
  if (!role) {
    // Se não estiver logado
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sensolux</Text>
        <Text style={styles.subtitle}>
          Por favor, faça login para acessar a aplicação.
        </Text>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    );
  }
*/

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fffed2', '#ffecd1']}
        style={styles.background}
      />
      <Text style={styles.title}>Sensolux</Text>
      <Text style={styles.subtitle}>
        Seu aliado contra o calor excessivo.
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Prevention")}
      >
        <Text style={styles.textBtn}>Prevenção</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Diseases")}
      >
        <Text style={styles.textBtn}>Doenças</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Monitor")}
      >
        <Text style={styles.textBtn}>Monitoramento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Purchase")}
      >
        <Text style={styles.textBtn}>Comprar Kit</Text>
      </TouchableOpacity>

      {role === "admin" && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("AdminPanel")}
        >
          <Text>
            Painel Admin
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
