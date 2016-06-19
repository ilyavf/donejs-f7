# donejs-f-7

We want to avoid loading Framework7 module in SSR (there is some problem because SSR uses a simplified DOM).
To initialize Framework7 in browser we need to dynamically load the module. See `f7-attr.js`.

```
if (notSSR) {
  System.import('framework7').then(f7 => {
    // initialize here:
    var myApp = new f7.Framework7();
  })
}
```