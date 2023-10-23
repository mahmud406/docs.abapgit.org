import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,a as e,b as s,d as n,e as i}from"./app-0aab267a.js";const c={},p=e("h2",{id:"collection-of-links-to-various-git-related-documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#collection-of-links-to-various-git-related-documentation","aria-hidden":"true"},"#"),s(" Collection of links to various git-related documentation")],-1),b={href:"https://gist.github.com/schacon/6092633",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.git-scm.com/docs/protocol-capabilities",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.git-scm.com/docs/http-protocol",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.git-scm.com/docs/pack-protocol",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.git-scm.com/docs/pack-format",target:"_blank",rel:"noopener noreferrer"},d={href:"http://alblue.bandlem.com/2011/08/git-tip-of-week-objects.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://git-scm.herokuapp.com/book/en/Git-Internals-Transfer-Protocols",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/git/git/blob/master/builtin/receive-pack.c",target:"_blank",rel:"noopener noreferrer"},v={href:"http://stefan.saasen.me/articles/git-clone-in-haskell-from-the-bottom-up/",target:"_blank",rel:"noopener noreferrer"},T=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">GIT_CURL_VERBOSE</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token variable">$env</span>:GIT_CURL_VERBOSE<span class="token operator">=</span><span class="token number">1</span>
<span class="token variable">$env</span>:GIT_TRACE<span class="token operator">=</span><span class="token number">1</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy %HTTP_PROXY%
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token boolean">false</span>
<span class="token assign-left variable">GIT_TRACE</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_CURL_VERBOSE</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_TRACE_PERFORMANCE</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_TRACE_PACK_ACCESS</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_TRACE_PACKET</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_TRACE_PACKFILE</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_TRACE_SETUP</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">GIT_TRACE_SHALLOW</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(C,w){const a=o("ExternalLinkIcon");return r(),l("div",null,[p,e("ul",null,[e("li",null,[e("a",b,[s("https://gist.github.com/schacon/6092633"),n(a)])]),e("li",null,[e("a",k,[s("git reference"),n(a)])]),e("li",null,[e("a",m,[s("git protocol capabilities"),n(a)])]),e("li",null,[e("a",_,[s("git HTTP protocol"),n(a)])]),e("li",null,[e("a",h,[s("git PACK protocol"),n(a)])]),e("li",null,[e("a",u,[s("git pack format"),n(a)])]),e("li",null,[e("a",d,[s("http://alblue.bandlem.com/2011/08/git-tip-of-week-objects.html"),n(a)])]),e("li",null,[e("a",g,[s("https://git-scm.herokuapp.com/book/en/Git-Internals-Transfer-Protocols"),n(a)])]),e("li",null,[e("a",f,[s("https://github.com/git/git/blob/master/builtin/receive-pack.c"),n(a)])]),e("li",null,[e("a",v,[s("http://stefan.saasen.me/articles/git-clone-in-haskell-from-the-bottom-up/"),n(a)])])]),T])}const A=t(c,[["render",E],["__file","technical-links.html.vue"]]);export{A as default};