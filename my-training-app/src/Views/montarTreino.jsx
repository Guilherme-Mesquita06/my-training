// import { ModalCadastroTreino } from "../Componentes/cadastro/modalCadastroTreino/modalCadastroTreino"
import { ModalCadastroExercicio } from "../Componentes/cadastro/modalCadastroExercicios/modalCadastroExercicio"
import { Navbar } from "../Componentes/navbar/navbar"

export function MontarTreino(){

    return(
        <>
        <Navbar></Navbar>
        {/* <ModalCadastroTreino/> */}
        <ModalCadastroExercicio/>

        </>
    )
}