import React from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

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
          <Text style={styles.title}>
            Looking to diagnose your HVAC unit? Let us help!
          </Text>

          <Text style={styles.description}>
            Get guided troubleshooting with step-by-step instructions, connect with certified technicians, or schedule a service call right from our app.
          </Text>

          <View style={styles.iconRow}>
            <View style={styles.iconContainer}>
              <AntDesign name="videocamera" size={36} color="#38b2ac" />
              <Text style={styles.iconLabel}>Virtual Help</Text>
            </View>

            <View style={styles.iconContainer}>
              <FontAwesome5 name="wrench" size={36} color="#38b2ac" />
              <Text style={styles.iconLabel}>Technician Access</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')} 
          >
            <Text style={styles.buttonText}>Get Connected</Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
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
          <View>
            <FontAwesome5 name="user-alt" size={30} color="#fff" style={styles.bottomIcon} />
            <Text style={styles.bottomIconText}>Account</Text>
          </View>
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
    top: 20,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
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
  bottomMenu: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountContainer: {
    position: 'absolute',
    right: 25,
    bottom: 10,
    alignItems: 'center',
  },
  bottomIcon: {
    marginBottom: 5,
    right: -10,
  },
  bottomIconText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default LandingPage;
