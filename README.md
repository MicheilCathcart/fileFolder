# FileFolder

This project allows you to create nested files and folders in a tree structure. I added a parent reference on the node model to make it easier to track what array nodes where getting deleted from or added too. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Issues

I could not build the application `ng build` at this point due to an issue with angular cli. Please see https://github.com/angular/angular-cli/issues/22606 for the fix. Removing the line "last 2 Safari major versions" from the file .browserslistrc fixed this issue for me.

## External Code

I have borrowed a create GUID function and a function that removes the parent property on the NodeModel when exporting to JSON, this is so the JSON can render for display and not fail due to circular dependecies.

## Gaps in the application

1. I need to tidy up the CSS to make it more aethitically pleasing.
1. More feedback given to the user when focussing on inputs.

## Improvements that could be made