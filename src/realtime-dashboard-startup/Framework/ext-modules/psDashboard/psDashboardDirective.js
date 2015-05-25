"use strict";

angular.module('psDashboard').directive('psDashboard', function () {
    return {
        templateUrl: 'ext-modules/psDashboard/psDashboardTemplate.html',
        link: function (scope, element, attrs) {
            scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            }

            scope.$on('gridster-item-resized', function (item) {
                // item.$element
                // item.gridster
                // item.row
                // item.col
                // item.sizeX
                // item.sizeY
                // item.minSizeX
                // item.minSizeY
                // item.maxSizeX
                // item.maxSizeY
                if (item == el) {
                    var i = 5;
                }
            });
        }
    };
});

