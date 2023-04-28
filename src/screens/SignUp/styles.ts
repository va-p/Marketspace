import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 48px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const ContentScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const AvatarContainer = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const AvatarButton = styled.View`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
  border-radius: 20px;
`;

export const Image = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 44px;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-bottom: 48px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Footer = styled.View`
  width: 100%;
  gap: 16px;
  padding-bottom: ${getBottomSpace() + 16}px;
`;
