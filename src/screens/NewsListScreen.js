import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Card from '../components/Card';
import * as newsAction from '../redux/actions/newsActions';

export default NewsListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsAction.fetchArticles());
  }, [dispatch]);

  const articles = useSelector((state) => state.news.articles);

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => {
        return (
          <Card
            navigation={navigation}
            title={item.title}
            image={item.urlToImage}
            description={item.description}
            url={item.url}
          />
        );
      }}
    />
    // <TouchableOpacity onPress={() => navigation.navigate('NewsDetails')}>
    //   <Card navigation={navigation} />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
