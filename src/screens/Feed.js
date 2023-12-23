// Feed.js
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import Home from '../screens/Home';

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=21');
        const posts = response.data.map((item, index) => ({
          id: index.toString(),
          title: `Gayathirikumar_18`,
          imageUrl: item.download_url,
        }));
        setData(posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Home id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
