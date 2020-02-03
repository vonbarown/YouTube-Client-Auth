const db = require('../db')

/* GET users listing. */
const getAllUsers = async () => await db.any('SELECT id,username FROM users ')



const addNewUser = async (user) => {
    const newUserQuery = "INSERT INTO users(username,password_digest) VALUES($1,$2) RETURNING username"
    return await db.one(newUserQuery, [user.username, user.password])

}

const getUserByUsername = async (username) => await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])


module.exports = {
    getAllUsers,
    addNewUser,
    getUserByUsername,
}
