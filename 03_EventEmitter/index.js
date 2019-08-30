



const stdin = process.openStdin()
stdin.addListener('data', function(value){
    console.log(`Você digitou: ${value.toString().trim()}`)
})