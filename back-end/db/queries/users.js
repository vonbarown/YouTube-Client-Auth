const db = require('../db')

/* GET users listing. */
const getAllUsers = async () => {
    let users = await db.any('SELECT id,username FROM users ')

    return users
}

const addNewUser = async (user) => {
    console.log("user", user.username)
    const newUserQuery = "INSERT INTO users(username,password_digest) VALUES($1,$2) RETURNING username"

    let newUser = await db.one(newUserQuery, [user.username, user.password])
    return newUser
}

const getUserByUsername = async (username) => {
    let user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])
    return user
}

module.exports = {
    getAllUsers,
    addNewUser,
    getUserByUsername,
}
