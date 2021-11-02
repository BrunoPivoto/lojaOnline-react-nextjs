import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Card from '../components/card.jsx'
import prod1 from '/public/produto1.jpg'
import prod2 from '/public/produto2.jpg'
import prod3 from '/public/produto3.jpeg'
import prod4 from '/public/produto4.jpeg'
import prod5 from '/public/produto5.jpeg'
import prod6 from '/public/produto6.jpeg'
import home from '/public/home.png'
import cliente from '/public/cliente.png'
import logout from '/public/logout.png'

export default () => (

    <div className="App">
        <h1>Elas Irmãs (e Bruno)</h1>
        <SideNav className="SideBar"
            onSelect={( selected ) => {
                console.log( 'Teste' )
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <Image src={home} alt="" width={50} height={50} />
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
                        Cliente
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
                        <Link href="/"><Image src={logout} alt="" width={30} height={25} /></Link>
                    </NavIcon>
                    <NavText>
                        <Link href="/">Sair</Link>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        <div className="Cards">
            <Card titulo="Pulseira" color='#FFA500' preco={19.90} >
                <Image src={prod1} alt="" width={250} height={250} className="img" />
            </Card>

            <Card titulo="Colar" color='#FFA500' preco={30.00}>
                <Image src={prod2} alt="" width={250} height={250} className="img" />
            </Card>

            <Card titulo="Pingente" color='#FFA500' preco={15.99}>
                <Image src={prod3} alt="" width={250} height={250} className="img" />
            </Card>

            <Card titulo="Colar Caranguejo" color='#FFA500' preco={10.00}>
                <Image src={prod4} alt="" width={250} height={250} className="img" />
            </Card>

            <Card titulo="Coleira" color='#FFA500' preco={25.50}>
                <Image src={prod5} alt="" width={250} height={250} className="img" />
            </Card>

            <Card titulo="Pulseira de Praia" color='#FFA500' preco={18.90}>
                <Image src={prod6} alt="" width={250} height={250} className="img" />
            </Card>
        </div>
    </div>
)