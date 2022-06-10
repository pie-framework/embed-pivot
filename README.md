# Embed pivot

A very simple custom element that renders a pivot iframe.


### Install

```shell
yarn
```

### Run

```shell
 yarn esbuild src/embed-pivot.ts  --servedir=. --outdir=lib --bundle
```
Then go to: http://localhost:8000/dev/


### Release

`yarn release`


#### release from local machine

```
yarn build
yarn semantic-release --no-ci
```

## Attributes

| Attribute                | Description                                                                                                                                                                                                                
| ------------------------ | -----------------------------------------------------------
| data-url                 | the url to load that contains an element definition
| data-tag                 | the tag name to use for the newly defined custom element                                                                                                                                                                                              
| data-height              | OPTIONAL: the height for the video                                                                                                                                                                                              
| data-width               | OPTIONAL: the width for the video                                                                                                                                                                                              
| data-min-height          | OPTIONAL: the minimum height for the video                                                                                                                                                                                            
| data-max-height          | OPTIONAL: the maximum height for the video                                                                                                                                                                                              
| data-min-width           | OPTIONAL: the minimum width for the video                                                                                                                                                                                              
| data-max-width           | OPTIONAL: the maximum width for the video                                                                                                                                                                                              


## Usage

```html
    <embed-pivot
     data-pivot-url="pivot-url-here"
     data-width=""
     data-height=""
      data-min-height=""
      data-max-height=""
      data-min-width=""
      data-max-width=""
    ></embed-pivot>
```
OR
```html
    <pie-embed
     data-tag="embed-pivot"
     data-url="@pie-framework/embed-pivot/lib/embed-pivot.js"
     data-pivot-url="pivot-url-here"
     data-width=""
     data-height="">
     </pie-embed>
```


For any page that needs to run pie-embed, you have to load pie-api-components@>=2.2.1. This page: 

```shell script
   <script
      type="module"
      src="https://cdn.jsdelivr.net/npm/@pie-api/pie-api-components/dist/pie-api-components/pie-api-components.esm.js"
    ></script>
```

