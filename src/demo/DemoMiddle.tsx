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

const COMMANDBARHEIGHT = 50;
const GAPSPACE = 20;
const BEAKWIDTH = 20;

export class DemoComponent extends BaseComponent<{}, {}> {
  private _overflow = React.createRef<IButton>();

  public render() {
    const CommandBarSearch = styled<ISearchBoxProps, ISearchBoxStyleProps, ISearchBoxStyles>(
      SearchBox,
      this._getSearchStyles,
      () => ({ placeholder: 'Search Something' }),
      { scope: 'CommandBarSearch' }
    );

    const farItems: ICommandBarItemProps[] = [
      {
        key: 'search',
        onRender: () => <SearchBox styles={this._getSearchStyles} />
      }
    ];

    const dropdownItems: ICommandBarItemProps[] = [
      { key: 'dropdownsearch', onRender: () => <CommandBarSearch underlined /> }
    ];

    return (
        <p>Let's get started</p>
    );
  }

  private _onRenderIcon: IButtonProps['onRenderText'] = (props, defaultRender) => {
    return (
      <span>
        {defaultRender!()} {props!['data-foo']}
      </span>
    );
  };

  private _onMenuClick: IButtonProps['onMenuClick'] = ev => {
    if (ev && ev.shiftKey) {
      ev.preventDefault();
    }
  };

  private _onButtonClick: IButtonProps['onClick'] = () => {
    const button = this._overflow.current;
    button && button.openMenu();
  };

  private _getSearchStyles = (props: ISearchBoxStyleProps): ISearchBoxStyles => {
    const {
      underlined,
      hasFocus,
      theme: { palette }
    } = props;
    return {
      icon: 'custom-icon-class',
      clearButton: {
        backgroundColor: palette.neutralLighter
      },
      root: [
        'custom-root-class',
        {
          margin: '10px 0',
          height: underlined ? '32px' : 'auto',
          width: 200,
          borderColor: 'transparent'
        },
        !underlined &&
          hasFocus && {
            borderColor: palette.neutralTertiary
          }
      ]
    };
  };
}
