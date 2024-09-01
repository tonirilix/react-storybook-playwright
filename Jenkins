pipeline {
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright') {
            steps {
                sh 'npm run test:e2e:headless'
            }
        }
    }
}