// ==UserScript==
// @name HWR Scheduling
// @description script to open the schedule
// @author SuttArt
// @license MIT
// @version 1.0
// @include https://moodle.hwr-berlin.de/fb2-stundenplan/stundenplan.php
// ==/UserScript==
// [1] We wrap the script in a closure for cross-browser compatibility (opera, ie)
(function (window, undefined) {  // [2] normalize window

    if (window.self != window.top) {
        return;
    }
    if (/https:\/\/moodle.hwr-berlin.de\/fb2-stundenplan\/stundenplan.php/.test(window.location.href)) {
        // Below is the script code directly

        function ClickClack(){
            let selectSubject = document.getElementsByName("faculty")[0]; //get <select> - element "Fachrichtung wählen"
            let selectKurs = document.getElementsByName("course")[0]; //get <select> - element "Kurs Wählen"

            if(selectSubject.selectedIndex != 12 && selectKurs.selectedIndex != 15){
                selectSubject.selectedIndex = 12; //Informatik CHANGE HERE, IF YOU WANT CHANGE SUBJECT
                let changeEvent1 = document.createEvent("HTMLEvents");
                changeEvent1.initEvent("change", true, true);
                selectSubject.dispatchEvent(changeEvent1);

                selectKurs.selectedIndex = 15; //5b CHANGE HERE, IF YOU WANT CHANGE KURS
                let changeEvent2 = document.createEvent("HTMLEvents");
                changeEvent2.initEvent("change", true, true);
                selectKurs.dispatchEvent(changeEvent2);
            }

        }

        setInterval(ClickClack,100);

    }
})(window);

