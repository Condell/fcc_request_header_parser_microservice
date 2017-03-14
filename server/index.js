import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';


if (env === 'development') {
  app.use(morgan('dev'));
}


app.enable('trust proxy');


app.get('/api/whoami', (req, res) => {
  res.json(req.ip);
});

// TODO: Set up Catch statement + general Error Handler


app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
