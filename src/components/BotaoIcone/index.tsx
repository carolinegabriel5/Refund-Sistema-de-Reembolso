    import styles from './BotaoIcone.module.scss'

    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        children: React.ReactNode;
    }


    const BotaoIcone = ({children, ...props}:ButtonProps) => {
        return (
            <button className={styles.botao}  {...props}>
                {children}
            </button>
        )
    }

    export default BotaoIcone;