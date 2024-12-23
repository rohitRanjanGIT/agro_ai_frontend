import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [location] = useState('Mumbai, Maharashtra');
  const [currentCrops] = useState([
    { id: 1, name: 'Wheat', status: 'Healthy', progress: 75 },
    { id: 2, name: 'Rice', status: 'Needs Attention', progress: 45 },
    { id: 3, name: 'Cotton', status: 'Healthy', progress: 60 },
  ]);

  const renderProgressBar = (progress) => (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBasr, { width: `${progress}%` }]} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back 👋</Text>
            <View style={styles.locationContainer}>
              <FontAwesome5 name="map-marker-alt" size={16} color="#2D6A4F" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <FontAwesome5 name="user-circle" size={32} color="#2D6A4F" />
          </TouchableOpacity>
        </View>

        {/* Weather Summary */}
        <View style={styles.weatherCard}>
          <View style={styles.weatherInfo}>
            <FontAwesome5 name="sun" size={24} color="#FDB813" />
            <View style={styles.weatherDetails}>
              <Text style={styles.temperature}>32°C</Text>
              <Text style={styles.weatherDescription}>Sunny</Text>
            </View>
          </View>
          <Text style={styles.weatherAdvice}>Perfect day for crop inspection!</Text>
        </View>

        {/* Current Crops Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Current Crops</Text>
          {currentCrops.map((crop) => (
            <View key={crop.id} style={styles.cropCard}>
              <View style={styles.cropHeader}>
                <Text style={styles.cropName}>{crop.name}</Text>
                <Text
                  style={[
                    styles.cropStatus,
                    { color: crop.status === 'Healthy' ? '#2D6A4F' : '#DC2626' },
                  ]}
                >
                  {crop.status}
                </Text>
              </View>
              {renderProgressBar(crop.progress)}
              <Text style={styles.progressText}>{crop.progress}% Growth</Text>
            </View>
          ))}
        </View>

        {/* AI Assistant Button */}
        {/* <TouchableOpacity style={styles.aiButton}>
          <FontAwesome5 name="robot" size={24} color="#FFFFFF" />
          <Text style={styles.aiButtonText}>Ask AI Assistant</Text>
        </TouchableOpacity> */}

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="calendar-plus" size={20} color="#2D6A4F" />
            <Text style={styles.actionText}>Add Crop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="clipboard-list" size={20} color="#2D6A4F" />
            <Text style={styles.actionText}>To-Do</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#4B5563',
  },
  profileButton: {
    padding: 4,
  },
  weatherCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherDetails: {
    marginLeft: 12,
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  weatherDescription: {
    fontSize: 14,
    color: '#4B5563',
  },
  weatherAdvice: {
    marginTop: 8,
    fontSize: 14,
    color: '#059669',
  },
  sectionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  cropCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cropHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cropName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  cropStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2D6A4F',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 6,
  },
  aiButton: {
    backgroundColor: '#2D6A4F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    margin: 20,
    shadowColor: '#2D6A4F',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  aiButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#E7F3EF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    width: '48%',
  },
  actionText: {
    color: '#2D6A4F',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default HomeScreen;