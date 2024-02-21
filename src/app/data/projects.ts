export type Project = {
  id: number
  title: string
  video: string
  pics: string[]
  link: string
  githubLink: string
  descriptionEn: string
  descriptionJp: string
  icons: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'eEpic',
    video: '/eEPIC.mp4',
    pics: ['/eEPIC review page.png', '/eEPIC edit page.png', '/eEPIC device image.png'],
    link: 'https://eepic.ca/vendors/3/details',
    githubLink: '',
    descriptionEn: 'A platform that connects vendors and users to create unforgettable experiences. It also provides enhanced visibility, allowing them to showcase their businesses and connect with new clients.',
    descriptionJp: '',
    icons: ['nextjs', "tailwind", 'ts', 'postgres'],
  },
  {
    id: 2,
    title: 'Appointly',
    video: '/Appointly.mp4',
    pics: ['/Appointly-guest-calendar.png', '/Appointly-availability-page.png', '/Appointly laptop image.png'],
    link: 'https://appointly-mtg.vercel.app',
    githubLink: 'https://github.com/Yuriko-Otorii/Appointly',
    descriptionEn:
      "A MERN app that manages all your meeting schedules. Users can set the availability to weekly and daily so that clients are only allowed to select the date within the user s availability.",
    descriptionJp: '',
    icons: ['react', 'js', 'tailwind', 'nodejs', 'mongodb']
  },
  {
    id: 3,
    title: 'Task manager app',
    video: '/Task manager.mp4',
    pics: ['/Task-Manager-home.jpg', '/Task-Manager-board.jpg', '/Task manager device image.png'],
    link: 'https://trello-clone-mern.vercel.app',
    githubLink: 'https://github.com/Yuriko-Otorii/Trello-clone',
    descriptionEn:
      'A MERN stack app which Trello-ish task management app. You can create task cards on each board and organize those tasks by drag and drop. Setting a due date and priority for each card and you can check near-due date tasks.',
    descriptionJp: '',
    icons: ['react', 'js', 'tailwind', 'nodejs', 'mongodb'],
  },
  {
    id: 4,
    video: '/Job hunt manager.mp4',
    pics: ['/Job-Hunt-Manager-applied-list.jpg', '/Job-Hunt-Manager-detail.jpg', '/Job hunt manager device image.png'],
    title: 'Job hunt organizer app',
    link: 'https://job-hunt-manager-pg.vercel.app',
    githubLink: 'https://github.com/Yuriko-Otorii/Job-hunt-manager-postgres',
    descriptionEn:
      'Full stack app by Express.js, EJS, and Postgres. Using this app, you can track which company you applied for and record the status of the process with a simple and beautiful UI.',
    descriptionJp: '',
    icons: ['js', 'tailwind', 'nodejs', 'postgres'],
  }
]
