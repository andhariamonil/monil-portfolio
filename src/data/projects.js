const projects = [
  {
    title: 'KnowledgeAI – Internal Knowledge Assistant',
    description:
      'AI-powered internal knowledge assistant SaaS platform that enables organizations to query their private documents using natural language. Built with hybrid RAG architecture combining semantic vector search and keyword search with role-based access control.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'pgvector', 'Groq API', 'JWT'],
    features: [
      'Hybrid RAG pipeline with semantic and keyword search',
      'Role-based access control (Admin, Mentor, Trainee)',
      'Document ingestion — PDF, DOCX, MD, CSV, TXT',
      'AI-powered Q&A with source attribution',
      'Chat session history with pgvector indexing',
    ],
    github: 'https://github.com/andhariamonil/KnowledgeAi.git',
    live: '',
    source: 'github',
    images: [
  '/UI/KnowledgeAi/login.png',
  '/UI/KnowledgeAi/signup.png',
  '/UI/KnowledgeAi/adminDashboard.png',
  '/UI/KnowledgeAi/adminDocument.png',
  '/UI/KnowledgeAi/adminPanel.png',
  '/UI/KnowledgeAi/traineeDashboard.png',
  '/UI/KnowledgeAi/traineeDocument.png',
  '/UI/KnowledgeAi/aiAssistant.png'
],
  },
  {
    title: 'NoteMate – Smart Note & Task Manager',
    description:
      'AI-powered note-taking application with semantic search and intelligent task extraction using RAG architecture.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Pgvector', 'OpenAI API'],
    features: [
      'Semantic search',
      'Intelligent task extraction',
      'RAG architecture',
      'AI-powered notes',
    ],
    github: 'https://github.com/andhariamonil/NoteMate-Backend',
    live: '',
    source: 'local',
    images: [],
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
    images: [],
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
    images: [],
  },
  {
    title: 'Face Mask Detection using Deep Learning',
    description:
      'Deep learning model that detects whether people are wearing masks in images.',
    technologies: ['Python', 'CNN', 'LSTM'],
    features: ['Mask detection', 'Image processing', 'Deep learning'],
    github: 'https://github.com/andhariamonil/Face_mask_detection',
    live: '',
    source: 'local',
    images: [],
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
    images: [],
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
    images: [],
  },
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
    images: [],
  },
  {
    title: 'QuickTube – AI YouTube Assistant',
    description:
      'AI-powered YouTube learning assistant that uses NLP, semantic search, and Retrieval-Augmented Generation (RAG) to answer questions and summarize video transcripts.',
    technologies: ['Node.js', 'Huggingface API', 'Claude API', 'RAG'],
    features: [
      'Semantic search over YouTube transcripts',
      'Question answering with RAG',
      'Summaries of long-form video content',
    ],
    github: 'https://github.com/andhariamonil/Quicktube',
    live: '',
    source: 'github',
    images: [],
  },
];

export default projects;