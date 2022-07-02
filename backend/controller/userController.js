// @desc Register New User
// @route POST /api/users
// @access   Public
const registerUser = (req, res) => {
	res.json({ message: 'Register User' });
};

// @desc Authenticate a user
// @route POST /api/users/login
// @access   Public
const loginUser = (req, res) => {
	res.json({ message: 'Login User' });
};

// @desc Get User Data
// @route GET /api/users.me
// @access   Public
const getUser = (req, res) => {
	res.json({ message: 'User Data Display' });
};

module.exports = {
	registerUser,
	loginUser,
	getUser,
};
