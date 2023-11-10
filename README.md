# techwens
command to install package

Get the repo :


npm install 

run 
node app.js

open localhost::3000

# login
with only username like 'nakul'
it create a jwt token and save on coockie
now upload the file from Postmen
# 
curl --location 'http://localhost:3000/api/v1/upload' \
--header 'Authorization: Bearer [token]' \
--form 'file=@"[ur_file_path]"'


# Sample request

curl --location 'http://localhost:3000/api/v1/upload' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtbW0iLCJpYXQiOjE2OTk2Mjk3ODAsImV4cCI6MTY5OTYzMzM4MH0.cTdeHJchfUHlTylI-Xnx0FW9jGnWozJYagz5pYXM77Q' \
--form 'file=@"/Users/nakuldas/Downloads/315381881_2454620604691740_7724937283240176410_n.jpg"'
