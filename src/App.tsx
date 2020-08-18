import React from 'react';
import './App.css';

import {Login, Agenda} from "@microsoft/mgt-react"
import AgendatComponent from "./AgendaComponent";

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'mgt-login': any;
//       'mgt-agenda': any;
//     }
//   }
// }
function App() {
  return (
  <div>
    <Login></Login>
    <Agenda eventClick={(e)=>console.log(e)}>
      <AgendatComponent template='event'></AgendatComponent>
    </Agenda>
    
    {/*<mgt-login></mgt-login>*/}
    {/* <mgt-agenda></mgt-agenda>*/}
   
  </div>
  );
}

export default App;
