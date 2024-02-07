sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'college',
            componentId: 'stud_tList',
            contextPath: '/stud_t'
        },
        CustomPageDefinitions
    );
});