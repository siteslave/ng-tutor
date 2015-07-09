// Service

angular.module('app.service.MainServ', [])
.factory('MainServ', function () {
        return {
            name: 'NodeJS',
            getName: function () {
                return 'Satit Rianpit';
            }
        }
    });