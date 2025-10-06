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
        title: 'Aventura en Tokyo Tower',
        description: '¡Toma una foto con la icónica Torre de Tokio de fondo. Intenta capturar la torre completa en tu toma!',
        location: 'Tokyo',
        completed: false
      },
      {
        id: 'shibuya-crossing',
        title: 'Experiencia en Shibuya Crossing',
        description: '¡Captura el famoso cruce de Shibuya durante la hora pico. Muestra la bulliciosa energía de esta intersección icónica!',
        location: 'Tokyo',
        completed: false
      },
      {
        id: 'senso-ji',
        title: 'Visita al Templo Senso-ji',
        description: 'Toma una foto respetuosa en la entrada del Templo Senso-ji. Incluye la arquitectura tradicional en tu toma.',
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
        title: 'Encuentro en el Parque de los Ciervos',
        description: '¡Toma una foto con los amigables ciervos del Parque de Nara. Asegúrate de mantener una distancia respetuosa!',
        location: 'Nara',
        completed: false
      },
      {
        id: 'todai-ji',
        title: 'Gran Buda del Templo Todai-ji',
        description: 'Captura la magnífica estatua del Gran Buda en el Templo Todai-ji. Muestra la impresionante escala de esta maravilla antigua.',
        location: 'Nara',
        completed: false
      },
      {
        id: 'kasuga-taisha',
        title: 'Linternas de Kasuga Taisha',
        description: 'Fotografía las hermosas linternas de piedra que bordean el camino hacia el Santuario Kasuga Taisha.',
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
        title: 'Gloria del Castillo de Osaka',
        description: '¡Toma una foto majestuosa del Castillo de Osaka. Intenta capturarlo durante la hora dorada para la mejor iluminación!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'dotonbori',
        title: 'Luces Nocturnas de Dotonbori',
        description: 'Captura los vibrantes letreros de neón y la animada atmósfera del distrito de Dotonbori por la noche.',
        location: 'Osaka',
        completed: false
      }
    ]
  }
];