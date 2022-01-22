export const columns: Array<string> = [
  'name',
  'description',
  'dimension',
  'color',
  'price',
];

export const dataMap = {
  name: {
    map: 'title',
    name: 'Name',
    type: 'link-btn',
  },
  description: {
    map: 'description',
    name: 'Description',
    type: 'text',
  },
  dimension: {
    map: 'dimension',
    name: 'Dimension',
    type: 'text',
  },
  color: {
    map: 'color',
    name: 'Color',
    type: 'text',
  },
  price: {
    map: 'price',
    name: 'Price',
    type: 'text',
  },
};
