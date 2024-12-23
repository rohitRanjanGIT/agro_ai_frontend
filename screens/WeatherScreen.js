import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WeatherScreen() {
  const [location] = useState('Mumbai, Maharashtra');
  
  const weeklyForecast = [
    { id: 1, day: 'Mon', temp: 32, icon: 'sun', condition: 'Sunny' },
    { id: 2, day: 'Tue', temp: 30, icon: 'cloud-sun', condition: 'Partly Cloudy' },
    { id: 3, day: 'Wed', temp: 31, icon: 'cloud', condition: 'Cloudy' },
    { id: 4, day: 'Thu', temp: 29, icon: 'cloud-rain', condition: 'Rain' },
    { id: 5, day: 'Fri', temp: 30, icon: 'cloud-sun', condition: 'Partly Cloudy' },
  ];

  const weatherAlerts = [
    { id: 1, type: 'Heavy Rain', message: 'Expected heavy rainfall tomorrow', severity: 'moderate' },
    { id: 2, type: 'High Temperature', message: 'Heat wave conditions expected', severity: 'high' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with Location */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Weather Forecast</Text>
            <View style={styles.locationContainer}>
              <FontAwesome5 name="map-marker-alt" size={16} color="#2D6A4F" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <FontAwesome5 name="cog" size={20} color="#2D6A4F" />
          </TouchableOpacity>
        </View>

        {/* Current Weather */}
        <View style={styles.currentWeather}>
          <View style={styles.temperatureContainer}>
            <FontAwesome5 name="sun" size={48} color="#FDB813" />
            <Text style={styles.temperature}>32°C</Text>
            <Text style={styles.weatherCondition}>Sunny</Text>
          </View>
          <View style={styles.weatherDetails}>
            <View style={styles.weatherDetail}>
              <FontAwesome5 name="wind" size={16} color="#4B5563" />
              <Text style={styles.detailText}>12 km/h</Text>
            </View>
            <View style={styles.weatherDetail}>
              <FontAwesome5 name="tint" size={16} color="#4B5563" />
              <Text style={styles.detailText}>65%</Text>
            </View>
            <View style={styles.weatherDetail}>
              <FontAwesome5 name="cloud" size={16} color="#4B5563" />
              <Text style={styles.detailText}>10%</Text>
            </View>
          </View>
        </View>

        {/* Weekly Forecast */}
        <View style={styles.forecastContainer}>
          <Text style={styles.sectionTitle}>5-Day Forecast</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weeklyForecast.map(day => (
              <View key={day.id} style={styles.forecastDay}>
                <Text style={styles.dayText}>{day.day}</Text>
                <FontAwesome5 name={day.icon} size={24} color="#4B5563" style={styles.forecastIcon} />
                <Text style={styles.forecastTemp}>{day.temp}°C</Text>
                <Text style={styles.forecastCondition}>{day.condition}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Weather Alerts */}
        <View style={styles.alertsContainer}>
          <Text style={styles.sectionTitle}>Weather Alerts</Text>
          {weatherAlerts.map(alert => (
            <View 
              key={alert.id} 
              style={[
                styles.alertCard,
                alert.severity === 'high' ? styles.highAlert : styles.moderateAlert
              ]}
            >
              <View style={styles.alertHeader}>
                <FontAwesome5 
                  name="exclamation-triangle" 
                  size={20} 
                  color={alert.severity === 'high' ? '#DC2626' : '#F59E0B'} 
                />
                <Text style={styles.alertType}>{alert.type}</Text>
              </View>
              <Text style={styles.alertMessage}>{alert.message}</Text>
            </View>
          ))}
        </View>

        {/* Notification Settings */}
        <TouchableOpacity style={styles.notificationButton}>
          <FontAwesome5 name="bell" size={20} color="#2D6A4F" />
          <Text style={styles.notificationText}>Configure Weather Alerts</Text>
          <FontAwesome5 name="chevron-right" size={16} color="#2D6A4F" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
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
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563',
  },
  settingsButton: {
    padding: 8,
    backgroundColor: '#E7F3EF',
    borderRadius: 8,
  },
  currentWeather: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  temperatureContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 8,
  },
  weatherCondition: {
    fontSize: 18,
    color: '#4B5563',
    marginTop: 4,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  weatherDetail: {
    alignItems: 'center',
  },
  detailText: {
    marginTop: 4,
    fontSize: 14,
    color: '#4B5563',
  },
  forecastContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  forecastDay: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    width: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 8,
  },
  forecastIcon: {
    marginVertical: 8,
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  forecastCondition: {
    fontSize: 12,
    color: '#6B7280',
  },
  alertsContainer: {
    marginBottom: 24,
  },
  alertCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  highAlert: {
    backgroundColor: '#FEE2E2',
  },
  moderateAlert: {
    backgroundColor: '#FEF3C7',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertType: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#1F2937',
  },
  alertMessage: {
    fontSize: 14,
    color: '#4B5563',
  },
  notificationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E7F3EF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  notificationText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#2D6A4F',
    fontWeight: '500',
  },
});