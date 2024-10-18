import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const apiUrl = process.env.REACT_NATIVE_API_URL;

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/login`, formData);
      const token = response.data.token;
      // Store token locally in async storage or secure storage
      setMessage('Login successful');
      navigation.navigate('Home'); // Replace with your home screen navigation
    } catch (error) {
      setMessage(error.response?.data.message || 'Login failed');
    }
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#38b2ac']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />

      <LinearGradient
        colors={['#000000', '#38b2ac']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.topMenu}
      >
        <TouchableOpacity style={styles.menuIcon}>
          <Entypo name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#000000', '#38b2ac']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.card}
        >
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#bbb"
            style={styles.input}
            onChangeText={(value) => handleChange('email', value)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#bbb"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(value) => handleChange('password', value)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
          </TouchableOpacity>

          {message ? <Text style={styles.message}>{message}</Text> : null}

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>Don't have an account? Register here</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <LinearGradient
        colors={['#000000', '#38b2ac']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomMenu}
      >
        <TouchableOpacity style={styles.accountContainer}>
          <FontAwesome5 name="user-alt" size={30} color="#fff" />
          <Text style={styles.bottomIconText}>Account</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topMenu: {
    width: '100%',
    height: 60,
    paddingTop: 10,
    justifyContent: 'center',
  },
  menuIcon: {
    position: 'absolute',
    left: 20,
    top: 10,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#38b2ac',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  message: {
    color: '#ff0000',
    marginTop: 10,
  },
  linkText: {
    color: '#fff',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  bottomMenu: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountContainer: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    alignItems: 'center',
  },
  bottomIconText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Login;
