import express from 'express'

const port = 8000

const app = express()

app.get('/hello', (req, res) => {
    res.send('HellO!')
})

app.listen(port, () => {
    console.log('starttt');
})


