# Displays environment variables on your Grafana dashboards

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-env-datasource/main/src/img/dashboard.png)

![Grafana](https://img.shields.io/badge/Grafana-10.0.0-orange)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
![E2E](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/E2E/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.

[![Grafana variables | Dashboard, Global and Environment variables | Environment Data Source](https://raw.githubusercontent.com/volkovlabs/volkovlabs-env-datasource/main/img/video.png)](https://youtu.be/sczRq2lI3e4)

## Requirements

- **Grafana 9**, and **Grafana 10** are required for major version 3.
- **Grafana 8.5+** and **Grafana 9** are required for major version 2.
- **Grafana 8** is required for major version 1.

## Getting Started

Environment Data Source is not included in the Grafana Catalog. It can be installed directly from GitHub.

```bash
grafana cli --pluginUrl https://github.com/VolkovLabs/volkovlabs-env-datasource/releases/download/v3.0.0/volkovlabs-env-datasource-3.0.0.zip plugins install volkovlabs-env-datasource
```

## Highlights

- Returns Environment Variables.
- Allows filtering unnecessary or secured variables using Regex.
- Supports Dashboard Variables.

## Documentation

| Section                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| [Deployment](https://volkovlabs.io/plugins/volkovlabs-env-datasource/deployment/)     | Explains deployment options for the data source.             |
| [Features](https://volkovlabs.io/plugins/volkovlabs-env-datasource/features/)         | Demonstrates data source features.                           |
| [Provisioning](https://volkovlabs.io/plugins/volkovlabs-env-datasource/provisioning/) | Demonstrates how to automatically provision the data Source. |
| [Release Notes](https://volkovlabs.io/plugins/volkovlabs-env-datasource/release/)     | Stay up to date with the latest features and updates.        |

## Support

- Subscribe to our [YouTube Channel](https://www.youtube.com/@volkovlabs) and add a comment.
- Premium support for the development plugins is available via [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-env-datasource/blob/main/LICENSE).
