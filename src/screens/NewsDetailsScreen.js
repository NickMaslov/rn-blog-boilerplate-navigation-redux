import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default NewsDetailsScreen = ({ route }) => {
  const articleUrl = route.params.url;
  const { title, description, author, urlToImage } = useSelector((state) =>
    state.news.articles.find((article) => article.url === articleUrl)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.titleContainer}>
        <ImageBackground style={styles.image} source={{ uri: urlToImage }}>
          <Text style={styles.author}>{author}</Text>
          <MaterialIcons />
        </ImageBackground>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    color: 'white',
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Ubuntu',
  },
});
