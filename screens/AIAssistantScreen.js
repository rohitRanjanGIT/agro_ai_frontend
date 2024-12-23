// import React, { useState, useCallback } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { FontAwesome5 } from '@expo/vector-icons';

// const AIAssistantScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');

//   const handleSend = useCallback(() => {
//     if (inputText.trim()) {
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { id: Date.now(), text: inputText, sender: 'user' },
//       ]);
//       setInputText('');
//       // Here you would typically call your AI API
//       // For this example, we'll just simulate a response
//       setTimeout(() => {
//         setMessages(prevMessages => [
//           ...prevMessages,
//           { id: Date.now(), text: "I'm your AI assistant. How can I help you with your crops today?", sender: 'ai' },
//         ]);
//       }, 1000);
//     }
//   }, [inputText]);

//   const renderMessage = ({ item }) => (
//     <View style={[styles.messageBubble, item.sender === 'user' ? styles.userMessage : styles.aiMessage]}>
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>AI Assistant</Text>
//       </View>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id.toString()}
//         contentContainerStyle={styles.messageList}
//         inverted
//       />
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.inputContainer}
//       >
//         <TextInput
//           style={styles.input}
//           value={inputText}
//           onChangeText={setInputText}
//           placeholder="Ask your AI assistant..."
//           placeholderTextColor="#6B7280"
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//           <FontAwesome5 name="paper-plane" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   header: {
//     backgroundColor: '#2D6A4F',
//     padding: 16,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   messageList: {
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//     padding: 16,
//   },
//   messageBubble: {
//     maxWidth: '80%',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 8,
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#E7F3EF',
//   },
//   aiMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#FFFFFF',
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#1F2937',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     fontSize: 16,
//     color: '#1F2937',
//   },
//   sendButton: {
//     backgroundColor: '#2D6A4F',
//     borderRadius: 20,
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
// });

// export default AIAssistantScreen;
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const AIAssistantScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = useCallback(() => {
    if (inputText.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Date.now(), text: inputText, sender: 'user' },
      ]);
      setInputText('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { 
            id: Date.now(), 
            text: "I'm your farming assistant. How can I help you with your crops today?", 
            sender: 'ai' 
          },
        ]);
      }, 1000);
    }
  }, [inputText]);

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageBubble,
      item.sender === 'user' ? styles.userMessage : styles.aiMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AI Assistant</Text>
          <Text style={styles.headerSubtitle}>Get instant help with your farming queries</Text>
        </View>

        {/* Chat Area */}
        <View style={styles.chatContainer}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.messageList}
          />
        </View>

        {/* Instructions */}
        {messages.length === 0 && (
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsTitle}>How can I help you?</Text>
            <View style={styles.instructionItem}>
              <FontAwesome5 name="leaf" size={16} color="#2D6A4F" />
              <Text style={styles.instructionText}>Ask about plant diseases</Text>
            </View>
            <View style={styles.instructionItem}>
              <FontAwesome5 name="cloud-sun" size={16} color="#2D6A4F" />
              <Text style={styles.instructionText}>Get weather-based advice</Text>
            </View>
            <View style={styles.instructionItem}>
              <FontAwesome5 name="seedling" size={16} color="#2D6A4F" />
              <Text style={styles.instructionText}>Learn about crop management</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask your farming assistant..."
          placeholderTextColor="#6B7280"
          multiline
        />
        <TouchableOpacity 
          style={styles.sendButton} 
          onPress={handleSend}
        >
          <FontAwesome5 name="paper-plane" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 24,
  },
  messageList: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E7F3EF',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  messageText: {
    fontSize: 16,
    color: '#1F2937',
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
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#2D6A4F',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});

export default AIAssistantScreen;

