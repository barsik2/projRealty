export const SIZE = [
  {
    value: 'до 100',
    name: 'size_max',
    id:'100',
  },
  {
    value: '100 - 250',
    name: 'size_min',
    id:'100250'
  },
  {
    value: 'от 250',
    name: 'size_min',
    id:'250'
  },
];

export const FLOORS = [
  {
    name: 'floors',
    value: '1',
  },
  {
    name: 'floors',
    value: '2',
  },
  {
    name: 'floors',
    value: '3',
  },
  {
    name: 'additional',
    value: 'мансарда',
  },
];

export const SELECTS = [
  {
    name: 'rooms',
    options: [
      {
        value: '',
        label: 'Комнаты',
      },
      {
        value: '2',
        label: 'Две',
      },
      {
        value: '3',
        label: 'Три',
      },
      {
        value: '4',
        label: 'Четыре',
      },
      {
        value: '5',
        label: 'Пять',
      },
      {
        value: '6',
        label: 'Шесть',
      },
      {
        value: '7',
        label: 'Семь',
      },
    ],
  },
  {
    name: 'garage',
    options: [
      {
        value: '',
        label: 'Гаражи',
      },
      {
        value: '0',
        label: 'Нет',
      },
      {
        value: '1',
        label: 'Один',
      },
      {
        value: '2',
        label: 'Два',
      },
    ],
  },
  {
    name: 'style',
    options: [
      {
        value: '',
        label: 'Стиль',
      },
      {
        value: 'Барнхаус',
        label: 'Барнхаус',
      },
      {
        value: 'Классический',
        label: 'Классический',
      },
      {
        value: 'Европейский',
        label: 'Европейский',
      },
      {
        value: 'Модерн',
        label: 'Модерн',
      },
      {
        value: 'Современный',
        label: 'Современный',
      },
      {
        value: 'Хай-тек',
        label: 'Хай-тек',
      },
      {
        value: 'Кубизм',
        label: 'Кубизм',
      },
    ],
  },
];

export const DEFAULT_FILTERS = {
  order: 'desc',
  orderBy: '',
  garage: '',
  floors: '',
  tent: '',
  style: '',
  rooms: '',
  price_min: '',
  price_max: '',
  size_min: '',
  size_max: '',
  name: '',
};
