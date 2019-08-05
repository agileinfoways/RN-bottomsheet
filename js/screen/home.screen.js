import HomeComponent from '../component/home.component';
import React from 'react'
import { CONST } from '../global/constants.global';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: CONST.TITLE_HOME
  };

  render() {
    return (
      <HomeComponent {...this.props}/>
    );
  }
}
export default Home;
