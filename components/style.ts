import styled from 'styled-components'
import Image from 'next/image'

interface LinkProps {
    primary: boolean,
    to: any,
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MenuBar = styled.div`
  height: 7.5vh;
  width: 100vw;
  background: rgb(224, 224, 224);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  z-index: 2;
  position: fixed;
  top: 0;
  @media(max-width: 700px) {
    flex-direction: row-reverse;
  }
`

const ButtonContainer = styled.div`
  max-width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Anchor = styled.a<LinkProps>`
  text-decoration: none !important;
  margin: 2px;
  color: ${props => props.primary ? "ghostwhite" : "black"} !important;
  text-align: center;
  @media(max-width: 700px) {
    display: none;
  }
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: ${props => props.primary ? "ghostwhite" : "black"}
  }
`

const Logo = styled.img`
  width: 7vh;
`

const Header = styled.div`
  margin-top: 10vh;
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 50%;
    margin-top: 1em;
  }

  > h1 {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 2em;
    text-align: left;
    margin-bottom: 1em;
  }

  @media (max-width: 700px) {
    > img {
      width: 100%;
    }
  }

`

const PreSidebar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`
const Sidebar = styled.div`
  margin-top: 7.8vh;
  width: 200px;
  height:100%;
  background: #919191;
  color: #fff;
  -webkit-box-shadow: 1px -1px 20px 1px #5A5A5A;
  box-shadow: 1px -1px 20px 1px #5A5A5A;
  position: fixed;

  @media (max-width: 700px) {
    width: 100%;
    height:fit-content;
    background: rgb(179, 179, 179);
  }
`

const SidebarItem = styled.div`
  height: 5vh;
  width: 100%;
  background: transparent;
  color: ghostwhite;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  margin-top : 0.5rem;
  display: flex;
  align-items: normal;
  justify-content: flex-start;
  padding-top: 10px;
  padding : 0 10px;
`
const SearchInput = styled.input`
  border: transparent;
  border-radius: 2px;
  font-size: 1.2rem;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  padding: 1rem 0.5rem;
  min-height: 2rem;
  width: 100%;
`

const Main = styled.main`
  width: 50%;
  font-size: 1.2rem;
  @media (max-width: 700px) {
    width: 90%
  }
`

const AdColumn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ComentarySection = styled.section`
  height: 30vh;
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
  margin: 2em 0;
  padding: initial;
  @media (max-width: 600px) {
    width: 80%;
    margin: 4rem;
  }
`
const ComentaryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*align-items: center;*/
  height: 5rem;
`
const ComentaryAvatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 2.5rem;
  margin-right: 1rem;
`
const ComentaryText = styled.div`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: left;
`

const ComentaryUserName = styled.h3`
  font-size: 16px;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: #424242;
`

const ComentaryFormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2em 0;
  padding: initial;
  @media(max-width: 700px) {
    margin: 1rem;
  }
`

const ComentaryLabel = styled.label`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 16px;
  align-self: flex-start;
`

const ComentaryTextArea = styled.textarea`
  height: 10vh;
  width: 100%;
  border-radius: 5px;
  border: solid 1px #424242;
`

const ComentarySubmitButton = styled.button`
  border: transparent;
  border-radius: 5px;
  color: ghostwhite;
  background: black;
  width: 50%;
  margin: 1em;
  padding: 10px 0;
`

export {
    Container,
    Content,
    MenuBar,
    ButtonContainer,
    Anchor,
    Logo,
    Header,
    PreSidebar,
    Sidebar,
    SidebarItem,
    SearchInput,
    Main,
    AdColumn,
    ComentarySection,
    ComentaryItem,
    ComentaryAvatar,
    ComentaryText,
    ComentaryUserName,
    ComentaryFormGroup,
    ComentaryLabel,
    ComentaryTextArea,
    ComentarySubmitButton
}