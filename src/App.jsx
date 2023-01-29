import './App.scss';
import CreatedProjects from './components/created-projects/CreatedProgects';
import MainInfo from './components/main-info/MainInfo'

const App = () => {
  return (
    <div className="main">
      <CreatedProjects />
      <MainInfo />
    </div>
  );
}

export default App;
