export const profile = {
  name: 'Yashvi Shah',
  headline: 'AI/ML Engineer shaping research-grade intelligence into enterprise-ready systems.',
  location: 'Gandhinagar, Gujarat, India',
  email: 'syashvi3103@gmail.com',
  phone: '+91 98985 04390',
  linkedin: 'https://www.linkedin.com/in/yashvi-shah-24b8a723b/',
  github: 'https://github.com/yashvishah3103',
  roles: [
    'AI/ML Engineer',
    'AI Research Enthusiast',
    'Software Engineer',
    'Vision-Language AI Developer',
    'Data & ETL Explorer'
  ],
  metrics: [
    { label: 'Inference time reduced', value: '70%' },
    { label: 'TinyML UAV accuracy', value: '93.32%' },
    { label: 'Research works', value: '3' },
    { label: 'B.Tech CGPA', value: '8.01' }
  ]
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export const about = [
  'I am a Computer Science & Engineering student at Nirma University building toward the intersection of applied AI research, production machine learning, and enterprise software systems. My work spans vision-language models, TinyML, vector search, LLM inference optimization, and practical deployments for real-world computer vision pipelines.',
  'At Samajh AI, I worked across model experimentation and deployment: IDEFICS-based image understanding, SigLIP-style visual embeddings, Mistral-driven retrieval, Qdrant vector storage, quantization, SparseGPT-inspired sparsity, batching, and GPU-hosted Flask APIs. I enjoy systems where research ideas have to survive latency, reliability, and deployment constraints.',
  'My next chapter expands that foundation into enterprise engineering at Accenture, with a growing focus on ETL, Informatica, Power BI, analytics, and data engineering. The direction is deliberate: AI depth, software discipline, and enterprise-scale data thinking.'
];

export const experience = [
  {
    company: 'Samajh AI',
    role: 'AI/ML Intern',
    period: 'May 2025 - Jul 2025',
    logo: 'S',
    tone: 'AI Research & Deployment',
    summary:
      'Developed production-minded AI pipelines for computer vision and vision-language workloads across real deployment contexts.',
    bullets: [
      'Built scalable PyTorch and IDEFICS-based pipelines for ANPR, ATCC, ViDS, and site-specific computer vision deployments.',
      'Integrated LLM batch inference and customized model behavior, reducing inference time by 70% through batching, quantization, sparsity, INT8 optimization, fine-tuning, and deployment tuning.',
      'Designed queue-based image inference with real-time status updates, robust logging, and high-throughput batch processing.',
      'Containerized ML services with Docker and deployed a custom IDEFICS API on a GPU-powered Ubuntu server through Flask upload endpoints.',
      'Engineered a two-pipeline architecture for frame embeddings, vector database storage, and LLM-driven semantic retrieval over video events.'
    ],
    tags: ['IDEFICS', 'SigLIP', 'Mistral', 'Qdrant', 'SparseGPT', 'Quantization', 'Docker', 'Flask']
  },
  {
    company: 'Accenture',
    role: 'Incoming Software Engineer / Software Engineer Trainee',
    period: 'Upcoming',
    logo: '>',
    tone: 'Enterprise Systems & Data Engineering',
    summary:
      'Transitioning AI and software engineering foundations into enterprise-scale systems, analytics, ETL, and data workflows.',
    bullets: [
      'Preparing for enterprise software delivery with emphasis on maintainability, integration discipline, and business-critical systems.',
      'Exploring ETL workflows, Informatica, SQL, Power BI, analytics, and data engineering practices.',
      'Positioning AI/ML experience alongside enterprise data systems to build reliable, insight-oriented engineering solutions.'
    ],
    tags: ['ETL', 'Informatica', 'Power BI', 'SQL', 'Analytics', 'Enterprise Systems']
  }
];

export const publications = [
  {
    title: 'TinyML-driven Spam Classification Framework for AVs Communication in 5G-Enabled V2X Networks',
    venue: 'Accepted at IEEE TENSYMP 2025',
    link: 'https://ieeexplore.ieee.org/document/11144956',
    type: 'IEEE Publication',
    abstract:
      'A lightweight spam classification framework for autonomous vehicle communication in 5G-enabled V2X networks, focused on real-time embedded inference, message integrity, and IoBT safety contexts.',
    tags: ['TinyML', 'Embedded ML', '5G V2X', 'IoBT Security', 'Autonomous Vehicles']
  },
  {
    title: 'FinGuard: TinyML-Based Anomaly Detection in Meta Gaming Financial Transactions',
    venue: 'Accepted at IEEE Conference at Christ University',
    link: '#contact',
    type: 'Conference Paper',
    abstract:
      'A privacy-preserving TinyML approach for anomaly detection in digital gaming transactions, emphasizing low-latency on-device inference for fraud patterns, micro-transaction abuse, and payment manipulation.',
    tags: ['Financial Fraud Detection', 'TinyML', 'Digital Payments', 'Anomaly Detection']
  },
  {
    title: 'LakshyA: Lightweight TinyML-based Framework for Securing Battlefield UAV Networks with 5G',
    venue: 'First Position, Track 8: Robotics & Automation, UG Research Symposium 2025',
    link: '#contact',
    type: 'Awarded Research',
    abstract:
      'A compact TinyML framework for classifying benign, DoS, and replay attacks in resource-constrained battlefield UAV networks, achieving 93.32% accuracy with a 50 KB model.',
    tags: ['Edge AI', 'UAV Security', 'TinyML', '5G', 'IoBT']
  }
];

export const projects = [
  {
    title: 'Vision-Language Incident Retrieval Pipeline',
    category: 'AI Systems',
    description:
      'Two-stage architecture that extracts frame embeddings with a vision encoder, stores semantic vectors in Qdrant, and uses an LLM layer for precise incident and event search over video data.',
    stack: ['PyTorch', 'SigLIP', 'Qdrant', 'Mistral', 'Vector Search'],
    links: []
  },
  {
    title: 'IDEFICS Image Analysis API',
    category: 'VLM Deployment',
    description:
      'GPU-hosted Flask service for prompt-based image analysis with upload endpoints, queue-aware inference, logging, and deployment structure for high-throughput computer vision workflows.',
    stack: ['IDEFICS', 'Flask', 'Docker', 'Ubuntu GPU', 'Batch Inference'],
    links: []
  },
  {
    title: 'Sparse Model Optimization Lab',
    category: 'LLM Optimization',
    description:
      'Experimentation track around quantization, INT8 static and dynamic optimization, sparsity, batching, and SparseGPT-inspired compression to reduce inference latency while preserving utility.',
    stack: ['SparseGPT', 'Quantization', 'PyTorch', 'LLMs', 'MLOps'],
    links: []
  },
  {
    title: 'AI Chatbot Web App',
    category: 'LLM Application',
    description:
      'A Streamlit-based AI chatbot using OpenAI models and LangChain prompt templating, with conversation memory, secure API integration, and a polished full-stack interface.',
    stack: ['OpenAI', 'LangChain', 'Python', 'Streamlit', 'CSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/yashvishah3103/AI-Chatbot' }]
  },
  {
    title: 'Bank Management System',
    category: 'Software Engineering',
    description:
      'A modular Java console banking system for account creation, authentication, transfers, balance inquiry, transaction tracking, persistent file storage, and exception-safe workflows.',
    stack: ['Java', 'OOP', 'File Handling', 'Exception Handling'],
    links: [{ label: 'GitHub', href: 'https://github.com/yashvishah3103/Bank-Management-System' }]
  },
  {
    title: 'Enterprise Analytics & ETL Exploration',
    category: 'Data Engineering',
    description:
      'A developing portfolio track focused on SQL-first data workflows, ETL thinking, Informatica concepts, Power BI dashboards, and reliable analytics pipelines for enterprise environments.',
    stack: ['SQL', 'ETL', 'Informatica', 'Power BI', 'Analytics'],
    links: []
  }
];

