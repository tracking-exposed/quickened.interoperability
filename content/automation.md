---
title: "How to automate activities"
date: 2020-04-04T22:22:22+00:00
draft: false
og_title: "Automate event liberation"
og_type: "website"
og_image: "http://quickened.interoperability.tracking.exposed/yttrex-logo.jpg"
og_url: "https://quickened.interoperability.tracking.exposed/automation"
og_description: "organize and coordinate your partecipation into the metadata liberation!"
---

* [Install nodejs in your system](https://nodejs.org/en/download://nodejs.org/en/download/)
* download: https://github.com/tracking-exposed/yttrex/archive/master.zip
* unpack and enter `automation` directory, `run npm install`
* download https://github.com/tracking-exposed/quickened.interoperability/releases/download/0.1.2/extension-librevents.zip and unpack them in the directory 'extension-place'; _You should see manifest.json in extension-place directory_.

```
 curl -L https://github.com/tracking-exposed/quickened.interoperability/releases/download/0.1.3/extension.zip -o extension.zip
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   632  100   632    0     0   1036      0 --:--:-- --:--:-- --:--:--  1122
mv extension.zip extension-place/
cd extension-place/
unzip extension.zip
cd ..
mkdir profiles/liberator1
```

Now, if you execute this command:

```
$ DEBUG=* node src/guardoni.js --source https://quickened.interoperability.tracking.exposed/api/v2/common/previews/guardoni --profile profiles/liberator1/
```

with a log of care for blankspaces, this is the best debug enviroment: `DEBUG=*,-puppeteer:*`
