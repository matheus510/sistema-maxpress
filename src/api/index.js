import { mssql } from '../db'
import { Router } from 'express'

export default () => {
	let api = Router()
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		mssql.query`SELECT * FROM Cidade`.then((result) => console.log(result))
		/* db.query('SELECT * FROM Cidades', (err, result) => {
			if (result) {
				console.log(result)
			}
			if (err) {
				console.log(err)	
			}
		})
		res.json({ version }) */
	})

	return api
}
