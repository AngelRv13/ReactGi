import './App.css';
import Easy from './components/veryEasy.js';
import EasyMedium from './components/easyMedium.js';
import Hard from './components/Hard.js';

const people = [
  {
    name: "Dre",
    age: 20,
    occupation: "Engineer"
  },
  {
    name: "Osiel",
    age: 23,
    occupation: "Teacher"
  },
  {
    name: "Ivan",
    age: 24,
    occupation: "Senior "
  },
  {
    name: "Hugo",
    age: 37,
    occupation: "Roofer"
  },
  {
    name: "Tony",
    age: 23,
    occupation: "Developer"
  }
];

function App() {
  return (
    <div className="App">
      <h1 className='title'>very Easy</h1>
      <Easy/>
      <h1 className='title'>easy/Medium</h1>
      <EasyMedium name='Angel' age='27' occupation='Coding apprentice'/>
      <h1 className='title'>Hard</h1>
      <Hard people={people}/>
    </div>
  );
}

export default App;

