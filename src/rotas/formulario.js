class Formulario {
    static urlAPI = 'http://numbersapi.com'
    static async getApiNumero(numero) {
        const endPointAPI = `/${numero}/trivia?json`
        const response = await fetch(this.urlAPI + endPointAPI)
        const data = await response.json()
        const frase = data.text
        return frase
    }
    static async getApiAno(ano) {
        const endPointAPI = `/${ano}/year?json`
        const response = await fetch(this.urlAPI + endPointAPI)
        const data = await response.json()
        const frase = data.text
        return frase
    }
    static async getApiMesDia(mes, dia) {
        const endPointAPI = `/${mes}/${dia}/date?json`
        const response = await fetch(this.urlAPI + endPointAPI)
        const data = await response.json()
        const frase = data.text
        return frase
    }
}
export { Formulario }