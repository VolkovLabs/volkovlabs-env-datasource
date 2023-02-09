# Displays environment variables on your Grafana dashboards

![Dashboard](https://raw.githubusercontent.com/VolkovLabs/volkovlabs-env-datasource/main/src/img/dashboard.png)

[![Grafana](https://img.shields.io/badge/Grafana-9.2.2-orange)](https://www.grafana.com)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://www.youtube.com/playlist?list=PLPow72ygztmSGfvGdXriFE-LVuS4Glg7w)
![CI](https://github.com/volkovlabs/volkovlabs-env-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-env-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-env-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables to retrieve data.

[![Grafana variables | Dashboard, Global and Environment variables | Environment Data Source](https://raw.githubusercontent.com/volkovlabs/volkovlabs-env-datasource/main/img/video.png)](https://youtu.be/sczRq2lI3e4)

### Requirements

- **Grafana 8.5+**, **Grafana 9.0+** is required for version 2.X.
- **Grafana 8.0+** is required for version 1.X.

## Getting Started

Environment Data Source is not included in the Grafana Catalog and signed as Private plugin. It can be installed manually from our Private Repository or downloaded directly from the GitHub:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
```

## Features

- Returns Environment Variables.
- Allows to filter unnecessary or secured variables using Regex.

## Private plugin

Plugin is signed as a Private plugin for Grafana using the default domain `http://localhost:3000``. If you are using custom domain URL, there are various options depends on your deployment:

### NGINX Reverse proxy

  We recommend using NGINX in front of the Grafana for an extra level of protection. It allows keeping the default domain and redirect requests.

  Here is the quick example for Docker Compose. You can find full example in the repository.

```docker
version: '3.4'

services:
  grafana:
    container_name: grafana
    image: grafana/grafana:latest
    ports:
      - 3000:3000/tcp
    environment:
      - GF_INSTALL_PLUGINS=https://github.com/VolkovLabs/volkovlabs-env-datasource/releases/download/v2.2.0/volkovlabs-env-datasource-2.2.0.zip;volkovlabs-env-datasource
    volumes:
      - ./provisioning:/etc/grafana/provisioning

  nginx:
    container_name: nginx
    build: ./nginx
    restart: always
    environment:
      - GRAFANA_HOST=localhost
    ports:
      - 80:80/tcp
      - 443:443/tcp
    depends_on:
      - grafana
```

### Unsigned plugin

  Take a look at [Allow Unsigned Plugins](https://volkovlabs.io/plugins/grafana/allow-unsigned/) section in the documentation.

### Build plugin and sign 

  Alternatively, you can build and sign plugin manually following instructions. **Go and Node.js are required**.

```
yarn install
yarn build
yarn build:backend
grafana-toolkit plugin:sign --rootUrls http://XXX/
```

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

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-env-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-env-datasource/blob/main/LICENSE).
