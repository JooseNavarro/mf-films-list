import {Card} from "./components/card/Card";
import {useApp} from "./useApp";

function App() {
  const {characters, translate} = useApp();
  return <Card characters={characters} translate={translate} />;
}

export default App;
