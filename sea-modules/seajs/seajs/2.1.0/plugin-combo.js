(function(j){function r(d){for(var e={__KEYS:[]},f=0,c=d.length;f<c;f++)for(var h=d[f].replace("://","__").split("/"),b=e,a=0,g=h.length;a<g;a++){var l=h[a];b[l]||(b[l]={__KEYS:[]},b.__KEYS.push(l));b=b[l]}d=[];f=e.__KEYS;c=0;for(h=f.length;c<h;c++){b=a=f[c];a=e[a];for(g=a.__KEYS;1===g.length;)b+="/"+g[0],a=a[g[0]],g=a.__KEYS;g.length&&d.push([b.replace("__","://"),s(a)])}return d}function s(d){for(var e=[],f=d.__KEYS,c=0,h=f.length;c<h;c++){var b=f[c],a=s(d[b]),g=a.length;if(g)for(var l=0;l<g;l++)e.push(b+
"/"+a[l]);else e.push(b)}return e}function t(d){for(var e=0,f=d.length;e<f;e++){for(var c=d[e],h=c[0]+"/",b=c[1],c=[],a={},g=0,l=b.length;g<l;g++){var k=b[g],j;j=k;var m=j.lastIndexOf(".");(j=0<=m?j.substring(m):"")&&(a[j]||(a[j]=[])).push(k)}b=void 0;for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);a=0;for(b=c.length;a<b;a++)p(h,c[a])}return n}function p(d,e){var f=d+m[0]+e.join(m[1]),c=f.length>q;if(1<e.length&&c){a:{for(var f=q-(d+m[0]).length,c=m[1],h=e[0],b=1,a=e.length;b<a;b++)if(h+=c+e[b],h.length>
f){f=[e.splice(0,b),e];break a}f=void 0}p(d,f[0]);p(d,f[1])}else{if(c)throw Error("The combo url is too long: "+f);c=0;for(h=e.length;c<h;c++)n[d+e[c]]=f}}var u=j.Module,w=u.STATUS.FETCHING,k=j.data,n=k.comboHash={},m=["??",","],q=2E3;j.on("load",function(d){var e=d.length;if(!(2>e)){k.comboSyntax&&(m=k.comboSyntax);k.comboMaxLength&&(q=k.comboMaxLength);for(var f=k.comboExcludes,c=[],h=0;h<e;h++){var b=d[h];if(!n[b]){var a;if(a=u.get(b).status<w)if(a=!f||!f.test(b)){a=b;var g=k.comboSyntax||["??",
","],j=g[0],g=g[1];a=!(j&&0<a.indexOf(j)||g&&0<a.indexOf(g))}a&&c.push(b)}}1<c.length&&t(r(c))}});j.on("fetch",function(d){d.requestUri=n[d.uri]||d.uri});if(k.test){var v=j.test||(j.test={});v.uris2paths=r;v.paths2hash=t}define(j.data.dir+"plugin-combo",[],{})})(seajs);
