/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){return n.stringify(t.tokenize(e,r),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind,c=0;a=a.pattern||a;for(var h=0;h<s.length;h++){var p=s[h];if(s.length>e.length)break e;if(p instanceof i)continue;a.lastIndex=0;var d=a.exec(p);if(d){l&&(c=d[1].length);var v=d.index-1+c,d=d[0].slice(c),m=d.length,g=v+m,y=p.slice(0,v+1),b=p.slice(g+1),w=[h,1];y&&w.push(y);var E=new i(u,f?t.tokenize(d,f):d);w.push(E);b&&w.push(b);Array.prototype.splice.apply(s,w)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
/*Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;*/
/*Prism.languages.python={comment:{pattern:/(^|[^\\])#.*?(\r?\n|$)/g,lookbehind:!0},string: /("|')(\\?.)*?\1/g,keyword:/\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,boolean:/\b(True|False)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;*/
(function(){if(!window.Prism){return}function $$(a,b){return Array.prototype.slice.call((b||document).querySelectorAll(a))}function hasClass(a,b){b=" "+b+" ";return(" "+a.className+" ").replace(/[\n\t]/g," ").indexOf(b)>-1}var h=crlf=/\r?\n|\r/g;function highlightLines(a,b,c){var d=b.replace(/\s+/g,'').split(','),offset=+a.getAttribute('data-line-offset')||0;var e=parseFloat(getComputedStyle(a).lineHeight);for(var i=0,range;range=d[i++];){range=range.split('-');var f=+range[0],end=+range[1]||f;var g=document.createElement('div');g.textContent=Array(end-f+2).join(' \r\n');g.className=(c||'')+' line-highlight';if(!hasClass(a,'line-numbers')){g.setAttribute('data-start',f);if(end>f){g.setAttribute('data-end',end)}}g.style.top=(f-offset-1)*e+'px';if(hasClass(a,'line-numbers')){a.appendChild(g)}else{(a.querySelector('code')||a).appendChild(g)}}}function applyHash(){var b=location.hash.slice(1);$$('.temporary.line-highlight').forEach(function(a){a.parentNode.removeChild(a)});var c=(b.match(/\.([\d,-]+)$/)||[,''])[1];if(!c||document.getElementById(b)){return}var d=b.slice(0,b.lastIndexOf('.')),pre=document.getElementById(d);if(!pre){return}if(!pre.hasAttribute('data-line')){pre.setAttribute('data-line','')}highlightLines(pre,c,'temporary ');document.querySelector('.temporary.line-highlight').scrollIntoView()}var j=0;Prism.hooks.add('after-highlight',function(b){var c=b.element.parentNode;var d=c&&c.getAttribute('data-line');if(!c||!d||!/pre/i.test(c.nodeName)){return}clearTimeout(j);$$('.line-highlight',c).forEach(function(a){a.parentNode.removeChild(a)});highlightLines(c,d);j=setTimeout(applyHash,1)});addEventListener('hashchange',applyHash)})();
;
Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf("line-numbers")===-1){return}var n=1+e.code.split("\n").length;var r;lines=new Array(n);lines=lines.join("<span></span>");r=document.createElement("span");r.className="line-numbers-rows";r.innerHTML=lines;if(t.hasAttribute("data-start")){t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)}e.element.appendChild(r)})
;
Prism.languages.cli={
		'cli-comment' : {
				pattern: /#.*?$/gm,
		},
		'cli-command' : {
				pattern: /^ *\$.*?$/gm,
		}
};

Prism.languages.cylc={
	'hidden': { 
        pattern: /(^\..*)/gm,
        inside : {
            'jinja2expr': { 
                pattern: /{%.*%}/gm,
            },
            'jinja2print': { 
                pattern: /{{.*}}/gm,
            },
            'jinja2comment': { 
                pattern: /{#.*#}/gm,
            },
        },
	},
	'section3': { 
        pattern: /\[\[\[.*?\]\]\]/gm,
        inside : {
            'jinja2expr': { 
                pattern: /{%.*%}/gm,
            },
            'jinja2print': { 
                pattern: /{{.*}}/gm,
            },
        },
	},
	'section2': { 
        pattern: /\[\[.*?\]\]/gm,
        inside : {
            'jinja2expr': { 
                pattern: /{%.*%}/gm,
            },
            'jinja2print': { 
                pattern: /{{.*}}/gm,
            },
            'params': { 
                pattern: /&lt;.*>/gm,
            },
        },
	},
	'section1': { 
        pattern: /\[.*?\]$/gm,
	},
	'string': { 
        pattern: /(")(?:\\.|(?!\\|\1)[\s\S])*\1/g,
        inside : {
            'jinja2expr': { 
                pattern: /{%.*?%}/gm,
            },
            'jinja2print': { 
                pattern: /{{.*?}}/gm,
            },
            'suitepolling': { 
                pattern: /&lt;.*?>/gm,
            },
            'comment' : {
                pattern: /#.*?$/gm,
            },
        },
    },
	'comment': { 
        pattern: /#.*$/gm,
	},
	'jinja2expr': { 
        pattern: /{%.*?%}/gm,
	},
	'jinja2print': { 
        pattern: /{{.*?}}/gm,
	},
    /* not working (some keys coloured, others not
	'key': {
        pattern: /.*(?==)/,
            inside: {
	            'comment': { 
                    pattern: /(#.*)$/gm,
	            },
            },
	},*/
	'value': {
        pattern: /(=\s*).*/,
        lookbehind: true,
	},
};
;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/g,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/g,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g}},keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g});;
