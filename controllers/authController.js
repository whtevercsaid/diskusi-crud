var Crypto = require('crypto');
const conn = require('../database');

module.exports = {
    login: (req,res) => {

        var { username, password } = req.body;
    
        const hashPassword = Crypto.createHmac('sha256', "abcd123")
        .update(`${password}`).digest('hex');

        var sql = `SELECT * FROM user WHERE user_username = '${username}' AND user_password = '${hashPassword}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            //console.log(`Hash: ${hash}, Hash2: ${hash2}`)
            console.log(req.body)
            console.log(result);
            //var lastlogin = moment().format('YYYY-MM-DD HH:mm:ss');
            var updateLogin = {
                lastlogin: new Date()
            }
            var sql2 = `UPDATE user SET ? WHERE user_username ='${username}';`;
            conn.query(sql2, updateLogin, (err, result2) => {
                if (err) throw err;
                console.log(result2);
            }) 

            res.send(result);
        })
    },
    keeplogin: (req,res) => {

        var { username } = req.body;

        var sql = `SELECT * FROM user WHERE user_username = '${username}';`;
        conn.query(sql, (err, result) => {
            if(err) throw err;
            console.log(req.body)
            console.log(result);
            res.send(result);
        })
    }
}