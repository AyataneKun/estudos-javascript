import * as mongoose from 'mongoose';
import { createConnection } from 'net';
import { error } from 'console';

class DataBase {
    private dburl = 'mongodb://localhost:27017/node-webnar';
    private dbconnection;

    constructor() { }

    createConnection() {
        mongoose.connect(this.dburl);
        this.logger(this.dburl);
    }

    logger(uri) {
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('Conectado!'));
        this.dbconnection.on('error', error => console.error.bind(console, "erro na conexão" + error));
    }
}

export default DataBase;