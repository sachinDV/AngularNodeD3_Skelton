
angular.module("TaskManagerModule",[]).controller("JoTaskManager",function($scope,$http,socket)
        {
            var socket = io.connect();
            
            $scope.statusAvailable = ['To Do','Done'];
            //$scope.name = "Jonathan Elo Task Manager";
            $scope.activatateAddTaskView;
            $scope.activatateTaskistView;
            $scope.activateStatusAnaysisView;
            $scope.homeView ;
            $scope.activatateAddTask = activatateAddTask;
            $scope.activatateTaskist = activatateTaskist;
            $scope.activateStatusAnaysis = activateStatusAnaysis;
            $scope.resourceList = [];
            $scope.resourceJson
            
            function activatateAddTask()
            {
                console.log("activatateAddTaskView")
               
                /*$scope.homeView = true;
                $scope.activatateAddTaskView = false;
                $scope.activatateTaskistView = true;
                $scope.activateStatusAnaysisView = true;
                $scope.TaskAdded = "";
                $scope.StatusAdded = "";*/
                $scope.$apply($scope.name = "Jonathan Elo Task Manager",
                $scope.activatateAddTaskView = true,
                $scope.activatateTaskistView = false,
                $scope.activateStatusAnaysisView =false,
                $scope.save = function() {
                    console.log("Save Called"); 
                    $scope.resourceJson= {"task":$scope.TaskAdded,"status":$scope.StatusAdded}
                    $scope.resourceList.push({"task":$scope.TaskAdded,"status":$scope.StatusAdded})
                    console.log("resourceList"+JSON.stringify($scope.resourceList));
                    $http.put("/server",$scope.resourceJson).then(function (response) {
        
                    });
                    
                    })

                    socket.on('addTask', function (data) {
                        console.log("HHHHHHHHH"+JSON.stringify(data));
                        

        });
                
                
                
            }
            function activatateTaskist(){
                //$scope.homeView = true;
                console.log("activatateTaskistView")
                myD3Draw();
                
                
                //$scope.activatateAddTaskView = true,
                $scope.activatateTaskistView = true;
                $scope.activatateAddTaskView = false;
                $scope.activateStatusAnaysisView = false;
                $scope.runTestCase = putResource
                
                console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
                function putResource() {
                    var put_url = "/resource/" + nodeID + "/" + resourceID + "/" + index;
                    //console.log("PUT RUN TEST : " + put_url + " : "+resource);
                    $http.put(put_url, $scope.resource, "").then(
                    function (response) {
                
                                       },
                    function (response) {
                
                    }

                    );

                }
                
            }
            function activateStatusAnaysis(){
                //$scope.homeView = true;
                $scope.activatateAddTaskView = false,
                $scope.activatateTaskistView = false,
                $scope.activateStatusAnaysisView = true
                
            }
            
        }).factory('socket', function ($rootScope) {
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }
        };
    });
    