const { age, date } = require("../../lib/utils")
const Intl = require('intl')

module.exports = {
    create(req, res) {
        return res.render('members/create')
    },
    index(req, res) {
        return res.render("members/index")
    },
    post(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("porfavor preencha todos os campos")
            }
        }

        return
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
