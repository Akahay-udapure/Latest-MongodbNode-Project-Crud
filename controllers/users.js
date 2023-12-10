const { ObjectId } = require("mongodb");
const { connection } = require("../connection");

exports.createUser = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).json({
                status: 400,
                message: "Request body is missing",
            });
            return;
        }
        const db = await connection();
        await db.collection("User").insertOne(req.body);
        res.json({ status: 200, message: "success" });
    } catch (error) {
        console.log(error);
        res.json({ status: 400, message: "Unable to create user" });
    }
};

exports.fetchUser = async (req, res) => {
    try {
        const db = await connection();
        const users = await db.collection("User").find({}).toArray();
        if (users.length) res.json({ status: 200, message: "found", data: users });
        else res.json({ status: 200, message: "Users not found" });
    } catch {
        res.json({ status: 400, message: "Unable to find the users" });
    }
};

exports.findOne = async (req, res) => {
    try {
        const db = await connection();
        const user = await db
            .collection("User")
            .findOne({ _id: new ObjectId(req.query.userId) });
        if (user) res.json({ status: 200, message: "found", data: user });
        else res.json({ status: 200, message: "User not found" });
    } catch (error) {
        res.json({ status: 400, message: "Unable to find the user" });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const db = await connection();
        await db
            .collection("User")
            .deleteOne({ _id: new ObjectId(req.query.userId) });
        res.json({ status: 200, message: "deleted" });
    } catch (error) {
        res.json({ status: 400, message: "Unable to delete the user" });
    }
};

exports.deleteAllUser = async (req, res) => {
    try {
        const db = await connection();
        await db.collection("User").deleteMany({});
        res.json({ status: 200, message: "deleted" });
    } catch (error) {
        res.json({ status: 400, message: "Unable to delete the user" });
    }
};
