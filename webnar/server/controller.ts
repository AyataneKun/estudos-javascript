import model from './model';

class Controller{
    constructor(){}

    getContato(){
        return model.find({});
    }

    getContatoByID(id){
        return model.find(id);
    }

    deleteByID(id){
        return model.deleteOne(id);
    }

    updateContato(id, data){
        return model.findOneAndUpdate(id, data);
    }

    createContato(data){
        return model.create(data);
    }

    select(req,res){
        this.getContato()
            .then(contato => res.status(200).json({'results': contato}))
            .catch(err => res.status(400).json({'result': err}));
    }

    selectOne(req, res){
        const id = {_id : req.params.id}

        this.getContatoByID(id)
            .then(contato => res.status(200).json({'results': contato}))
            .catch(err => res.status(400).json({'result': err}));
    }

    delete(req, res){
        const id = {_id : req.params.id}

        this.deleteByID(id)
            .then(contato => res.status(200).json({'results': contato}))
            .catch(err => res.status(400).json({'result': err}));
    }

    update(req, res){
        const id = {_id : req.params.id}
        const data = req.body;

        this.updateContato(id, data)
            .then(contato => res.status(200).json({'results': contato}))
            .catch(err => res.status(400).json({'result': err}));
    }

    create(req, res){
        const data = req.body;

        this.createContato(data)
            .then(contato => res.status(200).json({'results': contato}))
            .catch(err => res.status(400).json({'result': err}));
    }
}

export default Controller;