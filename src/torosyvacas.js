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
            if(this.codSecreto.search(intento[0]) > -1)
            {
                return "*";
            }
        }
        return "";
    }
}
    
export default TorosVacas;