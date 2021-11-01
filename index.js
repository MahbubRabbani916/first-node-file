const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
const port = 5000;
const users = [
    { id: 0, name: "sabana", email: 'shabana@gamil.com', phone: '012346678' },
    { id: 1, name: "sabnur", email: 'sabnur@gamil.com', phone: '012346679' },
    { id: 2, name: "srabonti", email: 'srabonti@gamil.com', phone: '012346677' },
    { id: 3, name: "sharmin", email: 'sharmin@gamil.com', phone: '012346676' },
    { id: 4, name: "sakila", email: 'sakila@gamil.com', phone: '012346675' }
]


app.get('/', (req, res) => {
    res.send('yes now I am excited to learn node express')
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('inside the post', req.body)
    res.json(newUser)
})

app.get('/fruit/mangoo/fozli', (req, res) => {
    res.send('yammy yammy sweet fruit')
})

app.get('/fruit', (req, res) => {
    res.send(['mango', 'orange', 'apple'])
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
    res.send(users)
})
app.listen(port, () => {
    console.log("listening to port", port)
})