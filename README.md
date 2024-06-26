## Gist Project

This is a project that uses the Github gist api to display public gists.

To run this project, make sure the Docker daemon is running and run the following commands from the repository root:

```
cd frontend
docker build -t gist-angular-app .
docker run -p 8080:80 gist-angular-app
```

After running these, access localhost:8080.

### Notes

The requirements said there should be a list of file items, as well as tags for the file type, so the file name as well as the tag are displayed. The file type provided by the API didn't always give the correct type, so I extracted the file extension and used that as the type.

Due to the unauthenticated request limit on the Github api, the gist list gets sliced. Otherwise, there would have been an error, as some users have a lot of gists. Implementing authentication was not in the requirements, so I didn't do that.

The gist list gets cached when accessing the content.

I used SCSS, hopefully that's not a problem.
