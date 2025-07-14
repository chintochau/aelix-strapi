module.exports = {
  apps: [
    {
      name: 'aelix-strapi',
      script: 'npm',
      args: 'start',
      // The two lines below are removed
      // instances: 'max',
      // exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
