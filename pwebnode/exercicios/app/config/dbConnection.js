let sql = require('mssql')
let connSQLServer = function(){
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
return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o db');
    return connSQLServer;
}