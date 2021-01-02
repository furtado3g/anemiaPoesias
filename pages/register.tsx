import { useEffect, useState } from "react";
import { Body } from "../components/body";
import {
  Container,
  Page,
  Input,
  Logo,
  FormGroup,
  Button,
  Divider,
  PasswordSpy,
  BackButton,
  Title
} from "../components/register/styles";

function register() {
  
  const [name,setName] = useState('');
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [date,setDate] = useState(new Date())

  const [visible, setVisible] = useState("password");
  const [eyeIcon, setEyeIcon] = useState("far fa-eye");
  const handleWithPasswordSpy = () => {
    if (visible == "password") {
      setVisible("text");
      setEyeIcon("far fa-eye-slash");
    } else {
      setVisible("password");
      setEyeIcon("far fa-eye");
    }
  };

  return (
    <Body>
      <Page>
        <Container>
        <BackButton
            to="back"
            onClick={()=>{history.go(-1)}}
          >
            <i className="fas fa-chevron-circle-left"></i>
            Voltar
          </BackButton>
          <FormGroup>
            <label htmlFor="name">Nome</label>
            <Input 
              id="name"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="username">Usuário</label>
            <Input 
              id="username"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
              id="email" 
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Senha</label>
            <Input
              id="password" 
              type={visible}
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            <PasswordSpy onClick={handleWithPasswordSpy} className={eyeIcon} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Nascimento</label>
            <Input
              id="email" 
              type="Date"
              value={date}
              onChange={e=>setDate(e.target.value)}
            />
          </FormGroup>
          <Button to="register">
            <i className="far fa-check-circle"></i>
            Registrar
          </Button>
          <Divider/>
        </Container>
      </Page>
    </Body>
  );
}

export default register;
