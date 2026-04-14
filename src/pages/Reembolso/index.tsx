import Botao from '../../components/Botao';
import styles from './Reembolso.module.scss'
import arquivo from '../../assets/icons/arquivo.svg'
import arquivoAdicionar from '../../assets/icons/arquivo-adicionar.png'
import { Link } from 'react-router-dom';

interface DadosReembolso {
    caminhoImagem: string;
    nome: string;
    valor: number;
    categoria: string;
}

interface ReembolsoProps {
    dadosReembolso?: DadosReembolso;
    novoReembolso: boolean;
}

export default function Reembolso({dadosReembolso, novoReembolso}: ReembolsoProps) {
    const isNovoReembolso = novoReembolso;

    return (
        <div className={styles.container}>
            <h1>{isNovoReembolso ? 'Nova solicitação de reembolso' : 'Solicitação de reembolso'}</h1>
            <p>Dados da despesa para solicitar reembolso.</p>
            <form>
                <label>NOME DA SOLICITAÇÃO</label>
                <input type='text' defaultValue={dadosReembolso?.nome} disabled={!isNovoReembolso} />
                <div className={styles.categoria__valor}>
                    <div className={styles.categoria}>
                        <label>CATEGORIA</label>
                        <select defaultValue={dadosReembolso?.categoria} disabled={!isNovoReembolso}>
                            <option value='alimentacao'>Alimentação</option>
                            <option value='hospedagem'>Hospedagem</option>
                            <option value='transporte'>Transporte</option>
                            <option value='servicos'>Serviços</option>
                            <option value='outros'>Outros</option>
                        </select>
                    </div>
                    <div className={styles.valor}>
                        <label>VALOR</label>
                        <input type='number'defaultValue={dadosReembolso?.valor} disabled={!isNovoReembolso}/>
                    </div>
                    
                </div>
                
                {isNovoReembolso ? (
                    
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
                ) : (
                    <Link className={styles.abrir__comprovante} to={dadosReembolso?.caminhoImagem ?? "#"}>
                        <img src={arquivo} alt='arquivo'/>
                        <p>Abrir comprovante</p>
                    </Link> 
                )}
                {isNovoReembolso ? (
                    <Botao type="submit">Enviar Solicitação</Botao>
                ) : (
                    <Botao >Excluir Registro</Botao>
                )}
            </form>
        </div>
    )
}