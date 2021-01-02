import styled from "styled-components";

interface buttonProps {
  to: string;
}

const buttonTheme = (props: buttonProps) => {
  if (props.to == "back") {
    return "#b2102f";
  } else if (props.to == "register") {
    return "#00e266";
  } else if (props.to == "login-facebook") {
    return "#4267B2";
  } else if (props.to == "login-google") {
    return "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);";
  }
};

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Title = styled.h1`
  margin-left: 2em;
  margin-top: -1.4em;
  color : #555555;
`;

const Container = styled.div`
  width: 300px;
  min-height: 55vh;
  border-radius: 5px;
  background: rgb(224, 224, 224);
  color: #555555;
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    //justify-content: center;
    height: 100%;
    width: 100%;
  }
`;
const Logo = styled.img`
  height: 25vh;
  margin: 1rem;
`;
const FormGroup = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top:10px;
`;

const Input = styled.input`
  padding: 2px 5px;
  border: transparent;
  border-radius: 5px;
  line-height: 2rem;
  color: #555555;
  width: 100%;
`;
const Button = styled.button<buttonProps>`
  border: transparent;
  border-radius: 2px;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 80%;
  color: ghostwhite;
  background: ${(props) => buttonTheme(props)};
  font-weight: 600;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    opacity: 0.5;
  }
  > i {
    margin: 10px;
  }
`;
const Divider = styled.div`
  margin-top: 1rem;
  heigth: 1rem;
`;
const PasswordSpy = styled.i`
  align-self: flex-end;
  margin-top: -1.5rem;
  align-self: flex-end;
  margin-right: 0.5rem;
  margin-bottom: 10px;
`;
const BackButton = styled(Button)`
  margin-left: -16rem;
  text-align: left;
  border-radius: 10px 2px 2px 10px;
  max-width: 8em;
  @media (max-width: 700px){
    border-radius: 2px;
    
  }
`;

const Warning = styled.p`
  color: #b2102f;
  margin-top: 8px;
  font-size: 0.8rem;
`

export {
  Container,
  Page,
  Input,
  Logo,
  FormGroup,
  Button,
  Divider,
  PasswordSpy,
  Title,
  BackButton,
  Warning,
};
