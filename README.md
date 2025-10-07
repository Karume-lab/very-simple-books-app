# 📚 very-simple-books-app

> A learning project for **end-to-end type safety** using **NestJS**, **OpenAPI**, **Orval**, **React**, **Zod**, and **React Query**.

---

## 🎯 Purpose

**very-simple-books-app** exists to explore how to build a fully type-safe system — where backend and frontend share the same data contracts automatically.
The goal is to understand how types, validation, and data flow seamlessly across the stack **without duplication**.

---

## 🔄 The Type Flow

```
NestJS DTOs (class-validator)
        ↓
   Swagger / OpenAPI spec
        ↓
     Orval code generation
        ↓
 React Query hooks + Zod schemas
        ↓
 React Hook Form + runtime validation
```

✅ **Single source of truth** — backend types
✅ **Automatic sync** — OpenAPI + Orval
✅ **Compile-time + runtime safety**
✅ **Unified validation experience**

---

## 🪄 Stack Overview

| Layer          | Tool                  | Role                          |
| -------------- | --------------------- | ----------------------------- |
| **Backend**    | NestJS                | API + validation              |
| **Schema**     | OpenAPI               | Shared contract               |
| **Codegen**    | Orval                 | Typed React client + Zod      |
| **Validation** | class-validator + Zod | Backend & frontend validation |
| **Frontend**   | React + React Query   | Data fetching and UI          |
| **Forms**      | React Hook Form       | Type-safe user input          |

---

## ⚙️ Repo Setup

Clone the repo and install dependencies for both backend and frontend:

```bash
# Clone repo
git clone https://github.com/Karume-lab/very-simple-books-app
cd very-simple-books-app

# Backend
cd backend
pnpm install

# Frontend
cd ../frontend
pnpm install
```

---

## 🛠 Prerequisites

- Node.js >= 20
- Git

---

## 🔄 Generate Types and Hooks

Orval is configured to fetch the OpenAPI JSON directly from the running backend, so you **don’t need to manually export a Swagger file**.

```bash
# Start frontend dev server and generate hooks/types
cd frontend
pnpm run codegen

```

> The generated types and hooks are placed in `frontend/src/__generated__/api/`.
> Orval will automatically fetch the latest schema from the backend URL configured in `orval.config.ts`.

---

> 💬 _“Define once. Trust everywhere.”_
