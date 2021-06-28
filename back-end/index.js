const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_QUERY = 'SELECT * FROM voiture'
const SELECT_QUERY2 = "SELECT Voiture.matricule FROM Voiture, Vente WHERE Voiture.matricule= Vente.voiturre_matricule AND dat> '20201024 10:34:12 AM'"
const SELECT_QUERY3 = "   SELECT Voiture.matricule FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule AND prixachat-cout >= ALL (SELECT prixachat-cout FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule)"
const SELECT_QUERY4 = 'SELECT nomv,prenom FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule AND prixachat-cout >= ALL (SELECT prix-prixachat FROM Voiture,Vente WHERE Voiture.matricule= Vente.voiturre_matricule)        '
const SELECT_QUERY5 = " SELECT COUNT(noma) AS nom_total FROM vente WHERE  dat='20210623 10:34:09 AM' AND  voiturre_matricule='dacia'"
const SELECT_QUERY6 = '  SELECT SUM(salaire) FROM vendeur'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vente_voiture'
})

connection.connect(err => {
    if(err) {
        return err;
    }
})

app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello')
})

app.get('/voiture', (req, res) => {
    connection.query(SELECT_QUERY, (err, resultados) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: resultados
            })
        }
    })
})

app.get('/2', (req, res) => {
  connection.query(SELECT_QUERY2, (err, resultados) => {
      if(err) {
          return res.send(err)
      } else {
          return res.json({
              data: resultados
          })
      }
  })
})
app.get('/3', (req, res) => {
  connection.query(SELECT_QUERY3, (err, resultados) => {
      if(err) {
          return res.send(err)
      } else {
          return res.json({
              data: resultados
          })
      }
  })
})
app.get('/4', (req, res) => {
  connection.query(SELECT_QUERY4, (err, resultados) => {
      if(err) {
          return res.send(err)
      } else {
          return res.json({
              data: resultados
          })
      }
  })
})
app.get('/5', (req, res) => {
  connection.query(SELECT_QUERY5, (err, resultados) => {
      if(err) {
          return res.send(err)
      } else {
          return res.json({
              data: resultados
          })
      }
  })
})

app.get('/6', (req, res) => {
  connection.query(SELECT_QUERY6, (err, resultados) => {
      if(err) {
          return res.send(err)
      } else {
          return res.json({
              data: resultados
          })
      }
  })
})

app.listen(5000, () => {
    console.log('port 5000')
})