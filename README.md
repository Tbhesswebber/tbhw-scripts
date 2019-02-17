# tbhw-scripts

## Contributing

As my first open-source package, this repository is over-tooled to the max just to see what is possible - feel free to create issues specifically surrounding the tools that I am using and their configurations.

### Getting Started

This project is written with Node version 10 and npm version 6 - while operating outside of these constraints is fine, you may want to attempt to use these version for uniformity. With nvm installed, just run `nvm use` to read from the [.nvmrc](./.nvmrc) file.

Getting started is simple, just fork and clone the repository and then run the following commands in your terminal. The validate script will run the build, the tests, and the linter and is the script that will run before you commit and push.

```bash
$ cd tbhw-scripts
$ npm install
$ npm run validate
# will show a slew of commands that are being run
# will show the current test coverage report for the repository
```

### Committing

I use [commitlint](commitlint) to lint git commits according to the [conventional changelog](cnvclg). If you're as lazy as I am, feel free to use [commitizen cli](cz) either with your own installation or with `npm run cz` - if your commit still fails commitlint's rules, you can run `npm run cz -- --retry`.

[commitlint]: https://github.com/conventional-changelog/commitlint
[convclg]: https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md
[cz]: https://github.com/commitizen/cz-cli

#### :fire:In Case of Emergency:fire:

Just in case something happens that forces you to run away from your computer screaming, just run `npm run fire`, which will create a new branch called "emergency", commit all of your current changes, and then push them to a new branch on your origin remote. :fire_engine:
