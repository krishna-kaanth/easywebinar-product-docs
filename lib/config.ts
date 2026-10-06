export const basePath=(process.env.NEXT_PUBLIC_BASE_PATH??'').replace(/\/$/,'');
export const origin=(process.env.NEXT_PUBLIC_SITE_URL??'https://easywebinar-product-docs-beta.krishna867525.chatgpt.site').replace(/\/$/,'');
export const withBasePath=(path:string)=>basePath+path;
