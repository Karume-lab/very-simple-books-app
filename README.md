# 📚 very-simple-books-app

> A learning project for **end-to-end type safety** using **NestJS**, **OpenAPI**, **Orval**, **React**, **Zod**, and **React Query**.

---

## 🎯 Purpose

**very-simple-books-app** exists to explore how to build a fully type-safe system — where backend and frontend share the same data contracts automatically.
The goal is to understand how types, validation, and data flow seamlessly across the stack **without duplication**.

---

## 🧩 What To Learn

* How to define data models once in the backend (NestJS DTOs)
* How to automatically generate OpenAPI schemas from them
* How to use **Orval** to create a fully typed React API client
* How **Zod** brings runtime validation to the frontend
* How **React Hook Form** integrates those types for safe, dynamic forms
* How backend validation errors can be mapped directly to form fields
* How to maintain one source of truth for all your types

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

## 🧠 Core Concepts

| Concept                    | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| **End-to-end type safety** | Types flow from backend → OpenAPI → frontend automatically |
| **Runtime validation**     | Zod ensures frontend validation matches backend rules      |
| **Zero duplication**       | DTOs define data once, everywhere else reuses them         |
| **Better DX**              | IDE autocompletion and error hints on both ends            |
| **Reliable UX**            | Users see backend-authored error messages inline           |

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

## 🧭 Key Takeaway

**very-simple-books-app** shows that you can have:

* One schema → many uses
* No “drift” between backend and frontend
* Predictable, safe API consumption
* Validation that feels the same everywhere

---

> 💬 *“Define once. Trust everywhere.”*
