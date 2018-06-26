import config from '../db_user.credentials'
import sql from 'mssql'

export default function () {	
	return sql.connect(config).then(() => {
		console.log('conectado ao banco')
		return sql
	})
}
export const mssql = sql