window.addComment=function(e){var t,n,r,o=e.document,d={commentReplyClass:"comment-reply-link",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},i=e.MutationObserver||e.WebKitMutationObserver||e.MozMutationObserver,a="querySelector"in o&&"addEventListener"in e,l=!!o.documentElement.dataset;function m(){c(),function(){if(!i)return;new i(f).observe(o.body,{childList:!0,subTree:!0})}()}function c(e){if(a&&(t=v(d.cancelReplyId),n=v(d.commentFormId),t)){t.addEventListener("touchstart",s),t.addEventListener("click",s);for(var r,i=function(e){var t,n=d.commentReplyClass;e&&e.childNodes||(e=o);t=o.getElementsByClassName?e.getElementsByClassName(n):e.querySelectorAll("."+n);return t}(e),l=0,m=i.length;l<m;l++)(r=i[l]).addEventListener("touchstart",u),r.addEventListener("click",u)}}function s(e){var t=v(d.temporaryFormId);t&&r&&(v(d.parentIdFieldId).value="0",t.parentNode.replaceChild(r,t),this.style.display="none",e.preventDefault())}function u(t){var n=p(this,"belowelement"),r=p(this,"commentid"),o=p(this,"respondelement"),d=p(this,"postid");n&&r&&o&&d&&!1===e.addComment.moveForm(n,r,o,d)&&t.preventDefault()}function f(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void c()}function p(e,t){return l?e.dataset[t]:e.getAttribute("data-"+t)}function v(e){return o.getElementById(e)}return a&&"loading"!==o.readyState?m():a&&$(o).ready(function(){m()}),{init:c,moveForm:function(i,a,l,m){var c=v(i);r=v(l);var s,u,f,p=v(d.parentIdFieldId),y=v(d.postIdFieldId);if(c&&r&&p){!function(e){var t=d.temporaryFormId,n=v(t);n||((n=o.createElement("div")).id=t,n.style.display="none",e.parentNode.insertBefore(n,e))}(r),m&&y&&(y.value=m),p.value=a,t.style.display="",c.parentNode.insertBefore(r,c.nextSibling),t.onclick=function(){return!1};try{for(var h=0;h<n.elements.length;h++)if(s=n.elements[h],u=!1,"getComputedStyle"in e?f=e.getComputedStyle(s):o.documentElement.currentStyle&&(f=s.currentStyle),(s.offsetWidth<=0&&s.offsetHeight<=0||"hidden"===f.visibility)&&(u=!0),"hidden"!==s.type&&!s.disabled&&!u){s.focus();break}}catch(e){}return!1}}}}(window);