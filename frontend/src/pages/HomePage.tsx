import NavigationBar from "../components/NavigationBar"
import SearchBar from "../components/SearchBar/SearchBar"

import Footer from "../components/Footer"

// Placeholder for actual code
const handleSearch = (query: string) => {
  console.log('Search query:', query);
};

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <NavigationBar />
      <div className="home-page-content">
        <h1>Welcome to Soteria!</h1>
        <p>This is the home page of Soteria </p>
        <SearchBar onSearch={handleSearch} />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
