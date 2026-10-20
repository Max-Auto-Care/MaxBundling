"use client";

import Script from "next/script";

export default function OrderOnlineTracker() {
  return (
    <Script id="orderonline-tracker" strategy="afterInteractive">
      {String.raw`
        var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(f){return f.raw=f};$jscomp.createTemplateTagFirstArgWithRaw=function(f,g){f.raw=g;return f};
(function(f){var g=function(d,a,c){c=void 0===c?!1:c;a||(a=window.location.href);d="[?&]"+d.replace(/[\[\]]/g,"\\$&")+"(=([^&#]*)|&|#|$)";a=(c?new RegExp(d):new RegExp(d,"i")).exec(a);if(!a)return null;if(!a[2])return"";a=(a=a[2].replace(/\+/g," "))?decodeURIComponent(a.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25")):a;return a=a.replace(/[&<>="#;]/g,"")},l=function(d){d+="=";for(var a=document.cookie.split(";"),c=0;c<a.length;c++){for(var b=a[c];" "===b.charAt(0);)b=b.substring(1,b.length);if(0===b.indexOf(d))return b.substring(d.length,b.length)}return null},m=function(d,a){var c=encodeURIComponent,b=function(e){return e+"="+d[e]};(void 0===a?0:a)&&(b=function(e){return c(e)+"="+c(d[e])});return Object.keys(d).map(b).join("&")};setTimeout(function(){var d=f;d=void 0===d?"oo-link":d;var a=g("fbclid"),c=l("fbp"),b=l("fbc");d=document.querySelectorAll("[class*="+d+"]");var e={};a&&""!==a&&(e.fbclid=a);c&&""!==c&&(e.fbp=c);b&&""!==b&&(e.fbc=b);a=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];c={};for(b=0;b<a.length;b++){var h=a[b],k=g(h);k&&""!==k&&(c[h]=k)}e=Object.assign(e,c);if(0<Object.keys(e).length)for(e=m(e),a=0;a<d.length;a++)c=d[a],b=c.getAttribute("href"),!b&&(h=c.querySelector("a"))&&(c=h,b=c.getAttribute("href")),b&&(b=b.includes("?")?b+"&":b+"?",b+=e,b=encodeURI(b),c.href=b)},300)})("oo-link");
      `}
    </Script>
  );
}
