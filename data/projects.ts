type ProjectsItem = {
  id: string,
  name: string,
  desc: string,
  langs: string[],
  teamSize?: number,
  imgSrc?: string,
  color?: string,
  url?: string,
  tags?: string[],
  hide?: boolean,
  variant: "normal" | "codepath" | "bitcamp"
}

const rafaGhLink = (repoName: string) => {
  return `https://github.com/rnieblesealo/${repoName}`
}

const projects: ProjectsItem[] = [
  {
    id: "riffs",
    variant: "bitcamp",
    name: "Riffs",
    desc: "Hum any tune and get a fully interactive guitar tab out of it!",
    langs: ["typescript", "react"],
    imgSrc: "images/riffs.png",
    color: "#821917",
    url: "https://devpost.com/software/riffs",
    tags: [
      "Pitch Recognition",
      "MIDI",
      "UI/UX",
      "Collaboration"
    ]
  },
  {
    id: "micro",
    variant: "normal",
    name: "Microtransistor",
    desc: "First-person action FPS with AI-powered enemies, perk machines, and some chonky guns!",
    langs: ["unity", "csharp"],
    imgSrc: "images/compressed-gifs/microtransistor.gif",
    color: "#b00003",
    url: "https://www.instagram.com/microtransistor/",
    tags: [
      "Game Design",
      "Animation",
      "State",
      "AI",
    ]
  },
  {
    id: "memwell",
    variant: "normal",
    name: "Memory Well",
    desc: "Official website for the band Memory Well. My first freelance project!",
    langs: ["javascript", "react", "vite", "supabase"],
    imgSrc: "images/compressed-gifs/memwell.gif",
    color: "purple",
    url: "https://www.memorywellband.com/",
    tags: [
      "Freelance",
      "Full-Stack",
    ]
  },
  {
    id: "kanjo",
    variant: "normal",
    name: "Kanjo.ai",
    desc: "Custom neural network for an emotion recognition ML model.",
    langs: ["python", "pytorch"],
    imgSrc: "images/compressed-gifs/kanjo-will.gif",
    color: "#5c9856",
    url: rafaGhLink("kanjoai"),
    teamSize: 3,
    tags: [
      "AI",
      "ML",
      "Data Science",
      "Computer Vision"
    ]
  },
  {
    id: "sofieski",
    variant: "normal",
    name: "Sofieski's Wordles",
    desc: "WhatsApp bot that auto-detects and stores Wordle solutions! Gift for my friend Sofia :)",
    langs: ["typescript", "react", "supabase"],
    imgSrc: "images/compressed-gifs/sofieski.gif",
    color: "#ff49bb",
    url: rafaGhLink("sofieski-wordles"),
    tags: [
      "Webscraping",
      "Regex",
      "Full-Stack",
      "CRUD",
    ]
  },
  {
    id: "bromo",
    variant: "normal",
    name: "Bromodoro",
    desc: "Full-stack gamified productivity app using the Pomodoro Technique.",
    langs: ["typescript", "react", "supabase"],
    imgSrc: "images/bromodoro-img.png",
    color: "#FF0100",
    url: "https://github.com/Frankelly-Guzman/Bromodoro",
    teamSize: 6,
    tags: [
      "Leadership",
      "Full-Stack",
      "UI/UX",
    ]
  },
  {
    id: "spyder",
    variant: "normal",
    name: "The Spyder",
    desc: "Dodge traffic as you escape a giant deadly spider! Survival is futile. Intern project built for HYEL!",
    langs: ["swift", "xcode", "figma"],
    imgSrc: "images/compressed-gifs/spyder.gif",
    color: "#603cb0",
    url: "https://github.com/hyungwlee/hyel-spyder",
    teamSize: 3,
    tags: [
      "Leadership",
      "Mobile",
      "Agile",
    ]
  },
  {
    id: "dower",
    variant: "normal",
    name: "Dower Tefense",
    desc: "Just another good 'ole tower defense game, except YOU are the attacker!",
    langs: ["cplusplus", "sdl", "cmake"],
    imgSrc: "images/compressed-gifs/dower.gif",
    color: "#326c1f",
    url: rafaGhLink("cpp-sdl-td"),
    tags: [
      "Game Development",
      "2D",
    ]
  },
  {
    id: "lucina",
    variant: "normal",
    name: "Lucina",
    desc: "First-person 3D horror game where you escape a hyper-intelligent, AI-powered entity.",
    langs: ["unity", "csharp"],
    imgSrc: "images/compressed-gifs/lucina.gif",
    color: "#b07007",
    teamSize: 4,
    url: "https://spikyshark.itch.io/lucina",
    tags: [
      "Game Design",
      "AI",
      "3D"
    ]
  },
  {
    id: "10parques",
    variant: "codepath",
    name: "#10Parques",
    desc: "Browse through the best parks in Barranquilla, Colombia.",
    langs: ["javascript", "react"],
    imgSrc: "images/compressed-gifs/10parques.gif",
    color: "#0b1c4d",
    url: "https://github.com/rnieblesealo/10parques",
    hide: true,
  },
  {
    id: "gty",
    variant: "codepath",
    name: "Guess the Year!",
    desc: "Flashcards game where you guess different songs' years of release.",
    langs: ["javascript", "react"],
    imgSrc: "images/compressed-gifs/guess-the-year.gif",
    color: "#0b1c4d",
    url: "https://github.com/rnieblesealo/guess-the-year",
    tags: [
      "3D CSS",
      "React Refs"
    ],
    hide: true,
  },
  {
    id: "cats",
    variant: "codepath",
    name: "Cats!",
    desc: "Get a random cat breed and learn more about it. Includes comprehensive filtering features!",
    langs: ["javascript", "react"],
    imgSrc: "images/compressed-gifs/cats.gif",
    color: "#0b1c4d",
    url: "https://github.com/rnieblesealo/cats",
    tags: [
      "JSON Destructuring",
      "REST API",
      "React Memoization"
    ],
    hide: true,
  },
  {
    id: "mt12",
    variant: "codepath",
    name: "#MyTop12",
    desc: "Enter anyone's LastFM handle to catch up on what they've been listening to!",
    langs: ["javascript", "react"],
    imgSrc: "images/mytop12.png",
    color: "#0b1c4d",
    url: "https://github.com/rnieblesealo/music-api",
    tags: [
      "Spotify API",
      "LastFM API",
      "Data Visualization"
    ]
  },
  {
    id: "charmaker",
    variant: "codepath",
    name: "Character Maker",
    desc: "Create the RPG character of your dreams, EarthBound style!",
    langs: ["javascript", "react", "supabase", "postgresql"],
    imgSrc: "images/character-maker.png",
    color: "#0b1c4d",
    url: "https://github.com/rnieblesealo/character-maker",
    tags: [
      "CRUD",
    ],
    hide: true,
  },
  {
    id: "tunecrate",
    variant: "codepath",
    name: "Tunecrate",
    desc: "Create an account and review ANY song on Spotify in a community-wide forum!",
    langs: ["javascript", "react", "supabase", "postgresql"],
    imgSrc: "images/compressed-gifs/tunecrate.gif",
    color: "#0b1c4d",
    url: "https://github.com/rnieblesealo/final-project",
    tags: [
      "Database Design",
      "User Auth",
      "Full-Stack"
    ]
  },
  {
    id: "chip",
    variant: "normal",
    name: "Chippy",
    desc: "An emulator for the original CHIP-8 VM.",
    langs: ["cplusplus", "sdl"],
    imgSrc: "images/compressed-gifs/chip8.gif",
    color: "black",
    url: rafaGhLink("cpp-chip8-emu"),
    tags: [
      "Computer Architecture"
    ]
  },
  {
    id: "mysh",
    variant: "normal",
    name: "mysh",
    desc: "A UNIX-style shell built for Linux.",
    langs: ["c", "linux", "bash"],
    imgSrc: "images/compressed-gifs/mysh.gif",
    color: "black",
    url: rafaGhLink("c-mysh"),
    tags: [
      "UNIX",
      "Systems Software"
    ]
  },
  {
    id: "skiplist",
    variant: "normal",
    name: "Skip List",
    desc: "An implementation of a skip list in Java.",
    langs: ["java"],
    imgSrc: "images/skiplist.png",
    color: "black",
    url: rafaGhLink("java-skiplist"),
    tags: [
      "DSA"
    ]
  },
]

export default projects
