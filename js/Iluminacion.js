class Iluminacion{
    
    //*******************************************************************************************************************************
    //** Grupo ** Tipo de lampara ** Potencia (W) ** Factor Emisión (KgCO₂eq/UM) ** UM ** Horas de uso/día	** Emisiones (kgCO₂eq) **
    //*******************************************************************************************************************************

    //! Atributos
    grupo; //? constante para cada clase ==> Iluminación
    tipo_lampara;
    potencia; //* W
    factor_emision; //* KgCO₂eq/UM -- para todos los casos UM (unidad de tiempo) es hs	
    horas_uso; //? queda como undefined en el contructor ya que es un parametro de entrada del usuario
    emisiones; //? queda como undefined en el contructor ya que lo calcularemos por un metodo
    //! Constructor
    constructor(fuente_emision, factor_emision){
        this.fuente_emision=fuente_emision;
        this.factor_emision=factor_emision;
    };
    
    //! Metodos
    emisiones_artefactos = function (){
        
        this.emisiones= this.horas_uso * this.factor_emision;
    }
}