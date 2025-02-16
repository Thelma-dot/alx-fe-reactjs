// Import existing component
import WelcomeMessage from "./components/WelcomeMessage";

// Import new components
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
           <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
