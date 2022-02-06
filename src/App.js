import Header from "./header/Header";
import SignIn from "./main/SignIn";
import GetHelp from "./help/GetHelp";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Money rise";
  });
  return (
    <div className="bg-darkGray h-screen pl-8 pr-4 sm:px-14 md:px-20">
      <Header />
      <SignIn />
      <GetHelp />
    </div>
  );
}

export default App;
