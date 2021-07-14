const User = ('../models/users.models');

module.exports = {
    register: (req,reson) => {
        const newUser = new User(req.body);
        console.log(newUser);
        newUser.save()
            .then(()=> {
                console.log("Successfully registered");
                res.json({
                    message: "Successfully registered",
                    user: newUser,
                })
            })
            .catch((err) => {
				console.log(err);
				res.status(400).json(err);
			})
    },
}