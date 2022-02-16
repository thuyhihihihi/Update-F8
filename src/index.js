

// const path = require('path');
// const express = require('express')
// const morgan = require('morgan')
// const handlebars = require('express-handlebars');
// //const { extname } = require('path');
// //const exphbs = require('express-handlebars');
// const app = express();
// const port = 8100;

// app.use(morgan('combined'))
// //template engine
// app.engine(('hbs', handlebars));
//   // extname: '.hbs';
// //app.set('view engine', 'hbs');
// app.engine('handlebars', handlebars());
// app.set('views', path.join(__dirname, 'resources/views'));


// app.get('/', (req, res) => {
//    res.render('home');
// })

// // server = app.listen(process.env.PORT || 8100, (err) => {
// //   if (err) { console.log(err) } else {
// //       console.log('thanh cong');
// //   }
// // })
const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
//const { extname } = require('path');
//const exphbs = require('express-handlebars');
const app = express();
const port = 8100;

app.use(morgan('combined'))
//template engine
app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
   res.render('home');
})

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

