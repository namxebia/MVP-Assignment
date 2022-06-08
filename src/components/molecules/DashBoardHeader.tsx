import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
type Props = {
  username: string;
  lasttimeLogin: string;
};
export default ({username, lasttimeLogin}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>
        {t('welcomeBack')} {username}
      </Text>
      <Text style={styles.contentText}>{lasttimeLogin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,

    alignItems: 'center',
    justifyContent: 'center',

    padding: 8,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,

    backgroundColor: '#FAF0D7',
    justifySelf: 'flex-start',
  },

  contentText: {
    fontSize: 18,
  },
});
