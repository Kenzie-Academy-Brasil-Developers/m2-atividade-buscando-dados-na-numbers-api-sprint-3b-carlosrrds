import { Formulario } from '../rotas/formulario.js'
class Frases {
    static tagSelect = document.querySelector('#frases')
    static async printandoFrases(numero, ano, mes, dia) {
        const section = this.tagSelect
        section.innerHTML = ''
        const fraseNumero = await Formulario.getApiNumero(numero)
        const fraseAno = await Formulario.getApiAno(ano)
        const fraseMesDia = await Formulario.getApiMesDia(mes, dia)
        section.innerHTML = `<h2>${numero}</h2>
        <p>${fraseNumero}</p>
        <h2>${ano}</h2>
        <p>${fraseAno}</p>
        <h2>${mes}/${dia}</h2>
        <p>${fraseMesDia}</p>`
    }
}

export { Frases }