---
title: How to Create TAG in Git | Github | Bitbucket
date: "2020-12-06T22:12:03.284Z"
description: "Learn how to Create TAG in Git | Github | Bitbucket"
---

It's very simple to create a tag in git. All you need to do is write a simple command. In this short post I have shared how you can create a tag in git/github/bitbucket from command line using Git bash.

### Command for Creating Tag in Git

**git tag tagname**. In the below command I have named by tag as v1.0, you can give any meaningful name as per your needs.

> git tag v1.0

If you want to give some description to your tag name you can use below command.

> git tag v1.1 -a

Above command will launch editor in gitbash wherein you can write some description for your tag.

> git tag

> git push origin v1.0

After you push this to remote repository, you can login to your github or bitbucket account and check your repository, under tags section it should be visible.
