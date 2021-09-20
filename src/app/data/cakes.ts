import { environment } from 'src/environments/environment';
const adminRoot = environment.adminRoot;

export interface ICake {
  title: string;
  link: string;
}

const data: ICake[] = [
  {
    title: 'Marble Cake',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Fruitcake',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Chocolate Cake',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Fat Rascal',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Financier',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Genoise',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Gingerbread',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Goose Breast',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Parkin',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Salzburger Nockerl',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Soufflé',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Merveilleux',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Streuselkuchen',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Tea Loaf',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Napoleonshat',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Merveilleux',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Magdalena',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Cremeschnitte',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Cheesecake',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Bebinca',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Salzburger Nockerl',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Soufflé',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Merveilleux',
    link: `${adminRoot}/pages/product/details`,
  },
  {
    title: 'Streuselkuchen',
    link: `${adminRoot}/pages/product/details`,
  },
];

export default data;
