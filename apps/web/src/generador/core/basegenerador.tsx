type Materia = "matematica" | "fisica" | "economia" | "contabilidad";

type Dificultad = "basico" | "intermedio" | "avanzado";

interface GeneradorParametros{
    materia:Materia;
    categoria:string;
    nivel:Dificultad;
    opciones?: Record<string, any>;
}
