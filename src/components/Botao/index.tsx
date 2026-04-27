import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Botao.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Botao = ({children}:ButtonProps) => {
    return (
        <button className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao;