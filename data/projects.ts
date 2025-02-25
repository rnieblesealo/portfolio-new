type ProjectsItem = {
  id: string,
  name: string,
  desc: string,
  langs: string[],
  teamSize?: number,
  imgSrc?: string,
  color?: string,
  url?: string,
  tags?: string[]
}

const rafaGhLink = (repoName: string) => {
  return `https://github.com/rnieblesealo/${repoName}`
}

const projects: ProjectsItem[] = [
  {
    id: "micro",
    name: "Microtransistor",
    desc: "First-person action FPS with AI-powered enemies, perk machines, and some chonky guns!",
    langs: ["unity", "csharp"],
    imgSrc: "images/compressed-gifs/microtransistor.gif",
    color: "#ec273f",
    url: "https://www.instagram.com/microtransistor/",
    tags: [
      "Game Development",
      "Gameplay Design",
      "3D Modeling",
      "AI",
    ]
  },
  {
    id: "memwell",
    name: "Memory Well",
    desc: "Official website for the band Memory Well. My first freelance project!",
    langs: ["javascript", "react", "vite", "axios"],
    imgSrc: "images/compressed-gifs/memwell.gif",
    color: "#5e5b8c",
    url: rafaGhLink("memorywell"),
    tags: [
      "Freelance",
      "Web Design",
      "Marketing",
      "Spotify API",
      "Paid From",
    ]
  },
  {
    id: "kanjo",
    name: "Kanjo.ai",
    desc: "Custom neural network for an emotion recognition ML model.",
    langs: ["python", "pytorch"],
    imgSrc: "images/compressed-gifs/kanjo-will.gif",
    color: "#5ab552",
    url: rafaGhLink("kanjoai"),
    teamSize: 3,
    tags: [
      "AI",
      "Machine Learning",
      "Data Science",
      "Neural Network",
      "Computer Vision"
    ]
  },
  {
    id: "sofieski",
    name: "Sofieski's Wordles",
    desc: "WhatsApp bot that auto-detects and stores Wordle solutions! Gift for my friend Sofia :)",
    langs: ["typescript", "react", "supabase"],
    imgSrc: "images/compressed-gifs/sofieski.gif",
    color: "#c878af",
    url: rafaGhLink("sofieski-wordles"),
    tags: [
      "WhatsApp API (WWebJS)",
      "Regex",
      "Database",
      "Full-Stack",
      "Fun",
    ]
  },
  {
    id: "bromo",
    name: "Bromodoro",
    desc: "Full-stack gamified productivity app using the Pomodoro Technique.",
    langs: ["typescript", "react", "supabase"],
    imgSrc: "images/bromodoro-img.png",
    color: "#ec273f",
    url: "https://github.com/Frankelly-Guzman/Bromodoro",
    teamSize: 6,
    tags: [
      "Leadership",
      "Full-Stack",
      "UI/UX",
      "Teamwork"
    ]
  },
  {
    id: "spyder",
    name: "The Spyder",
    desc: "Dodge traffic as you escape a giant deadly spider! Survival is futile. Intern project built for HYEL!",
    langs: ["swift", "xcode", "figma"],
    imgSrc: "images/compressed-gifs/spyder.gif",
    color: "#835792",
    url: "https://github.com/hyungwlee/hyel-spyder",
    teamSize: 3,
    tags: [
      "Leadership",
      "Software Production",
      "Milestones",
      "SpriteKit"
    ]
  },
  {
    id: "dower",
    name: "Dower Tefense",
    desc: "Just another good 'ole tower defense game, except YOU are the attacker!",
    langs: ["cplusplus", "sdl", "cmake"],
    imgSrc: "images/compressed-gifs/dower.gif",
    color: "#44623A",
    url: rafaGhLink("cpp-sdl-td"),
    tags: [
      "C++ Game Development",
    ]
  },
  {
    id: "lucina",
    name: "Lucina",
    desc: "First-person 3D horror game where you escape a hyper-intelligent, AI-powered entity.",
    langs: ["unity", "csharp"],
    imgSrc: "images/compressed-gifs/lucina.gif",
    color: "#8D7755",
    teamSize: 4,
    url: "https://github.com/ryanengphoto/lucina",
    tags: [
      "Game Design",
      "AI Design",
      "Map Design",
      "3D Modeling"
    ]
  },
  {
    id: "chip",
    name: "Chippy",
    desc: "An emulator for the original CHIP-8 VM.",
    langs: ["cplusplus", "sdl"],
    imgSrc: "images/compressed-gifs/chip8.gif",
    color: "black",
    url: rafaGhLink("cpp-chip8-emu"),
    tags: [
      "C++ Development"
    ]
  },
  {
    id: "mysh",
    name: "mysh",
    desc: "A UNIX-style shell built for Linux.",
    langs: ["c", "linux", "bash"],
    imgSrc: "images/compressed-gifs/mysh.gif",
    color: "black",
    url: rafaGhLink("c-mysh"),
    tags: [
      "UNIX Development",
      "Terminal"
    ]
  },
  {
    id: "skiplist",
    name: "Skip List",
    desc: "An implementation of a skip list in Java.",
    langs: ["java"],
    imgSrc: "images/skiplist.png",
    color: "black",
    url: rafaGhLink("java-skiplist"),
    tags: [
      "Data Structures & Algorithms"
    ]
  },
]

export default projects
