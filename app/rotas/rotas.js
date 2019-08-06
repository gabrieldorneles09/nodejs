module.exports = (app) => {
    app.get('/', function(req, res){
        res.marko(require('../views/jogadores/form/form'));
    });

    app.post('/inicio', function(req, res){
        res.send(
            `teste`
        )
    });
};