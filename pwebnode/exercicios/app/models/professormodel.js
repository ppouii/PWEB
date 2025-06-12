module.exports = function(){
 
    this.getProfessores = function(connection, callback){
         connection.query('select * from professores', callback);
    }
   
    this.getProfessor = function(connection, callback){
         connection.query('select * from professores WHERE ID_professor=5', callback);
    }
   
    this.salvarProfessor = funciton(professores, connection, callback){
        connection.query("INSERT INTO professor (NOME_PROFESSOR,EMAIL_PROFESSOR) VALUES('"+professores.nome_professor+"','"+professores.email_professor+"')", callback)
      };
     return this;
   


  }