const projects = [
  {
    title: 'NoteMate – Smart Note & Task Manager',
    description:
      'AI-powered note-taking application with semantic search and intelligent task extraction using RAG architecture.',
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Pgvector", "OpenAI API"],
    features: [
      'Semantic search',
      'Intelligent task extraction',
      'RAG architecture',
      'AI-powered notes',
    ],
    github: 'https://github.com/andhariamonil/NoteMate-Backend',
    live: '',
    source: 'local',
  },
  {
    title: 'Architect Portfolio Website',
    description:
      'Modern and responsive architecture portfolio website built with React, featuring animated sections for showcasing architectural projects, services, and team information.',
    technologies: ['React', 'JavaScript', 'CSS'],
    features: [
      'Animated landing page for architects',
      'Responsive project and services sections',
      'Clean, professional portfolio layout',
    ],
    github: 'https://github.com/andhariamonil/architect-portfolio-website',
    live: '',
    source: 'github',
  },
  {
    title: 'Accounting Web App',
    description:
      'Flask-based accounting web application to manage accounts, record transactions, track debts, and generate simple financial reports.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS'],
    features: [
      'Account and transaction management',
      'Debt tracking',
      'Basic reporting views',
    ],
    github: 'https://github.com/andhariamonil/Accounting-app',
    live: '',
    source: 'github',
  },
  // {
  //   title: 'Transaction & Account Management System',
  //   description:
  //     'Application to manage financial transactions and accounts with real-time tracking features.',
  //   technologies: ['Python', 'SQL', 'HTML', 'CSS'],
  //   features: [
  //     'Financial transaction management',
  //     'Account tracking',
  //     'Real-time features',
  //   ],
  //   github: 'https://github.com/andhariamonil/Accounting-app',
  //   live: '',
  //   source: 'local',
  // },
  {
    title: 'Face Mask Detection using Deep Learning',
    description:
      'Deep learning model that detects whether people are wearing masks in images.',
    technologies: ['Python', 'CNN', 'LSTM'],
    features: ['Mask detection', 'Image processing', 'Deep learning'],
    github: 'https://github.com/andhariamonil/Face_mask_detection',
    live: '',
    source: 'local',
  },
  {
    title: 'ML-Based EV Sales Prediction',
    description:
      'Machine learning application that predicts electric vehicle sales using regression models.',
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Linear Regression',
      'Random Forest',
    ],
    features: ['EV sales prediction', 'Regression models', 'Data analysis'],
    github: '',
    live: '',
    source: 'local',
  },
  {
    title: 'Social Media Analytics Dashboard',
    description:
      'Interactive dashboard for analyzing social media engagement metrics.',
    technologies: ['Power BI'],
    features: [
      'Social media analytics',
      'Interactive dashboard',
      'Engagement metrics',
    ],
    github: '',
    live: '',
    source: 'local',
  },
  // {
  //   title: "NoteMate – Frontend",
  //   description:
  //     "React-based frontend for the NoteMate AI notes application with interactive UI for note management, semantic search, and AI chatbot integration.",
  //   technologies: ["React", "JavaScript", "CSS"],
  //   features: [
  //     "Modern dashboard for managing notes",
  //     "Semantic search interactions",
  //     "Chat-style AI assistant UI"
  //   ],
  //   github: "https://github.com/andhariamonil/NoteMate-Frontend",
  //   live: "",
  //   source: "github"
  // },
  // {
  //   title: "NoteMate – Backend",
  //   description:
  //     "Node.js and Express backend for NoteMate that implements Retrieval-Augmented Generation (RAG) using OpenAI embeddings and pgvector for semantic search.",
  //   technologies: ["Node.js", "Express.js", "PostgreSQL", "Pgvector", "OpenAI API"],
  //   features: [
  //     "RAG pipeline for semantic note retrieval",
  //     "Vector search with pgvector",
  //     "RESTful APIs for notes and chat"
  //   ],
  //   github: "https://github.com/andhariamonil/NoteMate-Backend",
  //   live: "",
  //   source: "github"
  // },
  {
    title: 'Sentiment Analysis on Tweets',
    description:
      'NLP project for sentiment analysis of tweets using text preprocessing, feature extraction (TF-IDF / Bag-of-Words), and machine learning models.',
    technologies: ['Python', 'NLP', 'Scikit-learn'],
    features: [
      'Tweet text preprocessing pipeline',
      'Feature extraction with TF-IDF/BoW',
      'Models like Logistic Regression and Naive Bayes',
    ],
    github: 'https://github.com/andhariamonil/Sentiment-analysis-Tweets',
    live: '',
    source: 'github',
  },
  ,
  {
    title: 'QuickTube – AI YouTube Assistant',
    description:
      'AI-powered YouTube learning assistant that uses NLP, semantic search, and Retrieval-Augmented Generation (RAG) to answer questions and summarize video transcripts.',
    technologies: ['node.js', 'Huggingface api','claude api', 'RAG'],
    features: [
      'Semantic search over YouTube transcripts',
      'Question answering with RAG',
      'Summaries of long-form video content',
    ],
    github: 'https://github.com/andhariamonil/Quicktube',
    live: '',
    source: 'github',
  },
];

export default projects;
