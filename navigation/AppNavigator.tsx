import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Prevention from "../screens/Prevention";
import Diseases from "../screens/Diseases";
import Monitor from "../screens/Monitor";
import Purchase from "../screens/Purchase";
import Login from "../screens/Login";
import AdminPanel from "../screens/AdminPanel";
import Register from "../screens/Register";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Prevention" component={Prevention} />
      <Stack.Screen name="Diseases" component={Diseases} />
      <Stack.Screen name="Monitor" component={Monitor} />
      <Stack.Screen name="Purchase" component={Purchase} />
      <Stack.Screen name="AdminPanel" component={AdminPanel} />
    </Stack.Navigator>
  );
}
