import { City } from '../types/Mission';

export const cities: City[] = [
  {
    id: 'tokyo',
    name: 'Tòkio',
    x: 75,
    y: 30,
    missions: [
      {
        id: 'tokyo-tower',
        title: 'Aventura a la Tokyo Tower',
        description: 'Fes una foto amb la icònica Torre de Tòkio de fons. Intenta capturar la torre completa en la teva imatge!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'shibuya-crossing',
        title: 'Experiència al Shibuya Crossing',
        description: 'Captura el famós encreuament de Shibuya durant l\'hora punta. Mostra l\'energia bulliciosa d\'aquesta intersecció icònica!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'senso-ji',
        title: 'Visita al Temple Senso-ji',
        description: 'Fes una foto respectuosa a l\'entrada del Temple Senso-ji. Inclou l\'arquitectura tradicional en la teva imatge.',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'tokyo-secret',
        title: '🗼 Misió Secreta: Gat de la Sort',
        description: 'Troba una botiga amb un maneki-neko (gat de la sort) i fes-li una foto mentre et fa un gest d\'invitació!',
        location: 'Tòkio',
        completed: false,
        isSecret: true
      }
    ]
  },
  {
    id: 'hakone',
    name: 'Hakone',
    x: 78,
    y: 28,
    missions: [
      {
        id: 'hakone-shrine',
        title: 'Santuari de Hakone',
        description: 'Fotografa la icònica porta torii vermella al llac Ashi amb el Mont Fuji de fons si tens sort!',
        location: 'Hakone',
        completed: false
      },
      {
        id: 'owakudani',
        title: 'Vall d\'Owakudani',
        description: 'Captura els vapors sulfurosos d\'aquesta vall volcànica activa. No t\'oblidis dels ous negres!',
        location: 'Hakone',
        completed: false
      },
      {
        id: 'hakone-secret',
        title: '🥚 Misió Secreta: Ou Negre de Llarga Vida',
        description: 'Compra i fotografa un ou negre (kuro-tamago) cuit a les aigües volcàniques. Es diu que t\'allargarà la vida 7 anys!',
        location: 'Hakone',
        completed: false,
        isSecret: true
      }
    ]
  },
  {
    id: 'takayama',
    name: 'Takayama',
    x: 65,
    y: 40,
    missions: [
      {
        id: 'takayama-old-town',
        title: 'Barri Antic de Takayama',
        description: 'Fotografa els carrers tradicionals de l\'època Edo amb les cases de fusta de comerciants preservades perfectament.',
        location: 'Takayama',
        completed: false
      },
      {
        id: 'morning-market',
        title: 'Mercat Matinal de Miyagawa',
        description: 'Captura l\'atmosfera del mercat matinal amb els venedors locals i els seus products frescos.',
        location: 'Takayama',
        completed: false
      },
      {
        id: 'takayama-secret',
        title: '🍶 Misió Secreta: Sake Artesanal',
        description: 'Visita una destil·leria de sake tradicional i fes una foto dels barrilets de fusta de cedre!',
        location: 'Takayama',
        completed: false,
        isSecret: true
      }
    ]
  },
  {
    id: 'kyoto',
    name: 'Kioto',
    x: 55,
    y: 48,
    missions: [
      {
        id: 'fushimi-inari',
        title: 'Fushimi Inari Taisha',
        description: 'Fotografa els milers de torii vermells que formen túnels màgics a la muntanya.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'kinkakuji',
        title: 'Pavelló Daurat',
        description: 'Captura el resplandent Temple Kinkaku-ji reflectit en l\'aigua del llac que l\'envolta.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'arashiyama-bamboo',
        title: 'Bosc de Bambú d\'Arashiyama',
        description: 'Fotografa els alts bambus que creen un passadís verd i tranquil. Intenta capturar la llum filtrant-se!',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'kyoto-secret',
        title: '🌸 Misió Secreta: Geisha Misteriosa',
        description: 'Al districte de Gion, captura l\'essència tradicional amb una foto d\'un carrer amb cases de te.',
        location: 'Kioto',
        completed: false,
        isSecret: true
      }
    ]
  },
  {
    id: 'nara',
    name: 'Nara',
    x: 58,
    y: 52,
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
      },
      {
        id: 'nara-secret',
        title: '🦌 Misió Secreta: Biscotet Shika',
        description: 'Aconsegueix una foto d\'un cérvol menjant un shika senbei (galeta especial per cérvols)!',
        location: 'Nara',
        completed: false,
        isSecret: true
      }
    ]
  },
  {
    id: 'osaka',
    name: 'Osaka',
    x: 52,
    y: 54,
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
      },
      {
        id: 'osaka-secret',
        title: '🐙 Misió Secreta: Takoyaki Perfecte',
        description: 'Troba un carret de takoyaki i fes una foto del moment en què li donen la volta a les boles!',
        location: 'Osaka',
        completed: false,
        isSecret: true
      }
    ]
  },
  {
    id: 'universal-studios',
    name: 'Universal Studios',
    x: 51,
    y: 53,
    missions: [
      {
        id: 'hogwarts-castle',
        title: 'Castell de Hogwarts',
        description: 'Fotografa l\'impressionant Castell de Hogwarts a The Wizarding World of Harry Potter amb tot el seu detall màgic!',
        location: 'Universal Studios',
        completed: false
      },
      {
        id: 'mario-world',
        title: 'Super Nintendo World',
        description: 'Captura l\'acolorit món de Super Mario amb el Castell de Peach i els blocs característics del joc!',
        location: 'Universal Studios',
        completed: false
      },
      {
        id: 'minion-park',
        title: 'Parc dels Minions',
        description: 'Fes una foto divertida amb les figures gegants dels Minions i l\'atmosfera festiva de la zona!',
        location: 'Universal Studios',
        completed: false
      },
      {
        id: 'universal-secret',
        title: '⭐ Misió Secreta: Cervesa de Mantega',
        description: 'Compra i fotografa una cervesa de mantega (Butterbeer) al món de Harry Potter. Deliciosa!',
        location: 'Universal Studios',
        completed: false,
        isSecret: true
      }
    ]
  }
];