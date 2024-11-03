import { MilestoneTypes } from '@/types';

export const ExperienceData = [
  {
    id: 1,
    type: MilestoneTypes.Education,
    date: 'August 2024 - May 2026',
    title: 'Master of Science in Software Engineering',
    img: '/company-logo/chalmers.webp',
    organization: 'Chalmers University of Technology',
    location: 'Gothenburg, Sweden',
    description: [
      "Focusing on more advanced topics like bayesian statistics, advanced requirements engineering, QA, and software architecture.",
    ]
  },
  {
    id: 2,
    type: MilestoneTypes.Work,
    date: 'December 2022 - February 2023',
    title: 'Software Engineer',
    img: '/company-logo/bally.png',
    organization: "Bally's",
    location: 'Skövde, Sweden',
    description: [
      "Worked with a senior developer in pair programming to resolve technical issues reported by customers.",
      "Utilized technologies such as Spring Boot, TypeScript, MySQL, Object-Oriented Programming, and Docker for backend development.",
      "Gained practical experience with methodologies such as Jira, SCRUM meetings, and Test-Driven Development."
    ]
  },
  {
    id: 3,
    type: MilestoneTypes.Work,
    date: 'June 2022 - August 2022',
    title: 'Software Engineer',
    img: '/company-logo/bally.png',
    organization: "Bally's",
    location: 'Skövde, Sweden',
    description: [
      "Designed the database, identified software requirements, held meetings with stakeholders, and implemented backend logic using Object-Oriented Programming principles.",
      "Supported and mentored two other students in React and component architecture.",
      "The inhouse project utilised MySQL, React, Spring Boot, JavaScript, Java, and the Okta API.",
      "The application is still actively used by its 100+ employees and has received positive feedback for its usability and can be found in the project section."
    ]
  },
  {
    id: 4,
    type: MilestoneTypes.Work,
    date: 'January 2022 - June 2022',
    title: 'Full Stack Developer',
    img: '/company-logo/integrify.jpeg',
    organization: 'Integrify',
    location: 'Remote',
    description: [
      "Completed a boot camp to supplement my computer science degree with practical experience not fully covered in academics.",
      "Gained skills in JavaScript, React, TypeScript, NodeJS, and Cloud services, improving my practical knowledge in full-stack development.",
      "Built CSFairTrade, a full-stack app for trading CS2 in-game items, using React, Node.js, MySQL, and Socket.IO for real-time updates, with features like Steam login (oAuth) and virtual item trading."
    ]
  },
  {
    id: 5,
    type: MilestoneTypes.Education,
    date: 'August 2021 - May 2024',
    title: 'Bachelor of Science in Computer Science',
    img: '/company-logo/his.png',
    organization: 'University of Skövde',
    location: 'Skövde, Sweden',
    description: [
      "Specialized in software engineering, diving into algorithms, data structures, OOP and database management.",
      "Wrote a thesis about scaling strategies and cloud-native deployment, exploring ways to improve scalability and efficiency.",
    ]
  },
  {
    id: 6,
    type: MilestoneTypes.Work,
    date: 'June 2019 - Mars 2022',
    title: 'Truck Driver',
    img: '/company-logo/mathem.jpg',
    organization: 'Mathem',
    location: 'Gothenburg, Sweden',
    description: [
      'Operated delivery routes in Gothenburg and surrounding areas.',
      'Improved my communincations skills by interacting with customers to address delivery questions and concerns.',
      ],
  },
];
