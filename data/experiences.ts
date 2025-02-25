export type ExperienceItem = {
  id: string,
  location: string,
  role: string,
  desc: string,
  bulletsTitle?: string,
  bullets?: string[],
  startDate: Date,
  endDate?: Date,
  imgSrc?: string,
  startTitleColor?: string,
  endTitleColor?: string
}

export const experiences: ExperienceItem[] = [
  {
    id: "lutron",
    location: "Lutron",
    role: "Embedded Software Engineering Intern",
    desc: "Incoming summer 2025!",
    startDate: new Date("May 27, 2025"), // only month, year will be displayed but needs day to be valid 
    endDate: new Date("August 5, 2025"),
    imgSrc: "images/lutron.jpg",
    startTitleColor: "white",
    endTitleColor: "#006CCB"
  },
  {
    id: "hyel",
    location: "HYEL",
    role: "Software Engineer",
    desc: "At HYEL, I had the opportunity to work as a contractor in creating a complete, production-ready software product, from the design phase all the way to shipping. Check out \"The Spyder\" in the HYEL app/my projects above!",
    bulletsTitle: "Here, I...",
    bullets: [
      "Designed a complete iOS game using Figma",
      "Implemented it using Xcode, UIKit, Swift and SpriteKit",
      "Ensured a consistent 60 FPS and reduced render load by 30% for its production version.",
    ],
    startDate: new Date("September 1, 2024"), // only month, year will be displayed but needs day to be valid 
    endDate: new Date("December 1, 2024"),
    imgSrc: "images/hyel.jpg",
    startTitleColor: "white",
    endTitleColor: "#6C00F9"
  },
  {
    id: "codepath-web",
    location: "CodePath",
    role: "Web Development Student",
    desc: "I'm currently taking CodePath's WEB102 for intermediate web development, where I'm most interested in learning to better collaborate with others in team-based settings!",
    startDate: new Date("February 1, 2025"),
    imgSrc: "images/codepath.jpg",
    startTitleColor: "#06C58C",
    endTitleColor: "white"
  },
  {
    id: "kh-lead",
    location: "KnightHacks",
    role: "Project Director",
    desc: "As a team of 5, we'll be designing and implementing Bromodoro, a full-stack app designed to make productivity more social and fun using the genius Pomodoro Technique.",
    bulletsTitle: "My team and I are...",
    bullets: [
      "Developing a modern, responsive (and fun!) frontend using Vite + React.",
      "Leveraging Supabase and its API for our database and deployment needs.",
      "Creating a fun app that'll hopefully get you to do your homework!",
    ],
    startDate: new Date("January 1, 2025"),
    imgSrc: "images/knighthacks.jpg",
    startTitleColor: "#9969CD",
    endTitleColor: "#131731"
  },
  {
    id: "kh-workshop",
    location: "KnightHacks",
    role: "iOS Development Workshop Instructor",
    desc: "I'm soon going to host my own KnightHacks workshop, where I'll be introducing curious minds to the world of mobile dev with Swift using a beginner-friendly game project!",
    bulletsTitle: "I will be teaching...",
    bullets: [
      "The Xcode IDE and its file explorer, inspector, and debugger.",
      "The Swift language and its special features (optionals, unwrapping, computed properties, etc.)",
      "iOS app architecture (ViewControllers, SceneControllers, Windows, etc.)"
    ],
    startDate: new Date("January 1, 2025"),
    imgSrc: "images/knighthacks.jpg",
    startTitleColor: "#9969CD",
    endTitleColor: "#131731"
  },
]
