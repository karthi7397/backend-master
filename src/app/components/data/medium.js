export const Questions = {
  questions: [
    // API Design - REST vs GraphQL
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "Unlike REST, __ allows clients to specify exactly the data they need.",
      blanks: ["GraphQL"],
      note: "API Design"
    },
    // API Status Codes
    {
      id: 2,
      type: "multiple-choice",
      question: "Which HTTP status code indicates a request was malformed?",
      options: ["200", "400", "401", "500"],
      correctAnswers: ["400"],
      multipleAnswers: false,
      note: "HTTP Status Codes"
    },
    // Authentication - JWT
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "JWT stands for __ Web Token.",
      blanks: ["JSON"],
      note: "Authentication"
    },
    // Authentication - OAuth
    {
      id: 4,
      type: "multiple-choice",
      question: "Which OAuth 2.0 flow is recommended for server-to-server authentication?",
      options: ["Authorization Code", "Client Credentials", "Implicit Flow", "Device Code"],
      correctAnswers: ["Client Credentials"],
      multipleAnswers: false,
      note: "OAuth"
    },
    // Databases - ACID Properties
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "ACID stands for Atomicity, Consistency, __, and Durability.",
      blanks: ["Isolation"],
      note: "Database Transactions"
    },
    // Databases - Joins
    {
      id: 6,
      type: "multiple-choice",
      question: "Which SQL join returns only matching rows between two tables?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
      correctAnswers: ["INNER JOIN"],
      multipleAnswers: false,
      note: "SQL Joins"
    },
    // Databases - NoSQL
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "A NoSQL database that stores data as key-value pairs is called a __ store.",
      blanks: ["key-value"],
      note: "NoSQL Databases"
    },
    // Caching - Cache Invalidation
    {
      id: 8,
      type: "multiple-choice",
      question: "Which of the following is NOT a cache invalidation strategy?",
      options: ["Write-through", "Write-back", "Cache aside", "LRU"],
      correctAnswers: ["LRU"],
      multipleAnswers: false,
      note: "Caching"
    },
    // Caching - CDN
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "A __ is used to cache static assets closer to users to improve load times.",
      blanks: ["CDN"],
      note: "Caching & CDNs"
    },
    // Load Balancing - Reverse Proxy
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "A __ proxy sits between clients and backend servers to distribute traffic.",
      blanks: ["reverse"],
      note: "Load Balancing"
    },
    // Microservices - API Gateway
    {
      id: 11,
      type: "multiple-choice",
      question: "Which component in a microservices architecture manages API requests centrally?",
      options: ["API Gateway", "Service Mesh", "Load Balancer", "Reverse Proxy"],
      correctAnswers: ["API Gateway"],
      multipleAnswers: false,
      note: "Microservices"
    },
    // CI/CD - Deployment Strategies
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "Deploying a new version of an app alongside the old version is called a __ deployment.",
      blanks: ["blue-green"],
      note: "CI/CD"
    },
    // Distributed Systems - Eventual Consistency
    {
      id: 13,
      type: "multiple-choice",
      question: "Which database system prioritizes availability over consistency?",
      options: ["SQL", "NoSQL", "ACID-compliant DB", "GraphDB"],
      correctAnswers: ["NoSQL"],
      multipleAnswers: false,
      note: "Distributed Systems"
    },
    // Security - CSRF
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "A __ token is used to prevent CSRF attacks.",
      blanks: ["CSRF"],
      note: "Security"
    },
    // Message Queues - Pub/Sub
    {
      id: 15,
      type: "matching",
      question: "Match the message queue systems with their message patterns.",
      leftItems: ["RabbitMQ", "Kafka", "AWS SQS"],
      rightItems: ["Distributed log-based system", "Message broker for microservices", "AWS managed queue"],
      correctMatches: {
        RabbitMQ: "Message broker for microservices",
        Kafka: "Distributed log-based system",
        AWSSQS: "AWS managed queue"
      },
      note: "Message Queues"
    }
  ]
};
