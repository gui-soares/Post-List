/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, Text, View, Dimensions,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Posts from '~/components/Posts';

const { width } = Dimensions.get('window');

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Guilherme Matias Soares',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus turpis, consequat ac libero id, maximus tempus magna. Donec urna tellus, porta quis magna sit amet, mattis malesuada felis. Vivamus cursus nulla id sodales blandit.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Guilherme Matias Soares',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus turpis, consequat ac libero id, maximus tempus magna. Donec urna tellus, porta quis magna sit amet, mattis malesuada felis. Vivamus cursus nulla id sodales blandit.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Guilherme Matias Soares',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus turpis, consequat ac libero id, maximus tempus magna. Donec urna tellus, porta quis magna sit amet, mattis malesuada felis. Vivamus cursus nulla id sodales blandit.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {posts && posts.map(post => <Posts key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
    flexDirection: 'column',
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingBottom: 20,
    paddingTop: 10,
    width,
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
