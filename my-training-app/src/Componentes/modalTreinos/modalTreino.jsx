import { BotaoCadastro } from "../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";

export function ModalTreino(){
return (
    <>
        <div className={style.container}>
            
            <div className={style.modal}>
                <div className={style.content}>
                <p className={style.title}>Nome do treino</p>
                <input className={style.input} type="text" />
                <br />
                <br />
                <p className={style.title}>Observacao</p>
                <textarea className={style.textarea}></textarea>

                <div className={style.botoes}>
                    <BotaoCadastro />
                    <BotaoCancelar />
                </div>
               </div>
             
            </div>
                
        </div>
    
    </>
)
}