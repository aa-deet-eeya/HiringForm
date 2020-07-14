# Hiring Form

A simple hiring form following MVC pattern which takes data and stores in MongoDB, also it takes in Resume file and stores locally. 

Note : Resume files come either in .pdf or .docx extensions and rarely in .jpeg or any other image format. Storing such files in MongoDB can give unexpected results since it takes in binary type data and hence data loss can occur. Due to unreliability its recommended to store such files in Google Drive or S3 container.


### Getting started 

Make a .env file and store your mongoDB URI in this format :
```
MONGO_URI= "<your mongo URI goes here>"
```

Now run,
```
npm install
```


And you're ready to go,


Now go ahead and run 
```
npm start
```

### Glitch

Project is hosted at Glitch,


Live Code : https://glitch.com/edit/#!/victorious-thoughtful-match
Live View : https://victorious-thoughtful-match.glitch.me