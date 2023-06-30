const passport = require('passport');
const passportJwt = require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = "W@G8H<pV:(VR?;>J-Z;zbq~3W.Dy9j>y&?>q-k2$7Nk<`;.(:*"; //clave con la que firma el servidor y solo el la conoce.

passport.use(
    new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
    },
    (jwtPayload, done) => {
            if(jwtPayload.user === 'admin'){
                const usuario = jwtPayload;
                return done(null, usuario);
            }else{
                return done(null, false, {message: 'User not valid'});
            };
        }   
    )
);
// Creo el middleware de autenticación sin session
const authenticate = passport.authenticate('jwt', {session: false});

module.exports = { secret, authenticate };