# React Interview Project

This project is a React application bootstrapped with Vite.

## Project Structure and Main Technologies

This project uses the following main technologies:

- **React Router DOM**: For handling routing within the application.
- **Redux**: For state management.
- **TypeScript**: For type safety and better developer experience.

### Project Structure

The project structure is as follows:

```
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── ...
│   ├── store/
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   └── slices/
│   │       ├── userSlice.ts
│   │       └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/sebas-baltor/renewed-pokedex-react.git
  cd renewed-pokedex-react
  ```

2. Install the dependencies:

  ```bash
  npm install
  # or
  yarn install
  ```

3. Replace the `.env.example` file with `.env`:

  ```bash
  mv .env.example .env
  ```

4. Open the `.env` file and replace `VITE_API_URL` with the URL of the Pokemon API:

  ```env
  VITE_API_URL=https://pokeapi.co/api/v2
  ```

### Running the Project

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173/`.

### Building for Production

To create a production build, run:

```bash
npm run build
# or
yarn build
```

The build output will be located in the `dist` directory.

### Previewing the Production Build

To preview the production build locally, run:

```bash
npm run preview
# or
yarn preview
```

The preview will be available at `http://localhost:4173/`.


