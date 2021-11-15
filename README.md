# Pie Print support

Take a pie item config - render a print friendly ui.

### Install

```shell
yarn
```


### Run

```shell
 yarn esbuild src/pie-print.ts  --servedir=. --outdir=lib --bundle 
```
Then go to: http://localhost:8000/dev/


### Release


`yarn release`


#### release from local machine

```
yarn build
yarn semantic-release --no-ci
```


