---
title: Quickened Interoperability with Librevent
subtitle: This personal page is accessible only to the owner of the browser, share this link wisely
date: 2019-08-09:01:21+01:00
extraCSS: "/css/personal.css"
draft: false
---

#### Your profile

<div id="profile" class="recipient container"></div>

#### Event you liberated

<div id="events" class="recipient container"></div>

---

{{<entry
    text="This page return a few information on the event liberated, but internally more date is available."
    picture="/images/librevent-arch-0.3.jpg" 
    type="right" >}}

---

<link href="/css/c3.min.css" rel="stylesheet">
<script src="/js/d3.min.js"></script>
<script src="/js/c3.min.js"></script>
<script src="/js/global.js"></script>
<script src="/js/personal.js"></script>
<script type="text/javascript">
    /* personal() is implemtended in personal.js and fetch remotely the support and events data */
    $( document ).ready(function() {
        personal();
    });
</script>