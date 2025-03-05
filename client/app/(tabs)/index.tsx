import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Link } from "expo-router"; // ✅ Use Link instead of useNavigation

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Top Illustration */}
      <Image
        source={require("../../assets/images/landing-img.jpeg")}
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

        {/* Get Started Button */}
        <PrimaryButton text="Get Started" onPress={() => {}} />

        {/* Login / Signup Links */}
        <View style={styles.authLinks}>
          <Link href="/auth/login" asChild>
            <TouchableOpacity>
              <Text style={styles.authText}>
                Welcome back? <Text style={styles.linkText}>Login</Text>
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/auth/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.authText}>
                First time here? <Text style={styles.linkText}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

/** 🔥 Reusable Primary Button Component */
const PrimaryButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

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
    width: 100,
    height: 100,
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
    paddingHorizontal: 40,
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
  authLinks: {
    marginTop: 20,
    alignItems: "center",
  },
  authText: {
    fontSize: 14,
    color: "#B0BEC5",
    marginVertical: 5,
  },
  linkText: {
    color: "#F5A623",
    fontWeight: "bold",
  },
});
