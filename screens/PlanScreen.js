import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlanScreen() {
  const [selectedSeason] = useState('Kharif');

  const cropSuggestions = [
    { id: 1, name: 'Rice', season: 'Kharif', duration: '120 days', waterNeeds: 'High' },
    { id: 2, name: 'Cotton', season: 'Kharif', duration: '160 days', waterNeeds: 'Medium' },
    { id: 3, name: 'Wheat', season: 'Rabi', duration: '140 days', waterNeeds: 'Medium' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Crop Planning</Text>
          <TouchableOpacity style={styles.calendarButton}>
            <FontAwesome5 name="calendar-alt" size={20} color="#2D6A4F" />
          </TouchableOpacity>
        </View>

        {/* Season Selection */}
        <View style={styles.seasonContainer}>
          <TouchableOpacity style={[styles.seasonButton, selectedSeason === 'Kharif' && styles.seasonButtonActive]}>
            <Text style={[styles.seasonText, selectedSeason === 'Kharif' && styles.seasonTextActive]}>Kharif</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.seasonButton, selectedSeason === 'Rabi' && styles.seasonButtonActive]}>
            <Text style={[styles.seasonText, selectedSeason === 'Rabi' && styles.seasonTextActive]}>Rabi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.seasonButton, selectedSeason === 'Zaid' && styles.seasonButtonActive]}>
            <Text style={[styles.seasonText, selectedSeason === 'Zaid' && styles.seasonTextActive]}>Zaid</Text>
          </TouchableOpacity>
        </View>

        {/* Crop Suggestions */}
        <View style={styles.suggestionsContainer}>
          <Text style={styles.sectionTitle}>Recommended Crops</Text>
          <Text style={styles.sectionSubtitle}>Based on your location and season</Text>
          
          {cropSuggestions.map(crop => (
            <TouchableOpacity key={crop.id} style={styles.cropCard}>
              <View style={styles.cropIconContainer}>
                <FontAwesome5 name="seedling" size={24} color="#2D6A4F" />
              </View>
              <View style={styles.cropInfo}>
                <Text style={styles.cropName}>{crop.name}</Text>
                <View style={styles.cropMetrics}>
                  <View style={styles.metricItem}>
                    <FontAwesome5 name="clock" size={12} color="#6B7280" />
                    <Text style={styles.metricText}>{crop.duration}</Text>
                  </View>
                  <View style={styles.metricItem}>
                    <FontAwesome5 name="tint" size={12} color="#6B7280" />
                    <Text style={styles.metricText}>{crop.waterNeeds}</Text>
                  </View>
                </View>
              </View>
              <FontAwesome5 name="chevron-right" size={16} color="#6B7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="plus" size={20} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Add New Crop</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <FontAwesome5 name="history" size={20} color="#2D6A4F" />
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>Crop History</Text>
          </TouchableOpacity>
        </View>
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
    flexGrow: 1,
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
  calendarButton: {
    padding: 8,
    backgroundColor: '#E7F3EF',
    borderRadius: 8,
  },
  seasonContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  seasonButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  seasonButtonActive: {
    backgroundColor: '#2D6A4F',
    borderColor: '#2D6A4F',
  },
  seasonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  seasonTextActive: {
    color: '#FFFFFF',
  },
  suggestionsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  cropCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
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
  cropIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#E7F3EF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cropMetrics: {
    flexDirection: 'row',
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metricText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D6A4F',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  secondaryButton: {
    backgroundColor: '#E7F3EF',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  secondaryButtonText: {
    color: '#2D6A4F',
  },
});