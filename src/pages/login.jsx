import Link from 'next/link'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Image from 'next/image'
import home from '/public/home.png'
import cliente from '/public/cliente.png'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function login ( props ) {

    const cardStyle = {
        backgroundColor: props.color || '#130',
        borderColor: props.color || '#150'
    }

    return (
        <div className="login">
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
            <div className="Card" >
                <a>Tela de Login</a>
                <a className="texto">Email: <input className="input" type="email" /></a>
                <a className="texto">Senha: <input className="input" type="password" name="senha" id="1" /></a>
                <a> </a>
                <a> </a>
                <Link href="/home"><button className="Button">Login</button></Link>
                <a></a>
                <Link href="/"><button className="Button">Voltar</button></Link>
            </div>
        </div>
    )
}