// Declaraciones de constantes y funcion para hacer las operaciones
const sum = (v1, v2) => v1 + v2;

const res = (v1, v2) => v1 - v2;

const mul = (v1, v2) => v1 * v2;

const div = (v1, v2) => {
    if (v2 == 0)
        return "Operacion no permitida";
    else 
        return v1 / v2;
}

const valida = ()=> "Validacion";

export { sum as Suma, res as Resta, mul as Multiplicar, div as Division};