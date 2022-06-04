import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import TextInput from '../molecules/TextInput';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  username: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(4, 'Password length must be greater than 4'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Password must match'),
});
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
      console.log('data', data);
      await AsyncStorage.setItem('@username', data.username);
      await AsyncStorage.setItem('@password', data.password);
    } catch (error) {
      console.log('caught error' + error);
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

      <TextInput
        name={'confirmPassword'}
        control={control}
        secureTextEntry={true}
        placeholder={'Enter confirm password'}
        error={errors.confirmPassword}
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword?.message}</Text>}

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
