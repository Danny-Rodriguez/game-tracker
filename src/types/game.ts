export type GameStatus = 'Backlog' | 'Now Playing' | 'Finished';

export interface Game {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  status: GameStatus;
}

export const INITIAL_GAMES: Game[] = [
  {
    id: 'earthbound',
    title: 'Earthbound',
    image: '/assets/games/earthbound.jpg',
    status: 'Backlog'
  },
  {
    id: 'final-fight-2',
    title: 'Final Fight 2',
    image: '/assets/games/final-fight-2.jpg',
    status: 'Backlog'
  },
  {
    id: 'megaman-7',
    title: 'Mega Man 7',
    image: '/assets/games/megaman-7.jpg',
    status: 'Backlog'
  },
  {
    id: 'street-fighter-2',
    title: 'Street Fighter II',
    image: '/assets/games/street-fighter-II.jpg',
    status: 'Backlog'
  },
  {
    id: 'super-castlevania-4',
    title: 'Super Castlevania IV',
    image: '/assets/games/super-castlevania-IV.jpg',
    status: 'Backlog'
  },
  {
    id: 'super-mario-world',
    title: 'Super Mario World',
    image: '/assets/games/super-mario-world.jpg',
    status: 'Backlog'
  },
  {
    id: 'super-metroid',
    title: 'Super Metroid',
    image: '/assets/games/super-metroid.jpg',
    status: 'Backlog'
  },
  {
    id: 'tmnt-turtles-in-time',
    title: 'Teenage Mutant Ninja Turtles',
    subtitle: 'Turtles in Time',
    image: '/assets/games/teenage-mutant-ninja-turtles-turtles-in-time.jpg',
    status: 'Backlog'
  },
  {
    id: 'zelda-link-to-the-past',
    title: 'The Legend of Zelda',
    subtitle: 'A Link to the Past',
    image: '/assets/games/the-legend-of-zelda-a-link-to-the-past.jpg',
    status: 'Backlog'
  },
  {
    id: 'x-men-mutant-apocalypse',
    title: 'X-Men',
    subtitle: 'Mutant Apocalypse',
    image: '/assets/games/x-men-mutant-apocalypse.jpg',
    status: 'Backlog'
  },
];
