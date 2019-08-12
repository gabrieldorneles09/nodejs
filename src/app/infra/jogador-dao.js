class JogadorDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.query('SELECT * FROM jogadores', (erro, resultados) => {
                if(erro) return reject('Não foi possível listar os jogadores');

                return resolve(resultados);
            });
        });
    }

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.query(`SELECT * FROM jogadores WHERE id = ${id}`, (erro, resultados) => {
                if(erro) return reject('Não foi possível listar os jogadores');

                return resolve(resultados);
            });
        });
    }

    adiciona(reqBody){
        return new Promise((resolve, reject) => {
            this._db.query(`
                INSERT INTO jogadores (id, nome, email) VALUES ('${reqBody.id}', '${reqBody.name}', '${reqBody.email}') 
                `, (erro, resultados) => {
                    if(erro) return reject('Não foi possível inserir o jogador');

                    return resolve();
                });
        });
    }

    remove(id){
        return new Promise((resolve, reject) => {
            this._db.query(`
                DELETE FROM jogadores WHERE id = ${id}
            `, (erro, resultados) => {
                if(erro) return reject('Não foi possível remover o registro');

                return resolve();
            })
        })
    }

    atualiza(reqBody){
        return new Promise((resolve, reject) => {
            this._db.query(`
                UPDATE jogadores SET id = ${reqBody.id}, nome = '${reqBody.name}', email = '${reqBody.email}'
                WHERE id = ${reqBody.id}`, (erro, resultados) => {
                if(erro) return reject('Não foi possível atualizar o registro');

                return resolve();
            });
        });
    }

}

module.exports = JogadorDao;