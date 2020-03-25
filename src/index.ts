import express, { Request, Response } from 'express'

const app = express()
app.get('/hello', (request:Request, response:Response) => { 
  response.send({ foo: 'bar'})
})
app.listen(3000, () => {
  console.log("Express server running at port 3000")
})
console.log("Hello TypeScript")