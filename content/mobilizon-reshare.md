---
title: mobilizon-reshare
subtitle: A quick deployment guide
date: 2022-06-09
draft: false
layout: page
extraCSS: "/css/fixers.css"
---

#### How to start working on mobilizon-reshare

* Python 3.9 or newer
* Poetry
* A test Mastodon account to try live integration

```
git clone https://github.com/Tech-Workers-Coalition-Italia/mobilizon-reshare
cd mobilizon-reshare
poetry install
poetry run pytest
```

Done? good! then:

* Create a Mastodon app on your account https://your_instance.com/settings/applications
* Pick a Mobilizon instance and a group (for example: https://mobilize.berlin/@radio27)
* Fill `mobilizon_reshare/settings.toml` and `mobilizon_reshare/.secrets.toml` with your configurations

```
export SECRETS_FOR_DYNACONF="$(pwd)/mobilizon_reshare/.secrets.toml"
export SETTINGS_FILE_FOR_DYNACONF="$(pwd)/mobilizon_reshare/settings.toml"
poetry run mobilizon-reshare start
```

#### Know more

* mobilzone-reshare announcement and details https://write.as/simone-robutti/supercharge-your-events-using-mobilizon-and-mobilizon-reshare
* mobilzone-reshare code https://github.com/Tech-Workers-Coalition-Italia/mobilizon-reshare
