const pgp = require('pg-promise')();
const cn = "postgres://localhost:5432/youtube_client"

const db = pgp(cn)

module.exports = db
