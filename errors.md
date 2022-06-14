# Errors Encountered
*Here, I will document any errors I've encountered while doing these tutorioals. I hope to document any solutions I find that work in case the error should arise again in the future and should I forget how I resolved it.*

## **MongoDB**

**[ISSUE-m1]** 
-
I am having trouble importing `Weight` from `emp-weights.js`.
The tutorial uses `require('')` but it throws an error saying i should use `import`.
So I am messing with this as i keep getting an error
```
SyntaxError: The requested module './models/emp_weights.js' does not provide an export named 'Weight'

```

**[SOLUTION-m1]** 

I found that i had to use `export default Weight` in `emp_weights.js` and it finally ran. 

-------------

**[ISSUE-m2]** 
-
I am now faced with an `[ERR_INVALID_ARG_TYPE]` error. 
It was emitting from `http_server.js` under line 23 where we had `res.end(err)`. The `[ERR_INVALID_ARG_TYPE]` was referencing `err` not being the correct arg type (string). 

**[SOLUTION-m2]** 

So the solution was to use JavaScript method `.toString()`. 
However, I made a change to Mongodb that may not come back to bite me in the ass... and that is I enabled ipv6 with `mongodb --ipv6`. Keep in mind.

-------------

**[ISSUE-m3]** 
-
I couldn't POST to `http://localhost:8000/putweights`
so that it interacts with the db. There were hangups when it would try to connect.

**[SOLUTION-m2]**

I am unsure what caused it to work again. After stepping away from the problem, I came back to tackle it after reading on the subject only to find that it worked fine. There were parts of the tutorial that were outdated which may have contributed to the solution among updating. I was able to POST and create a new database entry using the REST plugin. 