"""Create a portable preview, including documents and video, without hosting."""
from pathlib import Path
import base64
import json
import re
import mimetypes

root = Path(__file__).resolve().parent.parent
assets = {}
for path in [*(root / 'public' / 'research').iterdir(), *(root / 'public' / 'images').iterdir()]:
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    assets[path.name] = {'mime': mime, 'data': base64.b64encode(path.read_bytes()).decode()}

bootstrap = 'const embeddedAssets = ' + json.dumps(assets) + ';\n'
bootstrap += "const previewAssets = Object.fromEntries(Object.entries(embeddedAssets).map(([name, asset]) => [name, URL.createObjectURL(new Blob([Uint8Array.from(atob(asset.data), c => c.charCodeAt(0))], {type: asset.mime}))]));\n"
research = (root / 'src/research.js').read_text().replace('export const researchContent', 'const researchContent')
research = research.replace('const asset = name => `/research/${name}`;', 'const asset = name => previewAssets[name];')
awards = (root / 'src/awards.js').read_text().replace('export const ', 'const ')
awards = awards.replace('/research/${award.file}', '${previewAssets[award.file]}')
awards = awards.replace('/research/${award.relatedFile}', '${previewAssets[award.relatedFile]}')
main = (root / 'src/main.js').read_text().replace("import './style.css';", '').replace("import '@fontsource-variable/dm-sans';", '').replace("import { researchContent } from './research.js';", '').replace("import { awardsContent } from './awards.js';", '')
main = main.replace("'/images/guneet-kapur.webp'", "previewAssets['guneet-kapur.webp']")
font_root = root / 'node_modules/@fontsource-variable/dm-sans'
font_css = (font_root / 'index.css').read_text()
for font_path in re.findall(r'url\(\./(files/[^)]+)\)', font_css):
    data = base64.b64encode((font_root / font_path).read_bytes()).decode()
    font_css = font_css.replace(f'url(./{font_path})', f'url(data:font/woff2;base64,{data})')
css = font_css + '\n' + (root / 'src/style.css').read_text()
html = (root / 'index.html').read_text().replace('<script type="module" src="/src/main.js"></script>', '<style>' + css + '</style><script type="module">' + bootstrap + research + awards + main + '</script>')
target = root.parent / 'portfolio-preview.html'
target.write_text(html)
print(f'Created {target} ({target.stat().st_size:,} bytes)')
