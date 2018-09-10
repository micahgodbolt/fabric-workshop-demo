import React from "react";
import { render } from "react-dom";
import { DemoComponent } from "./demo/DemoFinished";
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import {Fabric, BaseComponent} from 'office-ui-fabric-react';
import {commandBarItems, overflowItems} from './demo/items';

initializeIcons();


export class App extends BaseComponent<any, any> {
  render() {
    return (
      <Fabric>
        <DemoComponent commandBarItems={commandBarItems} overflowItems={overflowItems} />
      </Fabric>
    );
  }
}
