const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./ws.db'); 

db.serialize(function() {

    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)
    
    //inserir dados na tabela4
     /*   const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?, ?, ?, ?, ?);
        `
        const values = [
            "https://img.icons8.com/material/60/000000/programming.png",
            "Cursos de Programação",
            "Estudo",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facere minima tenetur officiis hic, itaque iusto. Inventore architecto, est at illo similique in labore beatae, earum dicta, quia facilis natus.",
            "http://rocketseat.com.br" 
        ]

        db.run(query, values, function(err) {
            if(err) return console.log(err)

            console.log(this)
        });*/

    //deletar dado da tabela
   /* db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
        if(err) return console.log(err)

        console.log("DELETADO!")
    })*/
    
    //consultar dados da tabela
   /* db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) return console.log(err)

        console.log(rows)
    })*/

})

module.exports = db;