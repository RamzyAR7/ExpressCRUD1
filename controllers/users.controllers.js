const users = require('../models/module')



const getUsers = async (req, res) => {
    try {
        const allusers = await users.find() // dect of obj
        if (allusers.leangth == 0) {
            return res.send("no data");
        }
        res.status(200).json(allusers)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const createUsers = async (req, res) => {
    try {
        const user = await users.create(req.boy);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getUsersById = async (req, res) => {
    try {
        const allusers = await users.find() // dect of obj
        if (allusers.leangth == 0) {
            return res.send("no data");
        }
        res.status(200).json(allusers)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateUsers = async (req, res) => {
    try {
        const user = await users.findByIdAndUpdate(req.params.id, req.body);
        if (!user) {
            return res.send("NO such this id")
        }
        // to display the updated fild 
        const updated_user = await users.findById(req.params.id);
        res.status(201).json(updated_user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const user = await users.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.send("NO such this id")
        }
        res.status(200).json({ message: "deleted successfull" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
};