import {
  Page,
  Container,
  Logo,
  Button,
  TextBody,
  Divider,
} from "../components/activate/style";
import { baseUrl } from "../config/baseUrl.json";
import { Body } from "../components/body";

interface userI {
  id: number | null;
  username: string;
  email: string;
  password: string;
  name: string;
  birthday: string;
  profileImage: string | null;
  description: string | null;
}

function activate(userInfo: userI) {
  const { name } = userInfo;

  const handleWithActivate = async() =>{
    const data = {
      url : `${baseUrl}/activate/${userInfo.id}`,
      options : {
        method : 'PUT',
      }
    }
    
  }

  return (
    <Body>
      <Page>
        <Container>
          <Logo src="/assets/img/logo.png" alt="logo" />
          <TextBody>
            Ola, {name}
            <br />
            Para ativar sua conta clique no botão abaixo
            <br />
            Este link possui validade de um dia
            <br />
            Ao clicar no botão você sera redirecionado para a tela de login onde
            poderá realizar o login normalmente
          </TextBody>
          <Button to="login">
            <i className="fas fa-check-circle"></i>
            Ativar Conta
          </Button>
          <Divider />
        </Container>
      </Page>
    </Body>
  );
}

activate.getInitialProps = async ({ query: { h } }) => {
  const res = await fetch(`${baseUrl}/users?username=${h}`);
  const json = await res.json();
  return json;
};

export default activate;
