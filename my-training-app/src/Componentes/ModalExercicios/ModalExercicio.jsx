import style from "./style.module.css";

export function ModalExercicios({ exercicios, aoFechar }) {
    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <div className={style.header}>
                    <h2 className={style.titulo}>Exercícios do treino</h2>
                    <button className={style.botaoFechar} onClick={aoFechar}>×</button>
                </div>

                <div className={style.lista}>
                    {exercicios.length === 0 && (
                        <p className={style.vazio}>Nenhum exercício cadastrado para esse treino.</p>
                    )}
                    {exercicios.map(exercicio => (
                        <div key={exercicio.id} className={style.card}>
                            <p className={style.nome}>{exercicio.nome}</p>
                            <p className={style.detalhe}>Agrupamento: {exercicio.agrupamentoMuscular}</p>
                            <p className={style.detalhe}>Séries: {exercicio.serie}</p>
                    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}