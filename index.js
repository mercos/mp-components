const Button = require('./lib/components/Button').default
const CategoryNode = require('./lib/components/CategoryNode').default
const CategoryForm = require('./lib/components/CategoryForm').default
const InlineAlert = require('./lib/components/InlineAlert').default
const Input = require('./lib/components/Input').default
const Link = require('./lib/components/Link').default
const Node = require('./lib/components/Node').default
const NodeOptions = require('./lib/components/NodeOptions').default
const Card = require('./lib/components/Card').default
const ProductImage = require('./lib/components/ProductImage').default
const ProductDescription = require('./lib/components/ProductDescription').default
const ProductCard = require('./lib/components/ProductCard').default

const source = {
  Button: require('./src/components/Button').default,
  CategoryNode: require('./src/components/CategoryNode').default,
  CategoryForm: require('./src/components/CategoryForm').default,
  InlineAlert: require('./src/components/InlineAlert').default,
  Input: require('./src/components/Input').default,
  Link: require('./src/components/Link').default,
  Node: require('./src/components/Node').default,
  NodeOptions: require('./src/components/NodeOptions').default,
  Card: require('./src/components/Card').default,
  ProductImage: require('./src/components/ProductImage').default,
  ProductDescription: require('./src/components/ProductDescription').default,
  ProductCard: require('./src/components/ProductCard').default,
}

module.exports = {
  Button,
  CategoryNode,
  CategoryForm,
  InlineAlert,
  Input,
  Link,
  Node,
  NodeOptions,
  Card,
  ProductImage,
  ProductDescription,
  ProductCard,
  source,
}
