import React from 'react';  
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';  
import { useNavigation } from '@react-navigation/native';  // Importing useNavigation for navigation between screens
import { LinearGradient } from 'expo-linear-gradient';  // Importing LinearGradient for gradient backgrounds
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';  // Importing specific icons from icon libraries

const LandingPage = () => {
  const navigation = useNavigation();  // Hook to handle screen navigation

  return (
    <LinearGradient
      colors={['#000', '#38b2ac']}  
      style={styles.container}  
    >
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/officiallogomobile.png')}  
          style={styles.logo} 
        />
      </View>

      {/* Content Section: Main Text and Icons */}
      <View style={styles.content}>
        {/* Title Text */}
        <Text style={styles.title}>
          Looking to diagnose your HVAC unit?
        </Text>

        {/* Subtitle Text */}
        <Text style={styles.subtitle}>
          Let us help!
        </Text>

        {/* Icons Section */}
        <View style={styles.iconRow}>
          {/* Icon 1: Diagnostics */}
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="toolbox-outline" size={36} color="#fff" />  {/* Toolbox icon */}
            <Text style={styles.iconLabel}>Diagnostics</Text>  {/* Label under the icon */}
          </View>

          {/* Icon 2: Virtual Help */}
          <View style={styles.iconContainer}>
            <AntDesign name="videocamera" size={36} color="#fff" />  {/* Camera icon */}
            <Text style={styles.iconLabel}>Virtual Help</Text>  {/* Label under the icon */}
          </View>

          {/* Icon 3: Technician Access */}
          <View style={styles.iconContainer}>
            <FontAwesome5 name="user-cog" size={36} color="#fff" />  {/* User settings icon */}
            <Text style={styles.iconLabel}>Technician Access</Text>  {/* Label under the icon */}
          </View>
        </View>

        {/* Button to Navigate to Diagnostics Screen */}
        <TouchableOpacity
          style={styles.button}  
          onPress={() => navigation.navigate('Diagnostics')} 
        >
          <Text style={styles.buttonText}>Get Started</Text>  {/* Button label */}
          <AntDesign name="arrowright" size={24} color="#fff" />  {/* Arrow icon in the button */}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  iconContainer: {
    alignItems: 'center',
    width: '30%',
  },
  iconLabel: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
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
});

export default LandingPage;
