import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../../styles/Nav.module.css'

const Nav = () => {
    return (

        <nav>
            <div className="logo">
                <Link href='/'>
                    Batteryjumpchicago
                </Link>
            </div>
            <Link href="/jump-start-service-berwyn"><a>Berwyn</a></Link>
            <Link href="/jump-start-service-riverside"><a>Riverside</a></Link>

        </nav>
    )
}

export default Nav