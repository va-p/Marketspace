import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const LogoContainer = styled.View`
  padding-top: ${getStatusBarHeight() + 50}px;
  padding-bottom: 72px;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 48px 68px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 56px 48px;
`;
