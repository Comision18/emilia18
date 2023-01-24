module.exports = {
    home : (req,res) => {
        return res.render('home')
    },
    about : (req,res) => {
        return res.render('about')
    },
    contact : (req,res) => {
        return res.render('contact')
    },
    music : (req,res) => {
        return res.render('music')
    }
}