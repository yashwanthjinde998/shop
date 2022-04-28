import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer> */}
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
