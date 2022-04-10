const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const PORT = process.env.PORT || 5000;

const cors = require('cors')

app.use(cors())

app.db = router.db

app.use(auth)
app.use(router)
app.listen(3000)

app.listen(PORT, () => {
    console.log('Server is running');
});
