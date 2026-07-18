type Project = {
  name: string
  description: string
  tech: string
  link: string
  // Path to a screenshot/gif/video in /public (e.g. '/projects/search-engine.jpg').
  // Leave '' to show a labeled placeholder. .mp4/.webm render as autoplay video.
  src: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Travel = {
  place: string
  // Path to a photo in /public (e.g. '/travel/tokyo.jpg'). Leave '' for a placeholder.
  src: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'World Cup RAG Pipeline',
    description:
      'RAG Pipeline to help Gemini 2.5 Flash answer World Cup trivia questions correctly (15-20 second startup time).',
    tech: 'Python · ChromaDB · SentenceTransformers · Gemini 2.5 Flash · Gradio',
    link: 'https://world-cup-rag-pipeline-215930731805.us-central1.run.app/?',
    src: '/projects/wc_rag.png',
    id: 'project-rag',
  },
  {
    name: 'UEFA Euro 2024 Predictor',
    description:
      'Machine Learning model to predict the entire Euro 2024 tournament.',
    tech: 'Python · scikit-learn · pandas · MySQL',
    link: 'https://github.com/ayannair/euros_2024_predictor',
    src: '/projects/EURO2024.jpg',
    id: 'project-search',
  },
  {
    name: 'M-Gym (WIP)',
    description:
      'Real-time and predictive crowd tracking for UMich recreation centers.',
    tech: 'Node.js · Express.js · React.js · PostgreSQL · Redis · AWS · Docker',
    link: 'https://github.com/amalrajn/m-gym',
    src: '/projects/hadley.jpg',
    id: 'project-pager',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Consumers Energy',
    title: 'Software Engineering Intern',
    start: 'May 2026',
    end: 'Present',
    link: 'https://www.consumersenergy.com/',
    id: 'work1',
  },
  {
    company: 'Consumers Energy',
    title: 'Software Engineering Intern',
    start: 'May 2025',
    end: 'Aug 2025',
    link: 'https://www.consumersenergy.com/',
    id: 'work2',
  },
  {
    company: 'Michigan AI Lab',
    title: 'Machine Learning Intern',
    start: 'May 2024',
    end: 'Aug 2024',
    link: 'https://ai.engin.umich.edu/',
    id: 'work3',
  },
]

export const TRAVELS: Travel[] = [
  {
    place: 'Tottenham Hotspur Stadium',
    src: '/travel/thfc_stad.jpeg',
    id: 'travel-1',
  },
  {
    place: 'Horseshoe Bend',
    src: '/travel/h_bend.jpeg',
    id: 'travel-2',
  },
  {
    place: 'Swiss Alps',
    src: '/travel/swiss_alps.jpeg',
    id: 'travel-3',
  },
  {
    place: 'Cologne Cathedral',
    src: '/travel/koln_cathedral.jpeg',
    id: 'travel-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/amalrajn',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nicholas-amalraj',
  },
]

export const EMAIL = 'amalrajn@umich.edu'
