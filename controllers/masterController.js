const conn = require('../database');
var fs = require('fs');
const moment = require('moment')

module.exports = {

    showDiskusi: (req,res) => {
        var sql = `SELECT * FROM diskusi;`

        conn.query(sql,(err, result) => {
            if(err) throw err;
            res.send(result)
        })
    },

    showDiskusiById: (req,res) => {
        var id = req.params.user_id
        var sql = `SELECT * FROM diskusi where user_id = '${id}'`
        conn.query(sql,(err, result) => {
            if(err) throw err;
            res.send(result)
            console.log(result)
        })
    },

    postDiskusi:(req,res)=>{
        var date = new Date()
        // var data = {
        //     user_id : req.body.user_id,
        //     diskusi :  req.body.diskusi,
        //     // diskusi_date : moment(date).format('YYYY-MM-DD hh:mm:ss')
        // }
        console.log('uuu ')
        var sql = `INSERT INTO diskusi set user_id=${req.body.user_id}, diskusi='${req.body.diskusi}';`
        conn.query(sql,(err,result)=>{
            if(err) throw err
            console.log(err)
            res.send(result)
        })
    }

    // postDiskusi:(req,res)=>{
    //     var date = new Date()
    //     // var {user_id, diskusi} = req.body
    //     // var diskusi = {user_id,diskusi_date}
    //     var data = {
    //         user_id : req.body.user_id,
    //         diskusi : req.body.diskusi,
    //         diskusi_date : date
    //     }
    //     var sql = `INSERT INTO diskusi set ?`
    //     conn.query(sql,(err,result)=>{
    //         if(err) throw err
    //         res.send(result)
    //         console.log(result)
    //     })
    // }
    ,
    postpone:(req,res)=>{
        console.log("Asdasd")
    },

    postone:(req,res)=>{
        var sql = `insert into diskusi set user_id = ${req.body.user_id}, diskusi = '${req.body.diskusi}';`
        conn.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
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