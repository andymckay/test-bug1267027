
document.body.style.border = "5px solid red";

var a = document.createElement('a');
a.innerText = 'Link to somewhere else';
a.href = 'https://example.org';
a.style.padding = '1em';

var iframe = document.createElement('iframe');
iframe.src = 'https://example.org';

var script = document.createElement('script');
script.type = 'text/javascript';
script.text = 'alert("hello from inline script")';

var img = document.createElement('img');
img.src = 'https://addons.cdn.mozilla.net/static/img/icons/firefox.png';

var script_src = document.createElement('script')
script_src.type = 'text/javascript';
script_src.src = 'https://gist.githubusercontent.com/anonymous/7449aae3dc2afa9015612fb3ba88aadf/raw/99d02413d09932e201b189d23c4d3babd89dde50/gistfile1.txt';

var input = document.createElement('input');
input.src = 'https://addons.cdn.mozilla.net/static/img/icons/firefox.png';
input.style.height = '10px';
input.style.width = '20px';
input.type = 'image';

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

// On release this is blocked.
h1.appendChild(input);

// On release this is blocked.
h1.appendChild(script_src);

// This fails on nightly and release.
h1.appendChild(script);
