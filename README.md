Here's an add-on to demonstrate some CSP stuff.

Page with restrictive CSP to test on:
* https://gist.github.com

Page with no CSP to test on:
* https://example.com

On a page with restrictive CSP:
* there should be NO alert dialog
* a Firefox icon
* an iframe to example domain
* a link to another page

On a page with no CSP:
* there should be an alert dialog
* a Firefox icon
* an iframe to example domain
* a link to another page

After https://bugzilla.mozilla.org/show_bug.cgi?id=1267027 has landed, the two pages should have identical changes.
