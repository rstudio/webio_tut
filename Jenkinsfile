node('docker') {
    timestamps {
        wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
            stage('Checkout source') {
                checkout scm
            }

            docker.image('node:8.14.0').inside {
                withEnv(['HOME=.']) {
                    stage('Install requirements') {
                        sh 'npm install'
                        sh 'printenv'
                    }
                }

                stage('Run Tests') {

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
