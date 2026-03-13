# shark-website

Static, cross-platform, responsive, interactive and multi-language app.

## Build Setup

```bash
# install dependencies
$ npm install

# run the project to localhost 3000
$ npm run dev
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

## Environment 

Don't forget to create a `.env` file with the cloudinary variables

## Docker

Project can be run with docker

```
cd sharks-enlightenment/
docker build -t sharks-enlightenment .
docker run -p 3000:3000 sharks-enlightenment
```
