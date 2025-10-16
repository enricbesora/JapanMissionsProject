import { City } from '../types/Mission';

export const cities: City[] = [
  {
    id: 'tokyo',
    name: 'Tòkio',
    x: 697,
    y: 825,
    icon: '🗼',
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
        id: 'harajuku-fashion',
        title: 'Moda a Harajuku',
        description: 'Captura l\'estil únic i colorit de Takeshita Street a Harajuku. Mostra l\'essència de la moda japonesa més moderna!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'meiji-shrine',
        title: 'Serenitat al Santuari Meiji',
        description: 'Fotografa l\'impressionant portal torii i el camí enmig del bosc que porta al Santuari Meiji.',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'akihabara-electric',
        title: 'Món Electrònic d\'Akihabara',
        description: 'Captura els brillants rètols i l\'atmosfera otaku del districte electrònic més famós del món!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'tokyo-skytree',
        title: 'Vista des del Tokyo Skytree',
        description: 'Fes una foto de la ciutat des de l\'observatori del Tokyo Skytree, l\'edifici més alt de Japó!',
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
    x: 641, 
    y: 842,
    icon: '⛩️',
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
    x: 512, 
    y: 734,
    icon: '🏘️',
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
    x: 480, 
    y: 816,
    icon: '🎋',
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
        id: 'kiyomizu-dera',
        title: 'Temple Kiyomizu-dera',
        description: 'Captura la plataforma de fusta del temple amb vistes panoràmiques de Kioto. Una meravella arquitectònica!',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'ginkakuji',
        title: 'Pavelló de Plata',
        description: 'Fotografa el Temple Ginkaku-ji i els seus jardins zen meticulosament dissenyats.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'nishiki-market',
        title: 'Mercat de Nishiki',
        description: 'Captura els colors i l\'energia del "cuina de Kioto", amb els seus 400 anys d\'història!',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'philosophers-path',
        title: 'Camí del Filòsof',
        description: 'Fotografa aquest serè camí al llarg del canal, especialment bonic durant la floració dels cirerers.',
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
    x: 477, 
    y: 846,
    icon: '🦌',
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
    x: 452,
    y: 829,
    icon: '🏯',
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
        id: 'kuromon-market',
        title: 'Mercat Kuromon Ichiba',
        description: 'Fotografa la "cuina d\'Osaka" amb els seus frescos marisc, fruites i menjar de carrer!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'shinsekai',
        title: 'Districte Retro de Shinsekai',
        description: 'Captura la Torre Tsutenkaku i l\'atmosfera nostàlgica d\'aquest barri únic d\'Osaka.',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'umeda-sky',
        title: 'Observatori Umeda Sky',
        description: 'Fes una foto des del pont flotant del Umeda Sky Building amb vistes de 360 graus de la ciutat!',
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
    x: 432, 
    y: 835,
    icon: '🎢',
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
