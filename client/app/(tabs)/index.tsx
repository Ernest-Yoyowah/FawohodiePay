import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top Illustration */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF5fGVufDB8fDB8fHww",
        }}
        style={styles.illustration}
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo */}
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />

        {/* Title & Subtitle */}
        <Text style={styles.title}>Welcome to FawohodiePay</Text>
        <Text style={styles.subtitle}>
          Your Gateway to Financial Freedom. Send money, make payments, and
          manage transactions seamlessly.
        </Text>

        {/* Action Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3D47",
  },
  illustration: {
    width: "100%",
    height: "50%",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#B0BEC5",
    textAlign: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 25,
    backgroundColor: "#F5A623",
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
