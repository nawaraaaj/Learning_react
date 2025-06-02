import Card from './Card.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx'; // or correct path
import List from './List.jsx';
import Button from './Button.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import Event from './Event.jsx';

import ColorPicker from './ColorPicker.jsx';

function App () {

  return(
      <>
      <Card/>
      <Card/>
      <Student name="James" age ={18} isStudent={true}/>
      <Student name="Charlie" age={21} isStudent={false}/>
      <Student/>

      <UserGreeting isLoggedIn={true} username="BroCode"/>

      <List/>

      <Button/>

      <MyComponent/>

      <Counter/>

      <Event/>

      <ColorPicker/>
      
      </>
  );
}
export default App;