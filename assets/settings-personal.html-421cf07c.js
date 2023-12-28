import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as l,a as e,b as t,d as a,e as o}from"./app-9eea176e.js";const c="/img/settings-personal-0.png",p="/img/settings-personal-1.png",d="/img/settings-personal-3.png",h={},u=o('<p>Personal settings in abapGit are valid only for the logged on user. You can maintain the<br> settings from the repository list or repository view by selecting &quot;Settings &gt; Personal&quot;.</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Note: Personal settings are relevant to all of your repositories.</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="startup" tabindex="-1"><a class="header-anchor" href="#startup" aria-hidden="true">#</a> Startup</h2><p>If you turn on &quot;Show Last Opened Repository&quot;, abapGit will jump directly to the repository that you worked on last.</p><h2 id="user-interface" tabindex="-1"><a class="header-anchor" href="#user-interface" aria-hidden="true">#</a> User Interface</h2><p>You can switch the <strong>Theme</strong> for abapGit between several choices: Default, Dark, and Belize. Alternatively, you can select &quot;Synced with SAP GUI&quot; to use the same theme<br> you are using for SAP GUI (availability depends on SAP GUI release).</p><p>The size of icons can be influenced using <strong>Icon scaling</strong>. If automatic detection does not work properly, you can pick a better size with the other settings.</p>',9),g=e("thead",null,[e("tr",null,[e("th",null,"Setting"),e("th",null,"Description")])],-1),f=e("td",null,"Automatic",-1),m={href:"https://doc.qt.io/qt-5/highdpi.html",target:"_blank",rel:"noopener noreferrer"},b=e("tr",null,[e("td",null,"Small"),e("td",null,"abapGit will force the icons to remain small even if an HDPI display is detected")],-1),y=e("tr",null,[e("td",null,"Large"),e("td",null,"abapGit will force the icons to double in size")],-1),_=o('<p><strong>List Size</strong> defines the maximum number of items shown in a list. If there are more items, then abapGit start paging.</p><p><strong>Repo Label Colors</strong> allows you to customize colors of organization labels use on repository list and view. The format of the configuration is: <code>&quot;label1:color,label2:color&quot;</code>. <code>Color</code> param accepts either a predefined css-style name or RGB color spec in format of <code>#&lt;foreground&gt;/&lt;background&gt;</code> e.g. <code>#3040ff/ff8a80</code>. See more (in particular, CSS style list) in &quot;?&quot; hint box.</p><h2 id="interaction" tabindex="-1"><a class="header-anchor" href="#interaction" aria-hidden="true">#</a> Interaction</h2><p>Typically, when objects are changed, the system will display a popup to confirm the activation of objects. This gives the change to address syntax errors, for example.<br> If you want objects to be activated automatically, select <strong>Activate Objects Without Popup</strong>. If there are syntax errors, abapGit will indicate this with an icon next to<br> the objects in the repository view.</p><p>If you are using ABAP Development Tools (ADT) in Eclipse, we recommend to turn on <strong>Enable Jump to ABAP Development Tools</strong>. Clicking on objects names in abapGit will then<br> open the object in ADT (if available).</p>',5),v=e("strong",null,"Enable Vimium-like Link Hints",-1),w=e("strong",null,"Key to Activate Link Hints",-1),x={href:"https://vimium.github.io/",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),G=o('<figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="system-resources" tabindex="-1"><a class="header-anchor" href="#system-resources" aria-hidden="true">#</a> System Resources</h2><h3 id="standalone-version" tabindex="-1"><a class="header-anchor" href="#standalone-version" aria-hidden="true">#</a> Standalone Version</h3><p>The standalone version does not support any parallel processing. Objects of a repository are serialized sequentially.</p><h3 id="developer-version" tabindex="-1"><a class="header-anchor" href="#developer-version" aria-hidden="true">#</a> Developer Version</h3><p><strong>Disable parallel processing</strong></p><p>The developer version of abapGit will try to use parallel processing to serialize objects of a repository. As a prerequisite, logon group <code>parallel_generators</code> (lower case) must be configured in transaction <code>RZ12</code>. If sufficient system resources are available, abapGit will use multiple threads to serialize objects.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>You can disable parallel processing with this setting. Use this setting in case you need to debug a serializer class.</p></div>',8);function I(S,z){const i=s("ExternalLinkIcon");return r(),l("div",null,[u,e("table",null,[g,e("tbody",null,[e("tr",null,[f,e("td",null,[t("abapGit determines if a high-resolution display is present ("),e("a",m,[t("High DPI displays"),a(i)]),t(", which would make icons appear too small compared to text. abapGit will then double the size of icons.")])]),b,y])]),_,e("p",null,[v,t(" and "),w,t(" provide a feature similarly to the "),e("a",x,[t("Vimium browser"),a(i)]),t(". After pressing the"),k,t(' activation key (default "t"), abapGit will uses a clever highlighting method to navigate using links.')]),G])}const P=n(h,[["render",I],["__file","settings-personal.html.vue"]]);export{P as default};