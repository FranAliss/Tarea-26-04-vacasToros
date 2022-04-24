class TorosVacas{
    constructor(codSecreto){
        this.codSecreto = codSecreto;
    }
    adivinar(intento){
        let resp = "";
        if(intento === this.codSecreto){
            resp = "ganaste";
        }
        else
        {
            for(let i=0;i<this.codSecreto.length;i++)
            {
                if(this.codSecreto[i] === intento[i])
                {
                    resp = resp + "!";
                }
                else
                {
                    if(this.codSecreto.includes(intento[i]))
                    {
                        resp = resp + "*";
                    }
                    else
                    {
                        if(this.codSecreto.includes(intento[i] + 1) || this.codSecreto.includes(intento[i] - 1))
                        {
                            resp = resp + "#";
                        }
                    }
                }
            }   
        }
        return resp;
    }
}
    
export default TorosVacas;