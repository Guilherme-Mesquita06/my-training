import { useState } from "react";
import { BotaoCadastro } from "../../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";
import api from "../../../api"

export function ModalCadastroExercicio({ idTreino }) {
  const [nome, setNome] = useState("");
  const [observacao, setObservacao] = useState("");
  const [agrupamentoMuscular, setAgrupamentoMuscular] = useState("");
  const [serie, setSerie] = useState(0);


  const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const agrupamentosMusculares = [
    { id: 1, nome: "Peito" },
    { id: 2, nome: "Costas" },
    { id: 3, nome: "Ombro" },
    { id: 4, nome: "Biceps" },
    { id: 5, nome: "Triceps" },
    { id: 6, nome: "Antebraço" },
    { id: 7, nome: "Abdomen" },
    { id: 8, nome: "Quadriceps" },
    { id: 9, nome: "Posterior de Coxa" },
    { id: 10, nome: "Gluteo" },
    { id: 11, nome: "Panturrilha" },
    { id: 12, nome: "Trapezio" },
    { id: 13, nome: "Lombar" },
    { id: 14, nome: "Adutores" },
    { id: 15, nome: "Abdutores" },
  ];

  function atualizarNome(evento) {
    setNome(evento.target.value);
  }

  function atualizarObservacao(evento) {
    setObservacao(evento.target.value);
  }

  function atualizarAgrupamentoMuscular(evento) {
    setAgrupamentoMuscular(evento.target.value);
  }

  function atualizarSeries(evento) {
    setSerie(evento.target.value);
  }

  function limparCadastro() {
    setObservacao("");
    setNome("");
    setAgrupamentoMuscular("");
    setSerie(0);
  }

  function cadastrarExercicio(evento) {
    evento.preventDefault();
    api.post("/exercicios", {
      nome: nome,
      descricao: observacao,
      serie: serie,
      agrupamentoMuscular: agrupamentoMuscular,
      idTreino: idTreino,
    })
      .then(resposta => console.log("Deu tudo certo!", resposta.data), limparCadastro())
      .catch(e => {
        console.log("Erro na requisição", e);
      });
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.modal}>
          <div className={style.content}>
            <form onSubmit={cadastrarExercicio}>
              <div className={style.inputsGroup}>
                <div className={`${style.inputExercicio} ${style.inputNome}`}>
                  <label className={style.title}>Nome do Exercicio</label>
                  <input name="exercicio" className={style.input} type="text" onChange={atualizarNome} />
                </div>

                <div className={`${style.inputExercicio} ${style.inputAgrupamento}`}>
                  <label className={style.title}>Agrupamento Muscular</label>
                  <select name="agrupamentoMuscular" className={style.input} onChange={atualizarAgrupamentoMuscular} value={agrupamentoMuscular}>
                        <option value="" disabled>Selecione...</option>
                    {agrupamentosMusculares.map(agrupamento => (
                      <option key={agrupamento.id} value={agrupamento.nome}>
                        {agrupamento.nome}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${style.inputExercicio} ${style.inputSerie}`}>
                  <label className={style.title}>Séries</label>
                  <select name="serie" className={style.input} onChange={atualizarSeries}>
                    {series.map((serie) => <option key={serie}>{serie}</option>)}
                  </select>
                </div>
              </div>

              <br />
              <br />
              <p className={style.title}>Observacao</p>
              <textarea name="observacao" className={style.textarea} onChange={atualizarObservacao}></textarea>

              <div className={style.botoes}>
                <BotaoCadastro />
                <BotaoCancelar type="button" onClick={limparCadastro} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}