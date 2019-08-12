const pool = require('../../config/database');
const LivroDao = require('../infra/jogador-dao');

module.exports = (app) => {
    app.get('/form', function(req, res){
        res.marko(require('../views/jogadores/form/form', {jogador: {}}));
    });
    
    app.get('/jogadores', function(req, res){
        const livroDao = new LivroDao(pool);

        livroDao.lista()
            .then(jogadores => res.marko(
                require('../views/jogadores/listagem/lista'), data = {jogadores: jogadores.rows}
            ))
            .catch(erro => console.log(erro));

    });

    app.get('/jogadores/form/:id', function(req, res){
        const id = req.params.id;
        const livroDao = new LivroDao(pool);

        livroDao.buscaPorId(id)
            .then(jogadores => {
                res.marko(
                    require('../views/jogadores/form/form.marko'),
                    data = { jogadores: jogadores.rows[0] }
                )
            })
            .catch(erro => console.log(erro));
    });

    app.post('/jogadores', function(req, res){
        const livroDao = new LivroDao(pool);

        livroDao.adiciona(req.body)
            .then(res.redirect('/jogadores'))
            .catch(erro => console.log(erro));

    }); 

    app.put('/jogadores', function(req, res){
        const livroDao = new LivroDao(pool);

        livroDao.atualiza(req.body)
            .then(res.redirect('/jogadores'))
            .catch(erro => console.log(erro));

    }); 

    app.delete('/jogadores/:id', function(req, res){
        const id = req.params.id;

        const livroDao = new LivroDao(pool);
        livroDao.remove(id)
            .then(() => res.status(200).end())
            .catch(erro => console.log(erro));
    });
};