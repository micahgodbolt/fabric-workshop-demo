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

import { commandBarItems, overflowItems } from './items';



export class DemoComponent extends BaseComponent<{}, {}> {
  public render() {
    return (
      <p>Let's get started</p>
    )
  }
}
