import React,{ useEffect, useState } from 'react';
import { View, FlatList,Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
const Profile = () => {
    const posts = 21;
  const followers = 154;
  const following = 278;
  const [myposts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=21');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const renderPostItem = ({ item }) => (
    item.download_url ? <Image source={{ uri: item.download_url }} style={styles.postImage} /> : null
  );
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/man.png')}
        style={styles.profileImage}
      />
      <Text style={styles.username}>Gayathirikumar_18</Text>
      <Text style={styles.bio}>Do or Try :)</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statCount}>{following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <Image
    source={require('../images/feed.png')}
    style={styles.sectionImage}
  />

  <View style={styles.underline} />

      <FlatList
        data={myposts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        numColumns={3} 
        contentContainerStyle={styles.postGrid}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 16,
  },
  sectionImage: {
    width: 24, 
    height: 24,
    marginTop:20,
    marginBottom:20,
    alignItems:'center'
  },
  underline: {
    width: 130,
    alignItems: 'center',
    marginBottom:20,
    borderBottomWidth: 1,
    borderBottomColor: '#E36414', 
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:40,
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  postGrid: {
    alignItems: 'center',
  },
  postImage: {
    width: 100,
    height: 100,
    margin: 4,
  },
});

export default Profile;
