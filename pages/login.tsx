import { useEffect, useState } from 'react'
import { Body } from '../components/body'
import { Page, Container, Input, Logo, FormGroup, Button, Divider, PasswordSpy } from '../components/login/style'
import { Icon } from 'semantic-ui-react'
const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState('password')
  const [eyeIcon, setEyeIcon] = useState('far fa-eye')

  const handleWithPasswordSpy = () => {
    if (visible == 'password') {
      setVisible('text')
      setEyeIcon('far fa-eye-slash')
    } else {
      setVisible('password')
      setEyeIcon('far fa-eye')
    }
  }
  
  useEffect(()=>{
    window.scrollTo(0,1);
  },['loading'])

  return (
    <Body >
      <Page>
        <Container>
          <Logo src="/assets/img/logo.png" />
          <FormGroup>
            <label htmlFor="">Login</label>
            <Input id="login" onChange={e => setLogin(e.target.value)} value={login} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="senha">Senha</label>
            <Input id="senha" type={visible} onChange={e => setPassword(e.target.value)} value={password} />
            <PasswordSpy
              onClick={handleWithPasswordSpy}
              className={eyeIcon}
            />
          </FormGroup>
          <Button to="login">
            <i className="fas fa-sign-in-alt"></i>
            Entrar
          </Button>
          <Button to="login">
            <i className="fab fa-google"></i>
            Entrar com Google
          </Button>
          <Divider />
        </Container>
      </Page>
    </Body>
  )
};

export default Login