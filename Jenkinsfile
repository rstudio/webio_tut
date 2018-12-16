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
                    }

                    stage('Test') {
                        sh 'npm install'
                        sh './node_modules/.bin/wdio wdio.conf.js'
                    }
                    /*
                    stage('Lint') {
                        sh 'npm run linter'
                    }*/
                }
            }
        }
    }
}
