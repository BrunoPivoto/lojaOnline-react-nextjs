import Link from 'next/link'
import home from '../images/home.png'
import cliente from '../images/cliente.png'
import eu from '../images/eu.png'


import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default function Inicio() {
    
    
    
    return (
        <div>
            <h1>Bem vindo</h1>
        <SideNav className="SideBar"
            onSelect={( selected ) => {
                console.log( 'Teste' )
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <img src={home} alt="" width="50%" />
                    </NavIcon>
                    <NavText>
                       <Link href="/home">Home</Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="cliente">
                    <NavIcon>
                        <img src={cliente} alt="" width="50%" />
                    </NavIcon>
                    <NavText>
                    <Link href="/login">Login</Link>
                    </NavText>
                    <NavItem eventKey="cliente/perfil">
                        <NavText>
                            Perfil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="cliente/pedidos">
                        <NavText>
                            Pedidos
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="sair">
                    <NavIcon>
                    </NavIcon>
                    <NavText>
                    <Link href="/">Sair</Link>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
            <Link href="https://github.com/BrunoPivoto"><button>Bruno<img src={eu} alt="" /> </button></Link>
            <div>
            <Link href="https://github.com/RafaelaTerra"><button>Rafaela</button></Link>
        </div></div>
    )
}