import express from 'express';
import morgan from 'morgan';
import useragent from 'express-useragent';

const port = process.env.PORT || 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use(morgan('dev'));
}

app.enable('trust proxy');

app.use(useragent.express());

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages('en-US', 'en-CA'),
    software: `${req.useragent.platform}; ${req.useragent.os}`,
  });
});

// TODO: Set up Catch statement + general Error Handler

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
