import https from 'https';
import fs from 'fs';
import util from 'util';
import fetch from 'node-fetch';
import pretty from 'pretty';
import ampOptimizer from 'amp-toolbox-optimizer';
import runtimeVersion from 'amp-toolbox-runtime-version';

const writeFilePromise = util.promisify(fs.writeFile);

const ampUrl = process.argv[2];

if (!ampUrl) {
  throw new Error('AMP URL is not defined.');
}

fetch(ampUrl)
  .then(res => res.text())
  .then(async originalHtml => {
    const ampRuntimeVersion = await runtimeVersion.currentVersion();
    const optimizedHtml = await ampOptimizer.transformHtml(originalHtml, {
      ampUrl,
      ampRuntimeVersion,
    });
    return Promise.all([
      writeFilePromise('original.html', pretty(originalHtml)),
      writeFilePromise('original.min.html', originalHtml),
      writeFilePromise('optimized.html', pretty(optimizedHtml)),
      writeFilePromise('optimized.min.html', optimizedHtml),
    ]);
  })
  .then(() => console.log('Well done!'))
  .catch(err => console.log('Woops! Something went wrong.', err));
