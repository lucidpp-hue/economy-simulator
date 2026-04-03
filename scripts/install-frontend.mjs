import { execSync } from 'child_process';
import path from 'path';

const frontendDir = path.join('/vercel/share/v0-project/services/2016-roblox-main');
console.log('Installing dependencies in:', frontendDir);
try {
  const result = execSync('npm install', { cwd: frontendDir, encoding: 'utf-8', timeout: 120000 });
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  console.error(err.stdout);
  console.error(err.stderr);
}
