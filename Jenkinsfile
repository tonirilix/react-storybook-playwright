pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.46.1-jammy' } }
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install browsers') {
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