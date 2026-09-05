import { BotaoCadastro } from "../../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";

export function ModalCadastroTreino(){

const onSubmit = (evento) => {
    evento.preventDefault();
    const data = {
        nome: evento.target.elements.nome.value,
        observacao: evento.target.elements.observacao.value,
    }
    console.log(data)
  }
return (
    <>
        <div className={style.container}>
            
            <div className={style.modal}>
                <div className={style.content}>
                <p className={style.title}>Nome do treino</p>
                <input name="nome" className={style.input} type="text" />
                <br />
                <br />
                <p className={style.title}>Observacao</p>
                <textarea name="observacao" className={style.textarea}></textarea>

                <div className={style.botoes}>
                    <BotaoCadastro onSubmi= {onSubmit}/>
                    <BotaoCancelar />
                </div>
               </div>
             
            </div>
                
        </div>
    
    </>
)
}