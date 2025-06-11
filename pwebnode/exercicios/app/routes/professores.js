//let dbConnection = require('../config/dbConnection')
module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try{
                let connection = app.config.dbConnection;
                const pool = await connection();
                const result =  await pool.request().query('select*from professores')        
                res.render("informacao/professores",{profs: result.recordset})}
                catch(err){
                    console.log(err)
                }
        
}
getProfessores();   
});
}
