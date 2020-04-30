export const authCheck = (req, res, next) => {
  if (!req.user) {
    // If user is not logged in
    res.redirect("/auth/login");
  } else {
    next();
  }
};
