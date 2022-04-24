class TorosVacas{
    constructor(codSecreto){
        this.codSecreto = codSecreto;
    }
    adivinar(intento){
        if(intento === this.codSecreto){
        return "ganaste";
        }
        return "";
    }
}
    
export default TorosVacas;