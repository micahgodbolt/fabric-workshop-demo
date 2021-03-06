import * as React from 'react';
import {
  BaseComponent,
  DefaultButton,
  IButton,
  IButtonProps,
  SearchBox,
  ISearchBoxProps,
  styled,
  ISearchBoxStyleProps,
  ISearchBoxStyles,
  CommandBar,
  ICommandBarItemProps
} from 'office-ui-fabric-react';
import { VerticalStack } from '@uifabric/experiments';


export interface IDemoProps {
  commandBarItems: ICommandBarItemProps[]; 
  overflowItems?: ICommandBarItemProps[];
}


export class DemoComponent extends React.Component<IDemoProps, {} > {
  
  public render() {
    return (
      <p>Let's get started</p>
    )
  }
}
