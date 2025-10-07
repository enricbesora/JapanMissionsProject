import { City } from '../types/Mission';

export const cities: City[] = [
  {
    id: 'sapporo',
    name: 'Sapporo',
    x: 65,
    y: 15,
    missions: [
      {
        id: 'sapporo-snow-festival',
        title: 'Festival de Neu de Sapporo',
        description: 'Captura les impressionants escultures de gel i neu. Mostra la creativitat artística dels mestres escultors!',
        location: 'Sapporo',
        completed: false
      },
      {
        id: 'odori-park',
        title: 'Parc Odori',
        description: 'Fotografa aquest precís parc que divideix la ciutat. Ideal en qualsevol estació de l\'any!',
        location: 'Sapporo',
        completed: false
      }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    x: 70,
    y: 50,
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
    id: 'nikko',
    name: 'Nikko',
    x: 72,
    y: 45,
    missions: [
      {
        id: 'toshogu-shrine',
        title: 'Santuari Toshogu',
        description: 'Fotografa els ornaments daurats i les talles detallades d\'aquest santuari patrimoni mundial.',
        location: 'Nikko',
        completed: false
      },
      {
        id: 'kegon-falls',
        title: 'Cascades Kegon',
        description: 'Captura la majestuosa caiguda d\'aigua de 97 metres d\'altura, especialment bella a la tardor.',
        location: 'Nikko',
        completed: false
      }
    ]
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    x: 58,
    y: 55,
    missions: [
      {
        id: 'fushimi-inari',
        title: 'Fushimi Inari Taisha',
        description: 'Fotografa els milers de torii vermells que formen túnels màgics a la muntanya.',
        location: 'Kyoto',
        completed: false
      },
      {
        id: 'kinkakuji',
        title: 'Pavelló Daurat',
        description: 'Captura el resplandent Temple Kinkaku-ji reflectit en l\'aigua del llac que l\'envolta.',
        location: 'Kyoto',
        completed: false
      },
      {
        id: 'arashiyama-bamboo',
        title: 'Bosc de Bambú d\'Arashiyama',
        description: 'Fotografa els alts bambus que creen un passadís verd i tranquil. Intenta capturar la llum filtrant-se!',
        location: 'Kyoto',
        completed: false
      }
    ]
  },
  {
    id: 'nara',
    name: 'Nara',
    x: 60,
    y: 58,
    missions: [
      {
        id: 'deer-park',
        title: 'Trobada al Parc dels Cérvols',
        description: 'Fes una foto amb els simpàtics cérvols del Parc de Nara. Assegura\'t de mantenir una distància respectuosa!',
        location: 'Nara',
        completed: false
      },
      {
        id: 'todai-ji',
        title: 'Gran Buda del Temple Todai-ji',
        description: 'Captura la magnífica estàtua del Gran Buda al Temple Todai-ji. Mostra l\'impressionant escala d\'aquesta meravella antiga.',
        location: 'Nara',
        completed: false
      }
    ]
  },
  {
    id: 'osaka',
    name: 'Osaka',
    x: 56,
    y: 60,
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
        title: 'Llums Nocturns de Dotonbori',
        description: 'Captura els vibrants rètols de neó i l\'animada atmosfera del districte de Dotonbori a la nit.',
        location: 'Osaka',
        completed: false
      }
    ]
  },
  {
    id: 'hiroshima',
    name: 'Hiroshima',
    x: 48,
    y: 62,
    missions: [
      {
        id: 'peace-memorial',
        title: 'Memorial de la Pau',
        description: 'Fes una foto respectuosa del Domo de la Bomba Atòmica, símbol de pau mundial.',
        location: 'Hiroshima',
        completed: false
      },
      {
        id: 'miyajima-torii',
        title: 'Torii Flotant de Miyajima',
        description: 'Captura la icònica porta torii vermella que sembla flotar sobre l\'aigua durant la marea alta.',
        location: 'Hiroshima',
        completed: false
      }
    ]
  },
  {
    id: 'fukuoka',
    name: 'Fukuoka',
    x: 40,
    y: 68,
    missions: [
      {
        id: 'fukuoka-castle',
        title: 'Castell de Fukuoka',
        description: 'Fotografa les ruïnes del castell envoltat de cirerers, especialment bells durant el sakura.',
        location: 'Fukuoka',
        completed: false
      },
      {
        id: 'yatai-stalls',
        title: 'Parades Yatai',
        description: 'Captura l\'ambient dels carretons de menjar nocturns típics de Fukuoka. Mostra la cultura gastronòmica local!',
        location: 'Fukuoka',
        completed: false
      }
    ]
  },
  {
    id: 'nagasaki',
    name: 'Nagasaki',
    x: 38,
    y: 70,
    missions: [
      {
        id: 'glover-garden',
        title: 'Jardí Glover',
        description: 'Fotografa les cases colonials occidentals amb vistes a la badia de Nagasaki.',
        location: 'Nagasaki',
        completed: false
      },
      {
        id: 'peace-park',
        title: 'Parc de la Pau',
        description: 'Captura l\'estàtua de la pau i els monuments commemoratius amb respecte i dignitat.',
        location: 'Nagasaki',
        completed: false
      }
    ]
  },
  {
    id: 'nagoya',
    name: 'Nagoya',
    x: 62,
    y: 53,
    missions: [
      {
        id: 'nagoya-castle',
        title: 'Castell de Nagoya',
        description: 'Fes una foto del castell amb els seus famosos dofins daurats (kinshachi) al sostre.',
        location: 'Nagoya',
        completed: false
      },
      {
        id: 'atsuta-shrine',
        title: 'Santuari Atsuta',
        description: 'Captura l\'atmosfera espiritual d\'un dels santuaris xintoistes més importants del Japó.',
        location: 'Nagoya',
        completed: false
      }
    ]
  }
];