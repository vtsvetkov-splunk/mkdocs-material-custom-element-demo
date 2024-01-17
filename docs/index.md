# my-custom-element

Implementation of the custom element. In contains the form with single input:
```html
<form><input></form>
```

Try to input something with `s` letter. Search button appears and does not allow to type it.

<my-custom-element></my-custom-element>


While a regular, non wrapped inside shadowRoot, input works fine:
<input style="border: solid;">

## Source
- [customElementForm.js](https://github.com/vtsvetkov-splunk/mkdocs-material-custom-element-demo/blob/main/docs/javascripts/customElementForm.js)
- [The repo itself](https://github.com/vtsvetkov-splunk/mkdocs-material-custom-element-demo)
- [mkdocs-material issue](https://github.com/squidfunk/mkdocs-material/issues/6652) 