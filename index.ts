import express , {Request , Response } from 'express'
import path from "path";
const app = express()
const port = 3000
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req: Request, res: Response) => {
  res.render("client/pages/home");
})
// Thiet lap file tinh cho project
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})