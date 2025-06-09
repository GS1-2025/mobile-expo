import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles";
import api from "../services/api";
import { LeituraSensor, Alerta } from "../types";

export default function Monitor() {
  const [dados, setDados] = useState<LeituraSensor[]>([]);
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  const [loadingDados, setLoadingDados] = useState(false);
  const [loadingAlertas, setLoadingAlertas] = useState(false);
  const [loadingMediaTemp, setLoadingMediaTemp] = useState(false);

  async function fetchDados() {
    setLoadingDados(true);
    try {
      const response = await api.get<LeituraSensor[]>("/dados");
      if (!response.data || !Array.isArray(response.data)) {
        Alert.alert("Aviso", "Não foi possível carregar os dados.");
        return;
      }
      setDados(response.data);

      // Se o array estiver vazio, alerta:
      if (response.data.length === 0) {
        Alert.alert("Aviso", "Nenhum dado encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      Alert.alert("Erro", "Erro ao buscar dados");
    } finally {
      setLoadingDados(false);
    }
  }

  async function fetchAlertas() {
    setLoadingAlertas(true);
    try {
      const response = await api.get<Alerta[]>("/alertas");
      if (!response.data || !Array.isArray(response.data)) {
        Alert.alert("Aviso", "Não foi possível carregar os alertas.");
        return;
      }
      setAlertas(response.data);

      // Se o array estiver vazio, alerta:
      if (response.data.length === 0) {
        Alert.alert("Aviso", "Nenhum alerta encontrado.");
      }
    } catch (error: any) {
      console.error(
        "Erro ao buscar alertas:",
        error?.response?.data || error.message
      );
      Alert.alert("Erro", "Erro ao buscar alertas");
    } finally {
      setLoadingAlertas(false);
    }
  }

  async function fetchMediaTemperatura() {
    setLoadingMediaTemp(true);
    try {
      const response = await api.get<{ averageTemperature: number }>(
        "/dashboard/average-temperature-today"
      );
      const temp = response.data?.averageTemperature;
      if (temp == null) {
        Alert.alert("Aviso", "Não foi possível obter a temperatura média.");
        return;
      }
      Alert.alert("Temperatura Média", `${temp} ºC`);
    } catch (error) {
      console.error("Erro ao buscar temperatura média:", error);
      Alert.alert("Erro", "Erro ao buscar temperatura média");
    } finally {
      setLoadingMediaTemp(false);
    }
  }

  const carregando = loadingDados || loadingAlertas || loadingMediaTemp;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#fffed2", "#ffecd1"]}
        style={styles.background}
      />

      <Text style={styles.title}>Monitor de Dados</Text>

      <TouchableOpacity style={styles.btnMonitor} onPress={fetchDados}>
        <Text style={styles.textBtn}>Carregar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnMonitor} onPress={fetchAlertas}>
        <Text style={styles.textBtn}>Carregar Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnMonitor}
        onPress={fetchMediaTemperatura}
      >
        <Text style={styles.textBtn}>Temperatura Média Hoje</Text>
      </TouchableOpacity>

      {carregando && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ marginTop: 10 }}
        />
      )}
      <Text style={styles.subtitle}>Dados:</Text>

      {dados.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            fontStyle: "italic",
            color: "gray",
          }}
        >
          Nenhum dado encontrado.
        </Text>
      ) : (
        <FlatList
          data={dados}
          keyExtractor={(item, index) =>
            item?.id?.toString() ?? index.toString()
          }
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Temperatura: {item?.temperatura ?? "N/A"}</Text>
              <Text>Umidade: {item?.umidade ?? "N/A"}</Text>
            </View>
          )}
        />
      )}

      <Text style={styles.subtitle}>Alertas:</Text>

      {alertas.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            fontStyle: "italic",
            color: "gray",
          }}
        >
          Nenhum alerta encontrado.
        </Text>
      ) : (
        <FlatList
          data={alertas}
          keyExtractor={(item, index) =>
            item?.id?.toString() ?? index.toString()
          }
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item?.mensagem ?? "Mensagem não disponível"}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
