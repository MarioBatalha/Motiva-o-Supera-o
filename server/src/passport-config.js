const LocalStrategy = require('passport-local').Strategy



function initialize(passport, getCompanyByEmail) {
    const authenticateUser = (username, password, done) => {
        const company = getCompanyByEmail(email)
        if(company === null) {
            return done(null, false, { message: 'no user with that email'})
        }

        try {
            if(await compare(password, company.password)){
                return done(null, company)
            }else{
                return done(null, false, {message: 'password incorrect'})
            }
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'username'}), 
    authenticateUser)

    passport.serializeUser((company, done) => {

    })

    passport.deserializeUser((id, done) => { 

    })
}

module.exports = initialize;