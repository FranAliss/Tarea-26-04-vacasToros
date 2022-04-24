describe("Toros y vacas ->  ganar", () => {
    it("Si se adivino la cadena devolver ganaste", ()=>{
        const torosyvacas = new TorosVacas("3");
        expect(torosyvacas.adivinar("3")).toEqual("ganaste");
    });
    it("Si no se adivina la cadena devolver '' (vacio)", ()=>{
        const torosyvacas = new TorosVacas("3");
        expect(torosyvacas.adivinar("4")).toEqual("");
    });
});

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