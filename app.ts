import dotenv from 'dotenv';
import Server from './models/server';

const server = new Server();

server.listen();

dotenv.config();