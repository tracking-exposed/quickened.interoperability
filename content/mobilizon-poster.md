---
title: mobilizon-poster
subtitle: A quick user guide
date: 2021-05-08
draft: false
layout: page
---

**Requirement:** nodejs installed in your system.

```
git clone https://github.com/vecna/mobilizon-poster
cd mobilizon-poster
npm install
```

### This page is a work in progress. This tool is composed by four specialized sub-tools:

* [poster](/mobilizon-poster-poster) the tool to actually post content to mobilizone,
* [deleter](/mobilizon-poster-deleter) the tool to remove an event submitted via mobilizone-poster (this is important, this tool don't delete events that aren't tracked as local activities)
* [ical](/mobilizon-poster-ical)
* [updater](/mobilizon-poster-updater) the tool that read from local activities and update an event previously registered.

The local activities are saved in `eventlog/*.json` and they are mean to allow event updates, as in this way you can keep track of timings and ID.

