import json,csv,re,os
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path(__file__).resolve().parent.parent
content=json.loads((root/'lib/content.json').read_text());pages=content['pages'];entries=content['parameters'];routes={p['url'] for p in pages};out=root/'out'
origin=os.environ.get('NEXT_PUBLIC_SITE_URL','https://easywebinar-product-docs-beta.krishna867525.chatgpt.site').rstrip('/')
base=os.environ.get('NEXT_PUBLIC_BASE_PATH','').rstrip('/')
class Document(HTMLParser):
 def __init__(self):super().__init__();self.ids=set();self.links=[];self.meta={};self.canonical=None;self.text=[];self.skip=0;self.jsonld=[];self.jsonbuf=None;self.title=[];self.in_title=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag in ('script','style'):self.skip+=1
  if tag=='script' and a.get('type')=='application/ld+json':self.jsonbuf=[]
  if tag=='title':self.in_title=True
  if 'id' in a:self.ids.add(a['id'])
  if tag=='a' and a.get('href'):self.links.append(a['href'])
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
 def handle_endtag(self,tag):
  if tag=='script' and self.jsonbuf is not None:self.jsonld.append(json.loads(''.join(self.jsonbuf)));self.jsonbuf=None
  if tag=='title':self.in_title=False
  if tag in ('script','style'):self.skip=max(0,self.skip-1)
 def handle_data(self,data):
  if self.jsonbuf is not None:self.jsonbuf.append(data)
  if self.in_title:self.title.append(data)
  if not self.skip:self.text.append(data)
def norm(x):return ' '.join(x.split())
assert len(entries)==623 and len({e['id'] for e in entries})==623
assert len([e for e in entries if not e['id'].startswith('EW')])==571
assert len(pages)==259 and len(routes)==259
assert max(len(x.strip('/').split('/')) for x in routes)<=4
parsed={};schema_export=json.loads((out/'downloads/easywebinar-schema-by-url.json').read_text())
for p in pages:
 file=out/p['url'].strip('/')/'index.html' if p['url']!='/' else out/'index.html'
 assert file.exists(),('missing rendered route',p['url'])
 d=Document();d.feed(file.read_text());parsed[p['url']]=d
 assert 'noindex' in d.meta.get('robots',''),('indexing exposed',p['url'])
 assert d.canonical==origin+p['url'],('canonical',p['url'],d.canonical)
 assert ''.join(d.title)==p['seoTitle'],('SEO title',p['url'])
 assert d.meta.get('description')==p['metaDescription'],('meta description',p['url'])
 assert 30<=len(p['metaDescription'])<=160
 assert len(d.jsonld)==1 and d.jsonld[0]==schema_export[p['url']]==p['schema'],('schema differs',p['url'])
 graph=d.jsonld[0]['@graph'];document=next(n for n in graph if n['@id']==origin+p['url']+'#document')
 assert document['url']==d.canonical and document['description']==d.meta['description'] and document['name']==p['title']
 assert document['@type']==p['schemaType']
 crumb=next(n for n in graph if n['@type']=='BreadcrumbList')['itemListElement']
 assert crumb[-1]['item']==d.canonical and [n['position'] for n in crumb]==list(range(1,len(crumb)+1))
 assert set(n['@type'] for n in graph)<= {'WebPage','CollectionPage','TechArticle','Organization','WebSite','BreadcrumbList'}
 text=norm(' '.join(d.text))
 for e in p['parameters']:
  assert e['anchor'] in d.ids,('missing microfeature',e['id'])
  for answer in e['answers']:
   assert answer['question'] in text,('missing question',e['id'])
   for paragraph in answer['paragraphs']:assert norm(paragraph) in text,('explanation missing without JS',e['id'])
assert len({''.join(d.title) for d in parsed.values()})==259
assert len({d.meta['description'] for d in parsed.values()})==259
for path,d in parsed.items():
 for href in d.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=u.path or base+path
  if not target.startswith('/'):continue
  if base:
   assert target==base or target.startswith(base+'/'),('missing GitHub project prefix',path,href)
   target=target[len(base):] or '/'
  if '.' in target.split('/')[-1]:
   assert (out/unquote(target.lstrip('/'))).exists(),('missing download/asset',target)
   continue
  target='/' if target=='/' else target.rstrip('/')+'/'
  assert target in routes,('broken internal route',path,href)
  if u.fragment:assert unquote(u.fragment) in parsed[target].ids,('broken internal anchor',path,href)
assert len(list(csv.DictReader((out/'downloads/easywebinar-review-worksheet.csv').open())))==623
assert len(list(csv.DictReader((out/'downloads/easywebinar-documentation-urls-v1.csv').open())))==259
assert len(json.loads((out/'search-index.json').read_text()))==882
assert (out/'sitemap.xml').read_text().count('<loc>')==259 and origin+'/products/' in (out/'sitemap.xml').read_text()
assert 'Disallow: /' in (out/'robots.txt').read_text()
with (out/'downloads/easywebinar-page-consolidation-map.csv').open() as f: consolidation=list(csv.DictReader(f))
with (out/'downloads/easywebinar-parameter-consolidation-map.csv').open() as f: sectionmap=list(csv.DictReader(f))
with (out/'downloads/easywebinar-production-candidate-urls.csv').open() as f: proposed={row['URL'] for row in csv.DictReader(f)}
assert len(consolidation)==259 and {row['Beta URL'] for row in consolidation}==routes
assert len(sectionmap)==623 and {row['ID'] for row in sectionmap}=={e['id'] for e in entries}
assert len(proposed)==130 and len(proposed-routes)==7
assert all(not row['Proposed Production URL'] or row['Proposed Production URL'] in proposed for row in consolidation)
assert all(not row['Proposed Production Section URL'] or row['Proposed Production Section URL'].split('#')[0] in proposed for row in sectionmap)
report=dict(result='passed',renderedPages=259,originalParameters=571,supplementalControls=52,totalDetailedSections=623,maxURLDepth=4,origin=origin,basePath=base,uniqueTitles=259,uniqueMetaDescriptions=259,validatedSchemaGraphs=259,checks=['Every route exported','Every four-part explanation present in HTML without JavaScript','All internal links and parameter anchors resolve','Unique titles and descriptions match metadata CSV source','Every JSON-LD graph matches the schema export, page URL and breadcrumbs','Canonical URLs and noindex metadata on every page','CSV rows, search index and sitemap agree with source','Beta robots policy retained','259 page decisions and all 623 parameter migration targets covered'])
(root/'verification.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
