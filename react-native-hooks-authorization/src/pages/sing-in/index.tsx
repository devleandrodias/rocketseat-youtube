import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../context/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const SingIn: React.FC = () => {
  const {singed, user, singIn} = useContext(AuthContext);

  console.log(singed);
  console.log(user);

  function handleSingIn() {
    singIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSingIn} />
    </View>
  );
};
