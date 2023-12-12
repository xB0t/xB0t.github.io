node () {
  stage ('Clone Code') {
        
        echo "Cloning the code"
        git url:"https://github.com/xB0t/xB0t.github.io.git", branch: "master"
        
        }
        
  stage ('Build') {
    
    echo "Building the image"
    sh "docker build -t xb0tportfolio ."
    
    }
    
 stage ('Push to Docker Hub') {
    
    echo "Pushing the image to docker hub"
    withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")])
    {
    sh "docker tag django-notes-app ${env.dockerHubUser}/django-notes-app:latest"
    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
    sh "docker push ${env.dockerHubUser}/django-notes-app:latest"

    }
    
    }
    
    stage ('Deploy') {
    
    echo "Deploying the container"
    sh "docker compose down && docker compose up -d"
    
    }

}
