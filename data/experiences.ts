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
    role: "Web Development Alumnus",
    desc: "I've completed CodePath's intermediate full-stack web dev course with an honors distinction!",
    bulletsTitle: "I mastered:",
    bullets: [
      "Frontend development with React",
      "Working with varied API/JSON data",
      "CRUD with Supabase & PostgreSQL",
      "Full-stack app development combining all these!",
    ],
    startDate: new Date("February 1, 2025"),
    imgSrc: "images/codepath.jpg",
    startTitleColor: "#06C58C",
    endTitleColor: "white"
  },
]
