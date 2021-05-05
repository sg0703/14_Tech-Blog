// If no logged_in var present, user not logged in, send to login page

const withAuth = (req, res, next) => {
if (!req.session.loggedIn) {
    res.redirect('/login');
} else {
    next();
}
};
  
module.exports = withAuth;