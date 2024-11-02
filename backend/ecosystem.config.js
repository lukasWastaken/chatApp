module.exports = {
  apps: [
    {
      name: 'chatApp',
      script: 'main.js',
      instances: 10,
      exec_mode: 'cluster',
    },
  ],
};
