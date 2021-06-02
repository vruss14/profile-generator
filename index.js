const fs = require('fs');
const inquirer = require('inquirer');

// Custom choices for user avatars and themes
const avatars = ["Astronaut", "Bear", "Dog", "Rubber Duck", "Fish", "Frog", "Happy Face", "Ladybug", "Robot", "Tree"];
const themes = ["Gold", "Pink", "Teal"];

// Questions asked in the command line interface

inquirer
  .prompt([
      {
        type: 'list',
        message: 'What avatar would you like to choose?',
        name: 'avatar',
        choices: avatars
      },
      {
        type: 'input', 
        message: 'What is your name?',
        name: 'name'
      },
      {
        type: 'input', 
        message: 'How would you describe yourself in two to three sentences?',
        name: 'bio'
      }, 
      {
        type: 'input',
        message: 'What\s one of your technical skills?',
        name: 'techSkill'
      },
      {
        type: 'input',
        message: 'What\s one of your soft skills?',
        name: 'softSkill'
      },
      {
        type: 'input',
        message: 'What\s one more of your skills that you\d like to include in your profile?',
        name: 'customSkill'
      },
      {
        type: 'input',
        message: 'What\'s your GitHub URL?',
        name: 'gitHub'
      },
      {
        type: 'input',
        message: 'What\'s your LinkedIn URL?',
        name: 'linkedIn'
      },
      {
        type: 'list',
        message: 'Last, but not least: what color scheme would you like for your profile?',
        name: 'colorScheme',
        choices: themes
      },

    ])

    // The data that is being passed into this function includes all the user's responses
    .then(function(data){

      // This calls the name of the file by the same name of the person (as indicated in their response)
        const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

        let avatarImg;

        // Based on the user's choice of avatar, the image src changes 
        if (data.avatar === "Astronaut") {
          avatarImg = "./assets/images/avatars/astronaut-pngrepo-com.png"

        } else if (data.avatar === "Bear") {
          avatarImg = "./assets/images/avatars/bear-pngrepo-com.png"

        } else if (data.avatar === "Dog") {
          avatarImg = "./assets/images/avatars/dog-pngrepo-com.png"

        } else if (data.avatar === "Rubber Duck") {
          avatarImg = "./assets/images/avatars/ducky-cute-pngrepo-com.png"

        } else if (data.avatar === "Fish") {
          avatarImg = "./assets/images/avatars/fish-pngrepo-com.png"

        } else if (data.avatar === "Frog") {
          avatarImg = "./assets/images/avatars/frog-pngrepo-com.png"

        } else if (data.avatar === "Happy Face") {
          avatarImg = "./assets/images/avatars/happy-pngrepo-com.png"

        } else if (data.avatar === "Ladybug") {
          avatarImg = "./assets/images/avatars/ladybug-animal-pngrepo-com.png"

        } else if (data.avatar === "Robot") {
          avatarImg = "./assets/images/avatars/robot-pngrepo-com.png"

        } else if (data.avatar === "Tree") {
          avatarImg = "./assets/images/avatars/tree-pngrepo-com.png"

        }

        let background;
        let lightBackground;

        // Based on the user's choice, the colors of the website change
        if (data.colorScheme === "Gold") {
          background = "#E29600";
          lightBackground = "rgba(255, 215, 0, 0.35)";
        } else if (data.colorScheme === "Pink") {
          background = "#F08080";
          lightBackground = "rgba(240, 128, 128, 0.35)";
        } else {
          background = "#008080";
          lightBackground = "rgba(0, 128, 128, 0.35)";
        }

        // The appended file includes several aspects of the user's data

        // The replace method is used to remove the quotes around the lightBackground string so that
        // the browser can interpret the color correctly

        fs.appendFile(filename,
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta description= "A command line interface that generates an HTML page based on user inputs.">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Suez+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">

    <link rel = "stylesheet" type = "text/css" href = "./assets/style.css">
    <title>Profile Generator</title>

</head>
<body style = "background-color: ${background}">
    <div id = "wrapper">

        <div id = "left-wrapper" style = "background-color: ${lightBackground.replace(/['"]+/g, '')}">

            <!-- Avatar images are all from www.pngrepo.com -->
            <div id = "avatar-container">
                <img id = "avatar" src =${avatarImg} height= "350px" />
            </div>

        </div>
        
        <div id = "right-wrapper">

            <h1 id = "greeting">Hello, I'm ${data.name}!</h1>

            <div id = "info-wrapper">

                <p id = "bio">${data.bio}</p>

                <p id = "skills">A few of my skills:</p>

                <ul id = "skills-list">
                    <li>${data.techSkill}</li>
                    <li>${data.softSkill}</li>
                    <li>${data.customSkill}</li>
                </ul>

                <div id = "contact-info">
                    <a href= "${data.gitHub}" target="_blank" rel = "noopener"><img src = "./assets/images/icons/GitHub-Mark-120px-plus.png" alt = "GitHub icon" class = "contact-icon" id = "github-logo" width = "120px"></a>
                    <a href= "${data.linkedIn}" target="_blank" rel = "noopener"><img src = "./assets/images/icons/LI-Logo.png" alt = "LinkedIn icon" class = "contact-icon" id = "linkedin-logo" width = "256px"></a>
                </div>

            </div>
        </div>
    </div>

    <script src = "./assets/script.js"></script>
</body>
</html>`
            ,(err) => err ? console.error(err) : console.log('Thanks for your responses! Your page has been generated!')
        );
    });
    