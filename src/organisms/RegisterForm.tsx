import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import TextInput from '../molecules/TextInput';

type LoginForm = {
  username: string;
  password: string;
  confirmPassword: string;
};
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
  });

  const onSubmit = (data: LoginForm) => {
    console.log('data', data);
  };
  return (
    <View style={styles.fullWidth}>
      <TextInput
        name={'username'}
        control={control}
        secureTextEntry={false}
        placeholder={'Enter username'}
      />
      {errors.username && <Text>This is require</Text>}

      <TextInput
        name={'password'}
        control={control}
        secureTextEntry={true}
        placeholder={'Enter password'}
      />
      <TextInput
        name={'confirmpassword'}
        control={control}
        secureTextEntry={true}
        placeholder={'Enter confirm password'}
      />
      {errors.password && <Text>This is require</Text>}

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
