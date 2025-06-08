import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
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
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    async function checkLogin() {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decoded: DecodedToken = jwtDecode(token);

          const roleValue = Array.isArray(decoded.roles)
            ? decoded.roles.includes("ROLE_ADMIN")
              ? "admin"
              : "user"
            : decoded.roles === "ROLE_ADMIN"
            ? "admin"
            : "user";

          setRole(roleValue);
          setUserName(decoded.sub);
        } else {
          setRole(null);
        }
      } catch (error) {
        console.error("Erro ao verificar login:", error);
        setRole(null);
      } finally {
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setRole(null);
    setUserName("");
    Alert.alert("Sessão encerrada");
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#fffed2", "#ffecd1"]}
        style={styles.background}
      />
      <Text style={styles.title}>Sensolux</Text>
      <Text style={styles.subtitle}>Seu aliado contra o calor excessivo.</Text>

      {role && (
        <Text style={{ fontSize: 16, marginVertical: 8 }}>
          Bem-vindo, {userName}!
        </Text>
      )}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Diseases")}
      >
        <Text style={styles.textBtn}>Doenças</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Purchase")}
      >
        <Text style={styles.textBtn}>Comprar Kit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Prevention")}
      >
        <Text style={styles.textBtn}>Prevenção</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Monitor")}
      >
        <Text style={styles.textBtn}>Monitoramento</Text>
      </TouchableOpacity>

      {role === null && (
        <>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.textBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      )}

      {role === "admin" && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("AdminPanel")}
        >
          <Text style={styles.textBtn}>Painel Admin</Text>
        </TouchableOpacity>
      )}

      {role && (
        <TouchableOpacity style={styles.btn} onPress={logout}>
          <Text style={styles.textBtn}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
