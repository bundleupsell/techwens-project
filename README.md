# Techwens test Project

Get the repo : git clone https://github.com/bundleupsell/techwens-project.git

# Install npm packages
npm install 

# Run the app
node app.js

# Homepage ( As login page )
 open [localhost::3000](http://localhost:3000/)

# login [Generate JWT token ]
 . Provide any mail or username to create JWT Token.
 . You will be redirect to dashboard from where you will get the token as well as you directly upload file.

# Postmen Curl Template
curl --location 'http://localhost:3000/api/v1/upload' \
--header 'Authorization: Bearer [token]' \
--form 'file=@"[ur_file_path]"'


# Postmen Curl Template Sample:

curl --location 'http://localhost:3000/api/v1/upload' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtbW0iLCJpYXQiOjE2OTk2Mjk3ODAsImV4cCI6MTY5OTYzMzM4MH0.cTdeHJchfUHlTylI-Xnx0FW9jGnWozJYagz5pYXM77Q' \
--form 'file=@"/Users/nakuldas/Downloads/315381881_2454620604691740_7724937283240176410_n.jpg"'
