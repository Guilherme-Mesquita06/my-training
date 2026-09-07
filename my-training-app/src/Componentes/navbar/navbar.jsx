import style from  "./style.module.css";


export function Navbar(){
return (
    <>
    <nav className={style.nav}>
        <a href="/" className={style.siteTitulo}>My Traning</a>
        <ul>
            <li className={style.li}>
                <a href="/montarTreino">Montar Treino</a>
            </li>
            <li>
                 <a href="/">Meus Treinos</a>

            </li>
            
        </ul>
    </nav>
    
    </>
)
}