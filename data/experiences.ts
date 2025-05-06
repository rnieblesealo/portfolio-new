export type ExperienceItem = {
  id: string,
  employer: string,
  location: string,
  role: string,
  desc: string,
  bulletsTitle?: string,
  bullets?: string[],
  startDate: Date,
  endDate?: Date,
  imgSrc?: string,
  accentColor?: string,
  headingColor?: string,
}

export const experiences: ExperienceItem[] = [
  {
    id: "lutron",
    employer: "Lutron",
    location: "Philadelphia, PA",
    role: "Embedded Software Engineering Intern",
    desc: "Super excited to join Lutron this summer and dive into embedded systems!",
    startDate: new Date("May 27, 2025"),
    endDate: new Date("August 5, 2025"),
    imgSrc: "images/lutron.jpg",
    accentColor: "#436dc4",
    headingColor: "white"
  },
  {
    id: "hyel",
    employer: "HYEL",
    location: "Los Angeles, CA",
    role: "Software Engineer",
    bulletsTitle: "I...",
    bullets: [
      "Designed a complete iOS game in Figma",
      "Built it with Xcode, UIKit, Swift & SpriteKit",
      "Maintained 60 FPS and cut render load by 30%",
    ],
    desc: "This shipped product—“The Spyder”—is featured in my projects above!",
    startDate: new Date("September 1, 2024"),
    endDate: new Date("December 1, 2024"),
    imgSrc: "images/hyel.jpg",
    accentColor: "#6d00f9",
    headingColor: "white"
  },
  {
    id: "codepath-web",
    location: "Remote",
    employer: "CodePath",
    role: "Web Development Alumnus",
    bulletsTitle: "I mastered:",
    bullets: [
      "Frontend development with React",
      "Dynamic apps using APIs & JSON",
      "CRUD with Supabase & PostgreSQL",
      "End-to-end full-stack app building",
    ],
    desc: "Completed with honors distinction! Check some of the stuff I built for this course above :)",
    startDate: new Date("February 1, 2025"),
    endDate: new Date("May 3, 2025"),
    imgSrc: "images/codepath.jpg",
    accentColor: "#07c88f",
    headingColor: "white"
  },
]
