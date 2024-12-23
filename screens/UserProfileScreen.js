import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const UserProfileScreen = ({ navigation }) => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'Mumbai, Maharashtra',
    crops: ['Wheat', 'Rice', 'Cotton'],
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>User Profile</Text>
        </View>

        <View style={styles.profileInfo}>
          <FontAwesome5 name="user-circle" size={80} color="#2D6A4F" />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <FontAwesome5 name="map-marker-alt" size={20} color="#2D6A4F" />
            <Text style={styles.infoText}>{user.location}</Text>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5 name="seedling" size={20} color="#2D6A4F" />
            <Text style={styles.infoText}>{user.crops.join(', ')}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 16,
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 12,
  },
  logoutButton: {
    backgroundColor: '#EF4444',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UserProfileScreen;

