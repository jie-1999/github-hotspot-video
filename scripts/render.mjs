import {bundle} from '@remotion/bundler';
import {selectComposition, renderMedia} from '@remotion/renderer';
import path from 'node:path';
const root=process.cwd(); const id=process.argv.includes('--real')?'GithubHotspotReal':'GithubHotspot'; const output=process.argv.includes('--real')?'github-hotspot-context-mode-real.mp4':'github-hotspot-context-mode.mp4'; const serveUrl=await bundle({entryPoint:path.join(root,'src','index.ts'),publicDir:path.join(root,'public'),onProgress:()=>{}}); const comp=await selectComposition({serveUrl,id}); await renderMedia({serveUrl,composition:comp,outputLocation:path.join(root,'out',output),codec:'h264',crf:18,audioBitrate:'192k',concurrency:4,logLevel:'error'}); console.log('Rendered',id,output);
