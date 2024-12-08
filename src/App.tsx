import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {
  AppWrapper,
  ContentWrapper,
} from "./components/styles/BasicComponents";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <AppWrapper>
      <Nav />
      <ContentWrapper>
        <Tasks />
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
