import style from  "./style.module.css";

// E preciso passar o tipo do elemento como parametro para o react não entender como submit no form
export function BotaoCancelar({ onClick, type = "button" }){
return (
    <>
      <button  type={type} className={style.botaoCancelar}>Cancelar</button>
    
    </>
)
}