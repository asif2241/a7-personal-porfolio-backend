# PERSONAL PORTFOLIO (BACKEND)

#### A clean and modern web application to showcase my projects, skills, blogs, and achievements. This portfolio is designed to highlight my professional journey, allow easy blog management through an admin dashboard, and serve as a central hub for all my developer activities.

## Core Features

- **🔐 Secure Authentication:** Implements a **JWT** _(JSON Web Token)_ based system for secure user login and session management, with password hashing using bcrypt. (for admin use only)

- **📝 Blog Management System:**Fully functional blog section with create, update, and delete capabilities, allowing seamless publishing of technical content and personal stories.

-**💼 Project Showcase:** Highlights key personal projects with thumbnails, live demo links, code repositories, and feature descriptions to demonstrate practical skills.

--**🛡️ Robust Data Validation:** Utilizes Zod to enforce strict data validation schemas for all incoming requests, particularly in the Project and Parcel modules. This ensures data integrity and type safety from the router level, preventing malformed data before it reaches the business logic.

## ⚙️ **Technologies Used:**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Zod
- **Authentication**: JWT, Role-based auth
- **Password Hashing**: Bcyptjs
- **Others**: TypeScript, Dotenv, ESLint, Postman, Cors, Cookie-parser

### 🔐 **ADMIN LOGIN Related API**

| **Method** | **Endpoints**  | **Uses**                                     | **Access**                      |
| ---------- | -------------- | -------------------------------------------- | ------------------------------- |
| _POST_     | /login         | For Admin Login                              | Public (with admin credentials) |
| _POST_     | /refresh-token | Create a new Access Token With Refresh Token | ADMIN                           |

---

### 🔐 **Project Showcase Related API**

| **Method** | **Endpoints**                | **Uses**                         | **Access** |
| ---------- | ---------------------------- | -------------------------------- | ---------- |
| _POST_     | /projects/add-project        | For Adding a New Project into DB | ADMIN      |
| _PATCH_    | /projects/update-project/:id | Update a Existing Project        | ADMIN      |
| _GET_      | /projects                    | Retrives All Projects from DB    | public     |
| _DELETE_   | /projects/delete/:id         | Delete a Projects for DB         | ADMIN      |

---

### 🔐 **Blogs Related API**

| **Method** | **Endpoints**      | **Uses**                        | **Access** |
| ---------- | ------------------ | ------------------------------- | ---------- |
| _POST_     | /blogs/create-blog | For Adding a New Blog           | ADMIN      |
| _PATCH_    | /blogs/update/:id  | Update a Existing Blog          | ADMIN      |
| _GET_      | /blogs             | Retrives All Blogs for DB       | public     |
| _GET_      | /blogs/:slug       | Retrives a Blog by slug from DB | public     |
| _DELETE_   | /blogs/:id         | Delete a Blog from DB           | ADMIN      |

---
