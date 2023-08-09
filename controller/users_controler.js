const User = require("../modules/users_module");


const createUser = async(req, res) => {
    const details = req.body;
    console.log(details.name,details.password)
    const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        interest: [req.body.interest]
    })
    newUser.save()
    .then(doc => {
        res.send(doc)
    }
    )
    .catch(err => {
        res.send(err)
    })
}

const getAllUers = async(req,res) =>{
 
        const users = await User.find()
        .then((doc,err)=>{
            res.send(doc)
        })
        .catch(err => {
            res.send(err.message)
        })
}

const findUser = async(req, res)=> {
    try{
        const {email, password} = req.body;
        if(!email || !password) return res.json("email and password required.")
        const doc = await User.findOne({email, password})
            return res.json(doc)
    }
    catch(err){
        res.send(err)
    }
}

const updateOne = async(req,res) =>{
 
        const users = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((doc,err)=>{
            res.send(doc)
        })
        .catch(err => {
            res.send(err.message)
        })
}

module.exports = {createUser, getAllUers, updateOne, findUser};