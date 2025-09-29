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

## **FOLDER STRUCTURE:**

.
├── .env
├── .gitignore
├── .eslintrc.cjs
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── src
├── app
│ ├── errorHelpers
│ │ ├── AppError.ts
│ │ ├── handleCastError.ts
│ │ ├── handleDuplicateError.ts
│ │ ├── handleValidationError.ts
│ │ └── handleZodError.ts
│ ├── interfaces
│ │ ├── error.types.ts
│ │ └── index.d.ts
│ ├── middlewares
│ │ ├── checkAuth.ts
│ │ ├── globalErrorHandler.ts
│ │ ├── notFound.ts
│ │ └── validateRequest.ts
│ ├── modules
│ │ ├── admin
│ │ │ ├── admin.controller.ts
│ │ │ ├── admin.interface.ts
│ │ │ ├── admin.model.ts
│ │ │ ├── admin.route.ts
│ │ │ └── admin.service.ts
│ │ ├── blogs
│ │ │ ├── blogs.constant.ts
│ │ │ ├── blogs.controller.ts
│ │ │ ├── blogs.interface.ts
│ │ │ ├── blogs.model.ts
│ │ │ ├── blogs.routes.ts
│ │ │ ├── blogs.service.ts
│ │ │ └── blogs.validation.ts
│ │ └── project
│ │ ├── project.controller.ts
│ │ ├── project.interface.ts
│ │ ├── project.model.ts
│ │ ├── project.route.ts
│ │ ├── project.service.ts
│ │ └── project.validation.ts
│ └── routes
│ └── index.ts
├── server.ts
└── utils
├── catchAsync.ts
├── generateSlug.ts
├── jwt.ts
├── seedSuperAdmin.ts
├── sendResponse.ts
└── setCookie.ts
