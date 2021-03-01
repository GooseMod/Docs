# Context Menu

Patching the Context Menu (the menu which appears on a right click) is common in Modules, so Patcher has a standard function for it.


## Arguments

  - `type`: The type of context menu, so you can choose where / when your item is added (see below)
  - `itemProps`: Properties of the MenuItem React element (see below)

```js
function contextMenu.patch(type, itemProps)
```


## Return Value

The return value of the patch function is a function which unpatches when ran, directly from the main `patch` function which is ran internally.


## Types

  - `user`: When right clicking a user
  - `message`: When right clicking a message


## Item Props

Needed:
  - `label`: The label (shown name) of the item
  - `action`: Function ran on action (click) of the item

Optional:
  - `checked`: Makes the item a checkbox, and sets whether it is currently checked or not
  - `sub`: An array of more item props for making a sub menu


## Example Usage

```js
import * as Patcher from '@goosemod/patcher';

Patcher.contextMenu.patch('user', {
  label: 'Copy Avatar URL',
  action: (_orig, info) => {
    window.DiscordNative.clipboard.copy(info.user.avatarURL);
  }
});
```