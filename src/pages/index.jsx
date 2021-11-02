import Link from 'next/link'
import home from '/public/home.png'
import cliente from '/public/cliente.png'
import eu from '/public/eu.png'
import rafa from '/public/rafa.png'
import Image from 'next/image'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default function Inicio () {

    return (
        <div className="Inicio">
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
                            <Link href="/home"><Image src={home} alt="" width={50} height={50} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link href="/home">Home</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="cliente">
                        <NavIcon>
                            <Image src={cliente} alt="" width={45} height={45} />
                        </NavIcon>
                        <NavText>
                            Login
                        </NavText>
                        <NavItem eventKey="cliente/perfil">
                            <NavText>
                                <Link href="/login">Usuário</Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="cliente/pedidos">
                            <NavText>
                                <Link href="/vendedor">Vendedor</Link>
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <p>Bruno</p>
            <Link href="https://github.com/BrunoPivoto"><Image src={eu} alt="" width={200} height={200} className="img" /></Link>
            <p>Rafaela</p>
            <Link href="https://github.com/RafaelaTerra"><Image src={rafa} alt="" width={200} height={200} className="img" /></Link>
        </div>
    )
}