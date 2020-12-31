import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {
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
} from "../components/style";

export default function Home() {


    const [visibleSidebar, setVisibleSidebar] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [logged,setLogged] = useState(false);
    const handleWithMenuClick = () => {
        if (visibleSidebar) {
            setVisibleSidebar(false)
        } else {
            setVisibleSidebar(true)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('user')){
            setLogged(true)
        }
    },['loading'])

    return (
        <Container>
            <MenuBar>
                <Icon name="align justify" size="large" onClick={handleWithMenuClick} style={{ cursor: 'pointer' }} />
                <Logo src="/assets/img/logo.png" alt="Logo"/>
                {(()=>{
                    if(logged){
                        return(
                            <>
                                <ButtonContainer>
                                    <Anchor primary={false} href={"/"}>
                                        <Icon name="home" size="large" />
                                    </Anchor>
                                    <Anchor primary={false} href={"/config"}>
                                        <Icon name="cog" size="large" />
                                    </Anchor>
                                    <Anchor primary={false} href={"/"} title="Sair">
                                        <Icon name="sign-out" size="large" />
                                    </Anchor>
                                </ButtonContainer>
                            </>
                        )
                    }else{
                        return(
                            <>
                                <ButtonContainer>
                                    <Anchor primary={false} href={"/login"} title="Entrar">
                                        <Icon name="sign-in" size="large" />
                                    </Anchor>
                                </ButtonContainer>
                            </>
                        )
                    }
                })()}
                
            </MenuBar>
            <PreSidebar>
                {
                    (() => {
                        if (visibleSidebar) {
                            return (
                                <Sidebar>
                                    <SidebarItem>
                                        <SearchInput placeholder="Buscar" value={searchTerm} onChange={e => {
                                            setSearchTerm(e.target.value)
                                        }} />
                                    </SidebarItem>
                                    <SidebarItem>
                                        <Icon name="home" /> Home
                                    </SidebarItem>
                                    <SidebarItem>
                                        <Icon name="home" /> Home
                                    </SidebarItem>
                                    <SidebarItem>
                                        <Icon name="home" /> Home
                                    </SidebarItem>

                                </Sidebar>
                            )
                        }
                    })()
                }
                <Content>
                    <Header>
                        <img src="https://wallpaperplay.com/walls/full/f/0/4/16928.jpg" alt="Header" />
                        <h1>Ola mundo</h1>
                        <Main>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
                            diam, ultrices sit amet
                            justo a, tempus tempus leo. Ut sit amet nibh nisi. Phasellus neque lectus, imperdiet eu
                            suscipit eu, semper et tortor. Duis sollicitudin fermentum augue in lobortis. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus. Maecenas lectus lectus, volutpat a nulla
                                et, mollis consectetur eros. Integer hendrerit nunc sed ipsum maximus feugiat.<br />
                                <br />
                                Maecenas at nibh at urna iaculis sagittis. Duis ultricies sollicitudin varius. Curabitur
                                vulputate efficitur metus, sit amet scelerisque mauris semper at. Curabitur ultrices dapibus
                                odio, vulputate vestibulum dui ornare vitae. Suspendisse potenti. Nam aliquam fermentum
                                tincidunt. Proin semper turpis non leo suscipit ullamcorper. Donec tempor dui eu rutrum
                                posuere.<br />
                                <br />
                                Mauris elementum neque nec purus hendrerit tristique. Suspendisse in orci ipsum. Etiam erat
                                augue, tristique sit amet cursus vitae, iaculis vel velit. Praesent nec augue sapien. Duis
                                tempor eros leo, et luctus sapien feugiat eget. Curabitur feugiat leo vitae viverra
                                vehicula. Morbi ut luctus felis. Quisque vel nunc commodo, vehicula enim ut, tincidunt elit.
                                Ut blandit nibh sit amet convallis efficitur. Ut in ipsum sed enim malesuada pharetra ut a
                                magna. Praesent nec iaculis est. Nam sollicitudin imperdiet sem et laoreet. Etiam ultrices
                                magna magna, vel sodales arcu gravida eu. Nulla facilisi. Suspendisse vel magna eu enim
                                malesuada consequat.<br />
                                <br />
                                Aenean quis rutrum est, at pretium erat. Nam nec finibus felis, quis lobortis tortor.
                                Integer ac odio lacinia augue lacinia finibus non vel diam. In vel velit cursus, iaculis
                                lectus ac, maximus diam. Mauris suscipit sit amet dui in tempus. Ut in sollicitudin augue.
                                Etiam venenatis in dolor ut feugiat. Ut congue pretium finibus. Nullam consectetur sapien
                                diam, vel convallis libero egestas a.<br />
                                <br />
                                Curabitur vitae tortor et tellus ullamcorper condimentum. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia curae; Duis ac imperdiet ipsum, at cursus
                                nunc. Morbi feugiat, sapien vel pellentesque euismod, dolor dolor malesuada mi, sit amet
                                vestibulum dolor lacus sit amet lorem. In hac habitasse platea dictumst. Donec ut lacus id
                                lectus ultricies accumsan. Donec justo augue, rhoncus ac purus et, molestie rutrum lorem.
                                Fusce accumsan et leo ut pulvinar. Curabitur commodo metus vitae eros venenatis, et dictum
                                ipsum viverra. Ut ut ullamcorper massa.</p>
                        </Main>
                        <ComentarySection>
                            <ComentaryItem>
                                <ComentaryAvatar src="/assets/img/logo.png"   alt={"logo"}/>
                                <ComentaryText>
                                    <ComentaryUserName>Anemia</ComentaryUserName>
                                    <p>
                                        amet lorem. In hac habitasse platea dictumst. Donec ut lacus id
                                        lectus ultricies accumsan. Donec justo augue, rhoncus ac purus et, molestie rutrum lorem.
                                        Fusce accumsan et leo ut pulvinar. Curabitur commodo metus vitae eros venenatis, et dictum
                                        ipsum viverra. Ut ut ullamcorper massa
                                    </p>
                                </ComentaryText>
                            </ComentaryItem>
                            <ComentaryFormGroup>
                                <ComentaryLabel>Comentarios</ComentaryLabel>
                                <ComentaryTextArea />
                                <ComentarySubmitButton>Enviar Comentario</ComentarySubmitButton>
                            </ComentaryFormGroup>
                        </ComentarySection>
                    </Header>
                </Content>
                {/*<AdColumn></AdColumn>*/}
            </PreSidebar>
        </Container>
    );
}
