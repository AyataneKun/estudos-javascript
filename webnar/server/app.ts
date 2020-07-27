import * as express from 'express';
import database from './db';
import controller from './controller';
import * as bodyparser from 'body-parser'


class App {
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.controller = new controller();
        this.routes();
    }

    middleware() {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({ "result": "Hello World!" }));
        this.app.route('/api/contatos').get((req, res) => this.controller.select(req, res));
        this.app.route('/api/contatos/:id').get((req, res) => this.controller.selectOne(req, res));
        this.app.route('/api/contatos/:id').delete((req, res) => this.controller.delete(req, res));
        this.app.route('/api/contatos/:id').put((req, res) => this.controller.update(req, res));
        this.app.route('/api/contatos').post((req, res) => this.controller.create(req, res));
    }
}

export default new App();