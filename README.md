# Displays environment variables on your Grafana dashboards

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-env-datasource/main/src/img/dashboard.png)

![Grafana](https://img.shields.io/badge/Grafana-11.3-orange)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
![E2E](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/E2E/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.

[![Grafana variables | Dashboard, Global and Environment variables | Environment Data Source](https://raw.githubusercontent.com/volkovlabs/volkovlabs-env-datasource/main/img/video.png)](https://youtu.be/sczRq2lI3e4)

## Requirements

- Environment Data Source 4.X requires Grafana 10 or Grafana 11.
- Environment Data Source 3.X requires Grafana 9 or Grafana 10.
- Environment Data Source 2.X requires Grafana 8.5 or Grafana 9.
- Environment Data Source 1.X requires Grafana 8.

## Getting Started

Environment Data Source is not included in the Grafana Catalog. It can be installed directly from GitHub.

### Signed http://localhost:3000/ version

Can be used behind the proxy server (NGINX).

```bash
grafana cli --pluginUrl https://github.com/VolkovLabs/volkovlabs-env-datasource/releases/download/v4.1.0/volkovlabs-env-datasource-4.1.0.zip plugins install volkovlabs-env-datasource
```

### Unsigned version

Can be used with any Grafana instance. Requires to add the environment data source to the allowed unsigned plugin configuration.

```bash
grafana cli --pluginUrl https://github.com/VolkovLabs/volkovlabs-env-datasource/releases/download/v4.1.0/volkovlabs-env-datasource-4.1.0.unsigned.zip plugins install volkovlabs-env-datasource
```

## Highlights

- Returns Environment Variables.
- Allows filtering unnecessary or secured variables using Regex.
- Supports Dashboard Variables.

## Documentation

| Section                                                                 | Description                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Deployment](https://volkovlabs.io/grafana/environment/deployment/)     | Explains deployment options for the data source.             |
| [Features](https://volkovlabs.io/grafana/environment/features/)         | Demonstrates data source features.                           |
| [Provisioning](https://volkovlabs.io/grafana/environment/provisioning/) | Demonstrates how to automatically provision the data Source. |
| [Release Notes](https://volkovlabs.io/grafana/environment/release/)     | Stay up to date with the latest features and updates.        |

## Always happy to hear from you

We're looking forward to hearing from you. You can use different ways to get in touch with us.

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-env-datasource/issues).
- Subscribe to our [YouTube Channel](https://youtube.com/@volkovlabs) and leave your comments.
- Become a [Business Suite sponsor](https://github.com/sponsors/VolkovLabs).

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-env-datasource/blob/main/LICENSE).
