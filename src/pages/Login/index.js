import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText } from './styles'
import { AuthContext } from '../../contexts/auth'

export default function Login() {
    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const { signUp } = useContext(AuthContext)
    
    function toggleLogin() {
        setLogin(!login)
        setEmail('')
        setName('')
        setPassword('')
    }

    function handleSignIn() {
        if ( email == "" || password == "" ) {
            alert("Preencha todos os campos corretamente")
            return
        }

        // Criar lógica de acesso
    }

    async function handleSignUp() {
        if ( name == "" || email == "" || password == "" ) {
            alert("Preencha todos os campos corretamente")
            return
        }

        // Criar lógia de enviar dados para o firebase e criar e registrar uma nova conta
        await signUp(name, email, password)
    }

    if(login) {
        return (
        <Container>
            <Title>
                Dev<Text style = {{ color: '#E52246'}}>Post</Text>
            </Title>
            
            <Input 
                placeholder = "Seu nome"
                value = { name }
                onChangeText = { ( text ) => setName( text )}
            />

            <Input 
                placeholder = "seuemail@test.com"
                value = { email }
                onChangeText = { ( text ) => setEmail ( text )}
            />

            <Input 
                placeholder = "********"
                value = { password } 
                onChangeText = { ( text ) => setPassword ( text )}
            />

            <Button onPress = { handleSignUp }>
                <ButtonText> Cadastrar </ButtonText>
            </Button>

            <SignUpButton onPress = { toggleLogin }>
                <SignUpText> Já possuo uma conta </SignUpText>
            </SignUpButton>

        </Container>
    )
    }
    return (
        <Container>
            <Title>
                Dev<Text style = {{ color: '#E52246'}}>Post</Text>
            </Title>
            
            <Input 
                placeholder = "seuemail@test.com"
                value = { email }
                onChangeText = { ( text ) => setEmail ( text )}
            />

            <Input 
                placeholder = "********"
                value = { password }
                onChangeText = { ( text ) => setPassword ( text )}
            />

            <Button onPress = { handleSignIn }>
                <ButtonText> Acessar </ButtonText>
            </Button>

            <SignUpButton onPress = { toggleLogin }>
                <SignUpText> Criar uma conta </SignUpText>
            </SignUpButton>

        </Container>
    )
    
}