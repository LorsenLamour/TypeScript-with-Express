# TypeScript-with-Express
This is a template of a TypeScript project with Express. It can be use for new project.

Step 1 : Initialize the project
mkdir mon-projet-express-typescript
cd mon-projet-express-typescript
npm init -y

Step 2 :  Install Dependencies
npm install express
npm install typescript ts-node-dev @types/node @types/express --save-dev

Step 3 : Configure TypeScript (tsconfig.json)
npx tsc --init
Modify tsconfig.json to have the recent update
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]  
}

Step 4 : Create the structure of the project
 mkdir src
touch src/index.ts

Step 5 : Testing your project
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware de parsing du JSON
app.use(express.json());

// Route de base
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur <http://localhost>:${port}`);
});

Step 6 : Update your package.json to start your project automatically
{
  "scripts": {
    "start": "ts-node-dev --respawn src/index.ts"
  }
}

Step 7 : Run your project 
npm run start


