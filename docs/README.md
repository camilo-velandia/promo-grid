# Custom Grid

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

 Este componente va a mostrar una grilla compuesta por items que tienen los sigientes elemntos: nombre, titulo, descripcion, call to action e imagen. Estos items se pueden configurar desde site editor o desde el store theme: tambien se puede cambiar la disposcion de la grilla de 4 formas diferentes en desktop y 6 en mobile.
 
 ![targetthermometer](../images/Screenshot%202022-07-18%20144544.png)




## Configuracion


primero debe configurar las instrucciones principales que permitirán a los usuarios usar los bloques de la aplicación en su tienda:

1. Añadir la dependencia `"vuitg.custom-grid": "0.x"` al `manifest.json`;
2. Declarar el bloque `"list-context.custom-grid"` en la parte del store que lo requiera.

![image](../images/Screenshot%202022-07-18%20145015.png)


### `list-context.custom-grid` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `gridItem`      | `Array`       | arreglo de objetos que se mostraran en la grilla          |         |

## Customizacion

La customizacion de los lementos que componen el componente se puede realizar desde el archivo `vuitg.custom-grid.css`

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`



| CSS Handles |
| ----------- | 
| `card_item` | 
| `card_item--figure` | 
| `card_item--image` | 
| `card_item--title` | 
| `card_item--desc` | 
| `card_item--link` | 



<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
