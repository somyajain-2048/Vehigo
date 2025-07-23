# VehiGo Backend

Car rental platform backend API

## Project Structure

```
vehigo-backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   ├── utils/          # Utility functions
│   └── services/       # Business logic
├── tests/
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/           # End-to-end tests
├── uploads/
│   ├── cars/          # Car images
│   ├── profiles/      # Profile pictures
│   └── documents/     # User documents
├── logs/              # Application logs
├── docs/              # Documentation
├── .env               # Environment variables
├── .gitignore         # Git ignore rules
├── package.json       # Dependencies
└── server.js          # Entry point
```

## Getting Started

1. Install dependencies
2. Set up environment variables
3. Configure database
4. Run the server

## API Endpoints

Based on your frontend, this backend will support:
- Authentication (login, signup, logout)
- Car management (list, details, registration)
- User management (profile, verification)
- Rental management (booking, tracking)
