# node-app-ci-cd
My practice repo for ci/cd implementation without using docker/kubernetes.

My notes for this project: 
1. i start with this tutorial, but so many missing pieces need to be found https://medium.com/@mosheezderman/how-to-set-up-ci-cd-pipeline-for-a-node-js-app-with-jenkins-c51581cc783c
2. first create your simple node app, it's kinda simple, like in this repo. the challenge is on the jenkins script.
3. deploy/serve it in the digital ocean droplets. run with pm2
4. next, setup the jenkins-app
5. please refer to this step in the jenkins documentation page for installation, https://www.jenkins.io/doc/book/installing/linux/. if you're using the one from the medium, it is more likely that your jenkins dashboard crashed occassionally.
6. when you're already logged in to the jenkins dashboard and trying to install plugin. don't forget to install nodejs plugin. it was not mentioned in the tutorial.
7.after adding the nodejs plugin, install the nodejs in the global tools configuration page.
8. after that add your installed node in jenkins in the jenkins job configuration under 'Build Environtment' > 'Provide Node and npm bin/ folder to PATH'
9. when adding execute shell option, don't forget to grant executeable permission in cloud server for the script '$ chmod +x script/test', this step also needed for the deployment script
10. add '--exit' in your test script to exit the script once test complete or your build will last forever.
11. when adding the pm2 in your deployment script, write the exact pm2 installation path in the script or your pm2 module will not be found by the script.

last but not least, hopefully this note and practice will help you and me to understand more about CI/CD. cheers! 

