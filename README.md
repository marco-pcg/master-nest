🐇 NestJS Microservices Monorepo (RabbitMQ)

A production-style NestJS monorepo demonstrating microservices communication via RabbitMQ, built with clean architecture, shared contracts, Dockerized infrastructure, and end-to-end testing.

This repository is designed to be:

🚀 Scalable

🧠 Easy to reason about

🧪 Testable end-to-end

🔀 Ready for a future gRPC branch

📐 Architecture Overview
HTTP Client
    ↓
API Gateway (NestJS)
    ↓  (RabbitMQ)
Users Service
    ↓
RabbitMQ
    ↑
API Gateway
    ↓
HTTP Response


Key characteristics:

API Gateway exposes HTTP endpoints

Domain services communicate only via messages

RabbitMQ acts as the transport layer

Shared contracts avoid magic strings

No tight coupling between services

📁 Repository Structure
.
├── apps/
│   ├── api-gateway/
│   ├── users-service/
│   └── notifications-service/
│
├── libs/
│   ├── contracts/        # Message patterns & shared constants
│   └── rabbitmq/         # Shared RabbitMQ client module
│
├── docker-compose.yml    # RabbitMQ infrastructure
├── tsconfig.base.json
├── nest-cli.json
├── jest.config.ts
└── README.md

🧰 Tech Stack

Node.js

NestJS

RabbitMQ

Docker & Docker Compose

TypeScript (legacy decorators)

Jest + Supertest (E2E)

🐇 RabbitMQ

RabbitMQ is provided via Docker.

Management UI

http://localhost:15672


Credentials

username: admin
password: admin

⚙️ Prerequisites

Make sure you have:

Node.js ≥ 18

Docker + Docker Compose

npm

Nest CLI (recommended)

npm install -g @nestjs/cli

🚀 Getting Started
1️⃣ Install dependencies
npm install

2️⃣ Start RabbitMQ
docker compose up -d

3️⃣ Start services (separate terminals)
npm run start:users
npm run start:notifications
npm run start:gateway

4️⃣ Test the API
POST http://localhost:3000/users
GET  http://localhost:3000/users


Example payload:

{
  "name": "Alice"
}

🧪 End-to-End Tests

This project includes real E2E tests:

No mocks

Real RabbitMQ

Real services

Run E2E tests

Make sure RabbitMQ and the Users Service are running:

docker compose up -d
npm run start:users


Then:

npm run test:e2e

🧠 Design Decisions
Why RabbitMQ?

Async, message-based communication

Decoupled services

Easy to replace with gRPC later

Why shared contracts?

Prevents string mismatches

Enables future contract testing

Transport-agnostic (RMQ → gRPC)

Why monorepo?

Easier refactoring

Shared tooling

Clear service boundaries

⚠️ TypeScript Decorators Notice

NestJS currently relies on legacy decorators.

This project uses TypeScript ≥ 5 with:

"experimentalDecorators": true,
"emitDecoratorMetadata": true


Do not enable the new ECMAScript decorators proposal.

🔀 Branch Strategy

main → RabbitMQ implementation

grpc → gRPC transport (planned)

Both branches share:

Domain logic

Message contracts

Test philosophy

🌱 Roadmap

Planned improvements:

gRPC transport branch

Testcontainers for E2E

CQRS + event-driven flows

Dockerfiles per service

CI pipeline (GitHub Actions)

Contract testing

👤 Author

Built as a learning-to-production-grade microservices reference.

If you’re studying:

Backend architecture

NestJS at scale

Message brokers

Clean monorepos

…this repo is meant to grow with you.

📜 License

MIT

If you want next:

🐳 Dockerfiles per service

🔀 gRPC branch

🧪 Testcontainers

🧠 CQRS / Events

🛡 Auth service

just tell me — this repo is already senior-level.