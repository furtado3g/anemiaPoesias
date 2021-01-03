import styled from "styled-components";

interface buttonProps {
  to: string;
}

const buttonTheme = (props:buttonProps) =>{
  if(props.to == 'back'){
    return "#b2102f"
  }else if(props.to == 'login'){
    return "#00e266";
  }else if(props.to == 'login-facebook'){
    return "#4267B2"
  }else if(props.to == 'login-google'){
    return "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335);"
  }
}

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
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
const Button = styled.button<buttonProps>`
  border: transparent;
  border-radius: 2px;
  margin-top: 1rem;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  width: 80%;
  color: ghostwhite;
  background: ${(props) => (buttonTheme(props))};
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
const TextBody = styled.p`
  width: 80%;
  font-family: sans-serif;
  text-align: left;
  font-size: 16px;
`
export {
  Container,
  Page,
  Logo,
  Button,
  Divider,
  TextBody,
};
