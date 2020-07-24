import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../context/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Dashboard: React.FC = () => {
  const {singOut, user} = useAuth();

  const handleSingOut = () => singOut();

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sing Out" onPress={handleSingOut} />
    </View>
  );
};
