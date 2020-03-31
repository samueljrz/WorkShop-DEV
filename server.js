const express = require("express");
const db = require("./db");

const server = express()

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

server.get("/", function(req, res) {
    
    //consultar dados da tabela
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) {
            console.log(err)
            return res.send("ERRO NO BANCO DE DADOS !")
        }

        const reverseIdeas = [...rows].reverse()
        let lastIdeas = []
        for (idea of reverseIdeas) {
            if(lastIdeas.length < 2) {
                lastIdeas.push(idea)
            } 
        }
    
        return res.render("index.html", { ideas: lastIdeas })
    })
})

server.get("/ideias", function(req, res) {
    
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if(err) {
            console.log(err)
            return res.send("ERRO NO BANCO DE DADOS !")
        }
        
        console.log(rows)

        const reverseIdeas = [...rows].reverse()
    
        return res.render("ideias.html", { ideas: reverseIdeas })
    })
})

server.post("/", function(req, res) {

    //inserir dados na tabela4
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?, ?, ?, ?, ?);
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]

    db.run(query, values, function(err) {
        if(err) {
            console.log(err)
            return res.send("ERRO NO BANCO DE DADOS !")
        }

        return res.redirect("/ideias")
    });
})

server.delete("/ideias/:id", function(req, res) {
    const { id } = req.params;
    
    //deletar dado da tabela
    db.run(`DELETE FROM ideas WHERE id = ?`, id, function(err) {
        if(err) {
            console.log(err)
            return res.send("ERRO NO BANCO DE DADOS !")
        }

        return res.redirect("/ideias")
    })
});

server.listen(3000)
