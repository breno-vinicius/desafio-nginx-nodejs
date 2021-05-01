const db = require('./db');

async function getPeoples() {
    const rows = await db.query(
        `SELECT * FROM people`
    );
    return rows
}

async function createPeoples() {
    await db.query(`INSERT INTO people (name) VALUES (?), (?), (?)`, ["João", "Luna", "Marcio"])
}

module.exports = {
    getPeoples,
    createPeoples
}