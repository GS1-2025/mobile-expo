import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
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

  if (!role) {
    // Se não estiver logado
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sensolux Chat</Text>
        <Text style={styles.subtitle}>
          Por favor, faça login para acessar a aplicação.
        </Text>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensolux Chat</Text>
      <Text style={styles.subtitle}>
        Seu aliado contra doenças causadas por calor excessivo.
      </Text>

      <Button
        title="Prevenção"
        onPress={() => navigation.navigate("Prevention")}
      />
      <Button title="Doenças" onPress={() => navigation.navigate("Diseases")} />
      <Button
        title="Monitoramento"
        onPress={() => navigation.navigate("Monitor")}
      />
      <Button
        title="Comprar Kit"
        onPress={() => navigation.navigate("Purchase")}
      />

      {role === "admin" && (
        <>
          <Button
            title="Painel Admin"
            onPress={() => navigation.navigate("AdminPanel")}
            color="red"
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 16,
    color: "#555",
  },
});
