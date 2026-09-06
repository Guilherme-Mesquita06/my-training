//import { useState } from "react";
import { useState } from "react";
import { BotaoCadastro } from "../../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";
import axios from "axios";







export function ModalCadastroExercicio() {
const [nome, setNome] = useState("");
const [observacao, setObservacao] = useState("");
const [agrupamentoMuscular, setAgrupamentoMuscular] = useState("");

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


function atualizarAgrupamentoMuscular(evento){
  const valorDigitado = evento.target.value;
  console.log(valorDigitado)
  setAgrupamentoMuscular(valorDigitado);
}



  function cadastrarExercicio(){
  axios.post("http://localhost:8080/exercicios", 
    {
      nome:nome,
      observacao: observacao,
      agrupamentoMuscular: agrupamentoMuscular
    }
  )
}

    return (
    <>
      <div className={style.container}>
        <div className={style.modal}>
          <div className={style.content}>

            <div className={style.inputsGroup}>

              <div className={style.inputExercicio}>
                <label className={style.title}>Nome do Exercicio</label>
                <input name="exercicio" className={style.input} type="text" onChange={atualizarNome} />
              </div>

              <div className={style.inputExercicio}>
                       <label className={style.title}>Agrupamento Muscular</label>
                <select name="agrupamentoMuscular" className={style.input} type="text" onChange={atualizarAgrupamentoMuscular}>
                <option value="Costas">Costas</option>
                <option value="Trapezio">Trapezio</option>
                <option value="Peitoral">Peitoral</option>
                <option value="Abdomen">Abdomen</option>
                <option value="Obliquio">Obliquio</option>
                <option value="Gluteo">Gluteo</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Posterior">Posterior</option>
                <option value="Panturrilha">Panturrilha</option>
                </select>
          

              </div>
            </div>

            <br />
            <br />
            <p className={style.title}>Observacao</p>
            <textarea name="observacao" className={style.textarea} onChange={atualizarObservacao}></textarea>

            <div className={style.botoes}>
              <BotaoCadastro onClick= {cadastrarExercicio}/>
              <BotaoCancelar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
