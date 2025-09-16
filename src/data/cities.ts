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
        title: 'Tokyo Tower Adventure',
        description: 'Take a photo with the iconic Tokyo Tower in the background. Try to capture the full tower in your shot!',
        location: 'Tokyo',
        completed: false
      },
      {
        id: 'shibuya-crossing',
        title: 'Shibuya Crossing Experience',
        description: 'Capture the famous Shibuya Crossing during rush hour. Show the bustling energy of this iconic intersection!',
        location: 'Tokyo',
        completed: false
      },
      {
        id: 'senso-ji',
        title: 'Senso-ji Temple Visit',
        description: 'Take a respectful photo at the entrance of Senso-ji Temple. Include the traditional architecture in your shot.',
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
        title: 'Deer Park Encounter',
        description: 'Take a photo with the friendly deer in Nara Park. Make sure to keep a respectful distance!',
        location: 'Nara',
        completed: false
      },
      {
        id: 'todai-ji',
        title: 'Todai-ji Temple Giant Buddha',
        description: 'Capture the magnificent Great Buddha statue at Todai-ji Temple. Show the impressive scale of this ancient wonder.',
        location: 'Nara',
        completed: false
      },
      {
        id: 'kasuga-taisha',
        title: 'Kasuga Taisha Lanterns',
        description: 'Photograph the beautiful stone lanterns lining the path to Kasuga Taisha Shrine.',
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
        title: 'Osaka Castle Glory',
        description: 'Take a majestic photo of Osaka Castle. Try to capture it during golden hour for the best lighting!',
        location: 'Osaka',
        completed: false
      },
      {
        id: 'dotonbori',
        title: 'Dotonbori Night Lights',
        description: 'Capture the vibrant neon signs and bustling atmosphere of Dotonbori district at night.',
        location: 'Osaka',
        completed: false
      }
    ]
  }
];