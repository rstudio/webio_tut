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


                }


                stage('Run Tests') {
                    try {
                        browserstack('6026f57b-72ff-4eb6-850f-3a76c509356f') {
                            // some block
                            sh 'npm test'
                        }
                    } finally {
//                        junit '**/reports/test-results-*.xml'
//
//                        step([$class: 'CoberturaPublisher',
//                              autoUpdateHealth: false,
//                              autoUpdateStability: false,
//                              coberturaReportFile: 'coverage/cobertura-coverage.xml',
//                              failNoReports: false,
//                              failUnhealthy: false,
//                              failUnstable: false,
//                              maxNumberOfBuilds: 0,
//                              onlyStable: false,
//                              sourceEncoding: 'ASCII',
//                              zoomCoverageChart: false])
                        sendNotifications slack_channel: "@Jonathan\\ Gartland"
                    }
                }
            }

        }
    }
}
