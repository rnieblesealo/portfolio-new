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
    id: "lutron-embedded",
    location: "Philadelphia, PA",
    employer: "Lutron",
    role: "Embedded Software Engineering Intern",
    bulletsTitle: "I delivered:",
    bullets: [
      "A custom certificate utility for secure runtime communication with an embeddeddevice",
      "Robust cryptographic provisioning using C++ and OpenSSL",
      "Seamless integration with Lutron's existing security paradigm",
      "Extensive testing and documentation to support long-term maintainability"
    ],
    desc: "This was the most challenged I've ever been in my career, but also the most fun I've ever had!",
    startDate: new Date("May 15, 2025"),
    endDate: new Date("August 9, 2025"),
    imgSrc: "images/lutron.jpg",
    accentColor: "#375eb0",
    headingColor: "white"
  },
  {
    id: "hyel-ios",
    location: "Remote",
    employer: "HYEL",
    role: "iOS Software Engineering Contractor",
    bulletsTitle: "I built:",
    bullets: [
      "An original iOS game for a digital arcade using Swift and Xcode",
      "An object-oriented architecture that sped up delivery by 2 weeks",
      "A lightweight rendering system for smooth 60FPS performance on low-end iPhones",
      "A full-featured MVP in just 2 weeks with a team of 3"
    ],
    desc: "It was magical to build a game like those that made me fall in love with tech as a kid (shoutout Angry Birds!!!) :]",
    startDate: new Date("October 1, 2024"),
    endDate: new Date("December 20, 2024"),
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
    accentColor: "#0c9c70",
    headingColor: "white"
  },
]
