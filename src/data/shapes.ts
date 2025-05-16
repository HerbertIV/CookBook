import { Shape } from '../types'

export const shapes: Shape[] = [
  {
    id: 1,
    title: 'Blaszka prostokątna duża',
    description: 'Prostokątna forma (bliżej kwadratu)',
    image: 'https://a.allegroimg.com/original/11c49c/2032765b4037a0aedbdcfbbd2cf0/Blacha-do-pieczenia-do-ciasta-prostokatna-36x25',
    sizes: [
      {
        'long': 26,
        'short': 22,
      }
    ],
    capacity: 4004
  },
  {
    id: 2,
    title: 'Keksówka duża',
    description: 'Prostokątna forma duża',
    image: 'https://prima-deco.pl/4547-large_default/blacha-do-pieczenia-keksowka-z-powloka-non-stick-39x11x75-cm.jpg',
    sizes: [
      {
        'long': 27.5,
        'short': 8,
      }
    ],
    capacity: 1540
  },
  {
    id: 3,
    title: 'Keksówka silikonowa',
    description: 'Prostokątna forma z silikonu',
    image: 'https://image.ceneostatic.pl/data/products/117534373/i-eh-excellent-houseware-forma-silikonowa-keksowka-170481170.jpg',
    sizes: [
      {
        'long': 21,
        'short': 10,
      }
    ],
    capacity: 1470
  },
  {
    id: 4,
    title: 'Tortownica',
    description: 'Okrągła forma',
    image: 'https://media.istockphoto.com/id/1366269021/pl/zdj%C4%99cie/okr%C4%85g%C5%82y-springform-do-pieczenia.jpg?s=2048x2048&w=is&k=20&c=vhJkXXp7AVr62bzzyM2um33gwB-9fJHPy8HV9csY4Y0=',
    sizes: [
      {'diameter': 22.5}
    ],
    capacity: 2781
  },
]