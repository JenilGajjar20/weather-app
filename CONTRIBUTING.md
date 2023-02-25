# Steps to make your contribution using git commands

## 1. Fork this repo. Click on the fork icon on this repo to create a copy of it on your GitHub profile

![github fork icon](https://inspirezone.tech/wp-content/uploads/2021/04/forking-repo-img.png)

## 2. Clone the forked repo to your PC

```
git clone https://github.com/your-github-username/weather-app.git
```

## 3. Add this repo as the remote upstream.

```
git remote add upstream https://github.com/your-github-username/weather-app.git
```

## 4. Keep it synced regularly by pulling from upstream before making any changes

```
git pull upstream master
```

## 5. Create a new branch and checkout to the branch

```
 git checkout -b your-branch-name
```

## 6. Get coding! Make changes that you want to the project.

## 7. Commit your changes

```
git status
```

```
git add .
```

```
git commit -m "commit message describing the change"
```

### 8. Push to your Fork

```
git push origin your-branch-name
```

### 9. Create a Pull Request. Go to your Fork on GitHub and create a pull request to this repo on GitHub. Then fill in the PR submission form before submitting and share the screenshot of the work/change you did.

![github pr icon](https://inspirezone.tech/wp-content/uploads/2021/04/pullrequest-repo-img.png)

### 10. If needed, respond to code review comments and feedback

### 11. If all goes well, your submission will be merged. Congrats!
