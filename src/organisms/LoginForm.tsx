import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

type LoginForm = {
  username: string;
  password: string;
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
      <Controller
        name={'username'}
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={'Enter username'}
            />
          );
        }}
      />
      {errors.username && <Text>This is require</Text>}
      <Controller
        name={'password'}
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={'Enter password'}
            />
          );
        }}
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
