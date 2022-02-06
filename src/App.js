import Header from "./header/Header.js";
import SignIn from "./main/SignIn.js";
import Footer from "./footer/Footer.js";

function App() {
  return (
    <div className="bg-darkGray h-screen px-20">
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
