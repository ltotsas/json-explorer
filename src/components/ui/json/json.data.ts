import { JSONValue } from '@/types/json.ts';

const data: JSONValue = {
  'date': '2021-10-27T07:49:14.896Z',
  'hasError': false,
  'fields': [
    {
      'id': '4c212130',
      'prop': 'iban',
      'value': 'DE81200505501265402568',
      'hasError': false,
    },
  ],
};

const data1: JSONValue = {
  'id': '0001',
  'type': 'donut',
  'name': 'Cake',
  'ppu': 0.55,
  'batters':
    {
      'batter':
        [
          { 'id': '1001', 'type': 'Regular' },
          { 'id': '1002', 'type': 'Chocolate' },
          { 'id': '1003', 'type': 'Blueberry' },
          { 'id': '1004', 'type': 'Devil\'s Food' },
        ],
    },
  'topping':
    [
      { 'id': '5001', 'type': 'None' },
      { 'id': '5002', 'type': 'Glazed' },
      { 'id': '5005', 'type': 'Sugar' },
      { 'id': '5007', 'type': 'Powdered Sugar' },
      { 'id': '5006', 'type': 'Chocolate with Sprinkles' },
      { 'id': '5003', 'type': 'Chocolate' },
      { 'id': '5004', 'type': 'Maple' },
    ],
};

const data2: JSONValue = [100, 500, 300, 200, 400];

const data3: JSONValue = [
  {
    'id': '0001',
    'type': 'donut',
    'name': 'Cake',
    'ppu': 0.55,
    'batters':
      {
        'batter':
          [
            { 'id': '1001', 'type': 'Regular' },
            { 'id': '1002', 'type': 'Chocolate' },
            { 'id': '1003', 'type': 'Blueberry' },
            { 'id': '1004', 'type': 'Devil\'s Food' },
          ],
      },
    'topping':
      [
        { 'id': '5001', 'type': 'None' },
        { 'id': '5002', 'type': 'Glazed' },
        { 'id': '5005', 'type': 'Sugar' },
        { 'id': '5007', 'type': 'Powdered Sugar' },
        { 'id': '5006', 'type': 'Chocolate with Sprinkles' },
        { 'id': '5003', 'type': 'Chocolate' },
        { 'id': '5004', 'type': 'Maple' },
      ],
  },
  {
    'id': '0002',
    'type': 'donut',
    'name': 'Raised',
    'ppu': 0.55,
    'batters':
      {
        'batter':
          [
            { 'id': '1001', 'type': 'Regular' },
          ],
      },
    'topping':
      [
        { 'id': '5001', 'type': 'None' },
        { 'id': '5002', 'type': 'Glazed' },
        { 'id': '5005', 'type': 'Sugar' },
        { 'id': '5003', 'type': 'Chocolate' },
        { 'id': '5004', 'type': 'Maple' },
      ],
  },
  {
    'id': '0003',
    'type': 'donut',
    'name': 'Old Fashioned',
    'ppu': 0.55,
    'batters':
      {
        'batter':
          [
            { 'id': '1001', 'type': 'Regular' },
            { 'id': '1002', 'type': 'Chocolate' },
          ],
      },
    'topping':
      [
        { 'id': '5001', 'type': 'None' },
        { 'id': '5002', 'type': 'Glazed' },
        { 'id': '5003', 'type': 'Chocolate' },
        { 'id': '5004', 'type': 'Maple' },
      ],
  },
];

export const jsonData: JSONValue[] = [data, data1, data2, data3];