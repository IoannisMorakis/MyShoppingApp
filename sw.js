if(!self.define){
    let e,i={};
    const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{
        if("document"in self){
            const e=document.createElement("script");
            e.src=s,e.onload=i,document.head.appendChild(e)
        }
        else e=s,importScripts(s),i()})).then((()=>{
            let e=i[s];
            if(!e)throw new Error(`Module ${s} didn’t register its module`);
            return e
        }))
    );
    self.define=(n,r)=>{
        const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;
        let o={};
        const t=e=>s(e,d),c={module:{uri:d},exports:o,require:t};
        i[d]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}
}
        
define(["./workbox-5b9d4414"],(function(e){
    "use strict";
    self.addEventListener("message",(e=>{
        e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()
    })),
    e.precacheAndRoute([
        {url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},
        {url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},
        {url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},
        {url:"dexie.min.js",revision:"2d348dec959cb6f0a0b5aafbc7dded44"},
        {url:"index.css",revision:"86c9b767767c74abaf372e62560d3349"},
        {url:"index.html",revision:"9a6df64e631b058fcaf80e0a9febd431"},
        {url:"index.js",revision:"d1e7bdf55068cd6970da2c5055a6e1ea"}
    ],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}
    )
}));




/*
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.keys().then(function(names) {
            for (let name of names)
                //caches.open(name).then(cache => cache.addAll(inputs));
                caches.delete(name);
                
        })

      
    )
  })
*/

//# sourceMappingURL=sw.js.map
