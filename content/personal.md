---
title: Quickened Interoperability with Librevent
subtitle: This personal page is accessible only to the owner of the browser, share this link wisely
date: 2019-08-09:01:21+01:00
draft: false
---

<div id="events"></div>

#### Data kind.1: `https://facebook.com/events/` where you fetched a list of `event-previews`

{{<entry
    text="This page return a localized list of event that depends on your area. It might also have selected some specific categories. All of the preview are equaly recorded, and they are used to feed automation."
    picture="/images/fb-event-preview.png" 
    type="left" >}}

The [automation](/automation) toolchain helps in fetching the complete event after we onyl got knowledge from the preview.

<div id="previews"></div>

---

#### Data kind.2: Event you accessed, like: [`https://www.facebook.com/events/426367775310539/`](https://www.facebook.com/events/426367775310539/).

{{<entry
    text="This page return the complete information on an event. As you might see there are many localized strings, so the re-posting should keeep in account that we do not want to fill timelines with events in language and places far from they are consumed."
    picture="/images/fb-event.png" 
    type="right" >}}

<div id="events"></div>

---

## DONE / work in progress

- See which events you scraped
- Support [automation](/automation)

## still TODO

- Configure how frequently the events would be sent to the fediverse (it is a grace period in which you can)
- Delete events before they been uploaded to the fediverse
- Configure and review which server are configured to receive your events.
- Show you stats on the events this browser extension liberated (we don't write "you liberated" because you can simply automatize the access to facebook and forget about it)
- Review how the events have been parsed and interpreted from the weird Facebook HTML.

_and if you want to edit, check out [repositories](/posts/the-softwares-and-how-to-contribute/)!!_