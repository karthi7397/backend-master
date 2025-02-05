export const Questions = {
  questions: [
    // Advanced Databases - Indexing
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "A database index improves query performance by reducing the need for a full __ scan.",
      blanks: ["table"],
      note: "Indexing"
    },
    // Advanced Databases - Query Optimization
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following can improve SQL query performance?",
      options: ["Using indexes", "Reducing joins", "Using SELECT *", "Using prepared statements"],
      correctAnswers: ["Using indexes", "Reducing joins", "Using prepared statements"],
      multipleAnswers: true,
      note: "Query Optimization"
    },
    // Advanced Caching - Strategies
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In a caching strategy, the technique where data is updated only when requested is called __.",
      blanks: ["lazy loading"],
      note: "Caching Strategies"
    },
    // Advanced Caching - Eviction Policies
    {
      id: 4,
      type: "multiple-choice",
      question: "Which caching eviction policy removes the least recently used items first?",
      options: ["FIFO", "LFU", "LRU", "Random"],
      correctAnswers: ["LRU"],
      multipleAnswers: false,
      note: "Caching"
    },
    // Distributed Systems - CAP Theorem
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "According to the CAP theorem, a distributed system can guarantee at most two of Consistency, Availability, and __.",
      blanks: ["Partition Tolerance"],
      note: "CAP Theorem"
    },
    // Distributed Systems - Consensus Algorithms
    {
      id: 6,
      type: "multiple-choice",
      question: "Which consensus algorithm is used in Raft?",
      options: ["Paxos", "Gossip", "Two-phase commit", "Leader election"],
      correctAnswers: ["Leader election"],
      multipleAnswers: false,
      note: "Consensus Algorithms"
    },
    // Scalability - Vertical vs Horizontal
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "Adding more machines to handle increased load is called __ scaling.",
      blanks: ["horizontal"],
      note: "Scalability"
    },
    // Security - OAuth 2.0
    {
      id: 8,
      type: "multiple-choice",
      question: "Which OAuth 2.0 flow is recommended for web applications?",
      options: ["Client Credentials", "Authorization Code", "Implicit", "Device Flow"],
      correctAnswers: ["Authorization Code"],
      multipleAnswers: false,
      note: "Security"
    },
    // Security - Hashing Algorithms
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "For securely storing passwords, __ is recommended instead of MD5.",
      blanks: ["bcrypt", "PBKDF2", "Argon2"],
      note: "Security"
    },
    // API Rate Limiting
    {
      id: 10,
      type: "multiple-choice",
      question: "Which technique is used for API rate limiting?",
      options: ["Circuit Breaker", "Leaky Bucket", "Token Bucket", "Sticky Sessions"],
      correctAnswers: ["Leaky Bucket", "Token Bucket"],
      multipleAnswers: true,
      note: "Rate Limiting"
    },
    // Microservices - Service Discovery
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "In microservices, services find each other dynamically using __ discovery.",
      blanks: ["service"],
      note: "Microservices"
    },
    // Event-driven Architecture
    {
      id: 12,
      type: "multiple-choice",
      question: "Which messaging pattern is used in event-driven architecture?",
      options: ["Request-response", "Polling", "Pub/Sub", "WebSockets"],
      correctAnswers: ["Pub/Sub"],
      multipleAnswers: false,
      note: "Event-Driven Systems"
    },
    // Containerization - Kubernetes
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "In Kubernetes, a __ is the smallest deployable unit.",
      blanks: ["pod"],
      note: "Kubernetes"
    },
    // CI/CD - Pipelines
    {
      id: 14,
      type: "multiple-choice",
      question: "Which step is NOT typically part of a CI/CD pipeline?",
      options: ["Code compilation", "Database migration", "Manual testing", "Automated deployment"],
      correctAnswers: ["Manual testing"],
      multipleAnswers: false,
      note: "CI/CD"
    },
    // Message Queues - Kafka vs RabbitMQ
    {
      id: 15,
      type: "matching",
      question: "Match the message queues with their characteristics",
      leftItems: ["Kafka", "RabbitMQ", "SQS"],
      rightItems: ["Distributed log-based system", "Message broker for microservices", "AWS managed queue"],
      correctMatches: {
        Kafka: "Distributed log-based system",
        RabbitMQ: "Message broker for microservices",
        SQS: "AWS managed queue"
      },
      note: "Message Queues"
    }
  ]
};
