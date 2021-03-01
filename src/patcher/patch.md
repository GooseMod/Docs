# Patch

## Arguments

The core of Patcher is the `patch` function, allowing easy post (after the original function) and pre (before the original function) patching of pre-existing functions. The arguments for the function are:

```js
function patch(parentObject, parentKey, patchFunction, isPrePatch = false)
```


## Return Value

The return value of the patch function is a function which unpatches when ran.


## Your Patch

Patch functions are called like regular functions but are given the current running's context (`this`), with the arguments like:
  - `originalArguments` - the original arguments of the pre-existing function
  - Post only: `returnValue` - the return value of the pre-existing function after it was ran

```js
function yourPrePatch(originalArguments)
```

```js
function yourPostPatch(originalArguments, returnValue)
```

The return value of your patch depends on if it's a pre or post patch:
  - Pre - if the return value is an array it will be used as the new arguments for the pre-existing function
  - Post - the return value will be used as the new return value of the pre-existing function


## Example Usage

```js
import * as Patcher from '@goosemod/patcher';
import * as Webpack from '@goosemod/webpack';

const ModalFunctions = Webpack.findByProps('openModal', 'closeModal');

Patcher.patch(ModalFunctions, 'openModal', (args) => {
  console.log('openModal', args);
}, true);
```