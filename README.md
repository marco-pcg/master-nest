# 🐇 NestJS Microservices Monorepo (RabbitMQ)

A **production-style NestJS monorepo** demonstrating **microservices communication via RabbitMQ**, built with clean architecture, shared contracts, Dockerized infrastructure, and end-to-end testing.

This repository is designed to be:
- 🚀 Scalable
- 🧠 Easy to reason about
- 🧪 Testable end-to-end
- 🔀 Ready for a future **gRPC branch**

---

## 📐 Architecture Overview

HTTP Client
↓
API Gateway (NestJS)
↓ (RabbitMQ)
Users Service
↓
RabbitMQ
↑
API Gateway
↓
HTTP Response

Key characteristics:
- API Gateway exposes HTTP endpoints
- Domain services communicate **only via messages**
- RabbitMQ acts as the transport layer
- Shared contracts avoid magic strings
- No tight coupling between services

---

## 📁 Repository Structure

.
├── apps/
│ ├── api-gateway/
│ ├── users-service/
│ └── notifications-service/
│
├── libs/
│ ├── contracts/ # Message patterns & shared constants
│ └── rabbitmq/ # Shared RabbitMQ client module
│
├── docker-compose.yml # RabbitMQ infrastructure
├── tsconfig.base.json
├── nest-cli.json
├── jest.config.ts
└── README.md


---

## 🧰 Tech Stack

- **Node.js**
- **NestJS**
- **RabbitMQ**
- **Docker & Docker Compose**
- **TypeScript (legacy decorators)**
- **Jest + Supertest (E2E)**

---

## 🐇 RabbitMQ

RabbitMQ is provided via Docker.

**Management UI**
http://localhost:15672


**Credentials**

username: admin
password: admin


---

## ⚙️ Prerequisites

Make sure you have:

- Node.js ≥ 18
- Docker + Docker Compose
- npm
- Nest CLI (recommended)

```bash
npm install -g @nestjs/cli

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