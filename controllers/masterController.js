const conn = require('../database');
var fs = require('fs');

module.exports = {

    masterPrinciple: (req,res) => {
        var sql = `select * from master where kode = 'principle';`

        conn.query(sql,(err, result) => {
            if(err) throw err;
            res.send(result)
        })
    },

    masterArea: (req,res) => {
        var sql = `select * from master where kode = 'area';`

        conn.query(sql,(err, result) => {
            if (err) throw err;
            res.send(result)
        })
    },

    masterDistributor: (req,res) => {
        var sql = `select * from master where kode = 'distributor';`

        conn.query(sql,(err, result) => {
            if(err) throw err;
            res.send(result)
        })
    }
}