/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Posts = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postAuthor}>{post.author}</Text>
    </View>
    <View style={styles.postContent}>
      <Text style={styles.contentText}>{post.content}</Text>
    </View>
  </View>
);

Posts.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  contentText: {
    color: '#b3b3b3',
  },
  postAuthor: {
    color: '#ccc',
    fontSize: 16,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 230,
    marginBottom: 20,
    padding: 20,
    width: 340,
  },
  postContent: {
    marginTop: 20,
  },
  postHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#f2f2f2',
    height: 65,
  },
  postTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Posts;
