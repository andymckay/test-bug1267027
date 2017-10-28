
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
h1.innerText = 'Done';

// Note: none of this fail on gist.github.com.
h1.appendChild(a);
h1.appendChild(iframe);
h1.appendChild(img);

// Note: this one currently does fail due to CSP on a gist.github.com
h1.appendChild(script);
