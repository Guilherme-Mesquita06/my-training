import { useState } from "react";
import api from "../../../api"
import { BotaoCadastro } from "../../Botoes/BotaoCadastro/BotaoCadastro";
import { BotaoCancelar } from "../../Botoes/BotaoCancelar/BotaoCancelar";
import style from "./style.module.css";

export function ModalCadastroTreino({aoCadastrarTreino}) {
    const [nome, setNome] = useState("");
    const [observacao, setObservacao] = useState("");


    function atualizarNome(evento) {
        const valorDigitado = evento.target.value;
        //console.log(valorDigitado)
        setNome(valorDigitado);

    }


    function atualizarObservacao(evento) {
        const valorDigitado = evento.target.value;
        //console.log(valorDigitado)
        setObservacao(valorDigitado);
    }

    function limparCadastro(){
        setObservacao("");
        setNome("");
        
    }


    function cadastrarTreino(evento) {
        evento.preventDefault()
        // SEMPRE devemos passar a url no axios, como estamos usando o api passamos apenas o controller que vamos acessar
        api.post("/treinos",
            {
                nome: nome,
                observacao: observacao,
            }
        ).then(resposta => console.log("Deu tudo certo!", 
            resposta.data, 
            aoCadastrarTreino(resposta.data.id)
        ))
            .catch(erro => {
                console.log("Erro na requisição", erro)
            })
    }

    return (
        <>
            <div className={style.container}>

                <div className={style.modal}>
                    <div className={style.content}>
                        <form onSubmit={cadastrarTreino}>
                            <label className={style.title}>Nome do treino</label>
                            <input name="nome" className={style.input} type="text" onChange={atualizarNome} />
                            <br />
                            <br />
                            <p className={style.title}>Observacao</p>
                            <textarea name="observacao" className={style.textarea} onChange={atualizarObservacao}></textarea>
                            <div className={style.botoes}>
                                <BotaoCadastro />
                                <BotaoCancelar type="button" onClick={limparCadastro}/>
                            </div>

                        </form>
                    </div>
                    
                </div>

            </div>

        </>
    )
}