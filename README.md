Installations Details:

If you've cloned the repository to your local machine, you'll need to follow these standard steps to get the application running:

Install Node.js and npm: Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website.

Navigate to the project directory: Open your terminal or command prompt and change your current directory to the root of the cloned repository.

Install dependencies: Run the following command to install all the necessary project dependencies:


npm install

Start the development server: Once the dependencies are installed, you can start the development server using the script defined in package.json:


npm run dev

After running npm run dev, the application will typically be accessible in your web browser at http://localhost:5173 (or a similar port, which will be displayed in your terminal).


Stack used:
Frontend Stack
React: The primary JavaScript library for building the user interface.
TypeScript: The programming language used, providing type safety and improved developer experience.
Vite: A fast build tool and development server that significantly improves the frontend development workflow.
Tailwind CSS: A utility-first CSS framework used for styling the application with pre-defined classes.
Framer Motion: A production-ready motion library for React, used for animations and interactive components.
React Three Fiber: A React renderer for Three.js, enabling the creation of 3D graphics and scenes within React components.
Drei: A collection of useful helpers and abstractions for React Three Fiber, simplifying common 3D tasks.
Lucide React: An open-source icon library integrated for various UI icons.
ESLint: Used for static code analysis to identify problematic patterns and enforce coding style.
