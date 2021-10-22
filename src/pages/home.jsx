import React from 'react'
import Link from 'next/link'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Card from '../components/card.jsx'
import prod1 from '../images/produto1.jpg'
import prod2 from '../images/produto2.jpg'
import prod3 from '../images/produto3.jpeg'
import prod4 from '../images/produto4.jpeg'
import prod5 from '../images/produto5.jpeg'
import prod6 from '../images/produto6.jpeg'
import home from '../images/home.png'
import cliente from '../images/cliente.png'

export default () => (
    <div className="App">
        <h1>_________Elas Irmãs (e Bruno)</h1>
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
                    </NavIcon>
                    <NavText>
                    <Link href="/">Sair</Link>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        <div className="Cards">
            <Card titulo="Pulseira" color='#FFA500' preco={19.90} >
                <img src={prod1} alt="" width='45%' />
            </Card>

            <Card titulo="Colar" color='#FFA500' preco={30.00}>
                <img src={prod2} alt="" width='35%' />
            </Card>

            <Card titulo="Pingente" color='#FFA500' preco={15.99}>
                <img src={prod3} alt="" width='40%' />
            </Card>

            <Card titulo="Colar Caranguejo" color='#FFA500' preco={10.00}>
                <img src={prod4} alt="" width='45%' />
            </Card>

            <Card titulo="Coleira" color='#FFA500' preco={25.50}>
                <img src={prod5} alt="" width='45%' />
            </Card>

            <Card titulo="Pulseira de Praia" color='#FFA500' preco={18.90}>
                <img src={prod6} alt="" width='45%' />
            </Card>
        </div>
    </div>
)