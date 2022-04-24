import TorosVacas from "./torosyvacas.js"

describe("Toros y vacas ->  ganar", () => {
    it("Si se adivino la cadena devolver ganaste", ()=>{
        const torosyvacas = new TorosVacas("3");
        expect(torosyvacas.adivinar("3")).toEqual("ganaste");
    });
    it("Si no se adivina la cadena devolver '' (vacio)", ()=>{
        const torosyvacas = new TorosVacas("2");
        expect(torosyvacas.adivinar("4")).toEqual("");
    });
});

describe("buscar vacas (*)", () => {
    it("Si se tiene la cadena 12, y se ingresa 25, devolver '*'", () => {
        const torosyvacas = new TorosVacas("12");
        expect(torosyvacas.adivinar("25")).toEqual("*");
    });
    
    it("Si se tiene la cadena 12, y se ingresa 21, devolver '**'", () => {
        const torosyvacas = new TorosVacas("12");
        expect(torosyvacas.adivinar("21")).toEqual("**");
    });
});

describe("buscar toros (!)", () => {
    it("Si se tiene la cadena 12, y se ingresa 15, devolver '!'", () => {
        const torosyvacas = new TorosVacas("12");
        expect(torosyvacas.adivinar("15")).toEqual("!");
    });
    it("Si se tiene la cadena 12, y se ingresa 05, devolver ''", () => {
        const torosyvacas = new TorosVacas("12");
        expect(torosyvacas.adivinar("05")).toEqual("");
    });
});

describe("buscar ternera (#)", () => {
    it("Si se tiene la cadena 14, y se ingresa 92, devolver una ternera '#'",() => {
        const torosyvacas = new TorosVacas("14");
        expect(torosyvacas.adivinar("92")).toEqual("#");
    });
});