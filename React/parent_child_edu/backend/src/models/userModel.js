const db = require('../config/db.js');

async function findUserByPhone(phone) {
    const [rows] = await db.query(`SELECT * FROM users WHERE phone = ? LIMIT 1`, [phone]);
    console.log(rows);
    return rows[0];
}

module.exports = {
    findUserByPhone
}