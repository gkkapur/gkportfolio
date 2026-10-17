"""Create a portable preview, including documents and video, without hosting."""
from pathlib import Path
import base64
import json

root = Path(__file__).resolve().parent.parent
assets = {}
for path in (root / 'public' / 'research').iterdir():
    mime = 'application/pdf' if path.suffix == '.pdf' else 'video/mp4'
    assets[path.name] = {'mime': mime, 'data': base64.b64encode(path.read_bytes()).decode()}

bootstrap = 'const embeddedAssets = ' + json.dumps(assets) + ';\n'
bootstrap += "const previewAssets = Object.fromEntries(Object.entries(embeddedAssets).map(([name, asset]) => [name, URL.createObjectURL(new Blob([Uint8Array.from(atob(asset.data), c => c.charCodeAt(0))], {type: asset.mime}))]));\n"
research = (root / 'src/research.js').read_text().replace('export const researchContent', 'const researchContent')
research = research.replace('const asset = name => `/research/${name}`;', 'const asset = name => previewAssets[name];')
main = (root / 'src/main.js').read_text().replace("import './style.css';", '').replace("import { researchContent } from './research.js';", '')
main = main.replace("location.pathname.replace(/\\/$/, '').slice(1)", "location.hash.replace(/^#\\/?/, '')")
main = main.replace('href="/research"', 'href="#/research"').replace('href="/"', 'href="#/"')
main = main.replace("id === 'about' ? '/' : '/' + id", "id === 'about' ? '#/' : '#/' + id")
css = (root / 'src/style.css').read_text()
html = (root / 'index.html').read_text().replace('<script type="module" src="/src/main.js"></script>', '<style>' + css + '</style><script type="module">' + bootstrap + research + main + '</script>')
target = root.parent / 'portfolio-preview.html'
target.write_text(html)
print(f'Created {target} ({target.stat().st_size:,} bytes)')
