---
title: mobilizon-poster
subtitle: A quick user guide
date: 2021-05-08
draft: false
layout: page
---


```
git clone https://github.com/vecna/mobilizon-poster
cd mobilizon-poster
npm install
```

### First execution, and expected failure:

```
mobilizon-poster (main) $ node poster.js 
It is missing the API endpoint (--api), this is mandatory
To provide variables like api, you have three ways: --longopt, environment, or config.json
You can check out the documentation here: https://quickened.interoperability.tracking.exposed/mobilizon-poster
And if this should be different, please raise your point with a ticket: https://github.com/vecna/mobilizon-poster/issues
```

### The mandatory options --api and --token

* `api` wants an URL, it should be the mobilizon endpoint server, that (normally) ends with the /api path in the URL.
* `token` this is a string obtain by coping the current authentication token the browser obtain after performing login [issue n.2: allow to specify login password instead of debugging headers](https://github.com/vecna/mobilizon-poster/issues/2).

### How to get your token from Mobilizon.

Until the [issue n.2: allow to specify login password instead of debugging headers](https://github.com/vecna/mobilizon-poster/issues/2) isn't implemented, you'll have to debug headers and find your authentication token. You need a valid account on the mobilizon instance and you need to perform login, then:

{{<bord-img href="/images/how-to-get-your-token-1.png">}}
{{<bord-img href="/images/how-to-get-your-token-2.png">}}

Then cause a reload, and look for the 'API' entry: you want to see the content of that connection.

{{<bord-img href="/images/how-to-get-your-token-3.png">}}

Then copy paste from `Bearer` till the end of the line:

```
mobilizon-poster (main) $ cat config.json 
{
    "token":"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9_yJhdWQiOiJtb2JpbGl6b24iLCJleHAiOjE2MjI5NzUxNDYsImlhdCI6MTYyMDU1NTk0NiwiaXNzIjoibW9iaWxpem9uIiwianRpIjoiNTgwMjk0ZjMtOTI4ZS00MTE3LWJhNGQtNDBhMjk3ZGJiZWU5IiwibmJmIjoxNjIwNTU1OTQ1LCJzdWIiOiJVc2VyOjE0IiwidHlwIjoiYWNjZXNzIn0.UlcX5eM39-B3JIM6KZ4NMqL_E5XLmCoAs0GhhOpfGVUfj7rrPG_Q71A966W0x7eTZXbhhmTJm_3ddCyOFJG1Gw",
    "api":"https://mobilize.berlin/"
}
```

`config.json` is the default configuration file, and their parameters are considered equivalent (but with lesse priority) than environment variables and --longoptions. Fixing these settings would allow to the command line tool to at least move forward, for example:

```
mobilizon-poster (main) $ node deleter.js 
required the numberic unique identified of as --event

To provide variables like event, you have three ways: --longopt, environment, or config.json
You can check out the documentation here: https://quickened.interoperability.tracking.exposed/mobilizon-poster
And if this should be different, please raise your point with a ticket: https://github.com/vecna/mobilizon-poster/issues
```

Now we can move in more focused documentation about the specific tools:

* [poster](/mobilizon-poster-poster) the tool to actually post content to mobilizone,
* [deleter](/mobilizon-poster-deleter) the tool to remove an event submitted via mobilizone-poster (this is important, this tool don't delete events that aren't tracked as local activities)
* [ical](/mobilizon-poster-ical)
* [updated](/mobilizon-poster-updated) the tool that read from local activities and update an event previously registered.

The local activities are saved in `eventlog/*.json` and they are mean to allow event updates, as in this way you can keep track of timings and ID.
