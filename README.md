# This is just a error reproducing repo created for debugging purpose

## When you try and import images in JS and render them on the page, it throws the following error:

```
./src/path-to/image.png
Module build failed: Error: File Loader

emitFile is required from module system
```


Open the `index.js` file under `/src/pages` directory where an example image is already imported and commented out.


### Steps I took to solve the issue:

+ Installed `url-loader`
+ Installed `file-loader`