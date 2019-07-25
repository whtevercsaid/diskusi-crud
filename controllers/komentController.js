const conn = require('../database');
var fs = require('fs');
const moment = require('moment')

module.exports = {
    getKomentar:(req,res)=>{
        var sql = `SELECT
        k.id as id,
        u.username as username,
        d.diskusi as diskusi,
        k.isi_komentar as komentar,
        k.like_komentar as like_komentar,
        k.date as date
        FROM komentar k
        JOIN diskusi d ON k.id_diskusi = d.id
        JOIN user u ON k.id_user = u.id`
        conn.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    getKomentarById:(req,res)=>{
        var sql =`SELECT
        k.id as id,
        u.username as username,
        d.diskusi as diskusi,
        k.isi_komentar as komentar,
        k.like_komentar as like_komentar,
        k.date as date
        FROM komentar k
        JOIN diskusi d ON k.id_diskusi = d.id
        JOIN user u ON k.id_user = u.id
        WHERE id_user = ${req.params.id_user}`
        conn.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    postKomentar:(req,res)=>{
        var date = new Date()
        // var {user_id, diskusi} = req.body
        // var diskusi = {user_id,diskusi_date}
        var data = {
            id_user : req.body.id_user,
            id_diskusi : req.body.id_diskusi,
            isi_komentar : req.body.isi_komentar,
            like_komentar : req.body.like_komentar,
            date : date
        }
        var sql = `INSERT INTO komentar SET ?`
        conn.query(sql,data,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },

    updateKomentar:(req,res)=>{
        var data = {
            id : req.params.id,
            isi_komentar : req.body.isi_komentar,
            like_komentar : req.body.like_komentar
        }
        var sql = `UPDATE komentar SET isi_komentar = '${req.body.isi_komentar}', like_komentar = ${req.body.like_komentar}
        WHERE id = ${req.params.id}`

        conn.query(sql,(err,result)=>{
            if (err) throw err
            res.send(result)
        })
    },

    deleteKomentar:(req,res)=>{
        var sql = `DELETE FROM komentar where id='${req.params.id}'`
        conn.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    }
}