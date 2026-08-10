/**
 * List of portfolio projects displayed on the website.
 *
 * @type {Array<{
 *   number: string,
 *   title: string,
 *   descriptionKey: string,
 *   image: string,
 *   github: string,
 *   liveTest: string,
 *   technologies: string[]
 * }>}
 */
const projects = [
  {
    number: "01",
    title: "Join",
    descriptionKey: "projects.join.description",
    image: "/assets/images/overlay-join-image.jpg",
    github: "https://github.com/Marzzzo/Join",
    liveTest: "https://join.marco-burdick.de/",
    technologies: ["CSS", "HTML", "Firebase", "Angular", "Typescript"],
  },
  {
    number: "02",
    title: "El Pollo Loco",
    descriptionKey: "projects.elPolloLoco.description",
    image: "/assets/images/overlay-el-pollo-loco.png",
    github: "https://github.com/Marzzzo/El-Pollo-Loco",
    liveTest: "https://el-pollo-loco.marco-burdick.de",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "Pokedex",
    descriptionKey: "projects.pokedex.description",
    image: "/assets/images/overlay-pokedex.png",
    github: "https://github.com/Marzzzo/Pokedex",
    liveTest: "https://pokedex.marco-burdick.de/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

/**
 * List of testimonial cards displayed in the carousel.
 * Each card contains localized descriptions and positions.
 *
 * @type {Array<{
 *   id: string,
 *   description: {de: string, en: string},
 *   name: string,
 *   position: {de: string, en: string}
 * }>}
 */
const carouselCards = [
  {
    id: "1",
    description: {
      de: ` Marco ist ein zuverlässiger, engagierter und hilfsbereiter Kollege. Er arbeitet sich auch in komplexe Themen gründlich
                  ein, gibt nicht vorschnell auf und findet nachhaltige Lösungen. Mit seiner strukturierten Arbeitsweise und seiner offenen
                  Art ist er ein geschätztes Teammitglied, auf das jederzeit Verlass ist.`,
      en: `Marco is a reliable, dedicated, and supportive colleague. He approaches even complex topics with great care, doesn't give up easily, and finds sustainable solutions. With his structured way of working and his open-minded attitude, he is a valued team member who can always be relied upon.`,
    },
    name: "J.Hoffmann",
    position: {
      de: "Frau",
      en: "Wife",
    },
  },
  {
    id: "2",
    description: {
      de: `Marco arbeitet gut im Team und bringt sich aktiv in die Gruppenarbeit ein. Herausforderungen nimmt er
          motiviert an und gibt bei der Lösung von Problemen stets 100%. Mit seiner hilfsbereiten Art unterstützt er seine Kollegen jederzeit gerne.
          Auf Marco kann man sich jederzeit verlassen sowohl fachlich als auch menschlich.`,
      en: `Marco works well in a team and actively contributes to group projects. He takes on challenges with enthusiasm and always gives his best when solving problems. With his helpful and supportive attitude, he is always willing to assist his colleagues. Marco is someone you can always rely on, both professionally and personally.`,
    },
    name: "C.Berke",
    position: {
      de: "Freund",
      en: "Friend",
    },
  },
  {
    id: "3",
    description: {
      de: "Marco ist ein äußerst zuverlässiger und engagierter Mensch, der jede Aufgabe mit großer Sorgfalt und Ehrgeiz angeht. Er arbeitet strukturiert, denkt lösungsorientiert und gibt auch bei anspruchsvollen Herausforderungen nicht auf. Durch seine hilfsbereite und offene Art trägt er zu einer angenehmen Zusammenarbeit bei und motiviert sein Umfeld. ",
      en: "Marco is an exceptionally reliable and dedicated person who approaches every task with great care and determination. He works in a structured manner, thinks in a solution-oriented way, and never gives up, even when faced with challenging problems. With his helpful and open-minded attitude, he contributes to a positive team environment and inspires those around him.",
    },
    name: "F.Burdick",
    position: {
      de: "Bruder",
      en: "Brother",
    },
  },
  {
    id: "4",
    description: {
      de: "Ich kenne Marco seit mehr als 30 Jahren und schätze ihn als jemanden, auf den man sich jederzeit verlassen kann. Mit seiner professionellen, pragmatischen Art und seinem hohen Qualitätsanspruch bringt er genau die Eigenschaften mit, die ich auch aus HR-Sicht für eine erfolgreiche Zusammenarbeit wichtig finde. Ich kann ihn mit bestem Gewissen empfehlen und bin sicher, dass seine Kunden seine Arbeit genauso schätzen werden wie ich. ",
      en: "I have known Marco for over 30 years and appreciate him as someone you can always rely on. With his professional, pragmatic approach and high standards of quality, he possesses exactly the qualities that I consider important for successful collaboration from an HR perspective. I can recommend him with the utmost confidence and am certain that his clients will value his work just as much as I do.",
    },
    name: "M.Göckede",
    position: {
      de: "Freund",
      en: "Friend",
    },
  },
];
