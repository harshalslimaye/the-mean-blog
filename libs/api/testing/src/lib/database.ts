import mongoose, { connect, connection, ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let dbServer: MongoMemoryServer;

export const dbConnect = async () => {
  mongoose.set('strictQuery', false);

  dbServer = await MongoMemoryServer.create();
  const uri = dbServer.getUri();

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions;

  await connect(uri, options);
};

export const dbDisconnect = async () => {
  await connection.dropDatabase();
  await connection.close();
  await dbServer.stop();
};
