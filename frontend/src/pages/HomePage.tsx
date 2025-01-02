import NavigationBar from "../components/NavigationBar"
import SearchBar from "../components/SearchBar/SearchBar"

import Footer from "../components/Footer"

// Placeholder for actual code
const handleSearch = (query: string) => {
  console.log('Search query:', query);
};

export const HomePage = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Welcome to Soteria!</h1>
        <p>This is the home page of Soteria </p>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  )
}

export default HomePage
