import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import {
  Container,
  AvatarContainer,
  AvatarButton,
  Image,
  ContentScroll,
  Footer,
  Form,
  LogoContainer,
  SubTitle,
  Title,
} from './styles';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import { PencilSimpleLine } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { ControlledInput } from '@components/Form/ControlledInput';

import Avatar from '@assets/Avatar.svg';
import Logo from '@assets/Logo_simple.svg';

import { DATABASE_TOKENS, storageToken } from '@databases/database';

import api from '@api/api';

import { THEME } from '@themes/theme';

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const schema = Yup.object({
  name: Yup.string().required('Insira o seu nome'),
  email: Yup.string()
    .required('Insira o seu e-mail')
    .email('Insira um e-mail válido'),
  phone: Yup.number()
    .required('Insira o seu telefone com DDD')
    .typeError('Insira somente números')
    .min(9, 'Telefones devem ter no mínimo 9 números'),
  password: Yup.string()
    .required('Insira a sua senha')
    .min(6, 'A senha deve ter no mínimo 8 caracteres'),
  confirmPassword: Yup.string()
    .required('Confirme a sua senha')
    .oneOf([Yup.ref('password'), null], 'As senhas não conferem'),
});
export function SignUp({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  async function handleSelectImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  }

  async function handleRegisterAccount(form: FormData) {
    setIsLoading(true);

    try {
      if (!avatar) {
        return Alert.alert(
          'Imagem de perfil',
          'Selecione uma imagem de perfil'
        );
      }

      const newUser = {
        avatar,
        name: form.name,
        email: form.email,
        tel: form.phone,
        password: form.password,
      };

      const { status, statusText, data } = await api.post('users', newUser);
      if (status === 201) {
        /*try {
          storageToken.set(`${DATABASE_TOKENS}`, JSON.stringify(data.))

        } catch (error) {
          console.error(error);
          Alert.alert(`Erro: ${error}`);
        }*/

        Alert.alert('Cadastro de usuário', `${statusText}`);
      }
      console.log(status, statusText);
      reset();
    } catch (error) {
      console.error(error);
      Alert.alert('Cadastro de usuário', `${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ContentScroll>
        <LogoContainer>
          <Logo width={60} height={40} />

          <Title>Boas vindas!</Title>
          <SubTitle>
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </SubTitle>
        </LogoContainer>

        <Form>
          <AvatarContainer onPress={handleSelectImage}>
            {avatar != null ? (
              <Image source={{ uri: avatar }} />
            ) : (
              <Avatar width={88} height={88} />
            )}

            <AvatarButton>
              <PencilSimpleLine size={16} color={THEME.COLORS.GRAY_6} />
            </AvatarButton>
          </AvatarContainer>

          <ControlledInput
            placeholder='Nome'
            autoCapitalize='words'
            autoComplete='name'
            autoCorrect={false}
            name='name'
            control={control}
            error={errors.name}
          />

          <ControlledInput
            placeholder='E-mail'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect={false}
            keyboardType='email-address'
            name='email'
            control={control}
            error={errors.email}
          />

          <ControlledInput
            placeholder='Telefone'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect={false}
            keyboardType='phone-pad'
            name='phone'
            control={control}
            error={errors.phone}
          />

          <ControlledInput
            placeholder='Senha'
            autoCapitalize='none'
            autoComplete='password'
            autoCorrect={false}
            secureTextEntry
            name='password'
            control={control}
            error={errors.password}
          />

          <ControlledInput
            placeholder='Confirmar Senha'
            autoCapitalize='none'
            autoComplete='password'
            autoCorrect={false}
            secureTextEntry
            style={{
              marginBottom: 8,
            }}
            name='confirmPassword'
            control={control}
            error={errors.confirmPassword}
          />

          <Button
            type='primary'
            title='Criar'
            enabled={!isLoading}
            isActive={isLoading}
            onPress={handleSubmit(handleRegisterAccount)}
          />
        </Form>

        <Footer>
          <SubTitle>Já tem uma conta?</SubTitle>

          <Button
            type='terciary'
            title='Ir para o login'
            onPress={() => navigation.goBack()}
          />
        </Footer>
      </ContentScroll>
    </Container>
  );
}
