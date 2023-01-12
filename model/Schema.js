import  { Schema } from 'moongose';

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

const Users = models.user || model('user', userSchema);

export default Users;