pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
                sh "exit"
            }
        }
        // stage("Deploy") {
        //     steps {
        //         sh "sudo rm -rf /var/www/jenkins-react-app"
        //         sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
        //     }
        // }
    }
}