const path = require('path');

const app = require(path.resolve(__dirname, 'config', 'express'));
const api_config = require(path.resolve(__dirname, 'config', 'api'));
require(path.resolve(__dirname, 'config', 'database'));

app.listen(api_config.API_PORT, () => {
  console.log('\n');
  console.log('========================================');
  console.log('Server Running...');
  console.log(`HOST: ${api_config.API_HOST}`, `PORT: ${api_config.API_PORT}`);
  console.log('========================================');
  console.log('\n');
});
