/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('DB connection successful!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on the port ${PORT}.`);
});
