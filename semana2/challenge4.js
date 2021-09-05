function landMass(name ='', area = 0) {
    //Implementación
    const MASA_TERRESTRE = 148940000;
    const result = (area * 100) /  MASA_TERRESTRE;
    const percent = Math.round(result * 100) / 100;
    return {percent, "message": `${name} representa el ${percent}% de la masa de la tierra`};
}
module.exports = landMass;