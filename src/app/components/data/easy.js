export const Questions = {
  questions: [
    // Backend Basics - Server
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "A backend server handles requests from the __.",
      blanks: ["client"],
      note: "Server Basics"
    },
    // Backend Basics - APIs
    {
      id: 2,
      type: "multiple-choice",
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Automated Program Integration", "Advanced Processing Interface", "Applied Programming Internet"],
      correctAnswers: ["Application Programming Interface"],
      multipleAnswers: false,
      note: "APIs"
    },
    // Backend Basics - HTTP Methods
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The HTTP method used to retrieve data from a server is __.",
      blanks: ["GET"],
      note: "HTTP Methods"
    },
    // Backend Basics - Databases
    {
      id: 4,
      type: "multiple-choice",
      question: "Which of these is a relational database?",
      options: ["MongoDB", "Redis", "MySQL", "Elasticsearch"],
      correctAnswers: ["MySQL"],
      multipleAnswers: false,
      note: "Databases"
    },
    // Backend Basics - Authentication
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "To verify user identity, backend applications use __ authentication.",
      blanks: ["JWT", "token-based", "OAuth"],
      note: "Authentication"
    },
    // Backend Basics - RESTful APIs
    {
      id: 6,
      type: "multiple-choice",
      question: "Which status code represents a successful request?",
      options: ["200", "404", "500", "403"],
      correctAnswers: ["200"],
      multipleAnswers: false,
      note: "RESTful APIs"
    },
    // Backend Basics - Caching
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "The technique used to store frequently accessed data temporarily is called __.",
      blanks: ["caching"],
      note: "Caching"
    },
    // Backend Basics - Sessions
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "In web applications, user login states are often maintained using __.",
      blanks: ["sessions", "cookies"],
      note: "Sessions"
    },
    // Backend Basics - Middleware
    {
      id: 9,
      type: "multiple-choice",
      question: "In Express.js, middleware functions are used to:",
      options: ["Define API endpoints", "Process requests and responses", "Connect to databases", "Render HTML pages"],
      correctAnswers: ["Process requests and responses"],
      multipleAnswers: false,
      note: "Middleware"
    },
    // Backend Basics - Security
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "To prevent SQL injection, use __ statements.",
      blanks: ["prepared"],
      note: "Security"
    },
    // Backend Basics - WebSockets
    {
      id: 11,
      type: "multiple-choice",
      question: "Which protocol enables real-time bidirectional communication?",
      options: ["HTTP", "FTP", "WebSockets", "SMTP"],
      correctAnswers: ["WebSockets"],
      multipleAnswers: false,
      note: "WebSockets"
    },
    // Backend Basics - Load Balancing
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "Distributing traffic across multiple servers is known as __ balancing.",
      blanks: ["load"],
      note: "Load Balancing"
    },
    // Backend Basics - Microservices
    {
      id: 13,
      type: "multiple-choice",
      question: "Which of the following describes microservices architecture?",
      options: ["A single large application", "Multiple independent services", "A monolithic structure", "A frontend framework"],
      correctAnswers: ["Multiple independent services"],
      multipleAnswers: false,
      note: "Microservices"
    },
    // Backend Basics - Logging
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "Backend applications use __ to track system events and errors.",
      blanks: ["logging"],
      note: "Logging"
    },
    // Backend Basics - Message Queues
    {
      id: 15,
      type: "matching",
      question: "Match the message queue systems with their providers",
      leftItems: ["RabbitMQ", "Kafka", "SQS"],
      rightItems: ["AWS", "Open-source distributed system", "Message broker for microservices"],
      correctMatches: {
        RabbitMQ: "Message broker for microservices",
        Kafka: "Open-source distributed system",
        SQS: "AWS"
      },
      note: "Message Queues"
    }
  ]
};
