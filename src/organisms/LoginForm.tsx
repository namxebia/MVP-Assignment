import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useSelector} from 'react-redux';
import * as yup from 'yup';
import TextInput from '../molecules/TextInput';
import {getMpin} from '../slices/authSlice';
type LoginForm = {
  mpin: string;
};

const schema = yup
  .object({
    mpin: yup.string().required('MPIN is a required fields'),
  })
  .required();

export default ({handleLogin}: {handleLogin: () => void}) => {
  const mpin = useSelector(getMpin);
  const [mpinError, setMpinError] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    defaultValues: {
      mpin: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      if (mpin === data.mpin) {
        handleLogin();
      } else {
        setMpinError('Wrong MPIN.Please try again');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.fullWidth}>
      <TextInput
        name={'mpin'}
        control={control}
        secureTextEntry={false}
        placeholder={'Enter MPIN'}
        error={errors.mpin}
      />
      {errors.mpin && <Text>{errors.mpin?.message}</Text>}
      {mpinError !== '' && <Text>{mpinError}</Text>}
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
