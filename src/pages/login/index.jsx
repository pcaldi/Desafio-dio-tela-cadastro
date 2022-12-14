import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().email('email não é válido').required('Campo obrigatório'),
    password : yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();


const Login = () => {


  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors);


  const onSubmit = data => console.log(data);

    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title> 
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email"   control={control} placeholder= "E-mail" />
                    <Input name="password"  control={control} placeholder= "Senha" type="password"/>
                    <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>          
            </Column>
        </Container>
   

    </>)

}
export { Login }