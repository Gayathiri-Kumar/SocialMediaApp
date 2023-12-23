import React, { useState, useEffect } from 'react';
import { View,TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const Home = ({ id, title, content, imageUrl }) => {
    const [data, setData] = useState([]);
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
  };
 
  const handleComment = () => {
    setShowCommentInput(true);
  };
  const submitComment = () => {
    if (commentText.trim() !== '') {
      setComments(comments + 1);
      setCommentText('');
      setShowCommentInput(false);
    }
  };

 
  return(
    <View style={styles.post}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}

      <View style={styles.interactions}>
        <TouchableOpacity onPress={() => handleLike(id)}>
        <Image
            source={isLiked ? require('../images/heartin.png') : require('../images/heart.png')}
            style={{ width: 34, height: 34}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleComment(id)}>
        <Image
            source={require('../images/comments.png')}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.metadata}>
        <Text>Likes: {likes}</Text>
        <Text>Comments: {comments}</Text>
      </View>
      {showCommentInput && (
        <View>
          <TextInput
            placeholder="Write a comment..."
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
          />
          <TouchableOpacity onPress={() => submitComment(id)}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
 };

const styles = StyleSheet.create({
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 8,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
