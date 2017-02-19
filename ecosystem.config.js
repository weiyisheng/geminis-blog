module.exports = {
  apps : [
    {
      name      : "Blog",
      script    : "./entry",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      },
      interpreter_args: "–harmony"
    }
  ],
  deploy : {
    production : {
      user : "root",
      host : "37.139.22.91",
      ref  : "origin/master",
      repo : "git@github.com:weiyisheng/geminis-blog.git",
      path : "/var/www/production",
      "post-deploy" : "npm install && webpack -p --config webpack.production.config.js && pm2 startOrRestart ecosystem.config.js --env production"
    },
    dev : {
      user : "node",
      host : "37.139.22.91",
      ref  : "origin/master",
      repo : "git@github.com:repo.git",
      path : "/var/www/development",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
