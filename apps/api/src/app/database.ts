import { connect, ConnectOptions, set } from 'mongoose';

export default (connectionString: string) => {
  set('strictQuery', false);

  return connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
}
