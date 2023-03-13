import './App.css';
import Payment from './Components/Payment';
import SimpleForm from './Components/SimpleForm';
import UnControlledForm from './Components/UnControlledForm';

function App() {
  return (
    <div >
     <Payment/>
     <hr></hr>
     <SimpleForm></SimpleForm>
     <hr></hr>
     <UnControlledForm></UnControlledForm>
    </div>
  );
}

export default App;
