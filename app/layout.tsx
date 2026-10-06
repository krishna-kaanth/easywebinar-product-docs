import './globals.css';
import { withBasePath } from '@/lib/config';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { tree } from '@/lib/source';
import { Search } from '@/components/controls';
export const metadata={title:{default:'EasyWebinar Product Documentation · Beta v1',template:'%s'},description:'A complete internal review draft of EasyWebinar products, features, limitations and buyer requirements.',robots:{index:false,follow:false},icons:{icon:withBasePath('/favicon.svg')}};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en" suppressHydrationWarning><body className="flex flex-col min-h-screen"><RootProvider theme={{defaultTheme:'light',enableSystem:false}} search={{enabled:false}}><DocsLayout tree={tree} nav={{title:<span className="brand"><img className="logo-light" src={withBasePath('/easywebinar-logo-black.svg')} alt="EasyWebinar" width="195" height="33"/><img className="logo-dark" src={withBasePath('/easywebinar-logo-white.svg')} alt="EasyWebinar" width="195" height="33"/><small>PRODUCT DOCUMENTATION</small></span>}} links={[{type:'custom',children:<Search/>},{text:'Review guide',url:'/review/'}]}><div className="beta-strip">BETA V1 · Internal review draft · Source snapshot: September 2026</div>{children}</DocsLayout></RootProvider></body></html>;}
