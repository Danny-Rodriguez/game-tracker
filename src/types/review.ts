export interface Review {
  id: string;
  gameId: string;
  rating: number;
  text: string;
  author: string;
  timestamp: string;
}

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'review-1',
    gameId: 'earthbound',
    rating: 5,
    text: "A quirky and unique RPG that's full of charm and humor. The modern setting makes it stand out from other RPGs of its time. The battle system is fun and the music is incredible!",
    author: 'retrogamer',
    timestamp: '2025-02-18T21:06:53-08:00'
  },
  {
    id: 'review-2',
    gameId: 'super-metroid',
    rating: 5,
    text: 'The perfect evolution of the Metroid formula. The atmosphere is unmatched, and the way it teaches you through gameplay rather than tutorials is masterful.',
    author: 'speedrunner',
    timestamp: '2025-02-18T21:06:53-08:00'
  },
  {
    id: 'review-3',
    gameId: 'street-fighter-2',
    rating: 4,
    text: 'The definitive fighting game of the 16-bit era. Balanced gameplay, iconic characters, and those sound effects! Only downside is the input timing can be a bit strict.',
    author: 'fightfan',
    timestamp: '2025-02-18T21:06:53-08:00'
  },
  {
    id: 'review-4',
    gameId: 'super-castlevania-4',
    rating: 4,
    text: 'The whip mechanics and control improvements make this the most accessible Castlevania. The Mode 7 effects are impressive for the SNES, and the soundtrack is haunting.',
    author: 'vampireslayer',
    timestamp: '2025-02-18T21:06:53-08:00'
  }
];
