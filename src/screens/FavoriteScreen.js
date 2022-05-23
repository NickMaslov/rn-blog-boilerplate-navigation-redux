import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

export default FavoriteScreen = ({ navigation }) => {
  const articles = useSelector((state) => state.news.favorites);
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
  );
};

const styles = StyleSheet.create({});
