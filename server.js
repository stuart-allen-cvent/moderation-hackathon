const Express = require("express");
const cors = require('cors');  
const bodyParser = require('body-parser');  
const data = require('./data');  

const app = Express()
app.use(cors())
app.use(bodyParser.json())

app.post('/store', (req, res) => {
  const { labels } = req.body
  data.labels = labels
  res.send('OK')
})

app.get('/retrieve', (req, res) => {  
  res.send({ labels: data.labels });  
});  

app.listen(3001, () => {  
  console.log('Server running on port 3001');  
});  