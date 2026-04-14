import styles from './Solicitacao.module.scss'
import icone from '../../../assets/icons/alimentacao.png'
import { Link } from 'react-router-dom';

export default function Solicitacao() {
    return (
        <Link to='/detalhes-reembolso:id' style={{ textDecoration: 'none' }}>
            <div className={styles.solicitacao}> 
                <div className={styles.solicitacao__dados}>
                    <div className={styles.icone}>
                        <img src={icone}/>
                    </div>
                    <div className={styles.solicitacao__dados__nome}>
                        <h3>Nome</h3>
                        <p>Categoria</p>
                    </div>
                </div>
                <div className={styles.solicitacao__valores}>
                    <p>R$</p>
                    <h3>valor</h3>
                </div>
            </div>
        </Link>
    );
}