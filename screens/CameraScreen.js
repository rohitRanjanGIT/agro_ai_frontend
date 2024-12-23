import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CameraScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Plant Analysis</Text>
          <Text style={styles.headerSubtitle}>Capture or upload plant images for health analysis</Text>
        </View>

        {/* Image Preview Area */}
        <View style={styles.previewContainer}>
          {selectedImage ? (
            <Image source={selectedImage} style={styles.previewImage} />
          ) : (
            <View style={styles.placeholderContainer}>
              <FontAwesome5 name="leaf" size={40} color="#2D6A4F" />
              <Text style={styles.placeholderText}>No image selected</Text>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => alert('Opening camera...')}>
            <FontAwesome5 name="camera" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.uploadButton]} onPress={() => alert('Opening gallery...')}>
            <FontAwesome5 name="images" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Upload Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Tips for better analysis:</Text>
          <View style={styles.instructionItem}>
            <FontAwesome5 name="sun" size={16} color="#2D6A4F" />
            <Text style={styles.instructionText}>Ensure good lighting</Text>
          </View>
          <View style={styles.instructionItem}>
            <FontAwesome5 name="crop-alt" size={16} color="#2D6A4F" />
            <Text style={styles.instructionText}>Focus on affected areas</Text>
          </View>
          <View style={styles.instructionItem}>
            <FontAwesome5 name="expand" size={16} color="#2D6A4F" />
            <Text style={styles.instructionText}>Keep the plant in frame</Text>
          </View>
        </View>

        {/* Recent Analyses */}
        <View style={styles.recentContainer}>
          <Text style={styles.recentTitle}>Recent Analyses</Text>
          <Text style={styles.emptyText}>No recent analyses</Text>
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
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  previewContainer: {
    height: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#2D6A4F',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  uploadButton: {
    marginRight: 0,
    marginLeft: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  instructionsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  instructionText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#4B5563',
  },
  recentContainer: {
    marginBottom: 24,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
  },
});