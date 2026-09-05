//import { useState } from "react";
import { BotaoCadastro } from "../../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";

export function ModalCadastroExercicio() {

  
  const onSubmit = (evento) => {
    evento.preventDefault();
    const data = {
        nome: evento.target.elements.nomeExercicio.value,
        agrupamentoMuscular: evento.target.elements.agrupamentoMuscular.value,
        observacao: evento.target.elements.observacao.value,
    }
    console.log(data)
  }


    return (
    <>
      <div className={style.container}>
        <div className={style.modal}>
          <div className={style.content}>

            <div className={style.inputsGroup}>

              <div className={style.inputExercicio}>
                <label className={style.title}>Nome do Exercicio</label>
                <input name="exercicio" className={style.input} type="text" />
              </div>

              <div className={style.inputExercicio}>
                       <label className={style.title}>Agrupamento Muscular</label>
                <select name="agrupamentoMuscular" className={style.input} type="text" >
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
            <textarea name="observacao" className={style.textarea}></textarea>

            <div className={style.botoes}>
              <BotaoCadastro onSubmit={onSubmit} />
              <BotaoCancelar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
