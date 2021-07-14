const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
    },
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: 2,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
}, {timestamps: true});



UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);



UserSchema.pre("validate", function(next){
    if (this.password !== this.confirmPassword) {
        console.log(this.password);
        console.log(this.confirmPassword);
        this.invalidate("confirmPassword", "Passwords didn't match.  Please try again.");
    }

    next();
})


UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            console.log("Password: " + this.passowrd);
            console.log("Hashed: " + hashedPassword);
            this.password = hashedPassword;
            next();
        })
        .catch
})


const User = mongoose.model("User", UserSchema);

module.exports = User;