import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import NewsListScreen from '../screens/NewsListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <MaterialIcons
      name={'menu'}
      size={24}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerLeft: () => <HeaderLeft />,
    // }}
    >
      <Stack.Screen
        name='NewsList'
        component={NewsListScreen}
        options={{
          title: 'All News',
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name='NewsDetails'
        component={NewsDetailsScreen}
        options={{
          title: 'News Details',
        }}
      />
      {/* <Stack.Screen name='Favorite' component={FavoriteScreen} />
      <Stack.Screen name='About' component={AboutScreen} /> */}
    </Stack.Navigator>
  );
}

function FavoriteNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name='My Favorites' component={FavoriteScreen} />
    </Stack.Navigator>
  );
}

function AboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name='About the App' component={AboutScreen} />
    </Stack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Favorites') {
            iconName = 'favorite';
          }
          return <MaterialIcons name={iconName} size={24} color='black' />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Favorites' component={FavoriteNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name='News' component={TabsNavigator} />
        <Drawer.Screen name='About' component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
