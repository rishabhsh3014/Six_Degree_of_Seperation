# Six Degree of Seperation
Six degrees of separation is the idea that all people are six or fewer social connections away from each other. As a result, a chain of "friend of a friend" statements can be made to connect any two people in a maximum of six steps. It is also known as the six handshakes rule.
This is a React App that helps you find the degree of separation between any two people. 

In the app... 
1. You are able to add people. 
2. You are able to add types of relationships (for the simplicity, only one relation which is friend is used here). 
3. You should be able to set the relationships between two people. (Eg. Raj is a friend of Sunny) 

Once you have inserted all the data, if you select any two people, you can see the degrees of separation between them.

For example, if you have the following relationships added into your system... 

1. Sameer is a Friend of Aayushi 
2. Aayushi is a Friend of Bhaskar 
3. Sameer is a Friend of Kamalnath Sharma 
4. Kamalnath Sharma is a Friend of Shanti Kumar Saha
5. Shanti Kumar Saha is a Friend of Bhaskar 


If you select two people, let’s say Sameer and Bhaskar, the application should will the degree of separation as follows. 

1. Sameer > Aayushi > Bhaskar 
2. Sameet > Kamalnath Sharma > Shanti Kumar Saha > Bhaskar 

Screenshot of App:
[Home Page(Add People)](/screenshots/home.png)
[Add Relationship](/screenshots/add_rel.png)
[Check Relationship](/screenshots/check_conn.png)

