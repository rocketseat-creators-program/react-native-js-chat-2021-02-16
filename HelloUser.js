import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Parse from 'parse/react-native';
import Styles from './Styles';

export const HelloUser = () => {
  // State variable that will hold username value
  const [username, setUsername] = useState('');

  // useEffect is called after the component is initially rendered and
  // after every other render
  useEffect(() => {
    // Since the async method Parse.User.currentAsync is needed to
    // retrieve the current user data, you need to declare an async
    // function here and call it afterwards
    async function getCurrentUser() {
      // This condition ensures that username is updated only if needed
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
      }
    }
    getCurrentUser();
  }, [username]);

  // Note the conditional operator here, so the "Hello" text is only
  // rendered if there is an username value
  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        {username !== '' && <Text>{`Hello ${username}!`}</Text>}
      </View>
    </View>
  );
};
