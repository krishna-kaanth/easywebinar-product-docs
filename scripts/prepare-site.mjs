import fs from 'node:fs';
const file='lib/content.json';const catalog=JSON.parse(fs.readFileSync(file,'utf8'));
const origin=(process.env.NEXT_PUBLIC_SITE_URL??'https://easywebinar-product-docs-beta.krishna867525.chatgpt.site').replace(/\/$/,'');
const clean=s=>s.replace(/\bHubspot\b/g,'HubSpot').replace(/\bEasycrm\b/g,'EasyCRM').replace(/\bCrm\b/g,'CRM').replace(/\bApi\b/g,'API').replace(/\bRtmp\b/g,'RTMP').replace(/\bGohighlevel\b/g,'GoHighLevel').replace(/\bSoc2\b/g,'SOC 2');
const shorten=(text,n)=>text.length<=n?text:text.slice(0,n-1).replace(/\s+\S*$/,'').replace(/[.,;: ]+$/,'')+'.';
const counts=new Map();for(const p of catalog.pages)counts.set(clean(p.title),(counts.get(clean(p.title))??0)+1);
for(const p of catalog.pages){
 p.title=clean(p.title);p.navTitle=clean(p.navTitle);const title=counts.get(p.title)>1?p.title+' — '+p.url.split('/').filter(Boolean).slice(0,-1).join(' / ').replaceAll('-',' '):p.title;
 p.seoTitle=title+' | EasyWebinar Docs';
 let description;
 if(p.url==='/')description='EasyWebinar product documentation for live, automated and on-demand webinars, AI creation, EasyCRM, EasyCast, integrations and detailed feature review.';
 else if(p.parameters.length){const first=p.parameters[0];const purpose=first.answers[0].paragraphs[0];description='Review '+p.title+': '+purpose;}
 else if(p.children.length)description='Explore '+p.title+', including '+p.children.slice(0,3).map(c=>clean(c.title)).join(', ')+'. Read workflow scope, requirements and detailed documentation.';
 else description='Review '+p.title+' in EasyWebinar. '+(p.intro[0]??'Understand the workflow, buyer value, implementation requirements and current source limitations.');
 p.metaDescription=shorten(description.replace(/\s+/g,' '),160);
 const pageUrl=origin+p.url;const sections=p.url.split('/').filter(Boolean);const breadcrumb=[{'@type':'ListItem',position:1,name:'Documentation',item:origin+'/'}];
 sections.forEach((name,i)=>breadcrumb.push({'@type':'ListItem',position:i+2,name:clean(name.replaceAll('-',' ')),item:origin+'/'+sections.slice(0,i+1).join('/')+'/'}));
 const kind=p.children.length?'CollectionPage':p.url.startsWith('/review/')||p.url==='/'?'WebPage':'TechArticle';p.schemaType=kind;
 const page={'@type':kind,'@id':pageUrl+'#document',url:pageUrl,name:p.title,...(kind==='TechArticle'?{headline:p.title}:{}),description:p.metaDescription,inLanguage:'en',dateModified:'2026-10-06',creativeWorkStatus:'Draft',isPartOf:{'@id':origin+'/#website'},publisher:{'@id':origin+'/#publisher'},breadcrumb:{'@id':pageUrl+'#breadcrumb'},...(p.parameters.length?{about:p.parameters.map(e=>({'@type':'Thing','@id':pageUrl+'#'+e.anchor,name:e.parameter,description:e.definition+' Source status: '+e.status+'.'}))}:{}),...(p.children.length?{hasPart:p.children.map(c=>({'@type':'WebPage',name:clean(c.title),url:origin+c.url}))}:{})};
 p.schema={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':origin+'/#publisher',name:'EasyWebinar',url:'https://easywebinar.com',logo:origin+'/easywebinar-logo-black.svg'},{'@type':'WebSite','@id':origin+'/#website',name:'EasyWebinar Product Documentation',url:origin+'/',inLanguage:'en',publisher:{'@id':origin+'/#publisher'}},page,{'@type':'BreadcrumbList','@id':pageUrl+'#breadcrumb',itemListElement:breadcrumb}]};
}
for(const p of catalog.pages)for(const child of p.children){const target=catalog.pages.find(x=>x.url===child.url);if(target){child.title=target.title;child.description=target.metaDescription;}}
if(new Set(catalog.pages.map(p=>p.seoTitle)).size!==catalog.pages.length)throw Error('Duplicate SEO title');
if(new Set(catalog.pages.map(p=>p.metaDescription)).size!==catalog.pages.length)throw Error('Duplicate meta description');
fs.writeFileSync(file,JSON.stringify(catalog,null,2));
const quote=s=>'"'+String(s).replaceAll('"','""')+'"';const rows=[['URL','Page Title','Meta Description','Canonical URL','Depth','Schema Type','Schema ID','Robots'],...catalog.pages.map(p=>[p.url,p.seoTitle,p.metaDescription,origin+p.url,p.depth,p.schemaType,origin+p.url+'#document','noindex,nofollow'])];
fs.writeFileSync('public/downloads/easywebinar-page-metadata-v1.csv',rows.map(row=>row.map(quote).join(',')).join('\n')+'\n');
fs.writeFileSync('public/downloads/easywebinar-schema-by-url.json',JSON.stringify(Object.fromEntries(catalog.pages.map(p=>[p.url,p.schema])),null,2));
fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+catalog.pages.map(p=>'<url><loc>'+origin+p.url+'</loc><lastmod>2026-10-06</lastmod></url>').join('')+'</urlset>');
fs.writeFileSync('public/search-index.json',JSON.stringify([...catalog.pages.map(p=>({title:p.title,url:p.url,text:p.intro.join(' ')})),...catalog.parameters.map(e=>({title:e.id+' · '+e.parameter,url:e.destination+'#'+e.anchor,text:e.definition+' '+e.section+' '+e.status}))]));
fs.writeFileSync('public/llms.txt','# EasyWebinar Product Documentation — Review Beta\n\n> Public link access. noindex review draft; capabilities require source validation.\n\n'+catalog.pages.map(p=>'- ['+p.title+']('+origin+p.url+'): '+p.metaDescription).join('\n'));
console.log('Prepared '+catalog.pages.length+' unique page titles, descriptions and JSON-LD graphs for '+origin);
