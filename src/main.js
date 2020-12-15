const port = 8000
const fortune = require('../resources/fortune.json')
const subject = require('../resources/subject.json')
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

app.get('/fortune', (req,res,next) =>{
    res.send(generateFortune())
})

app.listen(port, ()=> console.log("Server running on address:",port));

