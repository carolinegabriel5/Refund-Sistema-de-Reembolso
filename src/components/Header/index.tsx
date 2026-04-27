import Logo from '../../assets/Logo.png'; 
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import Botao from '../Botao';

export default function Header() {
    return (
        <header className={styles.menu}>
            <img src={Logo} alt="Logo" />
            <div className={styles.solicitacoes}>
                <Link to='/' className={styles.solicitacoes__reembolso}>
                    <p>Solicitações de reembolso</p>
                </Link>
                <Link to='/nova-solicitacao'>
                    <Botao>
                        Nova solicitação
                    </Botao>
                </Link>
            </div>
        </header>
    );
}