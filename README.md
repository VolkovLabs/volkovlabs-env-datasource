# Displays environment variables on your Grafana dashboards

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-env-datasource/main/src/img/dashboard.png)

![Grafana](https://img.shields.io/badge/Grafana-9.5.2-orange)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.

[![Grafana variables | Dashboard, Global and Environment variables | Environment Data Source](https://raw.githubusercontent.com/volkovlabs/volkovlabs-env-datasource/main/img/video.png)](https://youtu.be/sczRq2lI3e4)

## Requirements

- **Grafana 10** is supported.
- **Grafana 8.5+**, **Grafana 9.0+** is required for major version 2.
- **Grafana 8.0+** is required for major version 1.

## Getting Started

Environment Data Source is not included in the Grafana Catalog. It can be installed from our Private Repository or downloaded directly from GitHub.

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
```

## Highlights

- Returns Environment Variables.
- Allows filtering unnecessary or secured variables using Regex.
- Supports Dashboard Variables.

## Documentation

| Section                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| [Deployment](https://volkovlabs.io/plugins/volkovlabs-env-datasource/deployment/)     | Explains deployment options for the data source.             |
| [Provisioning](https://volkovlabs.io/plugins/volkovlabs-env-datasource/provisioning/) | Demonstrates how to automatically provision the data Source. |
| [Release Notes](https://volkovlabs.io/plugins/volkovlabs-env-datasource/release/)     | Stay up to date with the latest features and updates.        |

### Features

| Section                          | Description                                  |
| -------------------------------- | -------------------------------------------- |
| [Dashboard Variables](https://volkovlabs.io/plugins/volkovlabs-env-datasource/variables/) | Demonstrates how to use Dashboard variables. |

## Support

We provide GitHub Discussions and Premium tier support for the development plugins available via [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-env-datasource/blob/main/LICENSE).
