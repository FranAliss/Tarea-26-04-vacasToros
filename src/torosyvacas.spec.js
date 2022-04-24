describe("Toros y vacas ->  ganar", () => {
    it("Si se adivino la cadena devolver ganaste", ()=>{
        const torosyvacas = new TorosVacas("3");
        expect(torosyvacas.adivinar("3")).toEqual("ganaste");
    });
});

class TorosVacas{
    adivinar(intento){
        return "ganaste";
    }
}