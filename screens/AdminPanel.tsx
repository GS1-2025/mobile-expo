import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import api from "../services/api";

export default function AdminPanel() {
  const [avgTemp, setAvgTemp] = useState<number | null>(null);
  const [deviceCount, setDeviceCount] = useState<number | null>(null);
  const [criticalDevices, setCriticalDevices] = useState<number | null>(null);
  const [highTemps, setHighTemps] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const [tempRes, deviceRes, criticalRes, highTempRes] = await Promise.all([
        api.get("/dashboard/average-temperature-today"),
        api.get("/dashboard/device-count"),
        api.get("/dashboard/critical-device-count"),
        api.get("/dashboard/high-temperatures-today"),
      ]);

      setAvgTemp(tempRes.data);
      setDeviceCount(deviceRes.data);
      setCriticalDevices(criticalRes.data);
      setHighTemps(highTempRes.data);
    } catch (err) {
      console.error("Erro ao buscar dados do dashboard", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Carregando dados do painel...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Painel Administrativo</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Temperatura média hoje:</Text>
        <Text style={styles.value}>{avgTemp ?? "N/A"} °C</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total de dispositivos:</Text>
        <Text style={styles.value}>{deviceCount ?? "N/A"}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Dispositivos críticos:</Text>
        <Text style={styles.value}>{criticalDevices ?? "N/A"}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Temperaturas altas hoje:</Text>
        <Text style={styles.value}>{highTemps ?? "N/A"}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "stretch",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
