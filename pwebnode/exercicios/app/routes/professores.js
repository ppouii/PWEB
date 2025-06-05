module.exports = function(app){
    app.get('/informacao/professores', function(req,res){
            //res.render("informacao/professores");
        const sql = require('mssql');
const { options } = require('../config/server');

const sqlConfig = {
    user: 'BD2313018',
    password: 'Ppouii1546',
    database:'BD',
    server:'APOLO',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}
async function getProfessores() {
    try{
        const pool = await sql.connect(sqlConfig);

        const result =  await pool.request().query('select*from professores')

        //res.json(result.recordset);

        res.render("informacao/professores",{profs: result.recordset});

    }catch(err){
        console.log(err)
    }
    
}
getProfessores();
});
}
