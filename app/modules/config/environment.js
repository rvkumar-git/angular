var Environment = {
    getEnvironment: null,
    isProduction: false,
    debugMode: true
};

(function() {
    var env = {
        urls: {
          //  ************ URLs to configure ************//
          apiServerPath: 'http://api.angularfirst.com',

          //  ************ URLs to configure ************//
        },
        name: "Development"
    };

    Environment.name = env.name;
    Environment.getEnvironment = function(){
        return env;
    };
})();
