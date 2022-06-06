import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import Background from '../organisms/Background';
import {getDeviceId, getUsername} from '../slices/authSlice';
export default () => {
  const deviceId = useSelector(getDeviceId);
  const username = useSelector(getUsername);
  return (
    <Background>
      <Text>
        DashBoard{deviceId} - {username}
      </Text>
    </Background>
  );
};
