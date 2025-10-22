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
        title: 'Petó sota la Tokyo Tower 💋',
        description: 'Feu-vos una foto donant-vos un petó amb la Torre de Tòkio il·luminada de fons. Romàntic però amb estil!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'shibuya-crossing',
        title: 'Sobreviu al Shibuya Crossing 🚦',
        description: 'Feu un selfie enmig del caos del pas de vianants més famós del món. Bonus si tots dos mireu a càmera!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'senso-ji',
        title: 'Desig al Temple Senso-ji 🏮',
        description: 'Feu-vos una foto bufant l’encens o demanant un desig plegats davant del temple.',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'harajuku-fashion',
        title: 'Parella fashion a Harajuku 👘',
        description: 'Busqueu un racó colorit i feu una foto divertida amb alguna peça o accessori extravagant. Poseu com models!',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'meiji-shrine',
        title: 'Promesa al Santuari Meiji 💞',
        description: 'Escriviu un petit desig o promesa d’amor al santuari i feu-li una foto.',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'akihabara-electric',
        title: 'Otaku Challenge a Akihabara 🎮',
        description: 'Trobeu un maid café i que el JA(o els dos millor) feu una foto amb una maid.',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'akihabara-gacha',
        title: 'Buscant les boles de drac 🎮',
        description: 'Trobeu el gacha mes raro que hi hagi i compreu-ne un (feu una foto)',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'tokyo-skytree',
        title: 'Vista des del cel 🌆',
        description: 'Feu una foto de vosaltres amb Tòkio als peus des del mirador del Tokyo Skytree.',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'tokyo-martilleador',
        title: 'Foto del Martilleador 🌆',
        description: 'Heu de anar a un Pokemon Center (o tenda amb pokemons) i trobar un peluche o figura del Martilleador (Duraludon a google)',
        location: 'Tòkio',
        completed: false
      },
      {
        id: 'tokyo-secret',
        title: '🐱 Misió Secreta: Maneki-neko enamorat',
        description: 'Trobeu un gat de la sort i feu una foto imitant-ne la postura!',
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
        title: 'Postcard al llac Ashi 📸',
        description: 'Feu-vos una foto davant del torii vermell flotant, amb el Mont Fuji (si surt) i la millor cara d’amor possible.',
        location: 'Hakone',
        completed: false
      },
      {
        id: 'owakudani',
        title: 'Fum volcànic i ous màgics 🥚',
        description: 'Feu una foto divertida amb els vapors sulfurosos al fons.',
        location: 'Hakone',
        completed: false
      },
      {
        id: 'hakone-secret',
        title: '💨 Misió Secreta: L’ou etern',
        description: 'Tasteu un kuro-tamago i feu una foto de qui faci la millor cara de “quina sort!” 😆',
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
        title: 'Passeig a l’antic Japó ⛩️',
        description: 'Feu una foto caminant pels carrers tradicionals de Takayama, com si fossiu protagonistes d’una pel·lícula antiga.',
        location: 'Takayama',
        completed: false
      },
      {
        id: 'morning-market',
        title: 'Mercat dels sentits 🍡',
        description: 'Proveu alguna menja local i feu una foto d’un dels dos donant una mossegada exagerada!',
        location: 'Takayama',
        completed: false
      },
      {
        id: 'takayama-secret',
        title: '🍶 Misió Secreta: Brindis amb sake',
        description: 'Busqueu una destil·leria tradicional i feu una foto brindant amb gots de sake com bons borrachos.',
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
        title: 'Camí infinit de torii vermells 🔴',
        description: 'Feu una foto caminant entre els torii, agafats de la mà o fent una mini-cursa romàntica!',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'kinkakuji',
        title: 'Reflex d’or ✨',
        description: 'Feu una foto amb el Pavelló Daurat reflectit i un somriure digne de postal de lluna de mel.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'arashiyama-bamboo',
        title: 'Bosc encantat de bambú 🎍',
        description: 'Foto entre els bambús, d’esquena o abraçats. Imagineu que sou pandas.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'kiyomizu-dera',
        title: 'Amor amb vistes 🏞️',
        description: 'Feu una foto amb el temple al fons i feu veure que declareu el vostre amor com si fos una peli romàntica.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'ginkakuji',
        title: 'Jardí Zen Challenge 🪷',
        description: 'Feu una foto intentant meditar o fer postura zen al costat del jardí de sorra.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'nishiki-market',
        title: 'Caça del snack perfecte 🍢',
        description: 'Busqueu una menja curiosa i feu una foto mentres es menja (millor si es picant jeje).',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'philosophers-path',
        title: 'Passeig filosòfic 💭',
        description: 'Feu-vos una foto caminant junts pel camí del Filòsof com si parléssiu de la vida, l’amor i el sushi.',
        location: 'Kioto',
        completed: false
      },
      {
        id: 'kyoto-secret',
        title: '🌸 Misió Secreta: Geisha per un dia',
        description: 'Vestiu-vos de kimono i feu una foto ben elegant.',
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
        title: 'Amics amb banyes 🦌',
        description: 'Feu una foto alimentant o saludant un cérvol (si es deixa!). Bonus si tots tres mireu a càmera.',
        location: 'Nara',
        completed: false
      },
      {
        id: 'todai-ji',
        title: 'El Gran Buda i els petits vosaltres 🪷',
        description: 'Feu una foto amb la immensa estàtua al fons. Intentau fer cara de pau interior.',
        location: 'Nara',
        completed: false
      },
      {
        id: 'nara-secret',
        title: '🍘 Misió Secreta: Snack compartit',
        description: 'Feu una foto oferint una galeta a un cérvol com si li féssiu un brindis d’amor! 😄',
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
        title: 'Castell reial 👑',
        description: 'Feu una foto davant del castell fent veure que sou l’emperador i l’emperadriu d’Osaka!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'dotonbori',
        title: 'Llums i rialles 💡',
        description: 'Feu un selfie amb els neons de Dotonbori de fons. Bonus si imiteu la famosa postura del cartell Glico!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'kuromon-market',
        title: 'Menjar com a locals 🍤',
        description: 'Feu-vos una foto menjant alguna cosa de carrer amb cara de “això és molt locu!”.',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'shinsekai',
        title: 'Retro Love 💕',
        description: 'Feu una foto tipus vintage amb la Torre Tsutenkaku de fons. Somriu com si fos 1960(a saber que significa).',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'umeda-sky',
        title: 'Cel d’Osaka 🌇',
        description: 'Feu una foto amb vistes des de l’Umeda Sky, de la mà o amb un brindis improvisat!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'osaka-secret',
        title: '🐙 Misió Secreta: Takoyaki Battle',
        description: 'Feu una foto amb la Julia menjant un takoyaki, que se que li encanten!',
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
        title: 'Hechizo d’amor a Hogwarts 🪄',
        description: 'Feu una foto amb vareta en mà llançant-vos un encanteri d’amor davant del castell!',
        location: 'Universal Studios',
        completed: false
      },
      {
        id: 'mario-world',
        title: 'Super Parella Bros 🍄',
        description: 'Feu una foto saltant o fent veure que acabeu de guanyar una partida a Super Mario!',
        location: 'Universal Studios',
        completed: false
      },
      {
        id: 'minion-park',
        title: 'Somriu com un Minion 😂',
        description: 'Feu una foto divertida imitant la cara o la postura d’un Minion. Bonus si trobeu un de groc gegant.',
        location: 'Universal Studios',
        completed: false
      },
      {
        id: 'universal-secret',
        title: '🍺 Misió Secreta: Brindis màgic',
        description: 'Brindeu amb una cervesa de mantega i feu una foto “a la salut de l’amor etern!”',
        location: 'Universal Studios',
        completed: false,
        isSecret: true
      }
    ]
  }
];
