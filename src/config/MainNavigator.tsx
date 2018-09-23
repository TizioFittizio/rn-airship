import { createBottomTabNavigator } from 'react-navigation';
import { Constants } from './Constants';
import LoginScreen from '../screens/LoginScreen';

export const MainNavigator = createBottomTabNavigator({
    [Constants.SCREEN_NAME_LOGIN]: { screen: LoginScreen }
    },
    {
        navigationOptions: {
            tabBarVisible: false
        }
    }
)