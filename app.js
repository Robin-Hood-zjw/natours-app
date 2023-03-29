const morgan = require('morgan');
const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.use('/api/v1/tours', () => {
//   tourRouter();
//   console.log('Here I am with the tours middleware.');
// });

app.use('/api/v1/tours/', tourRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
