function parImpar (a: number): String {
    if (a % 2 == 0) {
        return `O número `+a+ ` é par.`
    }
        return `O número `+a+ ` é ímpar.`
  }
  
  console.log(parImpar(8));