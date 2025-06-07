import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import api from "../services/api"; // importe a instância axios pronta
import { LeituraSensor, Alerta } from "../types";

export default function Monitor() {
  const [dados, setDados] = useState<LeituraSensor[]>([]);
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchDados() {
    setLoading(true);
    try {
      const response = await api.get<LeituraSensor[]>("/dados");
      setDados(response.data);
    } catch (error) {
      alert("Erro ao buscar dados");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchAlertas() {
    setLoading(true);
    try {
      const response = await api.get<Alerta[]>("/alertas");
      console.log("Resposta:", response.data);
      setAlertas(response.data);
    } catch (error: any) {
      console.error(
        "Erro ao buscar alertas:",
        error?.response?.data || error.message
      );
      alert("Erro ao buscar alertas");
    }
  }

  async function fetchMediaTemperatura() {
    setLoading(true);
    try {
      const response = await api.get<{ averageTemperature: number }>(
        "/dashboard/average-temperature-today"
      );
      alert("Temperatura média hoje: " + response.data.averageTemperature);
    } catch (error) {
      alert("Erro ao buscar temperatura média");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitor de Dados</Text>
      <Button title="Carregar Dados" onPress={fetchDados} />
      <Button title="Carregar Alertas" onPress={fetchAlertas} />
      <Button title="Temperatura Média Hoje" onPress={fetchMediaTemperatura} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <Text style={styles.subtitle}>Dados:</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Temperatura: {item.temperatura}</Text>
            <Text>Umidade: {item.umidade}</Text>
          </View>
        )}
      />

      <Text style={styles.subtitle}>Alertas:</Text>
      <FlatList
        data={alertas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.mensagem}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});
