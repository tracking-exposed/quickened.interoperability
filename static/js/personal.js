
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
    const urlp = buildApiUrl('personal', `${pk}`, 2);
    $.getJSON(urlp, (data) => {
        if(data.error) 
            reportError(data);
        else {
            supporterInfo(data.supporter);
            appendEvents(data.posted);
        }
    });
}

function supporterInfo(profile) {
    const fields = _.pick(profile, ['publicKey', 'lastActivity', 'pseudo', 'config'])
    $('#profile').html(`<pre>${JSON.stringify(fields, undefined, 2)}</pre>`);
}

function appendEvents(posted) {
    // it goes in #events div
    console.log(posted);
    const content = _.map(posted, function(evp) {

        const fields = _.pick(evp, ['href', 'savingTime', 'title', 'posted.url']);
        // we should test if .posted exist
        return `<div>
            <a target=_blank href="${fields.href}">${fields.title}</a>,
            <a target=_blank href="${fields.posted.url}">${fields.posted.url}</a>,
            ${fields.savingTime}.
        </div>`
    }).join("\n");
    
    $("#events").html(content);
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
