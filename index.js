const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const users = [
    { id: 1, name: 'tohid', email: 'tohid2232@gmail.com' },
    { id: 2, name: 'islam', email: 'islam2232@gmail.com' },
    { id: 3, name: 'Md tohidul', email: 'mdtohid2232@gmail.com' },
];


app.get('/', (req, res) => {
    res.send('Users Management Server is running');
})


app.get('/users', (req, res) => {
    res.send(users);
    
})

app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
})