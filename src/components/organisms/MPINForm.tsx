import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import ButtonSubmit from '../atoms/ButtonSubmit';
import TextError from '../atoms/TextError';
import TextInput from '../molecules/TextInput';

type MPINForm = {
  mpin: string;
  confirmMpin: string;
};

const schema = yup.object({
  mpin: yup.string().required().min(4, 'MPIN length must be greater than 4'),
  confirmMpin: yup
    .string()
    .required()
    .oneOf([yup.ref('mpin')], 'MPIN must match'),
});

export default ({handleMPIN}: {handleMPIN: (data: MPINForm) => void}) => {
  const {t} = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<MPINForm>({
    defaultValues: {
      mpin: '',
      confirmMpin: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: MPINForm) => {
    try {
      handleMPIN(data);
    } catch (error) {
      console.log('caught error' + error);
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
      {errors.mpin && <TextError>{errors.mpin?.message}</TextError>}

      <TextInput
        name={'confirmMpin'}
        control={control}
        secureTextEntry={false}
        placeholder={'Enter confirm MPIN'}
        error={errors.confirmMpin}
      />
      {errors.confirmMpin && (
        <TextError>{errors.confirmMpin?.message}</TextError>
      )}
      <ButtonSubmit handleSubmit={handleSubmit(onSubmit)} title={t('submit')} />
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
    backgroundColor: '#FAF0D7',

    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  textSubmit: {
    fontSize: 18,
  },
});
