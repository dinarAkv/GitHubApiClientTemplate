import React from 'react';



import UserFind from './components/UserFind/UserFind.jsx';
import UserFindContainer from './containers/UserFindContainer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>

        <UserFindContainer />


      </div>
    );
  }
}






export default App;
