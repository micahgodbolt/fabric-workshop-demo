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

import { items, commandBarItems, overflowItems } from './items';

// Put const values in file scope
const COMMANDBARHEIGHT = 50;
const GAPSPACE = 20;
const BEAKWIDTH = 20;

// Extend BaseComponent to get access to events, async, disposables helpers and better error reporting
export class DemoComponent extends BaseComponent<{}, {}> {
  // Use Reacts createRef to create references
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
      <VerticalStack gap={200}>
        <CommandBar
          items={commandBarItems}
          overflowItems={overflowItems}
          farItems={farItems}
          //
          // CommandBar uses the new styling approach that can take a function or an object
          // The function props includes current theme and any style states (selected, checked etc)
          // See https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling#using-a-styleable-component
          styles={{ root: { height: COMMANDBARHEIGHT } }}
          //
          // Child elements often have their entire prop object passed through
          // rather than duplicating their props in root component
          overflowButtonProps={{
            //
            // Apply ref to componentRef instead of ref
            componentRef: this._overflow,
            //
            // onRender functions allow overriding or append/prepending or default renderer
            menuProps: {
              beakWidth: BEAKWIDTH,
              isBeakVisible: true,
              gapSpace: GAPSPACE,
              //
              // items are currently required, but passing in empty string ignores these
              items: dropdownItems
            },
            //
            // all callback functions start with 'on'. Include subject if it is not the root element
            onMenuClick: this._onMenuClick
          }}
        />

        <DefaultButton
          text="Click Me"
          //
          // flag props should describe the non standard state.
          // This way we don't need to state true or false, and it works just like HTML properties
          primary
          //
          // Any valid id/className/data-*/aria-* value will be passed on to component
          className="myClassName"
          data-foo="*"
          iconProps={{ iconName: 'Accept' }}
          onRenderIcon={this._onRenderIcon}
          //
          // Buttons still use an old approach to styling where there are dozens of targets that include states
          styles={{
            root: {
              width: 200
            },
            rootHovered: {
              boxShadow: '4px 4px 4px black'
            },
            iconPressed: {
              background: 'red'
            }
          }}
          onClick={this._onButtonClick}
        />
      </VerticalStack>
    );
  }

  // We can reference the specific props interface via IComponentProps['prop']
  private _onRenderIcon: IButtonProps['onRenderText'] = (props, defaultRender) => {
    return (
      <span>
        {defaultRender!()} {props!['data-foo']}
      </span>
    );
  };

  private _onMenuClick: IButtonProps['onMenuClick'] = ev => {
    if (ev && ev.shiftKey) {
      // prevent default behavior from occuring (opening and closing of menu)
      ev.preventDefault();
    }
  };

  private _onButtonClick: IButtonProps['onClick'] = () => {
    // Access the referenced button and all of its public methods
    const button = this._overflow.current;
    button && button.openMenu();
  };

  // This is for the SearchBox styles function. This is the modern theming approach.
  // Props are passed in (including state, theme etc) and SearchBox styles are returned
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
