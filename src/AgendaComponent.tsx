import React from 'react';
import './App.css';
import * as microsoftGraph from "@microsoft/microsoft-graph-types";
import {People, MgtTemplateProps} from "@microsoft/mgt-react"

export default function AgendaComponent(props: MgtTemplateProps) {
    const event: microsoftgraph.Event = props.dataContext.event;
  return (
  <div>
      <div>
        `Subject: ${event.subject}`
      </div>
  {/*<People peopleQueries={event.attendees && event.attendees?.map((a)=>a.emailAddress?.address)}></People>*/}
  </div>
  );
}

