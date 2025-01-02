import NavigationBar from "../components/NavigationBar"

import Footer from "../components/Footer"
export const HomePage = () => {
  return (
    <div className="home-page-container">
        <NavigationBar />
        <div className="home-page-content">
            <h1>Welcome to Soteria!</h1>
            <p>This is the home page of Soteria </p>

        </div>
        <Footer />
    </div>
  )
}

export default HomePage