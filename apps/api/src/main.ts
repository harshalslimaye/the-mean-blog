import app from './app/server';
import connect from './app/database';

async function bootstrap(): Promise<any> {
  try {
    const port = process.env.API_PORT || 8080;
    const connectionString = process.env.API_CONNECTION_STRING;
    const message = `Listening at http://localhost:${port}`;

    await connect(connectionString);
    await app.listen(port, () => console.log(message))
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
