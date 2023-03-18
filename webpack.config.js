const path = require( 'path' );

module.exports = {
    mode : "development",
    entry : "./src/index.ts",
    output : {
        filename: 'main.js',
        path : path.resolve( __dirname , 'dist' )
    },
    resolve: {
        extensions: [ '.js' , '.ts' ]
    },
    module : {
        rules : [
            {
                test : /\.ts$/,
                use : [
                    {
                        loader: "babel-loader",
                        options : {
                            cacheDirectory : true,
                        }
                    },
                    {
                        loader: "ts-loader",
                        options : {
                            configFile : 'tsconfig.json'
                        }
                    }
                ]
            }
        ]
    }
}

