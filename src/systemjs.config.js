(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'lib/rxjs',
        '@angular': 'lib/@angular',
        'immutable': 'lib/immutable',
        'moment': 'lib/moment',
        'countdown': 'lib/countdown'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'immutable': {main: 'dist/immutable.min.js'},
        'moment': {main: 'moment.js'},
        'countdown': {main: 'countdown.js'}
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/forms'
   ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
