function sequencial (numbers) {
    for (const number of numbers) {
        if (number % 3 === 0) {
            console.log('fizz')
        }

        if(number % 5 === 0) {
            console.log('buzz')
        }

        if(number % 3 === 0  && number % 5 === 0) {
            console.log('fizz buzz')
        }

        if(number % 3 !== 0  || number % 5 !== 0) {
            console.log(number)
        }
    }
}

sequencial([1,2,3,4,5,6,7,8,9,15])
