import Botao from '../../components/Botao';
import styles from './SolicitacaoReembolso.module.scss'
import arquivoAdicionar from '../../assets/icons/arquivo-adicionar.png'
import Inputs from '../../components/Inputs';

export default function SolicitacaoReembolso() {
    return (
        <div className={styles.container}>
            <h1>Nova solicitação de reembolso</h1>
            <p>Dados da despesa para solicitar reembolso.</p>
            <form >
                <Inputs isRealonly={false}/>
                <div className={styles.arquivo}>
                    <label>COMPROVANTE</label>
                    <div className={styles.arquivo__input}>
                        <span id="file-name">nome do arquivo.pdf</span>
                        <label htmlFor="arquivo" className="botao-escolher">
                            <img src={arquivoAdicionar} alt="Ícone" width="20"/>
                        </label>
                        <input type='file' id="arquivo"  />
                    </div>
                </div>
                <Botao type="submit">Enviar Solicitação</Botao>
            </form>
        </div>
    )
}