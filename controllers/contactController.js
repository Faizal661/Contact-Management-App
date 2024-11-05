

const homePage=async(req,res)=>{
    try {
        res.render('homePage')
    } catch (error) {
        res.send('server side error')
    }
}

module.exports={
    homePage
}