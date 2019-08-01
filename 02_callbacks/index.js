/*
    01 - obter um usuario
    02 - obter o numero de telefone de um usuario a partir do id
    03 - obter o endereço do usuario pelo id
*/

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'David',
                dataNascimento: '17/05/1980'
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                telefone: '(11) 97698-6161'
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                rua: 'Jequie',
                nr: '217'
            })
        }, 2000)
    })
}

async function main() {

    try {

        console.time('Tempo')

        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEndereco(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])

        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            nome: ${usuario.nome}
            telefone: ${telefone.telefone}
            endereco: ${endereco.rua}, ${endereco.nr}
        `)

        console.timeEnd('Tempo')

    } catch (error) {
        console.error("Erro: ", error)
    }

}

main()