import style from "./style.module.css";
import api from "../../api";
import { useState, useEffect } from "react";
import { ModalExercicios } from "../ModalExercicios/ModalExercicio";

export function ModalTreino() {
    const [treinos, setTreinos] = useState([]);
    const [exerciciosDoTreino, setExerciciosDoTreino] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);

    function buscarTreinos() {
        api.get("/treinos")
            .then(resposta => {
                setTreinos(resposta.data);
            })
            .catch((e) => {
                console.log("Houve um erro", e);
            });
    }

    function visualizarExercicios(idTreino) {
        api.get(`/exercicios/${idTreino}`)
            .then(resposta => {
                setExerciciosDoTreino(resposta.data || []);
                setModalAberto(true);
            })
            .catch(e => {
                console.log("Houve um erro", e);
            });
    }

    function fecharModal() {
        setModalAberto(false);
        setExerciciosDoTreino([]);
    }

    useEffect(() => {
        buscarTreinos();
    }, []);

    return (
        <>
            <div className={style.container}>
                {treinos.map(treino => (
                    <div key={treino.id} className={style.card}>
                        <div className={style.info}>
                            <p className={style.nome}>{treino.nome}</p>
                            <p className={style.descricao}>{treino.descricao}</p>
                        </div>
                        <button
                            className={style.botaoVisualizar}
                            onClick={() => visualizarExercicios(treino.id)}
                        >
                            Visualizar
                        </button>
                    </div>
                ))}
            </div>

            {modalAberto && (
                <ModalExercicios
                    exercicios={exerciciosDoTreino}
                    aoFechar={fecharModal}
                />
            )}
        </>
    )
}