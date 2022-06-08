import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  navigation?: NavigationProp<any>;
};

export default (props: Props) => {
  const {i18n, t} = useTranslation();

  const handleLogout = () => {
    props.navigation?.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <View style={styles.language}>
        <TouchableOpacity
          style={[styles.languageOption]}
          onPress={() => {
            handleChangeLanguage('vn');
          }}>
          <Text style={styles.btnLogoutText}>VN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.languageOption]}
          onPress={() => {
            handleChangeLanguage('en');
          }}>
          <Text style={styles.btnLogoutText}>EN</Text>
        </TouchableOpacity>
      </View>

      {props.title === t('dashboard') && (
        <TouchableOpacity style={styles.btnLogout} onPress={handleLogout}>
          <Text style={styles.btnLogoutText}>{t('logout')}</Text>
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

    backgroundColor: '#3BACB6',
  },
  language: {
    flexDirection: 'row',
  },
  languageOption: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: 'pink',

    alignSelf: 'center',

    marginHorizontal: 8,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  btnLogout: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: '#B3E8E5',

    alignSelf: 'center',
  },
  btnLogoutText: {
    fontSize: 24,
  },
});
