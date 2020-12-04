const Intl = require('intl')
const Instructor = require('../models/instructor')

module.exports = {
    index(req, res) {
    
         Instructor.all(function(instructors){
            return res.render('instructors/index', { instructors })
         })

    },
    create(req, res) {
        return res.render('instructors/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("porfavor preencha todos os campos")
            }
        }
        
        Instructor.create(req.body, function(instructor){
            return res.redirect(`/instructors/${instructor.id}`)
        })
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("porfavor preencha todos os campos")
            }
        }
        return
    },
    delete(req, res) {
        return
    }
}