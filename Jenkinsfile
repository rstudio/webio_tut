node('docker') {
    timestamps {
        wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
            stage('Checkout source') {
                checkout scm
            }

            dir('node_modules') {
                deleteDir() /* todo: do i need this, figure out one way or the other' */
            }

            docker.image('node:8.14.0').inside {
                withEnv(['HOME=.']) {
                    stage('Install requirements') {
                        sh 'npm install'
                    }
                    /*
                    stage('Lint') {
                        sh 'npm run linter'
                    }*/
                }

                stage('Run Tests') {

                    sh 'selenium-standalone start'
                    try {
                        //browserstack key for user: jonathangartland2 on our account
                        //will likely change to use a qaautotest user,
                        //but probably something for hosted specifically.
                        //It may be that we (Hosted) want our own account
                        //(and other teams may have a similar need)
                        //so that our front end devs can test easily on
                        //multiple browser/os combos, but that is not critical to get these
                        //tests up and running.
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
                        //todo : change to appropriate channel when this goes live
                        // most likely qaautotest, but maybe we use a #hostedtesting
                        // the world is our oyster
                        sendNotifications slack_channel: 'jgtestalert'
                        slackSend channel: '@jonathan.gartland', color: 'good', message: 'Message from Jenkins Pipeline'
                    }
                }
            }
        }
    }
}
