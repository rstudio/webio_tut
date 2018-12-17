node('docker') {
    timestamps {
        wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
            stage('Checkout source') {
                checkout scm
            }

            dir('node_modules') {
                deleteDir()
            }

            docker.image('node:8.14.0').inside {
                withEnv(['HOME=.']) {
                    stage('Install requirements') {
                        sh 'npm install'
                        sh 'npm list'
                    }

                    //stage('Test') {
                        //sh 'npm install'
                        //sh '$HOME/node_modules/.bin/wdio wdio.conf.js'
                   // }
                    /*
                    stage('Lint') {
                        sh 'npm run linter'
                    }*/

                    browserstack('6026f57b-72ff-4eb6-850f-3a76c509356f') {
                        // some block
                        sh npm test
                    }
                }
            }
        }
    }
}
