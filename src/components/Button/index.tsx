import React from 'react';
import { ButtonTypeProps, Container, Load, Title } from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  type?: ButtonTypeProps;
  icon?: any;
  title: string;
  isActive?: boolean;
};

export function Button({
  type = 'primary',
  icon,
  title,
  isActive = false,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      {icon}
      {isActive ? <Load type={type} /> : <Title type={type}>{title}</Title>}
    </Container>
  );
}
