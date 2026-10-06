import catalog from './content.json';
import type { Root, Node } from 'fumadocs-core/page-tree';
export const pages = catalog.pages;
export const parameters = catalog.parameters;
export { origin } from './config';
export function getPage(slug?: string[]) {return pages.find(p=>p.url==='/' +(slug??[]).join('/') + ((slug??[]).length?'/':''));}
const roots=['products','integrations','solutions','pricing','security','help','support','review'];
const uiUrl=(url:string)=>url==='/'?'/':url.replace(/\/$/,'');
function nodes(prefix:string):Node[]{
 const level=prefix.split('/').filter(Boolean).length;
 return pages.filter(p=>p.url!==prefix&&p.url.startsWith(prefix)&&p.url.split('/').filter(Boolean).length===level+1).map(p=>{
 const children=nodes(p.url);
 return children.length?{type:'folder',name:p.navTitle??p.title,index:{type:'page',name:p.navTitle??p.title,url:uiUrl(p.url)},children}:{type:'page',name:p.navTitle??p.title,url:uiUrl(p.url)};
 });
}
export const tree:Root={name:'EasyWebinar',children:[{type:'page',name:'Start here',url:'/'},...roots.flatMap(r=>nodes('/').filter(n=>n.type==='folder'&&n.index?.url===`/${r}`)),...nodes('/').filter(n=>n.type==='page'&&n.url!=='/'&&!roots.includes(n.url.split('/')[1]))]};
