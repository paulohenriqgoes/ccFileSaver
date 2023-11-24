'use strict';
angular.module('ccFileSaver', [])
  .service('FileSaver', function() {
    return {
      saveAs: function(blob, fileName) {
        var isBlob = 'arrayBuffer' in blob;
        if (!isBlob) {
          throw new Error('Invalid Blob');
        }

        var a = angular.element(document.createElement('a'));
        var body = angular.element(document.body);
        var url = window.URL.createObjectURL(blob);

        body.append(a);
        a.addClass('hidden');
        a[0].href = url;
        a[0].download = fileName;
        a[0].id = fileName;
        a[0].click();
        window.URL.revokeObjectURL(url);
        angular.element(document.getElementById(fileName)).remove();
      }
    };
  });
