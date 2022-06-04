import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import TextInput from '../molecules/TextInput';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginForm = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().email('Email format is invalidate').required(),
    password: yup
      .string()
      .min(4, 'Password length must be greater than 4')
      .required(),
  })
  .required();
export default () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const username = await AsyncStorage.getItem('@username');
      const password = await AsyncStorage.getItem('@password');

      if (username === data.username && password === data.password) {
        console.log('SUCCESS');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.fullWidth}>
      <TextInput
        name={'username'}
        control={control}
        secureTextEntry={false}
        placeholder={'Enter username'}
        error={errors.username}
      />
      {errors.username && <Text>{errors.username?.message}</Text>}

      <TextInput
        name={'password'}
        control={control}
        secureTextEntry={true}
        placeholder={'Enter password'}
        error={errors.password}
      />
      {errors.password && <Text>{errors.password?.message}</Text>}

      <TouchableHighlight
        style={styles.buttonSubmit}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textSubmit}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  textInput: {
    height: 50,
    fontSize: 16,
    backgroundColor: 'white',
    padding: 8,

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,

    marginBottom: 8,
  },

  buttonSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'pink',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  textSubmit: {
    fontSize: 18,
  },
});
