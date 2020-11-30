const fortune = require('./fortune.json')
const subject = require('./subject.json')
const express = require('express')
const app = express()


const randomArrayPosition = (objectArray) => {
const index = Math.floor(Math.random()* (objectArray.length))
return objectArray[index]
};

const randomFortuneVerbFiltered = (objectSubject) =>{

const filteredFortune = fortune.filter((position) => (objectSubject.verb === position.verb || true === position.verb))

return randomArrayPosition(filteredFortune)

}



function generateFortune(){

const objectSubject = randomArrayPosition(subject);
const objectFortune = randomFortuneVerbFiltered(objectSubject);

return `${objectSubject.subject} ${objectFortune.fortune}`

}

console.log(generateFortune())
