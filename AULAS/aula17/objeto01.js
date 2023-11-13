let amigo = {nome: 'José',
sexo: 'M',
peso: '85.4',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(2)
// console.log(amigo) Essa é uma forma

console.log(`${amigo.nome} pesa ${amigo.peso} Kg`) // Essa é outra forma de mostrar