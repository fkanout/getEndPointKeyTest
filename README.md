# javascript_test_2

 Backend developper command line tool
 
 This small code snipet is a tool that help your nodejs server to find out 
 which secret key is linked to which api endpoint (rest).
 
 Try to execute the script with one or more parameter : node index.js param1 param2...
 You will use data.js as model
 The output should be : the matching secret key(s) or the string 'Error'
 
 Bonus 1 : the script output should be the same if we change patterns/key order 
 in data.js
 
 Bonus 2 : Sometimes user inputs mistakes, if the script does not find any 
 matching pattern, write a function that will check and propose the closest 
 maching pattern if you can find one (tolérance 1 char difference)
 
 example of output : "Endpoint not found, did you mean .... ?"


