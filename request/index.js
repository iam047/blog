const express = require('express');
const app = express();
const passport = require('passport');
const port = process.env.PORT || 5000;
const GitHubStrategy = require('passport-github').Strategy;
const GITHUB_CLIENT_ID = "3755509e8a57d214887d";
const GITHUB_CLIENT_SECRET = "e8c1f0f4c96b73a46c2317e89b2b84979419d561";

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, authorization');
    if (req.method === 'OPTIONS') {
        res.end();
    }
    next();
});


app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));
app.listen(port, () => console.log('App listening on port ' + port));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);

        redirect(http://localhost:8080/?accessToken)
    }
));


app.get('/success', (req, res) => res.send("You have successfully logged in"));
app.get('/error', (req, res) => res.send("error logging in"));

app.get('/auth/github',
    passport.authenticate('github'));

app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/error' }),
    function(req, res) {
        res.redirect('/success');
    });




