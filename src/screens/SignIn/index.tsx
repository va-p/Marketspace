import React, { useState } from 'react';
import { Container, Footer, Form, LogoContainer, Title } from './styles';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@components/Button';
import { ControlledInput } from '@components/Form/ControlledInput';

import Logo from '@assets/Logo.svg';
import { Platform } from 'react-native';

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object({
  email: Yup.string()
    .required('Insira o seu e-mail')
    .email('Insira um e-mail válido'),
  password: Yup.string().required('Insira a sua senha'),
});

export function SignIn({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  function handleClickRegisterAccount() {
    navigation.navigate('Cadastro');
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Form>
        <LogoContainer>
          <Logo width={193} height={132} />
        </LogoContainer>

        <Title>Acesse sua conta</Title>

        <ControlledInput
          placeholder='E-mail'
          autoComplete='email'
          autoCorrect={false}
          keyboardType='email-address'
          name='email'
          control={control}
          error={errors.email}
        />

        <ControlledInput
          placeholder='Senha'
          autoComplete='password'
          secureTextEntry
          autoCorrect={false}
          name='password'
          control={control}
          error={errors.password}
        />

        <Button type='secondary' title='Entrar' isActive={isLoading} />
      </Form>

      <Footer>
        <Title>Ainda não tem acesso?</Title>

        <Button
          type='terciary'
          title='Criar uma conta'
          onPress={handleClickRegisterAccount}
        />
      </Footer>
    </Container>
  );
}
