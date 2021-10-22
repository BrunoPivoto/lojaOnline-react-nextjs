import Link from 'next/link'

export default function login (props) {
    
    const cardStyle = {
        backgroundColor: props.color || '#580',
        borderColor: props.color || '#580'
    }
    
    return (
        <div>
            <div className="Card" style={cardStyle} >
                <p>Email: <input type="email" /></p>
                <p>Senha: <input type="password" name="senha" id="1" /></p>
                <Link href="/home"><button className="Button">Login</button></Link>
            </div>
        </div>
    )
}