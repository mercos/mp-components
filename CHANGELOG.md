# Change Log

## 1.3.9
- [fix] Fixed 'Unknown prop' warning from ToggleableCategory

## 1.3.8
- [fix] Fixed 'Unknown prop' warning from Input and Button components

## 1.3.7
- [fix] `ToggleableCategory` on hover has a blue color for normal items

## 1.3.6
- [fix] Simplified `ToggleableCategory`

## 1.3.5
- [new] Improved `ProductImage` behavior
- [new] `ToggleableCategory` props: `onClickLabel` and `onClickToggle`

## 1.3.4
- [new] `ExpansionIndicator` and `ToggleableCategory`
- [removed] `ProductCard` and `ProductDescription`

## 1.3.1
- [fix] Fix 'ProductCard' responsiveness
- [fix] Fix react-container-query dependency

## 1.3.0
- [new] Input can now have an inline addon
- [changed] Product card is now responsive

## 1.2.3
- [fix] Revert `index.js` syntax to ES5

## 1.2.2
- [fix] 'ProductCard' now have top and bottom margins

## 1.2.1
- [fix] 'ProductImage' now resize big images

## 1.2.0
- [new] 'Card', 'ProductCard', 'ProductDescription', 'ProductImage' components
- [removed] 'HorizontalCard' and 'VerticalCard'

## 1.1.0
- [fix] Problem when deploying a new version, please use the next version!

## 1.0.15
- [fix] 'HorizontalCard' was not correctly declared in `webpack` config

## 1.0.14
- [new] `Vertical` and `HorizontalCard` components

## 1.0.12
- [fix] Clear error state for `CategoryNode`'s new category input

## 1.0.11
- [new] `CategoryNode` now has a `CategoryForm` for adding and editing categories

## 1.0.10
- [new] `CategoryNode` now has a `form` for adding subcategories

## 1.0.9
- [fix] Hide add `Link` for 3rd level `CategoryNode`s

## 1.0.8
- [fix] Close the `InlineAlert` when clicking 'YES' in `CategoryNode` delete confirm

## 1.0.7
- [new] Introduced a bunch of new `props` for `CategoryNode` in order to make it more usable for Meus Pedidos

## 1.0.4
- [fix] Better specifity for `Input` styles

## 1.0.3
- [fix] `<i/>` elements inside `Button` only inherit `font-size`
- [fix] Components now support `className` prop

## v1.0.2
- [fix] `<i/>` elements inside `Button` now inherit its `font-size` and `vertical-align` in the middle

## v1.0.1
- [fix] `InlineAlert` had an invalid value for `defaultProps.context`

## v1.0.0
- Initial commit
