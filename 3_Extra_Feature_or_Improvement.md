## Phase 3 – Extra Feature or Improvements

### 🎯 Chosen Use Case or Feature to Improve

In this phase, I focused on **improving the user interface and developer experience** by **styling the application using Tailwind CSS** and **configuring the project with Vite**.  
I selected this improvement because I wanted the application to offer a **more modern, responsive, and visually appealing** experience for users, while also ensuring the development workflow is **fast and efficient** for future maintenance and updates.

---

### 🔍 Original Definition

In **Phase 1 - Definition and Planning**, I specified that after implementing the basic functionalities, I would work on **enhancing the user experience** through **styling** and **performance improvements**.  
[Phase 1 - Definition and Planning](1_Definition_and_Planning.md)

---

### 🔄 Implementation

#### What technical changes were required?

- Installed and configured **Tailwind CSS** for utility-first styling.
- Integrated **Vite** as the build tool to enable faster development, HMR (Hot Module Replacement), and optimized builds.
- Refactored existing components and views to apply **Tailwind CSS classes** for a consistent and responsive design.

#### What technologies, methods, or structures did you use?

- **Tailwind CSS**: Used to style all components, ensuring a clean and modern UI with minimal custom CSS.
- **Vite**: Set up for faster bundling, better performance, and an improved developer experience compared to traditional tools like Webpack.
- **Component-based design**: Ensured that UI elements are modular, reusable, and easy to maintain.

#### What challenges did you encounter and how did you solve them?

- **Tailwind configuration**: Initially, setting up Tailwind with Vite required careful configuration (e.g., PostCSS plugins and paths). I followed the official documentation and troubleshooting guides to ensure compatibility.
- **Design consistency**: While refactoring components, maintaining a consistent look and feel across different pages was challenging. I addressed this by creating a simple **design system** (common spacing, typography, button styles) based on Tailwind utilities.
- **Build issues**: Some build errors occurred when integrating new plugins. I resolved them by verifying plugin versions and adjusting the `vite.config.js` file as needed.

---