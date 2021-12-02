# Embed pivot

A very simple custom element that renders a pivot iframe.


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


## Usage

```html
<embed-pivot data-pivot-url="pivot-url-here" data-width="" data-height=""></embed-pivot>
```
