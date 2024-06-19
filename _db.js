let games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platforms: ["Switch"],
  },
  {
    id: "2",
    title: "The Witcher 3: Wild Hunt",
    platforms: ["PS4", "Xbox One", "PC"],
  },
  {
    id: "3",
    title: "Cyberpunk 2077",
    platforms: ["PS5", "Xbox Series X", "PC"],
  },
  { id: "4", title: "Super Mario Odyssey", platforms: ["Switch"] },
  { id: "5", title: "Horizon Zero Dawn", platforms: ["PS4", "PC"] },
];

let authors = [
  { id: "1", name: "link", verified: true },
  { id: "2", name: "geralt", verified: false },
  { id: "3", name: "aloy", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: 10,
    content: "Amazing game!",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 9,
    content: "Great graphics and story.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 8,
    content: "Good but buggy.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 10,
    content: "A must-play for all ages.",
    author_id: "1",
    game_id: "4",
  },
  {
    id: "5",
    rating: 9,
    content: "Beautiful world and engaging story.",
    author_id: "3",
    game_id: "5",
  },
];

export default { games, authors, reviews };
