import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, TextInput} from 'react-native';
type Props = {
  secureTextEntry: boolean;
  placeholder: string;
  control: any;
  name: string;
};
export default ({secureTextEntry, placeholder, control, name}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{required: true}}
      render={({field: {onChange, onBlur, value}}) => {
        return (
          <TextInput
            style={styles.textInput}
            secureTextEntry={secureTextEntry}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
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
});
