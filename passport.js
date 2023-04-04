const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
};

const jwtStrategy = new JwtStrategy(jwtOptions, function(jwtPayload, next) {
  // 
  if (jwtPayload.id === 1) {
      next(null, true);
  } else {
      next(null, false);
  }
});

passport.use(jwtStrategy);

