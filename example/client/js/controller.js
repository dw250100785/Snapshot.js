(function($app) {

    "use strict";

    /**
     * @module App
     * @controller IndexController
     */
    $app.controller('IndexController', function IndexController($scope) {

        /**
         * @property collection
         * @type {Array}
         */
        $scope.collection = [];

        /**
         * @property statistics
         * @type {Object}
         */
        $scope.statistics = {};

        /**
         * @property debug
         * @type {Object}
         */
        $scope.debug = {};

        // Establish a connection to the Node.js server.
        var socket = io.connect('http://localhost:8888');

        /**
         * @on snapshot/contentUpdated
         */
        socket.on('snapshot/contentUpdated', function(data) {

            $scope.$apply(function() {
                $scope.collection   = data.models;
                $scope.statistics   = data.statistics;
                $scope.debug        = data.debug;
            });

        });

    });

})(window.app);