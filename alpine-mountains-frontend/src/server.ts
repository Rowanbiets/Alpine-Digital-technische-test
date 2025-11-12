import express from 'express';
import { join } from 'path';
import bootstrapServerApp from './main.server';
import { writeFileSync } from 'fs';

const app = express();

// map naar Angular browser build
const browserDistFolder = join(__dirname, 'dist/browser');

app.use(express.static(browserDistFolder, { index: false }));

app.get('*', async (req, res) => {
  try {
    const appRef = await bootstrapServerApp;
    // SSR render (optioneel, simpel voorbeeld)
    res.sendFile(join(browserDistFolder, 'index.html'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const port = process.env['PORT'] || 4000;
app.listen(port, () => console.log(`SSR server running at http://localhost:${port}`));
