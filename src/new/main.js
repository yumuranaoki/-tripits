import { StackNavigator } from 'react-navigation';
import RootScreen from './root';
import LoginScreen from './login';
import SignupScreen from './signup';

const New = StackNavigator(
  {
    Root: {
      screen: RootScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    initialRouteName: 'Root'
  }
);

export default New;
