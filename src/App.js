import Header from "./Components/Layout/Header";
import Bodyimage from './Components/Layout/Bodyimage'
import Meal from "./Components/Meals/Meal";


function App() {
  return (
    <div>
      <Header/>
      <Bodyimage/>
      <main>
        <Meal/>

      </main>
    </div>
  );
}

export default App;
