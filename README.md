## Prerequisites

Before setting up the project, make sure you have the following installed:

- **Python** (version 3.10 or higher)
- **Node.js** (version 16 or higher) and npm
- **Poetry** (for managing backend dependencies)

---

## Backend Setup (Flask + Poetry)

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   Poetry will manage the virtual environment and dependencies.
   ```bash
   poetry install
   ```

3. **Activate the Virtual Environment:**
   ```bash
   poetry shell
   ```

4. **Run the Flask Server:**
   ```bash
   flask run
   ```
   By default, the server will run at `http://127.0.0.1:5000/`.

5. **Deactivate the Environment (when done):**
   ```bash
   exit
   ```

### Notes for Deployment:
- To install all dependencies on another machine, simply run:
  ```bash
  poetry install
  ```
- If needed, export a `requirements.txt` file for external use:
  ```bash
  poetry export -f requirements.txt --output requirements.txt
  ```

---

## Frontend Setup (React + Vite)

1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   Use npm to install the required packages.
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The server will run at `http://127.0.0.1:5173/` by default (or as specified by Vite).

4. **Build for Production:**
   If you need to create a production build, run:
   ```bash
   npm run build
   ```
   The output will be located in the `frontend/dist` directory.

---

## Full Project Setup

To run the full project:

1. Open two terminal windows:

   - **Terminal 1 (Backend):**
     ```bash
     cd backend
     poetry install
     poetry shell
     flask run
     ```

   - **Terminal 2 (Frontend):**
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

2. Access the application:
   - **Frontend:** `http://127.0.0.1:5173/`
   - **Backend API:** `http://127.0.0.1:5000/`

---

## Additional Notes

### Environment Variables
- For the Flask backend, add any sensitive configurations to a `.env` file in the `backend` directory. Ensure this file is included in `.gitignore`.
- For the React frontend, environment variables can be defined in `.env.local` in the `frontend` directory.

### Linting and Testing
- Backend:
  - Add linters or formatters like `black` or `flake8` with Poetry:
    ```bash
    poetry add --dev black flake8
    ```
  - Run tests with `pytest`:
    ```bash
    poetry add --dev pytest
    pytest
    ```

- Frontend:
  - Use npm to run linters or tests, if configured:
    ```bash
    npm run lint
    npm run test
    ```

## Troubleshooting

### Backend Issues
- If Poetry commands fail, ensure Poetry is installed and added to your system path.
- If Flask fails to run, check that the virtual environment is active.

### Frontend Issues
- If `npm install` fails, ensure you have the correct Node.js version installed.
- If `npm run dev` fails, delete `node_modules/` and reinstall:
  ```bash
  rm -rf node_modules
  npm install
  ```
