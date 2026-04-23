const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>CI/CD Project</title>
        <style>
            body{
                background: linear-gradient(to right, #141e30, #243b55);
                color: white;
                text-align: center;
                font-family: Arial;
                margin-top: 120px;
            }

            h1{
                font-size: 55px;
                color: #00ff99;
            }

            h2{
                font-size: 35px;
                color: #ffd700;
            }

            p{
                font-size: 28px;
                color: #ffffff;
            }

            .box{
                background: rgba(255,255,255,0.1);
                padding: 30px;
                margin: auto;
                width: 70%;
                border-radius: 20px;
                box-shadow: 0px 0px 20px black;
            }
        </style>
    </head>

    <body>

        <div class="box">
            <h1>🚀 CI/CD PIPELINE SUCCESS</h1>
            <h2>Node.js Application Deployed</h2>
            <p>✅ AWS CodePipeline</p>
            <p>✅ CodeBuild</p>
            <p>✅ Auto Deployment on EC2</p>
            <p>🔥 Project Completed Successfully</p>
        </div>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});