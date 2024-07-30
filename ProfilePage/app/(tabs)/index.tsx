import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Parys Unangst's Profile Page</Text>
      </View>

      {/* Image Display */}
      <Image 
        style={styles.profileImage}
        source={require('/Users/parys/Mobile-App-Development/ProfilePage/assets/images/Profile.jpg')} // Using local image
      />

         {/* Information Section */}
         <ScrollView style={styles.infoSection}>
            <Text style={styles.infoText}>Welcome to My application! Here, you will find a simple Profile Page using React and Expo.</Text>
            <Text style={styles.infoText}>I am currently a Junior at North Seattle College in the Application Development Program.</Text>
            <Text style={styles.infoText}>I am still very new to Expo but enjoying it thus far.</Text>
            <Text style={styles.infoText}>Please enjoy this simple web app and let me know if you have any questions or feedback.</Text>
            <Text style={styles.infoText}>Thank you</Text>
          </ScrollView>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="What else would you like to know about me?"
          value={comment}
          onChangeText={setComment}
        />
           <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
        {submitted && <Text style={styles.thankYouMessage}>Thank you for visiting!</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 20,
  },
  infoSection: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  submitButton: {
    fontSize: 18,
    color: '#007BFF',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  thankYouMessage: {
    fontSize: 16,
    color: 'green',
    marginTop: 20,
  },
});