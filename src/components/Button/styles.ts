import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export type ButtonTypeProps = 'primary' | 'secondary' | 'terciary';

type ButtonProps = {
  type: ButtonTypeProps;
  isActive: boolean;
};

export const Container = styled(RectButton)<ButtonProps>`
  flex-direction: row;
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  ${({ type }) =>
    type === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_1};
    `}
  ${({ type }) =>
    type === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
    `}
  ${({ type }) =>
    type === 'terciary' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_5};
    `}
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(14)}px;
  ${({ type }) =>
    type === 'primary' &&
    css`
      color: ${({ theme }) => theme.COLORS.GRAY_7};
    `}
  ${({ type }) =>
    type === 'secondary' &&
    css`
      color: ${({ theme }) => theme.COLORS.GRAY_7};
    `}
    ${({ type }) =>
    type === 'terciary' &&
    css`
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    `};
`;

export const Load = styled.ActivityIndicator.attrs<ButtonProps>(
  ({ type, theme }) => ({
    color: type != 'terciary' ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_2,
  })
)``;
