const UserModel = require('../models/user');
const userOperations = {
    async register(userObject){
        const result = await UserModel.create(userObject);
        return result._id;
    },
    async login({userid, password}){
            const result =await UserModel.findOne({"userid":userid,"password":password});
            return result;
        }
    }
    module.exports = userOperations;