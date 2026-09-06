import { useState } from "react";
import axios from "axios";
import { BotaoCadastro } from "../../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";

export function ModalCadastroTreino(){
const [nome, setNome] = useState("");
const [observacao, setObservacao] = useState("");

function atualizarNome(evento){
  const valorDigitado = evento.target.value;
  console.log(valorDigitado)
  setNome(valorDigitado);
}


function atualizarObservacao(evento){
  const valorDigitado = evento.target.value;
 console.log(valorDigitado)
  setObservacao(valorDigitado);
}

  function cadastrarTreino(){
  axios.post("http://localhost:8080/treinos", 
    {
      nome:nome,
      observacao: observacao,
    }
  )
}

return (
    <>
        <div className={style.container}>
            
            <div className={style.modal}>
                <div className={style.content}>
                <p className={style.title}>Nome do treino</p>
                <input name="nome" className={style.input} type="text" onChange={atualizarNome}/>
                <br />
                <br />
                <p className={style.title}>Observacao</p>
                <textarea name="observacao" className={style.textarea} onChange={atualizarObservacao}></textarea>

                <div className={style.botoes}>
                    <BotaoCadastro onClick={cadastrarTreino}/>
                    <BotaoCancelar />
                </div>
               </div>
             
            </div>
                
        </div>
    
    </>
)
}