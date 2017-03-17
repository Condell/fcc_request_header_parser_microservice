import express from 'express';
import morgan from 'morgan';
import platform from 'platform';

const port = process.env.PORT || 3000;
const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use(morgan('dev'));
}

app.enable('trust proxy');


app.get('/api/whoami', (req, res) => {
  const platformInfo = platform.parse(req.headers['user-agent']);
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages('en-US', 'en-CA'),
    software: platformInfo.os.toString(),
  });
});

// TODO: Set up Catch statement + general Error Handler

app.listen(port, () => {
  console.log(`Express is listening on port: ${port}`); // eslint-disable-line no-console
});

export default app;
