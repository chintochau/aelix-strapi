  module.exports = {
    apps: [
      {
        name: 'aelix-strapi-dev',
        script: 'npm',
        args: 'run develop',
        env: {
          NODE_ENV: 'development',
        },
      },
    ],
  };
