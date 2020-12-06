---
title: How to Delete Branch in Git Locally and Remotely
date: "2020-12-06T23:04:03.284Z"
description: "Learn how to Delete branch in Git Locally and Remotely using Git bash"
---

Many times we create a branch and we don't need it later, in this post I have shared how to delete a git branch locally or remotely. I prefer to use CLI so I use git bash for doing this activity.

### Command for Deleting Branch in Git Locally

The below command will delete your local branch. No need to worry your remote branch is still safe.

> git branch -d <your_branch_name>

In order to delete your remote branch in git you can use below command.

> git push origin --delete <your_branch_name>

After you execute the above command, you will no longer be able to find the branch present in remote repository.

If this post helped us, make sure you tweet about it so it can be helpful for others.
