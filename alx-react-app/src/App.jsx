// Import existing component
import WelcomeMessage from "./components/WelcomeMessage";

// Import new components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile"; // Import UserProfile

const App = () => {
    return (
        <div>
            <WelcomeMessage />
            <Header />
            <MainContent />
            {/* Adding UserProfile Component */}
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;