export const skillGroups = [
  {
    title: 'AI / ML Research',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'Hugging Face', 'Fine-tuning', 'TinyML', 'Embedded ML']
  },
  {
    title: 'Vision, VLMs & LLMs',
    skills: ['Computer Vision', 'NLP', 'LLMs', 'IDEFICS', 'SigLIP', 'Mistral', 'LangChain', 'Prompted Image Analysis']
  },
  {
    title: 'Optimization & Retrieval',
    skills: ['Vector DBs', 'Qdrant', 'Embeddings', 'Quantization', 'SparseGPT', 'INT8 Optimization', 'Batch Inference', 'Inference Acceleration']
  },
  {
    title: 'Software & Data',
    skills: ['Python', 'Java', 'C', 'SQL', 'Flask', 'APIs', 'Docker', 'Git', 'MongoDB', 'Firebase']
  },
  {
    title: 'Enterprise Analytics',
    skills: ['ETL', 'Informatica', 'Power BI', 'Data Analytics', 'MLOps', 'MEAN Stack', 'MERN Stack']
  }
];

export const education = [
  {
    school: 'Institute of Technology, Nirma University',
    degree: 'B.Tech. Computer Science & Engineering',
    period: '2022 - 2026',
    detail: 'CGPA: 8.01 / 10 | Minor: Marketing'
  },
  {
    school: 'Puna International School, Ahmedabad',
    degree: 'CBSE Class 12',
    period: '2022',
    detail: 'Percentage: 93.20 / 100'
  },
  {
    school: 'Delhi Public School Gandhinagar',
    degree: 'CBSE Class 10',
    period: '2020',
    detail: 'Percentage: 91.20 / 100'
  }
];

export const certifications = [
  {
    title: 'Certificate of Appreciation for Academic Excellence',
    issuer: 'Nirma University',
    detail: 'Recognized by Nirma University for strong academic performance during the seventh semester.'
  },
  {
    title: 'First Position in Robotics & Automation Research Track',
    issuer: 'Nirma University and IEEE Student Branch',
    detail: 'Received certification for securing first position for the LakshyA research work at the UG Students Research Symposium on Recent Trends in Engineering 2025.'
  },
  {
    title: 'Java Course Completion Certificate',
    issuer: 'Royal Technosoft P. Ltd',
    detail: 'Core Java, OOP, exception handling, multithreading, file I/O, and hands-on application development.'
  }
];
