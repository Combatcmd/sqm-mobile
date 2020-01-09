import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Search, List} from 'Screens';

const AppNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {headerShown: false},
  },
  List: {
    screen: List,
  },
});

export default createAppContainer(AppNavigator);
