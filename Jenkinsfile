pipeline {
    agent { 
        docker { 
            image 'mcr.microsoft.com/playwright:v1.46.1-jammy' 
        } 
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright') {
            steps {
                sh 'npm run test:e2e:headless'
            }
        }
    }
}