import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import ButtonSubmit from '../atoms/ButtonSubmit';
import TextError from '../atoms/TextError';
import TextInput from '../molecules/TextInput';

type RegisterForm = {
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
export default ({
  handleRegister,
}: {
  handleRegister: (data: {username: string}) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterForm>({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      handleRegister({username: data.username});
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
      {errors.username && <TextError>{errors.username?.message}</TextError>}

      <TextInput
        name={'password'}
        control={control}
        secureTextEntry={true}
        placeholder={'Enter password'}
        error={errors.password}
      />
      {errors.password && <TextError>{errors.password?.message}</TextError>}

      <TextInput
        name={'confirmPassword'}
        control={control}
        secureTextEntry={true}
        placeholder={'Enter confirm password'}
        error={errors.confirmPassword}
      />
      {errors.confirmPassword && (
        <TextError>{errors.confirmPassword?.message}</TextError>
      )}

      <ButtonSubmit handleSubmit={handleSubmit(onSubmit)} title={'Submit'} />
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
    backgroundColor: '#8CC0DE',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  textSubmit: {
    fontSize: 18,
  },
});
