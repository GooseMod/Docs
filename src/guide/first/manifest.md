# Manifest

The basis of the metadata (information about the module) for modules is in a manifest file, formatted in JSON. The filename is consistent: `goosemodModule.json`. The following sections describe each field avaliable for you to fill out.

## Main
The location of the main JS file, relative to where the manifest file is. It is a string.

### Examples
```json
"main": "src/index.js"
```

```json
"main": "goosemod.js"
```

## Version
The version of the module, a string. It does not require an iteration on every change, however it is highly recommended to follow [Semantic Versioning](https://semver.org). If your version is under 1.0.0 (eg: 0.1.2), the Module Store builder will presume that your module is in development and not ready.

### Examples
```json
"version": "1.2.3"
```

```json
"version": "0.1.8"
```


## Name
The name of the module, a string. It is recommended to use title case (eg: "Your First Module" rather than "Your first module").

### Examples
```json
"name": "Your First Module"
```

```json
"name": "Another Cool Module"
```


## Description
The description of the module, a string. It is recommended to have it 1-3 sentences long with mostly formal grammar / etc. If it is too long it will be cut off and the full description would be shown in a popout.

### Examples
```json
"description": "A very cool module, plus a very cool description. This is now longer and this sentence would likely be cut off at least a little bit."
```

```json
"description": "Makes settings button in the bottom right larger."
```


## Tags
The tags of the module, an array of strings. For a list of tags you might want to use, see the [tags docs page (to be added)](). An array of tags to display.

### Examples
```json
"tags": ["messages", "ui", "button"]
```

```json
"tags": ["theme"]
```

## Authors
The authers of the module, an array of strings. Most of the time elements should be Discord user IDs, however if the author does not want to share their identity it can be a string (but is not recommended unless needed).

### Examples
```json
"authors": ["506482395269169153"]
```

```json
"authors": ["506482395269169153", "Privacy-wanting Author", "760559484342501406"]
```


## Images (optional)
This field is optional, meaning it can just not be added to the manifest if you do not need it. The images of the module, an array of strings - image URLs particularly.
If your module does not need images, you should not have them.
Examples of needing images:
 - Screenshots to showcase what your module does to UI

Examples of not needing images:
 - A "cool" logo for your module
 - Over-hyping / over-edited images to try and attract users

When your module is listed publicly, ensure all images are either created entirely by you or are in the public domain. If you use images which do not comply with the details above then it will likely result in your module not being accepted into the Module Store (or taken down if already present).

### Examples
```json
"images": ["http://res.publicdomainfiles.com/pdf_view/1/13483734017459.jpg", "https://www.publicdomainpictures.net/pictures/310000/velka/canadian-goose-1565277034igV.jpg"]
```

```json
"images": ["http://res.publicdomainfiles.com/pdf_view/1/13483734017459.jpg"]
```


## Dependencies (optional)
This field is optional, meaning it can just not be added to the manifest if you do not need it. The dependencies of the module, an array of strings - module names particularly.

### Examples
```json
"dependencies": ["Cool Library Module", "Another Library"]
```

```json
"dependencies": ["Avatar Data Attribute"]
```