import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import * as newsAction from '../redux/actions/newsActions';

export default function Card({ navigation, title, description, image, url }) {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(newsAction.toggleFavorites(url));
  };

  const isInFavorites = useSelector((state) => state.news.favorites).some(
    (article) => article.url === url
  );

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsDetails', { url });
      }}
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: image ? image : '' }} style={styles.image} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {title && title.length > 30 ? title.slice(0, 30) + '...' : title}
          </Text>
          <MaterialIcons
            name={isInFavorites ? 'favorite' : 'favorite-border'}
            size={24}
            color='#72bcd4'
            onPress={toggleFavorite}
          />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {description && description.length > 150
              ? description.slice(0, 150) + '...'
              : description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleWrapper: {
    paddingHorizontal: 15,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    marginTop: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  description: {
    fontFamily: 'Ubuntu',
    marginTop: 10,
  },
});
