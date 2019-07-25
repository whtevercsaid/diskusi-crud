const conn = require('../database');
var fs = require('fs');
const moment = require('moment')

module.exports = {

    showDiskusi: (req,res) => {
        var sql = `SELECT
        d.id as id,
        u.username as username,
        d.diskusi as diskusi,
        diskusi_date as date
        FROM diskusi d
        JOIN user u ON d.user_id = u.id`

        conn.query(sql,(err, result) => {
            if(err) throw err;
            res.send(result)
        })
    },

    showDiskusiById: (req,res) => {
        var sql = `SELECT
        d.id as id,
        u.username as username,
        d.diskusi as diskusi,
        diskusi_date as date
        FROM diskusi d
        JOIN user u ON d.user_id = u.id
        WHERE user_id = '${req.params.user_id}'`
        conn.query(sql,(err, result) => {
            if(err) throw err;
            res.send(result)
            console.log(result)
        })
    },

    postDiskusi:(req,res)=>{
        var date = new Date()
        // var {user_id, diskusi} = req.body
        // var diskusi = {user_id,diskusi_date}
        var data = {
            user_id : req.body.user_id,
            diskusi : req.body.diskusi,
            diskusi_date : date
        }
        console.log(data)
        console.log(req.body)

        var sql = `INSERT INTO diskusi set ?`
        conn.query(sql,data,(err,result)=>{
            if(err) throw err
            res.send(result)
            console.log(result)
        })
    },

    updateDiskusi:(req,res)=>{
        var data = {
            id : req.params.id,
            diskusi : req.body.diskusi
        }

        var sql = `UPDATE diskusi
        SET diskusi = '${req.body.diskusi}'
        WHERE id = '${req.params.id}';`

        conn.query(sql,data,(err,result)=>{
            if(err) throw err
            res.send(result)
            console.log(result)
        })
    },

    deleteDiskusi:(req,res)=>{
        var sql = `DELETE FROM diskusi where id='${req.params.id}'`
        conn.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
            console.log(result)
        })
    }

}