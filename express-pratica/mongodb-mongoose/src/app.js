import express from "express"
import { databaseConnection } from "./config/dbConnect.js"

const connection = await databaseConnection()
connection.on("error", (erro) => console.error("Erro na conexão com o banco de dados", erro))
connection.once("open", () => console.log("Conexão com o banco feita com sucesso"))

const app = express()
app.use(express.json())

const heroes = [
    {
        id: "1",
        heroName: "Zarya",
        players: []
    },
    {
        id: "2",
        heroName: "Soldier 76",
        players: []
    },
]

const players = [
    {
        id: "1",
        playerName: "Dafran",
        heroes: []
    },
    {
        id: "2",
        playerName: "Harbleu",
        heroes: []
    },
]

const favorites = [
    {
        idPlayer: "1",
        idHero: "1",
    },
    {
        idPlayer: "1",
        idHero: "2",
    },
    {
        idPlayer: "2",
        idHero: "1",
    },
    {
        idPlayer: "2",
        idHero: "2",
    },
]

function buscaPlayers(idPlayer){
    return players.findIndex((player) => player.id === idPlayer)
}

function buscaHeroes(idHero){
    return heroes.findIndex((hero) => hero.id === idHero)
}

function buscaFavorites(idFavorite){
    return favorites.findIndex((favorite) => favorite.id === idFavorite)
}

app.get("/", (req, res) => {
    res.status(200).send("Overwatch 2 - Hero Picker")
})

app.get("/player", (req, res) => {
    res.status(200).json(players)
})

app.post("/player", (req, res) => {
    players.push(req.body)
    res.status(201).json(players)
})

app.put("/player/:id", (req, res) => {
    const index = buscaPlayers(req.params.id)
    players[index].playerName = req.body.playerName
    res.status(200).json(players[index])
})

app.delete("/player/:id", (req, res) => {
    const index = buscaPlayers(req.params.id)
    players.splice(index, 1)
    res.status(200).json(players)
})

app.get("/player/:id", (req, res) => {
    const index = buscaPlayers(req.params.id)
    res.status(200).json(players[index])
})

app.get("/favorite", (req, res) => {
    res.status(200).json(favorites)
})

app.post("/favorite", (req, res) => {
    favorites.push(req.body)
    res.status(201).json(favorites)
})

app.delete("/favorite/:id", (req, res) => {
    const index = buscaFavorites(req.params.id)
    favorites.splice(index, 1)
    res.status(200).json(favorites)
})

app.get("/player/:id/favorite", (req, res) => {
    const index = buscaPlayers(req.params.id)
    res.status(200).json(players[index].heroes)
})

app.get("/hero", (req, res) => {
    res.status(200).json(heroes)
})

app.get("/hero/:id", (req, res) => {
    const index = buscaHeroes(req.params.id)
    res.status(200).json(heroes[index])
})

app.delete("/hero/:id", (req, res) => {
    const index = buscaHeroes(req.params.id)
    heroes.splice(index, 1)
    res.status(200).json(heroes)
})

app.post("/hero", (req, res) => {
    heroes.push(req.body)
    res.status(201).json(heroes)
})

export default app