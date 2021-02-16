import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import Styles from './Styles';

export const UserLogOut = () => {
  const navigation = useNavigation();

  const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!');
        }
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TouchableOpacity onPress={() => doUserLogOut()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Logout'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
