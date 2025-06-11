let sql = require('mssql')
module.exports = function(){
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