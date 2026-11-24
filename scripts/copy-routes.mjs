import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  'about', 'work', 'work/atlas-journal', 'work/forma', 'work/mori',
  'writing', 'writing/giao-dien-ro-rang', 'writing/chi-tiet-nho',
  'writing/xay-tung-buoc', 'notes', 'lab', 'uses', 'contact'
];
for (const route of routes) {
  const directory = join('dist', route);
  await mkdir(directory, { recursive: true });
  await copyFile(join('dist', 'index.html'), join(directory, 'index.html'));
}
console.log(`Prepared ${routes.length + 1} local static routes`);
