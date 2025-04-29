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
  variant: "normal" | "codepath"
}

const rafaGhLink = (repoName: string) => {
  return `https://github.com/rnieblesealo/${repoName}`
}

const projects: ProjectsItem[] = [
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
    variant: "codepath",
    name: "Memory Well",
    desc: "Official website for the band Memory Well. My first freelance project!",
    langs: ["javascript", "react", "vite", "supabase"],
    imgSrc: "images/compressed-gifs/memwell.gif",
    color: "purple",
    url: rafaGhLink("memorywell"),
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
    color: "#EB6AAA",
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
    color: "#835792",
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
    color: "#44623A",
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
    color: "#8D7755",
    teamSize: 4,
    url: "https://github.com/ryanengphoto/lucina",
    tags: [
      "Game Design",
      "AI",
      "3D"
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
