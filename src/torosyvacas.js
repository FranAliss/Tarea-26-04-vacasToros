class TorosVacas{
    constructor(codSecreto){
        this.codSecreto = codSecreto;
    }
    adivinar(intento){
        if(intento === this.codSecreto){
            return "ganaste";
        }
        else
        {
            if(this.codSecreto.includes(intento[0]))
            {
                return "*";
            }
        }
        return "";
    }
}
    
export default TorosVacas;