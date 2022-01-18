import { Frases } from './models/frases.js'

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', rodar)


async function rodar(event) {
    event.preventDefault()
    const inputs = event.target
    const dataForm = {}

    for (let i = 0; i < inputs.length; i++) {
        const { name, value } = inputs[i]

        if (name) {
            dataForm[name] = value
        }

        inputs[i].value = ''
    }

    const numero = dataForm.numero
    const ano = dataForm.data.slice(0, 4)
    const mes = dataForm.data.slice(5, 7)
    const dia = dataForm.data.slice(8)

    console.log(dia)
    console.log(numero)
    console.log(mes)
    console.log(ano)

    Frases.printandoFrases(numero, ano, mes, dia)
}