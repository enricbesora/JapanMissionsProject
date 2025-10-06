import { City } from '../types/Mission';

export const cities: City[] = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    x: 50,
    y: 40,
    missions: [
      {
        id: 'tokyo-tower',
        title: 'Aventura a la Tokyo Tower',
        description: 'Fes una foto amb la icònica Torre de Toquio de fons. Intenta capturar la torre completa en la teva imatge!',
        location: 'Tokyo',
        completed: false
      },
      {
        id: 'shibuya-crossing',
        title: 'Experiència al Shibuya Crossing',
        description: 'Captura el famós encreuament de Shibuya durant l\'hora punta. Mostra l\'energia bulliciosa d\'aquesta intersecció icònica!',
        location: 'Tokyo',
        completed: false
      },
      {
        id: 'senso-ji',
        title: 'Visita al Temple Senso-ji',
        description: 'Fes una foto respectuosa a l\'entrada del Temple Senso-ji. Inclou l\'arquitectura tradicional en la teva imatge.',
        location: 'Tokyo',
        completed: false
      }
    ]
  },
  {
    id: 'nara',
    name: 'Nara',
    x: 35,
    y: 60,
    missions: [
      {
        id: 'deer-park',
        title: 'Trobada al Parc dels Cérvols',
        description: 'Fes una foto amb els simpatics cérvols del Parc de Nara. Assegura\'t de mantenir una distància respectuosa!',
        location: 'Nara',
        completed: false
      },
      {
        id: 'todai-ji',
        title: 'Gran Buda del Temple Todai-ji',
        description: 'Captura la magnífica estàtua del Gran Buda al Temple Todai-ji. Mostra l\'impressionant escala d\'aquesta meravella antiga.',
        location: 'Nara',
        completed: false
      },
      {
        id: 'kasuga-taisha',
        title: 'Llanternes de Kasuga Taisha',
        description: 'Fotografa les precioses llanternes de pedra que vorejen el camí cap al Santuari Kasuga Taisha.',
        location: 'Nara',
        completed: false
      }
    ]
  },
  {
    id: 'osaka',
    name: 'Osaka',
    x: 30,
    y: 65,
    missions: [
      {
        id: 'osaka-castle',
        title: 'Glòria del Castell d\'Osaka',
        description: 'Fes una foto majestúosa del Castell d\'Osaka. Intenta capturar-lo durant l\'hora daurada per obtenir la millor il·luminació!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'dotonbori',
        title: 'Llums Nocturnos de Dotonbori',
        description: 'Captura els vibrants ròtuls de neó i l\'animada atmosfera del districte de Dotonbori a la nit.',
        location: 'Osaka',
        completed: false
      }
    ]
  }
];