import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

export default function App() {
  const [loaded] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
