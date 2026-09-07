import { useState } from "react";
import { ModalCadastroExercicio } from "../Componentes/cadastro/modalCadastroExercicios/modalCadastroExercicio"
import { ModalCadastroTreino } from "../Componentes/cadastro/modalCadastroTreino/modalCadastroTreino"
import { Navbar } from "../Componentes/navbar/navbar"

export function MontarTreino() {
    const [idTreino, setIdTreino] = useState(0);

    function aoCadastrarTreino(id) {
        setIdTreino(id);
    }

    return (
        <>
            <Navbar></Navbar>
            <ModalCadastroTreino aoCadastrarTreino={aoCadastrarTreino} />
            {idTreino > 0 && <ModalCadastroExercicio idTreino={idTreino} />}
        </>
    )
}