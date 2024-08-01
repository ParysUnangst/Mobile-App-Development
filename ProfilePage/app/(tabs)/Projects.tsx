import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface Project {
  id: number;
  name: string;
  image: string | null;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'Project 1', image: null },
    { id: 2, name: 'Project 2', image: null },
  ]);

  const pickImage = async (projectId: number) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const updatedProjects = projects.map(project =>
        project.id === projectId ? { ...project, image: result.assets[0].uri } : project
      );
      setProjects(updatedProjects);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {projects.map(project => (
        <View key={project.id} style={styles.project}>
          <Text style={styles.projectName}>{project.name}</Text>
          <TouchableOpacity onPress={() => pickImage(project.id)}>
            <Image 
              style={styles.projectImage}
              source={project.image ? { uri: project.image } : require('../../assets/images/placeholder.png')} 
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  project: {
    marginBottom: 20,
    alignItems: 'center',
  },
  projectName: {
    fontSize: 18,
    marginBottom: 10,
  },
  projectImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default Projects;
