
function reportError(info) {
    $(".recipient").html('<h4>Fatal error: ' +
        info.message + '</h4>' +
        "<p>If this is your first access, you should perform some activity on Youtube before accessing here; <br/>and be sure extension is enabled from the switch in the popup (click on the icon). </p>"
    );
}

function getPubKey() {
    const t = window.location.href.split('/#').pop();
    if(t.length != 44 ) console.log("Wrong token length in the URL", t.length);
    return t;
}

function personal() {

    const pk = getPubKey();
    const urlp = buildApiUrl('personal', `${pk}/previews/json`, 2);
    $.getJSON(urlp, (data) => {
        if(data.error) 
            reportError(data);
        else
            appendPreviews(data);
    });
    const urle = buildApiUrl('personal', `${pk}/events/json`, 2);
    $.getJSON(urle, (data) => {
        if(data.error) 
            reportError(data);
        else
            appendEvents(data);
    });
}

function appendEvents(listofe) {
    console.log(listofe);
}

function appendPreviews(listofp) {
    // it goes in #previews div
    const content = _.flatten(_.times((listofp.length / 2), function(counter) {
        const left = _.nth(listofp, counter * 2);
        const right = _.nth(listofp, (counter * 2) + 1);
        return `<tr>
        <td>
            <span class="timeago">${left.timeago} ago</span>
            <a href="${left.href}" target=_blank><code>${left.title}</code></a>
        </td>
        <td>
            <span class="timeago">${right.timeago} ago</span>
            <a href="${right.href}" target=_blank><code>${right.title}</code></a>
        </td>
        </tr>`;
    }));
    $("#previews").append(`<table class="table">${content.join('\n')}</table>`);
}

function fixCSVlinks() {
    const pk = getPubKey();

    const url1 = buildApiUrl('personal', `${pk}/events/csv`, 2);
    $("#CSVeventlink").attr('href', url1);

    const url2 = buildApiUrl('personal', `${pk}/crono/csv`, 2);
    $("#CSVcronolink").attr('href', url2);

    const url3 = buildApiUrl('common', `previews/guardoni`, 2);
    $("#guardonilink").attr('href', url3);

    console.log("fixCSVlinks", url1, url2, url3);
}
