import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: [true, 'clerkId required']
    }, 
    username:{
        type: String,
        required: [true, 'username required']
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String,
        required: [true, 'image required']
    }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User