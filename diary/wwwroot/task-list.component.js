/*jshint esversion: 6 */
(function () { 'use strict'; } ());

angular.module('dairyApp').
  component('taskList', {
    templateUrl: 'wwwroot/task-list.html',
    controller: function (dairyService, $scope) {
      onSelectedDateAsLineUpdated(dairyService.getSelectedDateAsLine());
      dairyService.selectedDateAsLineUpdated(onSelectedDateAsLineUpdated);
      onTasksUpdated(dairyService.getTasks());
      dairyService.tasksUpdated(onTasksUpdated);

      $scope.addTask = function (taskDate, taskNote) {
        dairyService.addTask(taskDate, taskNote);
        $scope.addTaskNoteModel = null;
      };

      $scope.removeTask = function (taskId) {
        dairyService.removeTask(taskId);
      };

      $scope.markTask = function (taskId, isDone) {
        dairyService.markTask(taskId, isDone);
      };

      $scope.updateTaskNote = function (taskId, newTaskNote) {
        dairyService.updateTaskNote(taskId, newTaskNote);
      };

      $scope.onSwipeLeft = function () {
        let [
          dayOfSelectedDate,
          monthOfSelectedDate,
          yearOfSelectedDate
        ] = dairyService.getSelectedDateAsLine().split('.');
        let currentSelectedDate = new Date(yearOfSelectedDate, monthOfSelectedDate - 1, dayOfSelectedDate);
        let newSelectedDate = new Date(currentSelectedDate);
        newSelectedDate.setDate(currentSelectedDate.getDate() + 1);
        dairyService.changeSelectedDateAsLine(
          `${newSelectedDate.getDate()}.${newSelectedDate.getMonth() + 1}.${newSelectedDate.getFullYear()}`
        );
      };

      $scope.onSwipeRight = function () {
        let [
          dayOfSelectedDate,
          monthOfSelectedDate,
          yearOfSelectedDate
        ] = dairyService.getSelectedDateAsLine().split('.');
        let currentSelectedDate = new Date(yearOfSelectedDate, monthOfSelectedDate - 1, dayOfSelectedDate);
        let newSelectedDate = new Date(currentSelectedDate);
        newSelectedDate.setDate(currentSelectedDate.getDate() - 1);
        dairyService.changeSelectedDateAsLine(
          `${newSelectedDate.getDate()}.${newSelectedDate.getMonth() + 1}.${newSelectedDate.getFullYear()}`
        );
      };

      // $scope.a1 = 0;
      // $scope.a2 = 0;
      // $scope.a3 = 0;
      // $scope.a4 = 0;
      // $scope.a5 = 0;
      // $scope.a6 = 0;
      // $scope.a7 = 0;
      // $scope.a8 = 0;
      // $scope.a9 = 0;
      // $scope.a10 = 0;
      // $scope.a11 = 0;
      // $scope.a12 = 0;
      // $scope.a13 = 0;
      // $scope.a14 = 1;


      // $scope.$watch("a2", function (newVal) {
      //   $scope.a1 = +newVal + 1;
      // });

      // $scope.$watch("a3", function (newVal) {
      //   $scope.a2 = +newVal + 1;
      // });

      // $scope.$watch("a4", function (newVal) {
      //   $scope.a3 = +newVal + 1;
      // });

      // $scope.$watch("a5", function (newVal) {
      //   $scope.a4 = +newVal + 1;
      // });

      // $scope.$watch("a6", function (newVal) {
      //   $scope.a5 = +newVal + 1;
      // });

      // $scope.$watch("a7", function (newVal) {
      //   $scope.a6 = +newVal + 1;
      // });

      // $scope.$watch("a8", function (newVal) {
      //   $scope.a7 = +newVal + 1;
      // });

      // $scope.$watch("a9", function (newVal) {
      //   $scope.a8 = +newVal + 1;
      // });

      // $scope.$watch("a10", function (newVal) {
      //   $scope.a9 = +newVal + 1;
      // });

      // $scope.$watch("a11", function (newVal) {
      //   $scope.a10 = +newVal + 1;
      // });

      // $scope.$watch("a12", function (newVal) {
      //   $scope.a11 = +newVal + 1;
      // });

      // $scope.$watch("a13", function (newVal) {
      //   $scope.a12 = +newVal + 1;
      // });

      // $scope.$watch("a14", function (newVal) {
      //   $scope.a13 = +newVal + 1;
      // });

      function onSelectedDateAsLineUpdated(selectedDateAsLine) {
        $scope.selectedDate = selectedDateAsLine;
        dairyService.updateDailyTasks(selectedDateAsLine);
      }

      function onTasksUpdated(tasks) {
        $scope.tasks = tasks;
      }
    }
  });
