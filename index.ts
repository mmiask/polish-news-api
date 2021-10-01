import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './routes/sources';

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.use(logger('tiny'));
app.use(bodyParser.json());

app.use(router);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const err = new Error(`${req.method} ${req.url} Not Found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});