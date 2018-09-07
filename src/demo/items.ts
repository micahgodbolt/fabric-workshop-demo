export const items = [
  {
    key: 'emailMessage',
    name: 'Email message',
    icon: 'Mail'
  },
  {
    key: 'calendarEvent',
    name: 'Calendar event',
    icon: 'Calendar'
  }
];

export const commandBarItems = [
  {
    key: 'newItem',
    name: 'New',
    iconProps: {
      iconName: 'Add'
    },
    ariaLabel: 'New. Use left and right arrow keys to navigate',
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          name: 'Email message',
          iconProps: {
            iconName: 'Mail'
          },
          ['data-automation-id']: 'newEmailButton'
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          iconProps: {
            iconName: 'Calendar'
          }
        }
      ]
    }
  },
  {
    key: 'upload',
    name: 'Upload',
    iconProps: {
      iconName: 'Upload'
    },
    href: 'https://dev.office.com/fabric',
    ['data-automation-id']: 'uploadButton'
  },
  {
    key: 'share',
    name: 'Share',
    iconProps: {
      iconName: 'Share'
    },
    onClick: () => console.log('Share')
  },
  {
    key: 'download',
    name: 'Download',
    iconProps: {
      iconName: 'Download'
    },
    onClick: () => console.log('Download')
  }
];

export const overflowItems = [
  {
    key: 'move',
    name: 'Move to...',
    onClick: () => console.log('Move to'),
    iconProps: {
      iconName: 'MoveToFolder'
    }
  },
  {
    key: 'copy',
    name: 'Copy to...',
    onClick: () => console.log('Copy to'),
    iconProps: {
      iconName: 'Copy'
    }
  },
  {
    key: 'rename',
    name: 'Rename...',
    onClick: () => console.log('Rename'),
    iconProps: {
      iconName: 'Edit'
    }
  }
];
