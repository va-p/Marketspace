import styled from 'styled-components/native';

import { THEME } from '@themes/theme';

import { RFValue } from 'react-native-responsive-fontsize';

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  margin-bottom: 8px
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ErrorMessage = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: THEME.COLORS.GRAY_4,
})`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  padding-left: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 6px;
`;
