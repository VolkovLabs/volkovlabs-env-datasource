# Displays environment variables on your Grafana dashboards

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-env-datasource/main/src/img/dashboard.png)

[![Grafana](https://img.shields.io/badge/Grafana-9.2.2-orange)](https://www.grafana.com)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://www.youtube.com/playlist?list=PLPow72ygztmSGfvGdXriFE-LVuS4Glg7w)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource)

## Introduction

The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables to retrieve data.

[![Grafana variables | Dashboard, Global and Environment variables | Environment Data Source](https://raw.githubusercontent.com/volkovlabs/volkovlabs-env-datasource/main/img/video.png)](https://youtu.be/sczRq2lI3e4)

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 8.0+** is required for version 1.X.

## Getting Started

Environment Data Source is not included in the Grafana Catalog. It can be installed manually from our Private Repository or downloaded directly from the GitHub:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
```

Plugin is signed for Grafana running on `http://localhost:3000`. if you are using different URL, take a look at [Allow Unsigned Plugins](https://volkovlabs.io/plugins/grafana-allow-unsigned/).

## Features

- Returns Environment Variables.
- Allows to filter unnecessary or secured variables using Regex.

## Provisioning

Grafana supports managing data sources by adding one or more YAML config files in the `provisioning/datasources` folder.

Example of provisioning the Environment Data Source with a filter `GF_` to return only Grafana related variables.

```yaml
datasources:
  - name: Environment
    type: volkovlabs-env-datasource
    access: proxy
    isDefault: true
    orgId: 1
    version: 1
    editable: true
    jsonData:
      filter: GF_
```

## Feedback

We love to hear from users, developers, and the whole community interested in this plugin. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-env-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-env-datasource/blob/main/LICENSE).
