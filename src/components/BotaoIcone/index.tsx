import styles from './BotaoIcone.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const BotaoIcone = ({children}:ButtonProps) => {
    return (
        <button className={styles.botao}>
            {children}
        </button>
    )
}

export default BotaoIcone;