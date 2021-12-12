---
title: libre.events tool — libertadata
subtitle: A quick user guide
date: 2021-10-09
draft: false
layout: page
---





### First step: produce the pointers file

**Requirement** you need to know which facebook page you want to copy the events from, in this case "about://blank" has a page reachable at the URL **https://www.facebook.com/about.party/**, and with the **/events/** suffix you'll get the public event list.

**Requirement** you should create a directory, in the example below, is *liberator1*; that's the name of the directory *guardoni* would created, and it is equivalent to a [chromium --user-data-dir](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md).

```
Claudio@bluelizard MINGW64 ~/VMShared/librevent/automation (main)
$ DEBUG=*,-puppeteer* src/guardoni.js --page https://www.facebook.com/about.party/events/ --profile liberator1
  guardoni:events Directive built: [
  {
    "loadFor": 12000,
    "url": "https://mbasic.facebook.com/about.party/events/",
    "fblinktype": "events-page",
    "pageId": "about.party",
    "quintrex": true
  }
```

This should open a browser with a facebook event page, on mbasic interface, therefore don't expect the typical nice graphic design (but doesn't matter for our scope).

```
$ ls -ltr pointers/
total 15
-rw-r--r-- 1 Claudio 197609 1398 Jun 17 19:43 2021-06-17+19-43+events-page+isuog.org.json
-rw-r--r-- 1 Claudio 197609  503 Jun 17 20:01 2021-06-17+20-01+events-page+UptownFoodTruckFestival.json
-rw-r--r-- 1 Claudio 197609  139 Jun 18 07:14 2021-06-18+07-14+events-page+reclaimclubculture.json
-rw-r--r-- 1 Claudio 197609  256 Aug 25 09:48 2021-08-25+09-48+events-page+LCIResearch.json
-rw-r--r-- 1 Claudio 197609  139 Aug 26 11:09 2021-08-26+11-09+events-page+radicalfilmnetwork.json
-rw-r--r-- 1 Claudio 197609  227 Oct 10 19:07 2021-10-10+19-07+events-page+about.party.json
```

```
$ cd pointers/
$ cat 2021-10-10+19-07+events-page+about.party.json
{
  "eventHrefs": [
    "/events/568047841065828",
    "/events/978302766078234",
    "/events/4355011024613734",
    "/events/6014533291950654"
  ],
  "screenshot": "screencapts\\2021-10-10+19-07+events-page+about.party.png"
}
```

The so-called *pointer files* have direct links on the event page; you also have a screenshot helpful in the case you want to double check.

### Second step: acquire the event from the pointers

```
$ DEBUG=*,-puppeteer* node src/guardoni.js --pointer pointers/2021-10-10+19-07+events-page+about.party.json --profile liberator1
  guardoni:events Loading content and parsing JSON from pointers/2021-10-10+19-07+events-page+about.party.json +0ms
  guardoni:events Directive built: [
  {
    "url": "https://mbasic.facebook.com/events/568047841065828",
    "loadFor": 12000,
    "fblinktype": "events",
    "eventId": "568047841065828",
    "quintrex": true
  } {...}
  guardoni:events Downloaded picture in undefined +12s
  guardoni:events Screenshot saved as screencapts\978302766078234_2021-10-10-19-54.png +384ms
```

This script produce one log 


```
$ cat evdetails/978302766078234_2021-10-10-19-54.json
{
  "@context": "http://schema.org",
  "@type": "Event",
  "startDate": "2021-10-16T12:00:00+0200",
  "eventAttendanceMode": "",
  "name": "ALLER ENDE ANFANG x sektgarten",
  "url": "https://it-it.facebook.com/events/about-party/aller-ende-anfang-x-sektgarten/978302766078234/",
  "location": {
    "@type": "Place",
    "name": "://about party",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressLocality": "Berlino, Germania",
      "postalCode": "10245",
      "streetAddress": "Markgrafendamm 24c"
    }
  },
  "description": "// den letzten ...",
  "image": "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.30808-6/cp0/e15/q65/c103.0.206.206a/p206x206/241691176_1485956268427390_1054258159267620724_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=b386c4&_nc_ohc=HQzJYhPLHM4AX-P-R7f&_nc_ht=scontent.fmxp6-1.fna&oh=72a10122ffbbf79ba3a669a9934d277b&oe=61687D6A",
  "performers": [],
  "screenshot": "screencapts\\978302766078234_2021-10-10-19-54.png"
}
```
