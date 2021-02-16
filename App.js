import 'react-native-gesture-handler';
import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UserRegistration} from './UserRegistration';
import {UserLogIn} from './UserLogIn';
import {UserLogOut} from './UserLogOut';
import {HelloUser} from './HelloUser';
import {Chat} from './Chat';
import Styles from './Styles';

// Your Parse initialization configuration goes here
Parse.setAsyncStorage(AsyncStorage);

const PARSE_APPLICATION_ID = 'Your_AppId';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_ID = 'Your_Javascript_Key';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
Parse.serverURL = PARSE_HOST_URL;

// Wrap your old app screen in a separate function, so you can create a screen inside the navigator
// You can also declare your screens in a separate file, export and import here to reduce some clutter
function UserRegistrationScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User registration'}
          </Text>
        </View>
        <UserRegistration />
      </SafeAreaView>
    </>
  );
}

function UserLogInScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User login'}
          </Text>
        </View>
        <UserLogIn />
      </SafeAreaView>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' Home'}
          </Text>
        </View>
        <HelloUser />
        <UserLogOut />
      </SafeAreaView>
    </>
  );
}

function ChatScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' Chat'}
          </Text>
        </View>
        <Chat />
      </SafeAreaView>
    </>
  );
}

// This method instantiates and creates a new StackNavigator
const Stack = createStackNavigator();

// Add the stack navigator and inside it you can insert all your app screens, in the desired order
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Login" component={UserLogInScreen} />
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
