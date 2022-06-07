import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  navigation?: NavigationProp<any>;
};

export default (props: Props) => {
  const handleLogout = () => {
    props.navigation?.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      {props.title === 'DashBoard' && (
        <TouchableOpacity style={styles.btnLogout} onPress={handleLogout}>
          <Text style={styles.btnLogoutText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,

    backgroundColor: 'green',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnLogout: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: 'pink',

    alignSelf: 'center',
  },
  btnLogoutText: {
    fontSize: 24,
  },
});
