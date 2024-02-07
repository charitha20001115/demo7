sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'college/test/integration/FirstJourney',
		'college/test/integration/pages/stud_tList',
		'college/test/integration/pages/stud_tObjectPage'
    ],
    function(JourneyRunner, opaJourney, stud_tList, stud_tObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('college') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestud_tList: stud_tList,
					onThestud_tObjectPage: stud_tObjectPage
                }
            },
            opaJourney.run
        );
    }
);