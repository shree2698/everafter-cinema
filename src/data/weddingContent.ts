export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  displayDate: string;
  time: string;
  venueName: string;
  venueAddress: string;
  description: string;
  dressCode?: string;
  iconName: string;
  image?: string;
}

export interface StoryScene {
  sceneNumber: string;
  headline: string;
  subtext: string;
  image: string;
  caption: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
  location: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  orientation: 'portrait' | 'landscape' | 'square';
  aspectRatio: string;
  category: 'candid' | 'ceremony' | 'portraits' | 'details';
}

export const weddingData = {
  couple: {
    partner1: { firstName: 'Arjun', lastName: 'Kapoor', role: 'Groom' },
    partner2: { firstName: 'Meera', lastName: 'Singhania', role: 'Bride' },
    monogram: 'A ♥ M',
    initials: { p1: 'A', p2: 'M' },
    tagline: 'FOREVER STARTS HERE',
    subtitle: 'A STORY WORTH REMEMBERING'
  },
  weddingDate: {
    isoString: '2026-12-18T11:30:00+05:30',
    displayDate: '18.12.2026',
    displayFull: 'DECEMBER 18, 2026',
    year: '2026',
    time: '11:30 AM'
  },
  audio: {
    title: 'A Love Worth Remembering',
    artist: 'Cinematic Chamber Ensemble',
    src: '/audio/ambient-love-theme.mp3',
    defaultVolume: 0.4
  },
  hero: {
    image: '/images/hero-couple-main.jpg',
    quote: 'And in your smile, I saw something more beautiful than the stars.',
    scrollPrompt: 'SCROLL TO EXPLORE'
  },
  storyScenes: [
    {
      sceneNumber: '01',
      headline: 'IT STARTED WITH A MOMENT.',
      subtext: 'A chance glance across a crowded courtyard in early autumn. Neither of us was searching, yet neither of us could look away.',
      image: '/images/story-01-moment.jpg',
      caption: 'The First Spark'
    },
    {
      sceneNumber: '02',
      headline: 'ONE UNEXPECTED MEETING.',
      subtext: 'A spontaneous afternoon that stretched into twilight under the Rajasthan skies. Two worlds quietly aligning into one.',
      image: '/images/story-02-meeting.jpg',
      caption: 'The Unplanned Journey'
    },
    {
      sceneNumber: '03',
      headline: 'A CONVERSATION THAT LASTED LONGER THAN EXPECTED.',
      subtext: 'Candlelight flickering low as coffee turned into hours of shared secrets, laughter, and unspoken promises.',
      image: '/images/story-03-dinner.jpg',
      caption: 'The Infinite Hours'
    },
    {
      sceneNumber: '04',
      headline: 'AND SOMEHOW, EVERYTHING CHANGED.',
      subtext: 'The quiet certainty that every step before had simply been leading us home to each other.',
      image: '/images/story-04-changed.jpg',
      caption: 'The Realization'
    }
  ] as StoryScene[],
  timelineMilestones: [
    {
      year: '2019',
      title: 'First Meeting',
      description: 'An accidental introduction at an art gallery in Mumbai that sparked an endless conversation.',
      image: '/images/timeline-2019.jpg',
      location: 'Mumbai'
    },
    {
      year: '2020',
      title: 'First Date',
      description: 'A rainy evening, warm chai, and a realization that time moves differently when we are together.',
      image: '/images/timeline-2020.jpg',
      location: 'Marine Drive'
    },
    {
      year: '2021',
      title: 'Our First Trip',
      description: 'Traversing the mist-covered peaks of Himachal, getting lost, and finding our shared rhythm.',
      image: '/images/timeline-2021.jpg',
      location: 'Manali Heights'
    },
    {
      year: '2023',
      title: 'The Proposal',
      description: 'On a secluded cliffside overlooking the lakes at sunset, a question asked with tears of joy.',
      image: '/images/timeline-2023.jpg',
      location: 'Udaipur Overlook'
    },
    {
      year: '2025',
      title: 'Forever Begins',
      description: 'Choosing our home, planting our roots, and preparing for the celebration of a lifetime.',
      image: '/images/timeline-2025.jpg',
      location: 'Our Sanctuary'
    },
    {
      year: '2026',
      title: 'Our Wedding',
      description: 'Surrounded by our loved ones, promising forever beneath the golden palace arches.',
      image: '/images/timeline-2026.jpg',
      location: 'The Grand Taj Palace'
    }
  ] as TimelineMilestone[],
  events: [
    {
      id: 'haldi',
      name: 'HALDI',
      date: '20 DEC 2026',
      displayDate: 'Sunday, 20 Dec 2026',
      time: '10:00 AM',
      venueName: 'The Royal Poolside Lawn',
      venueAddress: 'The Grand Taj Palace, Udaipur',
      description: 'A morning immersed in radiant turmeric hues, marigolds, festive music, and auspicious blessings.',
      dressCode: 'Sunlit Yellows & Festive Florals',
      iconName: 'sun',
      image: '/images/event-haldi.jpg'
    },
    {
      id: 'mehendi',
      name: 'MEHENDI',
      date: '20 DEC 2026',
      displayDate: 'Sunday, 20 Dec 2026',
      time: '04:00 PM',
      venueName: 'Palace Courtyard & Terraces',
      venueAddress: 'The Grand Taj Palace, Udaipur',
      description: 'Intricate henna adornments, folk melodies, acoustic harmonies, and artisanal refreshments at dusk.',
      dressCode: 'Emerald Greens & Pastel Silks',
      iconName: 'flower',
      image: '/images/event-mehendi.jpg'
    },
    {
      id: 'sangeet',
      name: 'SANGEET',
      date: '21 DEC 2026',
      displayDate: 'Monday, 21 Dec 2026',
      time: '07:00 PM',
      venueName: 'The Imperial Ballroom',
      venueAddress: 'The Grand Taj Palace, Udaipur',
      description: 'A night of vibrant dance performances, musical celebration, and unforgettable family revelry.',
      dressCode: 'Glamorous Midnight & Shimmering Golds',
      iconName: 'music',
      image: '/images/event-sangeet.jpg'
    },
    {
      id: 'wedding',
      name: 'WEDDING',
      date: '22 DEC 2026',
      displayDate: 'Tuesday, 22 Dec 2026',
      time: '11:30 AM',
      venueName: 'The Sacred Lakefront Mandap',
      venueAddress: 'The Grand Taj Palace, Udaipur',
      description: 'The auspicious Pheras, Vedic chants, and the sacred union of two souls under the eternal heavens.',
      dressCode: 'Regal Traditional & Heritage Royal',
      iconName: 'heart',
      image: '/images/event-wedding.jpg'
    },
    {
      id: 'reception',
      name: 'RECEPTION',
      date: '22 DEC 2026',
      displayDate: 'Tuesday, 22 Dec 2026',
      time: '07:30 PM',
      venueName: 'The Crystal Dining Pavilion',
      venueAddress: 'The Grand Taj Palace, Udaipur',
      description: 'A black-tie banquet dinner, heartfelt champagne toasts, and dancing beneath the moonlit chandelier.',
      dressCode: 'Black Tie / Haute Couture Formals',
      iconName: 'sparkles',
      image: '/images/event-reception.jpg'
    }
  ] as WeddingEvent[],
  venue: {
    name: 'THE GRAND TAJ PALACE',
    tagline: 'A timeless place for a timeless celebration.',
    location: 'Udaipur, Rajasthan, India',
    description: 'Perched delicately on the serene waters of Lake Pichola, The Grand Taj Palace is an architectural marvel of white marble, arched verandas, and regal heritage that has hosted centuries of timeless royal romance.',
    image: '/images/venue-taj-palace.jpg',
    mapCoordinates: { lat: 24.5764, lng: 73.6806 },
    googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Taj+Palace+Udaipur',
    airportInfo: 'Maharana Pratap Airport (UDR) — 45 mins private transfer',
    accommodations: 'Exclusive private suites reserved for all registered wedding guests.'
  },
  gallery: [
    {
      id: 'g1',
      src: '/images/gallery-01.jpg',
      caption: 'Sunset across Lake Pichola',
      orientation: 'landscape',
      aspectRatio: '16/9',
      category: 'portraits'
    },
    {
      id: 'g2',
      src: '/images/gallery-02.jpg',
      caption: 'Candid smiles during twilight',
      orientation: 'portrait',
      aspectRatio: '4/5',
      category: 'candid'
    },
    {
      id: 'g3',
      src: '/images/gallery-03.jpg',
      caption: 'Beneath the marble arches',
      orientation: 'portrait',
      aspectRatio: '4/5',
      category: 'ceremony'
    },
    {
      id: 'g4',
      src: '/images/gallery-04.jpg',
      caption: 'The golden ring crafted with love',
      orientation: 'square',
      aspectRatio: '1/1',
      category: 'details'
    },
    {
      id: 'g5',
      src: '/images/gallery-05.jpg',
      caption: 'A quiet embrace in the mountains',
      orientation: 'landscape',
      aspectRatio: '16/9',
      category: 'portraits'
    },
    {
      id: 'g6',
      src: '/images/gallery-06.jpg',
      caption: 'Whispered promises',
      orientation: 'portrait',
      aspectRatio: '4/5',
      category: 'candid'
    }
  ] as GalleryPhoto[],
  closingStatement: {
    lines: [
      'AND THEN...',
      'WE MET.',
      'WE LAUGHED.',
      'WE TRAVELED.',
      'WE GREW.',
      'WE CHOSE EACH OTHER.'
    ],
    signature: 'Forever starts here.',
    salutation: 'WITH LOVE, ARJUN & MEERA'
  }
};
