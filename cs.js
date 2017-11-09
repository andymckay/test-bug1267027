
document.body.style.border = "5px solid red";

var a = document.createElement('a');
a.innerText = 'Link to somewhere else';
a.href = 'https://example.org';
a.style.padding = '1em';

var iframe = document.createElement('iframe');
iframe.src = 'https://example.org';

var script = document.createElement('script');
script.type = 'text/javascript';
script.text = 'alert("hello")';

var img = document.createElement('img');
img.src = 'https://addons.cdn.mozilla.net/static/img/icons/firefox.png';

// Something on lots of pages.
var h1 = document.getElementsByTagName('h1')[0];
h1.innerText = 'Content script checker has loaded';

// Note: none of this fail on gist.github.com.
// h1.appendChild(a);

// On release, this is an empty iframe, the CSP is blocking the assiging of
// the src to the iframe.
//
// On nightly the iframe is populated.
h1.appendChild(iframe);

// On release this image is there.
h1.appendChild(img);

// This fails on nightly and release.
h1.appendChild(script);
