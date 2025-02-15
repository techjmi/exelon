# GitHub User Finder

GitHub User Finder is a React application that allows users to search for GitHub profiles and view their details along with the top 5 repositories.

## 🛠️ Tech Stack
- React (Vite)
- Axios
- Tailwind CSS
- GitHub API
- Skeleton UI with Lazy Loading

## 🗂️ Folder Structure
```
.
├── public
├── src
    ├── api
    │   └── api.js
    ├── components
    │   ├── SearchBar.js
    │   ├── Profile.js
    │   ├── Repo.js
    │   ├── Error.js
    │   └── Loading.js
    ├── App.js
    ├── main.jsx
    └── index.css
├── .env
└── package.json
```

## ⚙️ Environment Variables
Create a `.env` file in the root directory:
```
VITE_GITHUB_TOKEN=your_github_token
```

## 🚀 Installation and Running the App
```bash
# Clone the repository
git clone https://github.com/techjmi/exelon

# Navigate to the project directory
cd exelon, client

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧪 Features
- Search GitHub profiles by username
- Display profile details (avatar, followers, following)
- List top 5 repositories (sorted by stars)
- Skeleton loading for better UX
- Error handling for invalid users or API errors



