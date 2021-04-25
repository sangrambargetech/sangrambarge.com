---
title: Manipulate Date Object in Javascript
date: "2021-04-25T22:12:03.284Z"
description: "Lets see how to manipulate date in javascript."
---


Lets see how to manipulate date in javascript. 

### Convert date object to String

>let d = new Date();


>let dateString  = d.getDate() +","+ ( d.getMonth() + 1) +","+d.getFullYear();

### Convert String to array 
>let dateArr = dateString.split(",")

Logic to print the years if the month falls in the range of 6 months. 
For my example suppose current date is 25th April, as april is the 4th month if we want to check 6 months back from april it will be October which is a year behind. So if the condition is true then two years will be printed 

>dateArr[1] - 6 < 0 ? dateArr[2] +  dateArr[2] -1 : dateArr[2]
