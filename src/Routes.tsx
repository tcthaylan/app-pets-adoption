import App from './App';
import About from './About';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home: App,
    About: About,
  })
);

export default Routes;