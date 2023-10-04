<h1 align="center">Welcome to pocket-platformer-exporter 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.6-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/haroldo-ok/pocket-platformer-exporter#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/haroldo-ok/pocket-platformer-exporter/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/haroldo-ok/pocket-platformer-exporter/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/haroldo-ok/pocket-platformer-exporter" />
  </a>
  <a href="https://twitter.com/Haroldo0k" target="_blank">
    <img alt="Twitter: Haroldo0k" src="https://img.shields.io/twitter/follow/Haroldo0k.svg?style=social" />
  </a>
</p>

> Converts html files exported by pocket-platformer (https://the-l0bster.itch.io/pocket-platformer) into formats that should be more easily exported to other engines. 

### 🏠 [Homepage](https://github.com/haroldo-ok/pocket-platformer-exporter#readme)

## Install

```sh
npm install
```

## Usage

```sh
pocket-platformer-exporter <cmd> [args]

Commands:
  pocket-platformer-exporter json <src>     Converts a Pocket Platformer project
  <dest>                                    into a JSON file.
  pocket-platformer-exporter tiled <src>    Converts a Pocket Platformer project
  <dest>                                    into a Tiled project.

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  

pocket-platformer-exporter json <src> <dest>

Converts a Pocket Platformer project into a JSON file.

Positionals:
  src   The source video, the one that will be converted     [string] [required]
  dest  The name of the JSON file that will be generated.    [string] [required]
  

pocket-platformer-exporter tiled <src> <dest>

Converts a Pocket Platformer project into a Tiled project.

Positionals:
  src   The source video, the one that will be converted     [string] [required]
  dest  The name of either the directory where the Tiled project will be
        generated.                                           [string] [required]
```

## Run tests

```sh
npm run test
```

## Author

👤 **Haroldo O. Pinheiro**

* Twitter: [@Haroldo0k](https://twitter.com/Haroldo0k)
* Github: [@haroldo-ok](https://github.com/haroldo-ok)
* LinkedIn: [@haroldo-ok](https://linkedin.com/in/haroldo-ok)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/haroldo-ok/pocket-platformer-exporter/issues). You can also take a look at the [contributing guide](https://github.com/haroldo-ok/pocket-platformer-exporter/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Haroldo O. Pinheiro](https://github.com/haroldo-ok).<br />
This project is [MIT](https://github.com/haroldo-ok/pocket-platformer-exporter/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_