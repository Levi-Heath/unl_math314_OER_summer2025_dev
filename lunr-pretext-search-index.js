var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This text is based on Anna Davis's and Paul Zachlin's Linear Algebra: An Interactive Introduction , which is freely available online via this link .  "
},
{
  "id": "Section-Introduction-to-Systems-of-Linear-Equations",
  "level": "1",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Systems of Linear Equations",
  "body": " Introduction to Systems of Linear Equations  You are probably familiar with the concept of a system of linear equations and with some methods for solving such systems. In this section, we will look at the algebra and geometry of finding and interpreting solutions of systems of linear equations. We will start with two-variable and three-variable systems, then move on to systems involving more variables.   Algebra of Linear Systems  When you were first introduced to systems of equations, you learned to solve for one variable in terms of the other(s), then substitute. Here, we will introduce a systematic method, an algorithm, to solve systems of linear equations. This alternative method, called Gaussian elimination , involves adding multiples of one equation to another equation in order to eliminate one of the variables. This method will form the foundation for an algorithm we will develop for solving linear systems and performing other computations related to systems. Let's explore this in .   This problem formalizes what you may already know (perhaps under a different name) about elementary row operations as means of solving systems of linear equations. Consider the system We will begin by adding twice the first row to the second row, and replacing the second row with the sum.  We choose this row operation because the resulting equation has a zero coefficient for . Next, we make the coefficient of equal to 1 by multiplying both sides of the second equation by .  We now know . Our next goal is to determine by eliminating from the first equation. To this end, we subtract twice the second row from the first row and replace the first row with the difference.  Next we multiply both sides of the first equation by .  Finally, we can switch the order of equations in order to display in the top row.  This solution can be written as an ordered pair .   In we introduced elementary row operations and the notation associated with them. We now define these formally.   Elementary Row Operations   The following three operations performed on a linear system are called elementary row operations .   Switching the order of equations (rows) and :     Multiplying both sides of equation (row) by the same non-zero constant, , and replacing equation with the result:     Adding times equation (row) to equation (row) , and replacing equation with the result:        As we applied elementary row operations to the system in , the system changed, but you can check that the six systems in the exploration all have the same solution: . We say two systems are equivalent if they have exactly the same solutions. So the six systems are equivalent.  Applying elementary row operations always produces an equivalent system; we will show this in at the end of this section. So we can use a sequence of elementary row operations to find, step-by-step, simpler and simpler equivalent systems.  Next, we use the language of elementary row operations to solve a larger systems of equations.    Solve the system of equations using elementary row operations.   It may be daunting to think about how to begin. But keep in mind the desired end-result. What we want to do is to use elementary row operations to transform the given system into something like this     We will accomplish this by using a convenient variable in one row to ``wipe out\" this variable from the other two rows. For example, we can use in the third equation to wipe out in the first equation and in the second equation. To do this, multiply the third row by and add it to the top row, then multiply the third row by and add it to the second row. We now have: In the previous step was a convenient variable to use because the coefficient in front of was 1. We no longer have a variable with coefficient 1. We could create a coefficient of 1 using division, but that would lead to fractions, making computations cumbersome. Instead, we will subtract twice the second row from the first row. This gives us: Next we add seven times the first row to the second row, and subtract four times the first row from the third row. Now we divide both sides of the second row by . Adding times the second row to the first row and subtracting times the second row from the third row gives us Finally, rearranging the rows gives us  Thus the system has a unique solution .    At this point you may be wondering whether it will always be possible to take a system of three equations and three unknowns and use elementary row operations to transform it to a system of the form The short answer to this question is NO. The existence of an equivalent system of this form implies that the original system has exactly one solution, namely . However, it is possible for a system to have no solutions or to have infinitely many solutions. We will study these different possibilities from an algebraic perspective in subsequent sections. For now, we will attempt to gain insight into existence and uniqueness of solutions through geometry.    Augmented Matrix Notation  It is time consuming to rewrite each equation, with all variable names and plus signs, after each row operation. So let's find a more efficient method for performing elementary row operations.  Recall that the following three operations performed on a linear system are called elementary row operations    Switching the order of two equations    Multiplying both sides of an equation by the same non-zero constant    Adding a multiple of one equation to another       The linear system in this Exploration comes from Jim Hefferon's Linear Algebra .  Consider the linear system Our goal is to use elementary row operations to transform this system into an equivalent system of the form We have to keep in mind that given an arbitrary system, an equivalent system of this form may not exist (we will talk a lot more about this later). However, it does exist in this case, and we would like to find a more efficient way of getting to it than having to write and rewrite our equations at each step.    We start by subtracting twice row 1 from row 2. ( ) Next, we add row 3 to row 1. ( ) Subtract twice row 2 from row 4. ( ) Divide row 4 by . ( ) We will do three operations in one step.    We now exchange rows 2 and 3. ( ) If we drop all of the zero terms, we have: Now we see that is the solution.  Observe that throughout the entire process, variables , , and remained in place; only the coefficients in front of the variables and the entries on the right changed. Let's try to recreate this process without writing down the variables. We can capture the original system in as follows: The side to the left of the vertical bar is called the coefficient matrix , while the side to the right of the bar is a vector that consists of constants on the right side of the system. The coefficient matrix, together with the vector, is called an augmented matrix .  We can capture all of the elementary row operations we performed earlier as follows:    The last augmented matrix corresponds to systems in and , and we can easily see the solution.    We will regularly use the language of coefficient matrix and augmented matrix introduced in this exploration.   Consider the system Recall that in we converted the given system to an augmented matrix form, then performed elementary row operations until we arrived at a ``convenient\" form. We then converted the ``convenient\" augmented matrix back to a system of equations and identified a solution.  The term ``convenient\" is open to interpretation. In this problem we will explore two ``convenient\" forms. Each one will lead to a definition. The augmented matrix in has the same convenient form as the one in . This augmented matrix corresponds to the system This gives us the solution .  While the augmented matrix in was certainly ``convenient\", we could have converted back to the equation format a little earlier. Let's take a look at the augmented matrix in . Converting to a system of equations gives us Substituting into the second equation and solving for gives us Now substituting and into the first equation results in This process is called back substitution and it produces the same solution as we obtained earlier.   Observe that the coefficient matrices in and have the same format: 1's along the diagonal, zeros above and below the 1's. The other ``convenient\" format, exhibited by the coefficient matrix in , also has zeros below the diagonal, but not all of the diagonal entries are 1's and some of the entries above the diagonal are not zero. Each of these formats gives rise to a definition. These definitions are the topic of the next section.    Geometry of Linear Systems in Two Variables   offers an example of a linear system of two equations and two unknowns (variables) with a unique solution. Geometrically, the graph of each equation is a line in . The point is a solution to both equations, so it must lie on both lines. The graph below shows the two lines intersecting at .      Given a system of two equations with two unknowns, there are three possible geometric outcomes.   First, the graphs of the two equations intersect at a point. If this is the case, the system has exactly one solution. We say that the system is consistent and has a unique solution .        Second, the two lines may have no points in common. If this is the case, the system has no solutions. We say that the system is inconsistent .        Finally, the two lines may coincide. In this case, there are infinitely many points that satisfy both equations simultaneously. We say that the system is consistent and has infinitely many solutions.         The following examples are in-depth full runs on linear systems of equations.    Solve the system of equations and interpret your results geometrically.     We will use elementary row operations. Adding twice the first equation to the second equation gives us This is where we run into a problem: there are no values of and that satisfy the second equation. We conclude that the system is inconsistent. Plotting the two lines in the same coordinate plane shows that the two lines are parallel.          Solve the system of equations and interpret your results geometrically.     To eliminate from the second equation, we subtract one quarter of the first equation from the second. This gives us Unlike the situation in , any combination of and satisfies the second equation. So, any ordered pair that satisfies the first equation will satisfy the second equation. Thus, the solution set for this system is the same as the set of all solutions of .  When we plot the two equations of the original system, we find that the two lines coincide.        Given a linear system in two variables and more than two equations, we have a variety of geometric possibilities. In terms of the number of solutions, there are three possibilities.   First, it is possible for the graphs of all equations in the system to intersect at a single point, giving us a unique solution.        Second, it is possible for the graphs to have no points common to all of them. If this is the case, the system is inconsistent.              Finally, it is possible for all of the lines to coincide, giving us infinitely many solutions.       Geometry of Linear Systems in Three Variables  In , we solved the following linear system of three equations and three unknowns We found that the system has a unique solution . The graph of each equation is a plane. The three planes intersect at a single point, as shown in the figure.      Given a linear system of three equations in three variables, there are three ways in which the system can be consistent.   First, the three planes could intersect at a single point, giving us a unique solution.        Second, the three planes can intersect in a line, forming a paddle-wheel shape. In this case, every point along the line of intersection is a solution to the system, giving us infinitely many solutions.        Finally, the three planes can coincide. If this is the case, there are infinitely many solutions.       There are four ways for a system to be inconsistent. They are depicted below.                      General Systems of Linear Equations  Here we collect together all of the definitions from this section, written as generally as possible.    A linear equation in variables is an equation that can be written in the form where and are constants. We call the coefficient of in the equation, and we call the constant term .    An -tuple of numbers is a solution to the equation provided that, when we set equal to and so on, the equation becomes a true statement.  The set of all -tuples that are solutions to a given equation is called the graph of the equation. The graph of a linear equation in two variables is a line in . The graph of a linear equation in three variables is a plane in . In , for , we say that the graph of a linear equation is a hyperplane . A hyperplane cannot be visualized, but we can still talk about intersections of hyperplanes and their other attributes in algebraic terms.  A linear system of equations and unknowns is typically written as follows   A solution to a system of linear equations in variables is an -tuple that satisfies every equation in the system. All solutions to a system of equations, taken together, form its solution set . We say that a system of equations is consistent if it has at least one solution, and inconsistent if it has no solutions. If a system is consistent, we say that it has a unique solution if there is exactly one solution, or infinitely many solutions if there are infinitely many solutions.    Two systems of linear equations are said to be equivalent if they have the same solution set.    The augmented matrix of a linear system of equations and unknowns is The array to the left of the vertical bar is called the coefficient matrix of the linear system and is often given a capital letter name, like . The vertical array to the right of the bar is called a constant vector . The dimension of a matrix with rows and columns is , read by .   We will sometimes use the following notation to represent an augmented matrix.   The same elementary row operations that we perform on a system of equations can be performed on the corresponding augmented matrix, or any matrix for that matter. We have three elementary row operations , namely   Switching the order of two rows\/equations    Multiplying a row, or both sides of an equation, by the same non-zero constant    Adding a multiple of one row\/equation to another     If a matrix can be obtained from another matrix by means of elementary row operations, we say that the two matrices are row-equivalent .    Given a system of linear equations, any of the three elementary row operations performed on the system produces an equivalent system.    Clearly, the order of equations does not affect the solution set, so produces an equivalent system. Next, you learned years ago that multiplying both sides of an equation by a non-zero constant does not change its solution set, which establishes that produces an equivalent system. To see that produces an equivalent system, note that if we add a multiple of an equation to another equation in the system, we are adding the same thing to both sides, which does not change the solution set of that equation, nor of the system.        Give a graphical illustration of each of the following scenarios for a system of three equations and two unknowns:   The system of three equations is inconsistent, but a combination of any two of the three equations forms a consistent system.    The system is consistent and has a unique solution.    The system is consistent and has infinitely many solutions.    The system is inconsistent and no two equations form a consistent system.         Solve each system of linear equations or demonstrate that a solution does not exist, and interpret your results geometrically.                                     Consider the following system of equations.      Find all possible values of k such that this system has no solution.           Find all possible values of such that this system has infinitely many solutions.            Why is there a non-zero provision in of ? Why is there not a non-zero provision in ?      Suppose the following system was obtained from system by adding twice the second row of to the first row. Find system .           The following figures show a geometric depiction of two equivalent systems. (The systems are equivalent because they have the same solution set.) Can the first system be transformed into the second system by elementary row operations? If so, how?              Begin by carrying the first system to Then carry this system to the second system. (If you can figure out how to carry the second system to this one, you should be able to reverse the process.)      Suppose that we have two solutions, call them and to the following system:     Show that is a solution to the system     Show that for any number $t$, is a solution to the system         Consider the system of equations Show that if is a solution to this system, and if we apply elementary row operation to the system, then will be a solution to the new system of equations.      Demonstrate that elementary row operations are reversible by answering the following questions. Be specific about the elementary row operation that you would use.   Suppose we obtained system (B) from system (A) by swapping two equations. How would we obtain system (A) from system (B)?    Suppose we obtained system (B) from system (A) by multiplying one of the equations of (A) by a non-zero constant . How would we obtain system (A) from system (B)?    Suppose we obtained system (B) from system (A) by adding a multiple of one of the equations of (A) to another. How would we obtain system (A) from system (B)?        "
},
{
  "id": "Section-Introduction-to-Systems-of-Linear-Equations-2",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Section-Introduction-to-Systems-of-Linear-Equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system of linear equations "
},
{
  "id": "Subsection-Algebra-of-Linear-Systems-2",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-Algebra-of-Linear-Systems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination "
},
{
  "id": "init-systwoeqs1",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#init-systwoeqs1",
  "type": "Exploration",
  "number": "1.1.1",
  "title": "",
  "body": " This problem formalizes what you may already know (perhaps under a different name) about elementary row operations as means of solving systems of linear equations. Consider the system We will begin by adding twice the first row to the second row, and replacing the second row with the sum.  We choose this row operation because the resulting equation has a zero coefficient for . Next, we make the coefficient of equal to 1 by multiplying both sides of the second equation by .  We now know . Our next goal is to determine by eliminating from the first equation. To this end, we subtract twice the second row from the first row and replace the first row with the difference.  Next we multiply both sides of the first equation by .  Finally, we can switch the order of equations in order to display in the top row.  This solution can be written as an ordered pair .  "
},
{
  "id": "def-elemrowops",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#def-elemrowops",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Elementary Row Operations.",
  "body": " Elementary Row Operations   The following three operations performed on a linear system are called elementary row operations .   Switching the order of equations (rows) and :     Multiplying both sides of equation (row) by the same non-zero constant, , and replacing equation with the result:     Adding times equation (row) to equation (row) , and replacing equation with the result:       "
},
{
  "id": "Subsection-Algebra-of-Linear-Systems-6",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-Algebra-of-Linear-Systems-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "ex-threeeqthreevars1",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#ex-threeeqthreevars1",
  "type": "Exploration",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve the system of equations using elementary row operations.   It may be daunting to think about how to begin. But keep in mind the desired end-result. What we want to do is to use elementary row operations to transform the given system into something like this     We will accomplish this by using a convenient variable in one row to ``wipe out\" this variable from the other two rows. For example, we can use in the third equation to wipe out in the first equation and in the second equation. To do this, multiply the third row by and add it to the top row, then multiply the third row by and add it to the second row. We now have: In the previous step was a convenient variable to use because the coefficient in front of was 1. We no longer have a variable with coefficient 1. We could create a coefficient of 1 using division, but that would lead to fractions, making computations cumbersome. Instead, we will subtract twice the second row from the first row. This gives us: Next we add seven times the first row to the second row, and subtract four times the first row from the third row. Now we divide both sides of the second row by . Adding times the second row to the first row and subtracting times the second row from the third row gives us Finally, rearranging the rows gives us  Thus the system has a unique solution .   "
},
{
  "id": "Subsection-Augmented-Matrix-Notation-3",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-Augmented-Matrix-Notation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "init-augmentedmatrixex",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#init-augmentedmatrixex",
  "type": "Exploration",
  "number": "1.1.3",
  "title": "",
  "body": "  The linear system in this Exploration comes from Jim Hefferon's Linear Algebra .  Consider the linear system Our goal is to use elementary row operations to transform this system into an equivalent system of the form We have to keep in mind that given an arbitrary system, an equivalent system of this form may not exist (we will talk a lot more about this later). However, it does exist in this case, and we would like to find a more efficient way of getting to it than having to write and rewrite our equations at each step.    We start by subtracting twice row 1 from row 2. ( ) Next, we add row 3 to row 1. ( ) Subtract twice row 2 from row 4. ( ) Divide row 4 by . ( ) We will do three operations in one step.    We now exchange rows 2 and 3. ( ) If we drop all of the zero terms, we have: Now we see that is the solution.  Observe that throughout the entire process, variables , , and remained in place; only the coefficients in front of the variables and the entries on the right changed. Let's try to recreate this process without writing down the variables. We can capture the original system in as follows: The side to the left of the vertical bar is called the coefficient matrix , while the side to the right of the bar is a vector that consists of constants on the right side of the system. The coefficient matrix, together with the vector, is called an augmented matrix .  We can capture all of the elementary row operations we performed earlier as follows:    The last augmented matrix corresponds to systems in and , and we can easily see the solution.   "
},
{
  "id": "init-backsub",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#init-backsub",
  "type": "Exploration",
  "number": "1.1.4",
  "title": "",
  "body": " Consider the system Recall that in we converted the given system to an augmented matrix form, then performed elementary row operations until we arrived at a ``convenient\" form. We then converted the ``convenient\" augmented matrix back to a system of equations and identified a solution.  The term ``convenient\" is open to interpretation. In this problem we will explore two ``convenient\" forms. Each one will lead to a definition. The augmented matrix in has the same convenient form as the one in . This augmented matrix corresponds to the system This gives us the solution .  While the augmented matrix in was certainly ``convenient\", we could have converted back to the equation format a little earlier. Let's take a look at the augmented matrix in . Converting to a system of equations gives us Substituting into the second equation and solving for gives us Now substituting and into the first equation results in This process is called back substitution and it produces the same solution as we obtained earlier.  "
},
{
  "id": "Subsection-Geometry-of-Linear-Systems-in-Two-Variables-4",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-Geometry-of-Linear-Systems-in-Two-Variables-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent unique solution inconsistent "
},
{
  "id": "ex-systwoeqs2",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#ex-systwoeqs2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve the system of equations and interpret your results geometrically.     We will use elementary row operations. Adding twice the first equation to the second equation gives us This is where we run into a problem: there are no values of and that satisfy the second equation. We conclude that the system is inconsistent. Plotting the two lines in the same coordinate plane shows that the two lines are parallel.       "
},
{
  "id": "ex-systwoeqs3infmany",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#ex-systwoeqs3infmany",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Solve the system of equations and interpret your results geometrically.     To eliminate from the second equation, we subtract one quarter of the first equation from the second. This gives us Unlike the situation in , any combination of and satisfies the second equation. So, any ordered pair that satisfies the first equation will satisfy the second equation. Thus, the solution set for this system is the same as the set of all solutions of .  When we plot the two equations of the original system, we find that the two lines coincide.       "
},
{
  "id": "def-lineq",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#def-lineq",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A linear equation in variables is an equation that can be written in the form where and are constants. We call the coefficient of in the equation, and we call the constant term .   "
},
{
  "id": "Subsection-General-Systems-of-Linear-Equations-4",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-General-Systems-of-Linear-Equations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "Subsection-General-Systems-of-Linear-Equations-5",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-General-Systems-of-Linear-Equations-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph hyperplane "
},
{
  "id": "Subsection-General-Systems-of-Linear-Equations-7",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-General-Systems-of-Linear-Equations-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution to a system solution set consistent inconsistent unique solution infinitely many solutions "
},
{
  "id": "def-equivsystems",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#def-equivsystems",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  Two systems of linear equations are said to be equivalent if they have the same solution set.   "
},
{
  "id": "Subsection-General-Systems-of-Linear-Equations-9",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-General-Systems-of-Linear-Equations-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix coefficient matrix constant vector dimension of a matrix "
},
{
  "id": "Subsection-General-Systems-of-Linear-Equations-11",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-General-Systems-of-Linear-Equations-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "Subsection-General-Systems-of-Linear-Equations-12",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#Subsection-General-Systems-of-Linear-Equations-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row-equivalent "
},
{
  "id": "th-elemRowOpsEquivSys",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#th-elemRowOpsEquivSys",
  "type": "Theorem",
  "number": "1.1.6",
  "title": "",
  "body": "  Given a system of linear equations, any of the three elementary row operations performed on the system produces an equivalent system.    Clearly, the order of equations does not affect the solution set, so produces an equivalent system. Next, you learned years ago that multiplying both sides of an equation by a non-zero constant does not change its solution set, which establishes that produces an equivalent system. To see that produces an equivalent system, note that if we add a multiple of an equation to another equation in the system, we are adding the same thing to both sides, which does not change the solution set of that equation, nor of the system.   "
},
{
  "id": "prob-sysgraphillustration",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-sysgraphillustration",
  "type": "Exercise",
  "number": "1.1.6.1",
  "title": "",
  "body": "  Give a graphical illustration of each of the following scenarios for a system of three equations and two unknowns:   The system of three equations is inconsistent, but a combination of any two of the three equations forms a consistent system.    The system is consistent and has a unique solution.    The system is consistent and has infinitely many solutions.    The system is inconsistent and no two equations form a consistent system.      "
},
{
  "id": "prob-solvesys1",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-solvesys1",
  "type": "Exercise",
  "number": "1.1.6.2",
  "title": "",
  "body": "           "
},
{
  "id": "prob-solvesys2",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-solvesys2",
  "type": "Exercise",
  "number": "1.1.6.3",
  "title": "",
  "body": "      "
},
{
  "id": "prob-solvesys3",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-solvesys3",
  "type": "Exercise",
  "number": "1.1.6.4",
  "title": "",
  "body": "           "
},
{
  "id": "prob-sysnosolfindk",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-sysnosolfindk",
  "type": "Exercise",
  "number": "1.1.6.5",
  "title": "",
  "body": "  Find all possible values of k such that this system has no solution.        "
},
{
  "id": "prob-sysinfmanysolfindk",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-sysinfmanysolfindk",
  "type": "Exercise",
  "number": "1.1.6.6",
  "title": "",
  "body": "  Find all possible values of such that this system has infinitely many solutions.        "
},
{
  "id": "prob-nonzeroprovision",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-nonzeroprovision",
  "type": "Exercise",
  "number": "1.1.6.7",
  "title": "",
  "body": "  Why is there a non-zero provision in of ? Why is there not a non-zero provision in ?   "
},
{
  "id": "prob-reverseelemrowops",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-reverseelemrowops",
  "type": "Exercise",
  "number": "1.1.6.8",
  "title": "",
  "body": "  Suppose the following system was obtained from system by adding twice the second row of to the first row. Find system .        "
},
{
  "id": "prob-reverserowopsgeometry",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-reverserowopsgeometry",
  "type": "Exercise",
  "number": "1.1.6.9",
  "title": "",
  "body": "  The following figures show a geometric depiction of two equivalent systems. (The systems are equivalent because they have the same solution set.) Can the first system be transformed into the second system by elementary row operations? If so, how?              Begin by carrying the first system to Then carry this system to the second system. (If you can figure out how to carry the second system to this one, you should be able to reverse the process.)   "
},
{
  "id": "prob-prob-equivsystems1",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-prob-equivsystems1",
  "type": "Exercise",
  "number": "1.1.6.10",
  "title": "",
  "body": "  Suppose that we have two solutions, call them and to the following system:     Show that is a solution to the system     Show that for any number $t$, is a solution to the system      "
},
{
  "id": "prob-prob-equivsystems1",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-prob-equivsystems1",
  "type": "Exercise",
  "number": "1.1.6.11",
  "title": "",
  "body": "  Consider the system of equations Show that if is a solution to this system, and if we apply elementary row operation to the system, then will be a solution to the new system of equations.   "
},
{
  "id": "prob-elemrowopsreverse",
  "level": "2",
  "url": "Section-Introduction-to-Systems-of-Linear-Equations.html#prob-elemrowopsreverse",
  "type": "Exercise",
  "number": "1.1.6.12",
  "title": "",
  "body": "  Demonstrate that elementary row operations are reversible by answering the following questions. Be specific about the elementary row operation that you would use.   Suppose we obtained system (B) from system (A) by swapping two equations. How would we obtain system (A) from system (B)?    Suppose we obtained system (B) from system (A) by multiplying one of the equations of (A) by a non-zero constant . How would we obtain system (A) from system (B)?    Suppose we obtained system (B) from system (A) by adding a multiple of one of the equations of (A) to another. How would we obtain system (A) from system (B)?      "
},
{
  "id": "Section-Row-Echelon-Forms",
  "level": "1",
  "url": "Section-Row-Echelon-Forms.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Echelon Forms",
  "body": " Row Echelon Forms  In the last section, we admitted that systems of linear equations may not have a unique solution, but we did not explain what to do about it. Now we will cover all possible solutions of a system, including systems with no solution at all. In the first subsection, we work out what a fully reduced system should look like and then, in the second subsection, we describe how to use Gaussian elimination to get this form. Finally, the last subsection describes the solution set of the fully reduced matrix when the solution is not unique or when there is no solution.   Row Echelon Form and Reduced Row Echelon Form  Before looking for a reduced form , we need a name for for the first non-zero entry in a row of a matrix. Using this name, we can then define the first special form for a matrix.    The first non-zero entry in a row of a matrix (when read from left to right) is called the leading entry . When the leading entry is 1, we call it a leading 1 .     Row Echelon Form   A matrix is said to be in row echelon form if:   All entries below each leading entry are 0.    Each leading entry is in a column to the right of the leading entries in the rows above it.    All rows of zeros, if there are any, are located below non-zero rows.       The term row echelon form can be applied to matrices whether or not they are augmented matrices (matrices with the vertical bar). For example, both the coefficient matrix and the augmented matrix in are in row echelon form. Note that the leading entries form a staircase pattern. All entries below the leading entries are zero, but the entries above the leading entries are not all zero.  Below are two more examples of matrices in row echelon form. The leading entries of each matrix are boxed.   The difference between the coefficient matrix in and the coefficient matrix in is that the leading entries of the matrix in are all 1's, and the matrix has zeros above each leading 1. This motivates our next definition.   Reduced Row Echelon Form   A matrix that is already in row echelon form is said to be in reduced row echelon form if:   Each leading entry is     All entries above and below each leading are        The following two matrices are in reduced row echelon form . Note that there are 's below and above each leading . When solving linear systems using the augmented matrix notation, our goal will be to transform the augmented matrix into a row echelon or reduced row echelon form. The reduced row echelon form of is denoted by . As we transform the augmented matrix to its reduced row echelon form, the coefficient matrix (the matrix to the left of the bar) also gets transformed to its reduced row echelon form, .  Perhaps you may be asking some questions. Can every augmented matrix be reduced to a row echelon or reduced row echelon form? If so, is the row echelon or reduced row echelon form unique? We will answer the second question in this subsection and the first question in the next subsection.   Solve the following system of equations. We create an augmented matrix corresponding to the system and apply row operations until the matrix is in row echelon form.  Note that the elementary row operations that lead to were not prescribed. We may employ row-operations in a different manner and obtain a different matrix in row echelon form. For example, suppose for some reason we had begun by switching the first and third rows. Next we would reduce this matrix to row echelon form, perhaps in this way:  The augmented matrices in and are clearly not the same, but both are in row echelon form. If we write the systems of equations corresponding to and , we can employ back substitution to solve them. The matrix in corresponds to The matrix in corresponds to Because both systems are equivalent to the original system, it is not surprising that back substitution yields the same solution for both systems.        It is clear from that a row echelon form corresponding to a matrix is not unique. But what about the reduced row echelon form?   In this problem we revisit the system Following the steps we took to get , but taking the process a little further, we get the reduced row echelon form.   Do you think it is possible to start with and obtain the same reduced row echelon form? Try to justify your response. If possible, find the elementary row operations that take to the reduced row echelon form in .   You will be asked to fill in the elementary row operations in .   Our observations in are summarized in the following diagram.      We observed that a row echelon form associated with a matrix is not unique. In contrast, we also saw how different sequences of elementary row operations lead to the same solution set and the same reduced row echelon form. It turns out that the reduced row echelon form of a matrix is unique.    The reduced row echelon form of a matrix is unique.    A proof of this result can be found in .  The reduced row echelon form of a matrix is an instance of a row echelon form of the matrix. While a given matrix may have multiple row echelon forms, all row echelon forms will share one characteristic: the number of nonzero rows in a row echelon form of the given matrix will be the same. We will prove this result in .    Gaussian and Gauss-Jordan Elimination   Gaussian Elimination   The process of using the elementary row operations on a matrix to transform it into row echelon form is called Gaussian Elimination .    As we saw in the previous section, it is possible to follow different sequences of row operations to arrive at various row echelon forms. However, it was not clear whether it is always possible to find a row echelon form. The following algorithm takes any matrix (or augmented matrix) and transforms it into row echelon form:   Gaussian Algorithm   Let be an matrix. Set initially.   Step 1. If consists entirely of zeros, stop; is already in row echelon form.    Step 2. Otherwise, find the first column from the left containing a nonzero entry in row or below row . This column will be called a pivot column . Go down the pivot column, beginning with row . Pick the topmost nonzero entry and call it . If is not in row , switch rows so that moves to row . Now is the leading entry in its row. We will also refer to as a pivot .    Step 3. By subtracting multiples of the row containing from rows below it, make each entry below zero.    Step 4. Set . If then stop; is in row echelon form.   Repeat steps 1--4 on the matrix consisting of the remaining rows. When the process stops, will be in row echelon form.    Gaussian Algorithm guarantees that every matrix will have a row echelon form.    Use the Gaussian Algorithm to find a row echelon form of if     Following Step 2, we choose the first entry, , as our pivot. We then perform step 3, using the top row to get zeros in all entries below the . The first row is now complete, and we repeat the process on the rows below it. We identify as a pivot entry in the second column and move the row containing to be directly below the first completed row. We then use the to make each entry below the a zero. This time the algorithm terminates since row 3 and row 4 are zero rows.     Gauss-Jordan Elimination   The process of using the elementary row operations on a matrix to transform it into reduced row echelon form is called Gauss-Jordan elimination .    Given a matrix in row echelon form, it is easy to bring it the reduced row echelon form. For example, continuing with , we can start where we left off and compute . From our earlier computations we have: Now we create leading and use them to to wipe out all non-zero entries above them. The following modification to the Gaussian Algorithm produces the reduced row echelon form of a matrix. This algorithm guarantees the existence of the reduced row echelon form.   Gauss-Jordan Algorithm   Let be an matrix. Follow the steps of the Gaussian Algorithm but modify Step 2 to create leading by multiplying the row containing by . When the Gaussian Algorithm terminates, subtract multiples of the rows containing leading from the rows above to make all entries above the pivots zero.    The algorithm is an essential tool in linear algebra. An fully detailed example is provided below.    Use the Gauss-Jordan Algorithm to solve the system      We convert the reduced row echelon form to a system of equations and find the solution. The last equation contributes nothing to the system so we omit writing it down. The solution is     The Gauss-Jordan Algorithm guarantees the existence of the reduced row echelon form for all matrices. When doing computations by hand, however, the algorithm may not always be the optimal method of finding a row echelon form or the reduced row echelon form because the procedure often leads to fractions early in the process. The following video shows how to arrive at the same reduced row echelon form for the matrix in without doing any fraction arithmetic. You will see that we still employ row operations, but in a different order.   The video highlights the fact that regardless of what sequence of elementary row operations we take to arrive at the reduced row echelon form, the end result is the same.    Solutions to Systems of Equations  We now have an efficient and algorithmic way to solve systems of linear equations by row reducing a corresponding augmented matrix to its reduced row echelon form. Now we turn our attention to exploring how to use the reduced row echelon form to find solutions to systems of equations. Specifically, when there are infinitely many solutions or no solutions.   Let's solve the system of equations below.   We begin by rewriting the system in the augmented matrix form. Our goal is to convert this matrix to its reduced row echelon form by means of elementary row operations. To do this, we will proceed from left to right and use leading entries to wipe out all entries above and below them.   Our final matrix may not be quite as nice as the one in , but it is in reduced row echelon form. Our next step is to convert our augmented matrix back to a system of equations. We have: We will rewrite the system as follows: Now we see that there are infinitely many solutions because we can assign any value to , then compute , and to obtain a solution to the system. For example, let , then , and , so is a solution. If we let , then , and , so is also a solution. To emphasize that we can let be any real number, we call it a free variable .  We write the solution set to this system as the following: This describes all the points in of the form    Observe that in , we called variable a free variable because it can be any real number. Notice that the variables , and correspond to the leading in the reduced row echelon. We say that , and are the leading variables . The free variable is not a leading variable. In fact, free variables always correspond to a column in the reduced row echelon form of the augmented matrix which does not have a leading 1. This gives us a method for identifying free variables.    Solve the system of equations.     We rewrite the system in the augmented matrix form and transform it to reduced row echelon form. We leave the details of the elementary row operations to the reader and state the final result. The augmented column does not have a leading 1 in the reduced row echelon form, so we know the system is consistent. To write down the solution, we note that and are leading variables and is a free variable. Converting the augmented matrix back to a system of equations we get To complete the problem, we solve for the leading variables in terms of the free variables. Since the last equation contributes nothing, we will remove it and rewrite the system as Hence, the solutions to this system are points of the form We can also write the solutions as     We now can solve and write down the solution to any consistent system using the reduced row echelon form of an augmented matrix. We can also use row echelon forms to determine if a system is inconsistent.   In this exploration, we will solve the system of equations below or determine that the system is inconsistent.   We rewrite the system in augmented matrix form and transform it to reduced row echelon form. We leave the details of the elementary row operations to the reader and state the final result. Converting back to a system of linear equations, we get The last equation in this system clearly has no solutions. We conclude that this system (and the original system) is inconsistent.    Note that the last row of the reduced row echelon form in looks like this This row corresponds to the equation which clearly has no solutions.  In general, if the reduced row echelon form of the augmented matrix contains a row we can conclude that the system is inconsistent.    So long as the reduced row echelon form of an augmented matrix does not contain a leading 1 in the last column, the system is consistent. Furthermore, if the reduced row echelon form has a leading 1 in every column except the last column, then the system has a unique solution. If the reduced row echelon form has a leading 1 in the last column, but not in every other column, then the system has infinitely many solutions.       Determine whether each augmented matrix shown below is in reduced row echelon form.            Yes      No               Yes      No               Yes      No               Yes      No               Yes      No         Show that applying Gauss-Jordan elimination to the matrix in yields the same reduced row-echelon form as the matrix we obtained in .      Follow the indicated steps of the Gauss-Jordan algorithm to transform the matrix to its reduced row-echelon form.                                                                                                                   The following reduction steps do not follow the algorithm but are easier for a human to carry out because they use fewer fractions. Follow the indicated steps to transform the matrix to its reduced row-echelon form. Steps will unfold automatically as you enter correct answers.                                                       and                                    Exchange rows.            Fill in the steps that lead to the reduced row echelon form in .      Fill in the steps that lead to the reduced row echelon form in .      Suppose a system of equations has the following reduced row echelon form What can you say about the system?      The system is inconsistent      The system has infinitely many solutions      The system has a unique solution      We would have to examine the original system to make the final determination        Solve each system of equations.                              Suppose a linear system has equations and unknowns. Which of the following is NOT a possibility?      The system has a unique solution      The system has no solutions      The system has infinitely many solutions         W. Keith Nicholson, Linear Algebra with Applications , Lyryx 2018, Open Edition, p 15-17.    Thomas Yuster, The Reduced Row Echelon Form of a Matrix is Unique: a Simple Proof, Mathematics Magazine, vol. 57, no. 2 (Mar. 1984), pp. 93-94.    "
},
{
  "id": "def-leadentry",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#def-leadentry",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  The first non-zero entry in a row of a matrix (when read from left to right) is called the leading entry . When the leading entry is 1, we call it a leading 1 .   "
},
{
  "id": "def-ref",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#def-ref",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Row Echelon Form.",
  "body": " Row Echelon Form   A matrix is said to be in row echelon form if:   All entries below each leading entry are 0.    Each leading entry is in a column to the right of the leading entries in the rows above it.    All rows of zeros, if there are any, are located below non-zero rows.      "
},
{
  "id": "def-rref",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#def-rref",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Reduced Row Echelon Form.",
  "body": " Reduced Row Echelon Form   A matrix that is already in row echelon form is said to be in reduced row echelon form if:   Each leading entry is     All entries above and below each leading are       "
},
{
  "id": "Subsection-Row-Echelon-and-Reduced-Row-Echelon-Forms-9",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#Subsection-Row-Echelon-and-Reduced-Row-Echelon-Forms-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduced row echelon form "
},
{
  "id": "init-gaussianelim1",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#init-gaussianelim1",
  "type": "Exploration",
  "number": "1.2.1",
  "title": "",
  "body": " Solve the following system of equations. We create an augmented matrix corresponding to the system and apply row operations until the matrix is in row echelon form.  Note that the elementary row operations that lead to were not prescribed. We may employ row-operations in a different manner and obtain a different matrix in row echelon form. For example, suppose for some reason we had begun by switching the first and third rows. Next we would reduce this matrix to row echelon form, perhaps in this way:  The augmented matrices in and are clearly not the same, but both are in row echelon form. If we write the systems of equations corresponding to and , we can employ back substitution to solve them. The matrix in corresponds to The matrix in corresponds to Because both systems are equivalent to the original system, it is not surprising that back substitution yields the same solution for both systems.       "
},
{
  "id": "init-gaussianelim2",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#init-gaussianelim2",
  "type": "Exploration",
  "number": "1.2.2",
  "title": "",
  "body": " In this problem we revisit the system Following the steps we took to get , but taking the process a little further, we get the reduced row echelon form.   Do you think it is possible to start with and obtain the same reduced row echelon form? Try to justify your response. If possible, find the elementary row operations that take to the reduced row echelon form in .   You will be asked to fill in the elementary row operations in .  "
},
{
  "id": "th-uniquenessofrref",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#th-uniquenessofrref",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "",
  "body": "  The reduced row echelon form of a matrix is unique.   "
},
{
  "id": "def-GaussianElimination",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#def-GaussianElimination",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Gaussian Elimination.",
  "body": " Gaussian Elimination   The process of using the elementary row operations on a matrix to transform it into row echelon form is called Gaussian Elimination .   "
},
{
  "id": "alg-gaussian",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#alg-gaussian",
  "type": "Algorithm",
  "number": "1.2.6",
  "title": "Gaussian Algorithm.",
  "body": " Gaussian Algorithm   Let be an matrix. Set initially.   Step 1. If consists entirely of zeros, stop; is already in row echelon form.    Step 2. Otherwise, find the first column from the left containing a nonzero entry in row or below row . This column will be called a pivot column . Go down the pivot column, beginning with row . Pick the topmost nonzero entry and call it . If is not in row , switch rows so that moves to row . Now is the leading entry in its row. We will also refer to as a pivot .    Step 3. By subtracting multiples of the row containing from rows below it, make each entry below zero.    Step 4. Set . If then stop; is in row echelon form.   Repeat steps 1--4 on the matrix consisting of the remaining rows. When the process stops, will be in row echelon form.   "
},
{
  "id": "ex-non-augmented",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#ex-non-augmented",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  Use the Gaussian Algorithm to find a row echelon form of if     Following Step 2, we choose the first entry, , as our pivot. We then perform step 3, using the top row to get zeros in all entries below the . The first row is now complete, and we repeat the process on the rows below it. We identify as a pivot entry in the second column and move the row containing to be directly below the first completed row. We then use the to make each entry below the a zero. This time the algorithm terminates since row 3 and row 4 are zero rows.   "
},
{
  "id": "def-GaussJordanElimination",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#def-GaussJordanElimination",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Gauss-Jordan Elimination.",
  "body": " Gauss-Jordan Elimination   The process of using the elementary row operations on a matrix to transform it into reduced row echelon form is called Gauss-Jordan elimination .   "
},
{
  "id": "alg-gauss-jordan",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#alg-gauss-jordan",
  "type": "Algorithm",
  "number": "1.2.9",
  "title": "Gauss-Jordan Algorithm.",
  "body": " Gauss-Jordan Algorithm   Let be an matrix. Follow the steps of the Gaussian Algorithm but modify Step 2 to create leading by multiplying the row containing by . When the Gaussian Algorithm terminates, subtract multiples of the rows containing leading from the rows above to make all entries above the pivots zero.   "
},
{
  "id": "ex-gaussjordanalg",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#ex-gaussjordanalg",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Use the Gauss-Jordan Algorithm to solve the system      We convert the reduced row echelon form to a system of equations and find the solution. The last equation contributes nothing to the system so we omit writing it down. The solution is    "
},
{
  "id": "init-freevar1",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#init-freevar1",
  "type": "Exploration",
  "number": "1.2.3",
  "title": "",
  "body": " Let's solve the system of equations below.   We begin by rewriting the system in the augmented matrix form. Our goal is to convert this matrix to its reduced row echelon form by means of elementary row operations. To do this, we will proceed from left to right and use leading entries to wipe out all entries above and below them.   Our final matrix may not be quite as nice as the one in , but it is in reduced row echelon form. Our next step is to convert our augmented matrix back to a system of equations. We have: We will rewrite the system as follows: Now we see that there are infinitely many solutions because we can assign any value to , then compute , and to obtain a solution to the system. For example, let , then , and , so is a solution. If we let , then , and , so is also a solution. To emphasize that we can let be any real number, we call it a free variable .  We write the solution set to this system as the following: This describes all the points in of the form   "
},
{
  "id": "Subsection-Solutions-to-Systems-of-Equations-4",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#Subsection-Solutions-to-Systems-of-Equations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "free variable leading variables "
},
{
  "id": "ex-rrefinfmanysolutionssys",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#ex-rrefinfmanysolutionssys",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Solve the system of equations.     We rewrite the system in the augmented matrix form and transform it to reduced row echelon form. We leave the details of the elementary row operations to the reader and state the final result. The augmented column does not have a leading 1 in the reduced row echelon form, so we know the system is consistent. To write down the solution, we note that and are leading variables and is a free variable. Converting the augmented matrix back to a system of equations we get To complete the problem, we solve for the leading variables in terms of the free variables. Since the last equation contributes nothing, we will remove it and rewrite the system as Hence, the solutions to this system are points of the form We can also write the solutions as    "
},
{
  "id": "init-nosolutionssys",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#init-nosolutionssys",
  "type": "Exploration",
  "number": "1.2.4",
  "title": "",
  "body": " In this exploration, we will solve the system of equations below or determine that the system is inconsistent.   We rewrite the system in augmented matrix form and transform it to reduced row echelon form. We leave the details of the elementary row operations to the reader and state the final result. Converting back to a system of linear equations, we get The last equation in this system clearly has no solutions. We conclude that this system (and the original system) is inconsistent.  "
},
{
  "id": "ob-inconsistent",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#ob-inconsistent",
  "type": "Observation",
  "number": "1.2.12",
  "title": "",
  "body": " Note that the last row of the reduced row echelon form in looks like this This row corresponds to the equation which clearly has no solutions.  In general, if the reduced row echelon form of the augmented matrix contains a row we can conclude that the system is inconsistent.  "
},
{
  "id": "ob-existence-and-uniqueness",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#ob-existence-and-uniqueness",
  "type": "Observation",
  "number": "1.2.13",
  "title": "",
  "body": " So long as the reduced row echelon form of an augmented matrix does not contain a leading 1 in the last column, the system is consistent. Furthermore, if the reduced row echelon form has a leading 1 in every column except the last column, then the system has a unique solution. If the reduced row echelon form has a leading 1 in the last column, but not in every other column, then the system has infinitely many solutions.  "
},
{
  "id": "prob-rrefmultchoice1",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rrefmultchoice1",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": "         Yes      No     "
},
{
  "id": "prob-rrefmultchoice2",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rrefmultchoice2",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": "         Yes      No     "
},
{
  "id": "prob-rrefmultchoice3",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rrefmultchoice3",
  "type": "Exercise",
  "number": "1.2.4.3",
  "title": "",
  "body": "         Yes      No     "
},
{
  "id": "prob-rrefmultchoice4",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rrefmultchoice4",
  "type": "Exercise",
  "number": "1.2.4.4",
  "title": "",
  "body": "         Yes      No     "
},
{
  "id": "prob-rrefmultchoice5",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rrefmultchoice5",
  "type": "Exercise",
  "number": "1.2.4.5",
  "title": "",
  "body": "         Yes      No     "
},
{
  "id": "prob-same-rref",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-same-rref",
  "type": "Exercise",
  "number": "1.2.4.6",
  "title": "",
  "body": "  Show that applying Gauss-Jordan elimination to the matrix in yields the same reduced row-echelon form as the matrix we obtained in .   "
},
{
  "id": "prob-twowaystorref1-2",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-2",
  "type": "Exercise",
  "number": "1.2.4.7",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-3",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-3",
  "type": "Exercise",
  "number": "1.2.4.8",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-4",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-4",
  "type": "Exercise",
  "number": "1.2.4.9",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-5",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-5",
  "type": "Exercise",
  "number": "1.2.4.10",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-6",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-6",
  "type": "Exercise",
  "number": "1.2.4.11",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-7",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-7",
  "type": "Exercise",
  "number": "1.2.4.12",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-8",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-8",
  "type": "Exercise",
  "number": "1.2.4.13",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-9",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-9",
  "type": "Exercise",
  "number": "1.2.4.14",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref1-10",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref1-10",
  "type": "Exercise",
  "number": "1.2.4.15",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-2",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-2",
  "type": "Exercise",
  "number": "1.2.4.16",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-3",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-3",
  "type": "Exercise",
  "number": "1.2.4.17",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-4",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-4",
  "type": "Exercise",
  "number": "1.2.4.18",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-5",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-5",
  "type": "Exercise",
  "number": "1.2.4.19",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-6",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-6",
  "type": "Exercise",
  "number": "1.2.4.20",
  "title": "",
  "body": "   and         "
},
{
  "id": "prob-twowaystorref2-7",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-7",
  "type": "Exercise",
  "number": "1.2.4.21",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-8",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-8",
  "type": "Exercise",
  "number": "1.2.4.22",
  "title": "",
  "body": "           "
},
{
  "id": "prob-twowaystorref2-9",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-twowaystorref2-9",
  "type": "Exercise",
  "number": "1.2.4.23",
  "title": "",
  "body": "  Exchange rows.        "
},
{
  "id": "prob-rrefnosolutionssys",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rrefnosolutionssys",
  "type": "Exercise",
  "number": "1.2.4.24",
  "title": "",
  "body": "  Fill in the steps that lead to the reduced row echelon form in .   "
},
{
  "id": "prob-rreffinfmanysolutionsys",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-rreffinfmanysolutionsys",
  "type": "Exercise",
  "number": "1.2.4.25",
  "title": "",
  "body": "  Fill in the steps that lead to the reduced row echelon form in .   "
},
{
  "id": "prob-numberofsolutionsmultch",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-numberofsolutionsmultch",
  "type": "Exercise",
  "number": "1.2.4.26",
  "title": "",
  "body": "  Suppose a system of equations has the following reduced row echelon form What can you say about the system?      The system is inconsistent      The system has infinitely many solutions      The system has a unique solution      We would have to examine the original system to make the final determination     "
},
{
  "id": "prob-sys20solvesys1",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-sys20solvesys1",
  "type": "Exercise",
  "number": "1.2.4.27",
  "title": "",
  "body": "           "
},
{
  "id": "prob-sys20solvesys2",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-sys20solvesys2",
  "type": "Exercise",
  "number": "1.2.4.28",
  "title": "",
  "body": "           "
},
{
  "id": "prob-4eq5un",
  "level": "2",
  "url": "Section-Row-Echelon-Forms.html#prob-4eq5un",
  "type": "Exercise",
  "number": "1.2.4.29",
  "title": "",
  "body": "  Suppose a linear system has equations and unknowns. Which of the following is NOT a possibility?      The system has a unique solution      The system has no solutions      The system has infinitely many solutions     "
},
{
  "id": "Section-Applications-of-Systems-of-Linear-Equations",
  "level": "1",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Extra Topic: Applications of Systems of Linear Equations",
  "body": " Extra Topic: Applications of Systems of Linear Equations   Network Flows  This section was adapted from Sections 1.4 and 1.5 of Keith Nicholson's Linear Algebra with Applications . (CC-BY-NC-SA)  There are many types of problems that concern a network of conductors along which some sort of flow is observed. Examples of these include an irrigation network and a network of streets or freeways. There are often points in the system at which a net flow either enters or leaves the system. The basic principle behind the analysis of such systems is that the total flow into the system must equal the total flow out. In fact, we apply this principle at every junction in the system.   Junction Rule   At each of the junctions in the network, the total flow into that junction must equal the total flow out.    This requirement gives a linear equation relating the flows in conductors emanating from the junction.    A network of one-way streets is shown in the accompanying diagram. The rate of flow of cars into intersection is 500 cars per hour, and 400 and 100 cars per hour emerge from and , respectively. Find the possible flows along each street.   Example of a network flow.      Suppose the flows along the streets are , , , , , and cars per hour in the directions shown.  Then, equating the flow in with the flow out at each intersection, we get These give four equations in the six variables . The reduction of the augmented matrix is Hence, when we use , , and as parameters, the general solution is This gives all solutions to the system of equations and hence all the possible flows.  Of course, not all these solutions may be acceptable in the real situation. For example, the flows are all positive in the present context (if one came out negative, it would mean traffic flowed in the opposite direction). This imposes constraints on the flows: and become Further constraints might be imposed by insisting on maximum values on the flow in each street.      Electrical Networks  The circuit diagrams in this section were made using .  In an electrical network it is often necessary to find the current in amperes ( ) flowing in various parts of the network. These networks usually contain resistors that retard the current. Resistance is measured in ohms ( ). The current is increased at various points by voltage sources (for example, a battery). The voltage of these sources is measured in volts (V). We use the following symbols to represent resistors and voltage sources:   Example of a resistor and a network source.   We assume these voltage sources have no resistance. The flow of current is governed by the following principles.   Ohm's Law   The current and the voltage drop across a resistance are related by the equation .\\index{Ohm's Law}     Kirchhoff's Laws   Each of the following is true in an electric circuit.   (Junction Rule) The current flow into a junction equals the current flow out of that junction.    (Circuit Rule) The algebraic sum of the voltage drops (due to resistances) around any closed circuit of the network must equal the sum of the voltage increases around the circuit.       When applying the Circuit Rule, select a direction (clockwise or counterclockwise) around the closed circuit and then consider all voltages and currents positive when in this direction and negative when in the opposite direction. %This is why the term algebraic sum is used in rule 2. Here is an example.    Find the various currents in the circuit shown.   A circuit network.     First apply the junction rule at junctions , , , and to obtain Note that these equations are not independent (in fact, the third is an easy consequence of the other three).  Next, the circuit rule insists that the sum of the voltage increases (due to the sources) around a closed circuit must equal the sum of the voltage drops (due to resistances). By Ohm's law, the voltage loss across a resistance (in the direction of the current ) is . Going counterclockwise around three closed circuits yields Hence, disregarding the redundant equation obtained at junction , we have six equations in the six unknowns . The solution is The fact that is negative means, of course, that this current is in the opposite direction, with a magnitude of amperes.      Chemical Equations  When a chemical reaction takes place a number of molecules combine to produce new molecules. Hence, when hydrogen and oxygen molecules combine, the result is water . We express this as Individual atoms are neither created nor destroyed, so the number of hydrogen and oxygen atoms going into the reaction must equal the number coming out (in the form of water). In this case the reaction is said to be balanced . Note that each hydrogen molecule consists of two atoms as does each oxygen molecule , while a water molecule consists of two hydrogen atoms and one oxygen atom. In the above reaction, this requires that twice as many hydrogen molecules enter the reaction; we express this as follows: This is now balanced because there are 4 hydrogen atoms and 2 oxygen atoms on each side of the reaction.   Balance the following reaction for burning octane in oxygen : where represents carbon dioxide. We must find positive integers , , , and such that Equating the number of carbon, hydrogen, and oxygen atoms on each side gives , and , respectively. These can be written as a homogeneous linear system which can be solved by gaussian elimination. In larger systems this is necessary but, in such a simple situation, it is easier to solve directly. Set , so that , , . But , , , and must be positive integers, so the smallest value of that eliminates fractions is . Hence, , , , and , and the balanced reaction is The reader can verify that this is indeed balanced.   It is worth noting that this problem introduces a new element into the theory of linear equations: the insistence that the solution must consist of positive integers.      Find the possible flows in each of the following networks of pipes.    A network flow.       A network flow.         The answer to is where , , are parameters.      A proposed network of irrigation canals is described in the accompanying diagram. At peak demand, the flows at interchanges , , , and are as shown.   A network flow.       Find the possible flows.    If canal is closed, what range of flow on must be maintained so that no canal carries a flow of more than ?              A traffic circle has five one-way streets, and vehicles enter and leave as shown in the accompanying diagram.   A network flow.       Compute the possible flows.    Which road has the greatest flow?         AB      BC      CD      DE      EA        Find the currents in each of the circuits.      A circuit network.      , ,        A circuit network.      , ,        A circuit network.      , , , , ,        A circuit network.      , , , , ,        Find the voltage such that the current .   A circuit network.            Balance each of the chemical reactions.        This is the burning of methane .         Here is ammonia, is copper oxide, is copper, and is nitrogen.              This is called the photosynthesis reaction--- is glucose.                                              "
},
{
  "id": "thm-001735",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#thm-001735",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "Junction Rule.",
  "body": " Junction Rule   At each of the junctions in the network, the total flow into that junction must equal the total flow out.   "
},
{
  "id": "ex-001739",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#ex-001739",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  A network of one-way streets is shown in the accompanying diagram. The rate of flow of cars into intersection is 500 cars per hour, and 400 and 100 cars per hour emerge from and , respectively. Find the possible flows along each street.   Example of a network flow.      Suppose the flows along the streets are , , , , , and cars per hour in the directions shown.  Then, equating the flow in with the flow out at each intersection, we get These give four equations in the six variables . The reduction of the augmented matrix is Hence, when we use , , and as parameters, the general solution is This gives all solutions to the system of equations and hence all the possible flows.  Of course, not all these solutions may be acceptable in the real situation. For example, the flows are all positive in the present context (if one came out negative, it would mean traffic flowed in the opposite direction). This imposes constraints on the flows: and become Further constraints might be imposed by insisting on maximum values on the flow in each street.   "
},
{
  "id": "thm-001806",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#thm-001806",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "Ohm’s Law.",
  "body": " Ohm's Law   The current and the voltage drop across a resistance are related by the equation .\\index{Ohm's Law}   "
},
{
  "id": "thm-001809",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#thm-001809",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Kirchhoff’s Laws.",
  "body": " Kirchhoff's Laws   Each of the following is true in an electric circuit.   (Junction Rule) The current flow into a junction equals the current flow out of that junction.    (Circuit Rule) The algebraic sum of the voltage drops (due to resistances) around any closed circuit of the network must equal the sum of the voltage increases around the circuit.      "
},
{
  "id": "ex-001817",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#ex-001817",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Find the various currents in the circuit shown.   A circuit network.     First apply the junction rule at junctions , , , and to obtain Note that these equations are not independent (in fact, the third is an easy consequence of the other three).  Next, the circuit rule insists that the sum of the voltage increases (due to the sources) around a closed circuit must equal the sum of the voltage drops (due to resistances). By Ohm's law, the voltage loss across a resistance (in the direction of the current ) is . Going counterclockwise around three closed circuits yields Hence, disregarding the redundant equation obtained at junction , we have six equations in the six unknowns . The solution is The fact that is negative means, of course, that this current is in the opposite direction, with a magnitude of amperes.   "
},
{
  "id": "ex-001872",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#ex-001872",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": " Balance the following reaction for burning octane in oxygen : where represents carbon dioxide. We must find positive integers , , , and such that Equating the number of carbon, hydrogen, and oxygen atoms on each side gives , and , respectively. These can be written as a homogeneous linear system which can be solved by gaussian elimination. In larger systems this is necessary but, in such a simple situation, it is easier to solve directly. Set , so that , , . But , , , and must be positive integers, so the smallest value of that eliminates fractions is . Hence, , , , and , and the balanced reaction is The reader can verify that this is indeed balanced.  "
},
{
  "id": "prob-pipenetwork",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-pipenetwork",
  "type": "Exercise",
  "number": "1.3.4.1",
  "title": "",
  "body": "  Find the possible flows in each of the following networks of pipes.    A network flow.       A network flow.         The answer to is where , , are parameters.   "
},
{
  "id": "prob-pipenetwork2",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-pipenetwork2",
  "type": "Exercise",
  "number": "1.3.4.2",
  "title": "",
  "body": "  A proposed network of irrigation canals is described in the accompanying diagram. At peak demand, the flows at interchanges , , , and are as shown.   A network flow.       Find the possible flows.    If canal is closed, what range of flow on must be maintained so that no canal carries a flow of more than ?           "
},
{
  "id": "prob-pipenetwork3",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-pipenetwork3",
  "type": "Exercise",
  "number": "1.3.4.3",
  "title": "",
  "body": "  A traffic circle has five one-way streets, and vehicles enter and leave as shown in the accompanying diagram.   A network flow.       Compute the possible flows.    Which road has the greatest flow?         AB      BC      CD      DE      EA     "
},
{
  "id": "prob-circuit1",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-circuit1",
  "type": "Exercise",
  "number": "1.3.4.4",
  "title": "",
  "body": "   A circuit network.      , ,    "
},
{
  "id": "prob-circuit2",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-circuit2",
  "type": "Exercise",
  "number": "1.3.4.5",
  "title": "",
  "body": "   A circuit network.      , ,    "
},
{
  "id": "prob-circuit4",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-circuit4",
  "type": "Exercise",
  "number": "1.3.4.6",
  "title": "",
  "body": "   A circuit network.      , , , , ,    "
},
{
  "id": "prob-circuit5",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-circuit5",
  "type": "Exercise",
  "number": "1.3.4.7",
  "title": "",
  "body": "   A circuit network.      , , , , ,    "
},
{
  "id": "prob-circuit6",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#prob-circuit6",
  "type": "Exercise",
  "number": "1.3.4.8",
  "title": "",
  "body": "  Find the voltage such that the current .   A circuit network.         "
},
{
  "id": "chemeqn1",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn1",
  "type": "Exercise",
  "number": "1.3.4.9",
  "title": "",
  "body": "     This is the burning of methane .   "
},
{
  "id": "chemeqn2",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn2",
  "type": "Exercise",
  "number": "1.3.4.10",
  "title": "",
  "body": "     Here is ammonia, is copper oxide, is copper, and is nitrogen.        "
},
{
  "id": "chemeqn3",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn3",
  "type": "Exercise",
  "number": "1.3.4.11",
  "title": "",
  "body": "     This is called the photosynthesis reaction--- is glucose.   "
},
{
  "id": "chemeqn4",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn4",
  "type": "Exercise",
  "number": "1.3.4.12",
  "title": "",
  "body": "           "
},
{
  "id": "chemeqn5",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn5",
  "type": "Exercise",
  "number": "1.3.4.13",
  "title": "",
  "body": "      "
},
{
  "id": "chemeqn6",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn6",
  "type": "Exercise",
  "number": "1.3.4.14",
  "title": "",
  "body": "      "
},
{
  "id": "chemeqn7",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn7",
  "type": "Exercise",
  "number": "1.3.4.15",
  "title": "",
  "body": "      "
},
{
  "id": "chemeqn8",
  "level": "2",
  "url": "Section-Applications-of-Systems-of-Linear-Equations.html#chemeqn8",
  "type": "Exercise",
  "number": "1.3.4.16",
  "title": "",
  "body": "      "
},
{
  "id": "Section-Introduction-to-Vectors",
  "level": "1",
  "url": "Section-Introduction-to-Vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Vectors",
  "body": " Introduction to Vectors   A Brief Introduction to  The set of all real numbers is denoted by . It is convenient to associate real numbers with points on a line, called the real number line .   Image of the real number line.    The set of all ordered pairs , where and are real numbers, is called . Using set notation we write: Geometrically speaking, can be associated with a coordinate plane in which we refer to each point by its and coordinates.   Image of the real plane with coordinate axes x and y.    The set of all ordered triples , where , and are real numbers, is called . Geometrically, an ordered triple of is associated with a point of a three-dimensional space whose position is given by , and coordinates.   Image of the 3-dimensional real space with coordinate axes x, y, and z.    Here is a hands down example:   The following points are shown plotted in .                    Points plotted in 3-dimensional real space.     Each pair of axes in determines a plane. The resulting three planes are called coordinate planes . Each coordinate plane is named after the axes that determine it. Thus, we have the -plane, -plane, and -plane. Coordinate planes intersect at the point , called the origin , and subdivide into eight regions, called octants .   Graphs of the 3 coordinate planes in 3-dimensional real space.    The set of all ordered -tuples , where is a real number for , is called . The point in is called the origin .   cannot be visualized for , but many familiar ideas, such as the distance formula, can be generalized to .    Distance in  In this section we will establish a formula for the distance between two points in . We begin by observing that the distance between two numbers (points) and on the number line is given by . (Why do we use the absolute value brackets?).  We can use the Pythagorean Theorem to establish the distance formula for points of .   Picture of two arbitrary points in the real plane and the corresponding triangle we use to determine the distance between them.    Let and be points in . By the Pythagorean Theorem we have  Why were we able to drop the absolute value brackets?  The distance formula for points in can also be derived using the Pythagorean Theorem. Let and be points of . Use the navigation bar in the following GeoGebra interactive to walk through the steps of the derivation of the distance formula.   Click the arrows at the bottom of the image to progress through the illustration of the distance formula in . A larger version of this activity is available here .      Let and be points in . The distance between and is given by     Observe the similarity of pattern in the distance formulas for , and . We will take advantage of this pattern to define the distance between two points of .    Let and be points in . The distance between and is given by       What is a Vector?  A scalar is a quantity that has size, often called magnitude, but no direction. For example, temperature, mass and speed are scalars. In this course, scalars will typically be real numbers, but we will also see complex numbers on a few occasions.  A vector has magnitude and direction. For example, velocity is a vector because it tells us how fast the object is traveling and also the direction of travel.  If an object is traveling along a number line, the direction of travel is given by the sign of its velocity (positive or negative), while the speed is given by the absolute value of the velocity. If the object is traveling in a plane or in space, direction of travel can be described by an arrow, while the speed can be represented by the length of the arrow. Graphically speaking, vectors in and look like this:    Vector in the real plane.     Vector in 3-dimensional real space.     A vector can be denoted by a lower-case letter with an arrow over the top (like this: ), or a bold lower-case letter (like this: ).  The magnitude, or length, of a vector is denoted by double absolute value brackets. For example, the magnitude of , is denoted by . A vector of zero length and no direction is called the zero vector. We denote the zero vector by or . Going forward, we will use the terms magnitude of a vector and length of a vector interchangeably.  Sometimes it is convenient to refer to a vector by naming the endpoints of the arrow. In the figure below, point is the tail , and point is the head of the vector.   Vector starting at a point A and ending at a point B.    We refer to this vector as .    Vectors in Standard Position  Vectors that point in the same direction and have the same length are said to be equivalent . For example, vectors , and in the figure below are equivalent. We write .   Three equal vectors in the real plane with different starting points and ending points.    For the purpose of developing standard, convenient notation, we observe that every vector is equivalent to some vector whose tail is at the origin. Vectors with tails at the origin are said to be in standard position . We will refer to each vector in standard position by the coordinates of its head. For example, a vector in standard position whose head is located at the point will be referred to as .   The vectors w, v, u, and their corresponding vector in standard position.    Vectors and in the figure are equivalent to vector . We write . Number is called the first component of the vector (or the -component) while number is the second component (or the -component). The form is called the component form .  Vector is an example of a column vector . Occasionally, we will find that representing this vector as a row vector  is more convenient.  Column (or row) representation of vectors in component form allows us to go beyond the physical and geometric definition, and think of vectors more abstractly as arrays of numbers.  Our next goal is to find a process for writing any vector in the coordinate plane in component form.   Consider vector shown below. We will express in component form.   The vector v in the real plane.    Note that the vector has a ``run\" of and a ``rise\" of . If we construct a vector with tail at the origin, a ``run\" of and a ``rise\" of , we will have a vector in standard position equivalent to vector .   The vector v in the real plane plotted in its original and standard positions.    The component form for the vector we constructed is . This gives us .   The approach we used in is applicable to specific vectors that can easily be visualized. What we need now is an algebraic approach that can be generalized to higher dimensions and more abstract situations.  Let's return to vector of . Suppose we were to slide vector into standard position. Consider what would happen to the tail of as we do so.      What happens to the tail of the vector has to happen to the head      We subtracted from the -coordinate and added to the -coordinate of the tail. To find the new location of the head we subtract from the -coordinate of the head, and add to the -coordinate of the head. This gives us . So, the new location of the head is , and .  If you look back at what we did you will find that the components of were computed by subtracting the coordinates of the tail from the coordinates of the head The following diagram summarizes and generalizes our findings.      Let be a vector in , with tail at point and head at point . As we slide into standard position by moving point to the origin, point travels along with point by undergoing the same horizontal and vertical shifts. We now have an equivalent vector in standard position. The diagram suggests the following formula.   Head - Tail Formula in   Suppose a vector's tail is at point and the vector's head is at , then       Vectors in  Definitions of standard position and component form for vectors in are analogous to their counterparts for vectors in . For example, vector in the figure below, is in standard position and can be written in component form as .      If a vector is not in standard position but the location of its head and tail are known, a three-dimensional version of the ``Head - Tail\" formula can be used to express the vector in component form.   Head - Tail Formula in   Suppose a vector's tail is at point and the vector's head is at , then       Vectors in  We cannot see for , but we can conceptualize it by generalizing what we know about and . A vector in standard position whose head is located at can be written in component form as .  Recall that we defined the zero vector as a vector that has length and no direction. In component form, the zero vector is a vector all of whose components are .  We conclude this section by stating the generalized ``Head - Tail\" formula.   Head - Tail Formula in   Suppose a vector's tail is at point and the vector's head is at , then       Length of a Vector  Vector quantities, such as velocity and force, have magnitude and direction. The magnitude of a vector quantity is the length of the vector. For example, if a force of 10 Newtons is applied to an object, we would represent the force by a 10-unit-long vector.      The magnitude of a vector is denoted by double absolute value brackets. In the case of force , we write To find the length of a vector, we need to find the distance between the tail of the vector and its head. Recall that in , the distance between and is given by A vector has the length of the vector in standard position with its head at and tail at . We find the length of using the distance formula    Find the magnitude of .   The vector u.        The distance formula for points in is analogous to the distance formula in . Given two points and , the distance between them is given by To find the length of vector , we find the distance between and .   Let us try these new formulas out:   The magnitude of is given by    Distance formulas for and motivate the following definition of distance between two points in .    Let and be points in . The distance between and is defined to be     The following definition follows directly from the distance formula for in the same way that expressions ( and followed from distance formulas in and .    Let be a vector in , then the length , or the magnitude , of is given by     To get acquianted with the new concepts, we provide a concrete example to showcase them.   The magnitude of is given by      Geometry of Scalar Multiplication  The product of vector with a positive scalar , is a vector that points in the same direction as , and whose length is equal to the length of multiplied by . For example, the figure below shows vectors and . The vectors point in the same direction but the magnitude of is twice the magnitude of .   Vectors u and 2u.    If a vector is multiplied by , the resulting vector is denoted by . It has the same length as vector , but points in the opposite direction.        Algebra of Scalar Multiplication  We know what scalar multiplication accomplishes geometrically. Our goal now is to translate this idea to an algebraic operation.   Consider vector . We will find an algebraic approach for multiplying by .      Consider to be the hypotenuse of a right triangle.      The head of should be the midpoint of the hypotenuse.      From our study of similar triangles in geometry, we know that if we drop perpendiculars from the midpoint of the hypotenuse to the two legs of the triangle, the perpendiculars will bisect the legs.      This tells us that to find and components of we must multiply each component of by .     Consider vector . It is clear that multiplying the components of by reverses the direction of while preserving its magnitude.        and give rise to the following definition of scalar multiplication.    Let be a vector in , and let be a scalar, then     If ( ), then , and we say that and are scalar multiples of each other .    Standard Unit Vectors in and  A unit vector is a vector of length 1. A unit vector in the positive direction of a coordinate axis is called a standard unit vector . There are two standard unit vectors in . The vector is parallel the -axis, and the vector is parallel the -axis.    Standard unit vectors in the real plane.    The standard unit vectors in .   Vector names and are reserved for standard unit vectors in the direction of and axes, respectively. We chose to express and as column vectors, instead of row vectors, because the context in which we will encounter them in the future will require them to be column vectors. You may see them presented as row vectors in a different course.  There are three standard unit vectors in :    Standard unit vectors in 3-dimensional real space.      A Vector as a Linear Combination of Standard Unit Vectors  Every vector in and can be written as a sum of scalar multiples of , and . For example, if , then The expression is called a linear combination of , and .    Standard Unit Vectors in  When working with vectors in , we often use a different notation to denote the standard unit vectors.    Let denote a vector that has as the component and zeros elsewhere. In other words, where is in the position. We say that is a standard unit vector of .      Unit Vector in the Direction of a Given Vector  Recall that a unit vector is a vector of length 1. Given a non-zero vector , we can find a unit vector in the same direction by multiplying by an appropriate scalar. For example, if and , then a unit vector in the same direction is given by .          In general, dividing a non-zero vector by its own magnitude produces a unit vector in the same direction. We summarize this observation in a theorem.    Let be a non-zero vector in . Vector given by is a unit vector in the direction of .    Because is a positive scalar multiple of , points in the direction of . We now show that .     The abstract proof can it everything seem a little odd. In practice, the actual computation is relatively straightforward. Here is an example:   Find a unit vector in the direction of .  We first compute . By ,      Geometry of Vector Addition  There are two ways to add vectors geometrically.   Head-to-Tail Addition Method  Given vectors and , we can find the sum by sliding so as to place its tail at the head of vector . The vector connecting the tail of with the head of is the sum , as shown in the figure below.            This sum can be interpreted as the total displacement that occurs when traveling along the two vectors starting at the tail of and finishing at the head of .  Note that if we place the tail of at the head of instead, the sum vector will be the same as . Thus, addition of vectors is commutative.    Parallelogram Addition Method  Most of the time we deal with vectors in standard position. So all vector tails are located at the origin. This motivates the parallelogram method for adding vectors.  Observe that if we slide vectors and so that their tails are together, the two vectors determine a parallelogram.      Opposite sides of a parallelogram are congruent and parallel.      Applying the ``head-to-tail\" addition method shows that the sum is the diagonal of the parallelogram determined by and .         Algebra of Vector Addition  We now know how to add vectors geometrically. Our next goal is to translate this idea to an algebraic operation.   In this problem we will find the sum of and .      To use head-to-tail addition method, or to construct the side of a parallelogram opposite of , we want to slide so that its tail is at the point . Observe that has a ``run\" of and a ``rise\" of . If we start at , go over then up , we will land on .      The sum is shown below.      We see that the components of can be found by adding the components of and .     motivates the following definition.    Let and be vectors in . We define by       Geometry of Vector Addition in  Vectors in , , and have the advantage in that we can gain insight into their behavior through visualization. Vectors in and are the easiest to visualize. Vectors in are a little trickier. The following exploration will help you visualize addition of vectors in .   Adding two vectors amounts to finding the diagonal of a parallelogram determined by placing the two vectors tail to tail. This process is not limited to vectors of . Use the following GeoGebra interactive to add multiple vectors in , two vectors at a time, by constructing diagonals of parallelograms. To use the interactive   Define vectors , and .    Use check-boxes at the bottom of the right panel to display the parallelograms.    RIGHT-CLICK and DRAG the left panel to rotate the graph.      A larger version of this activity is available here .    The sum of two vectors can be visualized as the diagonal of a parallelogram. The sum of three (non-co-planar) vectors is the diagonal of a three-dimensional counterpart of a parallelogram, called a \\emph{parallelepiped}. Each face of the parallelepiped is a parallelogram determined by two out of the three given vectors. The following GeoGebra exercise will help you visualize the sum of three vectors as the diagonal of a parallelepiped.  Define vectors , and . The sum is the diagonal of the parallelepiped. RIGHT-CLICK and DRAG the left panel to rotate the graph.   A larger version of this activity is available here .       Vector Subtraction  We can find the difference of two vectors by interpreting subtraction as ``addition of the opposite\". Thus, Vector subtraction has an interesting geometric interpretation. As shown in the figure below, if is a diagonal of the parallelogram determined by and , the difference is the other diagonal of the same parallelogram.              Properties of Vector Addition and Scalar Multiplication    The following properties hold for vectors , and in and scalars and in .   Commutative Property of Addition     Associative Property of Addition     Existence of Additive Identity: There exists a vector such that     Existence of Additive Inverse: For every vector , there exists a vector such that     Distributive Property over Vector Addition     Distributive Property over Scalar Addition     Associative Property for Scalar Multiplication     Multiplication by 1        We will prove and . Proofs of the remaining properties are left to the reader.  For any vector in , let Then .  Now to prove :          Find the coordinates of each point.   Points P, Q, and R plotted in 3-dimensional real space.               Find the coordinates of each point. RIGHT-CLICK and DRAG to rotate the image.   A larger version of this activity is available here .                Find the distance between and .           Consider the equation What can be said about all points that satisfy this equation?      Such points are equidistant from the origin.      Such points form a four-dimensional sphere of radius .      Such points are located 5 units from the origin.      All of the above.        Sketch each pair of vectors described below. Express each vector in component form.     Vector has a tail at and a head at . Vector has a tail at and a head at .           Vector has a tail at and a head at . Vector has a tail at and a head at .            Express vector shown in the figure in component form if the magnitude (length) of is .               Let , and . Find point such that .           Find the length of the following vectors.                                                      Find the component form of vector in if we know that , the component of is and the vector is located in the third quadrant.           For a vector in with a length of 26 and the component of 10, what are the possibilities for the component?           Let . Find all possible values of if .           For a vector in , what are the possibilities for the fourth component if the length of the vector is 14, and the , and components are 1, 5 and 13, respectively?           The points , and form a triangle in . Is it a right triangle?    Does the Pythagorean Theorem hold?      The figure below shows vectors and . Sketch each of the following in the same coordinate plane.                                  Let Find the following:                 The additive inverse of .            Prove - of .      Prove - of .      Express each of the following vectors as a linear combination of appropriate standard unit vectors.                                          Express each given vector in component form.      is a vector in .            is a vector in .            is a vector in .            Is it possible to express as a linear combination of and alone, where and are in ? Explain your reasoning.      Find a unit vector in the direction of the given vector .                                          Let . Apply the concepts from this section to find a vector that points in the same direction as and whose length is 5.          "
},
{
  "id": "Subsection-A-Brief-Introduction-to-Real-Space-2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-A-Brief-Introduction-to-Real-Space-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real number line "
},
{
  "id": "ex-plotpointsr3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#ex-plotpointsr3",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " The following points are shown plotted in .                    Points plotted in 3-dimensional real space.    "
},
{
  "id": "Subsection-A-Brief-Introduction-to-Real-Space-10",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-A-Brief-Introduction-to-Real-Space-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate planes origin octants "
},
{
  "id": "Subsection-A-Brief-Introduction-to-Real-Space-12",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-A-Brief-Introduction-to-Real-Space-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "origin "
},
{
  "id": "Subsection-Distance-in-Real-Space-7",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Distance-in-Real-Space-7",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " Click the arrows at the bottom of the image to progress through the illustration of the distance formula in . A larger version of this activity is available here .   "
},
{
  "id": "form-distR3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#form-distR3",
  "type": "Formula",
  "number": "2.1.3",
  "title": "",
  "body": "  Let and be points in . The distance between and is given by    "
},
{
  "id": "form-distRn",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#form-distRn",
  "type": "Formula",
  "number": "2.1.4",
  "title": "",
  "body": "  Let and be points in . The distance between and is given by    "
},
{
  "id": "Subsection-What-is-a-Vector-2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-What-is-a-Vector-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "Subsection-What-is-a-Vector-3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-What-is-a-Vector-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "Subsection-What-is-a-Vector-7",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-What-is-a-Vector-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector. "
},
{
  "id": "Subsection-What-is-a-Vector-8",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-What-is-a-Vector-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tail head "
},
{
  "id": "Subsection-Vectors-in-Standard-Position-2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Vectors-in-Standard-Position-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "Subsection-Vectors-in-Standard-Position-4",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Vectors-in-Standard-Position-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard position "
},
{
  "id": "Subsection-Vectors-in-Standard-Position-6",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Vectors-in-Standard-Position-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first component second component component form "
},
{
  "id": "Subsection-Vectors-in-Standard-Position-7",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Vectors-in-Standard-Position-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column vector row vector "
},
{
  "id": "init-headminustail",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#init-headminustail",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": " Consider vector shown below. We will express in component form.   The vector v in the real plane.    Note that the vector has a ``run\" of and a ``rise\" of . If we construct a vector with tail at the origin, a ``run\" of and a ``rise\" of , we will have a vector in standard position equivalent to vector .   The vector v in the real plane plotted in its original and standard positions.    The component form for the vector we constructed is . This gives us .  "
},
{
  "id": "form-headminustailr2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#form-headminustailr2",
  "type": "Formula",
  "number": "2.1.6",
  "title": "“Head - Tail” Formula in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Head - Tail Formula in   Suppose a vector's tail is at point and the vector's head is at , then    "
},
{
  "id": "form-headminustailr3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#form-headminustailr3",
  "type": "Formula",
  "number": "2.1.7",
  "title": "“Head - Tail” Formula in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Head - Tail Formula in   Suppose a vector's tail is at point and the vector's head is at , then    "
},
{
  "id": "Subsection-Vectors-in-Real-Space-3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Vectors-in-Real-Space-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector "
},
{
  "id": "form-headminustailrn",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#form-headminustailrn",
  "type": "Formula",
  "number": "2.1.8",
  "title": "“Head - Tail” Formula in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Head - Tail Formula in   Suppose a vector's tail is at point and the vector's head is at , then    "
},
{
  "id": "ex-findmaginr2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#ex-findmaginr2",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": " Find the magnitude of .   The vector u.       "
},
{
  "id": "ex-findmaginr3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#ex-findmaginr3",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": " The magnitude of is given by   "
},
{
  "id": "def-distrn",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#def-distrn",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": "  Let and be points in . The distance between and is defined to be    "
},
{
  "id": "def-normrn",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#def-normrn",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": "  Let be a vector in , then the length , or the magnitude , of is given by    "
},
{
  "id": "ex-findnorminr4",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#ex-findnorminr4",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": " The magnitude of is given by   "
},
{
  "id": "init-scalarmult",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#init-scalarmult",
  "type": "Exploration",
  "number": "2.1.1",
  "title": "",
  "body": " Consider vector . We will find an algebraic approach for multiplying by .      Consider to be the hypotenuse of a right triangle.      The head of should be the midpoint of the hypotenuse.      From our study of similar triangles in geometry, we know that if we drop perpendiculars from the midpoint of the hypotenuse to the two legs of the triangle, the perpendiculars will bisect the legs.      This tells us that to find and components of we must multiply each component of by .   "
},
{
  "id": "init-negscalarmult",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#init-negscalarmult",
  "type": "Exploration",
  "number": "2.1.2",
  "title": "",
  "body": " Consider vector . It is clear that multiplying the components of by reverses the direction of while preserving its magnitude.      "
},
{
  "id": "def-scalarmult",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#def-scalarmult",
  "type": "Definition",
  "number": "2.1.14",
  "title": "",
  "body": "  Let be a vector in , and let be a scalar, then    "
},
{
  "id": "Subsection-Algebra-of-Scalar-Multiplication-7",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Algebra-of-Scalar-Multiplication-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar multiples of each other "
},
{
  "id": "Subsection-Standard-Unit-Vectors-in-2d-and-3d-2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-Standard-Unit-Vectors-in-2d-and-3d-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vector standard unit vector "
},
{
  "id": "figure-2d-standard-unit-vectors",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#figure-2d-standard-unit-vectors",
  "type": "Figure",
  "number": "2.1.15",
  "title": "",
  "body": "  Standard unit vectors in the real plane.    The standard unit vectors in .  "
},
{
  "id": "Subsection-A-Vector-as-a-Linear-Combination-of-Standard-Unit-Vectors-2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsection-A-Vector-as-a-Linear-Combination-of-Standard-Unit-Vectors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "def-standardunitvecrn",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#def-standardunitvecrn",
  "type": "Definition",
  "number": "2.1.16",
  "title": "",
  "body": "  Let denote a vector that has as the component and zeros elsewhere. In other words, where is in the position. We say that is a standard unit vector of .   "
},
{
  "id": "th-unit",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#th-unit",
  "type": "Theorem",
  "number": "2.1.17",
  "title": "",
  "body": "  Let be a non-zero vector in . Vector given by is a unit vector in the direction of .    Because is a positive scalar multiple of , points in the direction of . We now show that .    "
},
{
  "id": "reference",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#reference",
  "type": "Example",
  "number": "2.1.18",
  "title": "",
  "body": " Find a unit vector in the direction of .  We first compute . By ,   "
},
{
  "id": "Subsubsection-Parallelogram-Addition-Method-2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#Subsubsection-Parallelogram-Addition-Method-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelogram method "
},
{
  "id": "init-vectoradd",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#init-vectoradd",
  "type": "Exploration",
  "number": "2.1.3",
  "title": "",
  "body": " In this problem we will find the sum of and .      To use head-to-tail addition method, or to construct the side of a parallelogram opposite of , we want to slide so that its tail is at the point . Observe that has a ``run\" of and a ``rise\" of . If we start at , go over then up , we will land on .      The sum is shown below.      We see that the components of can be found by adding the components of and .   "
},
{
  "id": "def-vectoradd",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#def-vectoradd",
  "type": "Definition",
  "number": "2.1.19",
  "title": "",
  "body": "  Let and be vectors in . We define by    "
},
{
  "id": "exp-addInR3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#exp-addInR3",
  "type": "Exploration",
  "number": "2.1.4",
  "title": "",
  "body": " Adding two vectors amounts to finding the diagonal of a parallelogram determined by placing the two vectors tail to tail. This process is not limited to vectors of . Use the following GeoGebra interactive to add multiple vectors in , two vectors at a time, by constructing diagonals of parallelograms. To use the interactive   Define vectors , and .    Use check-boxes at the bottom of the right panel to display the parallelograms.    RIGHT-CLICK and DRAG the left panel to rotate the graph.      A larger version of this activity is available here .    The sum of two vectors can be visualized as the diagonal of a parallelogram. The sum of three (non-co-planar) vectors is the diagonal of a three-dimensional counterpart of a parallelogram, called a \\emph{parallelepiped}. Each face of the parallelepiped is a parallelogram determined by two out of the three given vectors. The following GeoGebra exercise will help you visualize the sum of three vectors as the diagonal of a parallelepiped.  Define vectors , and . The sum is the diagonal of the parallelepiped. RIGHT-CLICK and DRAG the left panel to rotate the graph.   A larger version of this activity is available here .    "
},
{
  "id": "th-vecproperties",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#th-vecproperties",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "",
  "body": "  The following properties hold for vectors , and in and scalars and in .   Commutative Property of Addition     Associative Property of Addition     Existence of Additive Identity: There exists a vector such that     Existence of Additive Inverse: For every vector , there exists a vector such that     Distributive Property over Vector Addition     Distributive Property over Scalar Addition     Associative Property for Scalar Multiplication     Multiplication by 1        We will prove and . Proofs of the remaining properties are left to the reader.  For any vector in , let Then .  Now to prove :     "
},
{
  "id": "prob-plotpointsr3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-plotpointsr3",
  "type": "Exercise",
  "number": "2.1.19.1",
  "title": "",
  "body": "  Find the coordinates of each point.   Points P, Q, and R plotted in 3-dimensional real space.            "
},
{
  "id": "prob-geogebrapts",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-geogebrapts",
  "type": "Exercise",
  "number": "2.1.19.2",
  "title": "",
  "body": "  Find the coordinates of each point. RIGHT-CLICK and DRAG to rotate the image.   A larger version of this activity is available here .             "
},
{
  "id": "prob-distR3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-distR3",
  "type": "Exercise",
  "number": "2.1.19.3",
  "title": "",
  "body": "  Find the distance between and .        "
},
{
  "id": "prob-distR4",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-distR4",
  "type": "Exercise",
  "number": "2.1.19.4",
  "title": "",
  "body": "  Consider the equation What can be said about all points that satisfy this equation?      Such points are equidistant from the origin.      Such points form a four-dimensional sphere of radius .      Such points are located 5 units from the origin.      All of the above.     "
},
{
  "id": "prob-componentform1",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-componentform1",
  "type": "Exercise",
  "number": "2.1.19.5",
  "title": "",
  "body": "  Vector has a tail at and a head at . Vector has a tail at and a head at .        "
},
{
  "id": "prob-componentform2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-componentform2",
  "type": "Exercise",
  "number": "2.1.19.6",
  "title": "",
  "body": "  Vector has a tail at and a head at . Vector has a tail at and a head at .        "
},
{
  "id": "prob-compformgivenlength",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-compformgivenlength",
  "type": "Exercise",
  "number": "2.1.19.7",
  "title": "",
  "body": "  Express vector shown in the figure in component form if the magnitude (length) of is .            "
},
{
  "id": "prob-compformpractice",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-compformpractice",
  "type": "Exercise",
  "number": "2.1.19.8",
  "title": "",
  "body": "  Let , and . Find point such that .        "
},
{
  "id": "prob-magnitude1",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-magnitude1",
  "type": "Exercise",
  "number": "2.1.19.9",
  "title": "",
  "body": "           "
},
{
  "id": "prob-magnitude2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-magnitude2",
  "type": "Exercise",
  "number": "2.1.19.10",
  "title": "",
  "body": "           "
},
{
  "id": "prob-magnitude3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-magnitude3",
  "type": "Exercise",
  "number": "2.1.19.11",
  "title": "",
  "body": "           "
},
{
  "id": "prob-magnitude4",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-magnitude4",
  "type": "Exercise",
  "number": "2.1.19.12",
  "title": "",
  "body": "           "
},
{
  "id": "prob-compformgivenmag",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-compformgivenmag",
  "type": "Exercise",
  "number": "2.1.19.13",
  "title": "",
  "body": "  Find the component form of vector in if we know that , the component of is and the vector is located in the third quadrant.        "
},
{
  "id": "prob-comppossibilities",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-comppossibilities",
  "type": "Exercise",
  "number": "2.1.19.14",
  "title": "",
  "body": "  For a vector in with a length of 26 and the component of 10, what are the possibilities for the component?        "
},
{
  "id": "prob-yvaluesgivennorm",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-yvaluesgivennorm",
  "type": "Exercise",
  "number": "2.1.19.15",
  "title": "",
  "body": "  Let . Find all possible values of if .        "
},
{
  "id": "prob-comppossibilitiesinr4",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-comppossibilitiesinr4",
  "type": "Exercise",
  "number": "2.1.19.16",
  "title": "",
  "body": "  For a vector in , what are the possibilities for the fourth component if the length of the vector is 14, and the , and components are 1, 5 and 13, respectively?        "
},
{
  "id": "prob-pythagoreanR3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-pythagoreanR3",
  "type": "Exercise",
  "number": "2.1.19.17",
  "title": "",
  "body": "  The points , and form a triangle in . Is it a right triangle?    Does the Pythagorean Theorem hold?   "
},
{
  "id": "prob-sketchsumdiff",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-sketchsumdiff",
  "type": "Exercise",
  "number": "2.1.19.18",
  "title": "",
  "body": "  The figure below shows vectors and . Sketch each of the following in the same coordinate plane.                               "
},
{
  "id": "prob-evaluatevectsumdiff1",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-evaluatevectsumdiff1",
  "type": "Exercise",
  "number": "2.1.19.19",
  "title": "",
  "body": "           "
},
{
  "id": "prob-evaluatevectsumdiff2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-evaluatevectsumdiff2",
  "type": "Exercise",
  "number": "2.1.19.20",
  "title": "",
  "body": "  The additive inverse of .        "
},
{
  "id": "prob-vecpropproof1",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-vecpropproof1",
  "type": "Exercise",
  "number": "2.1.19.21",
  "title": "",
  "body": "  Prove - of .   "
},
{
  "id": "prob-vecpropproof2",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-vecpropproof2",
  "type": "Exercise",
  "number": "2.1.19.22",
  "title": "",
  "body": "  Prove - of .   "
},
{
  "id": "prob-lincombijk1a",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk1a",
  "type": "Exercise",
  "number": "2.1.19.23",
  "title": "",
  "body": "           "
},
{
  "id": "prob-lincombijk1b",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk1b",
  "type": "Exercise",
  "number": "2.1.19.24",
  "title": "",
  "body": "           "
},
{
  "id": "prob-lincombijk1c",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk1c",
  "type": "Exercise",
  "number": "2.1.19.25",
  "title": "",
  "body": "           "
},
{
  "id": "prob-lincombijk2a",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk2a",
  "type": "Exercise",
  "number": "2.1.19.26",
  "title": "",
  "body": "   is a vector in .        "
},
{
  "id": "prob-lincombijk2b",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk2b",
  "type": "Exercise",
  "number": "2.1.19.27",
  "title": "",
  "body": "   is a vector in .        "
},
{
  "id": "prob-lincombijk2c",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk2c",
  "type": "Exercise",
  "number": "2.1.19.28",
  "title": "",
  "body": "   is a vector in .        "
},
{
  "id": "prob-lincombijk3",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-lincombijk3",
  "type": "Exercise",
  "number": "2.1.19.29",
  "title": "",
  "body": "  Is it possible to express as a linear combination of and alone, where and are in ? Explain your reasoning.   "
},
{
  "id": "prob-00361",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-00361",
  "type": "Exercise",
  "number": "2.1.19.30",
  "title": "",
  "body": "           "
},
{
  "id": "prob-00362",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-00362",
  "type": "Exercise",
  "number": "2.1.19.31",
  "title": "",
  "body": "           "
},
{
  "id": "prob-00363",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-00363",
  "type": "Exercise",
  "number": "2.1.19.32",
  "title": "",
  "body": "           "
},
{
  "id": "prob-00364",
  "level": "2",
  "url": "Section-Introduction-to-Vectors.html#prob-00364",
  "type": "Exercise",
  "number": "2.1.19.33",
  "title": "",
  "body": "  Let . Apply the concepts from this section to find a vector that points in the same direction as and whose length is 5.        "
},
{
  "id": "Section-Linear-Combination-Equations-and-Span",
  "level": "1",
  "url": "Section-Linear-Combination-Equations-and-Span.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Combination Equations and Span",
  "body": " Linear Combination Equations and Span  When studying vectors, the two main operations we have learned about are vector addition and scalar multiplication. Both are involved in the important concept of a linear combination of vectors.    A vector is said to be a linear combination of vectors if for some scalars .    For example, is a linear combination of , and because     Moving forward, vectors will also be written in horizontal notation instead of vertical. This is mainly for notational reasons. For instance, the vector would instead in midtext be denoted by . This is justified, as any point in in can be thought of as the vector starting from the orign and with direction .     Visualizing Linear Combinations in and   Answer the questions below using the GeoGebra interactive. To use the interactive, you can   change vectors and by dragging the tips of these vectors.    change the coefficients and of the linear combination by using sliders.            Let and . Find and such that            Let and . Find and such that            Use the same vectors and as in the previous part. Do you think it is possible to express any vector in as a linear combination of and ?           Let and . Do you think it is possible to express any vector in as a linear combination of and . Argue why\/why not and write?          Visualizing linear combinations of vectors in is more difficult than doing so in . The following GeoGebra interactive will help you do this.   To use the interactive, define vectors , and . Use sliders to change the coefficients and of the linear combination. The linear combination is shown as the pink vector along the diagonal of the parallelepiped. RIGHT-CLICK and DRAG the left panel to rotate the image.          Solving Linear Combination Equations  A linear combination equation is an equation of the form where and are vectors in , and are unknowns.    Express as a linear combination of and or determine if it is not possible.    We need to solve for scalars and such that Simplifying the left-hand side, we get the equation This gives us the system of equations Now we solve the system by row reducing the corresponding augmented matrix: Hence, the solution to the system is and , and we can express as a linear combination of and as follows:     To solve the linear combination equation in , we reinterpreted it as a system of linear equations. In general, the linear combination equation corresponds to the system of equations Hence, to solve the linear combination equation , we can row reduce the augmented matrix The resulting row echelon form will give us the solution to the linear combination equation. If the system is consistent, then is a linear combination of the vectors If the system is inconsistent, then is not a linear combination of the vectors .    Can the vector be written as a linear combination of vectors and ?    We will start with a geometric approach.  Three vectors drawn   Observe that and are scalar multiples of each other and lie on the same line. A linear combination of and has the form: This shows that all linear combinations of and will be scalar multiples of , and therefore lie on the same line as . Since does not lie on the line determined by it cannot be expressed as a linear combination of and .  We can also address this question algebraically. To express as a linear combination of and , we need to solve the equation. This corresponds to the system of equations and augmented matrix Let's row reduce this matrix to see if the system is consistent: As we reduce the augmented matrix, notice that there is a pivot in the last column. This means the system is inconsistent, and therefore cannot be written as a linear combination of and .      Express as a linear combination of and . Interpret your results geometrically.    We need to find scalars and such that Write down the augmented matrix for this equation and row reduce: Hence, and . Now we can write as a linear combination of and as follows: Geometrically, this means that the vector is the diagonal of the parallelogram determined by and .  The original vectors and are shown below together with the parallelogram and its diagonal.   Paralellogram with diagonal drawn        If possible, express as a linear combination of and .    We are looking for coefficients and such that This translates into the system of linear equations Solving this system for and yields and . We conclude that is a linear combination of and . Specifically, we have       Set up a system of equations that can be used to express as a linear combination of , , and , or to determine that such a combination does not exist.       We are looking for , , and such that This translates into the following system of equations:       The Linear Span  Recall that a vector is said to be a linear combination of vectors if one has for some scalars . Let's look at an explicit example to demystify this notion.    If possible, express the vectors as a linear combination of Interpret your results geometrically.    For , we need to find coefficients and such that . To do this we need to solve the linear combination equation: Now we write the corresponding augmented matrix and reduce it to reduced row echelon form. Hence, , , and we can express as a linear combination of and as follows: Observe that because vector is a linear combination of and , is the diagonal of a parallelogram whose sides are scalar multiples of and . As such, lies in the same plane as and , as illustrated below.   Span of two vectors graphed    For , we need to solve the following vector equation: Writing the equation in augmented matrix form and applying elementary row operations gives us the following reduced row echelon form: We conclude that there are no solutions, and is not a linear combination of and .  Geometrically, this means that is not the diagonal of any parallelogram whose sides are scalar multiples of and . Thus, does not lie in the plane determined by and .   Three vectors graphed without span      In we expressed as a linear combination of and , and concluded that lies in the plane determined by and . We say that is in the span of and . In fact, every vector in the plane determined by and is in the span of and . We say that and  span the plane .  In contrast, vector of is not a linear combination of and . So, we say is not in the span of and .  The following video takes another look at using our new vocabulary.     Let be vectors in . The set of all linear combinations of is called the span of . We write and we say that vectors  span  . Any vector in is said to be in the span of . The set is called a spanning set for the space .    The definition is rather formal even with all the preceding examples and geometric intuition. We highly recommend Working through the examples below in detail.    Describe     The span of is the set of all linear combinations of . Since we are looking for linear combinations of only one vector, we are really looking for all of its scalar multiples. So, the span will be the set of all vectors of the form . All such vectors lie on the line determined by .   Vector and its span graphed        Describe     First, observe that and are not scalar multiples of each other.   Two vectors graphed    Geometrically, we can use to express any vector of as a linear combination of and , indicating that the two vectors span all of .  To verify this claim algebraically we will show that an arbitrary vector of can be written as a linear combination of and .  Consider the vector equation: This corresponds to the system: Writing the system in augmented matrix form and applying elementary row operations gives us the following reduced row-echelon form: This shows that every vector of can be written as a linear combination of and : We conclude that       Describe     First, observe that are not scalar multiples of each other.   Two relevant vectors drawn    The span of and consists of elements of the form Geometrically, we can interpret all such linear combinations as diagonals of parallelograms determined by scalar multiples of and . All such diagonals will lie in the plane determined by and . Let this plane be called . A portion of is shown below.   Span of previous two vectors drawn    Because can be applied to vectors that lie in just as easily as it can be applied to vectors of , we conclude that every vector in can be expressed as a linear combination of and . Thus,         Solve a system of linear equations to express as a linear combination of and .    System of linear equations: Values of and : Linear Combination:       Use to express as a linear combination of and .    Linear Combination:       Use two different approaches (algebraic and geometric) to explain why the vector cannot be expressed as a linear combination of vectors and .      We have seen applied to vectors in . The same process can, in certain cases be applied to vectors in . In both parts of this problem you will be asked to follow the steps in to express one vector as a linear combination of two given vectors. Then you will be asked to identify the condition which makes it possible to do so.  The following GeoGebra interactive shows vectors , and . RIGHT-CLICK and DRAG to rotate the image.           Can be expressed as a linear combination of and ?      No, because is not between and  .     Yes, because all three vectors are in the same plane.      Yes, because all three vectors are in the same plane, AND and are not collinear.        Use the navigation bar at the bottom of the interactive window to view construction steps of applied to vectors , and (right-click and drag to rotate the image). Use the final image to express as a linear combination of (blue) and (red).           The following GeoGebra interactive shows vectors , , and . RIGHT-CLICK and DRAG to rotate the image. Use geometry to explain why cannot be expressed as a linear combination of and .          We can also show that is not a linear combination of and algebraically by attempting to solve a system of equations corresponding to Set up the system of equations Find the reduced row echelon form.         Choose the best description for each set below.            Plane in       Line in       Line in                              Plane in       Line in       Line in                              Plane in       Line in       Line in                        Which of the following pairs of sets are equal?                                    Let . Give an example of at least one vector such that , do NOT span a plane in . Describe .      Prove or disprove. The zero vector of is contained in the span of any collection of vectors of .     "
},
{
  "id": "Section-Linear-Combination-Equations-and-Span-2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#Section-Linear-Combination-Equations-and-Span-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "def-lincomb",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#def-lincomb",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A vector is said to be a linear combination of vectors if for some scalars .   "
},
{
  "id": "Section-Linear-Combination-Equations-and-Span-5",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#Section-Linear-Combination-Equations-and-Span-5",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": "  Moving forward, vectors will also be written in horizontal notation instead of vertical. This is mainly for notational reasons. For instance, the vector would instead in midtext be denoted by . This is justified, as any point in in can be thought of as the vector starting from the orign and with direction .   "
},
{
  "id": "exp-linCombR2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#exp-linCombR2",
  "type": "Exploration",
  "number": "2.2.1",
  "title": "",
  "body": " Answer the questions below using the GeoGebra interactive. To use the interactive, you can   change vectors and by dragging the tips of these vectors.    change the coefficients and of the linear combination by using sliders.            Let and . Find and such that            Let and . Find and such that            Use the same vectors and as in the previous part. Do you think it is possible to express any vector in as a linear combination of and ?           Let and . Do you think it is possible to express any vector in as a linear combination of and . Argue why\/why not and write?         "
},
{
  "id": "exp-linCombR3",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#exp-linCombR3",
  "type": "Exploration",
  "number": "2.2.2",
  "title": "",
  "body": " To use the interactive, define vectors , and . Use sliders to change the coefficients and of the linear combination. The linear combination is shown as the pink vector along the diagonal of the parallelepiped. RIGHT-CLICK and DRAG the left panel to rotate the image.       "
},
{
  "id": "subsec-Solving-Linear-Combination-Equations-2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#subsec-Solving-Linear-Combination-Equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination equation "
},
{
  "id": "init-solvinglincombeqn",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#init-solvinglincombeqn",
  "type": "Exploration",
  "number": "2.2.3",
  "title": "",
  "body": "  Express as a linear combination of and or determine if it is not possible.    We need to solve for scalars and such that Simplifying the left-hand side, we get the equation This gives us the system of equations Now we solve the system by row reducing the corresponding augmented matrix: Hence, the solution to the system is and , and we can express as a linear combination of and as follows:    "
},
{
  "id": "ex-lincombgeometry2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-lincombgeometry2",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  Can the vector be written as a linear combination of vectors and ?    We will start with a geometric approach.  Three vectors drawn   Observe that and are scalar multiples of each other and lie on the same line. A linear combination of and has the form: This shows that all linear combinations of and will be scalar multiples of , and therefore lie on the same line as . Since does not lie on the line determined by it cannot be expressed as a linear combination of and .  We can also address this question algebraically. To express as a linear combination of and , we need to solve the equation. This corresponds to the system of equations and augmented matrix Let's row reduce this matrix to see if the system is consistent: As we reduce the augmented matrix, notice that there is a pivot in the last column. This means the system is inconsistent, and therefore cannot be written as a linear combination of and .   "
},
{
  "id": "ex-lincombgeometry1",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-lincombgeometry1",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": "  Express as a linear combination of and . Interpret your results geometrically.    We need to find scalars and such that Write down the augmented matrix for this equation and row reduce: Hence, and . Now we can write as a linear combination of and as follows: Geometrically, this means that the vector is the diagonal of the parallelogram determined by and .  The original vectors and are shown below together with the parallelogram and its diagonal.   Paralellogram with diagonal drawn     "
},
{
  "id": "ex-lincombalgebra1",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-lincombalgebra1",
  "type": "Example",
  "number": "2.2.11",
  "title": "",
  "body": "  If possible, express as a linear combination of and .    We are looking for coefficients and such that This translates into the system of linear equations Solving this system for and yields and . We conclude that is a linear combination of and . Specifically, we have    "
},
{
  "id": "ex-lincombalgebra2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-lincombalgebra2",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": "  Set up a system of equations that can be used to express as a linear combination of , , and , or to determine that such a combination does not exist.       We are looking for , , and such that This translates into the following system of equations:    "
},
{
  "id": "ex-spanintro",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-spanintro",
  "type": "Example",
  "number": "2.2.13",
  "title": "",
  "body": "  If possible, express the vectors as a linear combination of Interpret your results geometrically.    For , we need to find coefficients and such that . To do this we need to solve the linear combination equation: Now we write the corresponding augmented matrix and reduce it to reduced row echelon form. Hence, , , and we can express as a linear combination of and as follows: Observe that because vector is a linear combination of and , is the diagonal of a parallelogram whose sides are scalar multiples of and . As such, lies in the same plane as and , as illustrated below.   Span of two vectors graphed    For , we need to solve the following vector equation: Writing the equation in augmented matrix form and applying elementary row operations gives us the following reduced row echelon form: We conclude that there are no solutions, and is not a linear combination of and .  Geometrically, this means that is not the diagonal of any parallelogram whose sides are scalar multiples of and . Thus, does not lie in the plane determined by and .   Three vectors graphed without span     "
},
{
  "id": "Section-Span-4",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#Section-Span-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "in the span span the plane "
},
{
  "id": "def-span",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#def-span",
  "type": "Definition",
  "number": "2.2.14",
  "title": "",
  "body": "  Let be vectors in . The set of all linear combinations of is called the span of . We write and we say that vectors  span  . Any vector in is said to be in the span of . The set is called a spanning set for the space .   "
},
{
  "id": "ex-describespan",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-describespan",
  "type": "Example",
  "number": "2.2.15",
  "title": "",
  "body": "  Describe     The span of is the set of all linear combinations of . Since we are looking for linear combinations of only one vector, we are really looking for all of its scalar multiples. So, the span will be the set of all vectors of the form . All such vectors lie on the line determined by .   Vector and its span graphed     "
},
{
  "id": "ex-spanr2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-spanr2",
  "type": "Example",
  "number": "2.2.16",
  "title": "",
  "body": "  Describe     First, observe that and are not scalar multiples of each other.   Two vectors graphed    Geometrically, we can use to express any vector of as a linear combination of and , indicating that the two vectors span all of .  To verify this claim algebraically we will show that an arbitrary vector of can be written as a linear combination of and .  Consider the vector equation: This corresponds to the system: Writing the system in augmented matrix form and applying elementary row operations gives us the following reduced row-echelon form: This shows that every vector of can be written as a linear combination of and : We conclude that    "
},
{
  "id": "ex-spanoftwovectors",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#ex-spanoftwovectors",
  "type": "Example",
  "number": "2.2.17",
  "title": "",
  "body": "  Describe     First, observe that are not scalar multiples of each other.   Two relevant vectors drawn    The span of and consists of elements of the form Geometrically, we can interpret all such linear combinations as diagonals of parallelograms determined by scalar multiples of and . All such diagonals will lie in the plane determined by and . Let this plane be called . A portion of is shown below.   Span of previous two vectors drawn    Because can be applied to vectors that lie in just as easily as it can be applied to vectors of , we conclude that every vector in can be expressed as a linear combination of and . Thus,    "
},
{
  "id": "prob-lincombtwovectors1",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-lincombtwovectors1",
  "type": "Exercise",
  "number": "2.2.4.1",
  "title": "",
  "body": "  Solve a system of linear equations to express as a linear combination of and .    System of linear equations: Values of and : Linear Combination:    "
},
{
  "id": "prob-lincombtwovectors2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-lincombtwovectors2",
  "type": "Exercise",
  "number": "2.2.4.2",
  "title": "",
  "body": "  Use to express as a linear combination of and .    Linear Combination:    "
},
{
  "id": "prob-lincombtwovectors3",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-lincombtwovectors3",
  "type": "Exercise",
  "number": "2.2.4.3",
  "title": "",
  "body": "  Use two different approaches (algebraic and geometric) to explain why the vector cannot be expressed as a linear combination of vectors and .   "
},
{
  "id": "Section-Linear-Combination-Equations-and-Span-9-4",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#Section-Linear-Combination-Equations-and-Span-9-4",
  "type": "Exercise",
  "number": "2.2.4.4",
  "title": "",
  "body": "  We have seen applied to vectors in . The same process can, in certain cases be applied to vectors in . In both parts of this problem you will be asked to follow the steps in to express one vector as a linear combination of two given vectors. Then you will be asked to identify the condition which makes it possible to do so.  The following GeoGebra interactive shows vectors , and . RIGHT-CLICK and DRAG to rotate the image.        "
},
{
  "id": "Section-Linear-Combination-Equations-and-Span-9-5",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#Section-Linear-Combination-Equations-and-Span-9-5",
  "type": "Exercise",
  "number": "2.2.4.5",
  "title": "",
  "body": "  Can be expressed as a linear combination of and ?      No, because is not between and  .     Yes, because all three vectors are in the same plane.      Yes, because all three vectors are in the same plane, AND and are not collinear.     "
},
{
  "id": "Section-Linear-Combination-Equations-and-Span-9-6",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#Section-Linear-Combination-Equations-and-Span-9-6",
  "type": "Exercise",
  "number": "2.2.4.6",
  "title": "",
  "body": "  Use the navigation bar at the bottom of the interactive window to view construction steps of applied to vectors , and (right-click and drag to rotate the image). Use the final image to express as a linear combination of (blue) and (red).        "
},
{
  "id": "prob-lincombtwovectors4b",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-lincombtwovectors4b",
  "type": "Exercise",
  "number": "2.2.4.7",
  "title": "",
  "body": "  The following GeoGebra interactive shows vectors , , and . RIGHT-CLICK and DRAG to rotate the image. Use geometry to explain why cannot be expressed as a linear combination of and .          We can also show that is not a linear combination of and algebraically by attempting to solve a system of equations corresponding to Set up the system of equations Find the reduced row echelon form.     "
},
{
  "id": "prob-describespan1",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-describespan1",
  "type": "Exercise",
  "number": "2.2.4.8",
  "title": "",
  "body": "         Plane in       Line in       Line in                    "
},
{
  "id": "prob-describespan2",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-describespan2",
  "type": "Exercise",
  "number": "2.2.4.9",
  "title": "",
  "body": "         Plane in       Line in       Line in                    "
},
{
  "id": "prob-describespan3",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-describespan3",
  "type": "Exercise",
  "number": "2.2.4.10",
  "title": "",
  "body": "         Plane in       Line in       Line in                    "
},
{
  "id": "prob-equalsets",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-equalsets",
  "type": "Exercise",
  "number": "2.2.4.11",
  "title": "",
  "body": "  Which of the following pairs of sets are equal?                                 "
},
{
  "id": "prob-notinspan",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-notinspan",
  "type": "Exercise",
  "number": "2.2.4.12",
  "title": "",
  "body": "  Let . Give an example of at least one vector such that , do NOT span a plane in . Describe .   "
},
{
  "id": "prob-zeroinspan",
  "level": "2",
  "url": "Section-Linear-Combination-Equations-and-Span.html#prob-zeroinspan",
  "type": "Exercise",
  "number": "2.2.4.13",
  "title": "",
  "body": "  Prove or disprove. The zero vector of is contained in the span of any collection of vectors of .   "
},
{
  "id": "Section-Matrix-Equations",
  "level": "1",
  "url": "Section-Matrix-Equations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Equations",
  "body": " Matrix Equations   Matrix-Vector Multiplication  In the previous section, we saw that a linear comination equation can be expressed as a system of linear equations. Linear combinations are not the only type of equations that can be reinterpreted as systems of linear equations. In this section, we will introduce matrix equations , which are another representation of a system of linear equations. Before we do that, we need to introduce the concept of matrix-vector multiplication .   Matrix-vector multiplication or the matrix-vector product is an operation between a matrix and a vector that produces another vector, their product . The formal definition requires dense notation, so we work through an example before presenting it.    Let   The matrix-vector product is a linear combination of the columns of with coefficients given by the entries in . For this example, We can also compute the product one entry at a time. First, let's focus on the first row of . Next, let's look a the second row of . Finally, let's do the third row of .       Let be an matrix, and let be an vector. The product is the vector given by: or, equivalently,     We can now make a couple of observations about the matrix-vector product. The first observation is part of the definition, but it is still worth pointing out.   In order for the product to exist, and must have compatible dimensions. In particular, vector must have as many components as the number of columns of (otherwise, we would not be have a well-defined linear combination of the columns). So, if is an matrix, must be an vector. If we write these dimensions next to each other, we will notice that the inner dimensions ( ) must match, while the outer dimensions, and , give us the dimensions of the product.      Let's find another matrix-vector product.    Let Find .           Compute the matrix-vector product     The matrix-vector product is     In the previous example, we see that the matrix-vector product of any vector with a square matrix with one's along its diagonal and zeros elsewhere is the vector itself. For this reason, we call such a matrix the identity matrix and denote the indentity matrix by . In general, if is a vector in , then the matrix-vector product .    Matrix Equations  Given an matrix and an constant vector , a matrix equation is an equation of the form . The solution, if it exists, is an vector that satisfies the equation.   Consider the linear system Let's construct the coefficient matrix and multiply it by on the right: Observe that each component of the product vector corresponds to one of the equations in the system. Let . Then  is a matrix equation that corresponds to our system of equations.   In general, a system of linear equations can be written as a matrix equation as follows: Solving this matrix equation (or showing that a solution does not exist) amounts to finding the reduced row-echelon form of the augmented matrix   Being able to use matrices to rewrite and solve systems of equations is crucial, so here are two examples to get you into this mindset.    Given a linear system    Write the system as a matrix equation    Solve the system and the matrix equation       The matrix equation that corresponds to the system is The augmented matrix that corresponds to the original system and its reduced row-echelon form are This shows that the ordered pair is a solution to the system. We conclude that is a solution to the matrix equation in . A quick verification confirms this       Let Solve .    We write the equation in augmented matrix form and apply elementary row operations to find its reduced row-echelon form. One way to obtain a solution is to convert this to a system of equations. It is not necessary to write the system down, but it helps to think about it as you write out your solution vector. We see that and are leading variables because they correspond to leading 1s in the reduced row-echelon form , while and are free variables. We start by assigning parameters and to and , respectively, then solve for and . We can now write the solution vector as follows     The solution given in is an example of a general solution because it accounts for all of the solutions to the system. Letting and take on specific values produces particular solutions . For example, is a particular solution that corresponds to , .    Singular and Nonsingular Matrices  Our examples so far involved non-square matrices. Square matrices, however, play a very important role in linear algebra. This section will focus on square matrices. We start the paragraph with an example to motivate.    Let Solve .    We apply elementary row operations to bring the augmented matrix to its reduced row-echelon form. We can immediately see that the solution vector is     Observe that the left-hand side of the augmented matrix in is the identity matrix . This means that .  The elementary row operations that carried to were not dependent on the vector . In fact, the same row reduction process can be applied to the matrix equation for any vector to obtain a unique solution.    Given a matrix such that , the system will never be inconsistent because we will never have a row like this: . Neither will we have infinitely many solutions because there will never be free variables. Matrices such as deserve special attention.    A square matrix is said to be nonsingular provided that . Otherwise we say that is singular .    Non-singular matrices have many useful properties.    The following statements are equivalent for an matrix .   is nonsingular     has a unique solution for any in      has only the trivial solution        We will prove equivalence of the three statements by showing that   [Proof of ]: Suppose . Given any vector in , the augmented matrix can be carried to its reduced row-echelon form . Uniqueness of the reduced row-echelon form guarantees that is the unique solution of .  [Proof of ]: Suppose has a unique solution for all vectors . Then has a unique solution. But is always a solution to . Therefore is the only solution.  [Proof of ]: Suppose has only the trivial solution. This means that is the only solution of . But then, we know that the augmented matrix can be reduced to . The same row operations will carry to .      Not all square matrices are nonsingular. For example,     By , a matrix equation involving a singular matrix cannot have a unique solution. The following example illustrates the two scenarios that arise when solving equations that involve singular matrices.    Let Solve the equation for each case of below or show that hte system is inconsistent.                For , row reduction gives us There are infinitely many solutions and they all have the following form:   For , the vector is changed and the row operations that take to its reduced row-echelon form produce a in the last row of the vector on the right, which shows that the system is inconsistent.       Connection to Linear Combination Equations  Recall that the product of a matrix and a vector can be interpreted as a linear combination of the columns of the matrix. For example,     For each given matrix and vector , determine whether is a linear combination of the columns of . If possible, express as a linear combination of the columns of .                For , we are looking for such that Solving this equation amounts to finding such that . The augmented matrix corresponding to this equation, together with its reduced row-echelon form are So, is a solution to the matrix equation. We conclude that is a linear combination of the columns of , and write   For We begin by attempting to solve the matrix equation . The augmented matrix corresponding to this equation, together with its reduced row-echelon form are This shows that this matrix equation has no solutions. We conclude that is not a linear combination of the columns of .        Given the system of linear equations below, write (a) the corresponding matrix equation, and (b) the corresponding linear combination equation. DO NOT SOLVE.       Use an augmented matrix and elementary row operations to find coefficients and that make the expression true, or demonstrate that such coefficients do not exist.                      The system is inconsistent and no exist.       In each problem below determine whether vector is in the span of the given set of vectors.     and    The vector is not in the span.       and     The vector is in the span.       and     The vector is not in the span.      "
},
{
  "id": "Subsection-Matrix-Vector-Multiplication-2",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Matrix-Vector-Multiplication-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix equations matrix-vector multiplication "
},
{
  "id": "Subsection-Matrix-Vector-Multiplication-3",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Matrix-Vector-Multiplication-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Matrix-vector multiplication matrix-vector product "
},
{
  "id": "exp-matrixvectormultdef",
  "level": "2",
  "url": "Section-Matrix-Equations.html#exp-matrixvectormultdef",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": "  Let   The matrix-vector product is a linear combination of the columns of with coefficients given by the entries in . For this example, We can also compute the product one entry at a time. First, let's focus on the first row of . Next, let's look a the second row of . Finally, let's do the third row of .    "
},
{
  "id": "def-matrixvectormult",
  "level": "2",
  "url": "Section-Matrix-Equations.html#def-matrixvectormult",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  Let be an matrix, and let be an vector. The product is the vector given by: or, equivalently,    "
},
{
  "id": "Subsection-Matrix-Vector-Multiplication-7",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Matrix-Vector-Multiplication-7",
  "type": "Observation",
  "number": "2.3.3",
  "title": "",
  "body": " In order for the product to exist, and must have compatible dimensions. In particular, vector must have as many components as the number of columns of (otherwise, we would not be have a well-defined linear combination of the columns). So, if is an matrix, must be an vector. If we write these dimensions next to each other, we will notice that the inner dimensions ( ) must match, while the outer dimensions, and , give us the dimensions of the product.   "
},
{
  "id": "ex-matrixvectormultpractice",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-matrixvectormultpractice",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  Let Find .        "
},
{
  "id": "ex-matrixvectormultidentity",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-matrixvectormultidentity",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Compute the matrix-vector product     The matrix-vector product is    "
},
{
  "id": "Subsection-Matrix-Vector-Multiplication-11",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Matrix-Vector-Multiplication-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "Subsection-Matrix-Equations-2",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Matrix-Equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix equation "
},
{
  "id": "init-matrixmultsyseq",
  "level": "2",
  "url": "Section-Matrix-Equations.html#init-matrixmultsyseq",
  "type": "Exploration",
  "number": "2.3.1",
  "title": "",
  "body": " Consider the linear system Let's construct the coefficient matrix and multiply it by on the right: Observe that each component of the product vector corresponds to one of the equations in the system. Let . Then  is a matrix equation that corresponds to our system of equations.  "
},
{
  "id": "ex-linsysmatrixmult",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-linsysmatrixmult",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": "  Given a linear system    Write the system as a matrix equation    Solve the system and the matrix equation       The matrix equation that corresponds to the system is The augmented matrix that corresponds to the original system and its reduced row-echelon form are This shows that the ordered pair is a solution to the system. We conclude that is a solution to the matrix equation in . A quick verification confirms this    "
},
{
  "id": "ex-solveAxequalb",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-solveAxequalb",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": "  Let Solve .    We write the equation in augmented matrix form and apply elementary row operations to find its reduced row-echelon form. One way to obtain a solution is to convert this to a system of equations. It is not necessary to write the system down, but it helps to think about it as you write out your solution vector. We see that and are leading variables because they correspond to leading 1s in the reduced row-echelon form , while and are free variables. We start by assigning parameters and to and , respectively, then solve for and . We can now write the solution vector as follows    "
},
{
  "id": "Subsection-Matrix-Equations-8",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Matrix-Equations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution particular solutions "
},
{
  "id": "ex-nonsingularintro",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-nonsingularintro",
  "type": "Example",
  "number": "2.3.8",
  "title": "",
  "body": "  Let Solve .    We apply elementary row operations to bring the augmented matrix to its reduced row-echelon form. We can immediately see that the solution vector is    "
},
{
  "id": "def-nonsingularmatrix",
  "level": "2",
  "url": "Section-Matrix-Equations.html#def-nonsingularmatrix",
  "type": "Definition",
  "number": "2.3.9",
  "title": "",
  "body": "  A square matrix is said to be nonsingular provided that . Otherwise we say that is singular .   "
},
{
  "id": "th-nonsingularequivalency1",
  "level": "2",
  "url": "Section-Matrix-Equations.html#th-nonsingularequivalency1",
  "type": "Theorem",
  "number": "2.3.10",
  "title": "",
  "body": "  The following statements are equivalent for an matrix .   is nonsingular     has a unique solution for any in      has only the trivial solution        We will prove equivalence of the three statements by showing that   [Proof of ]: Suppose . Given any vector in , the augmented matrix can be carried to its reduced row-echelon form . Uniqueness of the reduced row-echelon form guarantees that is the unique solution of .  [Proof of ]: Suppose has a unique solution for all vectors . Then has a unique solution. But is always a solution to . Therefore is the only solution.  [Proof of ]: Suppose has only the trivial solution. This means that is the only solution of . But then, we know that the augmented matrix can be reduced to . The same row operations will carry to .   "
},
{
  "id": "Subsection-Singular-and-Nonsingular-Matrices-10",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Subsection-Singular-and-Nonsingular-Matrices-10",
  "type": "Remark",
  "number": "2.3.11",
  "title": "",
  "body": "  Not all square matrices are nonsingular. For example,    "
},
{
  "id": "ex-infinfeasible",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-infinfeasible",
  "type": "Example",
  "number": "2.3.12",
  "title": "",
  "body": "  Let Solve the equation for each case of below or show that hte system is inconsistent.                For , row reduction gives us There are infinitely many solutions and they all have the following form:   For , the vector is changed and the row operations that take to its reduced row-echelon form produce a in the last row of the vector on the right, which shows that the system is inconsistent.    "
},
{
  "id": "ex-linearcombofcols2",
  "level": "2",
  "url": "Section-Matrix-Equations.html#ex-linearcombofcols2",
  "type": "Example",
  "number": "2.3.13",
  "title": "",
  "body": "  For each given matrix and vector , determine whether is a linear combination of the columns of . If possible, express as a linear combination of the columns of .                For , we are looking for such that Solving this equation amounts to finding such that . The augmented matrix corresponding to this equation, together with its reduced row-echelon form are So, is a solution to the matrix equation. We conclude that is a linear combination of the columns of , and write   For We begin by attempting to solve the matrix equation . The augmented matrix corresponding to this equation, together with its reduced row-echelon form are This shows that this matrix equation has no solutions. We conclude that is not a linear combination of the columns of .   "
},
{
  "id": "prob-systomatrixeq",
  "level": "2",
  "url": "Section-Matrix-Equations.html#prob-systomatrixeq",
  "type": "Exercise",
  "number": "2.3.5.1",
  "title": "",
  "body": "  Given the system of linear equations below, write (a) the corresponding matrix equation, and (b) the corresponding linear combination equation. DO NOT SOLVE.    "
},
{
  "id": "Section-Matrix-Equations-6-2-2",
  "level": "2",
  "url": "Section-Matrix-Equations.html#Section-Matrix-Equations-6-2-2",
  "type": "Exercise",
  "number": "2.3.5.2",
  "title": "",
  "body": "           "
},
{
  "id": "prob-lincombeq2",
  "level": "2",
  "url": "Section-Matrix-Equations.html#prob-lincombeq2",
  "type": "Exercise",
  "number": "2.3.5.3",
  "title": "",
  "body": "       The system is inconsistent and no exist.   "
},
{
  "id": "spanofvect1",
  "level": "2",
  "url": "Section-Matrix-Equations.html#spanofvect1",
  "type": "Exercise",
  "number": "2.3.5.4",
  "title": "",
  "body": "  and    The vector is not in the span.   "
},
{
  "id": "prob-spanofvect2",
  "level": "2",
  "url": "Section-Matrix-Equations.html#prob-spanofvect2",
  "type": "Exercise",
  "number": "2.3.5.5",
  "title": "",
  "body": "   and     The vector is in the span.   "
},
{
  "id": "prob-spanofvect3",
  "level": "2",
  "url": "Section-Matrix-Equations.html#prob-spanofvect3",
  "type": "Exercise",
  "number": "2.3.5.6",
  "title": "",
  "body": "   and     The vector is not in the span.   "
},
{
  "id": "Section-Homogeneous-Linear-Systems",
  "level": "1",
  "url": "Section-Homogeneous-Linear-Systems.html",
  "type": "Section",
  "number": "2.4",
  "title": "Homogeneous Linear Systems",
  "body": " Homogeneous Linear Systems    A system of linear equations is called homogeneous if the system can be written in the form     A homogeneous linear system is always consistent because is a solution. This solution is called the trivial solution . Geometrically, a homogeneous system can be interpreted as a collection of lines or planes (or hyperplanes) passing through the origin. Thus, they will always have the origin in common, but may have other points in common as well.  If is the coefficient matrix for a homogeneous system, then the system can be written as a matrix equation . The augmented matrix that represents the system looks like this As we perform elementary row operations, the entries to the right of the vertical bar remain . It is customary to omit writing them down and apply elementary row operations to the coefficient matrix only.    Solve the given homogeneous system and interpret your solution geometrically.     We start by rewriting this system as a matrix equation We will proceed to find the reduced row echelon form of the matrix as usual, but will omit writing the zeros to the right of the vertical bar.  and are leading variables, and is a free variable. We let and solve for and . Each of the equations in the original system represents a plane through the origin in . The system has infinitely many solutions. Geometrically, we can interpret these solutions as points lying on the line shared by the three planes. The above solution is a parametric representation of this line. Use the GeoGebra demo below to take a better look at the system. (RIGHT-CLICK and DRAG to rotate the image.)             General and Particular Solutions    Given any linear system , the system is called the associated homogeneous system .    It turns out that there is a relationship between solutions of and solutions of the associated homogeneous system.   Let Consider the matrix equation . Row reduction produces the following. We conclude that .    Let's take a more careful look at . Rewrite onto its parametric form.         We now see that the solution vector is made up of two distinct parts:   one specific vector     infinitely many scalar multiples of .     The vector is an example of a particular solution . This particular ``particular solution\" corresponds to . We can find any number of particular solutions by letting assume different values. For example, the particular solution that corresponds to is . Let be any particular solution of . It turns out that all vectors of the form are solutions of . We can verify this as follows This shows that the specific vector is not very special, as any solution of can be used in its place. The vector , however, is special. Note that So and all of its scalar multiples are solutions to the associated homogeneous system.     In we found that the general solution of the equation has the form: It turns out that the general solution of any linear system can be written in this format. formalizes this result.      Suppose is a particular solution of .   If is a solution of the associated homogeneous system, then is a solution of .    If is a solution of , then there exists a solution of the associated homogeneous system, , such that .       We will prove part . The proof of part is left to the reader.  [Proof of ]: Let , then and       Let If possible, find a solution of and express it as a sum of a particular solution and the general solution of the associated homogeneous system. ( )    First, we obtain the reduced row echelon form So In this case       Linear Independence  Homogeneous linear systems allow us to define a very important concept: linear independence .   Linear Independence   Let be vectors of . We say that the set is linearly independent if the only solution to the homogeneous linear combination equation is the trivial solution  .  If, in addition to the trivial solution, a non-trivial solution (not all are zero) exists, then the set is called linearly dependent .     Given a set of vectors we can now ask the following questions:   Are the vectors in linearly dependent according to ?    Can we write one element of as a linear combination of the others?   It turns out that these questions are equivalent. In other words, if the answer to one of them is ``YES\", the answer to the other is also ``YES\". Conversely, if the answer to one of them is ``NO\", then the answer to the other is also ``NO\". We will start by illustrating this idea with an example, then conclude this section by formally proving the equivalency.     What can we say about the following sets of vectors in light of Remark ?                We will start by addressing linear independence for . To do so, we will solve the linear combination equation Clearly is a solution to the equation. The question is whether another solution exists. The linear combination equation translates into the following system: Writing the system in augmented matrix form and applying elementary row operations gives us the following reduced row echelon form: This shows that has infinitely many solutions: Since there are infinitely many solutions, we conclude that the vectors are linearly dependent.  Now to address part of the remark. We can use the solution to the homogeneous linear combination equation to write one of the vectors as a linear combination of the others. Letting , we obtain the following: Now we solve for one of the vectors: This would not be possible if a nontrivial solution to the equation did not exist. Therefore, we conclude the answer to both questions in is ``YES\".  For part To address linear independence, we need to solve the equation Converting the equation to augmented matrix form and performing row reduction gives us This shows that is the only solution. Therefore the two vectors are linearly independent. Furthermore, we cannot write one of the vectors as a linear combination of the other. Do you see that the only way this would be possible with a set of two vectors is if they were scalar multiples of each other?  So the answer to both questions in is ``NO\".      Let be a set of vectors in containing two or more vectors. The following conditions are equivalent.    are linearly dependent.    One of can be expressed as a linear combination of the others.        For   , if are linearly dependent, then has a non-trivial solution. In other words at least one of the constants, say , does not equal zero. This allows us to solve for : Do you see why it was important to have one of the constants nonzero? This shows that may be expressed as a linear combination of the other vectors.  For the implication   , suppose is a linear combination of . We will show that the vectors are linearly dependent. That is, there is a non-trivial solution to the homogeneous linear combination equation Since is a linear combination of , we can write for some constants . We can now subtract from both sides of the equation to get: Hence, is a non-trivial solution to the homogeneous linear combination equation . This shows that the vectors are linearly dependent.  These two parts of the proof show that if one of the conditions is true, both must be true. It is a logical consequence that if one of the conditions is false, both must be false.  Recall that the span of a set of vectors is the set of all linear combinations of those vectors.   Let be a set of vectors in .   If is linearly dependent, then by there is a vector in that can be written as a linear combination of the other vectors in and therefore     If is linearly independent, then no vector in can be written as a linear combination of the others and hence the span of cannot be written as a span of set with fewer vectors.         Geometry of Linearly Dependent and Linearly Independent Vectors  Theorem gives us a convenient way of looking at linear dependence\/independence geometrically. When looking at two or more vectors, we ask, Can one of the vectors be written as a linear combination of the others? If the answer is YES , then the vectors are linearly dependent.   A Set of Two Vectors  Two vectors are linearly dependent if and only if one is a scalar multiple of the other. Two nonzero linearly dependent vectors may look like this:   Two vectors that lie on the same line and point in the same direction.    or like this:   Two vectors that lie on the same line, but point in opposite directions.    Two linearly independent vectors will look like this:   Two vectors that do not lie on the same line.      A Set of Three Vectors  Given a set of three nonzero vectors, we have the following possibilities:    (Linearly Dependent Vectors) The three vectors are scalar multiples of each other.   Three vectors that lie on the same line.      (Linearly Dependent Vectors) Two of the vectors are scalar multiples of each other.   Two vectors that lie on the same line and one that lies on a different line.      (Linearly Dependent Vectors) One vector can be viewed as the diagonal of a parallelogram determined by scalar multiples of the other two vectors. All three vectors lie in the same plane.   Three vectors that lie in the same plane, with one vector being the diagonal of a parallelogram formed by the other two.      (Linearly Independent Vectors) A set of three vectors is linearly independent if the vectors do not lie in the same plane. For example, vectors , and are linearly independent.         For each matrix and vector below, find a solution to and express your solution as a sum of a particular solution and a general solution to the associated homogeneous system.                   Prove that a consistent system has infinitely many solutions if and only if the associated homogeneous system has infinitely many solutions.       If possible, construct an example of each of the following. If not possible, explain why.     An inconsistent system with an associated homogeneous system that has infinitely many solutions.      An inconsistent system with an associated homogeneous system that has a unique (trivial) solution.       Prove that a linear combination of any number of solutions of a homogeneous equation is a solution of the same equation.      Prove of .       Consider the following set of vectors:    Express each of the vectors in the set as a linear combination of the remaining vectors.    Which of the following is NOT true?         If is in then is in       We can remove and from at the same time without affecting the span.             Are the given vectors linearly independent?            Yes      No      If we rewrite as a system of linear equations, there will be more unknowns than equations.             Yes      No      If we let be the matrix whose columns are these vectors, then should tell us what we want to know.             Yes      No      If we let be the matrix whose columns are these vectors, then should tell us what we want to know.             Yes      No      In a set of two vectors, the only way it can be linearly dependent is if one of the vectors is a scalar multiple of the other.       True or false?     Any set containing the zero vector is linearly dependent.      TRUE      FALSE      Can the zero vector be removed from the set without changing the span?      A set containing five vectors in is linearly dependent.      TRUE      FALSE      If we rewrite for five vectors in as a system of equations, how many equations and unknowns will it have? What does this imply about the number of solutions?       Each problem below provides information about vectors . If possible, determine whether the vectors are linearly dependent or independent.            The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination               The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination               The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination         Each diagram below shows a collection of vectors. Are the vectors linearly dependent or independent?      Example with three vectors        The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination         Example with two vectors        The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination         Suppose is a linearly independent set in , and that is not in . Prove that is also linearly independent.      Suppose is a linearly independent set of vectors. Prove that the set is also linearly independent.      Suppose is a linearly independent set of vectors in . Is the following set dependent or independent ? Prove your claim.     "
},
{
  "id": "def-homogeneous",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#def-homogeneous",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  A system of linear equations is called homogeneous if the system can be written in the form    "
},
{
  "id": "Section-Homogeneous-Linear-Systems-3",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#Section-Homogeneous-Linear-Systems-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trivial solution "
},
{
  "id": "ex-homogeneoussys",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#ex-homogeneoussys",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  Solve the given homogeneous system and interpret your solution geometrically.     We start by rewriting this system as a matrix equation We will proceed to find the reduced row echelon form of the matrix as usual, but will omit writing the zeros to the right of the vertical bar.  and are leading variables, and is a free variable. We let and solve for and . Each of the equations in the original system represents a plane through the origin in . The system has infinitely many solutions. Geometrically, we can interpret these solutions as points lying on the line shared by the three planes. The above solution is a parametric representation of this line. Use the GeoGebra demo below to take a better look at the system. (RIGHT-CLICK and DRAG to rotate the image.)           "
},
{
  "id": "def-asshomsys",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#def-asshomsys",
  "type": "Definition",
  "number": "2.4.4",
  "title": "",
  "body": "  Given any linear system , the system is called the associated homogeneous system .   "
},
{
  "id": "init-generalplusparticular",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#init-generalplusparticular",
  "type": "Exploration",
  "number": "2.4.1",
  "title": "",
  "body": " Let Consider the matrix equation . Row reduction produces the following. We conclude that .    Let's take a more careful look at . Rewrite onto its parametric form.         We now see that the solution vector is made up of two distinct parts:   one specific vector     infinitely many scalar multiples of .     The vector is an example of a particular solution . This particular ``particular solution\" corresponds to . We can find any number of particular solutions by letting assume different values. For example, the particular solution that corresponds to is . Let be any particular solution of . It turns out that all vectors of the form are solutions of . We can verify this as follows This shows that the specific vector is not very special, as any solution of can be used in its place. The vector , however, is special. Note that So and all of its scalar multiples are solutions to the associated homogeneous system.  "
},
{
  "id": "Subsection-General-and-Particular-Solutions-5",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#Subsection-General-and-Particular-Solutions-5",
  "type": "Observation",
  "number": "2.4.6",
  "title": "",
  "body": "  In we found that the general solution of the equation has the form: It turns out that the general solution of any linear system can be written in this format. formalizes this result.   "
},
{
  "id": "th-homogeneous",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#th-homogeneous",
  "type": "Theorem",
  "number": "2.4.7",
  "title": "",
  "body": "  Suppose is a particular solution of .   If is a solution of the associated homogeneous system, then is a solution of .    If is a solution of , then there exists a solution of the associated homogeneous system, , such that .       We will prove part . The proof of part is left to the reader.  [Proof of ]: Let , then and    "
},
{
  "id": "ex-sumofhomandpart",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#ex-sumofhomandpart",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": "  Let If possible, find a solution of and express it as a sum of a particular solution and the general solution of the associated homogeneous system. ( )    First, we obtain the reduced row echelon form So In this case    "
},
{
  "id": "Subsection-Linear-Independence-2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#Subsection-Linear-Independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear independence "
},
{
  "id": "def-linearindependence",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#def-linearindependence",
  "type": "Definition",
  "number": "2.4.9",
  "title": "Linear Independence.",
  "body": " Linear Independence   Let be vectors of . We say that the set is linearly independent if the only solution to the homogeneous linear combination equation is the trivial solution  .  If, in addition to the trivial solution, a non-trivial solution (not all are zero) exists, then the set is called linearly dependent .   "
},
{
  "id": "LinIndEquiv",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#LinIndEquiv",
  "type": "Remark",
  "number": "2.4.10",
  "title": "",
  "body": " Given a set of vectors we can now ask the following questions:   Are the vectors in linearly dependent according to ?    Can we write one element of as a linear combination of the others?   It turns out that these questions are equivalent. In other words, if the answer to one of them is ``YES\", the answer to the other is also ``YES\". Conversely, if the answer to one of them is ``NO\", then the answer to the other is also ``NO\". We will start by illustrating this idea with an example, then conclude this section by formally proving the equivalency.  "
},
{
  "id": "ex-linind",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#ex-linind",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": "  What can we say about the following sets of vectors in light of Remark ?                We will start by addressing linear independence for . To do so, we will solve the linear combination equation Clearly is a solution to the equation. The question is whether another solution exists. The linear combination equation translates into the following system: Writing the system in augmented matrix form and applying elementary row operations gives us the following reduced row echelon form: This shows that has infinitely many solutions: Since there are infinitely many solutions, we conclude that the vectors are linearly dependent.  Now to address part of the remark. We can use the solution to the homogeneous linear combination equation to write one of the vectors as a linear combination of the others. Letting , we obtain the following: Now we solve for one of the vectors: This would not be possible if a nontrivial solution to the equation did not exist. Therefore, we conclude the answer to both questions in is ``YES\".  For part To address linear independence, we need to solve the equation Converting the equation to augmented matrix form and performing row reduction gives us This shows that is the only solution. Therefore the two vectors are linearly independent. Furthermore, we cannot write one of the vectors as a linear combination of the other. Do you see that the only way this would be possible with a set of two vectors is if they were scalar multiples of each other?  So the answer to both questions in is ``NO\".   "
},
{
  "id": "th-lindeplincombofother",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#th-lindeplincombofother",
  "type": "Theorem",
  "number": "2.4.12",
  "title": "",
  "body": "  Let be a set of vectors in containing two or more vectors. The following conditions are equivalent.    are linearly dependent.    One of can be expressed as a linear combination of the others.      "
},
{
  "id": "Subsection-Linear-Independence-7",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#Subsection-Linear-Independence-7",
  "type": "Proof",
  "number": "2.4.2.1",
  "title": "",
  "body": " For   , if are linearly dependent, then has a non-trivial solution. In other words at least one of the constants, say , does not equal zero. This allows us to solve for : Do you see why it was important to have one of the constants nonzero? This shows that may be expressed as a linear combination of the other vectors.  For the implication   , suppose is a linear combination of . We will show that the vectors are linearly dependent. That is, there is a non-trivial solution to the homogeneous linear combination equation Since is a linear combination of , we can write for some constants . We can now subtract from both sides of the equation to get: Hence, is a non-trivial solution to the homogeneous linear combination equation . This shows that the vectors are linearly dependent.  These two parts of the proof show that if one of the conditions is true, both must be true. It is a logical consequence that if one of the conditions is false, both must be false.  "
},
{
  "id": "cor-span-of-lin-dependent-vectors",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#cor-span-of-lin-dependent-vectors",
  "type": "Corollary",
  "number": "2.4.13",
  "title": "",
  "body": "  Let be a set of vectors in .   If is linearly dependent, then by there is a vector in that can be written as a linear combination of the other vectors in and therefore     If is linearly independent, then no vector in can be written as a linear combination of the others and hence the span of cannot be written as a span of set with fewer vectors.      "
},
{
  "id": "prob-hompluspart1",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-hompluspart1",
  "type": "Exercise",
  "number": "2.4.4.1",
  "title": "",
  "body": "      "
},
{
  "id": "prob-hompluspart2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-hompluspart2",
  "type": "Exercise",
  "number": "2.4.4.2",
  "title": "",
  "body": "      "
},
{
  "id": "prob-infmanysolutionshom",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-infmanysolutionshom",
  "type": "Exercise",
  "number": "2.4.4.3",
  "title": "",
  "body": "  Prove that a consistent system has infinitely many solutions if and only if the associated homogeneous system has infinitely many solutions.   "
},
{
  "id": "prob-homexample1",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-homexample1",
  "type": "Exercise",
  "number": "2.4.4.4",
  "title": "",
  "body": "  An inconsistent system with an associated homogeneous system that has infinitely many solutions.   "
},
{
  "id": "prob-homexample2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-homexample2",
  "type": "Exercise",
  "number": "2.4.4.5",
  "title": "",
  "body": "  An inconsistent system with an associated homogeneous system that has a unique (trivial) solution.   "
},
{
  "id": "prob-lincombsolutions",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-lincombsolutions",
  "type": "Exercise",
  "number": "2.4.4.6",
  "title": "",
  "body": "  Prove that a linear combination of any number of solutions of a homogeneous equation is a solution of the same equation.   "
},
{
  "id": "prob-homogeneouspart1",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-homogeneouspart1",
  "type": "Exercise",
  "number": "2.4.4.7",
  "title": "",
  "body": "  Prove of .   "
},
{
  "id": "prob-redundant1",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-redundant1",
  "type": "Exercise",
  "number": "2.4.4.8",
  "title": "",
  "body": "  Consider the following set of vectors:    Express each of the vectors in the set as a linear combination of the remaining vectors.    Which of the following is NOT true?         If is in then is in       We can remove and from at the same time without affecting the span.          "
},
{
  "id": "Section-Homogeneous-Linear-Systems-9-6-2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#Section-Homogeneous-Linear-Systems-9-6-2",
  "type": "Exercise",
  "number": "2.4.4.9",
  "title": "",
  "body": "         Yes      No      If we rewrite as a system of linear equations, there will be more unknowns than equations.   "
},
{
  "id": "prob-linindmultchoice2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice2",
  "type": "Exercise",
  "number": "2.4.4.10",
  "title": "",
  "body": "         Yes      No      If we let be the matrix whose columns are these vectors, then should tell us what we want to know.   "
},
{
  "id": "prob-linindmultchoice3",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice3",
  "type": "Exercise",
  "number": "2.4.4.11",
  "title": "",
  "body": "         Yes      No      If we let be the matrix whose columns are these vectors, then should tell us what we want to know.   "
},
{
  "id": "prob-linindmultchoice4",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice4",
  "type": "Exercise",
  "number": "2.4.4.12",
  "title": "",
  "body": "         Yes      No      In a set of two vectors, the only way it can be linearly dependent is if one of the vectors is a scalar multiple of the other.   "
},
{
  "id": "prob-TFlinind1-2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-TFlinind1-2",
  "type": "Exercise",
  "number": "2.4.4.13",
  "title": "",
  "body": "  Any set containing the zero vector is linearly dependent.      TRUE      FALSE      Can the zero vector be removed from the set without changing the span?   "
},
{
  "id": "prob-TFlinind2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-TFlinind2",
  "type": "Exercise",
  "number": "2.4.4.14",
  "title": "",
  "body": "  A set containing five vectors in is linearly dependent.      TRUE      FALSE      If we rewrite for five vectors in as a system of equations, how many equations and unknowns will it have? What does this imply about the number of solutions?   "
},
{
  "id": "prob-linindmultchoice5-2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice5-2",
  "type": "Exercise",
  "number": "2.4.4.15",
  "title": "",
  "body": "         The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination     "
},
{
  "id": "prob-linindmultchoice6",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice6",
  "type": "Exercise",
  "number": "2.4.4.16",
  "title": "",
  "body": "         The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination     "
},
{
  "id": "prob-linindmultchoice7",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice7",
  "type": "Exercise",
  "number": "2.4.4.17",
  "title": "",
  "body": "         The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination     "
},
{
  "id": "prob-linindmultchoice9-2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice9-2",
  "type": "Exercise",
  "number": "2.4.4.18",
  "title": "",
  "body": "   Example with three vectors        The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination     "
},
{
  "id": "prob-linindmultchoice10",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-linindmultchoice10",
  "type": "Exercise",
  "number": "2.4.4.19",
  "title": "",
  "body": "   Example with two vectors        The vectors are linearly independent      The vectors are linearly dependent      There is not enough information given to make a determination     "
},
{
  "id": "prob-Adding1OK",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-Adding1OK",
  "type": "Exercise",
  "number": "2.4.4.20",
  "title": "",
  "body": "  Suppose is a linearly independent set in , and that is not in . Prove that is also linearly independent.   "
},
{
  "id": "prob-OtherLinearComb",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-OtherLinearComb",
  "type": "Exercise",
  "number": "2.4.4.21",
  "title": "",
  "body": "  Suppose is a linearly independent set of vectors. Prove that the set is also linearly independent.   "
},
{
  "id": "prob-OtherLinearComb2",
  "level": "2",
  "url": "Section-Homogeneous-Linear-Systems.html#prob-OtherLinearComb2",
  "type": "Exercise",
  "number": "2.4.4.22",
  "title": "",
  "body": "  Suppose is a linearly independent set of vectors in . Is the following set dependent or independent ? Prove your claim.   "
},
{
  "id": "Section-Matrix-Transformations",
  "level": "1",
  "url": "Section-Matrix-Transformations.html",
  "type": "Section",
  "number": "2.5",
  "title": "Matrix Transformations",
  "body": " Matrix Transformations   Functions from into  In the past you have worked with functions . Most of the time such functions were defined algebraically. For example, we can define by This function takes a number in the domain ( ) and maps it to the square of the number in the codomain (also ).  Previously, you might have visualized function by looking at its graph, the set of all points of the form in . In this course, we will find it more useful to look at functions diagrammatically. For instance, the diagram below shows that maps 2 to 4. We say that 4 is the image of 2 under .   Function Domain and Codmain    We will now consider functions that map into . We will refer to such functions as transformations . There are two ways of thinking of transformations.  A transformation can take a vector in and map it to a vector in , or it can map a point in to a point in . We think of transformations as acting on vectors or points interchangeably because every point can be interpreted as the tip of a vector Matrix multiplication will provide us with initial tools for defining some transformations.    Examples of Matrix Transformations  Consider the matrix The product of with a vector is a vector. We can define a transformation by . This transformation can be applied to every vector of . We will look at what it does to five vectors.    Vectors graphed     T and arrow drawn     T acted on vectors graphed     Even after looking at a handful of vectors it is often difficult to tell what the transformation actually accomplishes. This is why sometimes looking at points instead of vectors can be beneficial. If we consider every point in the left grid below as a tip of a vector, we can apply the transformation to each point to obtain the grid on the right.    Grid of points graphed         Applying to a grid of points helps us see that the entire plane was sheared by the transformation.  We can also analyze the action of algebraically. Start by finding the image of a generic vector . We immediately see that the component of the vector remains unchanged. We also see that the component increases (or decreases) by an increment that depends on . When considering as a transformation acting on points, we see that points located 1 unit above the -axis, get shifted to the right by 0.5. Points located 2 units above, get shifted to the right by 1. The higher the point, the greater the shift. Points with negative -coordinates get shifted to the left. In this fashion shears the entire plane.  Now that we have seen the effect of functions defined via matrix multiplication, we can better appreciate the term transformation , as such functions distort the domain and the shapes located in it. The following Exploration will help you visualize this.   Make your own shape by moving points in the left pane. (You can also move the entire figure by clicking and dragging the whole polygon.) The images of the points and the polygon under the transformation induced by are shown on the right.       Try each of the following matrices to determine what each transformation accomplishes. (Type pi into GeoGebra to get .)       Match the description of each transformation described below with a the matrix that induces it.   Horizontal shear.    Rotation by counterclockwise.    Reflection about the -axis.    Vertical Stretch.    Maps everything to a straight line.    Rotation through a angle.    Horizontal compression.    Reflection about the line .                                                      A matrix induces a transformation from into . An matrix can be multiplied by an vector on the right, with the resulting product being an vector. Therefore we can use an matrix to define a transformation The example below showcases this concretely.    Let . Define a transformation by . Find all vectors in the domain that map to .    We need to solve the system . We begin by forming an augmented matrix and finding its reduced row echelon form There are infinitely many solutions This means that as transforms into , all points along the line map to the origin.      Linearity of Matrix Transformations  Restating and of Section in terms of matrix-vector multiplication gives us  These two properties of matrix multiplications translate into analogous properties of matrix transformations. Suppose is a matrix transformation, then for all vectors , in and all constants in ,    In general, any transformation that satisfies and is called a linear transformation . As we have just seen, all matrix transformations are linear. We will study linear transformations more in the next section and revisit them throughout the text.    Where did Go?  In this section we will look at the images of standard unit vectors under a matrix transformation, and discuss why this information is helpful.   Let .    Find the following products:              Let be a matrix transformation induced by , then we can say that maps , and to the first, second and third columns of , respectively. This nice property is not limited to transformations induced by square matrices. Let be a linear transformation induced by     We will examine the effect of on the standard unit vectors , and . Try and compute      Observe that the image of is the first column of , the image of is the second column of , and the image of is the third column.     We formalize our findings in as follows.    In general, the linear transformation , induced by an matrix maps the standard unit vectors to the columns of . We summarize this observation by expressing columns of as images of vectors under .     Why is it that knowing the images of standard unit vectors under a matrix transformation is helpful? Consider the following example.    Let be a matrix transformation such that Find .    We will make use of linearity of matrix transformations.     Now, illustrates that a matrix transformation is completely determined by where it maps the standard unit vectors. This is true because we can express every vector in as a linear combination of the standard unit vectors, then use and to find the image of .  Recall in we defined the identity matrix as the matrix whose column is the standard unit vector . The identity matrix induces a matrix transformation such that for all . This transformation maps every vector in to itself. For this reason, we call it the identity transformation .    Let be the identity transformation, defined by . Find .    Observe:         Let be a matrix transformation induced by the matrix . The GeoGebra window on the left shows the domain of , with standard unit vectors and , and a vector . The window on the right shows the codomain of , with the images of , and plotted.       To use this interactive, you can   Change the entries of matrix ;    Change vector by dragging its tip.     Choose your matrix . Visually verify the following claims:   The image of is the first column of matrix .    The image of is the second column of matrix .     Let . Complete the following statement by filling the blanks. After having done that, change vector by dragging its tip. Observe the image of and its relationship to the images of and . Then fill the blanks below for a general vector :     The expressions filled in are        Show that a matrix transformation maps to . In other words, .      Show that a matrix transformation maps a line in to a line (or the origin) in .    A line in can be expressed as . (See .)     "
},
{
  "id": "Subsection-Functions-from-Rn-into-Rm-2",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Functions-from-Rn-into-Rm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain maps codomain "
},
{
  "id": "Subsection-Functions-from-Rn-into-Rm-3",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Functions-from-Rn-into-Rm-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "image of under "
},
{
  "id": "Subsection-Functions-from-Rn-into-Rm-5",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Functions-from-Rn-into-Rm-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformations "
},
{
  "id": "Subsection-Examples-of-Matrix-Transformations-6",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Examples-of-Matrix-Transformations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sheared "
},
{
  "id": "Subsection-Examples-of-Matrix-Transformations-8",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Examples-of-Matrix-Transformations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformation "
},
{
  "id": "exp-shapeTransformation",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#exp-shapeTransformation",
  "type": "Exploration",
  "number": "2.5.1",
  "title": "",
  "body": " Make your own shape by moving points in the left pane. (You can also move the entire figure by clicking and dragging the whole polygon.) The images of the points and the polygon under the transformation induced by are shown on the right.       Try each of the following matrices to determine what each transformation accomplishes. (Type pi into GeoGebra to get .)       Match the description of each transformation described below with a the matrix that induces it.   Horizontal shear.    Rotation by counterclockwise.    Reflection about the -axis.    Vertical Stretch.    Maps everything to a straight line.    Rotation through a angle.    Horizontal compression.    Reflection about the line .                                                     "
},
{
  "id": "ex-matrixTrans1",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#ex-matrixTrans1",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": "  Let . Define a transformation by . Find all vectors in the domain that map to .    We need to solve the system . We begin by forming an augmented matrix and finding its reduced row echelon form There are infinitely many solutions This means that as transforms into , all points along the line map to the origin.   "
},
{
  "id": "Subsection-Linearity-of-Matrix-Transformations-3",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Linearity-of-Matrix-Transformations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation "
},
{
  "id": "exp-imagesOfijk",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#exp-imagesOfijk",
  "type": "Exploration",
  "number": "2.5.2",
  "title": "",
  "body": " Let .    Find the following products:              Let be a matrix transformation induced by , then we can say that maps , and to the first, second and third columns of , respectively. This nice property is not limited to transformations induced by square matrices. Let be a linear transformation induced by     We will examine the effect of on the standard unit vectors , and . Try and compute      Observe that the image of is the first column of , the image of is the second column of , and the image of is the third column.    "
},
{
  "id": "obs-imagesofijk",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#obs-imagesofijk",
  "type": "Observation",
  "number": "2.5.6",
  "title": "",
  "body": "  In general, the linear transformation , induced by an matrix maps the standard unit vectors to the columns of . We summarize this observation by expressing columns of as images of vectors under .    "
},
{
  "id": "ex-imageOfBasisVectors",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#ex-imageOfBasisVectors",
  "type": "Example",
  "number": "2.5.7",
  "title": "",
  "body": "  Let be a matrix transformation such that Find .    We will make use of linearity of matrix transformations.    "
},
{
  "id": "Subsection-Where-did-i-go-8",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Where-did-i-go-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "completely determined "
},
{
  "id": "Subsection-Where-did-i-go-9",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Where-did-i-go-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity transformation "
},
{
  "id": "Subsection-Where-did-i-go-10",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#Subsection-Where-did-i-go-10",
  "type": "Example",
  "number": "2.5.8",
  "title": "",
  "body": "  Let be the identity transformation, defined by . Find .    Observe:    "
},
{
  "id": "exp-linCombStUnitVectors",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#exp-linCombStUnitVectors",
  "type": "Exercise",
  "number": "2.5.5.1",
  "title": "",
  "body": "  Let be a matrix transformation induced by the matrix . The GeoGebra window on the left shows the domain of , with standard unit vectors and , and a vector . The window on the right shows the codomain of , with the images of , and plotted.       To use this interactive, you can   Change the entries of matrix ;    Change vector by dragging its tip.     Choose your matrix . Visually verify the following claims:   The image of is the first column of matrix .    The image of is the second column of matrix .     Let . Complete the following statement by filling the blanks. After having done that, change vector by dragging its tip. Observe the image of and its relationship to the images of and . Then fill the blanks below for a general vector :     The expressions filled in are     "
},
{
  "id": "prb-6-4",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#prb-6-4",
  "type": "Exercise",
  "number": "2.5.5.2",
  "title": "",
  "body": "  Show that a matrix transformation maps to . In other words, .   "
},
{
  "id": "prb-linesToLines",
  "level": "2",
  "url": "Section-Matrix-Transformations.html#prb-linesToLines",
  "type": "Exercise",
  "number": "2.5.5.3",
  "title": "",
  "body": "  Show that a matrix transformation maps a line in to a line (or the origin) in .    A line in can be expressed as . (See .)   "
},
{
  "id": "Section-Linear-Transformations",
  "level": "1",
  "url": "Section-Linear-Transformations.html",
  "type": "Section",
  "number": "2.6",
  "title": "Linear Transformations",
  "body": " Linear Transformations  We start by reviewing the definition of a function.    Let and be sets. A function  from into , denoted by assigns to each element of , an element of . Moreover, we use the the following terminology.  The set is called the domain of , and the set is called the codomain .  If , we say that  maps to  , and is the image of .  The collection of images of all points of is called the image of under , or the image of . (It is also known as the range of .)    In algebra and calculus you worked with functions whose domain and codomain were each the set of all real numbers. In linear algebra, we call our functions transformations . In this section, we study transformations .   In this exercise we will introduce a very special type of transformation by contrasting the effects of two transformations on vectors of . We will see that some transformations have ``nice\" properties, while others do not. Define and as follows:  Each of these transformations takes a vector in , and maps it to another vector in . To see if you understand how these transformations are defined, see if you can determine what these transformations do to the vector .    Compute the following two images:          Now, let's take the vector and multiply it by a scalar, say . Now let's compare how and ``handle\" this product. Starting with , we compute: Observe that multiplying the original vector by , then applying , has the same effect as applying to the original vector, then multiplying the image by . In other words, Diagrammatically, this can be represented as follows.   T with domain and codomain pictured    You should try to verify that this property does not hold for transformation . In other words, There is nothing special about the number , and it is not hard to prove that for any scalar and vector of , satisfies It turns out that satisfies another important property. For all vectors and of we have: We leave it to the reader to illustrate this property with a specific example (see ). We will show that satisfies in general. Let then It turns out that fails to satisfy this property. Can you prove that this is the case? Remember that to prove that a property DOES NOT hold, it suffices to find a counter-example. See if you can find vectors and such that See for more on this.   Transformations satisfying and , like , are called linear transformations . Transformations like are not linear. You have encountered several linear transformations in the form of matrix transformations previously.    A transformation is called a linear transformation if the following are true for all vectors and in , and scalars .      Equations and of the above definition can be illustrated diagrammatically as follows.   Linearity drawn as function diagram     Continuation of above      The properties and are often combined into a single property, namely       Suppose is a linear transformation such that Find each of the following:                 : Because is a linear transformation, it satisfies . We compute:  Observe that By we have:       In we were given the images of two vectors, and , under a linear transformation .  Based on this information, we were able to determine the images of two additional vectors: and . The reason we were able to determine and is because and can be written as unique linear combinations of and .      Can every vector of be written as a linear combination of and ?    Yes.      Is the information provided in sufficient to determine the image of every vector in under ?    Yes.      Suppose is a transformation such that Determine whether is a linear transformation.    Observe that If were a linear transformation, then we would have: But according to the given, Since we conclude that transformation is not linear.    In we introduced a transformation which turned out to be non-linear. It took some work to show that is not linear. The following theorem would have made our work easier.    Let be a linear transformation. Then    . In other words, linear transformations map the zero vector to the zero vector.     maps any line in to a line (or the zero vector) in .       To prove , let be any vector in . By linearity of , we have: Part will become evident after the next section by combinining observations there with .      Use to show that transformation of is not linear.    Recall that was defined by We evaluate at : Since , is not linear.      Let be an matrix. Define by . Then is a linear transformation.    Let and be vectors in , and let be a scalar. By properties of matrix multiplication we have:  Therefore is a linear transformation.      Let be a linear transformation induced by    Find and .    Find the image of .         is a matrix, so for the expression to make sense, has to be a vector. Thus, the domain of is ( ). The product is a vector. The codomain of is ( ). By , the image of consists of images of all individual vectors in under .  Every vector in can be written as for some real numbers and . Consider the image of : This shows that the range, or the image, of consists of all linear combinations of the columns of . In other words, the image of is the span of vectors and . The two vectors are not scalar multiples of each other, therefore they span a plane in .      Let be a linear transformation induced by    Find and .    Find and draw the image of .       For part : and .  For : To find the image of , we will take a slightly different approach from what we did in .  Let be an arbitrary vector of . The image of is given by This shows that the image of every vector in is a scalar multiple of . This means that the image of is a line in .   Line generated is graphed       Standard Matrix of a Linear Transformation from to  In the preceding sections, we learned several important properties of matrix transformations of and subspaces of . Let's summarize the main points.    For a matrix transformation , induced by an matrix we have the following results:    is linear. (Theorem ) This means that for vectors and in and scalars and in .    Columns of are the images of the standard unit vectors of under .      The action of on all of the elements of is completely determined by where maps the standard unit vectors. (See Examples and )       The last point in the summary is so important that it is worth illustrating again.    Let be a linear transformation. Suppose that the only information we have about this transformation is that Is this information sufficient to determine the image of ?    Observe that We find by using the fact that is linear: Because of properties of linear transformations, the information about the images of the standard unit vectors proved to be sufficient for us to determine the image of .    In , there was nothing special about the vector . Any vector of can be written as a unique linear combination of the standard unit vectors . Therefore, the image of any vector under a linear transformation is uniquely determined by the images of . Knowing allows us to construct a matrix , with as columns, that induces transformation . We formalize this idea in a theorem.    Let be a linear transformation. Then is a matrix transformation with as a matrix that induces .    Observe that Because is linear, we have Thus, for every in , we have .     shows that every matrix transformation is linear. states that every linear transformation from into is a matrix transformation. We combine these results in a corollary.    A transformation is a linear transformation if and only if it is a matrix transformation.    The results of this section rely on the fact that every vector of can be written as a unique linear combination of the standard unit vectors . Since we are using the standard unit vectors, it is natural to name the matrix in accordingly.    The matrix in is known as the standard matrix of the linear transformation  .     The standard matrix of a linear transformation such that is      Find the standard matrix of a linear transformation such that and .    We use the images of and as columns of the matrix. The standard matrix of is       Find the standard matrix of a linear transformation , where     In this example we are not given the images of the standard unit vectors and . However, we can find the images of and by expressing and as linear combinations of and , then apply the fact that is linear. Let's start with the easy one. Therefore, by linearity of , we have: This gives us the first column of the standard matrix for .  You can solve the vector equation to express as a linear combination of and as follows: By linearity of , This gives us the second column of the standard matrix. Putting all of the information together, we get the following standard matrix for :       Injective and Surjective Linear Transformations  Given a linear transformation , it is natural to ask the following questions:  Given a vector in such that for some in , is unique? That is, does each map to a unique vector in ?  Does every vector in have a pre-image in under ? Meaning, is every vector in mapped to by ?    The first question leads us to the concept of injective transformations.    A linear transformation is injective or sometimes called one-to-one if for every in is the image of at most one vector in under . In other words,       Determine if the transformation defined by is injective.    This transformation is not injective. We can use any two vectors of the form to make our case. In other words, we have more than one vector that maps to the zero vector.     Consider the transformation with standard matrix Is injective?   Suppose Then   It is clear that and are linearly independent. Therefore, we must have and . But then and , so     The second question leads us to another concept: surjective transformations.    A linear transformation is surjective , or sometimes called onto , if every vector in is the image of some vector in . That is, for each in , there exists an in such that .    Let's illustrate the concept of surjective transformations with an example.    The transformation in is not onto.    No element of maps to .    In and , we saw that showing a transformation is not injective or not surjective only takes a single counterexample. However, to show a transformation is injective or surjective, we need to prove that the property holds for all vectors in the domain or codomain, like we did in . Fortunately, we have some tools from our study of linear systems that will helps us.  By , every linear transformation is a matrix transformation with standard matrix . The properties of the standard matrix can help us determine if is injective or surjective.    Let be a linear transformation from to with standard matrix . So, for all . We now turn our attention to the following questions:   What are the conditions on that guarantee that is injective?    What are the conditions on that guarantee that is surjective?       To answer the first question, we need to find conditions on that ensure that the solution to the matrix equation has at most one solution. This is equivalent to saying the RREF of the augmented matrix has no free variables or that the RREF of has a pivot in every column. Recall that if has a pivot in every column, then the columns of are linearly independent. Notice this was exactly the condition we used in to show that the transformation was injective.  Now to answer the second question. We need to find conditions on that ensure that the matrix equation has a solution for every in . We need at least one solution, so it will be okay if there are infinitely many solutions. Meaning, the condition will be different from our answer to . So, how do we guarantee that the matrix equation always has a solution for every ? Well, the only time we could have no solution is when the RREF of the augmented matrix has a row of the form . To prevent this from happening, we need to ensure that the RREF of has a pivot in every row.    We summarize the answers to in the following theorem.    Let be a linear transformation with standard matrix . Then:   is injective if and only if the RREF of has a pivot in every column.   is surjective if and only if the RREF of has a pivot in every row.      Now let's apply to some examples.    Determine if the linear transformation whose standard matrix is is surjective.    The RREF of is Since the RREF of has a pivot in every row, we conclude that is surjective.      Determine if the linear transformation induced by is injective, surjective, or both.    The RREF of is Since the RREF of has a pivot in every row, we conclude that is surjective. However, since the RREF of does not have a pivot in every column, we conclude that is not injective.        Show that of holds for vectors and .      Use a counter-example to prove of .      Suppose is a linear transformation such that and . Find the image of .           Let be a fixed vector. Define , by .   Describe the effect of this transformation by sketching and for at least four vectors and a fixed vector of your choice.    Is a linear transformation?         Define , by This transformation is called an orthogonal projection onto the -plane. Show that is a linear transformation.      Suppose a linear transformation maps Find the image of under .            Suppose that a linear transformation is such that Find .           Suppose that a linear transformation is such that . Find the standard matrix of .           Find the standard matrix of each linear transformation described below.      doubles the component of every vector and triples the component.            reverses the direction of each vector.            doubles the length of each vector.            projects each vector onto the -axis. (e.g. ).            projects each vector onto the -axis. (e.g. )             Show that a linear transformation with standard matrix is not injective.    Show that multiple vectors map to .      Show that a linear transformation with standard matrix is not surjective.    Find such that has no solutions.      Suppose that a linear transformation has a standard matrix such that . Prove that is injective and surjective    For the injective verification, does have a solution for every ?    For the surjective verification, how many solutions does have?     "
},
{
  "id": "def-function",
  "level": "2",
  "url": "Section-Linear-Transformations.html#def-function",
  "type": "Definition",
  "number": "2.6.1",
  "title": "",
  "body": "  Let and be sets. A function  from into , denoted by assigns to each element of , an element of . Moreover, we use the the following terminology.  The set is called the domain of , and the set is called the codomain .  If , we say that  maps to  , and is the image of .  The collection of images of all points of is called the image of under , or the image of . (It is also known as the range of .)   "
},
{
  "id": "Section-Linear-Transformations-4",
  "level": "2",
  "url": "Section-Linear-Transformations.html#Section-Linear-Transformations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformations "
},
{
  "id": "init-lintransintro",
  "level": "2",
  "url": "Section-Linear-Transformations.html#init-lintransintro",
  "type": "Exploration",
  "number": "2.6.1",
  "title": "",
  "body": " In this exercise we will introduce a very special type of transformation by contrasting the effects of two transformations on vectors of . We will see that some transformations have ``nice\" properties, while others do not. Define and as follows:  Each of these transformations takes a vector in , and maps it to another vector in . To see if you understand how these transformations are defined, see if you can determine what these transformations do to the vector .    Compute the following two images:          Now, let's take the vector and multiply it by a scalar, say . Now let's compare how and ``handle\" this product. Starting with , we compute: Observe that multiplying the original vector by , then applying , has the same effect as applying to the original vector, then multiplying the image by . In other words, Diagrammatically, this can be represented as follows.   T with domain and codomain pictured    You should try to verify that this property does not hold for transformation . In other words, There is nothing special about the number , and it is not hard to prove that for any scalar and vector of , satisfies It turns out that satisfies another important property. For all vectors and of we have: We leave it to the reader to illustrate this property with a specific example (see ). We will show that satisfies in general. Let then It turns out that fails to satisfy this property. Can you prove that this is the case? Remember that to prove that a property DOES NOT hold, it suffices to find a counter-example. See if you can find vectors and such that See for more on this.  "
},
{
  "id": "Section-Linear-Transformations-6",
  "level": "2",
  "url": "Section-Linear-Transformations.html#Section-Linear-Transformations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformations "
},
{
  "id": "def-lin",
  "level": "2",
  "url": "Section-Linear-Transformations.html#def-lin",
  "type": "Definition",
  "number": "2.6.3",
  "title": "",
  "body": "  A transformation is called a linear transformation if the following are true for all vectors and in , and scalars .     "
},
{
  "id": "combinedLinearDef",
  "level": "2",
  "url": "Section-Linear-Transformations.html#combinedLinearDef",
  "type": "Remark",
  "number": "2.6.4",
  "title": "",
  "body": "  The properties and are often combined into a single property, namely    "
},
{
  "id": "ex-lintransfirst",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-lintransfirst",
  "type": "Example",
  "number": "2.6.5",
  "title": "",
  "body": "  Suppose is a linear transformation such that Find each of the following:                 : Because is a linear transformation, it satisfies . We compute:  Observe that By we have:    "
},
{
  "id": "basisIsSufficient",
  "level": "2",
  "url": "Section-Linear-Transformations.html#basisIsSufficient",
  "type": "Observation",
  "number": "2.6.6",
  "title": "",
  "body": "  In we were given the images of two vectors, and , under a linear transformation .  Based on this information, we were able to determine the images of two additional vectors: and . The reason we were able to determine and is because and can be written as unique linear combinations of and .   "
},
{
  "id": "Section-Linear-Transformations-14",
  "level": "2",
  "url": "Section-Linear-Transformations.html#Section-Linear-Transformations-14",
  "type": "Problem",
  "number": "2.6.7",
  "title": "",
  "body": "  Can every vector of be written as a linear combination of and ?    Yes.   "
},
{
  "id": "Section-Linear-Transformations-15",
  "level": "2",
  "url": "Section-Linear-Transformations.html#Section-Linear-Transformations-15",
  "type": "Problem",
  "number": "2.6.8",
  "title": "",
  "body": "  Is the information provided in sufficient to determine the image of every vector in under ?    Yes.   "
},
{
  "id": "ex-lineartrans1",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-lineartrans1",
  "type": "Example",
  "number": "2.6.9",
  "title": "",
  "body": "  Suppose is a transformation such that Determine whether is a linear transformation.    Observe that If were a linear transformation, then we would have: But according to the given, Since we conclude that transformation is not linear.   "
},
{
  "id": "th-zerotozero",
  "level": "2",
  "url": "Section-Linear-Transformations.html#th-zerotozero",
  "type": "Theorem",
  "number": "2.6.10",
  "title": "",
  "body": "  Let be a linear transformation. Then    . In other words, linear transformations map the zero vector to the zero vector.     maps any line in to a line (or the zero vector) in .       To prove , let be any vector in . By linearity of , we have: Part will become evident after the next section by combinining observations there with .   "
},
{
  "id": "ex-zerotozero",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-zerotozero",
  "type": "Example",
  "number": "2.6.11",
  "title": "",
  "body": "  Use to show that transformation of is not linear.    Recall that was defined by We evaluate at : Since , is not linear.   "
},
{
  "id": "th-matrixtran",
  "level": "2",
  "url": "Section-Linear-Transformations.html#th-matrixtran",
  "type": "Theorem",
  "number": "2.6.12",
  "title": "",
  "body": "  Let be an matrix. Define by . Then is a linear transformation.    Let and be vectors in , and let be a scalar. By properties of matrix multiplication we have:  Therefore is a linear transformation.   "
},
{
  "id": "ex-lineartrans2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-lineartrans2",
  "type": "Example",
  "number": "2.6.13",
  "title": "",
  "body": "  Let be a linear transformation induced by    Find and .    Find the image of .         is a matrix, so for the expression to make sense, has to be a vector. Thus, the domain of is ( ). The product is a vector. The codomain of is ( ). By , the image of consists of images of all individual vectors in under .  Every vector in can be written as for some real numbers and . Consider the image of : This shows that the range, or the image, of consists of all linear combinations of the columns of . In other words, the image of is the span of vectors and . The two vectors are not scalar multiples of each other, therefore they span a plane in .   "
},
{
  "id": "ex-lineartrans3",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-lineartrans3",
  "type": "Example",
  "number": "2.6.14",
  "title": "",
  "body": "  Let be a linear transformation induced by    Find and .    Find and draw the image of .       For part : and .  For : To find the image of , we will take a slightly different approach from what we did in .  Let be an arbitrary vector of . The image of is given by This shows that the image of every vector in is a scalar multiple of . This means that the image of is a line in .   Line generated is graphed     "
},
{
  "id": "sum-matrixTrans",
  "level": "2",
  "url": "Section-Linear-Transformations.html#sum-matrixTrans",
  "type": "Fact",
  "number": "2.6.15",
  "title": "",
  "body": "  For a matrix transformation , induced by an matrix we have the following results:    is linear. (Theorem ) This means that for vectors and in and scalars and in .    Columns of are the images of the standard unit vectors of under .      The action of on all of the elements of is completely determined by where maps the standard unit vectors. (See Examples and )      "
},
{
  "id": "ex-imageofatransformation",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-imageofatransformation",
  "type": "Example",
  "number": "2.6.16",
  "title": "",
  "body": "  Let be a linear transformation. Suppose that the only information we have about this transformation is that Is this information sufficient to determine the image of ?    Observe that We find by using the fact that is linear: Because of properties of linear transformations, the information about the images of the standard unit vectors proved to be sufficient for us to determine the image of .   "
},
{
  "id": "th-matlin",
  "level": "2",
  "url": "Section-Linear-Transformations.html#th-matlin",
  "type": "Theorem",
  "number": "2.6.17",
  "title": "",
  "body": "  Let be a linear transformation. Then is a matrix transformation with as a matrix that induces .    Observe that Because is linear, we have Thus, for every in , we have .   "
},
{
  "id": "cor-lintransmattrans",
  "level": "2",
  "url": "Section-Linear-Transformations.html#cor-lintransmattrans",
  "type": "Corollary",
  "number": "2.6.18",
  "title": "",
  "body": "  A transformation is a linear transformation if and only if it is a matrix transformation.   "
},
{
  "id": "def-standardmatoflintrans",
  "level": "2",
  "url": "Section-Linear-Transformations.html#def-standardmatoflintrans",
  "type": "Definition",
  "number": "2.6.19",
  "title": "",
  "body": "  The matrix in is known as the standard matrix of the linear transformation  .   "
},
{
  "id": "ex-findmatrix2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-findmatrix2",
  "type": "Example",
  "number": "2.6.20",
  "title": "",
  "body": " The standard matrix of a linear transformation such that is   "
},
{
  "id": "ex-findmatrix",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-findmatrix",
  "type": "Example",
  "number": "2.6.21",
  "title": "",
  "body": "  Find the standard matrix of a linear transformation such that and .    We use the images of and as columns of the matrix. The standard matrix of is    "
},
{
  "id": "ex-transNoStBases",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-transNoStBases",
  "type": "Example",
  "number": "2.6.22",
  "title": "",
  "body": "  Find the standard matrix of a linear transformation , where     In this example we are not given the images of the standard unit vectors and . However, we can find the images of and by expressing and as linear combinations of and , then apply the fact that is linear. Let's start with the easy one. Therefore, by linearity of , we have: This gives us the first column of the standard matrix for .  You can solve the vector equation to express as a linear combination of and as follows: By linearity of , This gives us the second column of the standard matrix. Putting all of the information together, we get the following standard matrix for :    "
},
{
  "id": "Subsection-Injective-and-Surjective-Linear-Transformations-3",
  "level": "2",
  "url": "Section-Linear-Transformations.html#Subsection-Injective-and-Surjective-Linear-Transformations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "injective "
},
{
  "id": "def-onetoone",
  "level": "2",
  "url": "Section-Linear-Transformations.html#def-onetoone",
  "type": "Definition",
  "number": "2.6.23",
  "title": "",
  "body": "  A linear transformation is injective or sometimes called one-to-one if for every in is the image of at most one vector in under . In other words,    "
},
{
  "id": "ex-notonetoone",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-notonetoone",
  "type": "Example",
  "number": "2.6.24",
  "title": "",
  "body": "  Determine if the transformation defined by is injective.    This transformation is not injective. We can use any two vectors of the form to make our case. In other words, we have more than one vector that maps to the zero vector.   "
},
{
  "id": "ex-onetoone1",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-onetoone1",
  "type": "Example",
  "number": "2.6.25",
  "title": "",
  "body": " Consider the transformation with standard matrix Is injective?   Suppose Then   It is clear that and are linearly independent. Therefore, we must have and . But then and , so    "
},
{
  "id": "Subsection-Injective-and-Surjective-Linear-Transformations-7",
  "level": "2",
  "url": "Section-Linear-Transformations.html#Subsection-Injective-and-Surjective-Linear-Transformations-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surjective "
},
{
  "id": "def-onto",
  "level": "2",
  "url": "Section-Linear-Transformations.html#def-onto",
  "type": "Definition",
  "number": "2.6.26",
  "title": "",
  "body": "  A linear transformation is surjective , or sometimes called onto , if every vector in is the image of some vector in . That is, for each in , there exists an in such that .   "
},
{
  "id": "ex-notonto2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-notonto2",
  "type": "Example",
  "number": "2.6.27",
  "title": "",
  "body": "  The transformation in is not onto.    No element of maps to .   "
},
{
  "id": "question-injectivesurjective",
  "level": "2",
  "url": "Section-Linear-Transformations.html#question-injectivesurjective",
  "type": "Question",
  "number": "2.6.28",
  "title": "",
  "body": "  Let be a linear transformation from to with standard matrix . So, for all . We now turn our attention to the following questions:   What are the conditions on that guarantee that is injective?    What are the conditions on that guarantee that is surjective?       To answer the first question, we need to find conditions on that ensure that the solution to the matrix equation has at most one solution. This is equivalent to saying the RREF of the augmented matrix has no free variables or that the RREF of has a pivot in every column. Recall that if has a pivot in every column, then the columns of are linearly independent. Notice this was exactly the condition we used in to show that the transformation was injective.  Now to answer the second question. We need to find conditions on that ensure that the matrix equation has a solution for every in . We need at least one solution, so it will be okay if there are infinitely many solutions. Meaning, the condition will be different from our answer to . So, how do we guarantee that the matrix equation always has a solution for every ? Well, the only time we could have no solution is when the RREF of the augmented matrix has a row of the form . To prevent this from happening, we need to ensure that the RREF of has a pivot in every row.   "
},
{
  "id": "thm-injectivesurjective",
  "level": "2",
  "url": "Section-Linear-Transformations.html#thm-injectivesurjective",
  "type": "Theorem",
  "number": "2.6.29",
  "title": "",
  "body": "  Let be a linear transformation with standard matrix . Then:   is injective if and only if the RREF of has a pivot in every column.   is surjective if and only if the RREF of has a pivot in every row.     "
},
{
  "id": "ex-onto1",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-onto1",
  "type": "Example",
  "number": "2.6.30",
  "title": "",
  "body": "  Determine if the linear transformation whose standard matrix is is surjective.    The RREF of is Since the RREF of has a pivot in every row, we conclude that is surjective.   "
},
{
  "id": "ex-onto2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#ex-onto2",
  "type": "Example",
  "number": "2.6.31",
  "title": "",
  "body": "  Determine if the linear transformation induced by is injective, surjective, or both.    The RREF of is Since the RREF of has a pivot in every row, we conclude that is surjective. However, since the RREF of does not have a pivot in every column, we conclude that is not injective.   "
},
{
  "id": "prob-sum",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-sum",
  "type": "Exercise",
  "number": "2.6.3.1",
  "title": "",
  "body": "  Show that of holds for vectors and .   "
},
{
  "id": "prob-prob2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-prob2",
  "type": "Exercise",
  "number": "2.6.3.2",
  "title": "",
  "body": "  Use a counter-example to prove of .   "
},
{
  "id": "prob-imageoflincomb",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-imageoflincomb",
  "type": "Exercise",
  "number": "2.6.3.3",
  "title": "",
  "body": "  Suppose is a linear transformation such that and . Find the image of .        "
},
{
  "id": "prob-notlinear",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-notlinear",
  "type": "Exercise",
  "number": "2.6.3.4",
  "title": "",
  "body": "  Let be a fixed vector. Define , by .   Describe the effect of this transformation by sketching and for at least four vectors and a fixed vector of your choice.    Is a linear transformation?      "
},
{
  "id": "prob-projectiontrans",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-projectiontrans",
  "type": "Exercise",
  "number": "2.6.3.5",
  "title": "",
  "body": "  Define , by This transformation is called an orthogonal projection onto the -plane. Show that is a linear transformation.   "
},
{
  "id": "prob-imagesofijk",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-imagesofijk",
  "type": "Exercise",
  "number": "2.6.3.6",
  "title": "",
  "body": "  Suppose a linear transformation maps Find the image of under .        "
},
{
  "id": "prob-evaluateT",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-evaluateT",
  "type": "Exercise",
  "number": "2.6.3.7",
  "title": "",
  "body": "  Suppose that a linear transformation is such that Find .        "
},
{
  "id": "prob-standardmatrix",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-standardmatrix",
  "type": "Exercise",
  "number": "2.6.3.8",
  "title": "",
  "body": "  Suppose that a linear transformation is such that . Find the standard matrix of .        "
},
{
  "id": "prob-standardmatrix1",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-standardmatrix1",
  "type": "Exercise",
  "number": "2.6.3.9",
  "title": "",
  "body": "   doubles the component of every vector and triples the component.        "
},
{
  "id": "prob-standardmatrix2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-standardmatrix2",
  "type": "Exercise",
  "number": "2.6.3.10",
  "title": "",
  "body": "   reverses the direction of each vector.        "
},
{
  "id": "prob-standardmatrix5",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-standardmatrix5",
  "type": "Exercise",
  "number": "2.6.3.11",
  "title": "",
  "body": "   doubles the length of each vector.        "
},
{
  "id": "prob-standardmatrix3",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-standardmatrix3",
  "type": "Exercise",
  "number": "2.6.3.12",
  "title": "",
  "body": "   projects each vector onto the -axis. (e.g. ).        "
},
{
  "id": "prob-standardmatrix4",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-standardmatrix4",
  "type": "Exercise",
  "number": "2.6.3.13",
  "title": "",
  "body": "   projects each vector onto the -axis. (e.g. )        "
},
{
  "id": "prob-injandsurj1",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-injandsurj1",
  "type": "Exercise",
  "number": "2.6.3.14",
  "title": "",
  "body": "  Show that a linear transformation with standard matrix is not injective.    Show that multiple vectors map to .   "
},
{
  "id": "prob-injandsurj2",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-injandsurj2",
  "type": "Exercise",
  "number": "2.6.3.15",
  "title": "",
  "body": "  Show that a linear transformation with standard matrix is not surjective.    Find such that has no solutions.   "
},
{
  "id": "prob-injandsurj3",
  "level": "2",
  "url": "Section-Linear-Transformations.html#prob-injandsurj3",
  "type": "Exercise",
  "number": "2.6.3.16",
  "title": "",
  "body": "  Suppose that a linear transformation has a standard matrix such that . Prove that is injective and surjective    For the injective verification, does have a solution for every ?    For the surjective verification, how many solutions does have?   "
},
{
  "id": "Section-Matrix-Operations",
  "level": "1",
  "url": "Section-Matrix-Operations.html",
  "type": "Section",
  "number": "3.1",
  "title": "Matrix Operations",
  "body": " Matrix Operations  A matrix is a rectangular array of numbers. The plural form of matrix is matrices (not matrixes). You have encountered matrices before in the context of augmented matrices and coefficient matrices associate with linear systems.  Consider the matrix   The dimension of a matrix is defined as where is the number of rows and is the number of columns. The above matrix is a matrix because there are three rows and four columns.  A column vector in is an matrix. A row vector in is a matrix.  The individual entries in the matrix are identified according to their position. The -entry of a matrix is the entry in the row and column. For example, in matrix above, is called the -entry because it is in the second row and the third column.  We denote the entry in the row and the column of matrix by , and write in terms of its entries as Occasionally it will be convenient to talk about columns and rows of a matrix as vectors. We will use the following notation:    A matrix is called a square matrix if it has the same number of rows and columns. If is an square matrix, the entries of the form are said to lie on the main diagonal . For example, if then the main diagonal consists of entries , and .  There are various operations which are done on matrices of appropriate sizes. Matrices can be added to and subtracted from other matrices, multiplied by a scalar, and multiplied by other matrices. We will never divide a matrix by another matrix, but we will see later how multiplication by a matrix inverse (if an inverse exists) plays a similar role to division.  In doing arithmetic with matrices, we often define the action by what happens in terms of the entries (or components) of the matrices. Before looking at these operations in depth, consider a few general definitions.   The Zero Matrix   The  zero matrix is the matrix having every entry equal to zero. The zero matrix is denoted by .     Equality of Matrices   Let and be two matrices. Then means that for all and .     Addition - and Scalar multiplication of Matrices  Given two matrices of the same dimensions, we can add them together by adding their corresponding entries.   Addition of Matrices   Let and be two matrices. Then the sum of matrices  and , denoted by , is an matrix given by     An example might help unravel the formal definition.    Find the sum of and , if possible.     Notice that both and are of size . Since and are of the same size, addition is possible.     Going forward, whenever we write it will be assumed that the two matrices are of equal size and addition is possible.   Properties of Matrix Addition   Let and be matrices. Then the following properties hold.   Commutative Law of Addition:     Associative Law of Addition:     Additive Identity: There exists a zero matrix such that     Additive Inverse: There exists a matrix, , such that        We will prove Properties and . The remaining properties are left as exercises.  [Proof of :] The -entry of is given by The -entry of is given by Since , for all , , we conclude that .  [Proof of :] Let be defined by Then .    You will recognize the zero matrix of as the zero matrix of .  When a matrix is multiplied by a scalar, the new matrix is obtained by multiplying every entry of the original matrix by the given scalar.   Scalar Multiplication of Matrices   If and is a scalar, then .    A hands down example is given below.    Find if     By Definition , we multiply each entry of by . Therefore,      Properties of Scalar Multiplication   Let be matrices, and be scalars. Then, the following properties properties of scalar multiplication hold.   Distributive Law over Matrix Addition:     Distributive Law over Scalar Addition:     Associative Law for Scalar Multiplication:     Multiplication by :        The proof of this theorem is similar to the proof of and is left as an exercise.    Matrix Multiplication  We will introduce matrix multiplication by first considering the special case of a matrix-vector product. In other words, the first matrix is and the second matrix is for some positive integers .   Matrix-Vector Multiplication  Prior to presenting the formal definition in full generality, it is better to see a concrete example because the formal version is notation heavy.    Let   One way to understand the matrix-vector product is by thinking of it as a linear combination of the columns of , using the entries in as our coefficients. We can also compute the product one entry at a time. First, let's focus on the first row of . Next, let's look a the second row of . Finally, let's do the third row of .       Let be an matrix, and let be an vector. The product is the vector given by: or, equivalently,     We can now make a couple of observations about the matrix-vector product. The first observation is part of the definition, but it is still worth pointing out.   In order for the product to exist, and must have compatible dimensions. In particular, vector must have as many components as the number of columns of (otherwise, we would not be have a well-defined linear combination of the columns). So, if is an matrix, must be an vector. If we write these dimensions next to each other, we will notice that the inner dimensions ( ) must match, while the outer dimensions, and , give us the dimensions of the product.      If you are familiar with the dot product , you may have noticed that each individual entry in the product matrix is the dot product of a row of with . Thus, if the rows of are vectors , we can restate Definition as follows:     Let's find another matrix-vector product.    Let Find .           Matrix-Matrix Multiplication  Matrix-matrix multiplication is simply an extension of the idea of matrix-vector multiplication. In order for the product definition to work, matrix dimensions must be compatible. Let be an matrix, and let be an matrix, then the product will be an matrix. Just like with vector products, the inner dimensions must be the same, while the outer dimensions, and , give us the dimensions of the product.    Let be an matrix whose rows are vectors , . Let be an matrix with columns . Then the entries of the matrix product are given by the dot products     So the -entry of is the dot product of the row of and the column of .  In terms of components, if the row of is and the column of is then the -entry of is given by     Let Find .    Observe that is a matrix and is a matrix. So, we expect the product to be a matrix.      It is possible to use linear combinations rather than dot products to compute a matrix-matrix product. If the columns of matrix are given by , then the matrix product consists of columns, each of which is a matrix-vector product:   If we return to Example above, we may use this approach to compute and    Let us put this into explicit examples.    Let Find .    Fill in the blanks below.       Suppose that we know that satisfies   Use this information to express as a linear combination of the columns of .           Properties of Matrix Multiplication   Let   Observe that both and are defined, and both products are matrices. Let's compute the two products Clearly . We say that and  do not commute .    Matrix multiplication is not commutative. While it is possible to find specific matrices that commute, matrix multiplication is not commutative in general.   One example of an square matrix that commutes with all matrices is the matrix defined by  has 1's along the main diagonal and 0's everywhere else. It is often useful to think of as a matrix whose column (and row) is , the standard unit vector of . When the dimensions of are clear from the context, or irrelevant, we will omit the subscript and simply refer to this matrix as .  You can easily convince yourself that commutes with all square matrices of appropriate dimensions. Let Verify that and .  Because acts like the multiplicative identity in regular multiplication, (or ) is called the identity matrix .  Next we list several important properties of matrix multiplication. These properties hold only when matrix sizes are such that the products are defined.   Properties of Matrix Multiplication   The following hold for matrices and and for scalar ,   Left Distributive Property     Right Distributive Property:     Associativity:     Matrix multiplication behaves well with scalar multiplication:     Multiplicative Identity:         We prove using the expression in ( ) for the -entry of a matrix product. (The proof of is similar.) The -entry of is given by We recognize the right hand side as the -entry of . Thus .  For , For , the -entry of the product is given by the dot product of the row of with the standard unit vector . Clearly, this dot product is . Because the -entry of the product is equal to the -entry , we conclude that . The proof that is similar.  Note that we skipped the proof of , which is quite cumbersome using sigma notation. We will easily tackle this proof later in the course when we cover composition of linear Transformations.      Transpose of a Matrix  Another important operation on matrices is that of taking the transpose . For a matrix , we denote the transpose of by . Before formally defining the transpose, we explore this operation on the following matrix. What happened? The first column became the first row and the second column became the second row. Thus the matrix became a matrix. The number was in the first row and the second column and it ended up in the second row and first column.  The definition of the transpose is as follows.   The Transpose of a Matrix   Let be an matrix. Then the transpose of , denoted by , is the matrix given by The -entry of becomes the -entry of .    Here is a short exercise to warm you up to the transpose matrix.    Calculate for the following matrix      Note that is a matrix, while is a matrix. The columns of are the rows of , and the rows of are the columns of .     Properties of the Transpose of a Matrix   Let be an matrix, an matrix, and a scalar. Then                          We will prove . The remaining properties are left as exercises.   [Proof of :] Note that and have compatible dimensions, so that is defined and has dimensions . Thus, has dimensions . On the right side of the equality, has dimensions , and has dimensions . Therefore is defined and has dimensions .  Now we know that and have the same dimensions.  To show that we need to show that their corresponding entries are equal. Recall that the -entry of is given by the dot product of the row of and the column of . The same dot product is also the -entry of .  The -entry of is given by the dot product of the row of and the column of . But the row of is has the same entries as the column of , and the column of has the same entries as the row of . Therefore the -entry of is also equal to the -entry of .  Thus, the corresponding components of are equal and we conclude that .   The transpose of a matrix is related to other important topics. Consider the following definition.   Symmetric and Skew Symmetric Matrices   An matrix is said to be symmetric if It is said to be skew symmetric if     We will explore these definitions in the following examples.    Let Show that is symmetric.     Hence, , so is symmetric.      Let Show that is skew symmetric.     Each entry of is equal to times the same entry of . Hence, and so by , is skew symmetric.    A special case of a symmetric matrix is a diagonal matrix . A diagonal matrix is a square matrix whose entries outside of the main diagonal are all zero. The identity matrix is a diagonal matrix. Here is another example.       If then what is the matrix ?           If then what is the matrix ?           Prove properties and of .      Prove .       Explain why the following product is not defined.       Express the given product as a linear combination of the columns of the matrix.            Predict the dimensions of each product.          Dimensions of product: .           Dimensions of product:        Find each product.                                           Prove Properties , and of .      Let be an arbitrary matrix. What can you say about the dimensions of the product ?      Classify each matrix as symmetric, skew symmetric, or neither.            Symmetric      Skew symmetric      Neither               Symmetric      Skew symmetric      Neither               Symmetric      Skew symmetric      Neither         Give your own example of a skew symmetric matrix.      Make a conjecture about the main diagonal entries of a skew symmetric matrix. Prove your conjecture.     "
},
{
  "id": "Section-Matrix-Operations-2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix matrix matrices "
},
{
  "id": "Section-Matrix-Operations-4",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension of a matrix "
},
{
  "id": "Section-Matrix-Operations-5",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "column vector row vector "
},
{
  "id": "Section-Matrix-Operations-6",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entries "
},
{
  "id": "Section-Matrix-Operations-8",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square matrix main diagonal "
},
{
  "id": "def-zeromatrix",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-zeromatrix",
  "type": "Definition",
  "number": "3.1.1",
  "title": "The Zero Matrix.",
  "body": " The Zero Matrix   The  zero matrix is the matrix having every entry equal to zero. The zero matrix is denoted by .   "
},
{
  "id": "def-equalityofmatrices",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-equalityofmatrices",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Equality of Matrices.",
  "body": " Equality of Matrices   Let and be two matrices. Then means that for all and .   "
},
{
  "id": "def-additionofmatrices",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-additionofmatrices",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Addition of Matrices.",
  "body": " Addition of Matrices   Let and be two matrices. Then the sum of matrices  and , denoted by , is an matrix given by    "
},
{
  "id": "ex-samesizematrixaddition",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-samesizematrixaddition",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  Find the sum of and , if possible.     Notice that both and are of size . Since and are of the same size, addition is possible.    "
},
{
  "id": "th-propertiesofaddition",
  "level": "2",
  "url": "Section-Matrix-Operations.html#th-propertiesofaddition",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "Properties of Matrix Addition.",
  "body": " Properties of Matrix Addition   Let and be matrices. Then the following properties hold.   Commutative Law of Addition:     Associative Law of Addition:     Additive Identity: There exists a zero matrix such that     Additive Inverse: There exists a matrix, , such that        We will prove Properties and . The remaining properties are left as exercises.  [Proof of :] The -entry of is given by The -entry of is given by Since , for all , , we conclude that .  [Proof of :] Let be defined by Then .   "
},
{
  "id": "def-scalarmultofmatrices",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-scalarmultofmatrices",
  "type": "Definition",
  "number": "3.1.6",
  "title": "Scalar Multiplication of Matrices.",
  "body": " Scalar Multiplication of Matrices   If and is a scalar, then .   "
},
{
  "id": "ex-effectofscalarmult",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-effectofscalarmult",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  Find if     By Definition , we multiply each entry of by . Therefore,    "
},
{
  "id": "th-propertiesscalarmult",
  "level": "2",
  "url": "Section-Matrix-Operations.html#th-propertiesscalarmult",
  "type": "Theorem",
  "number": "3.1.8",
  "title": "Properties of Scalar Multiplication.",
  "body": " Properties of Scalar Multiplication   Let be matrices, and be scalars. Then, the following properties properties of scalar multiplication hold.   Distributive Law over Matrix Addition:     Distributive Law over Scalar Addition:     Associative Law for Scalar Multiplication:     Multiplication by :       "
},
{
  "id": "exp-matrixvectormultdef",
  "level": "2",
  "url": "Section-Matrix-Operations.html#exp-matrixvectormultdef",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  Let   One way to understand the matrix-vector product is by thinking of it as a linear combination of the columns of , using the entries in as our coefficients. We can also compute the product one entry at a time. First, let's focus on the first row of . Next, let's look a the second row of . Finally, let's do the third row of .    "
},
{
  "id": "def-matrixvectormult",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-matrixvectormult",
  "type": "Definition",
  "number": "3.1.10",
  "title": "",
  "body": "  Let be an matrix, and let be an vector. The product is the vector given by: or, equivalently,    "
},
{
  "id": "Subsection-Matrix-Vector-Multiplication-6",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Matrix-Vector-Multiplication-6",
  "type": "Observation",
  "number": "3.1.11",
  "title": "",
  "body": " In order for the product to exist, and must have compatible dimensions. In particular, vector must have as many components as the number of columns of (otherwise, we would not be have a well-defined linear combination of the columns). So, if is an matrix, must be an vector. If we write these dimensions next to each other, we will notice that the inner dimensions ( ) must match, while the outer dimensions, and , give us the dimensions of the product.   "
},
{
  "id": "Subsection-Matrix-Vector-Multiplication-7",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Matrix-Vector-Multiplication-7",
  "type": "Observation",
  "number": "3.1.12",
  "title": "",
  "body": "  If you are familiar with the dot product , you may have noticed that each individual entry in the product matrix is the dot product of a row of with . Thus, if the rows of are vectors , we can restate Definition as follows:    "
},
{
  "id": "ex-matrixvectormultpractice",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-matrixvectormultpractice",
  "type": "Example",
  "number": "3.1.13",
  "title": "",
  "body": "  Let Find .        "
},
{
  "id": "def-matmatproduct",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-matmatproduct",
  "type": "Definition",
  "number": "3.1.14",
  "title": "",
  "body": "  Let be an matrix whose rows are vectors , . Let be an matrix with columns . Then the entries of the matrix product are given by the dot products    "
},
{
  "id": "ex-matmatproduct",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-matmatproduct",
  "type": "Example",
  "number": "3.1.15",
  "title": "",
  "body": "  Let Find .    Observe that is a matrix and is a matrix. So, we expect the product to be a matrix.    "
},
{
  "id": "Subsection-Matrix-Matrix-Multiplication-7",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Matrix-Matrix-Multiplication-7",
  "type": "Remark",
  "number": "3.1.16",
  "title": "",
  "body": " It is possible to use linear combinations rather than dot products to compute a matrix-matrix product. If the columns of matrix are given by , then the matrix product consists of columns, each of which is a matrix-vector product:   If we return to Example above, we may use this approach to compute and   "
},
{
  "id": "ex-matmatproduct2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-matmatproduct2",
  "type": "Example",
  "number": "3.1.17",
  "title": "",
  "body": "  Let Find .    Fill in the blanks below.    "
},
{
  "id": "ex-linearcombofcols1",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-linearcombofcols1",
  "type": "Example",
  "number": "3.1.18",
  "title": "",
  "body": "  Suppose that we know that satisfies   Use this information to express as a linear combination of the columns of .        "
},
{
  "id": "init-matmultnotcomm",
  "level": "2",
  "url": "Section-Matrix-Operations.html#init-matmultnotcomm",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "",
  "body": " Let   Observe that both and are defined, and both products are matrices. Let's compute the two products Clearly . We say that and  do not commute .  "
},
{
  "id": "Subsection-Properties-of-Matrix-Multiplication-3",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Properties-of-Matrix-Multiplication-3",
  "type": "Warning",
  "number": "3.1.19",
  "title": "",
  "body": " Matrix multiplication is not commutative. While it is possible to find specific matrices that commute, matrix multiplication is not commutative in general.  "
},
{
  "id": "Subsection-Properties-of-Matrix-Multiplication-6",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Properties-of-Matrix-Multiplication-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "th-propertiesofmatrixmultiplication",
  "level": "2",
  "url": "Section-Matrix-Operations.html#th-propertiesofmatrixmultiplication",
  "type": "Theorem",
  "number": "3.1.20",
  "title": "Properties of Matrix Multiplication.",
  "body": " Properties of Matrix Multiplication   The following hold for matrices and and for scalar ,   Left Distributive Property     Right Distributive Property:     Associativity:     Matrix multiplication behaves well with scalar multiplication:     Multiplicative Identity:       "
},
{
  "id": "Subsection-Properties-of-Matrix-Multiplication-9",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Properties-of-Matrix-Multiplication-9",
  "type": "Proof",
  "number": "3.1.2.3.1",
  "title": "",
  "body": " We prove using the expression in ( ) for the -entry of a matrix product. (The proof of is similar.) The -entry of is given by We recognize the right hand side as the -entry of . Thus .  For , For , the -entry of the product is given by the dot product of the row of with the standard unit vector . Clearly, this dot product is . Because the -entry of the product is equal to the -entry , we conclude that . The proof that is similar.  Note that we skipped the proof of , which is quite cumbersome using sigma notation. We will easily tackle this proof later in the course when we cover composition of linear Transformations.  "
},
{
  "id": "Subsection-Transpose-of-a-Matrix-2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Transpose-of-a-Matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transpose transpose of "
},
{
  "id": "def-matrixtranspose",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-matrixtranspose",
  "type": "Definition",
  "number": "3.1.21",
  "title": "The Transpose of a Matrix.",
  "body": " The Transpose of a Matrix   Let be an matrix. Then the transpose of , denoted by , is the matrix given by The -entry of becomes the -entry of .   "
},
{
  "id": "ex-transposematrix",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-transposematrix",
  "type": "Problem",
  "number": "3.1.22",
  "title": "",
  "body": "  Calculate for the following matrix      Note that is a matrix, while is a matrix. The columns of are the rows of , and the rows of are the columns of .   "
},
{
  "id": "th-transposeproperties",
  "level": "2",
  "url": "Section-Matrix-Operations.html#th-transposeproperties",
  "type": "Theorem",
  "number": "3.1.23",
  "title": "Properties of the Transpose of a Matrix.",
  "body": " Properties of the Transpose of a Matrix   Let be an matrix, an matrix, and a scalar. Then                         "
},
{
  "id": "Subsection-Transpose-of-a-Matrix-9",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Transpose-of-a-Matrix-9",
  "type": "Proof",
  "number": "3.1.3.1",
  "title": "",
  "body": " [Proof of :] Note that and have compatible dimensions, so that is defined and has dimensions . Thus, has dimensions . On the right side of the equality, has dimensions , and has dimensions . Therefore is defined and has dimensions .  Now we know that and have the same dimensions.  To show that we need to show that their corresponding entries are equal. Recall that the -entry of is given by the dot product of the row of and the column of . The same dot product is also the -entry of .  The -entry of is given by the dot product of the row of and the column of . But the row of is has the same entries as the column of , and the column of has the same entries as the row of . Therefore the -entry of is also equal to the -entry of .  Thus, the corresponding components of are equal and we conclude that .  "
},
{
  "id": "def-symmetricandskewsymmetric",
  "level": "2",
  "url": "Section-Matrix-Operations.html#def-symmetricandskewsymmetric",
  "type": "Definition",
  "number": "3.1.24",
  "title": "Symmetric and Skew Symmetric Matrices.",
  "body": " Symmetric and Skew Symmetric Matrices   An matrix is said to be symmetric if It is said to be skew symmetric if    "
},
{
  "id": "ex-symmetricmatrix",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-symmetricmatrix",
  "type": "Example",
  "number": "3.1.25",
  "title": "",
  "body": "  Let Show that is symmetric.     Hence, , so is symmetric.   "
},
{
  "id": "ex-skewsymmetricmatrix",
  "level": "2",
  "url": "Section-Matrix-Operations.html#ex-skewsymmetricmatrix",
  "type": "Example",
  "number": "3.1.26",
  "title": "",
  "body": "  Let Show that is skew symmetric.     Each entry of is equal to times the same entry of . Hence, and so by , is skew symmetric.   "
},
{
  "id": "Subsection-Transpose-of-a-Matrix-15",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Subsection-Transpose-of-a-Matrix-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonal matrix "
},
{
  "id": "prob-matrixops1",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matrixops1",
  "type": "Exercise",
  "number": "3.1.4.1",
  "title": "",
  "body": "  If then what is the matrix ?        "
},
{
  "id": "prob-matrixops2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matrixops2",
  "type": "Exercise",
  "number": "3.1.4.2",
  "title": "",
  "body": "  If then what is the matrix ?        "
},
{
  "id": "prob-proofmataddass",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-proofmataddass",
  "type": "Exercise",
  "number": "3.1.4.3",
  "title": "",
  "body": "  Prove properties and of .   "
},
{
  "id": "prob-proofpropertiesscalarmult",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-proofpropertiesscalarmult",
  "type": "Exercise",
  "number": "3.1.4.4",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-matprodundefined",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matprodundefined",
  "type": "Exercise",
  "number": "3.1.4.5",
  "title": "",
  "body": "  Explain why the following product is not defined.    "
},
{
  "id": "prob-lincombcols",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-lincombcols",
  "type": "Exercise",
  "number": "3.1.4.6",
  "title": "",
  "body": "  Express the given product as a linear combination of the columns of the matrix.         "
},
{
  "id": "prob-matproddim-2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matproddim-2",
  "type": "Exercise",
  "number": "3.1.4.7",
  "title": "",
  "body": "       Dimensions of product: .   "
},
{
  "id": "prob-matproddim-3",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matproddim-3",
  "type": "Exercise",
  "number": "3.1.4.8",
  "title": "",
  "body": "       Dimensions of product:    "
},
{
  "id": "prob-matprod-2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matprod-2",
  "type": "Exercise",
  "number": "3.1.4.9",
  "title": "",
  "body": "           "
},
{
  "id": "prob-matprod-3",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matprod-3",
  "type": "Exercise",
  "number": "3.1.4.10",
  "title": "",
  "body": "           "
},
{
  "id": "prob-matprod-4",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-matprod-4",
  "type": "Exercise",
  "number": "3.1.4.11",
  "title": "",
  "body": "           "
},
{
  "id": "prob-transpropsproofs",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-transpropsproofs",
  "type": "Exercise",
  "number": "3.1.4.12",
  "title": "",
  "body": "  Prove Properties , and of .   "
},
{
  "id": "prob-ATtimesAdimensions",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-ATtimesAdimensions",
  "type": "Exercise",
  "number": "3.1.4.13",
  "title": "",
  "body": "  Let be an arbitrary matrix. What can you say about the dimensions of the product ?   "
},
{
  "id": "Section-Matrix-Operations-16-11-2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-16-11-2",
  "type": "Exercise",
  "number": "3.1.4.14",
  "title": "",
  "body": "         Symmetric      Skew symmetric      Neither     "
},
{
  "id": "prob-symmetricclassification2",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-symmetricclassification2",
  "type": "Exercise",
  "number": "3.1.4.15",
  "title": "",
  "body": "         Symmetric      Skew symmetric      Neither     "
},
{
  "id": "prob-symmetricclassification3",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-symmetricclassification3",
  "type": "Exercise",
  "number": "3.1.4.16",
  "title": "",
  "body": "         Symmetric      Skew symmetric      Neither     "
},
{
  "id": "prob-4by4symmetricex",
  "level": "2",
  "url": "Section-Matrix-Operations.html#prob-4by4symmetricex",
  "type": "Exercise",
  "number": "3.1.4.17",
  "title": "",
  "body": "  Give your own example of a skew symmetric matrix.   "
},
{
  "id": "Section-Matrix-Operations-16-13",
  "level": "2",
  "url": "Section-Matrix-Operations.html#Section-Matrix-Operations-16-13",
  "type": "Exercise",
  "number": "3.1.4.18",
  "title": "",
  "body": "  Make a conjecture about the main diagonal entries of a skew symmetric matrix. Prove your conjecture.   "
},
{
  "id": "Section-The-Inverse-of-a-Matrix",
  "level": "1",
  "url": "Section-The-Inverse-of-a-Matrix.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Inverse of a Matrix",
  "body": " The Inverse of a Matrix  Consider the equation . It takes little time to recognize that the solution to this equation is . In fact, the solution is so obvious that we do not think about the algebraic steps necessary to find it. Let's take a look at these steps in detail.     This process utilizes many properties of real-number multiplication. In particular, we make use of existence of multiplicative inverses . Every non-zero real number has a multiplicative inverse with the property that . We say that is the multiplicative identity because .  Given a matrix equation , we would like to follow a process similar to the one above to solve this matrix equation for .  Observe that the role of the multiplicative identity for square matrices is filled by because . Given an matrix , a multiplicative inverse of would have to be some matrix such that Assuming that such an inverse exists, this is what the process of solving the equation would look like:         Let be an matrix. An matrix is called an inverse of if where is an identity matrix. If such an inverse matrix exists, we say that is invertible . If an inverse does not exist, we say that is not invertible.    It follows directly from the way the definition is stated that if is an inverse of , then is an inverse of . We say that and are inverses of each other. The following theorem shows that matrix inverses are unique.    Suppose is an invertible matrix, and is an inverse of . Then is unique.    Because is an inverse of , we have: Suppose there exists another matrix such that Then        Now that we know that a matrix cannot have more than one inverse, we can safely refer to the inverse of as .    Let Verify that and are inverses of each other.    We will show that .        Use what we found in to solve the matrix equation:     We multiply both sides of the equation by the inverse of .      We now prove several useful properties of matrix inverses.    The following properties are stated for square matrices of appropriate sizes.        For an invertible matrix , .    If and are invertible matrices, then is invertible and (Shoes and socks rule).    If is an invertible matrix and is a non-zero number, then .    If is an invertible matrix, then is also invertible, and .       We will prove . The remaining properties are left as exercises.  [Proof of :]: We will check to see if is the inverse of .  Thus is invertible and .     Computing the Inverse  We now turn to the question of how to find the inverse of a square matrix, or determine that the inverse does not exist. Given a square matrix , we are looking for a square matrix such that We will start by attempting to satisfy . Let be the columns of , then where each is a standard unit vector of . This gives us a system of equations for each . If each has a unique solution, then finding these solutions will give us the columns of the desired matrix .  First, suppose that , then we can use elementary row operations to carry each to its reduced row-echelon form. Observe that the row operations that carry to will be the same for each . We can, therefore, combine the process of solving systems of equations into a single process Each is a unique solution of , and we conclude that is a solution to . By , we can reverse the elementary row operations to obtain But the same row operations would also give us We conclude that , and .  Next, suppose that . Then must contain a row of zeros. Because one of the rows of was completely wiped out by elementary row operations, one of the rows of must be a linear combination of the other rows. Suppose row is a linear combination of the other rows. Then row can be carried to a row of zeros. But then the system is inconsistent. This is because has a as the entry and zeros everywhere else. The in the spot will not be affected by elementary row operations, and the row will eventually look like this This shows that a matrix such that does not exist, and does not have an inverse. We have just proved the following theorem.   Row-reduction Method for Computing the Inverse of a Matrix   Let be a square matrix. If it is possible to use elementary row operations to carry the augmented matrix to , then . If such a reduction is not possible, then does not have an inverse.      A square matrix has an inverse if and only if .    Finding inverses is important. We exhibit two examples of this.    Find or demonstrate that does not exist.     We start with the augmented matrix       We conclude that       Find or demonstrate that is not invertible.     We start with the augmented matrix    At this point we see that the left-hand side cannot be turned into through elementary row operations. We conclude that does not exist.      Recall that a square matrix whose reduced row-echelon form is the identity matrix is called nonsingular . ( ) According to , a matrix is invertible if and only if it is nonsingular. For this reason many linear algebra texts use the terms invertible and nonsingular as synonyms.      Inverse of a Matrix  We will conclude this section by discussing the inverse of a nonsingular matrix. Let be a nonsingular matrix. We can find by using the row reduction method described above, that is, by computing the reduced row-echelon form of . Row reduction yields the following: Note that the denominator of each term in the inverse matrix is the same. Factoring it out, gives us the following formula for .         Clearly, the expression for is defined, if and only if . So, what happens when ? In you will be asked to fill in the steps of the row reduction procedure that produces this formula, and show that if then does not have an inverse.      Verify that the matrix is its own inverse.      Use the row-reduction method for computing matrix inverses to explain why the given matrix does not have an inverse.       Let Are and inverses of each other?    Yes, and are inverses.      Prove and of .      Prove and of .      Use the following invertible matrices to illustrate , , and of .       In we found the inverse of Use to solve the equation            Find the inverse of each matrix by using the row-reduction procedure.            Use the row-reduction method to prove Formula for a nonsingular matrix. Show that if then does not have an inverse.    After going through the row reduction, try it again, considering the possibility that .      Use to find the inverse of Use to solve the equation            For each matrix below refer to to find the value of for which the matrix is not invertible.                                          Suppose and is an invertible matrix. Does it follow that Explain why or why not.      Suppose and is a non-invertible matrix. Does it follow that Explain why or why not.      Give an example of a matrix such that and yet and       Suppose is a symmetric, invertible matrix. Does it follow that is symmetric? What if we change ``symmetric\" to ``skew symmetric\"? (See .)      Suppose and are invertible matrices. Does it follow that is invertible?     "
},
{
  "id": "Section-The-Inverse-of-a-Matrix-2",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#Section-The-Inverse-of-a-Matrix-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicative inverses multiplicative identity "
},
{
  "id": "def-matinverse",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#def-matinverse",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Let be an matrix. An matrix is called an inverse of if where is an identity matrix. If such an inverse matrix exists, we say that is invertible . If an inverse does not exist, we say that is not invertible.   "
},
{
  "id": "th-matinverseunique",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#th-matinverseunique",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  Suppose is an invertible matrix, and is an inverse of . Then is unique.    Because is an inverse of , we have: Suppose there exists another matrix such that Then       "
},
{
  "id": "ex-inverse1",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#ex-inverse1",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Let Verify that and are inverses of each other.    We will show that .     "
},
{
  "id": "ex-inverse2",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#ex-inverse2",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Use what we found in to solve the matrix equation:     We multiply both sides of the equation by the inverse of .     "
},
{
  "id": "th-invprop",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#th-invprop",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "",
  "body": "  The following properties are stated for square matrices of appropriate sizes.        For an invertible matrix , .    If and are invertible matrices, then is invertible and (Shoes and socks rule).    If is an invertible matrix and is a non-zero number, then .    If is an invertible matrix, then is also invertible, and .       We will prove . The remaining properties are left as exercises.  [Proof of :]: We will check to see if is the inverse of .  Thus is invertible and .   "
},
{
  "id": "th-matrixinverse",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#th-matrixinverse",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "Row-reduction Method for Computing the Inverse of a Matrix.",
  "body": " Row-reduction Method for Computing the Inverse of a Matrix   Let be a square matrix. If it is possible to use elementary row operations to carry the augmented matrix to , then . If such a reduction is not possible, then does not have an inverse.   "
},
{
  "id": "cor-rrefI",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#cor-rrefI",
  "type": "Corollary",
  "number": "3.2.7",
  "title": "",
  "body": "  A square matrix has an inverse if and only if .   "
},
{
  "id": "ex-inverse3",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#ex-inverse3",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Find or demonstrate that does not exist.     We start with the augmented matrix       We conclude that    "
},
{
  "id": "ex-findinverse2",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#ex-findinverse2",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  Find or demonstrate that is not invertible.     We start with the augmented matrix    At this point we see that the left-hand side cannot be turned into through elementary row operations. We conclude that does not exist.   "
},
{
  "id": "Subsection-Computing-the-Inverse-10",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#Subsection-Computing-the-Inverse-10",
  "type": "Remark",
  "number": "3.2.10",
  "title": "",
  "body": "  Recall that a square matrix whose reduced row-echelon form is the identity matrix is called nonsingular . ( ) According to , a matrix is invertible if and only if it is nonsingular. For this reason many linear algebra texts use the terms invertible and nonsingular as synonyms.   "
},
{
  "id": "form-detinverse",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#form-detinverse",
  "type": "Formula",
  "number": "3.2.11",
  "title": "",
  "body": "      "
},
{
  "id": "prob-owninverse",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-owninverse",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": "  Verify that the matrix is its own inverse.   "
},
{
  "id": "prob-inverseofsingularmatrix",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-inverseofsingularmatrix",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": "  Use the row-reduction method for computing matrix inverses to explain why the given matrix does not have an inverse.    "
},
{
  "id": "prob-inversesofeachother",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-inversesofeachother",
  "type": "Exercise",
  "number": "3.2.3.3",
  "title": "",
  "body": "  Let Are and inverses of each other?    Yes, and are inverses.   "
},
{
  "id": "prob-oroveinverseofid",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-oroveinverseofid",
  "type": "Exercise",
  "number": "3.2.3.4",
  "title": "",
  "body": "  Prove and of .   "
},
{
  "id": "prob-proveinverseka",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-proveinverseka",
  "type": "Exercise",
  "number": "3.2.3.5",
  "title": "",
  "body": "  Prove and of .   "
},
{
  "id": "prob-illustratematinverse",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-illustratematinverse",
  "type": "Exercise",
  "number": "3.2.3.6",
  "title": "",
  "body": "  Use the following invertible matrices to illustrate , , and of .    "
},
{
  "id": "prob-solvesysbyinverses",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-solvesysbyinverses",
  "type": "Exercise",
  "number": "3.2.3.7",
  "title": "",
  "body": "  In we found the inverse of Use to solve the equation         "
},
{
  "id": "prob-findinverse1",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-findinverse1",
  "type": "Exercise",
  "number": "3.2.3.8",
  "title": "",
  "body": "  Find the inverse of each matrix by using the row-reduction procedure.         "
},
{
  "id": "prob-inverseformula",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-inverseformula",
  "type": "Exercise",
  "number": "3.2.3.9",
  "title": "",
  "body": "  Use the row-reduction method to prove Formula for a nonsingular matrix. Show that if then does not have an inverse.    After going through the row reduction, try it again, considering the possibility that .   "
},
{
  "id": "prob-useformforinv",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-useformforinv",
  "type": "Exercise",
  "number": "3.2.3.10",
  "title": "",
  "body": "  Use to find the inverse of Use to solve the equation         "
},
{
  "id": "notinv1-2",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#notinv1-2",
  "type": "Exercise",
  "number": "3.2.3.11",
  "title": "",
  "body": "           "
},
{
  "id": "prob-notinv2",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-notinv2",
  "type": "Exercise",
  "number": "3.2.3.12",
  "title": "",
  "body": "           "
},
{
  "id": "prob-notinv3",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-notinv3",
  "type": "Exercise",
  "number": "3.2.3.13",
  "title": "",
  "body": "           "
},
{
  "id": "prob-cancelprop",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-cancelprop",
  "type": "Exercise",
  "number": "3.2.3.14",
  "title": "",
  "body": "  Suppose and is an invertible matrix. Does it follow that Explain why or why not.   "
},
{
  "id": "prob-cancelpropsingular",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-cancelpropsingular",
  "type": "Exercise",
  "number": "3.2.3.15",
  "title": "",
  "body": "  Suppose and is a non-invertible matrix. Does it follow that Explain why or why not.   "
},
{
  "id": "prob-Asquaredid",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-Asquaredid",
  "type": "Exercise",
  "number": "3.2.3.16",
  "title": "",
  "body": "  Give an example of a matrix such that and yet and    "
},
{
  "id": "prob-invofsymm",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-invofsymm",
  "type": "Exercise",
  "number": "3.2.3.17",
  "title": "",
  "body": "  Suppose is a symmetric, invertible matrix. Does it follow that is symmetric? What if we change ``symmetric\" to ``skew symmetric\"? (See .)   "
},
{
  "id": "prob-sumofinvertible",
  "level": "2",
  "url": "Section-The-Inverse-of-a-Matrix.html#prob-sumofinvertible",
  "type": "Exercise",
  "number": "3.2.3.18",
  "title": "",
  "body": "  Suppose and are invertible matrices. Does it follow that is invertible?   "
},
{
  "id": "Section-Elementary-Matrices",
  "level": "1",
  "url": "Section-Elementary-Matrices.html",
  "type": "Section",
  "number": "3.3",
  "title": "Extra Topic: Elementary Matrices",
  "body": " Extra Topic: Elementary Matrices   Consider the matrices The two matrices have something in common. Can you figure out what it is? (The answer will be given later in the problem.)     Compute and .     Observe that multiplying by on the left results in multiplying the second row of by , while multiplying by on the left results in multiplying the third row of by .    Now we need to return to the question of what and have in common. Both matrices were obtained from the identity matrix by multiplying one row of the identity by a non-zero constant. Matrices and were obtained from by multiplying one row of by and respectively. Multiplying by (or ) on the left affects in the same way.    Matrix does not have to be a square matrix. Try finding and for      Observe that and have the same effect on as they did on .      In general, if a square matrix is obtained from the identity matrix by multiplying row of by a non-zero constant , then multiplying an appropriately sized matrix on the left by results in row of being multiplied by .  Recall that multiplication of a row of a matrix by a non-zero constant is one of three elementary row operations . Applying such an elementary row operation to in order to produce , results in applying the same elementary row operation to when is multiplied by on the left.   Consider the matrices As in the previous Exploration, the two matrices have something in common. Both and were obtained from the identity matrix by adding a multiple of one row to another row.    Can you guess what will happen if we multiply a matrix by and on the left, were is          As you had probably guessed, multiplication by resulted in the third row of being added to the first, and multiplication by produced a matrix by adding times the first row to the second row of . The elementary row operations performed on mimic the elementary row operations performed on in order to obtain and .   In general, if a square matrix is obtained from the identity matrix by adding times row of to row , then multiplying an appropriately sized matrix on the left by results in times row of being added to row of .  Recall that adding a scalar multiple of one row to another row of a matrix is one of three elementary row operations . Applying such an elementary row operation to in order to produce , results in applying the same elementary row operation to when is multiplied by on the left.   The matrices above are special because when we multiply them by any appropriately sized matrix , we are performing row operations on .    Can you construct a matrix such that is the same as except that its first and third rows are switched?            The matrices of , and are known as elementary matrices because they perform elementary row operations on appropriately sized matrices.      An elementary matrix is a square matrix formed by applying a single elementary row operation to the identity matrix.    Suppose is an matrix. If is an elementary matrix formed by performing a certain row operation on the identity matrix, then multiplying any matrix on the left by is equivalent to performing that same row operation on . As there are three types of elementary row operations, there are three types of elementary matrices.  Elementary matrices give us a new way of looking at Gauss-Jordan elimination. Suppose it takes elementary row operations to transform into , its reduced row-echelon form. Then we can represent this reduced row-echelon form as where each is the elementary matrix corresponding to the th row operation performed on .   Inverses of Elementary Matrices  It is easy to see that any elementary matrix is invertible, because if is formed by applying a certain row operation to the identity matrix , then there is a single row operation that may be applied to to get back. For example, in , is formed by adding times the first row of the identity to the second row of the identity. It follows that should be the matrix formed by adding times the first row of the identity to the second row of the identity, i.e. And indeed we can check and also .  As part of the Practice Problem set you are asked to find the inverse of each of the other elementary matrices in , and . Once we have accounted for each of the three types of elementary matrices, we will have proven the following theorem.    Elementary matrices are invertible, and the inverse of an elementary matrix is an elementary matrix.    Suppose is obtained from by switching rows and . To find the inverse of , we need to find a matrix such that . To get from back to , rows and of must be switched. This can be accomplished by multiplying by itself on the left. So, is its own inverse. We can use the same line of reasoning to show that the other two types of elementary matrices are also invertible, and their inverses are also elementary matrices. The details are left to the reader.    Recall that a square matrix is called nonsingular provided that .    The following statements are equivalent for an matrix .    is nonsingular     is a product of elementary matrices     is invertible       We will prove equivalence of the three statements by showing that   [Proof of ]: Suppose . Then can be carried to the identity by elementary row operations. So, there exist elementary matrices such that By , elementary matrices are invertible and their inverses are also elementary matrices. Thus, we can write as a product of elementary matrices as follows:   [Proof of ]: Suppose , where are elementary matrices. In we proved that . By repeated applications of this theorem we have We conclude that is invertible.  [Proof of ]: See the corollary to Theorem .        For each elementary matrix below, determine the elementary row operation that results from multiplying a matrix by on the left. Write down without going through the row-reduction procedure.          Think of an elementary row operation that would undo the row operation caused by .                                    Find the inverse of each of the following elementary matrices from , and .       Finish the proof of .      Express as a product of elementary matrices. Then consider whether the representation unique and prove your claim.     Row-reduce to find . Record the elementary row operations as you perform row reduction. You will be able to conclude that . Find the inverse of each and multiply by the inverses on the left.      In , and we performed elementary row operations on by multiplying by elementary matrices on the left. Compute and . Summarize your findings.             If possible, express as a product of elementary matrices.     "
},
{
  "id": "init-elementarymat2",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#init-elementarymat2",
  "type": "Exploration",
  "number": "3.3.1",
  "title": "",
  "body": " Consider the matrices The two matrices have something in common. Can you figure out what it is? (The answer will be given later in the problem.)     Compute and .     Observe that multiplying by on the left results in multiplying the second row of by , while multiplying by on the left results in multiplying the third row of by .    Now we need to return to the question of what and have in common. Both matrices were obtained from the identity matrix by multiplying one row of the identity by a non-zero constant. Matrices and were obtained from by multiplying one row of by and respectively. Multiplying by (or ) on the left affects in the same way.    Matrix does not have to be a square matrix. Try finding and for      Observe that and have the same effect on as they did on .     "
},
{
  "id": "Section-Elementary-Matrices-4",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#Section-Elementary-Matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "init-elementarymat1",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#init-elementarymat1",
  "type": "Exploration",
  "number": "3.3.2",
  "title": "",
  "body": " Consider the matrices As in the previous Exploration, the two matrices have something in common. Both and were obtained from the identity matrix by adding a multiple of one row to another row.    Can you guess what will happen if we multiply a matrix by and on the left, were is          As you had probably guessed, multiplication by resulted in the third row of being added to the first, and multiplication by produced a matrix by adding times the first row to the second row of . The elementary row operations performed on mimic the elementary row operations performed on in order to obtain and .  "
},
{
  "id": "Section-Elementary-Matrices-7",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#Section-Elementary-Matrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "init-elementarymat3",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#init-elementarymat3",
  "type": "Exploration",
  "number": "3.3.3",
  "title": "",
  "body": " The matrices above are special because when we multiply them by any appropriately sized matrix , we are performing row operations on .    Can you construct a matrix such that is the same as except that its first and third rows are switched?         "
},
{
  "id": "Section-Elementary-Matrices-9",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#Section-Elementary-Matrices-9",
  "type": "Remark",
  "number": "3.3.5",
  "title": "",
  "body": "  The matrices of , and are known as elementary matrices because they perform elementary row operations on appropriately sized matrices.   "
},
{
  "id": "def-elemmatrix",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#def-elemmatrix",
  "type": "Definition",
  "number": "3.3.6",
  "title": "",
  "body": "  An elementary matrix is a square matrix formed by applying a single elementary row operation to the identity matrix.   "
},
{
  "id": "th-elemmatricesinvertible",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#th-elemmatricesinvertible",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "",
  "body": "  Elementary matrices are invertible, and the inverse of an elementary matrix is an elementary matrix.    Suppose is obtained from by switching rows and . To find the inverse of , we need to find a matrix such that . To get from back to , rows and of must be switched. This can be accomplished by multiplying by itself on the left. So, is its own inverse. We can use the same line of reasoning to show that the other two types of elementary matrices are also invertible, and their inverses are also elementary matrices. The details are left to the reader.   "
},
{
  "id": "Subsection-Inverses-of-Elementary-Matrices-5",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#Subsection-Inverses-of-Elementary-Matrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonsingular "
},
{
  "id": "th-elemmatrices",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#th-elemmatrices",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "",
  "body": "  The following statements are equivalent for an matrix .    is nonsingular     is a product of elementary matrices     is invertible       We will prove equivalence of the three statements by showing that   [Proof of ]: Suppose . Then can be carried to the identity by elementary row operations. So, there exist elementary matrices such that By , elementary matrices are invertible and their inverses are also elementary matrices. Thus, we can write as a product of elementary matrices as follows:   [Proof of ]: Suppose , where are elementary matrices. In we proved that . By repeated applications of this theorem we have We conclude that is invertible.  [Proof of ]: See the corollary to Theorem .   "
},
{
  "id": "elemmatrices1",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#elemmatrices1",
  "type": "Exercise",
  "number": "3.3.2.1",
  "title": "",
  "body": "       Think of an elementary row operation that would undo the row operation caused by .        "
},
{
  "id": "prob-elemmatrices2",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-elemmatrices2",
  "type": "Exercise",
  "number": "3.3.2.2",
  "title": "",
  "body": "           "
},
{
  "id": "prob-elemmatrices3",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-elemmatrices3",
  "type": "Exercise",
  "number": "3.3.2.3",
  "title": "",
  "body": "           "
},
{
  "id": "prob-elem-mat-inv",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-elem-mat-inv",
  "type": "Exercise",
  "number": "3.3.2.4",
  "title": "",
  "body": "  Find the inverse of each of the following elementary matrices from , and .    "
},
{
  "id": "prob-proofofelemmatricesinvert",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-proofofelemmatricesinvert",
  "type": "Exercise",
  "number": "3.3.2.5",
  "title": "",
  "body": "  Finish the proof of .   "
},
{
  "id": "prob-prodelemmatrices",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-prodelemmatrices",
  "type": "Exercise",
  "number": "3.3.2.6",
  "title": "",
  "body": "  Express as a product of elementary matrices. Then consider whether the representation unique and prove your claim.     Row-reduce to find . Record the elementary row operations as you perform row reduction. You will be able to conclude that . Find the inverse of each and multiply by the inverses on the left.   "
},
{
  "id": "prob-explorationelemmat",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-explorationelemmat",
  "type": "Exercise",
  "number": "3.3.2.7",
  "title": "",
  "body": "  In , and we performed elementary row operations on by multiplying by elementary matrices on the left. Compute and . Summarize your findings.          "
},
{
  "id": "prob-expressasprodelemmat",
  "level": "2",
  "url": "Section-Elementary-Matrices.html#prob-expressasprodelemmat",
  "type": "Exercise",
  "number": "3.3.2.8",
  "title": "",
  "body": "  If possible, express as a product of elementary matrices.   "
},
{
  "id": "Section-LU-Factorization",
  "level": "1",
  "url": "Section-LU-Factorization.html",
  "type": "Section",
  "number": "3.4",
  "title": "Extra Topic: <span class=\"process-math\">\\(LU\\)<\/span> Factorization",
  "body": " Extra Topic: Factorization   Consider the equation: This equation is unusual in that it involves two matrices on the left-hand side. If we multiply the matrices together, we get Gaussian elimination yields: We conclude that Now that we know the answer, we will turn to the original question and consider the advantages of the format of the original problem. Observe that the two matrices have a distinct pattern. The matrix on the left has zeros above the main diagonal, while the matrix on the right has zeros below the main diagonal. Matrices that follow such a pattern are called lower triangular and upper triangular matrices, respectively.  Let Then we can write the original equation as The equation corresponds to the system This system can be easily solved by substitution, giving us   So, Recall that we let The equation corresponds to the system     Solve the above system of equations in any way you wish.       Thus, . Observe that this is the same answer that we obtained in the beginning of the problem using Gaussian elimination.   Given a matrix equation such as of , often in practice we express the matrix on the left as a product of an upper triangular matrix and a lower triangular matrix and use substitution to solve the equation instead of using Gaussian elimination to find the solution. In , The process of taking a matrix and expressing it as a product of a lower triangular matrix and an upper triangular matrix is called factorization .  Not every matrix has an factorization, but we will see that we can correct for that. The next examples are more involved with multiple parts to cover.   Consider the system We can express this system as the matrix equation , and we get Unfortunately, for reasons we will explain below, it is not possible to find an factorization of this coefficient matrix. However, if we simply swap the first two equations: we are able to find an factorization of the coefficient matrix. (How we actually come up with an factorization of will be discussed after this example.)  To understand how an factorization can be used, it is helpful to think of this system of equations as a matrix equation.   So if we let and also write , then we are able to solve for using forward-substitution .      See if you can do it!         Once we have the values of , since , all that remains is to solve the following matrix equation using back-substitution.     By now you are quite used to solving this kind of problem... so compute which written out takes the form           We here present one method of finding LU factorizations using inspection.    Find an factorization of One way to find the factorization% is to simply look for it directly. We need By multiplying the latter matrices we get and from this, it is a simple exercise to determine each of the unknowns. For example, from the first column, we get and then       See if you can continue to determine the entire factorization of .          Finding an factorization by the Multiplier Method  In the following example we demonstrate a method for computing an factorization known as the multiplier method.    Find an factorization for     Write the matrix as the following product. In the matrix on the right, we begin with the left row and zero out the entries below the top using the row operation which involves adding a multiple of a row to another row. You do this and also update the matrix on the left so that the product will be unchanged.  Here is the first step. We take times the top row and add to the second. Then take times the top row and add to the second in the matrix on the left. This gives us The next step is to take times the top row and add to the bottom in the matrix on the right. To ensure that the product is unchanged, we place a in the bottom left corner in the matrix on the left. Thus the second step yields For our final step, we take times the middle row on right and add to bottom row. Updating the matrix on the left in the manner we did earlier, we get At this point, we can stop. We have an factorization of the original matrix. We can always multiply the matrices to check, if we wish.    Notice that when we perform the multiplier method, we are making repeated use of a certain type of elementary row operation, namely, we are adding a scalar multiple of one row to a row below it. The reason this helps to create an factorization depends upon the fact that the elementary matrices corresponding to such operations are lower triangular. To understand how this works, we begin with a lemma.    Let be a lower (upper) triangular matrix which has ones down the main diagonal. Then also is a lower (upper) triangular matrix which has ones down the main diagonal. In the case that is of the form where all entries are zero except for the left column and main diagonal, it is also the case that is obtained from by simply multiplying each entry below the main diagonal in by . The same is true if the single nonzero column is in another position.    Consider the usual setup for finding the inverse . Each row operation used on to transform this matrix to reduced row echelon form changes only the entries in below the main diagonal. Whether we have the special case of given in where the nonzero nondiagonal entries are in the left column, or if the single nonzero column is in another position, it is clear that multiplication by as described in the lemma gives us .    For a simple illustration of the lemma, observe: Now let be an matrix, say and assume can be row reduced to an upper triangular form using only row operation 3. Thus, in particular, . Multiply on the left by This is the product of elementary matrices which make modifications in the first column only. It is equivalent to taking times the first row and adding to the second. Then taking times the first row and adding to the third and so forth. The quotients in the first column of the above matrix are the multipliers. Thus the result is of the form By assumption, and so it is possible to use this entry to zero out all the entries below it in the matrix on the right by multiplication by a matrix of the form where is an matrix of the form Again, the entries in the first column below the 1 are the multipliers. Continuing this way, zeroing out the entries below the diagonal entries, finally leads us to where is upper triangular. Each has all ones down the main diagonal and is lower triangular. Now we can multiply both sides by the inverses of the in the reverse order. This yields By , this implies that the product of those is a lower triangular matrix having all ones down the main diagonal.  The above discussion and lemma explain how the multiplier method works. The expressions which we obtained in building , and which we denote respectively by to save notation, are the multipliers. \\index{multipliers} Therefore, according to the lemma, to find we simply write Similar considerations apply to the other Thus is a product of the form where each factor has at most one nonzero column, the position of which moves from left to right as we scan the above product of matrices from left to right. It follows from what we know about the effect of multiplying on the left by an elementary matrix that the above product is of the form To sum up the procedure, beginning at the left column and moving toward the right, you simply insert, into the corresponding position in the identity matrix, times the multiplier which was used to zero out an entry in that position below the main diagonal in while retaining the main diagonal which consists entirely of ones. This will give us as we create using row operation 3.  We now return to , to understand why we could not use the multiplier method to find an factorization of the coefficient matrix. Suppose we had written Our first step of Gaussian elimination would require a row swap to get a nonzero entry into the top left corner (we swapped rows 1 and 2 in ). Unfortunately, the elementary matrix that accomplishes this, So we cannot apply Lemma to generate a lower triangular .  If the elementary matrices used to reduce our matrix to row-echelon form are all lower triangular, then we can find an factorization. But what about the general case?    Suppose an matrix is transformed to a row-echelon matrix using Gaussian elimination. Let be the elementary matrices corresponding (in order) to the row interchanges used, and write . (If no interchanges are used take .) Then:    is the matrix obtained from by doing these interchanges (in order) to A.     has an factorization.       For a proof of the above theorem, the reader is referred to [Nicholson].  The matrix in the above theorem is called a permutation matrix . These matrices have other important applications, as we will see later.      Use the given factorization of the coefficient matrix to solve the system of equations. Observe that an factorization of the coefficient matrix is       Find the factorization of the coefficient matrix and use it to solve the system of equations.          The factorization is and the solution to the system of equations is            The factorization is and the solution to the system of equations is        Is there only one factorization for a given matrix?    Consider the equation Look for all possible factorizations.      Can you show that every permutation matrix is invertible? If so, What does the inverse of a permutation matrix look like? Recall that a permutation matrix is matrix of .     "
},
{
  "id": "init-LUfactorization",
  "level": "2",
  "url": "Section-LU-Factorization.html#init-LUfactorization",
  "type": "Exploration",
  "number": "3.4.1",
  "title": "",
  "body": " Consider the equation: This equation is unusual in that it involves two matrices on the left-hand side. If we multiply the matrices together, we get Gaussian elimination yields: We conclude that Now that we know the answer, we will turn to the original question and consider the advantages of the format of the original problem. Observe that the two matrices have a distinct pattern. The matrix on the left has zeros above the main diagonal, while the matrix on the right has zeros below the main diagonal. Matrices that follow such a pattern are called lower triangular and upper triangular matrices, respectively.  Let Then we can write the original equation as The equation corresponds to the system This system can be easily solved by substitution, giving us   So, Recall that we let The equation corresponds to the system     Solve the above system of equations in any way you wish.       Thus, . Observe that this is the same answer that we obtained in the beginning of the problem using Gaussian elimination.  "
},
{
  "id": "Section-LU-Factorization-3",
  "level": "2",
  "url": "Section-LU-Factorization.html#Section-LU-Factorization-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorization "
},
{
  "id": "ex-usingLU",
  "level": "2",
  "url": "Section-LU-Factorization.html#ex-usingLU",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": " Consider the system We can express this system as the matrix equation , and we get Unfortunately, for reasons we will explain below, it is not possible to find an factorization of this coefficient matrix. However, if we simply swap the first two equations: we are able to find an factorization of the coefficient matrix. (How we actually come up with an factorization of will be discussed after this example.)  To understand how an factorization can be used, it is helpful to think of this system of equations as a matrix equation.   So if we let and also write , then we are able to solve for using forward-substitution .      See if you can do it!         Once we have the values of , since , all that remains is to solve the following matrix equation using back-substitution.     By now you are quite used to solving this kind of problem... so compute which written out takes the form          "
},
{
  "id": "ex-LU1",
  "level": "2",
  "url": "Section-LU-Factorization.html#ex-LU1",
  "type": "Example",
  "number": "3.4.5",
  "title": "",
  "body": "  Find an factorization of One way to find the factorization% is to simply look for it directly. We need By multiplying the latter matrices we get and from this, it is a simple exercise to determine each of the unknowns. For example, from the first column, we get and then    "
},
{
  "id": "Section-LU-Factorization-8",
  "level": "2",
  "url": "Section-LU-Factorization.html#Section-LU-Factorization-8",
  "type": "Problem",
  "number": "3.4.6",
  "title": "",
  "body": "  See if you can continue to determine the entire factorization of .        "
},
{
  "id": "ex-multiplierLU",
  "level": "2",
  "url": "Section-LU-Factorization.html#ex-multiplierLU",
  "type": "Example",
  "number": "3.4.7",
  "title": "",
  "body": "  Find an factorization for     Write the matrix as the following product. In the matrix on the right, we begin with the left row and zero out the entries below the top using the row operation which involves adding a multiple of a row to another row. You do this and also update the matrix on the left so that the product will be unchanged.  Here is the first step. We take times the top row and add to the second. Then take times the top row and add to the second in the matrix on the left. This gives us The next step is to take times the top row and add to the bottom in the matrix on the right. To ensure that the product is unchanged, we place a in the bottom left corner in the matrix on the left. Thus the second step yields For our final step, we take times the middle row on right and add to bottom row. Updating the matrix on the left in the manner we did earlier, we get At this point, we can stop. We have an factorization of the original matrix. We can always multiply the matrices to check, if we wish.   "
},
{
  "id": "lem-multipliermethodtriangularmatrices",
  "level": "2",
  "url": "Section-LU-Factorization.html#lem-multipliermethodtriangularmatrices",
  "type": "Lemma",
  "number": "3.4.8",
  "title": "",
  "body": "  Let be a lower (upper) triangular matrix which has ones down the main diagonal. Then also is a lower (upper) triangular matrix which has ones down the main diagonal. In the case that is of the form where all entries are zero except for the left column and main diagonal, it is also the case that is obtained from by simply multiplying each entry below the main diagonal in by . The same is true if the single nonzero column is in another position.    Consider the usual setup for finding the inverse . Each row operation used on to transform this matrix to reduced row echelon form changes only the entries in below the main diagonal. Whether we have the special case of given in where the nonzero nondiagonal entries are in the left column, or if the single nonzero column is in another position, it is clear that multiplication by as described in the lemma gives us .   "
},
{
  "id": "th-LUPA",
  "level": "2",
  "url": "Section-LU-Factorization.html#th-LUPA",
  "type": "Theorem",
  "number": "3.4.9",
  "title": "",
  "body": "  Suppose an matrix is transformed to a row-echelon matrix using Gaussian elimination. Let be the elementary matrices corresponding (in order) to the row interchanges used, and write . (If no interchanges are used take .) Then:    is the matrix obtained from by doing these interchanges (in order) to A.     has an factorization.      "
},
{
  "id": "Subsection-Finding-an-LU-factorization-by-the-Multiplier-Method-12",
  "level": "2",
  "url": "Section-LU-Factorization.html#Subsection-Finding-an-LU-factorization-by-the-Multiplier-Method-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation matrix "
},
{
  "id": "prob-LU1",
  "level": "2",
  "url": "Section-LU-Factorization.html#prob-LU1",
  "type": "Exercise",
  "number": "3.4.2.1",
  "title": "",
  "body": "  Use the given factorization of the coefficient matrix to solve the system of equations. Observe that an factorization of the coefficient matrix is    "
},
{
  "id": "prob-LU2a",
  "level": "2",
  "url": "Section-LU-Factorization.html#prob-LU2a",
  "type": "Exercise",
  "number": "3.4.2.2",
  "title": "",
  "body": "       The factorization is and the solution to the system of equations is    "
},
{
  "id": "prob-LU2b",
  "level": "2",
  "url": "Section-LU-Factorization.html#prob-LU2b",
  "type": "Exercise",
  "number": "3.4.2.3",
  "title": "",
  "body": "       The factorization is and the solution to the system of equations is    "
},
{
  "id": "prob-LU4",
  "level": "2",
  "url": "Section-LU-Factorization.html#prob-LU4",
  "type": "Exercise",
  "number": "3.4.2.4",
  "title": "",
  "body": "  Is there only one factorization for a given matrix?    Consider the equation Look for all possible factorizations.   "
},
{
  "id": "prob-LU5",
  "level": "2",
  "url": "Section-LU-Factorization.html#prob-LU5",
  "type": "Exercise",
  "number": "3.4.2.5",
  "title": "",
  "body": "  Can you show that every permutation matrix is invertible? If so, What does the inverse of a permutation matrix look like? Recall that a permutation matrix is matrix of .   "
},
{
  "id": "Section-Application-to-Markov-Chains",
  "level": "1",
  "url": "Section-Application-to-Markov-Chains.html",
  "type": "Section",
  "number": "3.5",
  "title": "Extra Topic: Application to Markov Chains",
  "body": " Extra Topic: Application to Markov Chains  Many natural phenomena progress through various stages and can be in a variety of states at each stage. For example, the weather in a given city progresses day by day and, on any given day, may be sunny or rainy. Here the states are ``sun'' and ``rain,'' and the weather progresses from one state to another in daily stages. Another example might be a football team: The stages of its evolution are the games it plays, and the possible states are ``win,'' ``draw,'' and ``loss.''  The general setup is as follows: A ``system'' evolves through a series of ``stages,'' and at any stage it can be in any one of a finite number of ``states.'' At any given stage, the state to which it will go at the next stage depends on the past and present history of the system---that is, on the sequence of states it has occupied to date.    A Markov chain is such an evolving system wherein the state to which it will go next depends only on its present state and does not depend on the earlier history of the system.    Even in the case of a Markov chain, the state the system will occupy at any stage is determined only in terms of probabilities. In other words, chance plays a role. For example, if a football team wins a particular game, we do not know whether it will win, draw, or lose the next game. On the other hand, we may know that the team tends to persist in winning streaks; for example, if it wins one game it may win the next game of the time, lose of the time, and draw of the time. These fractions are called the probabilities of these various possibilities.  Similarly, if the team loses, it may lose the next game with probability (that is, half the time), win with probability , and draw with probability . The probabilities of the various outcomes after a drawn game will also be known.  We shall treat probabilities informally here: The probability that a given event will occur is the long-run proportion of the time that the event does indeed occur . Hence, all probabilities are numbers between and . A probability of means the event is impossible and never occurs; events with probability are certain to occur.  If a Markov chain is in a particular state, the probabilities that it goes to the various states at the next stage of its evolution are called the transition probabilities for the chain, and they are assumed to be known quantities. To motivate the general conditions that follow, consider the following simple example. Here the system is a man, the stages are his successive lunches, and the states are the two restaurants he chooses.    A man always eats lunch at one of two restaurants, and . He never eats at twice in a row. However, if he eats at , he is three times as likely to eat at next time as at . Initially, he is equally likely to eat at either restaurant.   What is the probability that he eats at on the third day after the initial one?    What proportion of his lunches does he eat at ?       The table of transition probabilities follows. The column indicates that if he eats at on one day, he never eats there again on the next day and so is certain to go to . The column shows that, if he eats at on one day, he will eat there on the next day of the time and switches to only of the time.  The restaurant he visits on a given day is not determined. The most that we can expect is to know the probability that he will visit or on that day. Let denote the state vector for day . Here denotes the probability that he eats at on day , and is the probability that he eats at on day . It is convenient to let correspond to the initial day. Because he is equally likely to eat at or on that initial day, and , so Now let denote the transition matrix . We claim that the relationship holds for all integers . This will be derived later; for now, we use it as follows to successively compute : Hence, the probability that his third lunch (after the initial one) is at is approximately , whereas the probability that it is at is . If we carry these calculations on, the next state vectors are (to five figures): Moreover, as increases the entries of s_{m} get closer and closer to the corresponding entries of . Hence, in the long run, he eats of his lunches at and at .     incorporates most of the essential features of all Markov chains. The general model is as follows: The system evolves through various stages and at each stage can be in exactly one of distinct states. It progresses through a sequence of states as time goes on. If a Markov chain is in state at a particular stage of its development, the probability that it goes to state at the next stage is called the transition probability . The matrix is called the transition matrix for the Markov chain. The situation is depicted graphically in the diagram.   State diagram    We make one important assumption about the transition matrix : It does not depend on which stage the process is in. This assumption means that the transition probabilities are independent of time ---that is, they do not change as time goes on. It is this assumption that distinguishes Markov chains in the literature of this subject.   Suppose the transition matrix of a three-state Markov chain is if, for example, the system is in state 2, then column 2 lists the probabilities of where it goes next. Thus, the probability is that it goes from state 2 to state 1, and the probability is that it goes from state 2 to state 2. The fact that means that it is impossible for it to go from state 2 to state 3 at the next stage.   Consider the th column of the transition matrix . If the system is in state at some stage of its evolution, the transition probabilities represent the fraction of the time that the system will move to state 1, state 2, \\dots, state , respectively, at the next stage. We assume that it has to go to some state at each transition, so the sum of these probabilities is : Thus, the columns of all sum to and the entries of lie between and . Hence is called a stochastic matrix .  As in , we introduce the following notation: Let denote the probability that the system is in state after transitions. The matrices are called the state vectors for the Markov chain. Note that the sum of the entries of must equal because the system must be in some state after transitions. The matrix is called the initial state vector for the Markov chain and is given as part of the data of the particular chain. For example, if the chain has only two states, then an initial vector means that it started in state 1. If it started in state 2, the initial vector would be . If it is equally likely that the system started in state 1 or in state 2.    Let be the transition matrix for an -state Markov chain. If is the state vector at stage , then for each .    [Heuristic Proof] Suppose that the Markov chain has been run times, each time starting with the same initial state vector. Recall that is the proportion of the time the system goes from state at some stage to state at the next stage, whereas is the proportion of the time it is in state at stage . Hence is (approximately) the number of times the system is in state at stage . We are going to calculate this number another way. The system got to state at stage through some other state (say state ) at stage . The number of times it was in state at that stage is (approximately) , so the number of times it got to state via state is . Summing over gives the number of times the system is in state (at stage ). This is the number we calculated before, so Dividing by gives for each , and this can be expressed as the matrix equation .    If the initial probability vector and the transition matrix are given, Theorem~ gives , one after the other, as follows: Hence, the state vector is completely determined for each by and . Let us revisit this concept in a new example.    A wolf pack always hunts in one of three regions , , and . Its hunting habits are as follows:   If it hunts in some region one day, it is as likely as not to hunt there again the next day.    If it hunts in , it never hunts in the next day.    If it hunts in or , it is equally likely to hunt in each of the other regions the next day.   If the pack hunts in on Monday, find the probability that it hunts there on Thursday.    The stages of this process are the successive days; the states are the three regions. The transition matrix is determined as follows (see the table): The first habit asserts that . Now column 1 displays what happens when the pack starts in : It never goes to state 2, so and, because the column must sum to , . Column 2 describes what happens if it starts in : and and are equal (by habit 3), so because the column sum must equal . Column 3 is filled in a similar way. Now let Monday be the initial stage. Then because the pack hunts in on that day. Then , , and describe Tuesday, Wednesday, and Thursday, respectively, and we compute them using : Hence, the probability that the pack hunts in Region on Thursday is .     Steady State Vector  Another phenomenon that was observed in can be expressed in general terms. The state vectors were calculated in that example and were found to ``approach'' . This means that the first component of becomes and remains very close to as becomes large, whereas the second component gets close to as increases. When this is the case, we say that  converges to . For large , then, there is very little error in taking , so the long-term probability that the system is in state 1 is , whereas the probability that it is in state 2 is .  In , enough state vectors were computed for the limiting vector to be apparent. However, there is a better way to do this that works in most cases.  Suppose is the transition matrix of a Markov chain, and assume that the state vectors converge to a limiting vector . Then is very close to for sufficiently large , so is also very close to . Thus, the equation from is closely approximated by so it is not surprising that should be a solution to this matrix equation. Moreover, it is easily solved because it can be written as a system of homogeneous linear equations with the entries of as variables.  In , where the general solution to is where is a parameter. But if we insist that the entries of sum to (as must be true of all state vectors), we find and so as before.  All this is predicated on the existence of a limiting vector for the sequence of state vectors of the Markov chain, and such a vector may not always exist. However, it does exist in one commonly occurring situation. A stochastic matrix is called regular if some power of has every entry greater than zero. The matrix of is regular (in this case, each entry of is positive), and the general theorem is as follows:    Let be the transition matrix of a Markov chain and assume that is regular. Then there is a unique column matrix satisfying the following conditions:    .    The entries of are positive and sum to .   Moreover, condition 1 can be written as and so gives a homogeneous system of linear equations for . Finally, the sequence of state vectors converges to in the sense that if is large enough, each entry of is closely approximated by the corresponding entry of .    This theorem will not be proved here. The interested reader can find an elementary proof in J. Kemeny, H. Mirkil, J. Snell, and G. Thompson, Finite Mathematical Structures (Englewood Cliffs, N.J.: Prentice-Hall, 1958).  If is the regular transition matrix of a Markov chain, the column satisfying conditions 1 and 2 of is called the steady-state vector for the Markov chain. The entries of are the long-term probabilities that the chain will be in each of the various states.    A man eats one of three soups---beef, chicken, and vegetable---each day. He never eats the same soup two days in a row. If he eats beef soup on a certain day, he is equally likely to eat each of the others the next day; if he does not eat beef soup, he is twice as likely to eat it the next day as the alternative.   If he has beef soup one day, what is the probability that he has it again two days later?    What are the long-run probabilities that he eats each of the three soups?       The states here are , , and , the three soups. The transition matrix is given in the table (recall that, for each state, the corresponding column lists the probabilities for the next state). If he has beef soup initially, then the initial state vector is Then two days later the state vector is . If is the transition matrix, then so he eats beef soup two days later with probability . This answers (a.) and also shows that he eats chicken and vegetable soup each with probability .  To find the long-run probabilities, we must find the steady-state vector . applies because is regular ( has positive entries), so satisfies . That is, where The solution is where is a parameter, and we use because the entries of must sum to . Hence, in the long run, he eats beef soup of the time and eats chicken soup and vegetable soup each of the time.        Which of the following stochastic matrices is regular?            Regular      Not regular               Regular      Not regular         In each case find the steady-state vector and, assuming that it starts in state 1, find the probability that it is in state 2 after transitions.          Steady state vector probability              Steady state vector probability            Steady state vector = probability               A fox hunts in three territories , , and . He never hunts in the same territory on two successive days. If he hunts in , then he hunts in the next day. If he hunts in or , he is twice as likely to hunt in the next day as in the other territory.     What proportion of his time does he spend in , in , and in ?      If he hunts in on Monday ( on Monday), what is the probability that he will hunt in on Thursday?       Assume that there are three social classes---upper, middle, and lower---and that social mobility behaves as follows:   Of the children of upper-class parents, remain upper-class, whereas become middle-class and become lower-class.    Of the children of middle-class parents, remain middle-class, whereas the others are evenly split between the upper class and the lower class.    For the children of lower-class parents, remain lower-class, whereas become middle-class and upper-class.        Find the probability that the grandchild of lower-class parents becomes upper-class.      Find the long-term breakdown of society into classes.     middle, upper, lower.       The prime minister says she will call an election. This gossip is passed from person to person with a probability that the information is passed incorrectly at any stage. Assume that when a person hears the gossip he or she passes it to one person who does not know. Find the long-term probability that a person will hear that there is going to be an election.      John makes it to work on time one Monday out of four. On other work days his behaviour is as follows: If he is late one day, he is twice as likely to come to work on time the next day as to be late. If he is on time one day, he is as likely to be late as not the next day. Find the probability of his being late and that of his being on time Wednesdays.    Probability of being late , Probability of being on time .      Suppose you have cent and match coins with a friend. At each match you either win or lose cent \\ with equal probability. If you go broke or ever get cents, you quit. Assume your friend never quits. If the states are 0, 1, 2, 3, and 4 representing your wealth, show that the corresponding transition matrix is not regular. Find the probability that you will go broke after matches.      A mouse is put into a maze of compartments, as in the diagram. Assume that he always leaves any compartment he enters and that he is equally likely to take any tunnel entry.     If he starts in compartment 1, find the probability that he is in compartment 1 again after moves.           Find the compartment in which he spends most of his time if he is left for a long time.    He spends most of his time in compartment . The steady state vector is        If a stochastic matrix has a on its main diagonal, show that it cannot be regular. Assume it is not .      If is the stage- state vector for a Markov chain, show that holds for all and (where is the transition matrix).      A stochastic matrix is doubly stochastic if all the row sums also equal . Find the steady-state vector for a doubly stochastic matrix.      Consider the stochastic matrix where and .   Show that is the steady-state vector for .    Show that converges to the matrix by first verifying inductively that for (it can be shown that the sequence of powers of any regular transition matrix converges to the matrix each of whose columns equals the steady-state vector for ).       Since and we get whence . Finally, , so converges to zero as increases.     "
},
{
  "id": "def-007191",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#def-007191",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  A Markov chain is such an evolving system wherein the state to which it will go next depends only on its present state and does not depend on the earlier history of the system.   "
},
{
  "id": "Section-Application-to-Markov-Chains-5",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Section-Application-to-Markov-Chains-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "probabilities "
},
{
  "id": "Section-Application-to-Markov-Chains-8",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Section-Application-to-Markov-Chains-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transition probabilities "
},
{
  "id": "ex-007199",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#ex-007199",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": "  A man always eats lunch at one of two restaurants, and . He never eats at twice in a row. However, if he eats at , he is three times as likely to eat at next time as at . Initially, he is equally likely to eat at either restaurant.   What is the probability that he eats at on the third day after the initial one?    What proportion of his lunches does he eat at ?       The table of transition probabilities follows. The column indicates that if he eats at on one day, he never eats there again on the next day and so is certain to go to . The column shows that, if he eats at on one day, he will eat there on the next day of the time and switches to only of the time.  The restaurant he visits on a given day is not determined. The most that we can expect is to know the probability that he will visit or on that day. Let denote the state vector for day . Here denotes the probability that he eats at on day , and is the probability that he eats at on day . It is convenient to let correspond to the initial day. Because he is equally likely to eat at or on that initial day, and , so Now let denote the transition matrix . We claim that the relationship holds for all integers . This will be derived later; for now, we use it as follows to successively compute : Hence, the probability that his third lunch (after the initial one) is at is approximately , whereas the probability that it is at is . If we carry these calculations on, the next state vectors are (to five figures): Moreover, as increases the entries of s_{m} get closer and closer to the corresponding entries of . Hence, in the long run, he eats of his lunches at and at .   "
},
{
  "id": "Section-Application-to-Markov-Chains-10",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Section-Application-to-Markov-Chains-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transition probability transition matrix "
},
{
  "id": "ex-007243",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#ex-007243",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": " Suppose the transition matrix of a three-state Markov chain is if, for example, the system is in state 2, then column 2 lists the probabilities of where it goes next. Thus, the probability is that it goes from state 2 to state 1, and the probability is that it goes from state 2 to state 2. The fact that means that it is impossible for it to go from state 2 to state 3 at the next stage.  "
},
{
  "id": "Section-Application-to-Markov-Chains-14",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Section-Application-to-Markov-Chains-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stochastic matrix "
},
{
  "id": "Section-Application-to-Markov-Chains-15",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Section-Application-to-Markov-Chains-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "state vectors initial state vector "
},
{
  "id": "th-007270",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#th-007270",
  "type": "Theorem",
  "number": "3.5.4",
  "title": "",
  "body": "  Let be the transition matrix for an -state Markov chain. If is the state vector at stage , then for each .    [Heuristic Proof] Suppose that the Markov chain has been run times, each time starting with the same initial state vector. Recall that is the proportion of the time the system goes from state at some stage to state at the next stage, whereas is the proportion of the time it is in state at stage . Hence is (approximately) the number of times the system is in state at stage . We are going to calculate this number another way. The system got to state at stage through some other state (say state ) at stage . The number of times it was in state at that stage is (approximately) , so the number of times it got to state via state is . Summing over gives the number of times the system is in state (at stage ). This is the number we calculated before, so Dividing by gives for each , and this can be expressed as the matrix equation .   "
},
{
  "id": "ex-007301",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#ex-007301",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": "  A wolf pack always hunts in one of three regions , , and . Its hunting habits are as follows:   If it hunts in some region one day, it is as likely as not to hunt there again the next day.    If it hunts in , it never hunts in the next day.    If it hunts in or , it is equally likely to hunt in each of the other regions the next day.   If the pack hunts in on Monday, find the probability that it hunts there on Thursday.    The stages of this process are the successive days; the states are the three regions. The transition matrix is determined as follows (see the table): The first habit asserts that . Now column 1 displays what happens when the pack starts in : It never goes to state 2, so and, because the column must sum to , . Column 2 describes what happens if it starts in : and and are equal (by habit 3), so because the column sum must equal . Column 3 is filled in a similar way. Now let Monday be the initial stage. Then because the pack hunts in on that day. Then , , and describe Tuesday, Wednesday, and Thursday, respectively, and we compute them using : Hence, the probability that the pack hunts in Region on Thursday is .   "
},
{
  "id": "Subsection-Steady-State-Vector-2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Subsection-Steady-State-Vector-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converges "
},
{
  "id": "Subsection-Steady-State-Vector-6",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Subsection-Steady-State-Vector-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "regular "
},
{
  "id": "th-007400",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#th-007400",
  "type": "Theorem",
  "number": "3.5.6",
  "title": "",
  "body": "  Let be the transition matrix of a Markov chain and assume that is regular. Then there is a unique column matrix satisfying the following conditions:    .    The entries of are positive and sum to .   Moreover, condition 1 can be written as and so gives a homogeneous system of linear equations for . Finally, the sequence of state vectors converges to in the sense that if is large enough, each entry of is closely approximated by the corresponding entry of .   "
},
{
  "id": "Subsection-Steady-State-Vector-9",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#Subsection-Steady-State-Vector-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "steady-state vector "
},
{
  "id": "ex-007416",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#ex-007416",
  "type": "Example",
  "number": "3.5.7",
  "title": "",
  "body": "  A man eats one of three soups---beef, chicken, and vegetable---each day. He never eats the same soup two days in a row. If he eats beef soup on a certain day, he is equally likely to eat each of the others the next day; if he does not eat beef soup, he is twice as likely to eat it the next day as the alternative.   If he has beef soup one day, what is the probability that he has it again two days later?    What are the long-run probabilities that he eats each of the three soups?       The states here are , , and , the three soups. The transition matrix is given in the table (recall that, for each state, the corresponding column lists the probabilities for the next state). If he has beef soup initially, then the initial state vector is Then two days later the state vector is . If is the transition matrix, then so he eats beef soup two days later with probability . This answers (a.) and also shows that he eats chicken and vegetable soup each with probability .  To find the long-run probabilities, we must find the steady-state vector . applies because is regular ( has positive entries), so satisfies . That is, where The solution is where is a parameter, and we use because the entries of must sum to . Hence, in the long run, he eats beef soup of the time and eats chicken soup and vegetable soup each of the time.   "
},
{
  "id": "prob-RegOrNot1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-RegOrNot1",
  "type": "Exercise",
  "number": "3.5.2.1",
  "title": "",
  "body": "         Regular      Not regular     "
},
{
  "id": "prob-RegOrNot2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-RegOrNot2",
  "type": "Exercise",
  "number": "3.5.2.2",
  "title": "",
  "body": "         Regular      Not regular     "
},
{
  "id": "prob-SteadyStat-ProbVec1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-SteadyStat-ProbVec1",
  "type": "Exercise",
  "number": "3.5.2.3",
  "title": "",
  "body": "       Steady state vector probability    "
},
{
  "id": "prob-SteadyState-amp-ProbVec2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-SteadyState-amp-ProbVec2",
  "type": "Exercise",
  "number": "3.5.2.4",
  "title": "",
  "body": "      "
},
{
  "id": "prob-SteadyState-amp-ProbVec3",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-SteadyState-amp-ProbVec3",
  "type": "Exercise",
  "number": "3.5.2.5",
  "title": "",
  "body": "        Steady state vector = probability    "
},
{
  "id": "prob-SteadyState-amp-ProbVec3a",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-SteadyState-amp-ProbVec3a",
  "type": "Exercise",
  "number": "3.5.2.6",
  "title": "",
  "body": "      "
},
{
  "id": "prob-fox1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-fox1",
  "type": "Exercise",
  "number": "3.5.2.7",
  "title": "",
  "body": "  What proportion of his time does he spend in , in , and in ?   "
},
{
  "id": "prob-fox2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-fox2",
  "type": "Exercise",
  "number": "3.5.2.8",
  "title": "",
  "body": "  If he hunts in on Monday ( on Monday), what is the probability that he will hunt in on Thursday?   "
},
{
  "id": "prob-SocialClass1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-SocialClass1",
  "type": "Exercise",
  "number": "3.5.2.9",
  "title": "",
  "body": "  Find the probability that the grandchild of lower-class parents becomes upper-class.   "
},
{
  "id": "prob-SocialClass2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-SocialClass2",
  "type": "Exercise",
  "number": "3.5.2.10",
  "title": "",
  "body": "  Find the long-term breakdown of society into classes.     middle, upper, lower.   "
},
{
  "id": "prob-election",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-election",
  "type": "Exercise",
  "number": "3.5.2.11",
  "title": "",
  "body": "  The prime minister says she will call an election. This gossip is passed from person to person with a probability that the information is passed incorrectly at any stage. Assume that when a person hears the gossip he or she passes it to one person who does not know. Find the long-term probability that a person will hear that there is going to be an election.   "
},
{
  "id": "prob-late4work",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-late4work",
  "type": "Exercise",
  "number": "3.5.2.12",
  "title": "",
  "body": "  John makes it to work on time one Monday out of four. On other work days his behaviour is as follows: If he is late one day, he is twice as likely to come to work on time the next day as to be late. If he is on time one day, he is as likely to be late as not the next day. Find the probability of his being late and that of his being on time Wednesdays.    Probability of being late , Probability of being on time .   "
},
{
  "id": "prob-matchcoins",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-matchcoins",
  "type": "Exercise",
  "number": "3.5.2.13",
  "title": "",
  "body": "  Suppose you have cent and match coins with a friend. At each match you either win or lose cent \\ with equal probability. If you go broke or ever get cents, you quit. Assume your friend never quits. If the states are 0, 1, 2, 3, and 4 representing your wealth, show that the corresponding transition matrix is not regular. Find the probability that you will go broke after matches.   "
},
{
  "id": "prob-mouse1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-mouse1",
  "type": "Exercise",
  "number": "3.5.2.14",
  "title": "",
  "body": "  If he starts in compartment 1, find the probability that he is in compartment 1 again after moves.        "
},
{
  "id": "prob-mouse2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-mouse2",
  "type": "Exercise",
  "number": "3.5.2.15",
  "title": "",
  "body": "  Find the compartment in which he spends most of his time if he is left for a long time.    He spends most of his time in compartment . The steady state vector is    "
},
{
  "id": "prob-stochastic1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-stochastic1",
  "type": "Exercise",
  "number": "3.5.2.16",
  "title": "",
  "body": "  If a stochastic matrix has a on its main diagonal, show that it cannot be regular. Assume it is not .   "
},
{
  "id": "prob-stage-m",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-stage-m",
  "type": "Exercise",
  "number": "3.5.2.17",
  "title": "",
  "body": "  If is the stage- state vector for a Markov chain, show that holds for all and (where is the transition matrix).   "
},
{
  "id": "prob-DoublyStochastic1",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-DoublyStochastic1",
  "type": "Exercise",
  "number": "3.5.2.18",
  "title": "",
  "body": "  A stochastic matrix is doubly stochastic if all the row sums also equal . Find the steady-state vector for a doubly stochastic matrix.   "
},
{
  "id": "prob-stochastic2",
  "level": "2",
  "url": "Section-Application-to-Markov-Chains.html#prob-stochastic2",
  "type": "Exercise",
  "number": "3.5.2.19",
  "title": "",
  "body": "  Consider the stochastic matrix where and .   Show that is the steady-state vector for .    Show that converges to the matrix by first verifying inductively that for (it can be shown that the sequence of powers of any regular transition matrix converges to the matrix each of whose columns equals the steady-state vector for ).       Since and we get whence . Finally, , so converges to zero as increases.   "
},
{
  "id": "Section--m-mathbb-R",
  "level": "1",
  "url": "Section--m-mathbb-R.html",
  "type": "Section",
  "number": "4.1",
  "title": "<span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span> and subspaces of <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": "  and subspaces of   We are familiar with two operations that can be applied to vectors in , namely, addition of vectors and scalar multiplication. We learned that addition and scalar multiplication satisfy many nice properties (see ). These properties give an algebraic structure.  We begin this section by introducing another property, called closure . Adding closure to the properties we studied earlier allows us to show that satisfies all of the properties of a vector space .   Closure    A set is said to be closed under addition if for each element and the sum is also in .      A set is said to be closed under scalar multiplication if for each element and for each scalar the product is also in .    A few examples to warm up to the concepts will be given.   Let be the set of positive even integers. Then is closed under addition, because the sum of two even integers is again an even integer.    Let be the set of positive odd integers. Then is not closed under addition, for the sum of two odd integers need not be an odd integer (in fact, it will always be even).     Let be defined as the set of vectors in in the first quadrant (or on an axis on the boundary of the first quadrant). Written in symbols: Show that is closed under addition, but is not closed under scalar multiplication.    Suppose and are in . This means that . But then we have . Therefore is also in . We conclude that is closed under addition. is not closed under scalar multiplication because is not in .The figure below helps us see that the sum of any two vectors in also lies in .   X1 Sum Example graphed    The next picture pictures how negative multiples of a vector does not list in .   X1 Scalar Example graphed       Let be as in . Let In other words, is the set of vectors in in the third quadrant (or on an axis on the boundary of the third quadrant). Let consist of and combined. In other words, is the set of vectors in that are either in the first quadrant, the third quadrant, or lie along one of the axes, as shown below.   Y pictured    Then is closed under scalar multiplication, but is not closed under addition.     as a Vector Space  In we learned that vector addition and scalar multiplication in satisfy the following eight properties:  For all vectors , , , and scalars ,   Commutative Property of Addition: .    Associative Property of Addition: .    Existence of Additive Identity: .    Existence of Additive Inverse: .    Distributive Property over Vector Addition: .    Distributive Property over Scalar Addition: .    Associative Property for Scalar Multiplication: .    Multiplication by : .     In addition, observe that    is closed under addition (Why?)     is closed under scalar multiplication (Why?)   The eight properties of vector operations, together with closure, constitute the criteria for a set with two operations to be considered a vector space . So, is a vector space.  We will encounter other vector spaces later. Any vector space must be closed under both of its operations, and must satisfy the other eight properties in the list above.  In the chapter on abstract vector spaces, we will see that a wide variety of sets with a variety of operations are vector spaces (one important reason to study linear algebra). As we shall see, these sets and their operations may look very different, but the behavior of the elements under the two operations makes them vector spaces. For now, we simply focus on .    Subspaces of  Now that we understand what it means for a set to be closed under addition and scalar multiplication, we are ready for the main definition.    Suppose that is a nonempty subset of that is closed under addition and under scalar multiplication. Then is a subspace of .    We use the term subspace because it turns out that any subset of closed under both addition and scalar multiplication is also a vector space. In other words, by inheriting vector addition and scalar multiplication from , and satisfying the properties of closure, a subset of will automatically satisfy vector space properties. The proof is omitted until reaching abstract vector spaces.    Let be the set of vectors in on the axis. Then is a subspace of .    To verify this, note that any vector in is of the form . If we multiply such a vector by a scalar , we get a vector of the form which is clearly still in . This proves is closed under scalar multiplication. Next, note that so is closed under addition.    Recall that the span of a set of vectors is the set of all linear combinations of those vectors (see ). It is easy to see from this definition, that the span of any set of vectors in must be closed under both addition and scalar multiplication, and therefore the span of those vectors is a subspace of . This argument proves the following result, giving us an abundance of examples of subspaces:    Let be any set of vectors in . Then is a subspace of .    In particular, if we take to be the single vector , we have that is a subspace of . Geometrically, this subspace is a line in the direction of the vector . Similarly, the span of two vectors is a subspace of . If the two vectors are linearly independent, then the subspace is a plane in . Not every line or plane in is a subspace, however. The following important result provides us with a quick way to determine that some subsets are not subspaces.    If is a subspace of , then the zero vector is in .    Take any vector in , and note that is in because is closed under scalar multiplication.    The conclusion of shows that the only lines in that are subspaces are those that pass through the origin. The same holds true for planes and hyperplanes. For example, the plane in is not a subspace of , while any plane containing the origin is a subspace.    If is a subspace of , then for any vector , the opposite vector, , is also in .    The proof is similar to what was done for the previous theorem and is left as an exercise.      Let be the set of all vectors in whose components are non-negative.     Is closed under vector addition?    Yes.      Is closed under scalar multiplication?    No.       Let be the set of all vectors in that lie on either the -axis, the -axis, or the -axis.     Is closed under vector addition?    No.      Is closed under scalar multiplication?    Yes.       For each figure below, determine whether the set of vectors shown in the figure is closed under vector addition and scalar multiplication. Justify your responses.      consists of all vectors in in a slanted half-plane which has the -axis as a boundary.   V graphed as plane    Is closed under scalar multiplication? What about addition?    It is closed under addition but not under scalar multiplication.       consists of all vectors along the line, as shown.   New V graphed as plane    Is closed under scalar multiplication? What about addition?    It is closed under both addition and scalar multiplication.       Prove .      Let be an matrix. Let be the subset of consisting of all vectors such that . Prove that is a subspace of . (Note that this subspace is called the null space of the matrix and we will denote it .)     "
},
{
  "id": "Section--m-mathbb-R-3",
  "level": "2",
  "url": "Section--m-mathbb-R.html#Section--m-mathbb-R-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closure vector space "
},
{
  "id": "def-closedunderaddition",
  "level": "2",
  "url": "Section--m-mathbb-R.html#def-closedunderaddition",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  A set is said to be closed under addition if for each element and the sum is also in .   "
},
{
  "id": "def-closedunderscalarmult",
  "level": "2",
  "url": "Section--m-mathbb-R.html#def-closedunderscalarmult",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": "  A set is said to be closed under scalar multiplication if for each element and for each scalar the product is also in .   "
},
{
  "id": "ex-posevenint",
  "level": "2",
  "url": "Section--m-mathbb-R.html#ex-posevenint",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": " Let be the set of positive even integers. Then is closed under addition, because the sum of two even integers is again an even integer.  "
},
{
  "id": "ex-posoddint",
  "level": "2",
  "url": "Section--m-mathbb-R.html#ex-posoddint",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": " Let be the set of positive odd integers. Then is not closed under addition, for the sum of two odd integers need not be an odd integer (in fact, it will always be even).  "
},
{
  "id": "Q1",
  "level": "2",
  "url": "Section--m-mathbb-R.html#Q1",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Let be defined as the set of vectors in in the first quadrant (or on an axis on the boundary of the first quadrant). Written in symbols: Show that is closed under addition, but is not closed under scalar multiplication.    Suppose and are in . This means that . But then we have . Therefore is also in . We conclude that is closed under addition. is not closed under scalar multiplication because is not in .The figure below helps us see that the sum of any two vectors in also lies in .   X1 Sum Example graphed    The next picture pictures how negative multiples of a vector does not list in .   X1 Scalar Example graphed     "
},
{
  "id": "Subsection-Closure-8",
  "level": "2",
  "url": "Section--m-mathbb-R.html#Subsection-Closure-8",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": " Let be as in . Let In other words, is the set of vectors in in the third quadrant (or on an axis on the boundary of the third quadrant). Let consist of and combined. In other words, is the set of vectors in that are either in the first quadrant, the third quadrant, or lie along one of the axes, as shown below.   Y pictured    Then is closed under scalar multiplication, but is not closed under addition.  "
},
{
  "id": "Subsection-Rn-as-a-Vector-Space-4",
  "level": "2",
  "url": "Section--m-mathbb-R.html#Subsection-Rn-as-a-Vector-Space-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#def-subspace",
  "type": "Definition",
  "number": "4.1.7",
  "title": "",
  "body": "  Suppose that is a nonempty subset of that is closed under addition and under scalar multiplication. Then is a subspace of .   "
},
{
  "id": "Subsection-Subspaces-of-Rn-4",
  "level": "2",
  "url": "Section--m-mathbb-R.html#Subsection-Subspaces-of-Rn-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "y-axis-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#y-axis-subspace",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  Let be the set of vectors in on the axis. Then is a subspace of .    To verify this, note that any vector in is of the form . If we multiply such a vector by a scalar , we get a vector of the form which is clearly still in . This proves is closed under scalar multiplication. Next, note that so is closed under addition.   "
},
{
  "id": "Subsection-Subspaces-of-Rn-6",
  "level": "2",
  "url": "Section--m-mathbb-R.html#Subsection-Subspaces-of-Rn-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span "
},
{
  "id": "th-span-is-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#th-span-is-subspace",
  "type": "Theorem",
  "number": "4.1.9",
  "title": "",
  "body": "  Let be any set of vectors in . Then is a subspace of .   "
},
{
  "id": "th-zero-in-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#th-zero-in-subspace",
  "type": "Theorem",
  "number": "4.1.10",
  "title": "",
  "body": "  If is a subspace of , then the zero vector is in .    Take any vector in , and note that is in because is closed under scalar multiplication.   "
},
{
  "id": "th-opposite-in-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#th-opposite-in-subspace",
  "type": "Theorem",
  "number": "4.1.11",
  "title": "",
  "body": "  If is a subspace of , then for any vector , the opposite vector, , is also in .   "
},
{
  "id": "prob-Y-1",
  "level": "2",
  "url": "Section--m-mathbb-R.html#prob-Y-1",
  "type": "Exercise",
  "number": "4.1.4.1",
  "title": "",
  "body": "  Is closed under vector addition?    Yes.   "
},
{
  "id": "prob-Y-2",
  "level": "2",
  "url": "Section--m-mathbb-R.html#prob-Y-2",
  "type": "Exercise",
  "number": "4.1.4.2",
  "title": "",
  "body": "  Is closed under scalar multiplication?    No.   "
},
{
  "id": "pr-R-3axes1",
  "level": "2",
  "url": "Section--m-mathbb-R.html#pr-R-3axes1",
  "type": "Exercise",
  "number": "4.1.4.3",
  "title": "",
  "body": "  Is closed under vector addition?    No.   "
},
{
  "id": "pr-R-3axes2",
  "level": "2",
  "url": "Section--m-mathbb-R.html#pr-R-3axes2",
  "type": "Exercise",
  "number": "4.1.4.4",
  "title": "",
  "body": "  Is closed under scalar multiplication?    Yes.   "
},
{
  "id": "prob-closedmultchoice1",
  "level": "2",
  "url": "Section--m-mathbb-R.html#prob-closedmultchoice1",
  "type": "Exercise",
  "number": "4.1.4.5",
  "title": "",
  "body": "   consists of all vectors in in a slanted half-plane which has the -axis as a boundary.   V graphed as plane    Is closed under scalar multiplication? What about addition?    It is closed under addition but not under scalar multiplication.   "
},
{
  "id": "closedmultchoice2",
  "level": "2",
  "url": "Section--m-mathbb-R.html#closedmultchoice2",
  "type": "Exercise",
  "number": "4.1.4.6",
  "title": "",
  "body": "   consists of all vectors along the line, as shown.   New V graphed as plane    Is closed under scalar multiplication? What about addition?    It is closed under both addition and scalar multiplication.   "
},
{
  "id": "prob-opposite-in-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#prob-opposite-in-subspace",
  "type": "Exercise",
  "number": "4.1.4.7",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-null-A-is-subspace",
  "level": "2",
  "url": "Section--m-mathbb-R.html#prob-null-A-is-subspace",
  "type": "Exercise",
  "number": "4.1.4.8",
  "title": "",
  "body": "  Let be an matrix. Let be the subset of consisting of all vectors such that . Prove that is a subspace of . (Note that this subspace is called the null space of the matrix and we will denote it .)   "
},
{
  "id": "Bases-and-Dimension",
  "level": "1",
  "url": "Bases-and-Dimension.html",
  "type": "Section",
  "number": "4.2",
  "title": "Bases and Dimension",
  "body": " Bases and Dimension   Coordinate Vectors  When we first introduced vectors we learned to represent them using component notation. If we consider , then we know that the head of is located at the point .  But there is another way to look at the component form. Observe that can be expressed as a linear combination of the standard unit vectors and : In fact, any vector of can be written as a linear combination of and : This gives us an alternative way of interpreting the component notation: We say that and are coordinates of with respect to , and is said to be the coordinate vector for with respect to . Every vector of can be thus represented using and . Moreover, such representation in terms of and is unique for each vector, meaning that we will never have two different coordinate vectors representing the same vector. We will refer to as a basis of .  The order in which the basis elements are written matters. For example, is represented by the coordinate vector with respect to , but changing the basis to would change the coordinate vector to . In our notation: Clearly, standard unit vectors and are very convenient, but other vectors can also be used in place of and to represent .   The diagram below shows together with vectors and .   Three vectors in span of two    It is easy to see that as shown below.   Span of two of the above vectors graphed    If we declare to be a basis of , then we can say that the coordinate vector for with respect to is .      What Constitutes a Basis?  In the previous section we had used the term basis without defining it. Now is the time to pause and think about what we want a basis to do. Let's focus on and subspaces of . What we establish here will easily generalize to other vector spaces. Based on our previous discussion, given any vector of (or a subspace of ), we want to be able to write a coordinate vector for with respect to the given basis of (or ).  Based on this condition, we will require that basis vectors span (or ). For example, consider and shown below.   Planed formed by basis    The set cannot be a basis for because and span a plane in , and any vector not in that plane cannot be written as a linear combination of and . On the other hand, the plane spanned by and is a subspace of . Because every vector in that plane can be written as a linear combination of and , the set can potentially be a basis for the plane, provided that the set satisfies our second requirement.  Our second requirement is that for a fixed basis of (or ), the coordinate vector for each in (or ) should be unique. Uniqueness of representation in terms of the basis elements will play an important role in our future study of functions that map vector spaces to vector spaces. The following theorem shows that the uniqueness requirement is equivalent to the requirement that the basis vectors be linearly independent. %In other words, a basis may not contain redundant vectors.    Suppose is a spanning set for a subspace of . Then every of has a unique representation as a linear combination of if and only if the vectors are linearly independent.    Suppose that every in can be expressed as a unique linear combination of . This means that has a unique representation as a linear combination of . But is a representation of in terms of . Since we are assuming that such a representation is unique, we conclude that there is no other. This means that the vectors are linearly independent. Conversely, suppose that vectors are linearly independent. An arbitrary element of can be expressed as a linear combination of : Suppose this representation is not unique. Then there may be another linear combination that is also equal to : But then This gives us Because we assumed that are linearly independent, we must have so that This proves the representation of in terms of is unique.    Here is a concrete example of a basis and some practice.    Use , where to illustrate why a set of linearly dependent vectors cannot be used as a basis for a subspace by showing that linearly dependent vectors fail to ensure uniqueness of coordinate vectors for vectors in .    We will first show that the elements of are linearly dependent. Let be a matrix whose columns are the vectors in . We find that Therefore the matrix equation has infinitely many solutions: This tells us that there are infinitely many nontrivial linear relations among the elements of . Letting gives us one such nontrivial relation. Now let's pick an arbitrary vector in . Any vector will do, so let Based on this representation of , the coordinate vector for with respect to is But So, by substitution, we have:     Based on this representation, the coordinate vector for with respect to is what?         The set is linearly dependent. As a result, coordinate vectors for elements of are not unique and we do not want to use as a basis for .      Definition of a Basis    A set of vectors is called a basis of (or a basis of a subspace of ) provided that    (or )     is linearly independent.       The prototype example is the standard one, which we showcase in the next example. It is the one we implicitly worked with so far.   The standard unit vectors are linearly independent and span . Thus is a basis of .     The set is called the standard basis of .    Bases are not unique. For example, we know that vectors and form the standard basis of . But, as we discussed in Example , vectors are linearly independent vectors that span . Therefore is also a basis for .  Any linearly independent spanning set in (or a subspace of ) is a basis of (or the subspace). The plural form of the word basis is bases . It is easy to see that and its subspaces each has infinitely many bases.   Let . The set is a basis for because the two vectors in are linearly independent and span . Find the coordinate vector for with respect to .   We need to express as a linear combination of the elements of . To this end, we need to solve the vector equation: The augmented matrix and the reduced row-echelon form are: We conclude that , . This gives us The coefficient in front of the first basis vector is , the coefficient in front of the second basis vector is . This means that the coordinate vector for with respect to is .      It may seem strange to you that the coordinate vector for a vector in only has two components. But remember that subspace is a plane. When viewed as a vector in the plane, it makes sense that the coordinate vector for only requires two components. This issue is related to the question of dimension, which will be addressed in the next sections.      To construct the coordinate vector for with respect to , we had to be mindful of the order of the elements in . Ordinarily, the order of elements in a set is irrelevant, and the basis is considered to be the same as When dealing with coordinate vectors, however, the order of the elements dictates the order of the components of the coordinate vector coefficients. If we switch the order of the elements in , the coordinate vector becomes . For this reason, when we come back to studying coordinate vectors in more detail, we will use the term ordered basis to avoid confusion.      Exploring Dimension  A basis of a subspace of is a subset of that is linearly independent and spans . A basis allows us to uniquely express every element of as a linear combination of the elements of the basis. Several questions may come to mind at this time. Does every subspace of have a basis? We know that bases are not unique. If there is more than one basis, what, if anything, do they have in common?   How would you describe If you answered that is a line in , you are correct. While the two vectors span the line, it is not necessary to have both of them in the spanning set to describe the line.    What is the minimum number of vectors needed to span a line?     .    Observe also that the vectors in the given spanning set are not linearly independent, so they do not form a basis for .    How many vectors would a basis for have?     .    Now consider another subspace of : Geometrically, is a plane in . Note that the vectors in the spanning set are linearly independent. Can we remove one of the vectors and have the remaining vector span the plane?    What is the minimum number of vectors needed to span a plane? How many vectors would a basis need for a plane?          Our observations in hint at the idea of dimension. We know that a line is a one-dimensional object, a plane is a two-dimensional object, and the space we reside in is three-dimensional.  Based on our observations in , it makes sense for us to define dimension of a vector space (or a subspace) as the minimum number of vectors required to span the space (subspace). We can accomplish this by defining dimension as the number of elements in a basis. We have to proceed carefully because we don't want the dimension to depend on our choice of a basis. So, before we state our definition, we need to make sure that every basis for a given vector space (or subspace) has the same number of elements.    Suppose and be two bases of (or a subspace of ). Then .    Suppose . Without loss of generality, assume that . Because spans , every of can be written as a linear combination of elements of : Consider the vector equation By substitution, we have: Because 's are linearly independent, we must have For all . This gives us a system of equations and unknowns. We can write the system as a matrix equation. Recall our assumption that . By , we know that the system has infinitely many solutions. This shows that has a nontrivial solution. But this shows that is linearly dependent and contradicts our assumption that is a basis of . We conclude that .      Let be a subspace of . The dimension of is the number, , of elements in any basis of . We write      We know that vectors form a basis of . Therefore .   The following section will guarantee that dimension is defined for every subspace of .    If a linearly independent subset of contains vectors, then .    See .      Let be a linearly independent subset of . If is not in , then is linearly independent.    Consider the equation We need to show that . Suppose , then . But this contradicts the assumption that is not in the span of . So, . But because are linearly independent. This means that has only the trivial solution and is linearly independent.      Let be a subspace of . Any linearly independent subset of can be expanded to a basis of .     Suppose that is a linearly independent subset of . If then is already a basis of .  If , choose in such that is not in . The set is linearly independent by .  If we are done; otherwise choose such that is not in . Then is linearly independent, and the process continues.  We claim that a basis of will be reached eventually. If no basis of is ever reached, the process creates arbitrarily large independent sets in . But this is impossible by .       Let be a basis for . (Do a mental verification that is a basis.) For each given below, find the coordinate vector for with respect to .     Vector as drawn blow.   First case drawn             Vector as drawn below.   Second case drawn              Let Find the coordinate vector for with respect to .           Suppose is a basis for . Find if the coordinate vector for is .           Which of the following is a basis for ?                                    Which of the following is a basis for given below?                                      For each given set of vectors, find .    Use of VEC-0110.                                          Prove .    Look at the proof of .      Let be a basis of . Suppose is a nonsingular matrix. Show that is also a basis of .   To show that spans , express as a linear combination of , and .    "
},
{
  "id": "Subsection-Coordinate-Vectors-3",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-Coordinate-Vectors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinates coordinate vector basis "
},
{
  "id": "init-altbasis1",
  "level": "2",
  "url": "Bases-and-Dimension.html#init-altbasis1",
  "type": "Exploration",
  "number": "4.2.1",
  "title": "",
  "body": " The diagram below shows together with vectors and .   Three vectors in span of two    It is easy to see that as shown below.   Span of two of the above vectors graphed    If we declare to be a basis of , then we can say that the coordinate vector for with respect to is .   "
},
{
  "id": "Subsection-What-Constitutes-a-Basis-2",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-What-Constitutes-a-Basis-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis "
},
{
  "id": "th-linindbasis",
  "level": "2",
  "url": "Bases-and-Dimension.html#th-linindbasis",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "",
  "body": "  Suppose is a spanning set for a subspace of . Then every of has a unique representation as a linear combination of if and only if the vectors are linearly independent.    Suppose that every in can be expressed as a unique linear combination of . This means that has a unique representation as a linear combination of . But is a representation of in terms of . Since we are assuming that such a representation is unique, we conclude that there is no other. This means that the vectors are linearly independent. Conversely, suppose that vectors are linearly independent. An arbitrary element of can be expressed as a linear combination of : Suppose this representation is not unique. Then there may be another linear combination that is also equal to : But then This gives us Because we assumed that are linearly independent, we must have so that This proves the representation of in terms of is unique.   "
},
{
  "id": "ex-lindepandbasis",
  "level": "2",
  "url": "Bases-and-Dimension.html#ex-lindepandbasis",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Use , where to illustrate why a set of linearly dependent vectors cannot be used as a basis for a subspace by showing that linearly dependent vectors fail to ensure uniqueness of coordinate vectors for vectors in .    We will first show that the elements of are linearly dependent. Let be a matrix whose columns are the vectors in . We find that Therefore the matrix equation has infinitely many solutions: This tells us that there are infinitely many nontrivial linear relations among the elements of . Letting gives us one such nontrivial relation. Now let's pick an arbitrary vector in . Any vector will do, so let Based on this representation of , the coordinate vector for with respect to is But So, by substitution, we have:     Based on this representation, the coordinate vector for with respect to is what?         The set is linearly dependent. As a result, coordinate vectors for elements of are not unique and we do not want to use as a basis for .   "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "Bases-and-Dimension.html#def-basis",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "  A set of vectors is called a basis of (or a basis of a subspace of ) provided that    (or )     is linearly independent.      "
},
{
  "id": "ex-standardbasis",
  "level": "2",
  "url": "Bases-and-Dimension.html#ex-standardbasis",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": " The standard unit vectors are linearly independent and span . Thus is a basis of .  "
},
{
  "id": "def-standardbasis",
  "level": "2",
  "url": "Bases-and-Dimension.html#def-standardbasis",
  "type": "Definition",
  "number": "4.2.6",
  "title": "",
  "body": "  The set is called the standard basis of .   "
},
{
  "id": "Subsection-Definition-of-a-Basis-7",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-Definition-of-a-Basis-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis bases "
},
{
  "id": "coordvectorandbasis",
  "level": "2",
  "url": "Bases-and-Dimension.html#coordvectorandbasis",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": " Let . The set is a basis for because the two vectors in are linearly independent and span . Find the coordinate vector for with respect to .   We need to express as a linear combination of the elements of . To this end, we need to solve the vector equation: The augmented matrix and the reduced row-echelon form are: We conclude that , . This gives us The coefficient in front of the first basis vector is , the coefficient in front of the second basis vector is . This means that the coordinate vector for with respect to is .   "
},
{
  "id": "Subsection-Definition-of-a-Basis-9",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-Definition-of-a-Basis-9",
  "type": "Remark",
  "number": "4.2.8",
  "title": "",
  "body": "  It may seem strange to you that the coordinate vector for a vector in only has two components. But remember that subspace is a plane. When viewed as a vector in the plane, it makes sense that the coordinate vector for only requires two components. This issue is related to the question of dimension, which will be addressed in the next sections.   "
},
{
  "id": "Subsection-Definition-of-a-Basis-10",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-Definition-of-a-Basis-10",
  "type": "Remark",
  "number": "4.2.9",
  "title": "",
  "body": "  To construct the coordinate vector for with respect to , we had to be mindful of the order of the elements in . Ordinarily, the order of elements in a set is irrelevant, and the basis is considered to be the same as When dealing with coordinate vectors, however, the order of the elements dictates the order of the components of the coordinate vector coefficients. If we switch the order of the elements in , the coordinate vector becomes . For this reason, when we come back to studying coordinate vectors in more detail, we will use the term ordered basis to avoid confusion.   "
},
{
  "id": "Subsection-Exploring-Dimension-2",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-Exploring-Dimension-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "basis "
},
{
  "id": "init-dimensionintro",
  "level": "2",
  "url": "Bases-and-Dimension.html#init-dimensionintro",
  "type": "Exploration",
  "number": "4.2.2",
  "title": "",
  "body": " How would you describe If you answered that is a line in , you are correct. While the two vectors span the line, it is not necessary to have both of them in the spanning set to describe the line.    What is the minimum number of vectors needed to span a line?     .    Observe also that the vectors in the given spanning set are not linearly independent, so they do not form a basis for .    How many vectors would a basis for have?     .    Now consider another subspace of : Geometrically, is a plane in . Note that the vectors in the spanning set are linearly independent. Can we remove one of the vectors and have the remaining vector span the plane?    What is the minimum number of vectors needed to span a plane? How many vectors would a basis need for a plane?         "
},
{
  "id": "th-dimwelldefined",
  "level": "2",
  "url": "Bases-and-Dimension.html#th-dimwelldefined",
  "type": "Theorem",
  "number": "4.2.13",
  "title": "",
  "body": "  Suppose and be two bases of (or a subspace of ). Then .    Suppose . Without loss of generality, assume that . Because spans , every of can be written as a linear combination of elements of : Consider the vector equation By substitution, we have: Because 's are linearly independent, we must have For all . This gives us a system of equations and unknowns. We can write the system as a matrix equation. Recall our assumption that . By , we know that the system has infinitely many solutions. This shows that has a nontrivial solution. But this shows that is linearly dependent and contradicts our assumption that is a basis of . We conclude that .   "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "Bases-and-Dimension.html#def-dimension",
  "type": "Definition",
  "number": "4.2.14",
  "title": "",
  "body": "  Let be a subspace of . The dimension of is the number, , of elements in any basis of . We write    "
},
{
  "id": "ex-basisofrn",
  "level": "2",
  "url": "Bases-and-Dimension.html#ex-basisofrn",
  "type": "Example",
  "number": "4.2.15",
  "title": "",
  "body": " We know that vectors form a basis of . Therefore .  "
},
{
  "id": "lemma-atmostnlinindinrn",
  "level": "2",
  "url": "Bases-and-Dimension.html#lemma-atmostnlinindinrn",
  "type": "Lemma",
  "number": "4.2.16",
  "title": "",
  "body": "  If a linearly independent subset of contains vectors, then .    See .   "
},
{
  "id": "lemma-expandinglinindset",
  "level": "2",
  "url": "Bases-and-Dimension.html#lemma-expandinglinindset",
  "type": "Lemma",
  "number": "4.2.17",
  "title": "",
  "body": "  Let be a linearly independent subset of . If is not in , then is linearly independent.    Consider the equation We need to show that . Suppose , then . But this contradicts the assumption that is not in the span of . So, . But because are linearly independent. This means that has only the trivial solution and is linearly independent.   "
},
{
  "id": "th-expandtobasis",
  "level": "2",
  "url": "Bases-and-Dimension.html#th-expandtobasis",
  "type": "Theorem",
  "number": "4.2.18",
  "title": "",
  "body": "  Let be a subspace of . Any linearly independent subset of can be expanded to a basis of .   "
},
{
  "id": "Subsection-Exploring-Dimension-13",
  "level": "2",
  "url": "Bases-and-Dimension.html#Subsection-Exploring-Dimension-13",
  "type": "Proof",
  "number": "4.2.4.1",
  "title": "",
  "body": " Suppose that is a linearly independent subset of . If then is already a basis of .  If , choose in such that is not in . The set is linearly independent by .  If we are done; otherwise choose such that is not in . Then is linearly independent, and the process continues.  We claim that a basis of will be reached eventually. If no basis of is ever reached, the process creates arbitrarily large independent sets in . But this is impossible by .  "
},
{
  "id": "coordvect1",
  "level": "2",
  "url": "Bases-and-Dimension.html#coordvect1",
  "type": "Exercise",
  "number": "4.2.5.1",
  "title": "",
  "body": "  Vector as drawn blow.   First case drawn          "
},
{
  "id": "prob-coordvect2",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-coordvect2",
  "type": "Exercise",
  "number": "4.2.5.2",
  "title": "",
  "body": "  Vector as drawn below.   Second case drawn          "
},
{
  "id": "prob-coordvect3",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-coordvect3",
  "type": "Exercise",
  "number": "4.2.5.3",
  "title": "",
  "body": "  Let Find the coordinate vector for with respect to .        "
},
{
  "id": "prob-coordvect4",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-coordvect4",
  "type": "Exercise",
  "number": "4.2.5.4",
  "title": "",
  "body": "  Suppose is a basis for . Find if the coordinate vector for is .        "
},
{
  "id": "prob-basisr2",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-basisr2",
  "type": "Exercise",
  "number": "4.2.5.5",
  "title": "",
  "body": "  Which of the following is a basis for ?                                 "
},
{
  "id": "prob-basisarbitraryspace",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-basisarbitraryspace",
  "type": "Exercise",
  "number": "4.2.5.6",
  "title": "",
  "body": "  Which of the following is a basis for given below?                                  "
},
{
  "id": "prob-finddimension1",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-finddimension1",
  "type": "Exercise",
  "number": "4.2.5.7",
  "title": "",
  "body": "           "
},
{
  "id": "prob-finddimension2",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-finddimension2",
  "type": "Exercise",
  "number": "4.2.5.8",
  "title": "",
  "body": "           "
},
{
  "id": "prob-finddimension3",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-finddimension3",
  "type": "Exercise",
  "number": "4.2.5.9",
  "title": "",
  "body": "           "
},
{
  "id": "prob-atmostnlinindinrnproof",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-atmostnlinindinrnproof",
  "type": "Exercise",
  "number": "4.2.5.10",
  "title": "",
  "body": "  Prove .    Look at the proof of .   "
},
{
  "id": "prob-matrixtimesbasisvectors",
  "level": "2",
  "url": "Bases-and-Dimension.html#prob-matrixtimesbasisvectors",
  "type": "Exercise",
  "number": "4.2.5.11",
  "title": "",
  "body": "  Let be a basis of . Suppose is a nonsingular matrix. Show that is also a basis of .   To show that spans , express as a linear combination of , and .  "
},
{
  "id": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices",
  "level": "1",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html",
  "type": "Section",
  "number": "4.3",
  "title": "Subspaces of <span class=\"process-math\">\\(\\R^n\\)<\/span> Associated with Matrices",
  "body": " Subspaces of Associated with Matrices   Row Space of a Matrix  Recall when learning Gaussian elimination, we observed that every row-echelon form of a given matrix has the same number of nonzero rows. This result suggests that there are certain characteristics associated with the rows of a matrix that are not affected by elementary row operations. We are now in the position to examine this question and to supply the proof we omitted earlier.    Let be an matrix. The row space of , denoted by , is the subspace of spanned by the rows of .     Consider the matrix Let and be the rows of : Then is a plane through containing and .   Row space plotted    We will use elementary row operations to reduce to ,namely Let and be the rows of : What do you think looks like? The following video will help us visualize and compare it to .   Based on what we observed in the video, we may conjecture that    New vectors for span added in above    But why does this make sense? Vectors and were obtained from and by repeated applications of elementary row operations. At every stage of the row reduction process, the rows of the matrix are linear combinations of and . Thus, at every stage of the row reduction process, the rows of the matrix lie in the span of and . Our next video shows a step-by-step row reduction process accompanied by sketches of vectors.    The observations made in makes a convincing case for the following theorem.    If matrix was obtained from matrix by applying an elementary row operation to then     Let be the rows of . There are three elementary row operations. Clearly, switching the order of vectors in will not affect the span. Suppose that was obtained from by multiplying the row of by a non-zero constant . We need to show that   To do this we will assume that some vector is in and show that is in . We will then assume that some vector is in and show that must be in .  Suppose that is in . Then But this implies So is in .  Now suppose is in , then But because , we can do the following: Therefore, is in .  We leave it to the reader to verify that adding a multiple of one row of to another does not change the row space. See also .)      If matrix was obtained from matrix by applying a sequence of elementary row operations to then     This follows from repeated applications of .             Let Find two distinct bases for .    By a basis for will also be a basis for . Row reduction gives us: Since the zero row contributes nothing to the span, we conclude that the nonzero rows of span . Therefore, a basis for the row space consists of the vecotrs It follows that the nonzero rows of are linearly independent.  To find a second basis for , observe that by the row space of any row-echelon form of will be equal to . Matrix has many row-echelon forms. Here is one of them: The nonzero rows of span . Once again the nonzero rows of are linearly independent. Thus the nonzero rows of form a basis for .    Our observations in can be generalized to all matrices. Given any matrix ,   The nonzero rows of are linearly independent (Why?) and span ( ).    The nonzero rows of any row-echelon form of are linearly independent (Why?) and span ( ).   Therefore nonzero rows of or the nonzero rows of any row-echelon form of constitute a basis of . Since all bases for must have the same number of elements ( ), we have just proved the following theorem.    All row-echelon forms of a given matrix have the same number of nonzero rows.    This result was first introduced without proof when learning of Guassian elimination, where we used it to define the rank of a matrix as the number of nonzero rows in its row-echelon forms. We can now update the definition of rank as follows.    For any matrix ,       Column Space of a Matrix    Let be an matrix. The column space of , denoted by , is the subspace of spanned by the columns of .     Let Our goal is to find a basis for . To do this we need to find a linearly independent subset of the columns of that spans .  Consider the linear relation: Solving this homogeneous equation amounts to finding . So, We now see that has infinitely many solutions.  Observe that the homogeneous equation has the same solution set as . In particular, , , , is a non-trivial solution of and . This means that the third column of and the third column of can be expressed as the first column minus the second column of their respective matrices.  We conclude that the third column of can be eliminated from the spanning set for and Having gotten rid of one of the vectors, we need to determine whether the remaining three vectors are linearly independent. To do this we need to find all solutions of Fortunately, we do not have to start from scratch. Observe that crossing out the third column in the previous row reduction process yields the desired reduced row-echelon form.   Matrix with column cut out    This time the reduced row-echelon form tells us that ( has only the trivial solution. We conclude that the three vectors are linearly independent and is a basis for .   The approach we took to find a basis for in uses the reduced row-echelon form of . It is true, however, that any row-echelon form of could have been used in place of . (Why?). We generalize the steps as follows:    Given a matrix , a basis for can be found as follows:   Find (or any row-echelon form of .)    Identify the pivot columns of (or ).    The columns of corresponding to the pivot columns of (or ) form a basis for .       Let be the columns of , and let be the columns of (or ). Observe that the equations  have the same solution set. This means that any non-trivial relation among the columns of (or ) translates into a non-trivial relation among the columns of . Likewise, any collection of linearly independent columns of (or ) corresponds to linearly independent columns of .  Now, the pivot columns of (or ) are linearly independent. Therefore the corresponding columns of are linearly independent whereas non-pivot columns can be expressed as linear combinations of the pivot columns, therefore they contribute nothing to the span and can be removed from the spanning set.    The proof of shows that the number of basis elements for the column space of a matrix is equal to the number of pivot columns. But the number of pivot columns is the same as the number of pivots in a row-echelon form, which is equal to the number of nonzero rows and the rank of the matrix. This gives us the following important result.    Let be a matrix.       We will return to matrix of and find a basis for .    We begin by finding . Columns , and of contain leading . Therefore columns , and of form a basis for .      The Null Space    Let be an matrix. The null space of , denoted by , is the set of all vectors in such that .    Before digging further, let us examine the notion through an example.    Find if     We need to solve the equation . Row reduction gives us We conclude that . Thus consists of all vectors of the form We might write or     The approach in allows us to make an important observation. Note that every scalar multiple of is contained in . This means that is closed under vector addition and scalar multiplication.  Recall that this property makes a subspace of . This result was first presented as . We now formalize it as a theorem.    Let be an matrix. Then is a subspace of .    To deduce that is closed under vector addition and scalar multiplication we will show that a linear combination of any two elements of is contained in .  Suppose and are in . Then and . But then We conclude that is also in .      Find a basis for , where is the matrix in .    Elements in the null space of are solutions to the equation Row reduction yields  Therefore, elements of are of the form Thus Now we need to find a basis for we need to find linearly independent vectors that span . Take a closer look at the vectors Because of the locations of and , it is clear that one vector is not a scalar multiple of the other. Therefore the two vectors are linearly independent. We conclude that is a basis of , and .    It is not a coincidence that the steps we used in produced linearly independent vectors, and it is worth while to try to understand why this procedure will always produce linearly independent vectors. Take a closer look at the elements of the null space: The parameter in the third component of produces a in the third component of the first vector and a in the third component of the second vector, while parameter in the fifth component of produces a in the fifth component of the second vector and a in the fifth component of the first vector. This makes it clear that the two vectors are linearly independent.  This pattern will hold for any number of parameters, each parameter producing a in exactly one vector and in the corresponding components of the other vectors. Therefore, vectors obtained in this way will always be linearly independent.    Rank and Nullity Theorem    Let be a matrix. The dimension of the null space of is called the nullity of .     We know that the dimension of the row space and the dimension of the column space of a matrix are the same and are equal to the rank of the matrix (or the number of nonzero rows in any row-echelon form of the matrix).  As we observed in , the dimension of the null space of a matrix is equal to the number of free variables in the solution vector of the homogeneous system associated with the matrix. Since the number of pivots and the number of free variables add up to the number of columns in a matrix ( ) we have the following significant result.    Let be an matrix. Then     We will see the geometric implications of this theorem when we study linear transformations.      In the following four problems, the matrix given below is studied.      Let Find .           Compute , and            Use and the procedure outlined in to find a basis for .    A basis for is       Use to find a basis for .    A basis for is        In the following four problems, we matrix in question is      Find .           Find     The answer is .      Use and the procedure outlined in to find a basis for .    A basis for is       Use to find a basis for .    A basis for is       Prove that       Find a basis for , where     Find a basis for the column space of a matrix whose columns are the given vectors.       In the next two problems, and refer to matrices of and .     Find a basis for , demonstrate that the Rank-Nullity Theorem (see ) holds for and explain how you can quickly tell that the vectors you selected for your basis are linearly independent.    Basis for        Find a basis for and demonstrate that the Rank-Nullity Theorem (see ) holds for .    Basis for :        Suppose matrix is such that      Follow the process used in to find a basis for . Explain why the basis elements obtained in this way are linearly independent.    Basis of       Let denote the columns of . Express as a linear combination of and .            Suppose is a matrix. Which of the following statements could be true?                                           Suppose is a matrix. Which of the following statements could be true?                                           Complete the proof of by showing that adding a scalar multiple of one row of a matrix to another row does not change the row space.     "
},
{
  "id": "def-rowspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#def-rowspace",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  Let be an matrix. The row space of , denoted by , is the subspace of spanned by the rows of .   "
},
{
  "id": "init-rowspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#init-rowspace",
  "type": "Exploration",
  "number": "4.3.1",
  "title": "",
  "body": " Consider the matrix Let and be the rows of : Then is a plane through containing and .   Row space plotted    We will use elementary row operations to reduce to ,namely Let and be the rows of : What do you think looks like? The following video will help us visualize and compare it to .   Based on what we observed in the video, we may conjecture that    New vectors for span added in above    But why does this make sense? Vectors and were obtained from and by repeated applications of elementary row operations. At every stage of the row reduction process, the rows of the matrix are linear combinations of and . Thus, at every stage of the row reduction process, the rows of the matrix lie in the span of and . Our next video shows a step-by-step row reduction process accompanied by sketches of vectors.   "
},
{
  "id": "th-rowBrowA",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#th-rowBrowA",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "",
  "body": "  If matrix was obtained from matrix by applying an elementary row operation to then     Let be the rows of . There are three elementary row operations. Clearly, switching the order of vectors in will not affect the span. Suppose that was obtained from by multiplying the row of by a non-zero constant . We need to show that   To do this we will assume that some vector is in and show that is in . We will then assume that some vector is in and show that must be in .  Suppose that is in . Then But this implies So is in .  Now suppose is in , then But because , we can do the following: Therefore, is in .  We leave it to the reader to verify that adding a multiple of one row of to another does not change the row space. See also .)   "
},
{
  "id": "cor-rowequiv",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#cor-rowequiv",
  "type": "Corollary",
  "number": "4.3.3",
  "title": "",
  "body": "  If matrix was obtained from matrix by applying a sequence of elementary row operations to then     This follows from repeated applications of .   "
},
{
  "id": "cor-rowArowrrefA",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#cor-rowArowrrefA",
  "type": "Corollary",
  "number": "4.3.4",
  "title": "",
  "body": "      "
},
{
  "id": "ex-basisrowspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#ex-basisrowspace",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Let Find two distinct bases for .    By a basis for will also be a basis for . Row reduction gives us: Since the zero row contributes nothing to the span, we conclude that the nonzero rows of span . Therefore, a basis for the row space consists of the vecotrs It follows that the nonzero rows of are linearly independent.  To find a second basis for , observe that by the row space of any row-echelon form of will be equal to . Matrix has many row-echelon forms. Here is one of them: The nonzero rows of span . Once again the nonzero rows of are linearly independent. Thus the nonzero rows of form a basis for .   "
},
{
  "id": "th-samenumberofnonzerorows",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#th-samenumberofnonzerorows",
  "type": "Theorem",
  "number": "4.3.6",
  "title": "",
  "body": "  All row-echelon forms of a given matrix have the same number of nonzero rows.   "
},
{
  "id": "Subsection-Row-Space-of-a-Matrix-12",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#Subsection-Row-Space-of-a-Matrix-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank "
},
{
  "id": "th-dimofrowA",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#th-dimofrowA",
  "type": "Definition",
  "number": "4.3.7",
  "title": "",
  "body": "  For any matrix ,    "
},
{
  "id": "def-colspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#def-colspace",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "  Let be an matrix. The column space of , denoted by , is the subspace of spanned by the columns of .   "
},
{
  "id": "init-colspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#init-colspace",
  "type": "Exploration",
  "number": "4.3.2",
  "title": "",
  "body": " Let Our goal is to find a basis for . To do this we need to find a linearly independent subset of the columns of that spans .  Consider the linear relation: Solving this homogeneous equation amounts to finding . So, We now see that has infinitely many solutions.  Observe that the homogeneous equation has the same solution set as . In particular, , , , is a non-trivial solution of and . This means that the third column of and the third column of can be expressed as the first column minus the second column of their respective matrices.  We conclude that the third column of can be eliminated from the spanning set for and Having gotten rid of one of the vectors, we need to determine whether the remaining three vectors are linearly independent. To do this we need to find all solutions of Fortunately, we do not have to start from scratch. Observe that crossing out the third column in the previous row reduction process yields the desired reduced row-echelon form.   Matrix with column cut out    This time the reduced row-echelon form tells us that ( has only the trivial solution. We conclude that the three vectors are linearly independent and is a basis for .  "
},
{
  "id": "colspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#colspace",
  "type": "Algorithm",
  "number": "4.3.9",
  "title": "",
  "body": "  Given a matrix , a basis for can be found as follows:   Find (or any row-echelon form of .)    Identify the pivot columns of (or ).    The columns of corresponding to the pivot columns of (or ) form a basis for .       Let be the columns of , and let be the columns of (or ). Observe that the equations  have the same solution set. This means that any non-trivial relation among the columns of (or ) translates into a non-trivial relation among the columns of . Likewise, any collection of linearly independent columns of (or ) corresponds to linearly independent columns of .  Now, the pivot columns of (or ) are linearly independent. Therefore the corresponding columns of are linearly independent whereas non-pivot columns can be expressed as linear combinations of the pivot columns, therefore they contribute nothing to the span and can be removed from the spanning set.   "
},
{
  "id": "th-dimroweqdimcoleqrank",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#th-dimroweqdimcoleqrank",
  "type": "Theorem",
  "number": "4.3.10",
  "title": "",
  "body": "  Let be a matrix.    "
},
{
  "id": "ex-basiscolspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#ex-basiscolspace",
  "type": "Example",
  "number": "4.3.11",
  "title": "",
  "body": "  We will return to matrix of and find a basis for .    We begin by finding . Columns , and of contain leading . Therefore columns , and of form a basis for .   "
},
{
  "id": "def-nullspace",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#def-nullspace",
  "type": "Definition",
  "number": "4.3.12",
  "title": "",
  "body": "  Let be an matrix. The null space of , denoted by , is the set of all vectors in such that .   "
},
{
  "id": "ex-nullintro",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#ex-nullintro",
  "type": "Example",
  "number": "4.3.13",
  "title": "",
  "body": "  Find if     We need to solve the equation . Row reduction gives us We conclude that . Thus consists of all vectors of the form We might write or    "
},
{
  "id": "Subsection-The-Null-Space-6",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#Subsection-The-Null-Space-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "th-nullsubspacern",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#th-nullsubspacern",
  "type": "Theorem",
  "number": "4.3.14",
  "title": "",
  "body": "  Let be an matrix. Then is a subspace of .    To deduce that is closed under vector addition and scalar multiplication we will show that a linear combination of any two elements of is contained in .  Suppose and are in . Then and . But then We conclude that is also in .   "
},
{
  "id": "ex-dimnull",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#ex-dimnull",
  "type": "Example",
  "number": "4.3.15",
  "title": "",
  "body": "  Find a basis for , where is the matrix in .    Elements in the null space of are solutions to the equation Row reduction yields  Therefore, elements of are of the form Thus Now we need to find a basis for we need to find linearly independent vectors that span . Take a closer look at the vectors Because of the locations of and , it is clear that one vector is not a scalar multiple of the other. Therefore the two vectors are linearly independent. We conclude that is a basis of , and .   "
},
{
  "id": "def-matrixnullity",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#def-matrixnullity",
  "type": "Definition",
  "number": "4.3.16",
  "title": "",
  "body": "  Let be a matrix. The dimension of the null space of is called the nullity of .    "
},
{
  "id": "th-matrixranknullity",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#th-matrixranknullity",
  "type": "Theorem",
  "number": "4.3.17",
  "title": "",
  "body": "  Let be an matrix. Then    "
},
{
  "id": "colrowmatrixA1",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#colrowmatrixA1",
  "type": "Exercise",
  "number": "4.3.5.1",
  "title": "",
  "body": "  Let Find .        "
},
{
  "id": "prob-colrowmatrixA2",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-colrowmatrixA2",
  "type": "Exercise",
  "number": "4.3.5.2",
  "title": "",
  "body": "  Compute , and         "
},
{
  "id": "prob-colrowmatrixA3",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-colrowmatrixA3",
  "type": "Exercise",
  "number": "4.3.5.3",
  "title": "",
  "body": "  Use and the procedure outlined in to find a basis for .    A basis for is    "
},
{
  "id": "prob-colrowmatrixA4",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-colrowmatrixA4",
  "type": "Exercise",
  "number": "4.3.5.4",
  "title": "",
  "body": "  Use to find a basis for .    A basis for is    "
},
{
  "id": "colrowmatrixB1",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#colrowmatrixB1",
  "type": "Exercise",
  "number": "4.3.5.5",
  "title": "",
  "body": "  Find .        "
},
{
  "id": "prob-colrowmatrixB2",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-colrowmatrixB2",
  "type": "Exercise",
  "number": "4.3.5.6",
  "title": "",
  "body": "  Find     The answer is .   "
},
{
  "id": "prob-colrowmatrixB3",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-colrowmatrixB3",
  "type": "Exercise",
  "number": "4.3.5.7",
  "title": "",
  "body": "  Use and the procedure outlined in to find a basis for .    A basis for is    "
},
{
  "id": "prob-colrowmatrixB4",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-colrowmatrixB4",
  "type": "Exercise",
  "number": "4.3.5.8",
  "title": "",
  "body": "  Use to find a basis for .    A basis for is    "
},
{
  "id": "prob-rankoftranspose",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-rankoftranspose",
  "type": "Exercise",
  "number": "4.3.5.9",
  "title": "",
  "body": "  Prove that    "
},
{
  "id": "prob-basisforV",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-basisforV",
  "type": "Exercise",
  "number": "4.3.5.10",
  "title": "",
  "body": "  Find a basis for , where     Find a basis for the column space of a matrix whose columns are the given vectors.   "
},
{
  "id": "nullABC1",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#nullABC1",
  "type": "Exercise",
  "number": "4.3.5.11",
  "title": "",
  "body": "  Find a basis for , demonstrate that the Rank-Nullity Theorem (see ) holds for and explain how you can quickly tell that the vectors you selected for your basis are linearly independent.    Basis for     "
},
{
  "id": "prob-nullABC2",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-nullABC2",
  "type": "Exercise",
  "number": "4.3.5.12",
  "title": "",
  "body": "  Find a basis for and demonstrate that the Rank-Nullity Theorem (see ) holds for .    Basis for :    "
},
{
  "id": "nulM1",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#nulM1",
  "type": "Exercise",
  "number": "4.3.5.13",
  "title": "",
  "body": "  Follow the process used in to find a basis for . Explain why the basis elements obtained in this way are linearly independent.    Basis of    "
},
{
  "id": "prob-nullM2",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-nullM2",
  "type": "Exercise",
  "number": "4.3.5.14",
  "title": "",
  "body": "  Let denote the columns of . Express as a linear combination of and .        "
},
{
  "id": "prob-truefalse3by5",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-truefalse3by5",
  "type": "Exercise",
  "number": "4.3.5.15",
  "title": "",
  "body": "  Suppose is a matrix. Which of the following statements could be true?                                        "
},
{
  "id": "prob-truefalse7by3",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-truefalse7by3",
  "type": "Exercise",
  "number": "4.3.5.16",
  "title": "",
  "body": "  Suppose is a matrix. Which of the following statements could be true?                                        "
},
{
  "id": "prob-proofofrowBrowA",
  "level": "2",
  "url": "Section-Subspaces-of-m-R-n-m-Associated-with-Matrices.html#prob-proofofrowBrowA",
  "type": "Exercise",
  "number": "4.3.5.17",
  "title": "",
  "body": "  Complete the proof of by showing that adding a scalar multiple of one row of a matrix to another row does not change the row space.   "
},
{
  "id": "Section-Abstract-Vector-Spaces",
  "level": "1",
  "url": "Section-Abstract-Vector-Spaces.html",
  "type": "Section",
  "number": "4.4",
  "title": "Abstract Vector Spaces",
  "body": " Abstract Vector Spaces  When we examined subspaces of we discussed as a vector space and introduced the notion of a subspace of . In this section we will consider sets other than that have two operations and satisfy the same properties as . Such sets, together with the operations of addition and scalar multiplication, will also be called vector spaces.   Properties of Vector Spaces  Recall that is said to be a vector space because    is closed under vector addition,     is closed under scalar multiplication,   and satisfies the following properties:   Commutative Property of Addition:     Associative Property of Addition:     Existence of Additive Identity:     Existence of Additive Inverse:     Distributive Property over Vector Addition:     Distributive Property over Scalar Addition:     Associative Property for Scalar Multiplication:     Multiplication by :        All scalars in this chapter are assumed to be real numbers. Complex scalars are considered later.    In the next two examples we will explore two sets other than endowed with addition and scalar multiplication and satisfying the same properties.   Let be the set of all matrices. Matrix addition and scalar multiplication were defined in chapter . Observe that the sum of two matrices is also an matrix. Likewise, a scalar multiple of an matrix is an matrix. Thus    is closed under matrix addition;     is closed under scalar multiplication.   In addition, and give us the following properties of matrix addition and scalar multiplication. Note that these properties are analogous to the eight vector properties above.   Commutative Property of Addition: .    Associative Property of Addition: .    Existence of Additive Identity: where is the zero matrix.    Existence of Additive Inverse: .    Distributive Property over Matrix Addition: .    Distributive Property over Scalar Addition: .    Associative Property for Scalar Multiplication: .    Multiplication by : .        Consider the set of all linear functions. This set includes all polynomials of degree and degree . We will use addition and scalar multiplication of polynomials as the two operations, and show that is closed under those operations and satisfies eight properties analogous to those of vectors of .    Elements of are functions given by (Note that and can be equal to zero.)  Given and in , it is easy to verify that is also in . This gives us closure under function addition. For any scalar , we have Therefore is in , and is closed under scalar multiplication. We now proceed to formulate eight properties analogous to those of vectors of .  Let , and be elements of given by , , and . Let and be scalars.   Commutative Property of Addition:   This property holds because     Associative property of Addition:   This property is easy to verify and is left to the reader.    Existence of additive identity:   The additive identity is given by . Note that is a vector in the space .    Existence of additive inverse:   The additive inverse of is a function given by . Note that is in .    Distributive Property over Vector Addition:   This property holds because     Distributive property over scalar addition:   This property holds because     Associative property for scalar multiplication:   This property holds because     Multiplication by   This follows from          Definition of a Vector Space  During and show us that there are many times in mathematics when we encounter a set with two operations (that we call addition and scalar multiplication) such that the set is closed under the two operations, and satisfies the same eight properties as . We will refer to such sets as vector spaces .    Let be a nonempty set. Suppose that elements of can be added together and multiplied by scalars. The set , together with operations of addition and scalar multiplication, is called a vector space provided that    is closed under addition,     is closed under scalar multiplication   and the following properties hold for , and in and scalars and :   Commutative Property of Addition:     Associative Property of Addition:\\quad     Existence of Additive Identity:     Existence of Additive Inverse:     Distributive Property over Vector Addition:     Distributive Property over Scalar Addition:     Associative Property for Scalar Multiplication:     Multiplication by :    We will refer to elements of as vectors .    When scalars and in the above definition are restricted to real numbers, as they are in this chapter, vector space may be referred to as a vector space over the real numbers .  We have already encountered two abstract vectors spaces before, viz.:    and are vector spaces (eee and ).   Sets of polynomials provide an important source of examples, so we review some basic facts. A polynomial with real coefficients in is an expression where are real numbers called the coefficients of the polynomial.  If all the coefficients are zero, the polynomial is called the zero polynomial and is denoted simply as .  If , the highest power of with a nonzero coefficient is called the degree of denoted as . The degree of the zero polynomial is not defined.  The coefficient itself is called the leading coefficient of . Hence , , and .  Let denote the set of all polynomials and suppose that are two polynomials in (possibly of different degrees). Then and are called equal (written ) if and only if all the corresponding coefficients are equal--- that is, one has , , , and so on. In particular, means , , , .  The set has an addition and scalar multiplication defined on it as follows: if and are as before and is a real number,   A ton of terminology was just introduced. They are underlined in the example below.     is a vector space.    It is easy to see that the sum of two polynomials is again a polynomial, and that a scalar multiple of a polynomial is a polynomial. Thus, is closed under addition and scalar multiplication. The other eight vector space properties are easily verified, and we conclude that is a vector space.      Let be the set of all degree two polynomials in . In other words, We claim that is not a vector space.    Observe that is not closed under addition. To see this, let and let . Then and are both elements of . However, is not an element of , as it is only a degree one polynomial. We require the coefficient of to be nonzero for a polynomial to be in , and this is not the case for . As an exercise, check the remaining vector space properties one-by-one to see which properties hold and which do not.    Set in is not a vector space, but if we make a slight modification, we can make it into a vector space.   Let be the set of polynomials of degree two or less. In other words, Note that contains the zero polynomial (let ). Unlike set in , is closed under polynomial addition and scalar multiplication. It is easy to verify that all vector space properties hold, so is a vector space.    Let be a natural number. Define to be the set of polynomials of degree or less than , then by reasoning similar to , is a vector space.     Subspaces    A nonempty subset of a vector space is called a subspace of , provided that is itself a vector space when given the same addition and scalar multiplication as .    An example to showcase this is in order.   In we demonstrated that is a vector space. From we know that is a vector space. But is a subset of , and uses the same operations of polynomial addition and scalar multiplication. Therefore is a subspace of .   Checking all ten properties to verify that a subset of a vector space is a subspace can be cumbersome. Fortunately we have the following theorem.   Subspace Test   Let be a nonempty subset of a vector space . If is closed under the operations of addition and scalar multiplication of , then is a subspace of .    To prove that closure is a sufficient condition for to be a subspace, we will need to show that closure under addition and scalar multiplication of guarantees that the remaining eight properties are satisfied automatically.  Observe that , , , , and hold for all elements of . Thus, these properties will hold for all elements of . We say that these properties are inherited from .  To prove we need to show that , which we know to be an element of , is contained in . Let be an element of (recall that is nonempty). We will show that in . Then, by closure under scalar multiplication, we will be able to conclude that must be in . Adding the additive inverse of to both sides gives us Thanks to and . By and  Because is closed under scalar multiplication is in . We know that every element of , being an element of , has an additive inverse in . We need to show that the additive inverse of every element of is contained in . Let be any element of . We will show that is the additive inverse of . Then by closure, will have to be contained in . To show that is the additive inverse of , we must show that . We compute: Thus is the additive inverse of . By closure, is in .    Let us activate the theorem in an example.   Let be a fixed matrix in . Show that the set of all matrices that commute with under matrix multiplication is a subspace of .   The set consists of all matrices such that . First, observe that is not empty because is an element. Now we need to show that is closed under matrix addition and scalar multiplication. Suppose that and lie in . Then and . Then Therefore commutes with . Thus is in . We conclude that is closed under matrix addition. Now suppose is in . Let be a scalar, then Therefore commutes with . We conclude that is in , and is closed under scalar multiplication. Hence is a subspace of .      Suppose is a polynomial and is a number. Then the number obtained by replacing by in the expression for is called the evaluation of at . For example, if , then the evaluation of at is If , the number is called a root of .    To get used to the new terminology, let us look at an example in the context of polynomials.    Consider the set of all polynomials in that have as a root: Show that is a subspace of .    Observe that is not empty because is an element of . Suppose and lie in . Then and . We have for all , so and is closed under addition. The verification that is closed under scalar multiplication is similar.      Linear Combinations and Span    Let be a vector space and let be vectors in . A vector is said to be a linear combination of vectors if for some scalars .      Let be a vector space and let be vectors in . The set of all linear combinations of is called the span of . We write and we say that vectors  span  . Any vector in is said to be in the span of . The set is called a spanning set for .    We revisit the situation for some specific polynomials.    Consider and in . Determine whether and lie in     For , we want to determine if and exist such that Expanding the right hand side gives us: Combining like terms, we get: Setting this equal to and equating coefficients of powers of gives us a system of equations This system has the solution and , so is indeed in . Turning to , we are looking for and such that Again equating coefficients of powers of gives equations , , and . But in this case there is no solution, so is not in .      Let be a vector space. Let be any subset of . Then is a subspace of .    See .      Bases and Dimension of Abstract Vector Spaces   When working with and subspaces of we developed several fundamental ideas including span , linear independence , bases and dimension . We will find that these concepts generalize easily to abstract vector spaces and that analogous results hold in these new settings.   Linear Independence   Let be a vector space. Let be vectors of . We say that the set is linearly independent if the only solution to is the trivial solution  .  If, in addition to the trivial solution, a non-trivial solution (not all are zero) exists, then we say that the set is linearly dependent .    Let us examine this abstract version of bases in the context of polynomials, to get a feeling for these concepts.    Show that is linearly independent in .    Consider the linear combination equation The constant term, as well as the coefficients in front of and , must be equal to . This gives us the following system of equations. The only solution is . We conclude that is linearly independent in .      Bases and Dimension  Recall that our motivation for defining a basis of a subspace of was to have a collection of vectors such that every vector of the subspace can be expressed as a unique linear combination of the vectors in that collection. Definition of a basis ( ) generalizes to abstract vector spaces as follows.    Let be a vector space. A set of vectors of is called a basis of provided that         is linearly independent.         Let be a vector space, and let be a basis for . Then every element of has a unique representation as linear combination of the elements of .    By the definition of a basis, we know that can be written as a linear combination of . Suppose there are two such representations. Then,  But then we have: Because are linearly independent, we have for . Consequently for .    In chapter , we defined the dimension of a subspace of to be the number of elements in a basis ( ). We will adopt this definition for abstract vector spaces. As before, to ensure that dimension is well-defined we need to establish that this definition is independent of our choice of a basis. The proof of the following theorem is identical to the proof of its counterpart in ( ).    Let be a vector space. Suppose and be two bases of . Then .    Now we can state the definition of dimensions for abstract vector spaces.    Let be a subspace of a vector space . The dimension of is the number, , of elements in any basis of . We write     In our discussions up to this point, we have always assumed that a basis is nonempty and hence that the dimension of the space is at least . However, the zero space has no basis. To accommodate for this, we will say that the zero vector space is defined to have dimension : Our insistence that amounts to saying that the empty set of vectors is a basis of . Thus the statement that ``the dimension of a vector space is the number of vectors in any basis'' holds even for the zero space.    Recall that the vector space consists of all matrices (see . Find a basis and the dimension of .    Let consist of matrices with exactly one entry equal to and all other entries equal to . It is clear that every matrix can be written as a linear combination of elements of . It is also easy to see that the elements of are linearly independent. Thus is a basis for . The set contains elements, so .      Recall that is the set of all polynomials of degree or less (see . Show that and that is a basis of .    Each polynomial is clearly a linear combination of , so . Suppose , then . So is linearly independent and is therefore a basis containing vectors. Thus, .      Consider the subset of . It was shown in of that is a subspace for any choice of the matrix . Let Show that and find a basis of .    Suppose is in . Then  This gives us two relationships: We can now express a generic element of as Let The set is linearly independent (see ) Every element of can be written as a linear combination of elements of . Thus . Therefore is a basis of , and .      In of you demonstrated that the set of all symmetric matrices is a subspace of . Let be a subspace of consisting of all symmetric matrices. Find the dimension of .    A matrix is symmetric if . In other words, a matrix is symmetric when entries directly across the main diagonal are equal, so each symmetric matrix has the form Hence the set spans . The reader can verify that is linearly independent. Thus is a basis of , so .      Finite-Dimensional Vector Spaces  Our definition of dimension of a vector space depends on the vector space having a basis. In this section we will establish that any vector space spanned by finitely many vectors has a basis.    A vector space is said to be finite-dimensional if it is spanned by finitely many vectors.    Given a finite-dimensional vector space we will find a basis for by starting with a linearly independent subset of and expanding it to a basis. The following results are more general versions of and , and . The proofs are identical and we will omit them.    Let be a vector space spanned by vectors. If a linearly independent subset of contains vectors, then .      Let be a vector space. Let be a linearly independent subset of . If is not in , then is linearly independent.      Let be a finite-dimensional vector space. Any linearly independent subset of can be expanded to a basis of .      Coordinate Vectors  Recall that in the context of (and subspaces of ) the requirement that elements of a basis be linearly independent guarantees that every element of the vector space has a unique representation in terms of the elements of the basis. (See Theorem of Introduction to Bases ) We proved the same property for abstract vector spaces in Theorem .  Uniqueness of representation in terms of the elements of a basis allows us to associate every element of a vector space with a unique coordinate vector with respect to a given basis. Coordinate vectors were first introduced in Introduction to Bases . We now give a formal definition.    Let be a vector space, and let be a basis for . If , then the vector in whose components are the coefficients is said to be the coordinate vector for with respect to . We denote the coordinate vector by and write:       The order of in which vectors appear in of is important. Switching the order of these vectors would switch the order of the coordinate vector components. For this reason, we will often use the term ordered basis to describe in the context of coordinate vectors.    Coordinate vectors may seem abstract as described above. In examples, however, one can nearly always pinpoint exactly what the coordinates are. Some examples will emphaize this:   The coordinate vector for in with respect to the ordered basis is Now let's change the order of the elements in . The coordinate vector for with respect to the ordered basis is      Show that the set is a basis for . Keep the order of elements in and find the coordinate vector for with respect to the ordered basis .    We will begin by showing that the elements of are linearly independent. Suppose Then This gives us the following system of equations: The solution is unique. We conclude that is linearly independent.  Next, we need to show that spans . To this end, we will consider a generic element of and attempt to express it as a linear combination of the elements of . then Setting the coefficients of like terms equal to each other gives us Solving this linear system of , and gives us (You should verify this.) This shows that every element of can be written as a linear combination of elements of . Therefore is a basis for . To find the coordinate vector for with respect to we need to express as a linear combination of the elements of . Fortunately, we have already done all the necessary work. For , , and . This gives us the coefficients of the linear combination: , , . We now write as a linear combination The coordinate vector for with respect to is       Recall that the set of all symmetric matrices is a subspace of . In , we demonstrated that is a basis for . Let . Observe that is an element of .   Find the coordinate vector with respect to the ordered basis for .    Let be another ordered basis for . Find the coordinate vector for with respect to .       We write as a linear combination of the elements of . Thus, the coordinate vector with respect to is The coordinate vector with respect to is     Coordinate vectors will play a vital role in establishing one of the most fundamental results in linear algebra, that all -dimensional vector spaces have the same structure as . In , for instance, we will show that is essentially the same as .      Is the set of all points in a vector space under the given definitions of addition and scalar multiplication? In each case be specific about which vector space properties hold and which properties fail.     Addition: and scalar Multiplication:       Addition: and scalar Multiplication:       Addition: and scalar Multiplication:       Addition: and scalar Multiplication:        Let be the set of all real-valued functions whose domain is all real numbers. Define addition and scalar multiplication as follows: Verify that is a vector space.      A differential equation is an equation that contains derivatives. Consider the differential equation: A solution to such an equation is a function.   Verify that is a solution to .    Is a solution?    Is a solution?    Is a solution?    Let be the set of all solutions to . Prove that is a vector space.         In this problem we will check that the set of all complex numbers is in fact a vector space. Let be a complex number. Similarly, let , be complex numbers, and let and be real number scalars. Check that complex numbers are closed under addition and multiplication, and that they satisfy each of the vector space properties.      Refer to and describe all elements of , where is a identity matrix.      Is the subset of all invertible matrices a subspace of ? Prove your claim.      Is the subset of all symmetric matrices a subspace of ? (eee .) Prove your claim.      Let be a subset of that consists of matrices that commute with every matrix in under matrix multiplication. In other words, Is a subspace of ?    Don't forget to check that is not empty!      List several elements of Suggest a spanning set for .      Describe how every element of looks liike.      Prove .       Prove that set of is linearly independent.      Show that each of the following sets of vectors is linearly independent.                           Show that each set in - is a basis for its respective vector space.      Find the coordinate vector for with respect to the given ordered basis of .                              Find the coordinate vector for with respect to the ordered basis            Let be a vector space of dimension . Suppose is linearly independent in . Show that is a basis for .     "
},
{
  "id": "Subsection-Properties-of-Vector-Spaces-3",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Properties-of-Vector-Spaces-3",
  "type": "Remark",
  "number": "4.4.1",
  "title": "",
  "body": "  All scalars in this chapter are assumed to be real numbers. Complex scalars are considered later.   "
},
{
  "id": "ex-setofmatricesvectorspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-setofmatricesvectorspace",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": " Let be the set of all matrices. Matrix addition and scalar multiplication were defined in chapter . Observe that the sum of two matrices is also an matrix. Likewise, a scalar multiple of an matrix is an matrix. Thus    is closed under matrix addition;     is closed under scalar multiplication.   In addition, and give us the following properties of matrix addition and scalar multiplication. Note that these properties are analogous to the eight vector properties above.   Commutative Property of Addition: .    Associative Property of Addition: .    Existence of Additive Identity: where is the zero matrix.    Existence of Additive Inverse: .    Distributive Property over Matrix Addition: .    Distributive Property over Scalar Addition: .    Associative Property for Scalar Multiplication: .    Multiplication by : .     "
},
{
  "id": "ex-linfunctionsvectspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-linfunctionsvectspace",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Consider the set of all linear functions. This set includes all polynomials of degree and degree . We will use addition and scalar multiplication of polynomials as the two operations, and show that is closed under those operations and satisfies eight properties analogous to those of vectors of .    Elements of are functions given by (Note that and can be equal to zero.)  Given and in , it is easy to verify that is also in . This gives us closure under function addition. For any scalar , we have Therefore is in , and is closed under scalar multiplication. We now proceed to formulate eight properties analogous to those of vectors of .  Let , and be elements of given by , , and . Let and be scalars.   Commutative Property of Addition:   This property holds because     Associative property of Addition:   This property is easy to verify and is left to the reader.    Existence of additive identity:   The additive identity is given by . Note that is a vector in the space .    Existence of additive inverse:   The additive inverse of is a function given by . Note that is in .    Distributive Property over Vector Addition:   This property holds because     Distributive property over scalar addition:   This property holds because     Associative property for scalar multiplication:   This property holds because     Multiplication by   This follows from       "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-2",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector spaces "
},
{
  "id": "def-vectorspacegeneral",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-vectorspacegeneral",
  "type": "Definition",
  "number": "4.4.4",
  "title": "",
  "body": "  Let be a nonempty set. Suppose that elements of can be added together and multiplied by scalars. The set , together with operations of addition and scalar multiplication, is called a vector space provided that    is closed under addition,     is closed under scalar multiplication   and the following properties hold for , and in and scalars and :   Commutative Property of Addition:     Associative Property of Addition:\\quad     Existence of Additive Identity:     Existence of Additive Inverse:     Distributive Property over Vector Addition:     Distributive Property over Scalar Addition:     Associative Property for Scalar Multiplication:     Multiplication by :    We will refer to elements of as vectors .   "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-4",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector space over the real numbers "
},
{
  "id": "ex-MLexamplesofvectspaces",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-MLexamplesofvectspaces",
  "type": "Example",
  "number": "4.4.5",
  "title": "",
  "body": "  and are vector spaces (eee and ).  "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-7",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial with real coefficients coefficients "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-8",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero polynomial "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-9",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degree "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-10",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "leading coefficient "
},
{
  "id": "Subsection-Definition-of-a-Vector-Space-11",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Definition-of-a-Vector-Space-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal "
},
{
  "id": "ex-pisavectorspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-pisavectorspace",
  "type": "Example",
  "number": "4.4.6",
  "title": "",
  "body": "   is a vector space.    It is easy to see that the sum of two polynomials is again a polynomial, and that a scalar multiple of a polynomial is a polynomial. Thus, is closed under addition and scalar multiplication. The other eight vector space properties are easily verified, and we conclude that is a vector space.   "
},
{
  "id": "ex-deg2onlynotavecspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-deg2onlynotavecspace",
  "type": "Example",
  "number": "4.4.7",
  "title": "",
  "body": "  Let be the set of all degree two polynomials in . In other words, We claim that is not a vector space.    Observe that is not closed under addition. To see this, let and let . Then and are both elements of . However, is not an element of , as it is only a degree one polynomial. We require the coefficient of to be nonzero for a polynomial to be in , and this is not the case for . As an exercise, check the remaining vector space properties one-by-one to see which properties hold and which do not.   "
},
{
  "id": "ex-deg-le-2vectorspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-deg-le-2vectorspace",
  "type": "Example",
  "number": "4.4.8",
  "title": "",
  "body": " Let be the set of polynomials of degree two or less. In other words, Note that contains the zero polynomial (let ). Unlike set in , is closed under polynomial addition and scalar multiplication. It is easy to verify that all vector space properties hold, so is a vector space.  "
},
{
  "id": "ex-pnisavectorspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-pnisavectorspace",
  "type": "Example",
  "number": "4.4.9",
  "title": "",
  "body": " Let be a natural number. Define to be the set of polynomials of degree or less than , then by reasoning similar to , is a vector space.  "
},
{
  "id": "def-subspaceabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-subspaceabstract",
  "type": "Definition",
  "number": "4.4.10",
  "title": "",
  "body": "  A nonempty subset of a vector space is called a subspace of , provided that is itself a vector space when given the same addition and scalar multiplication as .   "
},
{
  "id": "ex-subspaceabstract1",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-subspaceabstract1",
  "type": "Example",
  "number": "4.4.11",
  "title": "",
  "body": " In we demonstrated that is a vector space. From we know that is a vector space. But is a subset of , and uses the same operations of polynomial addition and scalar multiplication. Therefore is a subspace of .  "
},
{
  "id": "th-subspacetestabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#th-subspacetestabstract",
  "type": "Theorem",
  "number": "4.4.12",
  "title": "Subspace Test.",
  "body": " Subspace Test   Let be a nonempty subset of a vector space . If is closed under the operations of addition and scalar multiplication of , then is a subspace of .    To prove that closure is a sufficient condition for to be a subspace, we will need to show that closure under addition and scalar multiplication of guarantees that the remaining eight properties are satisfied automatically.  Observe that , , , , and hold for all elements of . Thus, these properties will hold for all elements of . We say that these properties are inherited from .  To prove we need to show that , which we know to be an element of , is contained in . Let be an element of (recall that is nonempty). We will show that in . Then, by closure under scalar multiplication, we will be able to conclude that must be in . Adding the additive inverse of to both sides gives us Thanks to and . By and  Because is closed under scalar multiplication is in . We know that every element of , being an element of , has an additive inverse in . We need to show that the additive inverse of every element of is contained in . Let be any element of . We will show that is the additive inverse of . Then by closure, will have to be contained in . To show that is the additive inverse of , we must show that . We compute: Thus is the additive inverse of . By closure, is in .   "
},
{
  "id": "ex-centralizerofA",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-centralizerofA",
  "type": "Example",
  "number": "4.4.13",
  "title": "",
  "body": " Let be a fixed matrix in . Show that the set of all matrices that commute with under matrix multiplication is a subspace of .   The set consists of all matrices such that . First, observe that is not empty because is an element. Now we need to show that is closed under matrix addition and scalar multiplication. Suppose that and lie in . Then and . Then Therefore commutes with . Thus is in . We conclude that is closed under matrix addition. Now suppose is in . Let be a scalar, then Therefore commutes with . We conclude that is in , and is closed under scalar multiplication. Hence is a subspace of .   "
},
{
  "id": "Subsection-Subspaces-9",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Subspaces-9",
  "type": "Remark",
  "number": "4.4.14",
  "title": "",
  "body": "  Suppose is a polynomial and is a number. Then the number obtained by replacing by in the expression for is called the evaluation of at . For example, if , then the evaluation of at is If , the number is called a root of .   "
},
{
  "id": "ex-root3",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-root3",
  "type": "Example",
  "number": "4.4.15",
  "title": "",
  "body": "  Consider the set of all polynomials in that have as a root: Show that is a subspace of .    Observe that is not empty because is an element of . Suppose and lie in . Then and . We have for all , so and is closed under addition. The verification that is closed under scalar multiplication is similar.   "
},
{
  "id": "def-lincombabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-lincombabstract",
  "type": "Definition",
  "number": "4.4.16",
  "title": "",
  "body": "  Let be a vector space and let be vectors in . A vector is said to be a linear combination of vectors if for some scalars .   "
},
{
  "id": "def-spanabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-spanabstract",
  "type": "Definition",
  "number": "4.4.17",
  "title": "",
  "body": "  Let be a vector space and let be vectors in . The set of all linear combinations of is called the span of . We write and we say that vectors  span  . Any vector in is said to be in the span of . The set is called a spanning set for .   "
},
{
  "id": "ex-inthespanpoly",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-inthespanpoly",
  "type": "Example",
  "number": "4.4.18",
  "title": "",
  "body": "  Consider and in . Determine whether and lie in     For , we want to determine if and exist such that Expanding the right hand side gives us: Combining like terms, we get: Setting this equal to and equating coefficients of powers of gives us a system of equations This system has the solution and , so is indeed in . Turning to , we are looking for and such that Again equating coefficients of powers of gives equations , , and . But in this case there is no solution, so is not in .   "
},
{
  "id": "th-spanisasubspaceabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#th-spanisasubspaceabstract",
  "type": "Theorem",
  "number": "4.4.19",
  "title": "",
  "body": "  Let be a vector space. Let be any subset of . Then is a subspace of .    See .   "
},
{
  "id": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces-2",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Section-Bases-and-Dimension-of-Abstract-Vector-Spaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span linear independence bases dimension "
},
{
  "id": "def-linearindependenceabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-linearindependenceabstract",
  "type": "Definition",
  "number": "4.4.20",
  "title": "Linear Independence.",
  "body": " Linear Independence   Let be a vector space. Let be vectors of . We say that the set is linearly independent if the only solution to is the trivial solution  .  If, in addition to the trivial solution, a non-trivial solution (not all are zero) exists, then we say that the set is linearly dependent .   "
},
{
  "id": "ex-polyindset",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-polyindset",
  "type": "Example",
  "number": "4.4.21",
  "title": "",
  "body": "  Show that is linearly independent in .    Consider the linear combination equation The constant term, as well as the coefficients in front of and , must be equal to . This gives us the following system of equations. The only solution is . We conclude that is linearly independent in .   "
},
{
  "id": "def-basisabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-basisabstract",
  "type": "Definition",
  "number": "4.4.22",
  "title": "",
  "body": "  Let be a vector space. A set of vectors of is called a basis of provided that         is linearly independent.      "
},
{
  "id": "th-uniquerep",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#th-uniquerep",
  "type": "Theorem",
  "number": "4.4.23",
  "title": "",
  "body": "  Let be a vector space, and let be a basis for . Then every element of has a unique representation as linear combination of the elements of .    By the definition of a basis, we know that can be written as a linear combination of . Suppose there are two such representations. Then,  But then we have: Because are linearly independent, we have for . Consequently for .   "
},
{
  "id": "Subsection-Bases-and-Dimension-5",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Bases-and-Dimension-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension "
},
{
  "id": "th-dimwelldefinedabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#th-dimwelldefinedabstract",
  "type": "Theorem",
  "number": "4.4.24",
  "title": "",
  "body": "  Let be a vector space. Suppose and be two bases of . Then .   "
},
{
  "id": "def-dimensionabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-dimensionabstract",
  "type": "Definition",
  "number": "4.4.25",
  "title": "",
  "body": "  Let be a subspace of a vector space . The dimension of is the number, , of elements in any basis of . We write    "
},
{
  "id": "ex-dimofM",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-dimofM",
  "type": "Example",
  "number": "4.4.26",
  "title": "",
  "body": "  Recall that the vector space consists of all matrices (see . Find a basis and the dimension of .    Let consist of matrices with exactly one entry equal to and all other entries equal to . It is clear that every matrix can be written as a linear combination of elements of . It is also easy to see that the elements of are linearly independent. Thus is a basis for . The set contains elements, so .   "
},
{
  "id": "ex-dimofP",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-dimofP",
  "type": "Example",
  "number": "4.4.27",
  "title": "",
  "body": "  Recall that is the set of all polynomials of degree or less (see . Show that and that is a basis of .    Each polynomial is clearly a linear combination of , so . Suppose , then . So is linearly independent and is therefore a basis containing vectors. Thus, .   "
},
{
  "id": "ex-CAbasis",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-CAbasis",
  "type": "Example",
  "number": "4.4.28",
  "title": "",
  "body": "  Consider the subset of . It was shown in of that is a subspace for any choice of the matrix . Let Show that and find a basis of .    Suppose is in . Then  This gives us two relationships: We can now express a generic element of as Let The set is linearly independent (see ) Every element of can be written as a linear combination of elements of . Thus . Therefore is a basis of , and .   "
},
{
  "id": "ex-symmetricmatsubspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-symmetricmatsubspace",
  "type": "Example",
  "number": "4.4.29",
  "title": "",
  "body": "  In of you demonstrated that the set of all symmetric matrices is a subspace of . Let be a subspace of consisting of all symmetric matrices. Find the dimension of .    A matrix is symmetric if . In other words, a matrix is symmetric when entries directly across the main diagonal are equal, so each symmetric matrix has the form Hence the set spans . The reader can verify that is linearly independent. Thus is a basis of , so .   "
},
{
  "id": "def-findimvectorspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-findimvectorspace",
  "type": "Definition",
  "number": "4.4.30",
  "title": "",
  "body": "  A vector space is said to be finite-dimensional if it is spanned by finitely many vectors.   "
},
{
  "id": "lemma-atmostnlinindinabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#lemma-atmostnlinindinabstract",
  "type": "Lemma",
  "number": "4.4.31",
  "title": "",
  "body": "  Let be a vector space spanned by vectors. If a linearly independent subset of contains vectors, then .   "
},
{
  "id": "lemma-expandinglinindsetabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#lemma-expandinglinindsetabstract",
  "type": "Lemma",
  "number": "4.4.32",
  "title": "",
  "body": "  Let be a vector space. Let be a linearly independent subset of . If is not in , then is linearly independent.   "
},
{
  "id": "th-expandtobasisabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#th-expandtobasisabstract",
  "type": "Theorem",
  "number": "4.4.33",
  "title": "",
  "body": "  Let be a finite-dimensional vector space. Any linearly independent subset of can be expanded to a basis of .   "
},
{
  "id": "Subsection-Coordinate-Vectors-3",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#Subsection-Coordinate-Vectors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate vector "
},
{
  "id": "def-coordvector",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#def-coordvector",
  "type": "Definition",
  "number": "4.4.34",
  "title": "",
  "body": "  Let be a vector space, and let be a basis for . If , then the vector in whose components are the coefficients is said to be the coordinate vector for with respect to . We denote the coordinate vector by and write:    "
},
{
  "id": "coordVectorOrder",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#coordVectorOrder",
  "type": "Remark",
  "number": "4.4.35",
  "title": "",
  "body": "  The order of in which vectors appear in of is important. Switching the order of these vectors would switch the order of the coordinate vector components. For this reason, we will often use the term ordered basis to describe in the context of coordinate vectors.   "
},
{
  "id": "ex-coordvectorinpolyvectspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-coordvectorinpolyvectspace",
  "type": "Example",
  "number": "4.4.36",
  "title": "",
  "body": " The coordinate vector for in with respect to the ordered basis is Now let's change the order of the elements in . The coordinate vector for with respect to the ordered basis is   "
},
{
  "id": "ex-coordvectorinpolyvectspace2",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-coordvectorinpolyvectspace2",
  "type": "Example",
  "number": "4.4.37",
  "title": "",
  "body": "  Show that the set is a basis for . Keep the order of elements in and find the coordinate vector for with respect to the ordered basis .    We will begin by showing that the elements of are linearly independent. Suppose Then This gives us the following system of equations: The solution is unique. We conclude that is linearly independent.  Next, we need to show that spans . To this end, we will consider a generic element of and attempt to express it as a linear combination of the elements of . then Setting the coefficients of like terms equal to each other gives us Solving this linear system of , and gives us (You should verify this.) This shows that every element of can be written as a linear combination of elements of . Therefore is a basis for . To find the coordinate vector for with respect to we need to express as a linear combination of the elements of . Fortunately, we have already done all the necessary work. For , , and . This gives us the coefficients of the linear combination: , , . We now write as a linear combination The coordinate vector for with respect to is    "
},
{
  "id": "ex-symmmatsubspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#ex-symmmatsubspace",
  "type": "Example",
  "number": "4.4.38",
  "title": "",
  "body": "  Recall that the set of all symmetric matrices is a subspace of . In , we demonstrated that is a basis for . Let . Observe that is an element of .   Find the coordinate vector with respect to the ordered basis for .    Let be another ordered basis for . Find the coordinate vector for with respect to .       We write as a linear combination of the elements of . Thus, the coordinate vector with respect to is The coordinate vector with respect to is    "
},
{
  "id": "prob-abstractvectspace1",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace1",
  "type": "Exercise",
  "number": "4.4.9.1",
  "title": "",
  "body": "  Addition: and scalar Multiplication:    "
},
{
  "id": "prob-abstractvectspace2",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace2",
  "type": "Exercise",
  "number": "4.4.9.2",
  "title": "",
  "body": "  Addition: and scalar Multiplication:    "
},
{
  "id": "prob-abstractvectspace3",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace3",
  "type": "Exercise",
  "number": "4.4.9.3",
  "title": "",
  "body": "  Addition: and scalar Multiplication:    "
},
{
  "id": "prob-abstractvectspace4",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace4",
  "type": "Exercise",
  "number": "4.4.9.4",
  "title": "",
  "body": "  Addition: and scalar Multiplication:    "
},
{
  "id": "prob-abstractvectspace5",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace5",
  "type": "Exercise",
  "number": "4.4.9.5",
  "title": "",
  "body": "  Let be the set of all real-valued functions whose domain is all real numbers. Define addition and scalar multiplication as follows: Verify that is a vector space.   "
},
{
  "id": "prob-abstractvectspacediffeq",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspacediffeq",
  "type": "Exercise",
  "number": "4.4.9.6",
  "title": "",
  "body": "  A differential equation is an equation that contains derivatives. Consider the differential equation: A solution to such an equation is a function.   Verify that is a solution to .    Is a solution?    Is a solution?    Is a solution?    Let be the set of all solutions to . Prove that is a vector space.      "
},
{
  "id": "prob-abstractvectspacecomplex",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspacecomplex",
  "type": "Exercise",
  "number": "4.4.9.7",
  "title": "",
  "body": "  In this problem we will check that the set of all complex numbers is in fact a vector space. Let be a complex number. Similarly, let , be complex numbers, and let and be real number scalars. Check that complex numbers are closed under addition and multiplication, and that they satisfy each of the vector space properties.   "
},
{
  "id": "prob-abstractvectspace6",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace6",
  "type": "Exercise",
  "number": "4.4.9.8",
  "title": "",
  "body": "  Refer to and describe all elements of , where is a identity matrix.   "
},
{
  "id": "prob-abstractvectspace7",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace7",
  "type": "Exercise",
  "number": "4.4.9.9",
  "title": "",
  "body": "  Is the subset of all invertible matrices a subspace of ? Prove your claim.   "
},
{
  "id": "prob-symmetricsubspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-symmetricsubspace",
  "type": "Exercise",
  "number": "4.4.9.10",
  "title": "",
  "body": "  Is the subset of all symmetric matrices a subspace of ? (eee .) Prove your claim.   "
},
{
  "id": "prob-abstractvectspace8",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace8",
  "type": "Exercise",
  "number": "4.4.9.11",
  "title": "",
  "body": "  Let be a subset of that consists of matrices that commute with every matrix in under matrix multiplication. In other words, Is a subspace of ?    Don't forget to check that is not empty!   "
},
{
  "id": "prob-abstractvectspace9",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace9",
  "type": "Exercise",
  "number": "4.4.9.12",
  "title": "",
  "body": "  List several elements of Suggest a spanning set for .   "
},
{
  "id": "prob-abstractvectspace10",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-abstractvectspace10",
  "type": "Exercise",
  "number": "4.4.9.13",
  "title": "",
  "body": "  Describe how every element of looks liike.   "
},
{
  "id": "prob-spanisasubspaceabstract",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-spanisasubspaceabstract",
  "type": "Exercise",
  "number": "4.4.9.14",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-CABlinind",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-CABlinind",
  "type": "Exercise",
  "number": "4.4.9.15",
  "title": "",
  "body": "  Prove that set of is linearly independent.   "
},
{
  "id": "prob-linindabstractvsp1",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-linindabstractvsp1",
  "type": "Exercise",
  "number": "4.4.9.16",
  "title": "",
  "body": "      "
},
{
  "id": "prob-linindabstractvsp2",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-linindabstractvsp2",
  "type": "Exercise",
  "number": "4.4.9.17",
  "title": "",
  "body": "      "
},
{
  "id": "prob-linindabstractvsp3",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-linindabstractvsp3",
  "type": "Exercise",
  "number": "4.4.9.18",
  "title": "",
  "body": "      "
},
{
  "id": "prob-linindabstractvsp123",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-linindabstractvsp123",
  "type": "Exercise",
  "number": "4.4.9.19",
  "title": "",
  "body": "  Show that each set in - is a basis for its respective vector space.   "
},
{
  "id": "prob-coordvectors1",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-coordvectors1",
  "type": "Exercise",
  "number": "4.4.9.20",
  "title": "",
  "body": "           "
},
{
  "id": "prob-coordvectors2",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-coordvectors2",
  "type": "Exercise",
  "number": "4.4.9.21",
  "title": "",
  "body": "           "
},
{
  "id": "prob-coordvectors3",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-coordvectors3",
  "type": "Exercise",
  "number": "4.4.9.22",
  "title": "",
  "body": "  Find the coordinate vector for with respect to the ordered basis         "
},
{
  "id": "prob-basisforabstractvectspace",
  "level": "2",
  "url": "Section-Abstract-Vector-Spaces.html#prob-basisforabstractvectspace",
  "type": "Exercise",
  "number": "4.4.9.23",
  "title": "",
  "body": "  Let be a vector space of dimension . Suppose is linearly independent in . Show that is a basis for .   "
},
{
  "id": "Section-Linear-Transformations-of-Abstract-Vector-Spaces",
  "level": "1",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html",
  "type": "Section",
  "number": "4.5",
  "title": "Linear Transformations of Abstract Vector Spaces",
  "body": " Linear Transformations of Abstract Vector Spaces  Recall that a transformation is called a linear transformation if the following are true for all vectors and in , and scalars .  We generalize this definition as follows.    Let and be vector spaces. A transformation is called a linear transformation if the following are true for all vectors and in , and scalars .      This generalization allows for more interesting examples to be studied. For example:    Recall that is the set of all matrices. In , we demonstrated that together with operations of matrix addition and scalar multiplication is a vector space. Let be a transformation defined by where is fixed matrix. Show that is a linear transformation.    We verify the linearity properties using properties of matrix-matrix and matrix-scalar multiplication (see ). For and in and a scalar we have: together with       Recall that is the set of polynomials of degree or less than . In , we showed that together with operations of polynomial addition and scalar multiplication is a vector space. Suppose is a linear transformation such that   Find the image of under .           Let be a transformation such that . Show that is not linear.    To show that is not linear it suffices to find two matrices and such that .  Observe that if we pick and so that each has rank we would have while . Clearly .  This argument is sufficient, but if we want to have a specific example, we can find one.  Let Then and Thus, .     Linear Transformations and Bases   Suppose we want to define a linear transformation by Is this information sufficient to define ? To answer this question we will try to determine what does to an arbitrary vector of . If is a vector in , then can be uniquely expressed as a linear combination of and  By linearity of we have This shows that the image of every vector of under is completely determined by the action of on the standard unit vectors and . Vectors and form a standard basis of . What if we want to use a different basis? Let be our basis of choice for . (How would you verify that is a basis of ?) And suppose we want to define a linear transformation by Is this enough information to define ? Because form a basis of , every element of can be written as a unique linear combination We can find as follows: Again, we see how a linear transformation is completely determined by its action on a basis. assures us that given a basis, every vector has a unique representation as a linear combination of the basis vectors. Imagine what would happen if this were not the case.  In the first part of this exploration, for instance, we might have been able to represent as and ( or ). This would have resulted in mapping to two different elements: and , implying that is not even a function.   Let be a basis of a vector space . To define a linear transformation , it is sufficient to state the image of each basis vector under . Once the images of the basis vectors are established, we can determine the images of all vectors of as follows: Given any vector of , write as a linear combination of the elements of  Then     Coordinate Vectors  Transformations that map vectors to their coordinate vectors will prove to be of great importance. In this section we will prove that such transformations are linear and give several examples. If is a vector space, and is an ordered basis for then any vector of can be uniquely expressed as for some scalars . Vector in given by is said to be the coordinate vector for with respect to the ordered basis (see ). It turns out that the transformation defined by is linear. Before we prove linearity of , consider the following examples.    Consider . Let be an ordered basis for (You should do a quick mental check that is a legitimate basis). Define by . Find     We need to find the coordinate vector for with respect to . Firstly, This gives us:       Recall that is the set of polynomials of degree or less than . In , we showed that is a vector space.   Let be an ordered basis for . (It is easy to verify that is a basis.) If is given by , find     Let be an ordered basis for - In (see ), you demonstrated that is a basis.) If is given by , find         We express as a linear combination of elements of . Therefore Note that it is important to keep the basis elements in the same order in which they are listed, as the order of components of the coordinate vector depends on the order of the basis elements. We conclude that For : Our goal is to express as a linear combination of the elements of . Thus, we need to find coefficients , and such that This gives us a system of linear equations: Solving the system yields , and . Thus       Let be an -dimensional vector space, and let be an ordered basis for . Then given by is a linear transformation.     First observe that of guarantees that there is only one way to represent each element of as a linear combination of elements of . Thus each element of maps to exactly one element of , as long as the order in which elements of appear is taken into account. This proves that is a function, or a transformation.  We will now prove that is linear. Let be an element of . We will first show that . Suppose , then can be written as a unique linear combination: We have: We leave it to the reader to verify that (see ).   In our final example, we will consider in the context of a basis of the codomain, as well as a basis of the domain. This will later help us tackle the question of the matrix of associated with bases other than the standard one.    Let  and Because each of and is linearly independent, let be ordered bases of and , respectively. Define a linear transformation by    Verify that is in and find the coordinate vector .    Find and the coordinate vector .       For , we need to express as a linear combination of and . This can be done by observation or by solving the equation We find that and , so . Thus is in . The coordinate vector for with respect to the ordered basis is For , by linearity of we have The coordinate vector for with respect to the ordered basis is       Inverses of a Linear Transformations  In , we examined a linear transformation that doubles all input vectors, and its inverse , that halves all input vectors. We observed that the composite functions and are both identity transformations. Diagrammatically, we can represent and as follows:   Idea of inverse diagram    This gives us a way of thinking about an inverse of as a transformation that ``undoes\" the action of by ``reversing\" the mapping arrows. We will now use these intuitive ideas to understand which linear transformations are invertible and which are not.  Given an arbitrary linear transformation , ``reversing the arrows\" may not always result in a transformation. Recall that transformations are functions. The figures below show two ways in which our attempt to ``reverse\" may fail to produce a function. First, if two distinct vectors and map to the same vector in , then reversing the arrows gives us a mapping that is clearly not a function.          Second, observe that our definition of an inverse of requires that the domain of the inverse transformation be (remember the inverse is intuitively the opposite one!)). If there is a vector in that is not an image of any vector in , then cannot be in the domain of an inverse transformation.      We now illustrate these potential issues with specific examples.    Let be a linear transformation whose standard matrix is Does have an inverse? Show that multiple vectors of the domain map to in the codomain.    The matrix is not invertible, so does not have an inverse. We now dig a little deeper to get additional insights into why does not have an inverse. Observe that all vectors of the form map to . To verify this, use matrix multiplication: This shows that there are infinitely many vectors that map to . So, ``reversing the arrows\" would not result in a function. (See Figure 1)      Let be a linear transformation whose standard matrix is Does have an inverse? Show that there exists a vector in such that no vector of maps to .    The matrix is not invertible (it's not even a square matrix!), so does not have an inverse. We now get another insight into why is not invertible. To find a vector such that no vector of maps to , we need to find for which the matrix equation has no solution.  Let . Gauss-Jordan elimination yields: Now, has a solution if and only if . Since we do not want to have a solution, all we need to do is pick values , and such that . Let . Then no element of maps to . This shows that we cannot ``reverse the arrows\" in an attempt to produce an inverse of . (See Figure 2)    Our next goal is to develop vocabulary that would allow us to discuss issues illustrated in Figures and .    Existence and Uniqueness of Inverses    Let and be vector spaces, and let be a linear transformation. Then has an inverse if and only if is one-to-one and onto.    We will first assume that is one-to-one and onto, and show that there exists a transformation such that and .  Because is onto, for every in , there exists in such that . Moreover, because is one-to-one, vector is the only vector that maps to . To stress this, we will say that for every , there exists such that . (Since every maps to exactly one , this notation makes sense for elements of as well.) We can now define by . Then We conclude that and . Therefore is an inverse of . We will now assume that has an inverse and show that must be one-to-one and onto. Suppose then but then We conclude that is one-to-one. Now suppose that is in . We need to show that some element of maps to . Let . Then We conclude that is onto.    The theorem together with its proof is all very formal. In practice, one can verify whether an inverse exists by verifying onto and one-to-one (often easier than pinpointing an inverse). Here is a case in point:    Transformation in is invertible.    We demonstrated that is one-to-one and onto. By , has an inverse. Recall that was introduced to demonstrate that is not always directly applicable. We now have additional tools. assures us that has an inverse, but does not help us find it. We will visit this problem again in later sections and find an inverse of .    Having an inverse refers to as an inverse of , implying that there may be more than one such transformation . We will now show that if such a transformation exists, it is unique. This will allow us to refer to it as the inverse of and to start using to denote the unique inverse of .    If is a linear transformation, and is an inverse of . Then is unique.    Let be a linear transformation. If is an inverse of , then satisfies Suppose there is another transformation, , such that We now show that .         Suppose is a linear transformation such that Find .           Define by . (Recall that denotes the trace of , which is the sum of the main diagonal entries of .) Find            Is a linear transformation? If so, prove it. If not, give a counterexample.      Define by Find            Is a linear transformation? If so, prove it. If not, give a counterexample.      This problem requires the knowledge of how to compute a determinant (for a quick reminder, chapter ). Define by . Find            Is a linear transformation? If so, prove it. If not, give a counterexample.      Define by (in other words, maps a polynomial to its derivative). Find            Is a linear transformation? If so, prove it. If not, give a counterexample.      Recall that the set of all symmetric matrices is a subspace of . In , we demonstrated that is a basis for . Define by . Find             Let be a subspace of with a basis . Find the coordinate vector, , for .           If the order of the basis elements in was switched to form a new basis How would this affect the coordinate vector?           In , you demonstrated that is a basis for . Define by . Find              Let and be vector spaces, and let and be ordered bases of and , respectively. Suppose is a linear transformation such that:    If , express as a linear combination of vectors of . Now, Find and .           Complete the proof of .       Define a transformation by Show that is a linear transformation that has an inverse.    You will need to demonstrate that is one-to-one and onto.      Let Define a linear transformation by Prove that has an inverse.     "
},
{
  "id": "Section-Linear-Transformations-of-Abstract-Vector-Spaces-2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#Section-Linear-Transformations-of-Abstract-Vector-Spaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation "
},
{
  "id": "def-lintransgeneral",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#def-lintransgeneral",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": "  Let and be vector spaces. A transformation is called a linear transformation if the following are true for all vectors and in , and scalars .     "
},
{
  "id": "ex-abstvectsplintransM22",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-abstvectsplintransM22",
  "type": "Example",
  "number": "4.5.2",
  "title": "",
  "body": "  Recall that is the set of all matrices. In , we demonstrated that together with operations of matrix addition and scalar multiplication is a vector space. Let be a transformation defined by where is fixed matrix. Show that is a linear transformation.    We verify the linearity properties using properties of matrix-matrix and matrix-scalar multiplication (see ). For and in and a scalar we have: together with    "
},
{
  "id": "ex-abstvecsplintrans2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-abstvecsplintrans2",
  "type": "Example",
  "number": "4.5.3",
  "title": "",
  "body": "  Recall that is the set of polynomials of degree or less than . In , we showed that together with operations of polynomial addition and scalar multiplication is a vector space. Suppose is a linear transformation such that   Find the image of under .        "
},
{
  "id": "ex-nonlinabstvectsp",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-nonlinabstvectsp",
  "type": "Example",
  "number": "4.5.4",
  "title": "",
  "body": "  Let be a transformation such that . Show that is not linear.    To show that is not linear it suffices to find two matrices and such that .  Observe that if we pick and so that each has rank we would have while . Clearly .  This argument is sufficient, but if we want to have a specific example, we can find one.  Let Then and Thus, .   "
},
{
  "id": "init-tij",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#init-tij",
  "type": "Exploration",
  "number": "4.5.1",
  "title": "",
  "body": " Suppose we want to define a linear transformation by Is this information sufficient to define ? To answer this question we will try to determine what does to an arbitrary vector of . If is a vector in , then can be uniquely expressed as a linear combination of and  By linearity of we have This shows that the image of every vector of under is completely determined by the action of on the standard unit vectors and . Vectors and form a standard basis of . What if we want to use a different basis? Let be our basis of choice for . (How would you verify that is a basis of ?) And suppose we want to define a linear transformation by Is this enough information to define ? Because form a basis of , every element of can be written as a unique linear combination We can find as follows: Again, we see how a linear transformation is completely determined by its action on a basis. assures us that given a basis, every vector has a unique representation as a linear combination of the basis vectors. Imagine what would happen if this were not the case.  In the first part of this exploration, for instance, we might have been able to represent as and ( or ). This would have resulted in mapping to two different elements: and , implying that is not even a function.  "
},
{
  "id": "Subsection-Coordinate-Vectors-2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#Subsection-Coordinate-Vectors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate vector "
},
{
  "id": "ex-abstvectsplintranscoordvect1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-abstvectsplintranscoordvect1",
  "type": "Example",
  "number": "4.5.5",
  "title": "",
  "body": "  Consider . Let be an ordered basis for (You should do a quick mental check that is a legitimate basis). Define by . Find     We need to find the coordinate vector for with respect to . Firstly, This gives us:    "
},
{
  "id": "ex-abstvectsplintranspoly",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-abstvectsplintranspoly",
  "type": "Example",
  "number": "4.5.6",
  "title": "",
  "body": "  Recall that is the set of polynomials of degree or less than . In , we showed that is a vector space.   Let be an ordered basis for . (It is easy to verify that is a basis.) If is given by , find     Let be an ordered basis for - In (see ), you demonstrated that is a basis.) If is given by , find         We express as a linear combination of elements of . Therefore Note that it is important to keep the basis elements in the same order in which they are listed, as the order of components of the coordinate vector depends on the order of the basis elements. We conclude that For : Our goal is to express as a linear combination of the elements of . Thus, we need to find coefficients , and such that This gives us a system of linear equations: Solving the system yields , and . Thus    "
},
{
  "id": "th-coordvectmappinglinear",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#th-coordvectmappinglinear",
  "type": "Theorem",
  "number": "4.5.7",
  "title": "",
  "body": "  Let be an -dimensional vector space, and let be an ordered basis for . Then given by is a linear transformation.   "
},
{
  "id": "Subsection-Coordinate-Vectors-6",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#Subsection-Coordinate-Vectors-6",
  "type": "Proof",
  "number": "4.5.2.1",
  "title": "",
  "body": " First observe that of guarantees that there is only one way to represent each element of as a linear combination of elements of . Thus each element of maps to exactly one element of , as long as the order in which elements of appear is taken into account. This proves that is a function, or a transformation.  We will now prove that is linear. Let be an element of . We will first show that . Suppose , then can be written as a unique linear combination: We have: We leave it to the reader to verify that (see ).  "
},
{
  "id": "ex-subtosub1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-subtosub1",
  "type": "Example",
  "number": "4.5.8",
  "title": "",
  "body": "  Let  and Because each of and is linearly independent, let be ordered bases of and , respectively. Define a linear transformation by    Verify that is in and find the coordinate vector .    Find and the coordinate vector .       For , we need to express as a linear combination of and . This can be done by observation or by solving the equation We find that and , so . Thus is in . The coordinate vector for with respect to the ordered basis is For , by linearity of we have The coordinate vector for with respect to the ordered basis is    "
},
{
  "id": "ex-notonetoone",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-notonetoone",
  "type": "Example",
  "number": "4.5.9",
  "title": "",
  "body": "  Let be a linear transformation whose standard matrix is Does have an inverse? Show that multiple vectors of the domain map to in the codomain.    The matrix is not invertible, so does not have an inverse. We now dig a little deeper to get additional insights into why does not have an inverse. Observe that all vectors of the form map to . To verify this, use matrix multiplication: This shows that there are infinitely many vectors that map to . So, ``reversing the arrows\" would not result in a function. (See Figure 1)   "
},
{
  "id": "ex-notonto",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-notonto",
  "type": "Example",
  "number": "4.5.10",
  "title": "",
  "body": "  Let be a linear transformation whose standard matrix is Does have an inverse? Show that there exists a vector in such that no vector of maps to .    The matrix is not invertible (it's not even a square matrix!), so does not have an inverse. We now get another insight into why is not invertible. To find a vector such that no vector of maps to , we need to find for which the matrix equation has no solution.  Let . Gauss-Jordan elimination yields: Now, has a solution if and only if . Since we do not want to have a solution, all we need to do is pick values , and such that . Let . Then no element of maps to . This shows that we cannot ``reverse the arrows\" in an attempt to produce an inverse of . (See Figure 2)   "
},
{
  "id": "th-isomeansinvert",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#th-isomeansinvert",
  "type": "Theorem",
  "number": "4.5.11",
  "title": "",
  "body": "  Let and be vector spaces, and let be a linear transformation. Then has an inverse if and only if is one-to-one and onto.    We will first assume that is one-to-one and onto, and show that there exists a transformation such that and .  Because is onto, for every in , there exists in such that . Moreover, because is one-to-one, vector is the only vector that maps to . To stress this, we will say that for every , there exists such that . (Since every maps to exactly one , this notation makes sense for elements of as well.) We can now define by . Then We conclude that and . Therefore is an inverse of . We will now assume that has an inverse and show that must be one-to-one and onto. Suppose then but then We conclude that is one-to-one. Now suppose that is in . We need to show that some element of maps to . Let . Then We conclude that is onto.   "
},
{
  "id": "ex-subtosubinvert",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#ex-subtosubinvert",
  "type": "Example",
  "number": "4.5.12",
  "title": "",
  "body": "  Transformation in is invertible.    We demonstrated that is one-to-one and onto. By , has an inverse. Recall that was introduced to demonstrate that is not always directly applicable. We now have additional tools. assures us that has an inverse, but does not help us find it. We will visit this problem again in later sections and find an inverse of .   "
},
{
  "id": "Subsection-Existence-of-Inverses-5",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#Subsection-Existence-of-Inverses-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "an "
},
{
  "id": "th-inverseisunique",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#th-inverseisunique",
  "type": "Theorem",
  "number": "4.5.13",
  "title": "",
  "body": "  If is a linear transformation, and is an inverse of . Then is unique.    Let be a linear transformation. If is an inverse of , then satisfies Suppose there is another transformation, , such that We now show that .    "
},
{
  "id": "prob-lintransP2toM22",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-lintransP2toM22",
  "type": "Exercise",
  "number": "4.5.5.1",
  "title": "",
  "body": "  Suppose is a linear transformation such that Find .        "
},
{
  "id": "prob-tracelintrans1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-tracelintrans1",
  "type": "Exercise",
  "number": "4.5.5.2",
  "title": "",
  "body": "  Define by . (Recall that denotes the trace of , which is the sum of the main diagonal entries of .) Find         "
},
{
  "id": "prob-tracelintrans2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-tracelintrans2",
  "type": "Exercise",
  "number": "4.5.5.3",
  "title": "",
  "body": "  Is a linear transformation? If so, prove it. If not, give a counterexample.   "
},
{
  "id": "prob-lintransr2toM22part1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-lintransr2toM22part1",
  "type": "Exercise",
  "number": "4.5.5.4",
  "title": "",
  "body": "  Define by Find         "
},
{
  "id": "prob-lintransr2toM22part2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-lintransr2toM22part2",
  "type": "Exercise",
  "number": "4.5.5.5",
  "title": "",
  "body": "  Is a linear transformation? If so, prove it. If not, give a counterexample.   "
},
{
  "id": "prob-detlintrans1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-detlintrans1",
  "type": "Exercise",
  "number": "4.5.5.6",
  "title": "",
  "body": "  This problem requires the knowledge of how to compute a determinant (for a quick reminder, chapter ). Define by . Find         "
},
{
  "id": "prob-detlintrans2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-detlintrans2",
  "type": "Exercise",
  "number": "4.5.5.7",
  "title": "",
  "body": "  Is a linear transformation? If so, prove it. If not, give a counterexample.   "
},
{
  "id": "prob-lintransderivative1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-lintransderivative1",
  "type": "Exercise",
  "number": "4.5.5.8",
  "title": "",
  "body": "  Define by (in other words, maps a polynomial to its derivative). Find         "
},
{
  "id": "prob-lintransderivative2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-lintransderivative2",
  "type": "Exercise",
  "number": "4.5.5.9",
  "title": "",
  "body": "  Is a linear transformation? If so, prove it. If not, give a counterexample.   "
},
{
  "id": "prob-symmMatLinTrans",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-symmMatLinTrans",
  "type": "Exercise",
  "number": "4.5.5.10",
  "title": "",
  "body": "  Recall that the set of all symmetric matrices is a subspace of . In , we demonstrated that is a basis for . Define by . Find          "
},
{
  "id": "prob-coordvector",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-coordvector",
  "type": "Exercise",
  "number": "4.5.5.11",
  "title": "",
  "body": "  Let be a subspace of with a basis . Find the coordinate vector, , for .        "
},
{
  "id": "prob-switchbasisorder",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-switchbasisorder",
  "type": "Exercise",
  "number": "4.5.5.12",
  "title": "",
  "body": "  If the order of the basis elements in was switched to form a new basis How would this affect the coordinate vector?        "
},
{
  "id": "prob-polylintranscoordvect",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-polylintranscoordvect",
  "type": "Exercise",
  "number": "4.5.5.13",
  "title": "",
  "body": "  In , you demonstrated that is a basis for . Define by . Find           "
},
{
  "id": "prob-lintransandbasis4",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-lintransandbasis4",
  "type": "Exercise",
  "number": "4.5.5.14",
  "title": "",
  "body": "  Let and be vector spaces, and let and be ordered bases of and , respectively. Suppose is a linear transformation such that:    If , express as a linear combination of vectors of . Now, Find and .        "
},
{
  "id": "prob-completeproofoflin",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-completeproofoflin",
  "type": "Exercise",
  "number": "4.5.5.15",
  "title": "",
  "body": "  Complete the proof of .   "
},
{
  "id": "prob-inverses1",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-inverses1",
  "type": "Exercise",
  "number": "4.5.5.16",
  "title": "",
  "body": "  Define a transformation by Show that is a linear transformation that has an inverse.    You will need to demonstrate that is one-to-one and onto.   "
},
{
  "id": "prob-inverses2",
  "level": "2",
  "url": "Section-Linear-Transformations-of-Abstract-Vector-Spaces.html#prob-inverses2",
  "type": "Exercise",
  "number": "4.5.5.17",
  "title": "",
  "body": "  Let Define a linear transformation by Prove that has an inverse.   "
},
{
  "id": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces",
  "level": "1",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html",
  "type": "Section",
  "number": "4.6",
  "title": "Bases and Dimension of Abstract Vector Spaces",
  "body": " Bases and Dimension of Abstract Vector Spaces   Linear Independence  When working with and subspaces of we developed several fundamental ideas including span , linear independence , bases and dimension . We will find that these concepts generalize easily to abstract vector spaces and that analogous results hold in these new settings.   Linear Independence   Let be a vector space. Let be vectors of . We say that the set is linearly independent if the only solution to is the trivial solution  .  If, in addition to the trivial solution, a non-trivial solution (not all are zero) exists, then we say that the set is linearly dependent .    Let us examine this abstract version of bases in the context of polynomials, to get a feeling for these concepts.    Show that is linearly independent in .    Consider the linear combination equation The constant term, as well as the coefficients in front of and , must be equal to . This gives us the following system of equations. The only solution is . We conclude that is linearly independent in .      Bases and Dimension  Recall that our motivation for defining a basis of a subspace of was to have a collection of vectors such that every vector of the subspace can be expressed as a unique linear combination of the vectors in that collection. Definition of a basis ( ) generalizes to abstract vector spaces as follows.    Let be a vector space. A set of vectors of is called a basis of provided that         is linearly independent.         Let be a vector space, and let be a basis for . Then every element of has a unique representation as linear combination of the elements of .    By the definition of a basis, we know that can be written as a linear combination of . Suppose there are two such representations. Then,  But then we have: Because are linearly independent, we have for . Consequently for .    In chapter , we defined the dimension of a subspace of to be the number of elements in a basis ( ). We will adopt this definition for abstract vector spaces. As before, to ensure that dimension is well-defined we need to establish that this definition is independent of our choice of a basis. The proof of the following theorem is identical to the proof of its counterpart in ( ).    Let be a vector space. Suppose and be two bases of . Then .    Now we can state the definition of dimensions for abstract vector spaces.    Let be a subspace of a vector space . The dimension of is the number, , of elements in any basis of . We write     In our discussions up to this point, we have always assumed that a basis is nonempty and hence that the dimension of the space is at least . However, the zero space has no basis. To accommodate for this, we will say that the zero vector space is defined to have dimension : Our insistence that amounts to saying that the empty set of vectors is a basis of . Thus the statement that ``the dimension of a vector space is the number of vectors in any basis'' holds even for the zero space.    Recall that the vector space consists of all matrices (see . Find a basis and the dimension of .    Let consist of matrices with exactly one entry equal to and all other entries equal to . It is clear that every matrix can be written as a linear combination of elements of . It is also easy to see that the elements of are linearly independent. Thus is a basis for . The set contains elements, so .      Recall that is the set of all polynomials of degree or less (see . Show that and that is a basis of .    Each polynomial is clearly a linear combination of , so . Suppose , then . So is linearly independent and is therefore a basis containing vectors. Thus, .      Consider the subset of . It was shown in of that is a subspace for any choice of the matrix . Let Show that and find a basis of .    Suppose is in . Then  This gives us two relationships: We can now express a generic element of as Let The set is linearly independent (see ) Every element of can be written as a linear combination of elements of . Thus . Therefore is a basis of , and .      In of you demonstrated that the set of all symmetric matrices is a subspace of . Let be a subspace of consisting of all symmetric matrices. Find the dimension of .    A matrix is symmetric if . In other words, a matrix is symmetric when entries directly across the main diagonal are equal, so each symmetric matrix has the form Hence the set spans . The reader can verify that is linearly independent. Thus is a basis of , so .      Finite-Dimensional Vector Spaces  Our definition of dimension of a vector space depends on the vector space having a basis. In this section we will establish that any vector space spanned by finitely many vectors has a basis.    A vector space is said to be finite-dimensional if it is spanned by finitely many vectors.    Given a finite-dimensional vector space we will find a basis for by starting with a linearly independent subset of and expanding it to a basis. The following results are more general versions of and , and . The proofs are identical and we will omit them.    Let be a vector space spanned by vectors. If a linearly independent subset of contains vectors, then .      Let be a vector space. Let be a linearly independent subset of . If is not in , then is linearly independent.      Let be a finite-dimensional vector space. Any linearly independent subset of can be expanded to a basis of .      Coordinate Vectors  Recall that in the context of (and subspaces of ) the requirement that elements of a basis be linearly independent guarantees that every element of the vector space has a unique representation in terms of the elements of the basis. (See Theorem of Introduction to Bases ) We proved the same property for abstract vector spaces in Theorem .  Uniqueness of representation in terms of the elements of a basis allows us to associate every element of a vector space with a unique coordinate vector with respect to a given basis. Coordinate vectors were first introduced in Introduction to Bases . We now give a formal definition.    Let be a vector space, and let be a basis for . If , then the vector in whose components are the coefficients is said to be the coordinate vector for with respect to . We denote the coordinate vector by and write:       The order of in which vectors appear in of is important. Switching the order of these vectors would switch the order of the coordinate vector components. For this reason, we will often use the term ordered basis to describe in the context of coordinate vectors.    Coordinate vectors may seem abstract as described above. In examples, however, one can nearly always pinpoint exactly what the coordinates are. Some examples will emphaize this:   The coordinate vector for in with respect to the ordered basis is Now let's change the order of the elements in . The coordinate vector for with respect to the ordered basis is      Show that the set is a basis for . Keep the order of elements in and find the coordinate vector for with respect to the ordered basis .    We will begin by showing that the elements of are linearly independent. Suppose Then This gives us the following system of equations: The solution is unique. We conclude that is linearly independent.  Next, we need to show that spans . To this end, we will consider a generic element of and attempt to express it as a linear combination of the elements of . then Setting the coefficients of like terms equal to each other gives us Solving this linear system of , and gives us (You should verify this.) This shows that every element of can be written as a linear combination of elements of . Therefore is a basis for . To find the coordinate vector for with respect to we need to express as a linear combination of the elements of . Fortunately, we have already done all the necessary work. For , , and . This gives us the coefficients of the linear combination: , , . We now write as a linear combination The coordinate vector for with respect to is       Recall that the set of all symmetric matrices is a subspace of . In , we demonstrated that is a basis for . Let . Observe that is an element of .   Find the coordinate vector with respect to the ordered basis for .    Let be another ordered basis for . Find the coordinate vector for with respect to .       We write as a linear combination of the elements of . Thus, the coordinate vector with respect to is The coordinate vector with respect to is     Coordinate vectors will play a vital role in establishing one of the most fundamental results in linear algebra, that all -dimensional vector spaces have the same structure as . In , for instance, we will show that is essentially the same as .      Prove that set of is linearly independent.      Show that each of the following sets of vectors is linearly independent.                           Show that each set in - is a basis for its respective vector space.      Find the coordinate vector for with respect to the given ordered basis of .                              Find the coordinate vector for with respect to the ordered basis            Let be a vector space of dimension . Suppose is linearly independent in . Show that is a basis for .     "
},
{
  "id": "Subsection-Linear-Independence-2",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#Subsection-Linear-Independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span linear independence bases dimension "
},
{
  "id": "def-linearindependenceabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#def-linearindependenceabstract",
  "type": "Definition",
  "number": "4.6.1",
  "title": "Linear Independence.",
  "body": " Linear Independence   Let be a vector space. Let be vectors of . We say that the set is linearly independent if the only solution to is the trivial solution  .  If, in addition to the trivial solution, a non-trivial solution (not all are zero) exists, then we say that the set is linearly dependent .   "
},
{
  "id": "ex-polyindset",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-polyindset",
  "type": "Example",
  "number": "4.6.2",
  "title": "",
  "body": "  Show that is linearly independent in .    Consider the linear combination equation The constant term, as well as the coefficients in front of and , must be equal to . This gives us the following system of equations. The only solution is . We conclude that is linearly independent in .   "
},
{
  "id": "def-basisabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#def-basisabstract",
  "type": "Definition",
  "number": "4.6.3",
  "title": "",
  "body": "  Let be a vector space. A set of vectors of is called a basis of provided that         is linearly independent.      "
},
{
  "id": "th-uniquerep",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#th-uniquerep",
  "type": "Theorem",
  "number": "4.6.4",
  "title": "",
  "body": "  Let be a vector space, and let be a basis for . Then every element of has a unique representation as linear combination of the elements of .    By the definition of a basis, we know that can be written as a linear combination of . Suppose there are two such representations. Then,  But then we have: Because are linearly independent, we have for . Consequently for .   "
},
{
  "id": "Subsection-Bases-and-Dimension-5",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#Subsection-Bases-and-Dimension-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension "
},
{
  "id": "th-dimwelldefinedabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#th-dimwelldefinedabstract",
  "type": "Theorem",
  "number": "4.6.5",
  "title": "",
  "body": "  Let be a vector space. Suppose and be two bases of . Then .   "
},
{
  "id": "def-dimensionabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#def-dimensionabstract",
  "type": "Definition",
  "number": "4.6.6",
  "title": "",
  "body": "  Let be a subspace of a vector space . The dimension of is the number, , of elements in any basis of . We write    "
},
{
  "id": "ex-dimofM",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-dimofM",
  "type": "Example",
  "number": "4.6.7",
  "title": "",
  "body": "  Recall that the vector space consists of all matrices (see . Find a basis and the dimension of .    Let consist of matrices with exactly one entry equal to and all other entries equal to . It is clear that every matrix can be written as a linear combination of elements of . It is also easy to see that the elements of are linearly independent. Thus is a basis for . The set contains elements, so .   "
},
{
  "id": "ex-dimofP",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-dimofP",
  "type": "Example",
  "number": "4.6.8",
  "title": "",
  "body": "  Recall that is the set of all polynomials of degree or less (see . Show that and that is a basis of .    Each polynomial is clearly a linear combination of , so . Suppose , then . So is linearly independent and is therefore a basis containing vectors. Thus, .   "
},
{
  "id": "ex-CAbasis",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-CAbasis",
  "type": "Example",
  "number": "4.6.9",
  "title": "",
  "body": "  Consider the subset of . It was shown in of that is a subspace for any choice of the matrix . Let Show that and find a basis of .    Suppose is in . Then  This gives us two relationships: We can now express a generic element of as Let The set is linearly independent (see ) Every element of can be written as a linear combination of elements of . Thus . Therefore is a basis of , and .   "
},
{
  "id": "ex-symmetricmatsubspace",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-symmetricmatsubspace",
  "type": "Example",
  "number": "4.6.10",
  "title": "",
  "body": "  In of you demonstrated that the set of all symmetric matrices is a subspace of . Let be a subspace of consisting of all symmetric matrices. Find the dimension of .    A matrix is symmetric if . In other words, a matrix is symmetric when entries directly across the main diagonal are equal, so each symmetric matrix has the form Hence the set spans . The reader can verify that is linearly independent. Thus is a basis of , so .   "
},
{
  "id": "def-findimvectorspace",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#def-findimvectorspace",
  "type": "Definition",
  "number": "4.6.11",
  "title": "",
  "body": "  A vector space is said to be finite-dimensional if it is spanned by finitely many vectors.   "
},
{
  "id": "lemma-atmostnlinindinabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#lemma-atmostnlinindinabstract",
  "type": "Lemma",
  "number": "4.6.12",
  "title": "",
  "body": "  Let be a vector space spanned by vectors. If a linearly independent subset of contains vectors, then .   "
},
{
  "id": "lemma-expandinglinindsetabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#lemma-expandinglinindsetabstract",
  "type": "Lemma",
  "number": "4.6.13",
  "title": "",
  "body": "  Let be a vector space. Let be a linearly independent subset of . If is not in , then is linearly independent.   "
},
{
  "id": "th-expandtobasisabstract",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#th-expandtobasisabstract",
  "type": "Theorem",
  "number": "4.6.14",
  "title": "",
  "body": "  Let be a finite-dimensional vector space. Any linearly independent subset of can be expanded to a basis of .   "
},
{
  "id": "Subsection-Coordinate-Vectors-3",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#Subsection-Coordinate-Vectors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate vector "
},
{
  "id": "def-coordvector",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#def-coordvector",
  "type": "Definition",
  "number": "4.6.15",
  "title": "",
  "body": "  Let be a vector space, and let be a basis for . If , then the vector in whose components are the coefficients is said to be the coordinate vector for with respect to . We denote the coordinate vector by and write:    "
},
{
  "id": "coordVectorOrder",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#coordVectorOrder",
  "type": "Remark",
  "number": "4.6.16",
  "title": "",
  "body": "  The order of in which vectors appear in of is important. Switching the order of these vectors would switch the order of the coordinate vector components. For this reason, we will often use the term ordered basis to describe in the context of coordinate vectors.   "
},
{
  "id": "ex-coordvectorinpolyvectspace",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-coordvectorinpolyvectspace",
  "type": "Example",
  "number": "4.6.17",
  "title": "",
  "body": " The coordinate vector for in with respect to the ordered basis is Now let's change the order of the elements in . The coordinate vector for with respect to the ordered basis is   "
},
{
  "id": "ex-coordvectorinpolyvectspace2",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-coordvectorinpolyvectspace2",
  "type": "Example",
  "number": "4.6.18",
  "title": "",
  "body": "  Show that the set is a basis for . Keep the order of elements in and find the coordinate vector for with respect to the ordered basis .    We will begin by showing that the elements of are linearly independent. Suppose Then This gives us the following system of equations: The solution is unique. We conclude that is linearly independent.  Next, we need to show that spans . To this end, we will consider a generic element of and attempt to express it as a linear combination of the elements of . then Setting the coefficients of like terms equal to each other gives us Solving this linear system of , and gives us (You should verify this.) This shows that every element of can be written as a linear combination of elements of . Therefore is a basis for . To find the coordinate vector for with respect to we need to express as a linear combination of the elements of . Fortunately, we have already done all the necessary work. For , , and . This gives us the coefficients of the linear combination: , , . We now write as a linear combination The coordinate vector for with respect to is    "
},
{
  "id": "ex-symmmatsubspace",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#ex-symmmatsubspace",
  "type": "Example",
  "number": "4.6.19",
  "title": "",
  "body": "  Recall that the set of all symmetric matrices is a subspace of . In , we demonstrated that is a basis for . Let . Observe that is an element of .   Find the coordinate vector with respect to the ordered basis for .    Let be another ordered basis for . Find the coordinate vector for with respect to .       We write as a linear combination of the elements of . Thus, the coordinate vector with respect to is The coordinate vector with respect to is    "
},
{
  "id": "prob-CABlinind",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-CABlinind",
  "type": "Exercise",
  "number": "4.6.5.1",
  "title": "",
  "body": "  Prove that set of is linearly independent.   "
},
{
  "id": "prob-linindabstractvsp1",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-linindabstractvsp1",
  "type": "Exercise",
  "number": "4.6.5.2",
  "title": "",
  "body": "      "
},
{
  "id": "prob-linindabstractvsp2",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-linindabstractvsp2",
  "type": "Exercise",
  "number": "4.6.5.3",
  "title": "",
  "body": "      "
},
{
  "id": "prob-linindabstractvsp3",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-linindabstractvsp3",
  "type": "Exercise",
  "number": "4.6.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "prob-linindabstractvsp123",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-linindabstractvsp123",
  "type": "Exercise",
  "number": "4.6.5.5",
  "title": "",
  "body": "  Show that each set in - is a basis for its respective vector space.   "
},
{
  "id": "prob-coordvectors1",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-coordvectors1",
  "type": "Exercise",
  "number": "4.6.5.6",
  "title": "",
  "body": "           "
},
{
  "id": "prob-coordvectors2",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-coordvectors2",
  "type": "Exercise",
  "number": "4.6.5.7",
  "title": "",
  "body": "           "
},
{
  "id": "prob-coordvectors3",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-coordvectors3",
  "type": "Exercise",
  "number": "4.6.5.8",
  "title": "",
  "body": "  Find the coordinate vector for with respect to the ordered basis         "
},
{
  "id": "prob-basisforabstractvectspace",
  "level": "2",
  "url": "Section-Bases-and-Dimension-of-Abstract-Vector-Spaces.html#prob-basisforabstractvectspace",
  "type": "Exercise",
  "number": "4.6.5.9",
  "title": "",
  "body": "  Let be a vector space of dimension . Suppose is linearly independent in . Show that is a basis for .   "
},
{
  "id": "Section-Isomorphic-Vector-Spaces",
  "level": "1",
  "url": "Section-Isomorphic-Vector-Spaces.html",
  "type": "Section",
  "number": "4.7",
  "title": "Extra Topic: Isomorphic Vector Spaces",
  "body": " Extra Topic: Isomorphic Vector Spaces  A vector space is defined as a collection of objects together with operations of addition and scalar multiplication that follow certain rules . In our study of abstract vector spaces, we have encountered spaces that appeared very different from each other. Just how different are they? Does , a vector space whose elements have the form , have anything in common with ? Is fundamentally different from ?  To answer these questions, we will have to look beyond the superficial appearance of the elements of a vector space and delve into its structure. The ``structure\" of a vector space is determined by how the elements of the vector space interact with each other through the operations of addition and scalar multiplication.  Let us return to the question of what has in common with . Consider two typical elements of : We can add these elements together or multiply each one by a scalar But suppose we get tired of having to write down every time. Could we leave off the and represent by ? If we do this, expressions , and would be mimicked by the following expressions involving vectors of :   It appears that we should be able to switch back and forth between and , translating questions and answers from one space to the other and back again.   Picture of isomorphism    We begin to suspect that and have the same ``structure\". Spaces such as and are said to be isomorphic . This term is derived from the Greek ``iso,\" meaning ``same,\" and ``morphe,\" meaning ``form.\" The term captures the idea that isomorphic vector spaces have the same structure. Before we present a precise definition of the term, we need to better understand what we mean by ``switching back and forth\" between spaces. The following Exploration will help us formulate this vague notion in terms of transformations.   Recall that the set of all polynomials of degree or less, together with polynomial addition and scalar multiplication, is a vector space, denoted by . Let . You should do a quick mental check that is a basis of . Define a transformation by You may have recognized as the transformation that maps each element of to its coordinate vector with respect to the ordered basis . Transformation has several nice properties:   By , is linear.    It is easy to verify that is one-to-one and onto (see .)    By , has an inverse.   Our goal is to investigate and illustrate what these properties mean for transformation , and for the relationship between and . First, observe that being one-to-one and onto establishes ``pairings\" between elements of and in such a way that every element of one vector space is uniquely matched with exactly one element of the other vector space, as shown in the diagram below.   The above isomorphism elaborated    Second, the fact that (and ) are linear will allow us to translate questions related to linear combinations in one of the vector spaces to equivalent questions in the other vector space, then translate answers back to the original vector space. To make this statement concrete, consider the following problem:  Let Find . The answer is, of course Easy. But suppose for a moment that we did not know how to add polynomials, or that we found the process extremely difficult, or maybe instead of we had another vector space that we did not want to deal with. It turns out that we can use and to answer the addition question. We will start by applying to and separately: Next, we add the images of and in : This maneuver allows us to avoid the addition question in and answer the question in instead. We use to translate the answer back to : All of this relies on linearity. Here is a formal justification for the process. Try to spot where linearity is used.     Which transition in the above calculation requires linearity?      From to .      From to .      From to .      From to .       Invertible linear transformations, such as transformation of , are useful because they preserve the structure of interactions between elements as we move back and forth between two vector spaces, allowing us to answer questions about one vector space in a different vector space. In particular, any question related to linear combinations can be addressed in this fashion. This includes questions concerning linear independence, span, basis and dimension.    Let and be vector spaces. If there exists an invertible linear transformation we say that and are isomorphic and write .  The invertible linear transformation is called an isomorphism .    It is worth pointing out that if is an isomorphism, then , being linear and invertible, is also an isomorphism.  While all this has been fairly abstract, previous examples do have this content attached to them.   Our earlier discussion suggests that . We postpone the proof until .     shows that .     Show that and are isomorphic.    We will start by finding a plausible candidate for an isomorphism. Define by We will first show that is a linear transformation, then verify that is invertible. and We can show that is one-to-one and onto, and therefore has an inverse. We can also observe directly that is given by We conclude that is an isomorphism, and .    Isomorphism in establishes the fact that . However, there is nothing special about , as there are many other isomorphisms from to . Just for fun, try to verify that each of the following is an isomorphism.     The Coordinate Vector Isomorphism  In we made good use of a transformation that maps every element of to its coordinate vector in . We observed that this transformation is linear and invertible, therefore it is an isomorphism. The following example generalizes this result.    Let be an -dimensional vector space, and let be an ordered basis for . Then given by is an isomorphism.    We leave the proof of this result to the reader (see ).      Properties of Isomorphic Vector Spaces and Isomorphisms  In this section we will illustrate properties of isomorphisms with specific examples. Formal proofs of properties will be presented in the next section.   In we defined a transformation by We later observed that is an isomorphism. We will now examine the effect of on two different bases of . Let (Recall that is a basis of by ). First, Clearly, the images of the elements of form a basis of . Now we consider . It is easy to verify that are linearly independent and span . Therefore the images of the elements of from a basis of .   We can try any number of bases of and we will find that the image of each basis of is a basis of . In general, we have the following result:    An isomorphism maps a basis of the domain to a basis of the codomain. (We will state this result more formally as Theorem in the next section.)    Isomorphisms preserve bases, but more generally, they preserve linear independence.    If is an isomorphism, then the subset of is linearly independent if and only if is linearly independent in . We will state and prove this result as .    The example below flags up the idea that there is little differences between the abstract case and the concrete one in .    Let be a vector space, and let be an ordered basis of . Let Are linearly independent?    We could approach this question head-on by considering the vector equation to see if the only solution is the trivial one (see ). Instead, we will use isomorphisms.  Observe that we do not know anything about aside from the fact that it has four basis vectors. Vectors , , are given in terms of these basis vectors. This should give us an idea for constructing an isomorphism between and . Consider such that . Then  By , is an isomorphism. This means that , , are linearly independent if and only if their coordinate vectors are linearly independent. There are multiple ways of determining whether are linearly independent. One way is to find the reduced row echelon form of The matrix reduces as follows: We see that the rank of the matrix is . We conclude that the column vectors are not linearly independent. Thus, the vectors , and are not linearly independent.      Proofs of Isomorphism Properties  Recall that a transformation is one-to-one provided that implies that We will show that images of linearly independent vectors under one-to-one linear transformations are linearly independent.    Let be a one-to-one linear transformation. Suppose is linearly independent in . Then is linearly independent in .    Suppose satisfy We will show that for each , we must have . By linearity, we have: By , . Therefore, Because is one-to-one, we conclude that By assumption, is linearly independent. Therefore for .    Recall that a transformation is onto provided that every vector of the codomain of is the image of some vector in the domain of . We will show that an onto linear transformation maps sets that span the domain to sets that span the codomain.    Let be an onto linear transformation. Suppose . Then .    Suppose is an element of . To show that spans , we will express as a linear combination of .  Because is onto, for some in . But . Therefore, for some scalar coefficients . By linearity, we have: Thus, is in the span of .    We will now combine the results of and to obtain a result about the effect of isomorphisms on a basis.    Let be an isomorphism. Suppose is a basis for . Then is a basis for .     Left to the reader. See .     Suppose is an isomorphism, then the subset ' of is linearly independent if and only if is linearly independent in .    We have already proved one direction of this this ``if and only if\" statement as .  To prove the other direction, suppose that are linearly independent vectors in . We need to show that this implies that are linearly independent in . Observe that if is an isomorphism, then is also an isomorphism. Thus, by , are linearly independent. But this means that are linearly independent.      Let , and be vector spaces. Suppose and are isomorphisms. Then is an isomorphism.     The proof is left to the reader (see ).     Finite-dimensional Vector Spaces    Let and be finite-dimensional vector spaces. Then     First, assume that . Then there exists an isomorphism . Suppose and let be a basis for . By , is a basis for . Therefore .  Conversely, suppose , and let be bases for and , respectively. Define a linear transformation by for . To show that is an isomorphism, we need to prove that is one-to-one and onto. Suppose for some vectors , in . We know that  for some scalars 's and 's. Thus, By linearity of ,  But are linearly independent, so for all . Therefore for all . We conclude that . We now show that is onto. Suppose that is an element of . Then for some scalars 's. But then We conclude that is an image of an element of , so is onto.    From this theorem follows an important corollary that shows why we spent so much time trying to understand in this course.    Every -dimensional vector space is isomorphic to .    The corollary in examples makes it less surprising:   The span of any two linearly independent vectors in is isomorphic to .   Plane isomorphic to a subspace of R3 drawn     Drawing above continued            Recall that . Since , we conclude that is not isomorphic to .        Prove that transformation of is one-to-one and onto.      Verify that given by of is an isomorphism.      Do without using isomorphisms.      Let Is linearly independent in ?    Yes!      Let Is a basis for ?    No!      Prove .      Let be a vector space, and suppose is a basis for . What can we conclude about ? Check ALL that apply.      We cannot conclude anything about because we do not know what is.       .       .       .       .       -        Which of the followng statements are true? Check ALL that apply.       .       .       .       .       .        Verify that of is an isomorphism.    You may find the proof of T helpful.      Prove that the composition of two isomorphisms is an isomorphism (see also ).      Prove that a linear transformation is one-to-one if and only if .     "
},
{
  "id": "Section-Isomorphic-Vector-Spaces-6",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Section-Isomorphic-Vector-Spaces-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isomorphic "
},
{
  "id": "init-isomorph",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#init-isomorph",
  "type": "Exploration",
  "number": "4.7.1",
  "title": "",
  "body": " Recall that the set of all polynomials of degree or less, together with polynomial addition and scalar multiplication, is a vector space, denoted by . Let . You should do a quick mental check that is a basis of . Define a transformation by You may have recognized as the transformation that maps each element of to its coordinate vector with respect to the ordered basis . Transformation has several nice properties:   By , is linear.    It is easy to verify that is one-to-one and onto (see .)    By , has an inverse.   Our goal is to investigate and illustrate what these properties mean for transformation , and for the relationship between and . First, observe that being one-to-one and onto establishes ``pairings\" between elements of and in such a way that every element of one vector space is uniquely matched with exactly one element of the other vector space, as shown in the diagram below.   The above isomorphism elaborated    Second, the fact that (and ) are linear will allow us to translate questions related to linear combinations in one of the vector spaces to equivalent questions in the other vector space, then translate answers back to the original vector space. To make this statement concrete, consider the following problem:  Let Find . The answer is, of course Easy. But suppose for a moment that we did not know how to add polynomials, or that we found the process extremely difficult, or maybe instead of we had another vector space that we did not want to deal with. It turns out that we can use and to answer the addition question. We will start by applying to and separately: Next, we add the images of and in : This maneuver allows us to avoid the addition question in and answer the question in instead. We use to translate the answer back to : All of this relies on linearity. Here is a formal justification for the process. Try to spot where linearity is used.     Which transition in the above calculation requires linearity?      From to .      From to .      From to .      From to .      "
},
{
  "id": "def-isomorphism",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#def-isomorphism",
  "type": "Definition",
  "number": "4.7.2",
  "title": "",
  "body": "  Let and be vector spaces. If there exists an invertible linear transformation we say that and are isomorphic and write .  The invertible linear transformation is called an isomorphism .   "
},
{
  "id": "ex-lisor2",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-lisor2",
  "type": "Example",
  "number": "4.7.3",
  "title": "",
  "body": " Our earlier discussion suggests that . We postpone the proof until .  "
},
{
  "id": "ex-p2isor3",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-p2isor3",
  "type": "Example",
  "number": "4.7.4",
  "title": "",
  "body": "  shows that .  "
},
{
  "id": "ex-isomorphexample1",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-isomorphexample1",
  "type": "Example",
  "number": "4.7.5",
  "title": "",
  "body": "  Show that and are isomorphic.    We will start by finding a plausible candidate for an isomorphism. Define by We will first show that is a linear transformation, then verify that is invertible. and We can show that is one-to-one and onto, and therefore has an inverse. We can also observe directly that is given by We conclude that is an isomorphism, and .   "
},
{
  "id": "ex-coordmapiso",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-coordmapiso",
  "type": "Theorem",
  "number": "4.7.6",
  "title": "",
  "body": "  Let be an -dimensional vector space, and let be an ordered basis for . Then given by is an isomorphism.    We leave the proof of this result to the reader (see ).   "
},
{
  "id": "init-basestobasesiso",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#init-basestobasesiso",
  "type": "Exploration",
  "number": "4.7.2",
  "title": "",
  "body": " In we defined a transformation by We later observed that is an isomorphism. We will now examine the effect of on two different bases of . Let (Recall that is a basis of by ). First, Clearly, the images of the elements of form a basis of . Now we consider . It is easy to verify that are linearly independent and span . Therefore the images of the elements of from a basis of .  "
},
{
  "id": "Subsection-Properties-of-Isomorphic-Vector-Spaces-and-Isomorphisms-5",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Subsection-Properties-of-Isomorphic-Vector-Spaces-and-Isomorphisms-5",
  "type": "Fact",
  "number": "4.7.7",
  "title": "",
  "body": "  An isomorphism maps a basis of the domain to a basis of the codomain. (We will state this result more formally as Theorem in the next section.)   "
},
{
  "id": "Subsection-Properties-of-Isomorphic-Vector-Spaces-and-Isomorphisms-7",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Subsection-Properties-of-Isomorphic-Vector-Spaces-and-Isomorphisms-7",
  "type": "Fact",
  "number": "4.7.8",
  "title": "",
  "body": "  If is an isomorphism, then the subset of is linearly independent if and only if is linearly independent in . We will state and prove this result as .   "
},
{
  "id": "ex-inverseimageoflinind",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-inverseimageoflinind",
  "type": "Example",
  "number": "4.7.9",
  "title": "",
  "body": "  Let be a vector space, and let be an ordered basis of . Let Are linearly independent?    We could approach this question head-on by considering the vector equation to see if the only solution is the trivial one (see ). Instead, we will use isomorphisms.  Observe that we do not know anything about aside from the fact that it has four basis vectors. Vectors , , are given in terms of these basis vectors. This should give us an idea for constructing an isomorphism between and . Consider such that . Then  By , is an isomorphism. This means that , , are linearly independent if and only if their coordinate vectors are linearly independent. There are multiple ways of determining whether are linearly independent. One way is to find the reduced row echelon form of The matrix reduces as follows: We see that the rank of the matrix is . We conclude that the column vectors are not linearly independent. Thus, the vectors , and are not linearly independent.   "
},
{
  "id": "Subsection-Proofs-of-Isomorphism-Properties-2",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Subsection-Proofs-of-Isomorphism-Properties-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-to-one "
},
{
  "id": "th-onetoonelinind",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#th-onetoonelinind",
  "type": "Theorem",
  "number": "4.7.10",
  "title": "",
  "body": "  Let be a one-to-one linear transformation. Suppose is linearly independent in . Then is linearly independent in .    Suppose satisfy We will show that for each , we must have . By linearity, we have: By , . Therefore, Because is one-to-one, we conclude that By assumption, is linearly independent. Therefore for .   "
},
{
  "id": "Subsection-Proofs-of-Isomorphism-Properties-4",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Subsection-Proofs-of-Isomorphism-Properties-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "onto "
},
{
  "id": "th-ontospan",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#th-ontospan",
  "type": "Theorem",
  "number": "4.7.11",
  "title": "",
  "body": "  Let be an onto linear transformation. Suppose . Then .    Suppose is an element of . To show that spans , we will express as a linear combination of .  Because is onto, for some in . But . Therefore, for some scalar coefficients . By linearity, we have: Thus, is in the span of .   "
},
{
  "id": "th-bijectionsbasis",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#th-bijectionsbasis",
  "type": "Theorem",
  "number": "4.7.12",
  "title": "",
  "body": "  Let be an isomorphism. Suppose is a basis for . Then is a basis for .   "
},
{
  "id": "Subsection-Proofs-of-Isomorphism-Properties-8",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Subsection-Proofs-of-Isomorphism-Properties-8",
  "type": "Proof",
  "number": "4.7.3.1",
  "title": "",
  "body": " Left to the reader. See .  "
},
{
  "id": "th-linindtolinindiso",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#th-linindtolinindiso",
  "type": "Theorem",
  "number": "4.7.13",
  "title": "",
  "body": "  Suppose is an isomorphism, then the subset ' of is linearly independent if and only if is linearly independent in .    We have already proved one direction of this this ``if and only if\" statement as .  To prove the other direction, suppose that are linearly independent vectors in . We need to show that this implies that are linearly independent in . Observe that if is an isomorphism, then is also an isomorphism. Thus, by , are linearly independent. But this means that are linearly independent.   "
},
{
  "id": "th-isocompisiso",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#th-isocompisiso",
  "type": "Theorem",
  "number": "4.7.14",
  "title": "",
  "body": "  Let , and be vector spaces. Suppose and are isomorphisms. Then is an isomorphism.   "
},
{
  "id": "Subsection-Proofs-of-Isomorphism-Properties-11",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#Subsection-Proofs-of-Isomorphism-Properties-11",
  "type": "Proof",
  "number": "4.7.3.2",
  "title": "",
  "body": " The proof is left to the reader (see ).  "
},
{
  "id": "th-ndimspacesisorn",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#th-ndimspacesisorn",
  "type": "Theorem",
  "number": "4.7.15",
  "title": "",
  "body": "  Let and be finite-dimensional vector spaces. Then     First, assume that . Then there exists an isomorphism . Suppose and let be a basis for . By , is a basis for . Therefore .  Conversely, suppose , and let be bases for and , respectively. Define a linear transformation by for . To show that is an isomorphism, we need to prove that is one-to-one and onto. Suppose for some vectors , in . We know that  for some scalars 's and 's. Thus, By linearity of ,  But are linearly independent, so for all . Therefore for all . We conclude that . We now show that is onto. Suppose that is an element of . Then for some scalars 's. But then We conclude that is an image of an element of , so is onto.   "
},
{
  "id": "cor-ndimisotorn",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#cor-ndimisotorn",
  "type": "Corollary",
  "number": "4.7.16",
  "title": "",
  "body": "  Every -dimensional vector space is isomorphic to .   "
},
{
  "id": "ex-planeisoplane",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-planeisoplane",
  "type": "Example",
  "number": "4.7.17",
  "title": "",
  "body": " The span of any two linearly independent vectors in is isomorphic to .   Plane isomorphic to a subspace of R3 drawn     Drawing above continued    "
},
{
  "id": "ex-p2isor3b",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#ex-p2isor3b",
  "type": "Example",
  "number": "4.7.18",
  "title": "",
  "body": "       Recall that . Since , we conclude that is not isomorphic to .   "
},
{
  "id": "prob-Tonetooneonto",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-Tonetooneonto",
  "type": "Exercise",
  "number": "4.7.5.1",
  "title": "",
  "body": "  Prove that transformation of is one-to-one and onto.   "
},
{
  "id": "prob-tauone",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-tauone",
  "type": "Exercise",
  "number": "4.7.5.2",
  "title": "",
  "body": "  Verify that given by of is an isomorphism.   "
},
{
  "id": "prob-noiso",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-noiso",
  "type": "Exercise",
  "number": "4.7.5.3",
  "title": "",
  "body": "  Do without using isomorphisms.   "
},
{
  "id": "prob-useisoshowlinind",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-useisoshowlinind",
  "type": "Exercise",
  "number": "4.7.5.4",
  "title": "",
  "body": "  Let Is linearly independent in ?    Yes!   "
},
{
  "id": "prob-basism22iso",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-basism22iso",
  "type": "Exercise",
  "number": "4.7.5.5",
  "title": "",
  "body": "  Let Is a basis for ?    No!   "
},
{
  "id": "prob-bijectionsbasisproof",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-bijectionsbasisproof",
  "type": "Exercise",
  "number": "4.7.5.6",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-chooseisospace",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-chooseisospace",
  "type": "Exercise",
  "number": "4.7.5.7",
  "title": "",
  "body": "  Let be a vector space, and suppose is a basis for . What can we conclude about ? Check ALL that apply.      We cannot conclude anything about because we do not know what is.       .       .       .       .       -     "
},
{
  "id": "prob-pickisospaces",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-pickisospaces",
  "type": "Exercise",
  "number": "4.7.5.8",
  "title": "",
  "body": "  Which of the followng statements are true? Check ALL that apply.       .       .       .       .       .     "
},
{
  "id": "prob-verifyisomorphism",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-verifyisomorphism",
  "type": "Exercise",
  "number": "4.7.5.9",
  "title": "",
  "body": "  Verify that of is an isomorphism.    You may find the proof of T helpful.   "
},
{
  "id": "prob-isocompisisoproof",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#prob-isocompisisoproof",
  "type": "Exercise",
  "number": "4.7.5.10",
  "title": "",
  "body": "  Prove that the composition of two isomorphisms is an isomorphism (see also ).   "
},
{
  "id": "kerneliszero",
  "level": "2",
  "url": "Section-Isomorphic-Vector-Spaces.html#kerneliszero",
  "type": "Exercise",
  "number": "4.7.5.11",
  "title": "",
  "body": "  Prove that a linear transformation is one-to-one if and only if .   "
},
{
  "id": "Section-Finding-the-Determinant",
  "level": "1",
  "url": "Section-Finding-the-Determinant.html",
  "type": "Section",
  "number": "5.1",
  "title": "Finding the Determinant",
  "body": " Finding the Determinant  In this section we will define a function that assigns to each square matrix a scalar output called the determinant of . We will denote the determinant of by . For a matrix with real number entries, the output of the determinant function will always be a real number.  One important property of the determinant is its connection to matrix inverses. We will find that a matrix is singular if and only if . For nonsingular matrices, we will establish a formula that gives the inverse of a matrix exclusively in terms of determinants. This property will be addressed in detail during the final sections of the chapter.    Cofactor Expansion Along the Top Row  To start from the beginning, let us define the determinant of a matrix.    Let . Define the determinant of by .    It is important to note that this definition is consistent with our goal of making a connection between determinants and invertibility. Observe that exists if and only if . Now we proceed to matrices. According to , the inverse of a nonsingular matrix is given by Observe that exists if and only if . We will call the number the determinant of .    Let . The determinant of is defined by     Note the distinction between the square bracket notation associated with the matrix and the vertical bar notation used to denote the determinant in expression .  For the sake of practice, here are two small examples using these formulas.       The easiest way to understand the definition of the determinant for a matrix is to start with an example.    Find if           We now formalize what we learned in .    Let The determinant of is given by     We will now reiterate several important features of this definition and introduce some vocabulary:   The coefficients , and are the entries of the first row of matrix . Coefficients in the formula follow an alternating sign pattern: , , . This pattern will persist in the determinant formulas for determinants of larger matrices.    When using , we compute determinants of three matrices: These matrices are called minor matrices. To form each minor matrix, cross out the row and column that the corresponding coefficient is in. For example, the minor matrix corresponding to coefficient is found by crossing out the row and column that is in.   Row column deletion drawn      The process for finding the determinant described in is referred to as a cofactor expansion along the top row .     A few more elaborate examples will be helpful for this newfound technique.    Find if          We are starting to observe a certain pattern in the process of computing the determinant. This pattern will persist for larger matrices. Let's take a look at a matrix.    Find if     As you watch the video below, pay particular attention to the same patterns as you saw in the case of matrices: the alternating sign pattern and the process of forming minor matrices.        Find if     We will use the entries in the top row as coefficients in front of determinants. As before, we will use the alternating sign pattern for the coefficients: Just like in the case of a matrix in , each of the smaller determinants is obtained by crossing out the row and the column where the coefficient is located.       Cofactor Expansion Along the First Column  We defined the determinant of a matrix in terms of cofactor expansion along the top row. We will now see what happens when we expand along the first column instead. We will refer to this process as cofactor expansion along the first column . Surprisingly, both expansions yield the same result.  To illustrate this, let us revisit and .   Let In we found that . Let's try to mimic what we did earlier, but instead of expanding along the first row, we will expand along the fist column.    Let's go through this process again for a larger matrix.   Let In we found that . We will now try to expand along the fist column. When computing determinants of the four matrices below, try different approaches. You might want to expand along the first row for some of them, and along the first column for others. Looking for where zeros are located will help you decide what to try.    In and we were careful not to claim at the outset that we were finding the determinant of the matrix by cofactor expansion along the first column; we merely observed that the resulting value was equal to the determinant. Therefore the determinant of a matrix can be defined in terms of cofactor expansion along the first row or column.    Cofactor Expansion Along Any Row or Column  We originally defined the determinant of a matrix via expansion along the top row of the matrix. We later observed that expansion along the first column produces the same result. It turns out that the value of the determinant can be computed by expanding along any row or column. This result is known as the Laplace Expansion Theorem .  When expanding along an arbitrary row or column, we will continue to follow the two patterns we observed earlier.   The alternating sign pattern for coefficients will follow the checkerboard pattern below.     Minor matrices will be formed by eliminating the row and column that the corresponding coefficient is in.   To illustrate this, let's take another look at matrix from .    Let Follow the rules described above to expand along the second row. Compare your result with the determinant you found in .    The second row has the advantage over other rows in that it contains a zero. This will simplify our calculations. Following the checkerboard sign pattern along the second row we get This answer is the same as the answer we got using expansion along the first row in .    It is clear that having zeros as entries in the matrix reduces the number of computations necessary to find the determinant. The following example demonstrates how to use zeros to our advantage.    Find if     The fourth column contains the most zeros, so we will expand along that column. The -entry is the only non-zero entry in the fourth column. Following the checkerboard pattern, we see that the sign in front of is a minus. Next we will expand the minor matrix along the top row. Try the next step on your own. We suggest that you expand the first matrix along the last column and expand the second matrix along the first column.       A Note on Equivalency  We initially introduced the determinant of a matrix via cofactor expansion along the top row. We later observed that cofactor expansion along any row or column produces the same result. We have to be careful, however, not to use a few examples as ``proof\" that all cofactor expansions are equivalent. Such claims need to be carefully supported with general proofs. Unfortunately, in this case, the proofs are tedious and conceptually unenlightening. An interested reader can find them in later sections.    Determinants of Some Special Matrices  We know that we can find the determinant of a matrix by cofactor expansion along the top row or the first column. This property gives rise to a useful result.    Let be a square matrix, then     See .    As we observed earlier, having zeros in a matrix makes it easier for us to compute its determinant. Recall that that a square matrix is upper-triangular if all of the entries below the main diagonal are zero. Similarly, a square matrix is called lower-triangular if all of the entries above the main diagonal are zero. Together, upper and lower triangular matrices are categorized as triangular matrices.    If is a triangular matrix, then is equal to the product of its diagonal entries.    We proceed by induction on , where is an matrix. It is easy to see that this result holds for . Suppose that the result holds for triangular matrices. We need to show that it holds for triangular matrices.  Suppose is a triangular matrix. Then, with the exception of , the entries in the first row (or column) of are guaranteed to be zeros. We will take advantage of these zeros and expand along the first row (or column) of . As we do so, we obtain a single product of and the determinant of a minor matrix obtained by crossing out the first row and column of . But this minor matrix is also a triangular matrix with diagonal etries . By induction hypothesis, its determinant is equal to the product of its diagonal entries, . Therefore This completes the proof.    As an immediate consequence of this theorem, we have the following result.    Let be the identity matrix, then     Matrices of the form , where , are square matrices and is the zero matrix, are said to be block triangular . The following theorem makes it easy to compute determinants of such matrices.    Consider block triangular matrices where and are square matrices. Then     Write and proceed by induction on , where is . If , then the result follows from cofactor expansion along the first column. In general, let denote the matrix obtained from by deleting row and column 1. Then the cofactor expansion along the first column is where are the entries in the first column of . Observe that where , denotes matrix with column 1 and row deleted, and denotes matrix with with row deleted. Since is a matrix, by the induction hypothesis, This gives us The lower triangular case is similar.    Here is a final example prior to giving exercises.    Find if              Find the determinant of each matrix.                                           Prove .      Let be a matrix obtained from of by switching the first and the second row of . Compute the determinant of . What do you observe?      Make a conjecture about what happens to the determinant of a matrix if two rows of a matrix are switched. Prove your conjecture for a matrix.      Let be a matrix obtained from of by multiplying the middle row by . Compute the determinant of . What do you observe?      Make a conjecture about what happens to the determinant of a matrix if one of the rows is multiplied by a constant. Prove your conjecture for a matrix.      Let be a matrix obtained from of by multiplying by . Compute the determinant of . What do you observe?      Make a conjecture about what happens to the determinant of a matrix if the matrix is multiplied by a constant. Prove your conjecture for a matrix.      Let be a matrix obtained from of by adding twice the third row to the first. Compute the determinant of . What do you observe?      Make a conjecture about what happens to the determinant of a matrix if a multiple of one row is added to another row. Prove your conjecture for a matrix.      Is it true that ?     "
},
{
  "id": "Section-Finding-the-Determinant-2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#Section-Finding-the-Determinant-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "determinant of "
},
{
  "id": "def-onebyonedet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#def-onebyonedet",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let . Define the determinant of by .   "
},
{
  "id": "def-twobytwodet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#def-twobytwodet",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "  Let . The determinant of is defined by    "
},
{
  "id": "ex-2x2det",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-2x2det",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "    "
},
{
  "id": "ex-threebythreedet1",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-threebythreedet1",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Find if          "
},
{
  "id": "def-threebythreedet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#def-threebythreedet",
  "type": "Definition",
  "number": "5.1.5",
  "title": "",
  "body": "  Let The determinant of is given by    "
},
{
  "id": "Subsection-Cofactor-Expansion-Along-the-Top-Row-13",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#Subsection-Cofactor-Expansion-Along-the-Top-Row-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minor cofactor expansion along the top row "
},
{
  "id": "ex-3x3det2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-3x3det2",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  Find if         "
},
{
  "id": "ex-4by4withVideo",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-4by4withVideo",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  Find if     As you watch the video below, pay particular attention to the same patterns as you saw in the case of matrices: the alternating sign pattern and the process of forming minor matrices.     "
},
{
  "id": "ex-expansiontoprow",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-expansiontoprow",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": "  Find if     We will use the entries in the top row as coefficients in front of determinants. As before, we will use the alternating sign pattern for the coefficients: Just like in the case of a matrix in , each of the smaller determinants is obtained by crossing out the row and the column where the coefficient is located.    "
},
{
  "id": "Subsection-Cofactor-Expansion-Along-the-First-Column-2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#Subsection-Cofactor-Expansion-Along-the-First-Column-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cofactor expansion along the first column "
},
{
  "id": "init-expansionfirstcol1",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#init-expansionfirstcol1",
  "type": "Example",
  "number": "5.1.9",
  "title": "",
  "body": " Let In we found that . Let's try to mimic what we did earlier, but instead of expanding along the first row, we will expand along the fist column.   "
},
{
  "id": "init-expansionfirstcol2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#init-expansionfirstcol2",
  "type": "Exploration",
  "number": "5.1.1",
  "title": "",
  "body": " Let In we found that . We will now try to expand along the fist column. When computing determinants of the four matrices below, try different approaches. You might want to expand along the first row for some of them, and along the first column for others. Looking for where zeros are located will help you decide what to try.   "
},
{
  "id": "Subsection-Cofactor-Expansion-Along-Any-Row-or-Column-2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#Subsection-Cofactor-Expansion-Along-Any-Row-or-Column-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplace Expansion Theorem "
},
{
  "id": "ex-laplace1",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-laplace1",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": "  Let Follow the rules described above to expand along the second row. Compare your result with the determinant you found in .    The second row has the advantage over other rows in that it contains a zero. This will simplify our calculations. Following the checkerboard sign pattern along the second row we get This answer is the same as the answer we got using expansion along the first row in .   "
},
{
  "id": "ex-laplace2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-laplace2",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  Find if     The fourth column contains the most zeros, so we will expand along that column. The -entry is the only non-zero entry in the fourth column. Following the checkerboard pattern, we see that the sign in front of is a minus. Next we will expand the minor matrix along the top row. Try the next step on your own. We suggest that you expand the first matrix along the last column and expand the second matrix along the first column.    "
},
{
  "id": "th-detoftrans",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#th-detoftrans",
  "type": "Theorem",
  "number": "5.1.12",
  "title": "",
  "body": "  Let be a square matrix, then     See .   "
},
{
  "id": "Subsection-Determinants-of-Some-Special-Matrices-4",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#Subsection-Determinants-of-Some-Special-Matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper-triangular lower-triangular triangular "
},
{
  "id": "lemma-triangulardet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#lemma-triangulardet",
  "type": "Theorem",
  "number": "5.1.13",
  "title": "",
  "body": "  If is a triangular matrix, then is equal to the product of its diagonal entries.    We proceed by induction on , where is an matrix. It is easy to see that this result holds for . Suppose that the result holds for triangular matrices. We need to show that it holds for triangular matrices.  Suppose is a triangular matrix. Then, with the exception of , the entries in the first row (or column) of are guaranteed to be zeros. We will take advantage of these zeros and expand along the first row (or column) of . As we do so, we obtain a single product of and the determinant of a minor matrix obtained by crossing out the first row and column of . But this minor matrix is also a triangular matrix with diagonal etries . By induction hypothesis, its determinant is equal to the product of its diagonal entries, . Therefore This completes the proof.   "
},
{
  "id": "lemma-detofid",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#lemma-detofid",
  "type": "Corollary",
  "number": "5.1.14",
  "title": "",
  "body": "  Let be the identity matrix, then    "
},
{
  "id": "Subsection-Determinants-of-Some-Special-Matrices-8",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#Subsection-Determinants-of-Some-Special-Matrices-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "block triangular "
},
{
  "id": "th-blockTriDet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#th-blockTriDet",
  "type": "Theorem",
  "number": "5.1.15",
  "title": "",
  "body": "  Consider block triangular matrices where and are square matrices. Then     Write and proceed by induction on , where is . If , then the result follows from cofactor expansion along the first column. In general, let denote the matrix obtained from by deleting row and column 1. Then the cofactor expansion along the first column is where are the entries in the first column of . Observe that where , denotes matrix with column 1 and row deleted, and denotes matrix with with row deleted. Since is a matrix, by the induction hypothesis, This gives us The lower triangular case is similar.   "
},
{
  "id": "ex-blockTriDet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#ex-blockTriDet",
  "type": "Example",
  "number": "5.1.16",
  "title": "",
  "body": "  Find if         "
},
{
  "id": "det12x2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#det12x2",
  "type": "Exercise",
  "number": "5.1.6.1",
  "title": "",
  "body": "           "
},
{
  "id": "det22x2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#det22x2",
  "type": "Exercise",
  "number": "5.1.6.2",
  "title": "",
  "body": "           "
},
{
  "id": "laplace",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#laplace",
  "type": "Exercise",
  "number": "5.1.6.3",
  "title": "",
  "body": "           "
},
{
  "id": "prob-detOfTrans",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-detOfTrans",
  "type": "Exercise",
  "number": "5.1.6.4",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-detrowswitch",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-detrowswitch",
  "type": "Exercise",
  "number": "5.1.6.5",
  "title": "",
  "body": "  Let be a matrix obtained from of by switching the first and the second row of . Compute the determinant of . What do you observe?   "
},
{
  "id": "prob-2x2rowswitchproof",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-2x2rowswitchproof",
  "type": "Exercise",
  "number": "5.1.6.6",
  "title": "",
  "body": "  Make a conjecture about what happens to the determinant of a matrix if two rows of a matrix are switched. Prove your conjecture for a matrix.   "
},
{
  "id": "prob-scalarmultrowdet",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-scalarmultrowdet",
  "type": "Exercise",
  "number": "5.1.6.7",
  "title": "",
  "body": "  Let be a matrix obtained from of by multiplying the middle row by . Compute the determinant of . What do you observe?   "
},
{
  "id": "prob-rowtimesconstant2x2proof",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-rowtimesconstant2x2proof",
  "type": "Exercise",
  "number": "5.1.6.8",
  "title": "",
  "body": "  Make a conjecture about what happens to the determinant of a matrix if one of the rows is multiplied by a constant. Prove your conjecture for a matrix.   "
},
{
  "id": "prob-matrixtimesconst",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-matrixtimesconst",
  "type": "Exercise",
  "number": "5.1.6.9",
  "title": "",
  "body": "  Let be a matrix obtained from of by multiplying by . Compute the determinant of . What do you observe?   "
},
{
  "id": "prob-matrixtimesconstant2x2proof",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-matrixtimesconstant2x2proof",
  "type": "Exercise",
  "number": "5.1.6.10",
  "title": "",
  "body": "  Make a conjecture about what happens to the determinant of a matrix if the matrix is multiplied by a constant. Prove your conjecture for a matrix.   "
},
{
  "id": "prob-scalarmultofrow",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-scalarmultofrow",
  "type": "Exercise",
  "number": "5.1.6.11",
  "title": "",
  "body": "  Let be a matrix obtained from of by adding twice the third row to the first. Compute the determinant of . What do you observe?   "
},
{
  "id": "prob-scalarmultofrow2x2",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-scalarmultofrow2x2",
  "type": "Exercise",
  "number": "5.1.6.12",
  "title": "",
  "body": "  Make a conjecture about what happens to the determinant of a matrix if a multiple of one row is added to another row. Prove your conjecture for a matrix.   "
},
{
  "id": "prob-detsumsumdetquestion",
  "level": "2",
  "url": "Section-Finding-the-Determinant.html#prob-detsumsumdetquestion",
  "type": "Exercise",
  "number": "5.1.6.13",
  "title": "",
  "body": "  Is it true that ?   "
},
{
  "id": "Section-Elementary-Row-Operations-and-the-Determinant",
  "level": "1",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html",
  "type": "Section",
  "number": "5.2",
  "title": "Properties of the Determinant",
  "body": " Properties of the Determinant  When we first introduced the determinant we motivated its definition for a matrix by the fact that the value of the determinant is zero if and only if the matrix is singular. We will soon be able to generalize this result to larger matrices, and will eventually establish a formula for the inverse of a nonsingular matrix in terms of determinants.  Recall that we can find the inverse of a matrix or establish that the inverse does not exist by using elementary row operations to carry the given matrix to its reduced row-echelon form. In order to start relating determinants to inverses we need to find out what elementary row operations do to the determinant of a matrix.   The Effects of Elementary Row Operations on the Determinant  Recall that there are three elementary row operations:   Switching the order of two rows    Multiplying a row by a non-zero constant    Adding a multiple of one row to another   Elementary row operations are used to carry a matrix to its reduced row-echelon form. In we established that elementary row operations are reversible.  In other words, if we know what elementary row operations carried to , we can undo each operation with another elementary row operation to carry back to . This will prove useful for computing the determinant. Computing the determinant of is easy. (Why?) If we know what elementary row operations carry back to , and what effect each of these operations has on the determinant of , we could find the determinant of .   Let     Find .         Construct matrix by switching the first and the third rows of .     Find .         Next, try switching consecutive rows. Construct matrix by interchanging the second and third rows of .     Find .         It appears that switching any two rows of a matrix produces a determinant that is negative of the determinant of the original matrix. Next, construct matrix by multiplying the last row of by :     Find .         It turns out that multiplying the first or the second row of by yields exactly the same result as this. Finally, construct matrix by adding twice row 3 to row 1.     Find .         This result is particularly surprising. Try a few more variations of this example to convince yourself that adding a multiple of one row to another row does not appear to affect the determinant.   The following theorem generalizes our observations.    Let be an matrix.   If is obtained from by interchanging two different rows, then     If is obtained from by multiplying one of the rows of by a non-zero constant . Then     If is obtained from by adding a multiple of one row of to another row, then        The proof of this theorem is relegated to another time. For a sketch of the proof, you can watch this video:   The following lemma is a useful consequence of and of .    Let be an matrix.   If has a row of zeros, then .    If two rows of are the same, then .    If one row of is a scalar multiple of another row, then .       We will prove . Parts and are left as exercises.  [Proof of Part ]: Suppose rows and of are the same. Let be a matrix obtained from by switching and . By and we know that . But and are the same, so . But then . We conclude that .    Because , we have the following counterpart of for columns.   Elementary Column Operations and the Determinant   Let be an matrix.   If is obtained from by interchanging two different columns, then     If is obtained from by multiplying one of the columns of by a non-zero constant . Then     If is obtained from by adding a multiple of one column of to another column, then          Computing the Determinant Using Elementary Row Operations  What we discovered about the effects of elementary row operations on the determinant will allow us to compute determinants without using the cumbersome process of cofactor expansion.  We discover these tricks throw concrete examples.    Suppose that a matrix is carried to the identity matrix by a sequence of elementary row operations listed below. Find .     Let's take a look at what happens to the determinant of one step at a time. Recall that ( ). This gives us Therefore .      Let Find by applying elementary row operations to reduce to its row-echelon form.     We stop when we get to a row-echelon form of because we can see that its determinant is (see ).  The following table summarizes the effect of each elementary row operation on the determinant. Since the determinant of the row-echelon form of in step 5 is , we have Therefore You should verify this result by direct computation using cofactors.       Properties of the Determinant  We begin by summarizing the properties of determinants we introduced in previous sections.       The determinant of the identity matrix is equal to 1. ( )    The determinant of a triangular matrix is equal to the product of the main diagonal entries. ( )    The determinant of the transpose is equal to the determinant of the matrix. ( )    If a matrix contains a row of zeros, then its determinant is equal to 0. ( )    If two rows of a matrix are the same, then the determinant of the matrix is equal to 0. ( )    If one row of a matrix is a scalar multiple of another row, then the determinant of the matrix is equal to 0. ( )    If is obtained from by interchanging two different rows, then     If is obtained from by multiplying one of the rows of by a non-zero constant . Then     If is obtained from by adding a multiple of one row of to another row, then    (The last three properties comprise )    In this section we will prove the following important results:   A square matrix is singular if and only if its determinant is equal to 0.    The determinant of a product is the product of the determinants.   To get us started, we need the following lemma.    Let be a square matrix, and let be an elementary matrix, then     Recall that if is obtained from using an elementary row operation, then the same elementary row operation carries to . There are three types of elementary row operations and three types of elementary matrices, so we will have to consider three cases.  Case 1. Suppose is obtained from by interchanging two rows, then so   Case 2. Suppose is obtained from by multiplying one of the rows of by a non-zero constant , then so   Case 3. Suppose is obtained from by adding a scalar multiple of one row to another row, then so     Recall that we first introduced determinants in the context of invertibility of matrices. Specifically, we found that is invertible if and only if (a logically equivalent statement is: is singular if and only if ). We are now in the position to prove this result for all square matrices.    A square matrix is singular if and only if .    Let be a square matrix. To determine whether is singular we need to find . In the section on elementary matrices, we found that there exist elementary matrices such that Therefore, By repeated application of , we find that Suppose that is singular, then . But then contains a row of zeros, and (see ). Since determinants of elementary matrices are non-zero, we conclude that .  Conversely, suppose , then It follows that , so is singular.    Let us see this in action in a concrete case.    Determine whether is an invertible matrix without using elementary row operations.     Compute the determinant of . You will find that . By we conclude that is not invertible.    We now draw our attention to products and how they behave for determinants.    Let and be square matrices, then     Suppose is invertible, then can be written as a product of elementary matrices, see also . Then, by repeated application of , we get Now suppose that is not invertible. Then is also not invertible. %Needs proof So, and . Thus .    The following theorem is a nice consequence of . We leave the proof to the reader, see .    Let be a nonsingular matrix, then         Prove .      Let be an matrix. Show that       Prove .    Apply of to a matrix that has two identical rows.      Prove that if one row of a matrix is a linear combination of two other rows of the matrix, then the determinant of the matrix is 0.      Find and using elementary row operations, where      and .      Each of the following matrices is an elementary matrix.   What elementary row operation does this matrix perform?    Compute the determinant of the matrix in two different ways:    By cofactor expansion.    By thinking about how the given matrix was obtained from the identity matrix.             See .                                    Without doing written computations, determine whether the given matrix is singular.             is singular       is nonsingular                is singular       is nonsingular         Show that all matrices of the form are singular.      Find values of for which the given matrix is singular. List values of in an increasing order.           Suppose and are matrices such that and . Find each of the following.                                            Prove or give a counterexample.       Prove .      Suppose is an invertible matrix such that Find if we know that .          "
},
{
  "id": "init-rowswap",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#init-rowswap",
  "type": "Exploration",
  "number": "5.2.1",
  "title": "",
  "body": " Let     Find .         Construct matrix by switching the first and the third rows of .     Find .         Next, try switching consecutive rows. Construct matrix by interchanging the second and third rows of .     Find .         It appears that switching any two rows of a matrix produces a determinant that is negative of the determinant of the original matrix. Next, construct matrix by multiplying the last row of by :     Find .         It turns out that multiplying the first or the second row of by yields exactly the same result as this. Finally, construct matrix by adding twice row 3 to row 1.     Find .         This result is particularly surprising. Try a few more variations of this example to convince yourself that adding a multiple of one row to another row does not appear to affect the determinant.  "
},
{
  "id": "th-elemrowopsanddet",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#th-elemrowopsanddet",
  "type": "Theorem",
  "number": "5.2.6",
  "title": "",
  "body": "  Let be an matrix.   If is obtained from by interchanging two different rows, then     If is obtained from by multiplying one of the rows of by a non-zero constant . Then     If is obtained from by adding a multiple of one row of to another row, then       "
},
{
  "id": "lemma-det0lemma",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#lemma-det0lemma",
  "type": "Lemma",
  "number": "5.2.7",
  "title": "",
  "body": "  Let be an matrix.   If has a row of zeros, then .    If two rows of are the same, then .    If one row of is a scalar multiple of another row, then .       We will prove . Parts and are left as exercises.  [Proof of Part ]: Suppose rows and of are the same. Let be a matrix obtained from by switching and . By and we know that . But and are the same, so . But then . We conclude that .   "
},
{
  "id": "th-elemcolopsanddet",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#th-elemcolopsanddet",
  "type": "Theorem",
  "number": "5.2.8",
  "title": "Elementary Column Operations and the Determinant.",
  "body": " Elementary Column Operations and the Determinant   Let be an matrix.   If is obtained from by interchanging two different columns, then     If is obtained from by multiplying one of the columns of by a non-zero constant . Then     If is obtained from by adding a multiple of one column of to another column, then       "
},
{
  "id": "ex-detandelemrowops",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#ex-detandelemrowops",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": "  Suppose that a matrix is carried to the identity matrix by a sequence of elementary row operations listed below. Find .     Let's take a look at what happens to the determinant of one step at a time. Recall that ( ). This gives us Therefore .   "
},
{
  "id": "ex-detandelemrowops2",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#ex-detandelemrowops2",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": "  Let Find by applying elementary row operations to reduce to its row-echelon form.     We stop when we get to a row-echelon form of because we can see that its determinant is (see ).  The following table summarizes the effect of each elementary row operation on the determinant. Since the determinant of the row-echelon form of in step 5 is , we have Therefore You should verify this result by direct computation using cofactors.   "
},
{
  "id": "Subsection-Properties-of-the-Determinant-3",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#Subsection-Properties-of-the-Determinant-3",
  "type": "Fact",
  "number": "5.2.11",
  "title": "",
  "body": "     The determinant of the identity matrix is equal to 1. ( )    The determinant of a triangular matrix is equal to the product of the main diagonal entries. ( )    The determinant of the transpose is equal to the determinant of the matrix. ( )    If a matrix contains a row of zeros, then its determinant is equal to 0. ( )    If two rows of a matrix are the same, then the determinant of the matrix is equal to 0. ( )    If one row of a matrix is a scalar multiple of another row, then the determinant of the matrix is equal to 0. ( )    If is obtained from by interchanging two different rows, then     If is obtained from by multiplying one of the rows of by a non-zero constant . Then     If is obtained from by adding a multiple of one row of to another row, then    (The last three properties comprise )   "
},
{
  "id": "lemma-detelemproduct",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#lemma-detelemproduct",
  "type": "Lemma",
  "number": "5.2.12",
  "title": "",
  "body": "  Let be a square matrix, and let be an elementary matrix, then     Recall that if is obtained from using an elementary row operation, then the same elementary row operation carries to . There are three types of elementary row operations and three types of elementary matrices, so we will have to consider three cases.  Case 1. Suppose is obtained from by interchanging two rows, then so   Case 2. Suppose is obtained from by multiplying one of the rows of by a non-zero constant , then so   Case 3. Suppose is obtained from by adding a scalar multiple of one row to another row, then so    "
},
{
  "id": "th-detofsingularmatrix",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#th-detofsingularmatrix",
  "type": "Theorem",
  "number": "5.2.13",
  "title": "",
  "body": "  A square matrix is singular if and only if .    Let be a square matrix. To determine whether is singular we need to find . In the section on elementary matrices, we found that there exist elementary matrices such that Therefore, By repeated application of , we find that Suppose that is singular, then . But then contains a row of zeros, and (see ). Since determinants of elementary matrices are non-zero, we conclude that .  Conversely, suppose , then It follows that , so is singular.   "
},
{
  "id": "ex-invanddet",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#ex-invanddet",
  "type": "Example",
  "number": "5.2.14",
  "title": "",
  "body": "  Determine whether is an invertible matrix without using elementary row operations.     Compute the determinant of . You will find that . By we conclude that is not invertible.   "
},
{
  "id": "th-detofproduct",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#th-detofproduct",
  "type": "Theorem",
  "number": "5.2.15",
  "title": "",
  "body": "  Let and be square matrices, then     Suppose is invertible, then can be written as a product of elementary matrices, see also . Then, by repeated application of , we get Now suppose that is not invertible. Then is also not invertible. %Needs proof So, and . Thus .   "
},
{
  "id": "th-detofinverse",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#th-detofinverse",
  "type": "Theorem",
  "number": "5.2.16",
  "title": "",
  "body": "  Let be a nonsingular matrix, then    "
},
{
  "id": "prob-proofdet0lemma",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-proofdet0lemma",
  "type": "Exercise",
  "number": "5.2.4.1",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-kAdet",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-kAdet",
  "type": "Exercise",
  "number": "5.2.4.2",
  "title": "",
  "body": "  Let be an matrix. Show that    "
},
{
  "id": "prob-proofdet0lemma2",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-proofdet0lemma2",
  "type": "Exercise",
  "number": "5.2.4.3",
  "title": "",
  "body": "  Prove .    Apply of to a matrix that has two identical rows.   "
},
{
  "id": "prob-onerowlincombanotherdet",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-onerowlincombanotherdet",
  "type": "Exercise",
  "number": "5.2.4.4",
  "title": "",
  "body": "  Prove that if one row of a matrix is a linear combination of two other rows of the matrix, then the determinant of the matrix is 0.   "
},
{
  "id": "prob-elemrowopsdet",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-elemrowopsdet",
  "type": "Exercise",
  "number": "5.2.4.5",
  "title": "",
  "body": "  Find and using elementary row operations, where      and .   "
},
{
  "id": "prob-elemmatdet1",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-elemmatdet1",
  "type": "Exercise",
  "number": "5.2.4.6",
  "title": "",
  "body": "       See .        "
},
{
  "id": "prob-elemmatdet2",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-elemmatdet2",
  "type": "Exercise",
  "number": "5.2.4.7",
  "title": "",
  "body": "           "
},
{
  "id": "prob-elemmatdet3",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-elemmatdet3",
  "type": "Exercise",
  "number": "5.2.4.8",
  "title": "",
  "body": "           "
},
{
  "id": "singmatrixdet1a",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#singmatrixdet1a",
  "type": "Exercise",
  "number": "5.2.4.9",
  "title": "",
  "body": "          is singular       is nonsingular     "
},
{
  "id": "prob-singmatrixdet1b",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-singmatrixdet1b",
  "type": "Exercise",
  "number": "5.2.4.10",
  "title": "",
  "body": "          is singular       is nonsingular     "
},
{
  "id": "prob-singmatrixdet2",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-singmatrixdet2",
  "type": "Exercise",
  "number": "5.2.4.11",
  "title": "",
  "body": "  Show that all matrices of the form are singular.   "
},
{
  "id": "prob-singmatrixdet3",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-singmatrixdet3",
  "type": "Exercise",
  "number": "5.2.4.12",
  "title": "",
  "body": "  Find values of for which the given matrix is singular. List values of in an increasing order.        "
},
{
  "id": "prob-detproduct",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-detproduct",
  "type": "Exercise",
  "number": "5.2.4.13",
  "title": "",
  "body": "  Suppose and are matrices such that and . Find each of the following.                                         "
},
{
  "id": "prob-dettruefalse",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-dettruefalse",
  "type": "Exercise",
  "number": "5.2.4.14",
  "title": "",
  "body": "  Prove or give a counterexample.    "
},
{
  "id": "prob-proofdetofinverse",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-proofdetofinverse",
  "type": "Exercise",
  "number": "5.2.4.15",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-detinvertible1",
  "level": "2",
  "url": "Section-Elementary-Row-Operations-and-the-Determinant.html#prob-detinvertible1",
  "type": "Exercise",
  "number": "5.2.4.16",
  "title": "",
  "body": "  Suppose is an invertible matrix such that Find if we know that .        "
},
{
  "id": "Section-Cramers-Rule",
  "level": "1",
  "url": "Section-Cramers-Rule.html",
  "type": "Section",
  "number": "5.3",
  "title": "Extra Topic: Cramer’s Rule",
  "body": " Extra Topic: Cramer's Rule  Combining results of and shows that the following statements about matrix are equivalent:    exists    Any equation has a unique solution        In this section, we take a closer look at the relationship between the determinants of nonsingular matrices , solutions to , and .   Cramer's Rule  We begin by establishing a formula that allows us to express the unique solution to the system in terms of the determinant of , for a nonsingular matrix . This formula is called Cramer's rule . Consider the system The system can be written as a matrix equation Using one of our standard methods for solving systems we find that Observe that the denominators in the expressions for and are the same and equal to .  A close examination shows that the numerators of expressions for and can also be interpreted as determinants of matrices. The numerator of the expression for is the determinant of the matrix formed by replacing the first column of The numerator of the expression for is the determinant of the matrix that is formed by replacing the second column of Thus, and can be written as  Note that a unique solution to the system exists if and only if the determinant of the coefficient matrix is not zero. It turns out that a solution to any square system can be expressed using ratios of determinants, provided that is nonsingular. The general formula for the component of the solution vector is To formalize this expression, we need to introduce some notation. Given a matrix and a vector we use to denote the matrix obtained from by replacing the column of with . In other words, Using our new notation, we can write the component of the solution vector as We will work through a couple of examples before proving this result as a theorem.    Solve using Cramer's rule if     We start by computing the determinant of . Next, we compute and .  We now compute the components of the solution vector. Finally, it is a good idea to verify that what we found is a solution to the system.       Solve using Cramer's rule if     Find the determinant of . Next, we compute for .   This gives us the solution vector You should verify that what you found really is a solution.    We are now ready to state and prove Cramer's rule as a theorem.    Let be a nonsingular matrix, and let be an vector. Then the components of the solution vector of are given by where is defined as in .    For this proof we will need to think of matrices in terms of their columns. Thus, We will also need the identity matrix . The columns of are standard unit vectors. Recall that Similarly, Observe that is the only non-zero entry in the row of . Cofactor expansion along the row gives us Now, consider the product  This gives us   By our earlier observation in , we have  is nonsingular, so . Thus     Finding the determinant is computationally expensive. Because Cramer's rule requires finding many determinants, it is not a computationally efficient way of solving a system of equations. However, Cramer's rule is often used for small systems in applications that arise in economics, natural, and social sciences, particularly when solving for only a subset of the variables.    Adjugate Formula for the Inverse of a Matrix  In we used the row reduction algorithm to show that if is nonsingular then This formula is a special case of a more general formula for finding inverse matrices. Just like the formula for a matrix, the general formula includes the coefficient and a matrix related to the original matrix. We will now derive the general formula using Cramer's rule.  Let be an nonsingular matrix. When looking for the inverse of , we look for a matrix such that . We will think of matrices in terms of their columns If then we must have This gives us systems of equations. Solution vectors to these systems are the columns of . Thus, the column of is By Cramer's rule But To find , we can expand along the column of . But the column of is the vector which has 1 in the spot and zeros everywhere else. Thus We now have Thus, The matrix of cofactors of is called the adjugate of . We write    Note the order of subscripts of in the adjugate matrix. The -entry of the adjugate matrix is .  We summarize our result as a theorem.    Let be a nonsingular square matrix, then       Use to find if     We begin by finding . One checks that The first column of has entries , and .   The second column of has entries , and . Now,   Next, we compute the third column of :   This gives us Compare this result to the answer in .        Use Cramer's rule to solve each of the following systems.                              Consider the equation    Solve for using Cramer's Rule.    If you had to solve for all four variables, which method would you use? Why?        is the solution for part (a).      Use Theorem to find the inverse of each of the following matrices.                              Show that the formula in is a special case of the formula in by showing that      "
},
{
  "id": "Subsection-Cramers-Rule-2",
  "level": "2",
  "url": "Section-Cramers-Rule.html#Subsection-Cramers-Rule-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cramer's rule "
},
{
  "id": "ex-cramer2by2",
  "level": "2",
  "url": "Section-Cramers-Rule.html#ex-cramer2by2",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Solve using Cramer's rule if     We start by computing the determinant of . Next, we compute and .  We now compute the components of the solution vector. Finally, it is a good idea to verify that what we found is a solution to the system.    "
},
{
  "id": "ex-cramer3by3",
  "level": "2",
  "url": "Section-Cramers-Rule.html#ex-cramer3by3",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Solve using Cramer's rule if     Find the determinant of . Next, we compute for .   This gives us the solution vector You should verify that what you found really is a solution.   "
},
{
  "id": "th-cramer",
  "level": "2",
  "url": "Section-Cramers-Rule.html#th-cramer",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "",
  "body": "  Let be a nonsingular matrix, and let be an vector. Then the components of the solution vector of are given by where is defined as in .    For this proof we will need to think of matrices in terms of their columns. Thus, We will also need the identity matrix . The columns of are standard unit vectors. Recall that Similarly, Observe that is the only non-zero entry in the row of . Cofactor expansion along the row gives us Now, consider the product  This gives us   By our earlier observation in , we have  is nonsingular, so . Thus    "
},
{
  "id": "Subsection-Adjugate-Formula-for-the-Inverse-of-a-Matrix-3",
  "level": "2",
  "url": "Section-Cramers-Rule.html#Subsection-Adjugate-Formula-for-the-Inverse-of-a-Matrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adjugate "
},
{
  "id": "th-adjugateinverseformula",
  "level": "2",
  "url": "Section-Cramers-Rule.html#th-adjugateinverseformula",
  "type": "Theorem",
  "number": "5.3.4",
  "title": "",
  "body": "  Let be a nonsingular square matrix, then    "
},
{
  "id": "ex-inversebyadjugate",
  "level": "2",
  "url": "Section-Cramers-Rule.html#ex-inversebyadjugate",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  Use to find if     We begin by finding . One checks that The first column of has entries , and .   The second column of has entries , and . Now,   Next, we compute the third column of :   This gives us Compare this result to the answer in .   "
},
{
  "id": "prob-cramer1",
  "level": "2",
  "url": "Section-Cramers-Rule.html#prob-cramer1",
  "type": "Exercise",
  "number": "5.3.3.1",
  "title": "",
  "body": "           "
},
{
  "id": "prob-cramer2",
  "level": "2",
  "url": "Section-Cramers-Rule.html#prob-cramer2",
  "type": "Exercise",
  "number": "5.3.3.2",
  "title": "",
  "body": "           "
},
{
  "id": "prob-cramer3",
  "level": "2",
  "url": "Section-Cramers-Rule.html#prob-cramer3",
  "type": "Exercise",
  "number": "5.3.3.3",
  "title": "",
  "body": "  Consider the equation    Solve for using Cramer's Rule.    If you had to solve for all four variables, which method would you use? Why?        is the solution for part (a).   "
},
{
  "id": "prob-adjinverse1",
  "level": "2",
  "url": "Section-Cramers-Rule.html#prob-adjinverse1",
  "type": "Exercise",
  "number": "5.3.3.4",
  "title": "",
  "body": "           "
},
{
  "id": "prob-adjinverse2",
  "level": "2",
  "url": "Section-Cramers-Rule.html#prob-adjinverse2",
  "type": "Exercise",
  "number": "5.3.3.5",
  "title": "",
  "body": "           "
},
{
  "id": "prob-2by2adjugate",
  "level": "2",
  "url": "Section-Cramers-Rule.html#prob-2by2adjugate",
  "type": "Exercise",
  "number": "5.3.3.6",
  "title": "",
  "body": "  Show that the formula in is a special case of the formula in by showing that    "
},
{
  "id": "Section-Determinants-Areas-and-Volumes",
  "level": "1",
  "url": "Section-Determinants-Areas-and-Volumes.html",
  "type": "Section",
  "number": "5.4",
  "title": "Extra Topic: Determinants, Areas, and Volumes",
  "body": " Extra Topic: Determinants, Areas, and Volumes   Determinant and the Area of a Parallelogram  Consider the parallelogram determined by vectors and in .   Parallelogram    Recall that the area of a parallelogram is given by the product of the length of the base and the height. As shown in the diagram below, the length of the base is the magnitude of . The height, , can be found using trigonometry    Continuation of the above    Using the area of a parallelogram formula together with the formula for the cross product of two vectors, we get We have established the following formula.    The area of a parallelogram determined by vectors and in is given by     To get accustomed to this formula, let us examine a concrete case    Use to find the area of a parallelogram determined by vectors     We can start by visualizeing the parallelogram in GeoGebra. RIGHT-CLICK and DRAG to rotate the image below. The area of the parallelogram, rounded to two decimal places, is displayed inside the parallelogram.       To find the exact area we compute      The formula from can be easily adapted to parallelograms determined by vectors in , as illustrated by the following example.    Find the area of the parallelogram in the diagram.  Plane area       The vectors that determine the parallelogram are The problem we run into is that these vectors are in , whereas the cross product is defined only for vectors in . We will get around this difficulty by ``padding\" our vectors with zeros on the bottom. In other words, we will consider them as vectors sitting in the -coordinate plane in . This allows us to compute the cross product The area of the parallelogram is then given by     Now, illustrates an important phenomenon. Observe that the zeros in the last column of the determinant ensure that the and components of the cross product are zero, while the last component is the determinant of the matrix whose rows (or columns) are the two vectors that determine the parallelogram in . In general, if the parallelogram is determined by vectors then the area of the parallelogram can be computed as follows:  So the area of the parallelogram turns out to be the absolute value of the determinant of the matrix whose rows (or columns) are the two vectors that determine the parallelogram. The following formula summarizes our discussion.    Let and be vectors of . The area of the parallelogram determined by and is given by     The formula in action is illustrated in an example now.    Use to find the area of the polygon shown below.        We will start by splitting this region into triangles.   Polygon part 1    We can find the total area of the polygon by finding the area of each triangle. The area of each triangle is half of the area of the corresponding parallelogram. For instance, is half of the area of the parallelogram depicted below.   Polygon part 2    We compute     The total area of the polygon is .      Determinant and the Volume of a Parallelepiped  Our next goal is to find the volume of a three-dimensional figure called a parallelepiped . A parallelepiped is a six-faced figure whose opposite faces are congruent parallelograms located in parallel planes. A parallelepiped is a three-dimensional counterpart of a parallelogram, and is determined by three non-coplanar vectors in . The figure below shows a parallelepiped determined by three vectors.   3D parallelepid    Consider a parallelepiped determined by vectors , and , as shown below.   Unfilled version of above    The volume of a parallelepiped is given by We will consider the parallelogram determined by and to be the base of the parallelepiped. Thus, the area of the base is given by    Crossed product indicated    The height of the parallelepiped is measured along a line perpendicular to the base. By our knowledge of cross products, lies on such a line. Let be the angle between and , . Then the height, , of the parallelepiped is given by It may be difficult to visualize this in two dimensions. Below is a replica of of the above diagram in GeoGebra. RIGHT-CLICK and DRAG to rotate the image.       This gives us the following formula for the volume of the parallelepiped We have established the following formula.    The volume of a parallelepiped determined by vectors , and in is given by\\\\     Our next goal is to show that this expression for the volume is equal to the determinant of a matrix whose rows are the vectors that determine the parallelepiped. Let then The expression in is sometimes referred to as the box product or the scalar triple product .  Recall that (see ). Therefore, the three vectors that determine the parallelogram can be used to form rows or columns of the determinant on the right side of . This gives us the following formula.    Let be vectors in . Then the volume of the parallelepiped determined by , and is given by       Determinants and Linear Transformations  We will now turn our attention to the determinant of a matrix of a linear transformation.   The following GeoGebra interactive shows a polygon located in the domain of a linear transformation induced by the matrix . The right-hand side shows the image of under . The number inside each polygon indicates its area.         Let . Find the determinant of .           Drag the vertices of to change the polygon. Make a note of how the area of and the area of the image change. How are the areas related to each other?           Change the matrix to a matrix whose determinant is 1. Compare the areas of and . Try matrices whose determinant is 0 or negative. What do you observe about the areas?  Formulate a conjecture about the relationship between the area of the polygon and the area of its image under a linear transformation.     We will not prove your conjecture in for arbitrary figures as it is beyond the scope of this text. However, we can tackle the problem of how linear transformations affect areas of parallelograms. This is the topic of our next example.    Let be a linear transformation induced by matrix . Suppose and are vectors in . Let be a parallelogram determined by and . Show that     Let and let . By , . Applying to and we get Using , we compute         Let be a square determined by and . Let be a parallelogram determined by vectors and .     Sketch both figures in the same coordinate plane, and use geometry to explain why and have the same area. Compute the area of using .           Suppose is the standard matrix of a linear transformation such that . Find .            Supply the intermediate steps in .      Find the volume of a parallelepiped determined by            Find the volume of a parallelepiped determined by Explain your result geometrically.          "
},
{
  "id": "form-areaofparallelogram",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#form-areaofparallelogram",
  "type": "Formula",
  "number": "5.4.1",
  "title": "",
  "body": "  The area of a parallelogram determined by vectors and in is given by    "
},
{
  "id": "ex-areaOfParFormula",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#ex-areaOfParFormula",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Use to find the area of a parallelogram determined by vectors     We can start by visualizeing the parallelogram in GeoGebra. RIGHT-CLICK and DRAG to rotate the image below. The area of the parallelogram, rounded to two decimal places, is displayed inside the parallelogram.       To find the exact area we compute     "
},
{
  "id": "ex-areaofparallelogram",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#ex-areaofparallelogram",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  Find the area of the parallelogram in the diagram.  Plane area       The vectors that determine the parallelogram are The problem we run into is that these vectors are in , whereas the cross product is defined only for vectors in . We will get around this difficulty by ``padding\" our vectors with zeros on the bottom. In other words, we will consider them as vectors sitting in the -coordinate plane in . This allows us to compute the cross product The area of the parallelogram is then given by    "
},
{
  "id": "form-areaofparallelogramdeterminant",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#form-areaofparallelogramdeterminant",
  "type": "Formula",
  "number": "5.4.5",
  "title": "",
  "body": "  Let and be vectors of . The area of the parallelogram determined by and is given by    "
},
{
  "id": "exp-polyArea",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#exp-polyArea",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": "  Use to find the area of the polygon shown below.        We will start by splitting this region into triangles.   Polygon part 1    We can find the total area of the polygon by finding the area of each triangle. The area of each triangle is half of the area of the corresponding parallelogram. For instance, is half of the area of the parallelogram depicted below.   Polygon part 2    We compute     The total area of the polygon is .   "
},
{
  "id": "Subsection-3times3-Determinant-and-the-Volume-of-a-Parallelepiped-2",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#Subsection-3times3-Determinant-and-the-Volume-of-a-Parallelepiped-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelepiped "
},
{
  "id": "Subsection-3times3-Determinant-and-the-Volume-of-a-Parallelepiped-9",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#Subsection-3times3-Determinant-and-the-Volume-of-a-Parallelepiped-9",
  "type": "Figure",
  "number": "5.4.7",
  "title": "",
  "body": "    "
},
{
  "id": "form-volumeparallelepiped",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#form-volumeparallelepiped",
  "type": "Formula",
  "number": "5.4.8",
  "title": "",
  "body": "  The volume of a parallelepiped determined by vectors , and in is given by\\\\    "
},
{
  "id": "Subsection-3times3-Determinant-and-the-Volume-of-a-Parallelepiped-12",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#Subsection-3times3-Determinant-and-the-Volume-of-a-Parallelepiped-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "box product scalar triple product "
},
{
  "id": "form-boxproduct",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#form-boxproduct",
  "type": "Formula",
  "number": "5.4.9",
  "title": "",
  "body": "  Let be vectors in . Then the volume of the parallelepiped determined by , and is given by    "
},
{
  "id": "exp-LinTransAreaDet",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#exp-LinTransAreaDet",
  "type": "Exploration",
  "number": "5.4.1",
  "title": "",
  "body": " The following GeoGebra interactive shows a polygon located in the domain of a linear transformation induced by the matrix . The right-hand side shows the image of under . The number inside each polygon indicates its area.         Let . Find the determinant of .           Drag the vertices of to change the polygon. Make a note of how the area of and the area of the image change. How are the areas related to each other?           Change the matrix to a matrix whose determinant is 1. Compare the areas of and . Try matrices whose determinant is 0 or negative. What do you observe about the areas?  Formulate a conjecture about the relationship between the area of the polygon and the area of its image under a linear transformation.    "
},
{
  "id": "ex-detLinTransArea",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#ex-detLinTransArea",
  "type": "Example",
  "number": "5.4.14",
  "title": "",
  "body": "  Let be a linear transformation induced by matrix . Suppose and are vectors in . Let be a parallelogram determined by and . Show that     Let and let . By , . Applying to and we get Using , we compute    "
},
{
  "id": "prob-areasquareandparal",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#prob-areasquareandparal",
  "type": "Exercise",
  "number": "5.4.4.1",
  "title": "",
  "body": "  Sketch both figures in the same coordinate plane, and use geometry to explain why and have the same area. Compute the area of using .        "
},
{
  "id": "Section-Determinants-Areas-and-Volumes-5-1-3",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#Section-Determinants-Areas-and-Volumes-5-1-3",
  "type": "Exercise",
  "number": "5.4.4.2",
  "title": "",
  "body": "  Suppose is the standard matrix of a linear transformation such that . Find .        "
},
{
  "id": "prob-boxprductproof",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#prob-boxprductproof",
  "type": "Exercise",
  "number": "5.4.4.3",
  "title": "",
  "body": "  Supply the intermediate steps in .   "
},
{
  "id": "prob-volparallelepiped",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#prob-volparallelepiped",
  "type": "Exercise",
  "number": "5.4.4.4",
  "title": "",
  "body": "  Find the volume of a parallelepiped determined by         "
},
{
  "id": "prob-volparallelepiped0",
  "level": "2",
  "url": "Section-Determinants-Areas-and-Volumes.html#prob-volparallelepiped0",
  "type": "Exercise",
  "number": "5.4.4.5",
  "title": "",
  "body": "  Find the volume of a parallelepiped determined by Explain your result geometrically.        "
},
{
  "id": "Section-Describing-Eigenvalues-and-Eigenvectors",
  "level": "1",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html",
  "type": "Section",
  "number": "6.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors  At several places in this course it has been valuable to restrict ourselves to square matrices, and we do so again when discussing eigenvalues and eigenvectors. In , we proved that any matrix induces a linear transformation from to itself. For our first few examples, let us consider the case .   Let The following animation helps us to visualize the matrix transformation associated with . Given a vector in , its image, , is also in . Set slider to to see input vectors ; change it to see their images .   A larger version of this activity is available here .    For many vectors, does not point in the same direction as . This is the case for all of the gray vectors in the animation, as we can see that points in a different direction than . But if we look at the red vectors (vectors parallel to ), we notice that they appear unchanged in magnitude and direction. Such vectors are sometimes called fixed vectors of . Looking next at the blue vectors (vectors parallel to ), we observe that the magnitudes of the vectors are changed, but the direction in which the blue vectors point is unchanged by this linear transformation.   In we found that certain vectors do not change direction under the linear transformation induced by matrix . Such vectors are examples of eigenvectors of . In general, any nonzero vector whose image under a matrix transformation is parallel to the original vector is called an eigenvector of the matrix that induced the transformation. The following definition captures this idea algebraically.    Let be an matrix. We say that a non-zero vector is an eigenvector of if for some scalar . We say that is an eigenvalue of associated with the eigenvector .    Let's revisit in light of . In the exploration, we observed visually that vectors parallel to were eigenvectors associated with as these vectors changed length but remained parallel to the original vector under the linear transformation induced by . To verify this algebraically, observe that all vectors parallel to can be written in the form , . We compute This shows that any non-zero scalar multiple of is an eigenvector of which has a corresponding eigenvalue of 3.   Eigenvalue property drawn     Fixed vectors of are also eigenvectors. For example, This shows that is a fixed vector and an eigenvector of which has a corresponding eigenvalue of .  The above discussion leads us to the following result.    If is an eigenvector of matrix and is the corresponding eigenvalue, then every scalar multiple of is also an eigenvector of and is the corresponding eigenvalue.    See       A couple of finer points of require clarification.   The definition requires that eigenvectors be non-zero. Imagine what would happen if we allowed to be an eigenvector of . Clearly for all scalars . This means that every number would be an eigenvalue of every matrix. Because eigenvalues are supposed to capture certain information about the matrix, allowing every number to be an eigenvalue of every matrix would defeat the purpose.    Until now, we had talked about eigenvectors as vectors whose images under a matrix transformation are parallel to the original vectors. But the algebraic definition allows non-zero vectors that map to zero to be considered eigenvectors. (What would an eigenvalue of such an eigenvector be?) The zero vector has no direction, so we cannot say that the image of such an eigenvector is parallel to the original vector. However, will illustrate this point.       The observations are exemplified in detail below.    Let Note that takes a vector in and projects it onto the -axis, as we learned in .  Which vectors in would be the eigenvectors, and what are the corresponding eigenvalues?    Since is the projection of onto the -axis, in many cases and are not parallel. Notice, however, that all of the red vectors located along the -axis in the diagram are fixed by . So, for any of the red vectors we have , which means that each of the red vectors is an eigenvector of with the corresponding eigenvalue of .   Two eigenvectors graphed    The blue vectors along the y-axis are also eigenvectors. To see this, note that each of the blue vectors is of the form . But then So each of the blue vectors is an eigenvector of with the corresponding eigenvalue of .     Let The GeoGebra interactive below shows the action of on several vectors. (Move the slider to to see the result of the transformation induced by .)         Note that vectors (and their scalar multiples) remain positioned along the same lines even as they change magnitude and direction. This indicates that and , along with all of their scalar multiples, are eigenvectors of . What are the eigenvalues associated with these eigenvectors?    The interactive shows the result of multiplication by . Consider one eigenvector at a time. Multiplication by what scalar would yield the same result?    Eigenvalue associated with is .  Eigenvalue associated with is .     A natural question is this: does every square matrix have eigenvalues and eigenvectors? We will address this question in later sections and there discover that the answer to this question is ``yes\", provided that we permit eigenvalues and entries of eigenvectors to be complex numbers.  The next example is one that requires complex numbers.   Let Note that takes any vector in and rotates it , as we saw in . \\begin{center}  Rotations graphed     Continuation of above    Since rotates every vector in , every nonzero vector changes direction, so there are no eigenvectors in the plane. It turns out that does have eigenvectors and eigenvalues, but in order to find them we need to work with vectors whose entries are complex numbers. Since these vectors are not in , we cannot see them.  To follow the computation below, you need to recall that the imaginary unit is defined to by .  Consider the vector We compute: so is an eigenvector of . Its corresponding eigenvalue is    We will continue to work with complex numbers as we study eigenvalues and eigenvectors.    The first in-depth study of eigenvalues can probably be attributed to Fourier as he studied partial differential equations early in the nineteenth century, and in particular when he studied what is known as the heat equation. By the twentieth century mathematicians understood the connections between differential equations and eigenvalues. Systems of differential equations are often best represented by matrices, especially in the context of using computers to find numerical solutions. Most algorithms to solve these systems work by iterating some process, and eigenvalues along with their corresponding eigenvectors indicate what will happen to such a process after many repetitions.      The Characteristic Equation  Let be an matrix. In the first sections, we learned that the eigenvectors and eigenvalues of are vectors and scalars that satisfy the equation We listed a few reasons why we are interested in finding eigenvalues and eigenvectors, but we did not give any process for finding them. In this section we will focus on a process which can be used for small matrices. For larger matrices, the best methods we have are iterative methods, and we will explore some of these in later sections.  For an matrix, we will see that the eigenvalues are the roots of a polynomial called the characteristic polynomial . So finding eigenvalues is equivalent to solving a polynomial equation of degree . Finding the corresponding eigenvectors turns out to be a matter of computing the null space of a matrix, as the following exploration demonstrates.   If a vector is an eigenvector satisfying , then clearly it also satisfies . It seems natural at this point to try to factor. We would love to ``factor out'' . Here is the procedure: The middle step was necessary before factoring because we cannot subtract a scalar from an matrix .  In the spirit of connecting eigenvalues to previous notions, the following questions are intended to keep you linking concepts together.    Does the above show that any eigenvector of is in the row space, column space or the null space of the related matrix, ?    The null space.      Since eigenvectors are non-zero vectors, this means that will have eigenvectors if and only if the null space of is nontrivial. Which option is correct of the following is correct? The only way that can be nontrivial is if is equal to, less than or greater than .    Less than .    If the rank of an matrix is less than , then the matrix is singular. Since must be singular for any eigenvalue , we see that is an eigenvalue of if and only if    In theory, offers us a way to find eigenvalues. To find the eigenvalues of , one can solve for .    Eigenvalues    The equation is called the characteristic equation of .    The characteristic equation is perhaps the most computational approach to finding eigenvalues. As such, examples are important to run through:    Let Compute the eigenvalues of this matrix using the characteristic equation.     The characteristic equation has solutions and . These are the eigenvalues of .     Let     Compute the eigenvalues of using the characteristic equation. (List your answers in an increasing order.)            Let Compute the eigenvalues of using the characteristic equation.     Matrix has eigenvalues and .    In , the factor appears twice. This repeated factor gives rise to the eigenvalue . We say that the eigenvalue has algebraic multiplicity  .  The three examples above are a bit contrived. It is not always possible to completely factor the characteristic polynomial using only real numbers. However, a fundamental fact from algebra is that every degree polynomial has roots (counting multiplicity) provided that we allow complex numbers. This is why sometimes eigenvalues and their corresponding eigenvectors involve complex numbers. The next example highlights this point.    Let Compute the eigenvalues of this matrix.     So one of the eigenvalues of is . To get the other eigenvalues we must solve . Using the quadratic formula, we compute that and are also eigenvalues of .     Let     Compute the eigenvalues of this matrix. (Hint: The eigenvalues are the diagonal entries of the matrix.)         What do you observe about the eigenvalues? What property of the matrix makes this ``coincidence\" possible? (Hint: is a triangular matrix).   The matrix in is a triangular matrix, and the property you observed holds in general.    Let be a triangular matrix. Then the eigenvalues of are the entries on the main diagonal.    See .      Let be a diagonal matrix. Then the eigenvalues of are the entries on the main diagonal.    One final note about eigenvalues. We began this section with the sentence, \"In theory, then, to find the eigenvalues of , one can solve for .\" In general, one does not attempt to compute eigenvalues by solving the characteristic equation of a matrix, as there is no simple way to solve this polynomial equation for . Instead, one can often approximate the eigenvalues using iterative methods .    Eigenvectors  Once we have computed an eigenvalue of an matrix , the next step is to compute the associated eigenvectors. In other words, we seek vectors such that , or equivalently, For any given eigenvalue there are infinitely many eigenvectors associated with it. In fact, the eigenvectors associated with form a subspace of .    Let be an matrix and let be an eigenvalue of . Then the set of all eigenvectors associated with is a subspace of .    See and .    This motivates the following definition.    The set of all eigenvectors associated with a given eigenvalue of a matrix is known as the eigenspace associated with that eigenvalue.    So given an eigenvalue , there is an associated eigenspace , and our goal is to find a basis of , for then any eigenvector will be a linear combination of the vectors in that basis. Moreover, we are trying to find a basis for the set of vectors that satisfy , which means we seek a basis for . We have already learned how to compute a basis of a null space.  Let's return to the examples we did in the first part of this section.    (Finding eigenvectors for ) Recall that has eigenvalues and . Compute a basis for the eigenspace associated with each of these eigenvalues.    Eigenvectors associated with the eigenvalue are in the null space of . So we seek a basis for . We compute: From this we see that the eigenspace associated with consists of vectors of the form . This means that is one possible basis for .  In a similar way, we compute a basis for , the subspace of all eigenvectors associated with the eigenvalue . Now we compute: Vectors in the null space have the form This means that is one possible basis for the eigenspace .      (Finding eigenvectors for ) We know from that has eigenvalues and . Compute a basis for the eigenspace associated with each of these eigenvalues.    Let's begin by finding a basis for the eigenspace , which is the subspace of consisting of eigenvectors corresponding to the eigenvalue . We need to compute a basis for . We compute: From this we see that an eigenvector in has the form . This means that is one possible basis for the eigenspace . By letting , we obtain an arguably nicer-looking basis: .      (Finding eigenvectors for ) We know from that has eigenvalues and . Compute a basis for the eigenspace associated to each of these eigenvalues.    We first find a basis for the eigenspace . We need to compute a basis for . We compute: Notice that there are two free variables. The eigenvectors in have the form So one possible basis for the eigenspace is given by Next we find a basis for the eigenspace . We need to compute a basis for . We compute: This time there is one free variable. From this we see The eigenvectors in have the form , so a possible basis for the eigenspace is given by       (Finding eigenvectors for Example ) We know from' that has eigenvalues , , and . Compute a basis for the eigenspace associated with each eigenvalue.    We first find a basis for the eigenspace . We need to compute a basis for . We compute: From this we see that for any eigenvector in we have and , but is a free variable. So one possible basis for the eigenspace is given by Next we find a basis for the eigenspace . We need to compute a basis for . We compute: There is one free variable. Setting , we get and . From this we see that eigenvectors in have the form , so a possible basis for the eigenspace is given by We ask you in to show that is a basis for .    We conclude this section by establishing the significance of a matrix having an eigenvalue of zero.    A square matrix has an eigenvalue of zero if and only if it is singular.    A square matrix is singular if and only if .(see ). But if and only if , which is true if and only if zero is an eigenvalue of .        Let      Show that is an eigenvector of . What is its corresponding eigenvalue?           Show that is an eigenvector of . What is its corresponding eigenvalue?           Show that is an eigenvector of . What is its corresponding eigenvalue?            Let Note that takes any vector in and projects it onto the -axis, as we learned in . Which vectors in would be eigenvectors, and what are the corresponding eigenvalues?      Returning to , let Show that is an eigenvector of . What is its corresponding eigenvalue?           Arguing geometrically, identify the linear transformation whose standard matrix has eigenvalues and .      Vertical Shear.      Horizontal Shear.      Counterclockwise Rotation through a angle.      Reflection About the line .      Horizontal Stretch.      Vertical Stretch.        Let Can you find an eigenvector and its corresponding eigenvalue? Can you find another ``eigenpair''? Can you find all of the eigenvectors of ?      The rotation matrix in has complex eigenvectors and eigenvalues. Think geometrically to find an example of a (non-identity) rotation matrix with real eigenvectors and eigenvalues. Enter degree measure between 0 and 360.    Rotation through degrees.      Can an eigenvalue have multiple eigenvectors associated with it?      Yes.      No.        Can an eigenvector have multiple eigenvalues associated with it?      Yes      No        Prove .       In the next two exercises, we will prove that the eigenvectors associated with an eigenvalue of an matrix form a subspace of .     Let and be eigenvectors of associated with . Show that is also an eigenvector of associated with . (This shows that the set of eigenvectors of associated with is closed under addition).      Show that the set of eigenvectors of associated with is closed under scalar multiplication.       Compute the eigenvalues of the given matrix and find the corresponding eigenspaces.           A basis for is A basis for is             A basis for is . A basis for is       Let Compute a basis for each of the eigenspaces of this matrix, , , and .       Let Compute the three eigenvalues of this matrix and find a basis for each of the eigenspaces of this matrix: , , and .    One of the eigenvalues of is -3.    The eigenvalues are The bases are, respectively,       Complete by showing that a basis for is given by where is the eigenspace associated with the eigenvalue of the matrix       Prove . (HINT: Proceed by induction on the dimension n. For the inductive step, compute by expanding along the first column (or row) if is upper (lower) triangular.)      The following set of problems deals with geometric interpretation of eigenvalues and eigenvectors, as well as linear transformations of the plane.     Recall that a vertical stretch\/compression of the plane is a linear transformation whose standard matrix is Find the eigenvalues of . Find a basis for the eigenspace corresponding to each eigenvalue.    A basis for is and a basis for is       Recall that a horizontal shear of the plane is a linear transformation whose standard matrix is Find the eigenvalue of and its corresponding eigenspace.    The eigenvalue is and a basis for its eigenspace is       Recall that a counterclockwise rotation of the plane through angle is a linear transformation whose standard matrix is Verify that the eigenvalues of are Explain why is real number if and only if is a multiple of . After this, suppose is a muliple of . Then the eigenspaces corresponding to the two eigenvalues are the same. Which of the following describes the eigenspace?      All vectors in .      All vectors along the -axis.      All vectors along the -axis.      All vectors along the line .         A reflection of the plane about the line is a linear transformation whose standard matrix is You can take this for granted.     Verify that the eigenvalues of are and . Then find a basis for eigenspaces and . (For simplicity, assume that .)    A basis for is and a basis for is       Choose the best description of .      All vectors in .      All vectors with ``slope\" .      All vectors with ``slope\" .      All vectors with ``slope\" .        Choose the best description of .      All vectors along the line .      All vectors parallel to the -axis.      All vectors parallel to the -axis.      All vectors perpendicular to the line .        "
},
{
  "id": "init-eignintro",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#init-eignintro",
  "type": "Exploration",
  "number": "6.1.1",
  "title": "",
  "body": " Let The following animation helps us to visualize the matrix transformation associated with . Given a vector in , its image, , is also in . Set slider to to see input vectors ; change it to see their images .   A larger version of this activity is available here .    For many vectors, does not point in the same direction as . This is the case for all of the gray vectors in the animation, as we can see that points in a different direction than . But if we look at the red vectors (vectors parallel to ), we notice that they appear unchanged in magnitude and direction. Such vectors are sometimes called fixed vectors of . Looking next at the blue vectors (vectors parallel to ), we observe that the magnitudes of the vectors are changed, but the direction in which the blue vectors point is unchanged by this linear transformation.  "
},
{
  "id": "Section-Describing-Eigenvalues-and-Eigenvectors-4",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Section-Describing-Eigenvalues-and-Eigenvectors-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigenvectors eigenvector "
},
{
  "id": "def-eigen1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#def-eigen1",
  "type": "Definition",
  "number": "6.1.2",
  "title": "",
  "body": "  Let be an matrix. We say that a non-zero vector is an eigenvector of if for some scalar . We say that is an eigenvalue of associated with the eigenvector .   "
},
{
  "id": "Section-Describing-Eigenvalues-and-Eigenvectors-8",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Section-Describing-Eigenvalues-and-Eigenvectors-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fixed vectors "
},
{
  "id": "th-eigenScalarMult",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#th-eigenScalarMult",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "",
  "body": "  If is an eigenvector of matrix and is the corresponding eigenvalue, then every scalar multiple of is also an eigenvector of and is the corresponding eigenvalue.    See    "
},
{
  "id": "obs-finerPointsOfEigDe",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#obs-finerPointsOfEigDe",
  "type": "Observation",
  "number": "6.1.4",
  "title": "",
  "body": "  A couple of finer points of require clarification.   The definition requires that eigenvectors be non-zero. Imagine what would happen if we allowed to be an eigenvector of . Clearly for all scalars . This means that every number would be an eigenvalue of every matrix. Because eigenvalues are supposed to capture certain information about the matrix, allowing every number to be an eigenvalue of every matrix would defeat the purpose.    Until now, we had talked about eigenvectors as vectors whose images under a matrix transformation are parallel to the original vectors. But the algebraic definition allows non-zero vectors that map to zero to be considered eigenvectors. (What would an eigenvalue of such an eigenvector be?) The zero vector has no direction, so we cannot say that the image of such an eigenvector is parallel to the original vector. However, will illustrate this point.      "
},
{
  "id": "ex-eigen",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-eigen",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": "  Let Note that takes a vector in and projects it onto the -axis, as we learned in .  Which vectors in would be the eigenvectors, and what are the corresponding eigenvalues?    Since is the projection of onto the -axis, in many cases and are not parallel. Notice, however, that all of the red vectors located along the -axis in the diagram are fixed by . So, for any of the red vectors we have , which means that each of the red vectors is an eigenvector of with the corresponding eigenvalue of .   Two eigenvectors graphed    The blue vectors along the y-axis are also eigenvectors. To see this, note that each of the blue vectors is of the form . But then So each of the blue vectors is an eigenvector of with the corresponding eigenvalue of .   "
},
{
  "id": "exp-eigenvectors",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#exp-eigenvectors",
  "type": "Exploration",
  "number": "6.1.2",
  "title": "",
  "body": " Let The GeoGebra interactive below shows the action of on several vectors. (Move the slider to to see the result of the transformation induced by .)         Note that vectors (and their scalar multiples) remain positioned along the same lines even as they change magnitude and direction. This indicates that and , along with all of their scalar multiples, are eigenvectors of . What are the eigenvalues associated with these eigenvectors?    The interactive shows the result of multiplication by . Consider one eigenvector at a time. Multiplication by what scalar would yield the same result?    Eigenvalue associated with is .  Eigenvalue associated with is .    "
},
{
  "id": "ex-eigsrotation",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-eigsrotation",
  "type": "Example",
  "number": "6.1.8",
  "title": "",
  "body": " Let Note that takes any vector in and rotates it , as we saw in . \\begin{center}  Rotations graphed     Continuation of above    Since rotates every vector in , every nonzero vector changes direction, so there are no eigenvectors in the plane. It turns out that does have eigenvectors and eigenvalues, but in order to find them we need to work with vectors whose entries are complex numbers. Since these vectors are not in , we cannot see them.  To follow the computation below, you need to recall that the imaginary unit is defined to by .  Consider the vector We compute: so is an eigenvector of . Its corresponding eigenvalue is   "
},
{
  "id": "Section-Describing-Eigenvalues-and-Eigenvectors-19",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Section-Describing-Eigenvalues-and-Eigenvectors-19",
  "type": "Remark",
  "number": "6.1.9",
  "title": "",
  "body": "  The first in-depth study of eigenvalues can probably be attributed to Fourier as he studied partial differential equations early in the nineteenth century, and in particular when he studied what is known as the heat equation. By the twentieth century mathematicians understood the connections between differential equations and eigenvalues. Systems of differential equations are often best represented by matrices, especially in the context of using computers to find numerical solutions. Most algorithms to solve these systems work by iterating some process, and eigenvalues along with their corresponding eigenvectors indicate what will happen to such a process after many repetitions.    "
},
{
  "id": "Section-The-Characteristic-Equation-3",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Section-The-Characteristic-Equation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial "
},
{
  "id": "exp-slowdown",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#exp-slowdown",
  "type": "Exploration",
  "number": "6.1.3",
  "title": "",
  "body": " If a vector is an eigenvector satisfying , then clearly it also satisfies . It seems natural at this point to try to factor. We would love to ``factor out'' . Here is the procedure: The middle step was necessary before factoring because we cannot subtract a scalar from an matrix .  In the spirit of connecting eigenvalues to previous notions, the following questions are intended to keep you linking concepts together.    Does the above show that any eigenvector of is in the row space, column space or the null space of the related matrix, ?    The null space.      Since eigenvectors are non-zero vectors, this means that will have eigenvectors if and only if the null space of is nontrivial. Which option is correct of the following is correct? The only way that can be nontrivial is if is equal to, less than or greater than .    Less than .    If the rank of an matrix is less than , then the matrix is singular. Since must be singular for any eigenvalue , we see that is an eigenvalue of if and only if   "
},
{
  "id": "def-chareqcharpoly",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#def-chareqcharpoly",
  "type": "Definition",
  "number": "6.1.12",
  "title": "",
  "body": "  The equation is called the characteristic equation of .   "
},
{
  "id": "ex-2x2eig",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-2x2eig",
  "type": "Example",
  "number": "6.1.13",
  "title": "",
  "body": "  Let Compute the eigenvalues of this matrix using the characteristic equation.     The characteristic equation has solutions and . These are the eigenvalues of .   "
},
{
  "id": "ex-2x2eig2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-2x2eig2",
  "type": "Example",
  "number": "6.1.14",
  "title": "",
  "body": " Let     Compute the eigenvalues of using the characteristic equation. (List your answers in an increasing order.)         "
},
{
  "id": "ex-3x3eig",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-3x3eig",
  "type": "Example",
  "number": "6.1.16",
  "title": "",
  "body": "  Let Compute the eigenvalues of using the characteristic equation.     Matrix has eigenvalues and .   "
},
{
  "id": "Subsection-Eigenvalues-7",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Subsection-Eigenvalues-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraic multiplicity "
},
{
  "id": "ex-3x3-complex-eig",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-3x3-complex-eig",
  "type": "Example",
  "number": "6.1.17",
  "title": "",
  "body": "  Let Compute the eigenvalues of this matrix.     So one of the eigenvalues of is . To get the other eigenvalues we must solve . Using the quadratic formula, we compute that and are also eigenvalues of .   "
},
{
  "id": "init-3x3tri",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#init-3x3tri",
  "type": "Exploration",
  "number": "6.1.4",
  "title": "",
  "body": " Let     Compute the eigenvalues of this matrix. (Hint: The eigenvalues are the diagonal entries of the matrix.)         What do you observe about the eigenvalues? What property of the matrix makes this ``coincidence\" possible? (Hint: is a triangular matrix).  "
},
{
  "id": "th-eigtri",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#th-eigtri",
  "type": "Theorem",
  "number": "6.1.19",
  "title": "",
  "body": "  Let be a triangular matrix. Then the eigenvalues of are the entries on the main diagonal.    See .   "
},
{
  "id": "th-eigdiag",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#th-eigdiag",
  "type": "Corollary",
  "number": "6.1.20",
  "title": "",
  "body": "  Let be a diagonal matrix. Then the eigenvalues of are the entries on the main diagonal.   "
},
{
  "id": "Subsection-Eigenvalues-14",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Subsection-Eigenvalues-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterative methods "
},
{
  "id": "th-eigenspace",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#th-eigenspace",
  "type": "Theorem",
  "number": "6.1.21",
  "title": "",
  "body": "  Let be an matrix and let be an eigenvalue of . Then the set of all eigenvectors associated with is a subspace of .    See and .   "
},
{
  "id": "def-eigspace",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#def-eigspace",
  "type": "Definition",
  "number": "6.1.22",
  "title": "",
  "body": "  The set of all eigenvectors associated with a given eigenvalue of a matrix is known as the eigenspace associated with that eigenvalue.   "
},
{
  "id": "ex-eigvect2x2eig",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-eigvect2x2eig",
  "type": "Example",
  "number": "6.1.23",
  "title": "",
  "body": "  (Finding eigenvectors for ) Recall that has eigenvalues and . Compute a basis for the eigenspace associated with each of these eigenvalues.    Eigenvectors associated with the eigenvalue are in the null space of . So we seek a basis for . We compute: From this we see that the eigenspace associated with consists of vectors of the form . This means that is one possible basis for .  In a similar way, we compute a basis for , the subspace of all eigenvectors associated with the eigenvalue . Now we compute: Vectors in the null space have the form This means that is one possible basis for the eigenspace .   "
},
{
  "id": "ex-eigvectors2x2eig2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-eigvectors2x2eig2",
  "type": "Example",
  "number": "6.1.24",
  "title": "",
  "body": "  (Finding eigenvectors for ) We know from that has eigenvalues and . Compute a basis for the eigenspace associated with each of these eigenvalues.    Let's begin by finding a basis for the eigenspace , which is the subspace of consisting of eigenvectors corresponding to the eigenvalue . We need to compute a basis for . We compute: From this we see that an eigenvector in has the form . This means that is one possible basis for the eigenspace . By letting , we obtain an arguably nicer-looking basis: .   "
},
{
  "id": "ex-eigvectors3x3eig",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-eigvectors3x3eig",
  "type": "Example",
  "number": "6.1.25",
  "title": "",
  "body": "  (Finding eigenvectors for ) We know from that has eigenvalues and . Compute a basis for the eigenspace associated to each of these eigenvalues.    We first find a basis for the eigenspace . We need to compute a basis for . We compute: Notice that there are two free variables. The eigenvectors in have the form So one possible basis for the eigenspace is given by Next we find a basis for the eigenspace . We need to compute a basis for . We compute: This time there is one free variable. From this we see The eigenvectors in have the form , so a possible basis for the eigenspace is given by    "
},
{
  "id": "ex-3x3-complex-ev",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-3x3-complex-ev",
  "type": "Example",
  "number": "6.1.26",
  "title": "",
  "body": "  (Finding eigenvectors for Example ) We know from' that has eigenvalues , , and . Compute a basis for the eigenspace associated with each eigenvalue.    We first find a basis for the eigenspace . We need to compute a basis for . We compute: From this we see that for any eigenvector in we have and , but is a free variable. So one possible basis for the eigenspace is given by Next we find a basis for the eigenspace . We need to compute a basis for . We compute: There is one free variable. Setting , we get and . From this we see that eigenvectors in have the form , so a possible basis for the eigenspace is given by We ask you in to show that is a basis for .   "
},
{
  "id": "th-zero-ew",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#th-zero-ew",
  "type": "Theorem",
  "number": "6.1.27",
  "title": "",
  "body": "  A square matrix has an eigenvalue of zero if and only if it is singular.    A square matrix is singular if and only if .(see ). But if and only if , which is true if and only if zero is an eigenvalue of .   "
},
{
  "id": "prob-checkeig1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-checkeig1",
  "type": "Exercise",
  "number": "6.1.4.1",
  "title": "",
  "body": "  Show that is an eigenvector of . What is its corresponding eigenvalue?        "
},
{
  "id": "prob-checkeig2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-checkeig2",
  "type": "Exercise",
  "number": "6.1.4.2",
  "title": "",
  "body": "  Show that is an eigenvector of . What is its corresponding eigenvalue?        "
},
{
  "id": "prob-checkeig3",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-checkeig3",
  "type": "Exercise",
  "number": "6.1.4.3",
  "title": "",
  "body": "  Show that is an eigenvector of . What is its corresponding eigenvalue?        "
},
{
  "id": "prob-eigprojmatrix",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigprojmatrix",
  "type": "Exercise",
  "number": "6.1.4.4",
  "title": "",
  "body": "  Let Note that takes any vector in and projects it onto the -axis, as we learned in . Which vectors in would be eigenvectors, and what are the corresponding eigenvalues?   "
},
{
  "id": "ex-eigsrotation2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#ex-eigsrotation2",
  "type": "Exercise",
  "number": "6.1.4.5",
  "title": "",
  "body": "  Returning to , let Show that is an eigenvector of . What is its corresponding eigenvalue?        "
},
{
  "id": "prob-eigenvalgeometry",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenvalgeometry",
  "type": "Exercise",
  "number": "6.1.4.6",
  "title": "",
  "body": "  Arguing geometrically, identify the linear transformation whose standard matrix has eigenvalues and .      Vertical Shear.      Horizontal Shear.      Counterclockwise Rotation through a angle.      Reflection About the line .      Horizontal Stretch.      Vertical Stretch.     "
},
{
  "id": "prob-eigvalvectorsofdiagmat",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigvalvectorsofdiagmat",
  "type": "Exercise",
  "number": "6.1.4.7",
  "title": "",
  "body": "  Let Can you find an eigenvector and its corresponding eigenvalue? Can you find another ``eigenpair''? Can you find all of the eigenvectors of ?   "
},
{
  "id": "prob-rotmatrixrealeig1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-rotmatrixrealeig1",
  "type": "Exercise",
  "number": "6.1.4.8",
  "title": "",
  "body": "  The rotation matrix in has complex eigenvectors and eigenvalues. Think geometrically to find an example of a (non-identity) rotation matrix with real eigenvectors and eigenvalues. Enter degree measure between 0 and 360.    Rotation through degrees.   "
},
{
  "id": "prob-eigenmultchoice1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenmultchoice1",
  "type": "Exercise",
  "number": "6.1.4.9",
  "title": "",
  "body": "  Can an eigenvalue have multiple eigenvectors associated with it?      Yes.      No.     "
},
{
  "id": "prob-eigenmultchoice2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenmultchoice2",
  "type": "Exercise",
  "number": "6.1.4.10",
  "title": "",
  "body": "  Can an eigenvector have multiple eigenvalues associated with it?      Yes      No     "
},
{
  "id": "prob-eigenScalarMult",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenScalarMult",
  "type": "Exercise",
  "number": "6.1.4.11",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-eigenspace1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenspace1",
  "type": "Exercise",
  "number": "6.1.4.12",
  "title": "",
  "body": "  Let and be eigenvectors of associated with . Show that is also an eigenvector of associated with . (This shows that the set of eigenvectors of associated with is closed under addition).   "
},
{
  "id": "prob-eigenspace2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenspace2",
  "type": "Exercise",
  "number": "6.1.4.13",
  "title": "",
  "body": "  Show that the set of eigenvectors of associated with is closed under scalar multiplication.   "
},
{
  "id": "prob-eigenspace3",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenspace3",
  "type": "Exercise",
  "number": "6.1.4.14",
  "title": "",
  "body": "        A basis for is A basis for is    "
},
{
  "id": "prob-eigenspace4",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigenspace4",
  "type": "Exercise",
  "number": "6.1.4.15",
  "title": "",
  "body": "        A basis for is . A basis for is    "
},
{
  "id": "prob-3x3tri-ev",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-3x3tri-ev",
  "type": "Exercise",
  "number": "6.1.4.16",
  "title": "",
  "body": "  Let Compute a basis for each of the eigenspaces of this matrix, , , and .   "
},
{
  "id": "prob-3x3fromKuttler1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-3x3fromKuttler1",
  "type": "Exercise",
  "number": "6.1.4.17",
  "title": "",
  "body": "  Let Compute the three eigenvalues of this matrix and find a basis for each of the eigenspaces of this matrix: , , and .    One of the eigenvalues of is -3.    The eigenvalues are The bases are, respectively,    "
},
{
  "id": "prob-3x3-complex-ev",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-3x3-complex-ev",
  "type": "Exercise",
  "number": "6.1.4.18",
  "title": "",
  "body": "  Complete by showing that a basis for is given by where is the eigenspace associated with the eigenvalue of the matrix    "
},
{
  "id": "prob-eigtri",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigtri",
  "type": "Exercise",
  "number": "6.1.4.19",
  "title": "",
  "body": "  Prove . (HINT: Proceed by induction on the dimension n. For the inductive step, compute by expanding along the first column (or row) if is upper (lower) triangular.)   "
},
{
  "id": "prob-eigvectorstransfr2-1",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigvectorstransfr2-1",
  "type": "Exercise",
  "number": "6.1.4.20",
  "title": "",
  "body": "  Recall that a vertical stretch\/compression of the plane is a linear transformation whose standard matrix is Find the eigenvalues of . Find a basis for the eigenspace corresponding to each eigenvalue.    A basis for is and a basis for is    "
},
{
  "id": "prob-eigvectorstransfr2-2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigvectorstransfr2-2",
  "type": "Exercise",
  "number": "6.1.4.21",
  "title": "",
  "body": "  Recall that a horizontal shear of the plane is a linear transformation whose standard matrix is Find the eigenvalue of and its corresponding eigenspace.    The eigenvalue is and a basis for its eigenspace is    "
},
{
  "id": "prob-rotmatrixrealeig2",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-rotmatrixrealeig2",
  "type": "Exercise",
  "number": "6.1.4.22",
  "title": "",
  "body": "  Recall that a counterclockwise rotation of the plane through angle is a linear transformation whose standard matrix is Verify that the eigenvalues of are Explain why is real number if and only if is a multiple of . After this, suppose is a muliple of . Then the eigenspaces corresponding to the two eigenvalues are the same. Which of the following describes the eigenspace?      All vectors in .      All vectors along the -axis.      All vectors along the -axis.      All vectors along the line .     "
},
{
  "id": "prob-eigvectorstransfr2-3",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#prob-eigvectorstransfr2-3",
  "type": "Exercise",
  "number": "6.1.4.23",
  "title": "",
  "body": "  Verify that the eigenvalues of are and . Then find a basis for eigenspaces and . (For simplicity, assume that .)    A basis for is and a basis for is    "
},
{
  "id": "Section-Describing-Eigenvalues-and-Eigenvectors-23-16-3",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Section-Describing-Eigenvalues-and-Eigenvectors-23-16-3",
  "type": "Exercise",
  "number": "6.1.4.24",
  "title": "",
  "body": "  Choose the best description of .      All vectors in .      All vectors with ``slope\" .      All vectors with ``slope\" .      All vectors with ``slope\" .     "
},
{
  "id": "Section-Describing-Eigenvalues-and-Eigenvectors-23-16-4",
  "level": "2",
  "url": "Section-Describing-Eigenvalues-and-Eigenvectors.html#Section-Describing-Eigenvalues-and-Eigenvectors-23-16-4",
  "type": "Exercise",
  "number": "6.1.4.25",
  "title": "",
  "body": "  Choose the best description of .      All vectors along the line .      All vectors parallel to the -axis.      All vectors parallel to the -axis.      All vectors perpendicular to the line .     "
},
{
  "id": "Section-Similar-and-Diagonalizable-Matrices",
  "level": "1",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html",
  "type": "Section",
  "number": "6.2",
  "title": "Similar and Diagonalizable Matrices",
  "body": " Similar and Diagonalizable Matrices  Let and be matrices. Then the products and are both matrices. In most cases the products and are not equal. However, for some pairs of matrices and , we are able to find an invertible matrix such that . This leads to the following definition.    If and are matrices, we say that and are similar , if for some invertible matrix . In this case we write     The following theorem shows that similarity ( ) satisfies reflexive , symmetric , and transitive properties.    Similarity is an equivalence relation , i.e. for matrices and ,    (reflexive)    If , then (symmetric)    If and , then (transitive)        : It is clear that (let ). If then for some invertible matrix , and so But then which shows that . Now suppose and . Then there exist invertible matrices such that Then, showing that is similar to .    Any relation satisfying the reflexive, symmetric and transitive properties is called an equivalence relation . proves that similarity between matrices is an equivalence relation . gives a good example of a relation that is NOT an equivalence relation. As we will see later, similar matrices share many properties.  Before proceeding to explore these properties, we pause to introduce a simple matrix function that we will continue to use throughout the course. Another important quantity we can compute is called the trace of a matrix.    The trace of an matrix , abbreviated , is defined to be the sum of the main diagonal elements of . In other words, if , then We may also write .      It is easy to see that and that holds for all matrices and and all scalars . The following fact is more surprising.      Let and be matrices. Then .    Write and . For each , the -entry of the matrix is given as follows: Hence Similarly we have Since these two double sums are the same, we have proven the theorem.    The following theorem lists a number of properties shared by similar matrices.    If and are matrices and , then    ,     ,     ,     and have the same characteristic equations, and     and have the same eigenvalues.       Let for some invertible matrix .  For , because (see ).  Similarly, for , , because multiplication by an invertible matrix cannot change the rank. To see this, note that any invertible matrix is a product of elementary matrices. Multiplying by elementary matrices is equivalent to performing elementary row (column) operations on , which does not change the row (column) space, nor the rank. It follows that similar matrices have the same rank.  For , we make use of : As for , so and have the same characteristic equation.  Finally, implies because the eigenvalues of a matrix are the roots of its characteristic polynomial.      Sharing the five properties in does not guarantee that two matrices are similar. The matrices have the same determinant, rank, trace, characteristic polynomial, and eigenvalues, but they are not similar because for any invertible matrix .    Even though the properties in cannot be used to show two matrices are similar, these properties come in handy for showing that two matrices are NOT similar.  With all the abstract business running around, let us turn to a concretete example.    Are the matrices and similar?    A quick check shows us , and both matrices are seen to be invertible, so they have the same rank. However, and , so the matrices are not similar.    The next theorem shows that similarity is preserved under inverses, transposes, and powers:    If and are matrices and , then    ,     , and     for all integers .       See .     Diagonalizable Matrices and Multiplicity  Recall that a diagonal matrix  is a matrix containing a zero in every entry except those on the main diagonal. More precisely, if is the entry of a diagonal matrix , then unless . Such matrices look like the following. where is a number which might not be zero. Diagonal matrices have some nice properties, as we demonstrate below.   Let us warm up with a small computation.    Let Compute and .         Notice the patterns present in the product matrices. Each row of is the same as its corresponding row of multiplied by the scalar which is the corresponding diagonal element of . In the product , it is the columns of that have been multiplied by the diagonal elements. These patterns hold in general for any diagonal matrix, and they are fundamental to understanding diagonalization, the process we discuss below.     Let be an matrix. Then is said to be diagonalizable if there exists an invertible matrix such that where is a diagonal matrix. In other words, a matrix is diagonalizable if it is similar to a diagonal matrix, .    If we are given a matrix that is diagonalizable, then we can write for some matrix , or, equivalently, If we pause to examine , the work that we did in can help us to understand how to find that will diagonalize . The product is formed by multiplying each column of by a scalar which is the corresponding element on the diagonal of . To restate this, if is column in our matrix , then tells us that where is the th diagonal element of . Of course, is very familiar! We see that if we are able to diagonalize a matrix , the columns of matrix will be the eigenvectors of , and the corresponding diagonal entries of will be the corresponding eigenvalues of . This is summed up in the following theorem.    An matrix is diagonalizable if and only if there is an invertible matrix given by where the columns are eigenvectors of . Moreover, if is diagonalizable, the corresponding eigenvalues of are the diagonal entries of the diagonal matrix .    Suppose is given as above as an invertible matrix whose columns are eigenvectors of . To show that is diagonalizable, we will show which is equivalent to . We have while We can complete this half of the proof by comparing columns, and noting that for since the are eigenvectors of and the are corresponding eigenvalues of .  Conversely, suppose is diagonalizable so that Let where the columns are the vectors and Then and so showing the are eigenvectors of and the are eigenvalues.    Notice that because the matrix defined above is invertible it follows that the set of eigenvectors of , , is a basis of .  We demonstrate the concept given in the above theorem in the next example. Note that not only are the columns of the matrix formed by eigenvectors, but must be invertible, and therefore must consist of a linearly independent set of eigenvectors.    Let Find an invertible matrix and a diagonal matrix such that .    We will use eigenvectors of as the columns of , and the corresponding eigenvalues of as the diagonal entries of . The eigenvalues of are , and . We leave these computations as exercises, as well as the computations to find a basis for each eigenspace. One possible basis for , the eigenspace corresponding to , is while a basis for is given by . We construct the matrix by using these basis elements as columns. You can verify (and will do so during exercise) that Thus, You can see that the result here is a diagonal matrix where the entries on the main diagonal are the eigenvalues of . Notice that eigenvalues on the main diagonal must be in the same order as the corresponding eigenvectors in .    It is often easier to work with matrices that are diagonalizable, as the next Exploration demonstrates.   Let Would it be easier to compute or if you had to do so by hand, without a computer? Certainly is easier, due to the number of zero entries!    Do compute together with . Feel free to use a program or online calculator tool for , but do by hand.    We see that raising a diagonal matrix to a power amounts to simply raising each entry to that same power, whereas computing requires many more calculations. However, we learned in that is similar to , and we can use this to make our computation easier. This is because With this in mind, it is not as daunting to calculate by hand. We can compute the product quite easily since is diagonal, as we learned in . That leaves just one product of matrices to compute by hand to compute . And the savings in work would certainly be more pronounced for larger matrices or for powers larger that 5.   In , because matrix was diagonalizable, we were able to cut down on computations. When we chose to work with and instead of we worked with the eigenvalues and eigenvectors of . Each column of is an eigenvector of , and so we repeatedly made use of the following theorem (with ).    Let be an matrix and suppose . Then     We prove this theorem by induction on . Clearly holds when , as that was given. For the inductive step, suppose that we know . Then as desired.    Matrix from the and had a repeated eigenvalue of 2. The next theorem and corollary show that matrices which have distinct eigenvalues (where none are repeated) have desirable properties.    Let be an matrix, and suppose that has distinct eigenvalues . For each , let be a -eigenvector of . Then is linearly independent.    We prove this by induction on , the number of vectors in the set. If , then is a linearly independent set because . In general, suppose we have established that the theorem is true for some . Given eigenvectors , suppose We must show that each . Multiply both sides of on the left by and use the fact that to get If we multiply by and subtract the result from , the first terms cancel and we obtain Since correspond to distinct eigenvalues , the set is linearly independent by the induction hypothesis. Hence, and so because the are distinct. It follows that becomes , which implies that because , and the proof is complete.    The corollary that follows from this theorem gives a useful tool in determining if is diagonalizable.    Let be an matrix and suppose it has distinct eigenvalues. Then it follows that is diagonalizable.      Note that is NOT an ``if and only if statement\". This means that if has repeated eigenvalues it is still sometimes possible to diagonalize , as seen in .      If we are able to diagonalize , say , we say that is an eigenvalue decomposition of .    Not every matrix has an eigenvalue decomposition. Sometimes we cannot find an invertible matrix such that . Consider the following example.    Let If possible, find an invertible matrix and a diagonal matrix so that .    We see immediately (how?) that the eigenvalues of are and . To find , the next step would be to find a basis for the corresponding eigenspace . We solve the equation . Writing this equation as an augmented matrix, we already have a matrix in row echelon form: We see that the eigenvectors in are of the form so a basis for the eigenspace is given by . It is easy to see that we cannot form an invertible matrix , because any two eigenvectors will be of the form , and so the second row of would have a row of zeros, and could not be invertible. Hence cannot be diagonalized.    We saw earlier in that an matrix with distinct eigenvalues is diagonalizable. It turns out that there are other useful diagonalizability tests.  Recall that the algebraic multiplicity of an eigenvalue is the number of times that it occurs as a root of the characteristic polynomial.    The geometric multiplicity of an eigenvalue is the dimension of the corresponding eigenspace .    Consider now the following lemma.    Let be an matrix, and let be the eigenspace corresponding to the eigenvalue which has algebraic multiplicity . Then In other words, the geometric multiplicity of an eigenvalue is less than or equal to the algebraic multiplicity of that same eigenvalue.    Let be the geometric multiplicity of , i.e., . Suppose is a basis for the eigenspace . Let be any invertible matrix having as its first columns, say In block form we may write where is , is , is , and is . We observe . This implies Therefore, We finish the proof by comparing the characteristic polynomials on both sides of this equation, and making use of the fact that similar matrices have the same characteristic polynomials. We see that the characteristic polynomial of has as a factor. This tells us that algebraic multiplicity of is at least , proving the desired inequality.    This result tells us that if is an eigenvalue of , then the number of linearly independent -eigenvectors is never more than the multiplicity of . We now use this fact to provide a useful diagonalizability condition.    Let be an matrix . Then is diagonalizable if and only if for each eigenvalue of , the algebraic multiplicity of is equal to the geometric multiplicity of .    Suppose is diagonalizable and let be the distinct eigenvalues of , with algebraic multiplicities , respectively and geometric multiplicities , respectively. Since is diagonalizable, implies that . By applying  times, we have which is only possible if for . Conversely, if the geometric multiplicity equals the algebraic multiplicity of each eigenvalue, then obtaining a basis for each eigenspace yields eigenvectors. Applying , we know that these eigenvectors are linearly independent, so implies that is diagonalizable.        At the beginning of this section we mentioned that similarity of matrices is an equivalence relation . An equivalence relation is a binary relation on elements of a set that has the following properties:   The reflexive property: for every     The symmetric property: If , then for every     The transitive property: If and , then for every    Let be the set of all positive integers. We can show that the relation ``less than'' (symbolized by ) is NOT an equivalence relation on this set. To see this, note that ``less than'' is not reflexive, because is not true for any positive integer .   Is the relation ``less than'' symmetric?    Is the relation ``less than'' transitive?       The relation \"less than\" not symmetric, but it is transitive.      Another relation between matrices we have studied in this course is that two matrices can be ``row equivalent''. Is the relation ``row equivalent''   reflexive?    symmetric?    transitive?       The relation is reflexive, symmetric and transitive.      By computing the trace, determinant, and rank, show that and are not similar in each case.                                         Show that are not similar.      Prove .      If is invertible, show that is similar to for all .      Show that the only matrix similar to a scalar matrix , where is any number, is itself.      Let be an eigenvalue of with corresponding eigenvector . If is similar to , show that is an eigenvector of corresponding to .       In this exercise you will \"fill in the details\" of .     Find the eigenvalues of matrix       Find a basis for each eigenspace of the matrix .      Compute the inverse of       Compute .      Show that computing the inverse of is not really necessary by comparing the products and .       In each case, decide whether the matrix is diagonalizable. If so, find such that is diagonal.                             Diagonalizable.    Diagonalizable.    Diagonalizable.    Not diagonalizable.         Let denote an upper triangular matrix.   If all the main diagonal entries of are distinct, show that is diagonalizable.    If all the main diagonal entries of are equal, show that is diagonalizable only if it is already diagonal.    Show that is diagonalizable while is not diagonalizable.       For part (b): The eigenvalues of are all equal (they are the diagonal elements), so if is diagonal, then . Hence .      Let be a diagonalizable matrix with eigenvalues (including multiplicities). Show that:                     Show that two diagonalizable matrices are similar if and only if they have the same eigenvalues with the same multiplicities.    If is diagonalizable, show that .    Show that if         "
},
{
  "id": "def-similar",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#def-similar",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  If and are matrices, we say that and are similar , if for some invertible matrix . In this case we write    "
},
{
  "id": "Section-Similar-and-Diagonalizable-Matrices-4",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Similar-and-Diagonalizable-Matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "similarity reflexive symmetric transitive "
},
{
  "id": "th-similarityequivalence",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-similarityequivalence",
  "type": "Theorem",
  "number": "6.2.2",
  "title": "",
  "body": "  Similarity is an equivalence relation , i.e. for matrices and ,    (reflexive)    If , then (symmetric)    If and , then (transitive)        : It is clear that (let ). If then for some invertible matrix , and so But then which shows that . Now suppose and . Then there exist invertible matrices such that Then, showing that is similar to .   "
},
{
  "id": "Section-Similar-and-Diagonalizable-Matrices-6",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Similar-and-Diagonalizable-Matrices-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation equivalence relation "
},
{
  "id": "Section-Similar-and-Diagonalizable-Matrices-7",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Similar-and-Diagonalizable-Matrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace "
},
{
  "id": "def-trace",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#def-trace",
  "type": "Definition",
  "number": "6.2.3",
  "title": "",
  "body": "  The trace of an matrix , abbreviated , is defined to be the sum of the main diagonal elements of . In other words, if , then We may also write .   "
},
{
  "id": "Section-Similar-and-Diagonalizable-Matrices-9",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Similar-and-Diagonalizable-Matrices-9",
  "type": "Remark",
  "number": "6.2.4",
  "title": "",
  "body": "  It is easy to see that and that holds for all matrices and and all scalars . The following fact is more surprising.   "
},
{
  "id": "th-trAB-trBA",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-trAB-trBA",
  "type": "Theorem",
  "number": "6.2.5",
  "title": "",
  "body": "  Let and be matrices. Then .    Write and . For each , the -entry of the matrix is given as follows: Hence Similarly we have Since these two double sums are the same, we have proven the theorem.   "
},
{
  "id": "th-properties-similar",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-properties-similar",
  "type": "Theorem",
  "number": "6.2.6",
  "title": "",
  "body": "  If and are matrices and , then    ,     ,     ,     and have the same characteristic equations, and     and have the same eigenvalues.       Let for some invertible matrix .  For , because (see ).  Similarly, for , , because multiplication by an invertible matrix cannot change the rank. To see this, note that any invertible matrix is a product of elementary matrices. Multiplying by elementary matrices is equivalent to performing elementary row (column) operations on , which does not change the row (column) space, nor the rank. It follows that similar matrices have the same rank.  For , we make use of : As for , so and have the same characteristic equation.  Finally, implies because the eigenvalues of a matrix are the roots of its characteristic polynomial.   "
},
{
  "id": "fivePropSim",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#fivePropSim",
  "type": "Remark",
  "number": "6.2.7",
  "title": "",
  "body": "  Sharing the five properties in does not guarantee that two matrices are similar. The matrices have the same determinant, rank, trace, characteristic polynomial, and eigenvalues, but they are not similar because for any invertible matrix .   "
},
{
  "id": "ex-areTheySimilar",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#ex-areTheySimilar",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": "  Are the matrices and similar?    A quick check shows us , and both matrices are seen to be invertible, so they have the same rank. However, and , so the matrices are not similar.   "
},
{
  "id": "th-other-properties-similar",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-other-properties-similar",
  "type": "Theorem",
  "number": "6.2.9",
  "title": "",
  "body": "  If and are matrices and , then    ,     , and     for all integers .       See .   "
},
{
  "id": "Section-Diagonalizable-Matrices-and-Multiplicity-2",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Diagonalizable-Matrices-and-Multiplicity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonal matrix "
},
{
  "id": "init-multiplydiag",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#init-multiplydiag",
  "type": "Exploration",
  "number": "6.2.1",
  "title": "",
  "body": " Let us warm up with a small computation.    Let Compute and .         Notice the patterns present in the product matrices. Each row of is the same as its corresponding row of multiplied by the scalar which is the corresponding diagonal element of . In the product , it is the columns of that have been multiplied by the diagonal elements. These patterns hold in general for any diagonal matrix, and they are fundamental to understanding diagonalization, the process we discuss below.  "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#def-diagonalizable",
  "type": "Definition",
  "number": "6.2.11",
  "title": "",
  "body": "  Let be an matrix. Then is said to be diagonalizable if there exists an invertible matrix such that where is a diagonal matrix. In other words, a matrix is diagonalizable if it is similar to a diagonal matrix, .   "
},
{
  "id": "th-eigenvectorsanddiagonalizable",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-eigenvectorsanddiagonalizable",
  "type": "Theorem",
  "number": "6.2.12",
  "title": "",
  "body": "  An matrix is diagonalizable if and only if there is an invertible matrix given by where the columns are eigenvectors of . Moreover, if is diagonalizable, the corresponding eigenvalues of are the diagonal entries of the diagonal matrix .    Suppose is given as above as an invertible matrix whose columns are eigenvectors of . To show that is diagonalizable, we will show which is equivalent to . We have while We can complete this half of the proof by comparing columns, and noting that for since the are eigenvectors of and the are corresponding eigenvalues of .  Conversely, suppose is diagonalizable so that Let where the columns are the vectors and Then and so showing the are eigenvectors of and the are eigenvalues.   "
},
{
  "id": "ex-diagonalizematrix",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#ex-diagonalizematrix",
  "type": "Example",
  "number": "6.2.13",
  "title": "",
  "body": "  Let Find an invertible matrix and a diagonal matrix such that .    We will use eigenvectors of as the columns of , and the corresponding eigenvalues of as the diagonal entries of . The eigenvalues of are , and . We leave these computations as exercises, as well as the computations to find a basis for each eigenspace. One possible basis for , the eigenspace corresponding to , is while a basis for is given by . We construct the matrix by using these basis elements as columns. You can verify (and will do so during exercise) that Thus, You can see that the result here is a diagonal matrix where the entries on the main diagonal are the eigenvalues of . Notice that eigenvalues on the main diagonal must be in the same order as the corresponding eigenvectors in .   "
},
{
  "id": "exp-motivate-diagonalization",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#exp-motivate-diagonalization",
  "type": "Exploration",
  "number": "6.2.2",
  "title": "",
  "body": " Let Would it be easier to compute or if you had to do so by hand, without a computer? Certainly is easier, due to the number of zero entries!    Do compute together with . Feel free to use a program or online calculator tool for , but do by hand.    We see that raising a diagonal matrix to a power amounts to simply raising each entry to that same power, whereas computing requires many more calculations. However, we learned in that is similar to , and we can use this to make our computation easier. This is because With this in mind, it is not as daunting to calculate by hand. We can compute the product quite easily since is diagonal, as we learned in . That leaves just one product of matrices to compute by hand to compute . And the savings in work would certainly be more pronounced for larger matrices or for powers larger that 5.  "
},
{
  "id": "th-eigpowers",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-eigpowers",
  "type": "Theorem",
  "number": "6.2.15",
  "title": "",
  "body": "  Let be an matrix and suppose . Then     We prove this theorem by induction on . Clearly holds when , as that was given. For the inductive step, suppose that we know . Then as desired.   "
},
{
  "id": "th-linindepeigenvectors",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-linindepeigenvectors",
  "type": "Theorem",
  "number": "6.2.16",
  "title": "",
  "body": "  Let be an matrix, and suppose that has distinct eigenvalues . For each , let be a -eigenvector of . Then is linearly independent.    We prove this by induction on , the number of vectors in the set. If , then is a linearly independent set because . In general, suppose we have established that the theorem is true for some . Given eigenvectors , suppose We must show that each . Multiply both sides of on the left by and use the fact that to get If we multiply by and subtract the result from , the first terms cancel and we obtain Since correspond to distinct eigenvalues , the set is linearly independent by the induction hypothesis. Hence, and so because the are distinct. It follows that becomes , which implies that because , and the proof is complete.   "
},
{
  "id": "th-distincteigenvalues",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-distincteigenvalues",
  "type": "Corollary",
  "number": "6.2.17",
  "title": "",
  "body": "  Let be an matrix and suppose it has distinct eigenvalues. Then it follows that is diagonalizable.   "
},
{
  "id": "Section-Diagonalizable-Matrices-and-Multiplicity-18",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Diagonalizable-Matrices-and-Multiplicity-18",
  "type": "Remark",
  "number": "6.2.18",
  "title": "",
  "body": "  Note that is NOT an ``if and only if statement\". This means that if has repeated eigenvalues it is still sometimes possible to diagonalize , as seen in .   "
},
{
  "id": "def-eigdecomposition",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#def-eigdecomposition",
  "type": "Definition",
  "number": "6.2.19",
  "title": "",
  "body": "  If we are able to diagonalize , say , we say that is an eigenvalue decomposition of .   "
},
{
  "id": "ex-impossiblediagonalize",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#ex-impossiblediagonalize",
  "type": "Example",
  "number": "6.2.20",
  "title": "",
  "body": "  Let If possible, find an invertible matrix and a diagonal matrix so that .    We see immediately (how?) that the eigenvalues of are and . To find , the next step would be to find a basis for the corresponding eigenspace . We solve the equation . Writing this equation as an augmented matrix, we already have a matrix in row echelon form: We see that the eigenvectors in are of the form so a basis for the eigenspace is given by . It is easy to see that we cannot form an invertible matrix , because any two eigenvectors will be of the form , and so the second row of would have a row of zeros, and could not be invertible. Hence cannot be diagonalized.   "
},
{
  "id": "Section-Diagonalizable-Matrices-and-Multiplicity-23",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#Section-Diagonalizable-Matrices-and-Multiplicity-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraic multiplicity "
},
{
  "id": "def-geommulteig",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#def-geommulteig",
  "type": "Definition",
  "number": "6.2.21",
  "title": "",
  "body": "  The geometric multiplicity of an eigenvalue is the dimension of the corresponding eigenspace .   "
},
{
  "id": "lemma-dimeigenspace",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#lemma-dimeigenspace",
  "type": "Lemma",
  "number": "6.2.22",
  "title": "",
  "body": "  Let be an matrix, and let be the eigenspace corresponding to the eigenvalue which has algebraic multiplicity . Then In other words, the geometric multiplicity of an eigenvalue is less than or equal to the algebraic multiplicity of that same eigenvalue.    Let be the geometric multiplicity of , i.e., . Suppose is a basis for the eigenspace . Let be any invertible matrix having as its first columns, say In block form we may write where is , is , is , and is . We observe . This implies Therefore, We finish the proof by comparing the characteristic polynomials on both sides of this equation, and making use of the fact that similar matrices have the same characteristic polynomials. We see that the characteristic polynomial of has as a factor. This tells us that algebraic multiplicity of is at least , proving the desired inequality.   "
},
{
  "id": "th-diagonalizability",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#th-diagonalizability",
  "type": "Theorem",
  "number": "6.2.23",
  "title": "",
  "body": "  Let be an matrix . Then is diagonalizable if and only if for each eigenvalue of , the algebraic multiplicity of is equal to the geometric multiplicity of .    Suppose is diagonalizable and let be the distinct eigenvalues of , with algebraic multiplicities , respectively and geometric multiplicities , respectively. Since is diagonalizable, implies that . By applying  times, we have which is only possible if for . Conversely, if the geometric multiplicity equals the algebraic multiplicity of each eigenvalue, then obtaining a basis for each eigenspace yields eigenvectors. Applying , we know that these eigenvectors are linearly independent, so implies that is diagonalizable.   "
},
{
  "id": "prob-lessthan",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-lessthan",
  "type": "Exercise",
  "number": "6.2.2.1",
  "title": "",
  "body": "  At the beginning of this section we mentioned that similarity of matrices is an equivalence relation . An equivalence relation is a binary relation on elements of a set that has the following properties:   The reflexive property: for every     The symmetric property: If , then for every     The transitive property: If and , then for every    Let be the set of all positive integers. We can show that the relation ``less than'' (symbolized by ) is NOT an equivalence relation on this set. To see this, note that ``less than'' is not reflexive, because is not true for any positive integer .   Is the relation ``less than'' symmetric?    Is the relation ``less than'' transitive?       The relation \"less than\" not symmetric, but it is transitive.   "
},
{
  "id": "prob-lessthan3",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-lessthan3",
  "type": "Exercise",
  "number": "6.2.2.2",
  "title": "",
  "body": "  Another relation between matrices we have studied in this course is that two matrices can be ``row equivalent''. Is the relation ``row equivalent''   reflexive?    symmetric?    transitive?       The relation is reflexive, symmetric and transitive.   "
},
{
  "id": "notsimilar-a",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#notsimilar-a",
  "type": "Exercise",
  "number": "6.2.2.3",
  "title": "",
  "body": "      "
},
{
  "id": "notsimilar-b",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#notsimilar-b",
  "type": "Exercise",
  "number": "6.2.2.4",
  "title": "",
  "body": "      "
},
{
  "id": "notsimilar-c",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#notsimilar-c",
  "type": "Exercise",
  "number": "6.2.2.5",
  "title": "",
  "body": "      "
},
{
  "id": "prob-notsimilar-d",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-notsimilar-d",
  "type": "Exercise",
  "number": "6.2.2.6",
  "title": "",
  "body": "      "
},
{
  "id": "prob-notsimilar-e",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-notsimilar-e",
  "type": "Exercise",
  "number": "6.2.2.7",
  "title": "",
  "body": "      "
},
{
  "id": "prob-notsimilar-4x4",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-notsimilar-4x4",
  "type": "Exercise",
  "number": "6.2.2.8",
  "title": "",
  "body": "  Show that are not similar.   "
},
{
  "id": "prob-similarproperties",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-similarproperties",
  "type": "Exercise",
  "number": "6.2.2.9",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "prob-similarproperties-invertible",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-similarproperties-invertible",
  "type": "Exercise",
  "number": "6.2.2.10",
  "title": "",
  "body": "  If is invertible, show that is similar to for all .   "
},
{
  "id": "prob-similarproperties-rI",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-similarproperties-rI",
  "type": "Exercise",
  "number": "6.2.2.11",
  "title": "",
  "body": "  Show that the only matrix similar to a scalar matrix , where is any number, is itself.   "
},
{
  "id": "prob-similarproperties-ev",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-similarproperties-ev",
  "type": "Exercise",
  "number": "6.2.2.12",
  "title": "",
  "body": "  Let be an eigenvalue of with corresponding eigenvector . If is similar to , show that is an eigenvector of corresponding to .   "
},
{
  "id": "prob-ex-diagonalizematrix1",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-ex-diagonalizematrix1",
  "type": "Exercise",
  "number": "6.2.2.13",
  "title": "",
  "body": "  Find the eigenvalues of matrix    "
},
{
  "id": "prob-ex-diagonalizematrix2",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-ex-diagonalizematrix2",
  "type": "Exercise",
  "number": "6.2.2.14",
  "title": "",
  "body": "  Find a basis for each eigenspace of the matrix .   "
},
{
  "id": "prob-ex-diagonalizematrix3",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-ex-diagonalizematrix3",
  "type": "Exercise",
  "number": "6.2.2.15",
  "title": "",
  "body": "  Compute the inverse of    "
},
{
  "id": "prob-ex-diagonalizematrix5",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-ex-diagonalizematrix5",
  "type": "Exercise",
  "number": "6.2.2.16",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "prob-ex-diagonalizematrix4",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prob-ex-diagonalizematrix4",
  "type": "Exercise",
  "number": "6.2.2.17",
  "title": "",
  "body": "  Show that computing the inverse of is not really necessary by comparing the products and .   "
},
{
  "id": "prb-diagonalizable",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prb-diagonalizable",
  "type": "Exercise",
  "number": "6.2.2.18",
  "title": "",
  "body": "  In each case, decide whether the matrix is diagonalizable. If so, find such that is diagonal.                             Diagonalizable.    Diagonalizable.    Diagonalizable.    Not diagonalizable.      "
},
{
  "id": "prb-upper-triangular-case",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prb-upper-triangular-case",
  "type": "Exercise",
  "number": "6.2.2.19",
  "title": "",
  "body": "  Let denote an upper triangular matrix.   If all the main diagonal entries of are distinct, show that is diagonalizable.    If all the main diagonal entries of are equal, show that is diagonalizable only if it is already diagonal.    Show that is diagonalizable while is not diagonalizable.       For part (b): The eigenvalues of are all equal (they are the diagonal elements), so if is diagonal, then . Hence .   "
},
{
  "id": "prb-det-and-tr-diagonalizable",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prb-det-and-tr-diagonalizable",
  "type": "Exercise",
  "number": "6.2.2.20",
  "title": "",
  "body": "  Let be a diagonalizable matrix with eigenvalues (including multiplicities). Show that:               "
},
{
  "id": "prb-A-sim-A-T-diagonalizable",
  "level": "2",
  "url": "Section-Similar-and-Diagonalizable-Matrices.html#prb-A-sim-A-T-diagonalizable",
  "type": "Exercise",
  "number": "6.2.2.21",
  "title": "",
  "body": "     Show that two diagonalizable matrices are similar if and only if they have the same eigenvalues with the same multiplicities.    If is diagonalizable, show that .    Show that if       "
},
{
  "id": "Section-Dot-Product",
  "level": "1",
  "url": "Section-Dot-Product.html",
  "type": "Section",
  "number": "7.1",
  "title": "The Dot Product",
  "body": " The Dot Product   The Dot Product    Let and be vectors in . The dot product of and , denoted by , is given by     We will see the dot product reppear over and over again. As such, an example of a computation is reasonable to start with:   Find if and .    Note that the dot product of two vectors is a scalar. For this reason, the dot product is sometimes called a scalar product .  A quick examination of will convince you that the dot product is commutative . In other words, . This and other properties of the dot product are stated below.    The following properties hold for vectors , and in and scalar in .                        , and if and only if .          and if and only if and are orthogonal.       We will prove . The remaining properties are left as exercises.     We will illustrate with an example.   Let . Use to illustrate of .    If we take the square root of both sides of the equation in , we get an alternative way to think of the length of a vector ( ).   Length of a Vector   Let be a vector in , then the length , or the magnitude , of is given by     Let's also look at an example of .   Note that the standard unit vectors in are orthogonal--see . Indeed, In general, by , for standard unit vectors in with , the vectors and are orthogonal since .     Orthogonal Projections  Given a line and a vector emanating from a point on , it is sometimes convenient to express as the sum of a vector , parallel to , and a vector , perpendicular to . If you have taken a physics course, you may have seen a force vector decomposed into the sum of two components: one parallel and one perpendicular to the direction of motion.      Suppose is a direction vector for . Then for some scalar . Our goal is to find . We conclude that and The vector is called the projection of onto . In our discussion, is a direction vector for line . So, we can also say that is the projection of onto .  To find , observe that .    Let be a vector, and let be a non-zero vector. The projection of onto is given by     Although we will revisit the projection in greater detail much later, we illustrate it in an explicit case with a picture.   Find the projection of , shown below, onto the line given by .      We begin by finding vectors and . The tail of is located at , and the head of is at . Using the ``head-tail\" formula we get The direction vector for the line is We find that and . Thus      Distance from a Point to a Line  The shortest distance from a point to a line is the length of the perpendicular line segment dropped from the point to the line. Vector projection formula will help us find the length of such a perpendicular.   Let be a point in . Suppose line is given by parametric equations         Find the distance from to .  We will first construct a vector by picking an arbitrary point on to be the tail of and using point as the head of . An easy point to choose on line is the point that corresponds to . Now we have       The line has a direction vector We will now find the projection of onto        Next, we find .       Finally, to find the distance between point and line , we find the magnitude of .        Find the dot product of and if            Find the dot product of and if            Use vector to illustrate of .      Prove , , , , and of .      From the given list of vector pairs, identify ALL pairs of vectors that lie on perpendicular lines.    ,      ,      ,      ,    Also compute for each pair. What do you observe?    You may want to draw a picture and think about what you know about slopes of perpendicular lines.      For each problem below   Find the value of that will make vectors and perpendicular.   Hint: Think of the -component as the ``run\" and the -component as the ``rise\", then use what you know about slopes of perpendicular lines.    Find .                                                   Vector that lies on the line , has the form . Assuming that , find the general form for a vector that lies on a line perpendicular to .    Find .    Formulate a conjecture about the dot product of perpendicular vectors.       What do you know about the slopes of perpendicular lines?      Find .     Let and . Compute .           Suppose and . Compute the projection of onto .            Find the projection of vector onto line . (If entering answers in decimal form, round to the nearest one hundredth.)               Find the distance between point and line .               Show that does not depend on the length of by proving that for . What does this result mean geometrically? Illustrate your response with a diagram.      Find the radius of a circle centered at if the line is tangent to the circle. Enter your response as a fraction.     The graph below shows the line together with a circle of radius . Change the value of to the radius you have found to visualize the correct answer.   A larger version of this activity is available here .       "
},
{
  "id": "def-dotproduct",
  "level": "2",
  "url": "Section-Dot-Product.html#def-dotproduct",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  Let and be vectors in . The dot product of and , denoted by , is given by    "
},
{
  "id": "ex-dotex",
  "level": "2",
  "url": "Section-Dot-Product.html#ex-dotex",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": " Find if and .   "
},
{
  "id": "Subsection-The-Dot-Product-5",
  "level": "2",
  "url": "Section-Dot-Product.html#Subsection-The-Dot-Product-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar product "
},
{
  "id": "Subsection-The-Dot-Product-6",
  "level": "2",
  "url": "Section-Dot-Product.html#Subsection-The-Dot-Product-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative "
},
{
  "id": "th-dotproductproperties",
  "level": "2",
  "url": "Section-Dot-Product.html#th-dotproductproperties",
  "type": "Theorem",
  "number": "7.1.3",
  "title": "",
  "body": "  The following properties hold for vectors , and in and scalar in .                        , and if and only if .          and if and only if and are orthogonal.       We will prove . The remaining properties are left as exercises.    "
},
{
  "id": "ex-exprop6",
  "level": "2",
  "url": "Section-Dot-Product.html#ex-exprop6",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": " Let . Use to illustrate of .   "
},
{
  "id": "cor-length_via_dotprod",
  "level": "2",
  "url": "Section-Dot-Product.html#cor-length_via_dotprod",
  "type": "Corollary",
  "number": "7.1.5",
  "title": "Length of a Vector.",
  "body": " Length of a Vector   Let be a vector in , then the length , or the magnitude , of is given by    "
},
{
  "id": "Subsection-The-Dot-Product-13",
  "level": "2",
  "url": "Section-Dot-Product.html#Subsection-The-Dot-Product-13",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": " Note that the standard unit vectors in are orthogonal--see . Indeed, In general, by , for standard unit vectors in with , the vectors and are orthogonal since .  "
},
{
  "id": "Subsection-Orthogonal-Projections-4",
  "level": "2",
  "url": "Section-Dot-Product.html#Subsection-Orthogonal-Projections-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection of onto projection of onto "
},
{
  "id": "def-projection",
  "level": "2",
  "url": "Section-Dot-Product.html#def-projection",
  "type": "Definition",
  "number": "7.1.7",
  "title": "",
  "body": "  Let be a vector, and let be a non-zero vector. The projection of onto is given by    "
},
{
  "id": "ex-projection1",
  "level": "2",
  "url": "Section-Dot-Product.html#ex-projection1",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": " Find the projection of , shown below, onto the line given by .      We begin by finding vectors and . The tail of is located at , and the head of is at . Using the ``head-tail\" formula we get The direction vector for the line is We find that and . Thus   "
},
{
  "id": "ex-distancefrompttoline",
  "level": "2",
  "url": "Section-Dot-Product.html#ex-distancefrompttoline",
  "type": "Example",
  "number": "7.1.9",
  "title": "",
  "body": " Let be a point in . Suppose line is given by parametric equations         Find the distance from to .  We will first construct a vector by picking an arbitrary point on to be the tail of and using point as the head of . An easy point to choose on line is the point that corresponds to . Now we have       The line has a direction vector We will now find the projection of onto        Next, we find .       Finally, to find the distance between point and line , we find the magnitude of .   "
},
{
  "id": "prob-dotproduct1",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-dotproduct1",
  "type": "Exercise",
  "number": "7.1.4.1",
  "title": "",
  "body": "  Find the dot product of and if         "
},
{
  "id": "prob-dotproduct2",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-dotproduct2",
  "type": "Exercise",
  "number": "7.1.4.2",
  "title": "",
  "body": "  Find the dot product of and if         "
},
{
  "id": "prob-dotproductprop6",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-dotproductprop6",
  "type": "Exercise",
  "number": "7.1.4.3",
  "title": "",
  "body": "  Use vector to illustrate of .   "
},
{
  "id": "prob-th-dotprductproperties",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-th-dotprductproperties",
  "type": "Exercise",
  "number": "7.1.4.4",
  "title": "",
  "body": "  Prove , , , , and of .   "
},
{
  "id": "prob-perpvectors1",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-perpvectors1",
  "type": "Exercise",
  "number": "7.1.4.5",
  "title": "",
  "body": "  From the given list of vector pairs, identify ALL pairs of vectors that lie on perpendicular lines.    ,      ,      ,      ,    Also compute for each pair. What do you observe?    You may want to draw a picture and think about what you know about slopes of perpendicular lines.   "
},
{
  "id": "prob-perpvectors2a",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-perpvectors2a",
  "type": "Exercise",
  "number": "7.1.4.6",
  "title": "",
  "body": "            "
},
{
  "id": "prob-perpvectors2b",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-perpvectors2b",
  "type": "Exercise",
  "number": "7.1.4.7",
  "title": "",
  "body": "            "
},
{
  "id": "prob-perpvectors2c",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-perpvectors2c",
  "type": "Exercise",
  "number": "7.1.4.8",
  "title": "",
  "body": "            "
},
{
  "id": "prob-perpvectors3",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-perpvectors3",
  "type": "Exercise",
  "number": "7.1.4.9",
  "title": "",
  "body": "     Vector that lies on the line , has the form . Assuming that , find the general form for a vector that lies on a line perpendicular to .    Find .    Formulate a conjecture about the dot product of perpendicular vectors.       What do you know about the slopes of perpendicular lines?   "
},
{
  "id": "prob-proj1a",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-proj1a",
  "type": "Exercise",
  "number": "7.1.4.10",
  "title": "",
  "body": "  Let and . Compute .        "
},
{
  "id": "prob-proj1b",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-proj1b",
  "type": "Exercise",
  "number": "7.1.4.11",
  "title": "",
  "body": "  Suppose and . Compute the projection of onto .        "
},
{
  "id": "prob-proj2",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-proj2",
  "type": "Exercise",
  "number": "7.1.4.12",
  "title": "",
  "body": "  Find the projection of vector onto line . (If entering answers in decimal form, round to the nearest one hundredth.)            "
},
{
  "id": "prob-distpttoline",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-distpttoline",
  "type": "Exercise",
  "number": "7.1.4.13",
  "title": "",
  "body": "  Find the distance between point and line .            "
},
{
  "id": "prob-proj3",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-proj3",
  "type": "Exercise",
  "number": "7.1.4.14",
  "title": "",
  "body": "  Show that does not depend on the length of by proving that for . What does this result mean geometrically? Illustrate your response with a diagram.   "
},
{
  "id": "prob-circletangenttoline",
  "level": "2",
  "url": "Section-Dot-Product.html#prob-circletangenttoline",
  "type": "Exercise",
  "number": "7.1.4.15",
  "title": "",
  "body": "  Find the radius of a circle centered at if the line is tangent to the circle. Enter your response as a fraction.     The graph below shows the line together with a circle of radius . Change the value of to the radius you have found to visualize the correct answer.   A larger version of this activity is available here .     "
},
{
  "id": "Section-Orthogonality-and-Projections",
  "level": "1",
  "url": "Section-Orthogonality-and-Projections.html",
  "type": "Section",
  "number": "7.2",
  "title": "Orthogonality and Projections",
  "body": " Orthogonality and Projections   Orthogonal and Orthonormal Sets  In this section, we examine what it means for vectors (and sets of vectors) to be orthogonal and orthonormal. Recall that two non-zero vectors are orthogonal if their dot product is zero. A collection of non-zero vectors in is called orthogonal if the vectors are pair-wise orthogonal.  The diagram below shows two orthogonal vectors in and three orthogonal vectors in .   Perpendicular vectors drawn     Continuation of above    If every vector in an orthogonal set of vectors is also a unit vector, then we say that the given set of vectors is orthonormal .   An orthonormal set drawn this time for emphasis    Formally, we can define orthogonal and orthonormal vectors as follows.    Let be a set of nonzero vectors in . Then this set is called an orthogonal set if for all . Moreover, if for (i.e. each vector in the set is a unit vector), we say the set of vectors is an orthonormal set .    An orthogonal set of vectors may not be orthonormal. To convert an orthogonal set to an orthonormal set, we need to divide each vector by its own length.     Normalizing an orthogonal set is the process of turning an orthogonal set into an orthonormal set. If is an orthogonal subset of , then is an orthonormal set.    We illustrate this concept in the following example.    Consider the vectors Show that is an orthogonal set of vectors but not an orthonormal one. Find the corresponding orthonormal set.    One easily verifies that and is an orthogonal set of vectors. On the other hand one can compute that and so the set is not orthonormal. To find a corresponding orthonormal set, we need to normalize each vector. Similarly, Therefore the corresponding orthonormal set is You can verify that this set is orthonormal.      Orthogonal and Orthonormal Bases  Recall that every basis of (or a subspace of ) imposes a coordinate system on (or ) that can be used to express any vector of (or ) as a linear combination of the elements of the basis. For example, vectors and impose a coordinate system onto the plane, as shown in the figure below. We readily see that , contained in the plane, can be written as .   ONB drawing    Vector is visually easy to work with. In general, one way to express an arbitrary vector as a linear combination of the basis vectors is to solve a system of linear equations, which can be costly. One reason we like as a basis of is because any vector of can be easily expressed as the sum of the orthogonal projections of onto the basis vectors and , as shown below.   ONB completed    We can see why an ``upright\" coordinate system with basis works well. What if we tilt this coordinate system while preserving the orthogonal relationship between the basis vectors?  The following exploration allows you to investigate the consequences.   In the following GeoGebra interactive, vectors and are orthogonal (slopes of the lines containing them are negative reciprocals of each other). These vectors are clearly linearly independent and span . Therefore is a basis of . Let be an arbitrary vector. Orthogonal projections of onto and are depicted in light grey.   Use the tip of vector to manipulate the vector and convince yourself that is always the diagonal of the parallelogram (a rectangle!) determined by the projections.    Use the tips of and to change the basis vectors. What happens when and are no longer orthogonal?    Pick another pair of orthogonal vectors and . Verify that is the sum of its projections.           As you have just discovered in , we can express an arbitrary vector of as the sum of its projections onto the basis vectors, provided that the basis is orthogonal. It turns out that this result holds for any subspace of , making a basis consisting of orthogonal vectors especially useful.  If an orthogonal set is a basis, we call it an orthogonal basis . Similarly, if an orthonormal set is a basis, we call it an orthonormal basis .  The following theorem generalizes our observation in . As you read the statement of the theorem, it will be helpful to recall that the orthogonal projection of vector onto a non-zero vector is given by     Let be a subspace of and suppose is an orthogonal basis of . Then for every in ,     We may express as a linear combination of the basis elements: We claim that for . To see this, we take the dot product of each side with the vector and obtain the following. Our basis is orthogonal, so for all , which means after we distribute the dot product, only one term will remain on the right-hand side. We have We now divide both sides by , and since our claim holds for , the proof is complete.    In shows one important benefit of a basis being orthogonal. With an orthogonal basis it is easy to represent any vector in terms of the basis vectors. The example below exemplifies these new ideas.    Let Notice that is an orthogonal set of vectors, and spans . Use this fact to write as a linear combination of the vectors of .    We first observe that is a linearly independent set of vectors, and so is a basis for . Next we apply Theorem~ to express as a linear combination of the vectors of . We wish to write: We readily compute: Therefore,     The formula from is easy to use, and it becomes even easier when our basis is orthonormal .    Let be a subspace of and suppose is an orthonormal basis of . Then for any in ,     This is a special case of . Because for , %where we can compute the coefficients of with respect to the basis by simply taking the dot product with each basis vector, for in this case the terms are given by       Orthogonal Projection onto a Subspace  In the previous section we found that given a subspace of with an orthogonal basis , every vector in can be expressed as the sum of the orthogonal projections of onto the elements of . We wish to emphasize that our premise is Being in .  In this section, we look into the meaning of the sum of orthogonal projections of onto the elements of an orthogonal basis of for those vectors of that are not in .   In the interactive below, is a plane spanned by and , in . is subspace of . In the initial set up, and are orthogonal. Vector is not in . Use check-boxes to construct the sum of orthogonal projections of onto and . RIGHT-CLICK and DRAG to rotate the image.       If moved, return the basis vectors and to their default position (set ) to ensure that they are orthogonal.    Rotate the image to convince yourself that the perpendiculars dropped from the tip of to and are indeed perpendicular to and in the diagram (you'll have to look at it just right to convince yourself of this). Are both of these perpendiculars also necessarily perpendicular to the plane?    No.      Use sliders and to manipulate . Rotate the figure for a better view. What is true about about vector ?        Vector is orthogonal to .    All of the above.       Option (3): \"All of the above.\"    Rotate the figure so that you're looking directly down at the plane. If you're looking at it correctly, you will notice that (1) the parallelogram determined by the projections of onto and is a rectangle; (2) the sum of projections, , is located directly underneath , like a shadow at midday.    Use sliders and to manipulate the basis vectors and so that they are no longer orthogonal. Rotate the figure for a better view. Which of the following is true?        Vector is orthogonal to .    All of the above.       Option (1):       Rotate your figure so that you're looking directly down at the plane. Which of the following is true?   Parallelogram determined by and is a rectangle.     is located directly underneath .    None of the above.       Option (3): None of the above.     In , you discovered that given a plane, spanned by orthogonal vectors , in , and a vector , not in the plane, we can interpret the sum of orthogonal projections of onto and as a ``shadow\" of that lies in the plane directly underneath the vector . We say that this ``shadow\" is an orthogonal projection of onto .  You have also found that if are not orthogonal, the parallelogram representing the sum of the orthogonal projections of onto and will not be a rectangle. In this case, minus this sum will NOT be orthogonal to the plane. It is essential that are orthogonal for to be considered an orthogonal projection.  In general, we can define an orthogonal projection of in onto a subspace of as the sum of the orthogonal projections of onto the elements of an orthogonal basis of . A pivotal aspect of this definition is that it allows us to express as the sum of its orthogonal projection, , onto and a vector orthogonal to , called . and the subsequent diagram summarize this discussion.   Projection onto a Subspace of   Suppose is a subspace of with orthogonal basis . If is in , the vector is called the orthogonal projection of onto .    An illustration of for a two-dimensional subspace with orthogonal basis is shown below.      Using multiple times, we can also express in using the following formula.           Orthogonal Decomposition of  From before, allows us to express as the sum of its orthogonal projection, , located in , and a vector we will call (pronounced ``W-perp\"), given by . This decomposition of is shown in the diagram below.      You have already met , under the name of in , and observed that this vector is orthogonal to . We will now prove that is orthogonal to every vector in . This will be accomplished in two steps. First, in we will prove that is orthogonal to all of the basis elements of . Next, you will use this result to demonstrate that is orthogonal to every vector in .    Let be a subspace of with orthogonal basis . Let be in , and define as Then is orthogonal to for .    We will use to show that =0. Recall that is an orthogonal basis. Therefore for . This observation enables us to compute as follows.     We leave the proof of the following Corollary as .    Let be a subspace of with orthogonal basis . Let be in , and define as Then is orthogonal to every vector in .    The fact that the decomposition of into the sum of and is unique is the subject of the Orthogonal Decomposition Theorem which we will prove later on. Throughout this section we have worked with orthogonal bases of subspaces. Does every subspace of have an orthogonal basis? If so, how do we find one? These questions will be addressed in subsuming sections.      Retry using Gaussian elimination. Which method seems easier to you?      Let and suppose Furthermore, suppose that there exists a vector for which for all , . Show that .      Let in the following three exercises.     Compute .           Show that is another orthogonal basis of .      Use the basis in to compute .            Prove      "
},
{
  "id": "Subsection-Orthogonal-and-Orthonormal-Sets-2",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#Subsection-Orthogonal-and-Orthonormal-Sets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "Subsection-Orthogonal-and-Orthonormal-Sets-6",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#Subsection-Orthogonal-and-Orthonormal-Sets-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthonormal "
},
{
  "id": "orthset",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#orthset",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  Let be a set of nonzero vectors in . Then this set is called an orthogonal set if for all . Moreover, if for (i.e. each vector in the set is a unit vector), we say the set of vectors is an orthonormal set .   "
},
{
  "id": "normalizing",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#normalizing",
  "type": "Definition",
  "number": "7.2.2",
  "title": "",
  "body": "   Normalizing an orthogonal set is the process of turning an orthogonal set into an orthonormal set. If is an orthogonal subset of , then is an orthonormal set.   "
},
{
  "id": "ex-orthonormalset",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#ex-orthonormalset",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  Consider the vectors Show that is an orthogonal set of vectors but not an orthonormal one. Find the corresponding orthonormal set.    One easily verifies that and is an orthogonal set of vectors. On the other hand one can compute that and so the set is not orthonormal. To find a corresponding orthonormal set, we need to normalize each vector. Similarly, Therefore the corresponding orthonormal set is You can verify that this set is orthonormal.   "
},
{
  "id": "exp-orth1a",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#exp-orth1a",
  "type": "Exploration",
  "number": "7.2.1",
  "title": "",
  "body": " In the following GeoGebra interactive, vectors and are orthogonal (slopes of the lines containing them are negative reciprocals of each other). These vectors are clearly linearly independent and span . Therefore is a basis of . Let be an arbitrary vector. Orthogonal projections of onto and are depicted in light grey.   Use the tip of vector to manipulate the vector and convince yourself that is always the diagonal of the parallelogram (a rectangle!) determined by the projections.    Use the tips of and to change the basis vectors. What happens when and are no longer orthogonal?    Pick another pair of orthogonal vectors and . Verify that is the sum of its projections.          "
},
{
  "id": "Subsection-Orthogonal-and-Orthonormal-Bases-10",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#Subsection-Orthogonal-and-Orthonormal-Bases-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal basis orthonormal basis "
},
{
  "id": "th-fourierexpansion",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#th-fourierexpansion",
  "type": "Theorem",
  "number": "7.2.5",
  "title": "",
  "body": "  Let be a subspace of and suppose is an orthogonal basis of . Then for every in ,     We may express as a linear combination of the basis elements: We claim that for . To see this, we take the dot product of each side with the vector and obtain the following. Our basis is orthogonal, so for all , which means after we distribute the dot product, only one term will remain on the right-hand side. We have We now divide both sides by , and since our claim holds for , the proof is complete.   "
},
{
  "id": "fourier",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#fourier",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": "  Let Notice that is an orthogonal set of vectors, and spans . Use this fact to write as a linear combination of the vectors of .    We first observe that is a linearly independent set of vectors, and so is a basis for . Next we apply Theorem~ to express as a linear combination of the vectors of . We wish to write: We readily compute: Therefore,    "
},
{
  "id": "cor-orthonormal",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#cor-orthonormal",
  "type": "Corollary",
  "number": "7.2.7",
  "title": "",
  "body": "  Let be a subspace of and suppose is an orthonormal basis of . Then for any in ,     This is a special case of . Because for , %where we can compute the coefficients of with respect to the basis by simply taking the dot product with each basis vector, for in this case the terms are given by    "
},
{
  "id": "exp-orthProjSub",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#exp-orthProjSub",
  "type": "Exploration",
  "number": "7.2.2",
  "title": "",
  "body": " In the interactive below, is a plane spanned by and , in . is subspace of . In the initial set up, and are orthogonal. Vector is not in . Use check-boxes to construct the sum of orthogonal projections of onto and . RIGHT-CLICK and DRAG to rotate the image.       If moved, return the basis vectors and to their default position (set ) to ensure that they are orthogonal.    Rotate the image to convince yourself that the perpendiculars dropped from the tip of to and are indeed perpendicular to and in the diagram (you'll have to look at it just right to convince yourself of this). Are both of these perpendiculars also necessarily perpendicular to the plane?    No.      Use sliders and to manipulate . Rotate the figure for a better view. What is true about about vector ?        Vector is orthogonal to .    All of the above.       Option (3): \"All of the above.\"    Rotate the figure so that you're looking directly down at the plane. If you're looking at it correctly, you will notice that (1) the parallelogram determined by the projections of onto and is a rectangle; (2) the sum of projections, , is located directly underneath , like a shadow at midday.    Use sliders and to manipulate the basis vectors and so that they are no longer orthogonal. Rotate the figure for a better view. Which of the following is true?        Vector is orthogonal to .    All of the above.       Option (1):       Rotate your figure so that you're looking directly down at the plane. Which of the following is true?   Parallelogram determined by and is a rectangle.     is located directly underneath .    None of the above.       Option (3): None of the above.    "
},
{
  "id": "Subsection-Orthogonal-Projection-onto-a-Subspace-5",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#Subsection-Orthogonal-Projection-onto-a-Subspace-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal projection "
},
{
  "id": "def-projOntoSubspace",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#def-projOntoSubspace",
  "type": "Definition",
  "number": "7.2.13",
  "title": "Projection onto a Subspace of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Projection onto a Subspace of   Suppose is a subspace of with orthogonal basis . If is in , the vector is called the orthogonal projection of onto .   "
},
{
  "id": "form-orthProjOntoW",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#form-orthProjOntoW",
  "type": "Formula",
  "number": "7.2.14",
  "title": "",
  "body": "      "
},
{
  "id": "th-orthDecompX",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#th-orthDecompX",
  "type": "Theorem",
  "number": "7.2.15",
  "title": "",
  "body": "  Let be a subspace of with orthogonal basis . Let be in , and define as Then is orthogonal to for .    We will use to show that =0. Recall that is an orthogonal basis. Therefore for . This observation enables us to compute as follows.    "
},
{
  "id": "cor-orthProjOntoW",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#cor-orthProjOntoW",
  "type": "Corollary",
  "number": "7.2.16",
  "title": "",
  "body": "  Let be a subspace of with orthogonal basis . Let be in , and define as Then is orthogonal to every vector in .   "
},
{
  "id": "prob-rref-way",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#prob-rref-way",
  "type": "Exercise",
  "number": "7.2.5.1",
  "title": "",
  "body": "  Retry using Gaussian elimination. Which method seems easier to you?   "
},
{
  "id": "prob-vec-eq-0",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#prob-vec-eq-0",
  "type": "Exercise",
  "number": "7.2.5.2",
  "title": "",
  "body": "  Let and suppose Furthermore, suppose that there exists a vector for which for all , . Show that .   "
},
{
  "id": "OrthoProj1-1",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#OrthoProj1-1",
  "type": "Exercise",
  "number": "7.2.5.3",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "OrthoProj1-2",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#OrthoProj1-2",
  "type": "Exercise",
  "number": "7.2.5.4",
  "title": "",
  "body": "  Show that is another orthogonal basis of .   "
},
{
  "id": "OrthoProj1-3",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#OrthoProj1-3",
  "type": "Exercise",
  "number": "7.2.5.5",
  "title": "",
  "body": "  Use the basis in to compute .        "
},
{
  "id": "prob-proofCor",
  "level": "2",
  "url": "Section-Orthogonality-and-Projections.html#prob-proofCor",
  "type": "Exercise",
  "number": "7.2.5.6",
  "title": "",
  "body": "  Prove    "
},
{
  "id": "Section-Gram-Schmidt-Orthogonalization",
  "level": "1",
  "url": "Section-Gram-Schmidt-Orthogonalization.html",
  "type": "Section",
  "number": "7.3",
  "title": "Gram-Schmidt Orthogonalization",
  "body": " Gram-Schmidt Orthogonalization  We said that a set of nonzero vectors in is called an orthogonal set if for all . In this section we will prove that every orthogonal set is linearly independent, and therefore it is a basis for its span. We have already seen that the expansion of a vector as a linear combination of orthogonal basis vectors is easy to obtain because formulas exist for the coefficients. Hence the orthogonal bases are the ``nice'' bases.   A Visual Guide to Creating an Orthogonal Basis  Given an arbitrary basis of , let's start building our orthogonal basis, , by setting . To find the next element of our orthogonal basis, consider the orthogonal projection of onto . (See the figure below.)   Projection pictured     Continuation of above    Next, let . Observe that is orthogonal to (see ). This gives us an orthogonal collection . It is intuitively clear that and are linearly independent. Therefore is an orthogonal basis of . The following exploration illustrates this process dynamically.   Choose an arbitrary basis of by dragging the tips of vectors and to desired positions. Use the navigation bar at the bottom of the interactive window to go through the steps of constructing an orthogonal basis of .        We can apply this process to any two-dimensional subset of . The following exploration will guide you through the process of constructing an orthogonal basis for a plane spanned by two arbitrary vectors in .   Let . is a plane through the origin in . Use the navigation bar at the bottom of the interactive window to go through the steps of constructing an orthogonal basis for . RIGHT-CLICK and DRAG to rotate the image for a better view.        In the next exploration, we take the process of constructing an orthogonal basis to the edge of the visual realm and construct an orthogonal basis for .   In the interactive below is a basis of . Use check boxes to go through the steps for constructing an orthogonal basis starting with the given basis. RIGHT-CLICK and DRAG to rotate the image for a better view.          Gram-Schmidt Orthogonalization Algorithm  In the first sections of this chapter, we have repeatedly assumed that our subspaces of have an orthogonal basis. We will now prove that this is indeed the case. Recall that to be a basis of a subspace, a set of vectors must be linearly independent and it must span the subspace. We will start by demonstrating that a set of orthogonal vectors must be linearly independent.    Let be an orthogonal set of non-zero vectors in . Then this set is linearly independent.    To show that this set is linearly independent, we need to demonstrate that the only solution to the following equation is the trivial solution. So suppose To accomplish this, we need to show that all for all . To do so we take the dot product of each side of the above equation with the vector and obtain the following. Now since the set is orthogonal, for all , so we have:  We know that , so it follows that . Since was chosen arbitrarily, for all  . This proves that is linearly independent.    The following theorem shows how to start with an arbitrary basis of a subspace of and find an orthogonal basis for . To better understand the notation and the process presented in this theorem, you may want to match the steps of the theorem to the steps of Exploration .   Gram-Schmidt Orthogonalization   If is any basis of a subspace of , consider the following sequence of subspaces: Then we can construct an orthogonal basis for for each by adding one vector at a time successively as follows: Then, will be an orthogonal basis for .    Using the definition of projection onto a subspace, the iterative procedure above may be written: We see immediately that and that because is a linear combination of and . In fact, for any value of , we see that , because each is a linear combination of the vectors .  Repeated application of shows that the set is orthogonal. Linear independence follows from orthogonality by .  We conclude that is a linearly independent orthogonal set that spans .    Knowing the Gram-Schmidt procedure in detail is important, albeit slightly tedious. As such, we better run through an example in detail.    Find an orthogonal basis of the row space of     Let , , denote the rows of and observe that is linearly independent. Take . The algorithm gives Hence is the orthogonal basis provided by the algorithm. In hand calculations it may be convenient to eliminate fractions (see the Remark below), so is also an orthogonal basis for .      Observe that the vector is unchanged if a nonzero scalar multiple of is used in place of . Hence, if a newly constructed is multiplied by a nonzero scalar at some stage of the Gram-Schmidt algorithm, the subsequent s will be unchanged. This is useful in actual calculations.    The Gram-Schmidt algorithm demonstrates in a constructive way that every subspace of has an orthogonal basis. We formalize this in one final theorem.    Let be a subspace of . Then has an orthogonal basis. In fact, every orthogonal subset in can be extended to an orthogonal basis for .    Suppose is an orthogonal subset of . If it is already a basis. Otherwise, there exists in outside .  Using the Gram-Schmidt procedure we define where . If , we are done. Otherwise, the process continues to create larger and larger orthogonal subsets of . They are linearly independent by , so we have a basis when we reach a subset containing vectors.    The process described in the proof of this theorem is used in this final example.    In , given we showed that an orthogonal basis for is Choose any vector not in , and apply the Gram-Schmidt algorithm to produce a vector such that is an orthogonal basis for .    Let (quick mental exercise: How would you check that is not in ?). To get a vector orthogonal to the row space, we perform an iteration of Gram-Schmidt: Since any multiple of will suffice, we are free to choose to get rid of the fraction.  It is easy to check that is an orthogonal set, and it follows from that this set is a basis for .      Suppose instead of we had started with . This vector is in , as it is the sum of those three vectors. But if we were to try to proceed as above, we would get We could not add a multiple of to to get an orthogonal basis.        Try again starting with some other vector .      In each case, use the Gram-Schmidt algorithm to convert the given basis of to an orthogonal basis.      , .       , .       , .       , .      "
},
{
  "id": "Section-Gram-Schmidt-Orthogonalization-2",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#Section-Gram-Schmidt-Orthogonalization-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal set "
},
{
  "id": "exp-orth1",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#exp-orth1",
  "type": "Exploration",
  "number": "7.3.1",
  "title": "",
  "body": " Choose an arbitrary basis of by dragging the tips of vectors and to desired positions. Use the navigation bar at the bottom of the interactive window to go through the steps of constructing an orthogonal basis of .       "
},
{
  "id": "exp-orth2",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#exp-orth2",
  "type": "Exploration",
  "number": "7.3.2",
  "title": "",
  "body": " Let . is a plane through the origin in . Use the navigation bar at the bottom of the interactive window to go through the steps of constructing an orthogonal basis for . RIGHT-CLICK and DRAG to rotate the image for a better view.       "
},
{
  "id": "exp-orth3",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#exp-orth3",
  "type": "Exploration",
  "number": "7.3.3",
  "title": "",
  "body": " In the interactive below is a basis of . Use check boxes to go through the steps for constructing an orthogonal basis starting with the given basis. RIGHT-CLICK and DRAG to rotate the image for a better view.       "
},
{
  "id": "orthbasis",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#orthbasis",
  "type": "Theorem",
  "number": "7.3.4",
  "title": "",
  "body": "  Let be an orthogonal set of non-zero vectors in . Then this set is linearly independent.    To show that this set is linearly independent, we need to demonstrate that the only solution to the following equation is the trivial solution. So suppose To accomplish this, we need to show that all for all . To do so we take the dot product of each side of the above equation with the vector and obtain the following. Now since the set is orthogonal, for all , so we have:  We know that , so it follows that . Since was chosen arbitrarily, for all  . This proves that is linearly independent.   "
},
{
  "id": "th-GS",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#th-GS",
  "type": "Theorem",
  "number": "7.3.5",
  "title": "Gram-Schmidt Orthogonalization.",
  "body": " Gram-Schmidt Orthogonalization   If is any basis of a subspace of , consider the following sequence of subspaces: Then we can construct an orthogonal basis for for each by adding one vector at a time successively as follows: Then, will be an orthogonal basis for .    Using the definition of projection onto a subspace, the iterative procedure above may be written: We see immediately that and that because is a linear combination of and . In fact, for any value of , we see that , because each is a linear combination of the vectors .  Repeated application of shows that the set is orthogonal. Linear independence follows from orthogonality by .  We conclude that is a linearly independent orthogonal set that spans .   "
},
{
  "id": "exa-023743",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#exa-023743",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": "  Find an orthogonal basis of the row space of     Let , , denote the rows of and observe that is linearly independent. Take . The algorithm gives Hence is the orthogonal basis provided by the algorithm. In hand calculations it may be convenient to eliminate fractions (see the Remark below), so is also an orthogonal basis for .   "
},
{
  "id": "rem-scalarMultGS",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#rem-scalarMultGS",
  "type": "Remark",
  "number": "7.3.7",
  "title": "",
  "body": "  Observe that the vector is unchanged if a nonzero scalar multiple of is used in place of . Hence, if a newly constructed is multiplied by a nonzero scalar at some stage of the Gram-Schmidt algorithm, the subsequent s will be unchanged. This is useful in actual calculations.   "
},
{
  "id": "thm-023635",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#thm-023635",
  "type": "Theorem",
  "number": "7.3.8",
  "title": "",
  "body": "  Let be a subspace of . Then has an orthogonal basis. In fact, every orthogonal subset in can be extended to an orthogonal basis for .    Suppose is an orthogonal subset of . If it is already a basis. Otherwise, there exists in outside .  Using the Gram-Schmidt procedure we define where . If , we are done. Otherwise, the process continues to create larger and larger orthogonal subsets of . They are linearly independent by , so we have a basis when we reach a subset containing vectors.   "
},
{
  "id": "ex-GSextend",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#ex-GSextend",
  "type": "Example",
  "number": "7.3.9",
  "title": "",
  "body": "  In , given we showed that an orthogonal basis for is Choose any vector not in , and apply the Gram-Schmidt algorithm to produce a vector such that is an orthogonal basis for .    Let (quick mental exercise: How would you check that is not in ?). To get a vector orthogonal to the row space, we perform an iteration of Gram-Schmidt: Since any multiple of will suffice, we are free to choose to get rid of the fraction.  It is easy to check that is an orthogonal set, and it follows from that this set is a basis for .   "
},
{
  "id": "rem-vectorInSpan",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#rem-vectorInSpan",
  "type": "Remark",
  "number": "7.3.10",
  "title": "",
  "body": "  Suppose instead of we had started with . This vector is in , as it is the sum of those three vectors. But if we were to try to proceed as above, we would get We could not add a multiple of to to get an orthogonal basis.   "
},
{
  "id": "prob-extend",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#prob-extend",
  "type": "Exercise",
  "number": "7.3.3.1",
  "title": "",
  "body": "  Try again starting with some other vector .   "
},
{
  "id": "GS1",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#GS1",
  "type": "Exercise",
  "number": "7.3.3.2",
  "title": "",
  "body": "   , .   "
},
{
  "id": "GS2",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#GS2",
  "type": "Exercise",
  "number": "7.3.3.3",
  "title": "",
  "body": "   , .   "
},
{
  "id": "GS3",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#GS3",
  "type": "Exercise",
  "number": "7.3.3.4",
  "title": "",
  "body": "   , .   "
},
{
  "id": "GS4",
  "level": "2",
  "url": "Section-Gram-Schmidt-Orthogonalization.html#GS4",
  "type": "Exercise",
  "number": "7.3.3.5",
  "title": "",
  "body": "   , .   "
},
{
  "id": "Section-Orthogonal-Complements-and-Decompositions",
  "level": "1",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html",
  "type": "Section",
  "number": "7.4",
  "title": "Orthogonal Complements and Decompositions",
  "body": " Orthogonal Complements and Decompositions   Orthogonal Complements  We will now consider the set of vectors that are orthogonal to every vector in a given subspace. As a quick example, consider the -plane in . Clearly, every scalar multiple of the standard unit vector in is orthogonal to every vector in the -plane. We say that the set is an orthogonal complement of .   Orthogonal Complement of a Subspace of   If is a subspace of , define the orthogonal complement  of (pronounced `` -perp'') by      Complement of a line    The following theorem collects some useful properties of the orthogonal complement; the proof of and is left as .    Let be a subspace of .    is a subspace of .     and .    If then .       [ :] We must show that . To show that two sets are equal, we must show that all elements of one set are included in the other set, and then we must show the reverse inclusion.  If is in then for all because each is in . This shows . For the reverse inclusion, suppose that for all ; we need to show that is in . We need to show for each in . We can write where each is in . Then as required, and the proof of equality is complete.    Let us put these new concepts into a concrete setting.    Find a basis for if in .    By , is in if and only if is orthogonal to both and ; that is, and , or Using Gaussian elimination on this system gives You are asked to confirm this in (which serves as a wonderful review of concepts we covered earlier in the course!).    Some of the important subspaces we studied earlier are orthogonal complements of each other. Recall the following definitions associated with an matrix .   The null space of , , is a subspace of .    The row space of , , is a subspace of .    The column space of , , is a subspace of .      In the following GeoGebra interactive, you can change the coordinates of the vectors and using the sliders (at this stage make sure that and are not collinear). Let Then . RIGHT-CLICK and DRAG to rotate the coordinate system for a better view.          Follow the prompts in the interactive to visualize and . What relationships do you observe between and ?    It is possible to ``break\" this interactive (for certain choices of and ). If and are scalar multiples of each other, then is a line, and the dimension of . The interactive does not accommodate this situation. To see what happens when and are scalar multiples of each other, see .        Let be an matrix. Then we have:    ;     .       Let . if and only if x is orthogonal to every row of . But this is true if and only if , which is equivalent to saying , which proves . To prove , we simply replace with , and we may apply since .    Let's examine what it says about a couple of our examples. In , we solved for the unknown vectors . Notice that this is equivalent to creating a matrix whose rows are and , and then finding the null space of that matrix . You can check that a basis for is given by .  It is often useful to verify abstract statements in the concrete first. Let us give this a try:    Let Verify each of the statements in .    We compute to find a basis for , , and . After some work we arrive at: and the row space is spanned by It is easy to check that each of the basis vectors of is orthogonal to each of the basis vectors of , demonstrating the first part of . You will be asked to demonstrate the second part of for this example in .      Orthogonal Decomposition Theorem  Now that we have defined the orthogonal complement of a subspace, we are ready to state the main theorem of this section. If you have studied physics or multi-variable calculus, you are familiar with the idea of expressing a vector in as the sum of its tangential and normal components. (If you haven't yet taken those courses, this section will help to prepare you for them!) The following theorem is a generalization of this idea.   Orthogonal Decomposition Theorem   Let be a subspace of and let . Then there exist unique vectors and such that .    This is an example of an ``existence and uniqueness'' theorem, so there are two things to prove. If we have an orthogonal basis for , then it is easy to show that our orthogonal decomposition exists for . We let , which is clearly in and . We have so we need to see that .  By T ~ , it suffices to show that is orthogonal to each of the basis vectors . We compute for  This proves that .  The reason we need to prove this decomposition is unique is because we started with the orthogonal basis for , but what would happen if we chose a different orthogonal basis? Suppose that is another orthogonal basis of , and let As before, and , and we must show that . To see this, write the vector as follows: This vector is in (because and are in ) and it is in (because and are in ), and so it must be the zero vector (it is orthogonal to itself!). This means as desired.    The decomposition is extremely important. It splits a vector into two managable halves. Further, it is completely computable as the next example highlights.    Let be a subspace given by and let . Write as the sum of a vector in and a vector in .    Following the notation of , we will write , where and . Let We observe that we have the good fortune that is an orthogonal basis for (otherwise, our first step would be to use the Gram-Schmidt procedure to create an orthogonal basis for ). We compute: and then This gives us     The final theorem of this section shows that projection onto a subspace of is actually a linear transformation from to .    Let be a fixed subspace of . If we define by     is a linear transformation.     is and is .     .       If , then , and so for all . Thus is the zero (linear) operator, so , , and hold. Hence assume that .   If is an orthonormal basis of , then in by the definition of the projection. Thus is a linear transformation because     We have is a subset of by because each is in . But if is in , then by and applied to the space . This shows that is a subset of , so is .  Now suppose that is in . Then for each (again because each is in ) so is in by ( ). Hence is in . On the other hand, shows that is in for all in , and it follows that is in . Hence is , proving .    This follows from , , and the Rank-Nullity theorem (see ).           Solve the linear system in Example and use your result to find a basis for if in .      In this problem we return to the GeoGebra interactive in , and we consider the case where the matrix has rank 1 (which could not handle). This time, the sliders define row 1 of matrix , and row 2 will be 2 times row 1.  Follow the prompts in the interactive to visualize and . What relationships do you observe between and ?           In this problem you are asked to finish . More specifically, for the matrix show that .      In each case, write as , where and .                           Let , , and let be the matrix with the as rows.   Show that .    Use part (a) to find if         .         Prove part of .    Prove part of .         Let be a subspace of . If in can be written in any way at all as with in and in , show that necessarily .      Let be a subspace of and let be a vector in . Using Practice Problem , or otherwise, show that is in if and only if .    Write . Then is in by definition. If is , then is in . But is also in , so is in . Thus .      If is a subspace of , show that for all in .    Let be an orthonormal basis of . If is in the expansion theorem gives       If is a subspace of , show that for all in .      If is an orthogonal basis of and , , show that .     "
},
{
  "id": "Subsection-Orthogonal-Complements-2",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#Subsection-Orthogonal-Complements-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal complement "
},
{
  "id": "def-023776",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#def-023776",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Orthogonal Complement of a Subspace of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Orthogonal Complement of a Subspace of   If is a subspace of , define the orthogonal complement  of (pronounced `` -perp'') by    "
},
{
  "id": "th-023783",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#th-023783",
  "type": "Theorem",
  "number": "7.4.2",
  "title": "",
  "body": "  Let be a subspace of .    is a subspace of .     and .    If then .       [ :] We must show that . To show that two sets are equal, we must show that all elements of one set are included in the other set, and then we must show the reverse inclusion.  If is in then for all because each is in . This shows . For the reverse inclusion, suppose that for all ; we need to show that is in . We need to show for each in . We can write where each is in . Then as required, and the proof of equality is complete.   "
},
{
  "id": "ex-023829",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#ex-023829",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  Find a basis for if in .    By , is in if and only if is orthogonal to both and ; that is, and , or Using Gaussian elimination on this system gives You are asked to confirm this in (which serves as a wonderful review of concepts we covered earlier in the course!).   "
},
{
  "id": "Subsection-Orthogonal-Complements-9",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#Subsection-Orthogonal-Complements-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null space row space column space "
},
{
  "id": "exp-discoverortho",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#exp-discoverortho",
  "type": "Exploration",
  "number": "7.4.1",
  "title": "",
  "body": " In the following GeoGebra interactive, you can change the coordinates of the vectors and using the sliders (at this stage make sure that and are not collinear). Let Then . RIGHT-CLICK and DRAG to rotate the coordinate system for a better view.          Follow the prompts in the interactive to visualize and . What relationships do you observe between and ?    It is possible to ``break\" this interactive (for certain choices of and ). If and are scalar multiples of each other, then is a line, and the dimension of . The interactive does not accommodate this situation. To see what happens when and are scalar multiples of each other, see .     "
},
{
  "id": "th-4subspaces",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#th-4subspaces",
  "type": "Theorem",
  "number": "7.4.5",
  "title": "",
  "body": "  Let be an matrix. Then we have:    ;     .       Let . if and only if x is orthogonal to every row of . But this is true if and only if , which is equivalent to saying , which proves . To prove , we simply replace with , and we may apply since .   "
},
{
  "id": "ex-4subspaces",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#ex-4subspaces",
  "type": "Example",
  "number": "7.4.6",
  "title": "",
  "body": "  Let Verify each of the statements in .    We compute to find a basis for , , and . After some work we arrive at: and the row space is spanned by It is easy to check that each of the basis vectors of is orthogonal to each of the basis vectors of , demonstrating the first part of . You will be asked to demonstrate the second part of for this example in .   "
},
{
  "id": "th-OrthoDecomp",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#th-OrthoDecomp",
  "type": "Theorem",
  "number": "7.4.7",
  "title": "Orthogonal Decomposition Theorem.",
  "body": " Orthogonal Decomposition Theorem   Let be a subspace of and let . Then there exist unique vectors and such that .    This is an example of an ``existence and uniqueness'' theorem, so there are two things to prove. If we have an orthogonal basis for , then it is easy to show that our orthogonal decomposition exists for . We let , which is clearly in and . We have so we need to see that .  By T ~ , it suffices to show that is orthogonal to each of the basis vectors . We compute for  This proves that .  The reason we need to prove this decomposition is unique is because we started with the orthogonal basis for , but what would happen if we chose a different orthogonal basis? Suppose that is another orthogonal basis of , and let As before, and , and we must show that . To see this, write the vector as follows: This vector is in (because and are in ) and it is in (because and are in ), and so it must be the zero vector (it is orthogonal to itself!). This means as desired.   "
},
{
  "id": "ex-OrthogDecomp",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#ex-OrthogDecomp",
  "type": "Example",
  "number": "7.4.8",
  "title": "",
  "body": "  Let be a subspace given by and let . Write as the sum of a vector in and a vector in .    Following the notation of , we will write , where and . Let We observe that we have the good fortune that is an orthogonal basis for (otherwise, our first step would be to use the Gram-Schmidt procedure to create an orthogonal basis for ). We compute: and then This gives us    "
},
{
  "id": "th-ProjLinTran",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#th-ProjLinTran",
  "type": "Theorem",
  "number": "7.4.9",
  "title": "",
  "body": "  Let be a fixed subspace of . If we define by     is a linear transformation.     is and is .     .       If , then , and so for all . Thus is the zero (linear) operator, so , , and hold. Hence assume that .   If is an orthonormal basis of , then in by the definition of the projection. Thus is a linear transformation because     We have is a subset of by because each is in . But if is in , then by and applied to the space . This shows that is a subset of , so is .  Now suppose that is in . Then for each (again because each is in ) so is in by ( ). Hence is in . On the other hand, shows that is in for all in , and it follows that is in . Hence is , proving .    This follows from , , and the Rank-Nullity theorem (see ).      "
},
{
  "id": "prob-Uperp",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-Uperp",
  "type": "Exercise",
  "number": "7.4.3.1",
  "title": "",
  "body": "  Solve the linear system in Example and use your result to find a basis for if in .   "
},
{
  "id": "prob-brokenInteractive",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-brokenInteractive",
  "type": "Exercise",
  "number": "7.4.3.2",
  "title": "",
  "body": "  In this problem we return to the GeoGebra interactive in , and we consider the case where the matrix has rank 1 (which could not handle). This time, the sliders define row 1 of matrix , and row 2 will be 2 times row 1.  Follow the prompts in the interactive to visualize and . What relationships do you observe between and ?        "
},
{
  "id": "prob-finishex4subspaces",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-finishex4subspaces",
  "type": "Exercise",
  "number": "7.4.3.3",
  "title": "",
  "body": "  In this problem you are asked to finish . More specifically, for the matrix show that .   "
},
{
  "id": "OrthoDecomp2",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#OrthoDecomp2",
  "type": "Exercise",
  "number": "7.4.3.4",
  "title": "",
  "body": "      "
},
{
  "id": "OrthoDecomp4",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#OrthoDecomp4",
  "type": "Exercise",
  "number": "7.4.3.5",
  "title": "",
  "body": "      "
},
{
  "id": "OrthoDecomp6",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#OrthoDecomp6",
  "type": "Exercise",
  "number": "7.4.3.6",
  "title": "",
  "body": "      "
},
{
  "id": "Uperp",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#Uperp",
  "type": "Exercise",
  "number": "7.4.3.7",
  "title": "",
  "body": "  Let , , and let be the matrix with the as rows.   Show that .    Use part (a) to find if         .   "
},
{
  "id": "prob-816",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-816",
  "type": "Exercise",
  "number": "7.4.3.8",
  "title": "",
  "body": "     Prove part of .    Prove part of .      "
},
{
  "id": "prob-817",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-817",
  "type": "Exercise",
  "number": "7.4.3.9",
  "title": "",
  "body": "  Let be a subspace of . If in can be written in any way at all as with in and in , show that necessarily .   "
},
{
  "id": "prob-8-1-8",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-8-1-8",
  "type": "Exercise",
  "number": "7.4.3.10",
  "title": "",
  "body": "  Let be a subspace of and let be a vector in . Using Practice Problem , or otherwise, show that is in if and only if .    Write . Then is in by definition. If is , then is in . But is also in , so is in . Thus .   "
},
{
  "id": "prob-8-1-10",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-8-1-10",
  "type": "Exercise",
  "number": "7.4.3.11",
  "title": "",
  "body": "  If is a subspace of , show that for all in .    Let be an orthonormal basis of . If is in the expansion theorem gives    "
},
{
  "id": "prob-8-1-11",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-8-1-11",
  "type": "Exercise",
  "number": "7.4.3.12",
  "title": "",
  "body": "  If is a subspace of , show that for all in .   "
},
{
  "id": "prob-8-1-12",
  "level": "2",
  "url": "Section-Orthogonal-Complements-and-Decompositions.html#prob-8-1-12",
  "type": "Exercise",
  "number": "7.4.3.13",
  "title": "",
  "body": "  If is an orthogonal basis of and , , show that .   "
},
{
  "id": "Section-Orthogonal-Matrices-and-Symmetric-Matrices",
  "level": "1",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html",
  "type": "Section",
  "number": "7.5",
  "title": "Orthogonal Matrices and Symmetric Matrices",
  "body": " Orthogonal Matrices and Symmetric Matrices  Recall that an matrix is diagonalizable if and only if it has linearly independent eigenvectors. Moreover, the matrix with these eigenvectors as columns is a diagonalizing matrix for , that is As we have seen, the nice bases of are the orthogonal ones, so a natural question is: which matrices have orthogonal eigenvectors, so that columns of form an orthogonal basis for ? These turn out to be precisely the symmetric matrices (matrices for which ), and this is the main result of this section.   Orthogonal Matrices  Recall that an orthogonal set of vectors is called orthonormal if for each vector in the set, and that any orthogonal set can be `` normalized '', i.e. converted into an orthonormal set In particular, if a matrix has orthogonal eigenvectors, they can (by normalizing) be taken to be orthonormal. The corresponding diagonalizing matrix (we will use instead of ) has orthonormal columns, and such matrices are very easy to invert.    The following conditions are equivalent for an matrix .    is invertible and .    The rows of are orthonormal.    The columns of are orthonormal.       Note that condition is equivalent to . Let denote the columns of . Then is the th row of , so the -entry of is . Thus means that if and if . Hence is equivalent to .  The proof of the equivalence of and is similar.     Orthogonal Matrices   An matrix is called an orthogonal matrix if it satisfies one (and hence all) of the conditions in .    Rotation matrices are perhaps the most canonical examples of orthogonal matrices, as discussed below.    The rotation matrix is orthogonal for any angle .    See .    It is not enough that the rows of a matrix are merely orthogonal for to be an orthogonal matrix. Here is an example.    In view of and of , orthonormal matrix might be a better name. But orthogonal matrix is standard.     Let        Check that matrix has rows that are orthogonal.    Check that matrix has columns that are NOT orthogonal.    Check that matrix has rows that are NOT orthonormal.    Create a matrix by normalizing each of the rows of .    Check that is an orthogonal matrix.       You should get     This exploration can certainly be done by hand (although it takes some time), but feel free to use an online calculator, MathLab or any other programme.   We studied the idea of closure studying subspaces of . The next theorem tells us that orthogonal matrices are closed under matrix multiplication.       If and are orthogonal matrices, then is also orthogonal (we say that the set of orthogonal matices is closed under matrix multiplication).    If is an orthogonal matrix, then so is .     For , and are invertible, so is also invertible and Hence is orthogonal. For , shows that is orthogonal.        Symmetric Matrices  We now shift our focus from orthogonal matrices to another important class of matrices called symmetric matrices. A symmetric matrix is a matrix which is equal to its transpose. We saw a few examples such when taking transpose matrices.  When we began our study of eigenvalues and eigenvectors, we saw numerous examples of matrices with entries that were real numbers with eigenvalues that were complex numbers. It can be shown that symmetric matrices only have real eigenvalues. We also learned that some matrices are diagonalizable while other matrices are not. It turns out that every symmetric matrix is diagonalizable. In fact, we can say more, but first we need the following definition.    An matrix is said to be orthogonally diagonalizable if an orthogonal matrix can be found such that is diagonal.    We have learned earlier that when we diagonalize a matrix , we write for some matrix where is diagonal, and the diagonal entries are the eigenvalues of . We have also learned that the columns of the matrix are the corresponding eigenvectors of . So when a matrix is orthogonally diagonalizable, we are able to accomplish the diagonalization using a matrix consisting of eigenvectors that form an orthonormal basis for .  The following remarkable theorem shows that the matrices that have this property are precisely the symmetric matrices.   Real Spectral Theorem   Let be an matrix. Then is symmetric if and only if is orthogonally diagonalizable.    If is orthogonally diagonalizable, then it is an easy exercise to prove that it is symmetric. You are asked to do this in .  To prove the ``only if'' part of this theorem, we assume is symmetric, and we need to show it is orthogonally diagonalizable.  We proceed by induction on , the size of the symmetric matrix. If , is already diagonal. If , assume that we know the ``only if'' statement holds for symmetric matrices. Let be an eigenvalue of , and let , where . Next, set , and use the Gram-Schmidt algorithm to find an orthonormal basis for . Let so that is an orthogonal matrix. We have where the block has dimensions , and the block under is a zero matrix, because of the orthogonality of the basis.  Next, using the fact that is symmetric, we notice that so is symmetric. It follows that is also a zero matrix and that is symmetric. Since is an symmetric matrix, we may apply the inductive hypothesis, so there exists an orthogonal matrix such that is diagonal. We observe that is orthogonal, and we compute: is diagonal. Because is orthogonal by , this completes the proof.    Because the eigenvalues of a real symmetric matrix are real, is also called the Real Spectral Theorem , and the set of distinct eigenvalues is called the spectrum of the matrix. A similar result holds for matrices with complex entries, which we avoid digging into.    Find an orthogonal matrix such that is diagonal, where .    The characteristic polynomial of is (adding twice row 1 to row 2): Thus the eigenvalues are , , and , and corresponding eigenvectors are respectively. Moreover, by what at first appears to be remarkably good luck, these eigenvectors are orthogonal . We have , , and , so is an orthogonal matrix. Thus and     Actually, the fact that the eigenvectors in are orthogonal is no coincidence. These vectors certainly must be linearly independent (they correspond to distinct eigenvalues). We will see that the fact that the matrix is symmetric implies that the eigenvectors are orthogonal. To prove this we need the following useful fact about symmetric matrices.    If A is an symmetric matrix, then for all columns and in .    Recall that for all columns and . Because , we get       The converse also holds (see ).      If is a symmetric matrix, then eigenvectors of corresponding to distinct eigenvalues are orthogonal.    Let and , where . We compute Hence , and so because .    Now the procedure for diagonalizing a symmetric matrix is clear. Find the distinct eigenvalues and find orthonormal bases for each eigenspace (the Gram-Schmidt algorithm may be needed when there is a repeated eigenvalue). Then the set of all these basis vectors is orthonormal by and contains vectors. Here is an example.    Orthogonally diagonalize the symmetric matrix .    The characteristic polynomial is Hence the distinct eigenvalues are and are of algebraic multiplicity and , respectively. The geometric multiplicities must be the same, for is diagonalizable, being symmetric. It follows that and . Gaussian elimination gives The eigenvectors in are both orthogonal to as Theorem~ guarantees, but not to each other. However, the Gram-Schmidt process yields an orthogonal basis Normalizing gives orthonormal vectors , so is an orthogonal matrix such that is diagonal.  It is worth noting that other, more convenient, diagonalizing matrices exist. For example, and lie in and they are orthogonal. Moreover, they both have norm (as does ), so is a nicer orthogonal matrix with the property that is diagonal.      Let be an matrix. has an orthonormal set of eigenvectors if and only if is orthogonally diagonalizable.    Let be orthonormal eigenvectors of with corresponding eigenvalues . We must show is orthogonally diagonalizable. Let so that is orthogonal. We have where is the diagonal matrix with diagonal entries . But then , proving this half of the theorem.  For the converse, if is orthogonally diagonalizable, then by it is symmetric. But then tells us that eigenvectors corresponding to distinct eigenvalues are orthogonal. Because is (orthogonally) diagonalizable, we know the geometric multiplicity of each eigenvalue is equal to its algebraic multiplicity. This implies that we can use Gram-Schmidt on each eigenspace of dimension to get a full set of orthogonal eigenvectors.        Suppose is orthogonally diagonalizable. Prove that is symmetric. This is the easy direction of the \"if and only if\" in .      Normalize the rows to make each of the following matrices orthogonal.                                  If is a triangular orthogonal matrix, show that is diagonal and that all diagonal entries are or .    We have ; the first step is to show that is lower triangular and also upper triangular, and so is diagonal. But then , so . This implies that the diagonal entries of are all .      If is orthogonal, show that is orthogonal if and only if or .      If the first two rows of an orthogonal matrix are find all possible third rows.      For each matrix , find an orthogonal matrix such that is diagonal.                                        As a challenge:       As a challenge:        Show that the following are equivalent for a symmetric matrix .    is orthogonal.     .    All eigenvalues of are .       For (b) if and only if (c), use .      We call matrices and  orthogonally similar (and write ) if for an orthogonal matrix .   Show that for all ; ; and and . (This means that ``orthogonally similar\" is an equivalence relation .)    Show that the following are equivalent for any pair of symmetric matrices and :    and are similar.     and are orthogonally similar.     and have the same eigenvalues.            Assume that and are orthogonally similar ( ).   If and are invertible, show that and are orthogonally similar.    Show that and are orthogonally similar.    Show that, if is symmetric, so is .         If is symmetric, show that every eigenvalue of is nonnegative if and only if for some symmetric matrix .      Prove the converse of : If for all -columns and , then is symmetric.      Show that every eigenvalue of is zero if and only if is nilpotent ( for some ).      If has real eigenvalues, show that where is symmetric and is nilpotent.      Let be an orthogonal matrix.   Show that or .    Give examples of such that and .    If , show that has no inverse.    If is and , show that has no inverse.       For part (c): .  For part (d): .      We call a square matrix a projection matrix if .   If is a projection matrix, show that is orthogonal and symmetric.    If is orthogonal and symmetric, show that \\\\ is a projection matrix.    If is and (for example, a unit column in ), show that is a projection matrix.         A matrix that we obtain from the identity matrix by writing its rows in a different order is called a permutation matrix (see ). Show that every permutation matrix is orthogonal.      If the rows of the matrix are orthogonal, show that the -entry of is .         Let be an matrix. Show that the following are equivalent.      has orthogonal rows.     can be factored as , where is invertible and diagonal and has orthonormal rows.     is an invertible, diagonal matrix.     Show that an matrix has orthogonal rows if and only if can be factored as , where is orthogonal and is diagonal and invertible.         Let be a skew-symmetric matrix; that is, . Assume that is an matrix.   Show that is invertible.    Show that is orthogonal.    Show that every orthogonal matrix such that is invertible arises as in part (b) from some skew-symmetric matrix .       For (a): It suffices to show that , in , implies . Compute , and use the fact that and .  For (c): Solve for .      Show that the following are equivalent for an matrix .    is orthogonal.     for all .     for all , .     for all columns , .       For (d) (a), show that column of equals , where is column of the identity matrix.      The above exercise shows that linear transformations with orthogonal standard matrices are distance-preserving (b,c) and angle-preserving (d).         Show that is an orthogonal matrix.    Show that every orthogonal matrix has the form for some angle .       If , then and for some angle .     "
},
{
  "id": "Section-Orthogonal-Matrices-and-Symmetric-Matrices-2",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#Section-Orthogonal-Matrices-and-Symmetric-Matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric matrices "
},
{
  "id": "Subsection-Orthogonal-Matrices-2",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#Subsection-Orthogonal-Matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthonormal "
},
{
  "id": "th-orthogonal-matrices",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#th-orthogonal-matrices",
  "type": "Theorem",
  "number": "7.5.1",
  "title": "",
  "body": "  The following conditions are equivalent for an matrix .    is invertible and .    The rows of are orthonormal.    The columns of are orthonormal.       Note that condition is equivalent to . Let denote the columns of . Then is the th row of , so the -entry of is . Thus means that if and if . Hence is equivalent to .  The proof of the equivalence of and is similar.   "
},
{
  "id": "def-orthogonal-matrices",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#def-orthogonal-matrices",
  "type": "Definition",
  "number": "7.5.2",
  "title": "Orthogonal Matrices.",
  "body": " Orthogonal Matrices   An matrix is called an orthogonal matrix if it satisfies one (and hence all) of the conditions in .   "
},
{
  "id": "ex-rotation-ortho",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#ex-rotation-ortho",
  "type": "Example",
  "number": "7.5.3",
  "title": "",
  "body": "  The rotation matrix is orthogonal for any angle .    See .   "
},
{
  "id": "orthVsOrthnormMat",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#orthVsOrthnormMat",
  "type": "Remark",
  "number": "7.5.4",
  "title": "",
  "body": "  In view of and of , orthonormal matrix might be a better name. But orthogonal matrix is standard.   "
},
{
  "id": "exp-make-orthogonal",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#exp-make-orthogonal",
  "type": "Exploration",
  "number": "7.5.1",
  "title": "",
  "body": " Let        Check that matrix has rows that are orthogonal.    Check that matrix has columns that are NOT orthogonal.    Check that matrix has rows that are NOT orthonormal.    Create a matrix by normalizing each of the rows of .    Check that is an orthogonal matrix.       You should get     This exploration can certainly be done by hand (although it takes some time), but feel free to use an online calculator, MathLab or any other programme.  "
},
{
  "id": "th-orthogonal-product-inverse",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#th-orthogonal-product-inverse",
  "type": "Theorem",
  "number": "7.5.6",
  "title": "",
  "body": "     If and are orthogonal matrices, then is also orthogonal (we say that the set of orthogonal matices is closed under matrix multiplication).    If is an orthogonal matrix, then so is .     For , and are invertible, so is also invertible and Hence is orthogonal. For , shows that is orthogonal.     "
},
{
  "id": "Subsection-Symmetric-Matrices-2",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#Subsection-Symmetric-Matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric symmetric matrix "
},
{
  "id": "def-orthDiag",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#def-orthDiag",
  "type": "Definition",
  "number": "7.5.7",
  "title": "",
  "body": "  An matrix is said to be orthogonally diagonalizable if an orthogonal matrix can be found such that is diagonal.   "
},
{
  "id": "th-PrinAxes",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#th-PrinAxes",
  "type": "Theorem",
  "number": "7.5.8",
  "title": "Real Spectral Theorem.",
  "body": " Real Spectral Theorem   Let be an matrix. Then is symmetric if and only if is orthogonally diagonalizable.    If is orthogonally diagonalizable, then it is an easy exercise to prove that it is symmetric. You are asked to do this in .  To prove the ``only if'' part of this theorem, we assume is symmetric, and we need to show it is orthogonally diagonalizable.  We proceed by induction on , the size of the symmetric matrix. If , is already diagonal. If , assume that we know the ``only if'' statement holds for symmetric matrices. Let be an eigenvalue of , and let , where . Next, set , and use the Gram-Schmidt algorithm to find an orthonormal basis for . Let so that is an orthogonal matrix. We have where the block has dimensions , and the block under is a zero matrix, because of the orthogonality of the basis.  Next, using the fact that is symmetric, we notice that so is symmetric. It follows that is also a zero matrix and that is symmetric. Since is an symmetric matrix, we may apply the inductive hypothesis, so there exists an orthogonal matrix such that is diagonal. We observe that is orthogonal, and we compute: is diagonal. Because is orthogonal by , this completes the proof.   "
},
{
  "id": "Subsection-Symmetric-Matrices-8",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#Subsection-Symmetric-Matrices-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Real Spectral Theorem spectrum "
},
{
  "id": "ex-DiagonalizeSymmetricMatrix",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#ex-DiagonalizeSymmetricMatrix",
  "type": "Example",
  "number": "7.5.9",
  "title": "",
  "body": "  Find an orthogonal matrix such that is diagonal, where .    The characteristic polynomial of is (adding twice row 1 to row 2): Thus the eigenvalues are , , and , and corresponding eigenvectors are respectively. Moreover, by what at first appears to be remarkably good luck, these eigenvectors are orthogonal . We have , , and , so is an orthogonal matrix. Thus and    "
},
{
  "id": "th-dotpSymmetric",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#th-dotpSymmetric",
  "type": "Theorem",
  "number": "7.5.10",
  "title": "",
  "body": "  If A is an symmetric matrix, then for all columns and in .    Recall that for all columns and . Because , we get    "
},
{
  "id": "Subsection-Symmetric-Matrices-12",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#Subsection-Symmetric-Matrices-12",
  "type": "Remark",
  "number": "7.5.11",
  "title": "",
  "body": "  The converse also holds (see ).   "
},
{
  "id": "th-symmetric-has-ortho-ev",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#th-symmetric-has-ortho-ev",
  "type": "Theorem",
  "number": "7.5.12",
  "title": "",
  "body": "  If is a symmetric matrix, then eigenvectors of corresponding to distinct eigenvalues are orthogonal.    Let and , where . We compute Hence , and so because .   "
},
{
  "id": "exa-ortho-diag-symm",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#exa-ortho-diag-symm",
  "type": "Example",
  "number": "7.5.13",
  "title": "",
  "body": "  Orthogonally diagonalize the symmetric matrix .    The characteristic polynomial is Hence the distinct eigenvalues are and are of algebraic multiplicity and , respectively. The geometric multiplicities must be the same, for is diagonalizable, being symmetric. It follows that and . Gaussian elimination gives The eigenvectors in are both orthogonal to as Theorem~ guarantees, but not to each other. However, the Gram-Schmidt process yields an orthogonal basis Normalizing gives orthonormal vectors , so is an orthogonal matrix such that is diagonal.  It is worth noting that other, more convenient, diagonalizing matrices exist. For example, and lie in and they are orthogonal. Moreover, they both have norm (as does ), so is a nicer orthogonal matrix with the property that is diagonal.   "
},
{
  "id": "th-PrinAxesOtherStuff",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#th-PrinAxesOtherStuff",
  "type": "Theorem",
  "number": "7.5.14",
  "title": "",
  "body": "  Let be an matrix. has an orthonormal set of eigenvectors if and only if is orthogonally diagonalizable.    Let be orthonormal eigenvectors of with corresponding eigenvalues . We must show is orthogonally diagonalizable. Let so that is orthogonal. We have where is the diagonal matrix with diagonal entries . But then , proving this half of the theorem.  For the converse, if is orthogonally diagonalizable, then by it is symmetric. But then tells us that eigenvectors corresponding to distinct eigenvalues are orthogonal. Because is (orthogonally) diagonalizable, we know the geometric multiplicity of each eigenvalue is equal to its algebraic multiplicity. This implies that we can use Gram-Schmidt on each eigenspace of dimension to get a full set of orthogonal eigenvectors.   "
},
{
  "id": "prob-ortho-diag-implies-symmetric",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho-diag-implies-symmetric",
  "type": "Exercise",
  "number": "7.5.3.1",
  "title": "",
  "body": "  Suppose is orthogonally diagonalizable. Prove that is symmetric. This is the easy direction of the \"if and only if\" in .   "
},
{
  "id": "prob-make-ortho-matrix1",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-make-ortho-matrix1",
  "type": "Exercise",
  "number": "7.5.3.2",
  "title": "",
  "body": "      "
},
{
  "id": "prob-make-ortho-matrix3",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-make-ortho-matrix3",
  "type": "Exercise",
  "number": "7.5.3.3",
  "title": "",
  "body": "      "
},
{
  "id": "prob-make-ortho-matrix5",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-make-ortho-matrix5",
  "type": "Exercise",
  "number": "7.5.3.4",
  "title": "",
  "body": "      "
},
{
  "id": "prob-make-ortho-matrix7",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-make-ortho-matrix7",
  "type": "Exercise",
  "number": "7.5.3.5",
  "title": "",
  "body": "      "
},
{
  "id": "prob-triag-orthogonal",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-triag-orthogonal",
  "type": "Exercise",
  "number": "7.5.3.6",
  "title": "",
  "body": "  If is a triangular orthogonal matrix, show that is diagonal and that all diagonal entries are or .    We have ; the first step is to show that is lower triangular and also upper triangular, and so is diagonal. But then , so . This implies that the diagonal entries of are all .   "
},
{
  "id": "prob-scalar-othogonal",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-scalar-othogonal",
  "type": "Exercise",
  "number": "7.5.3.7",
  "title": "",
  "body": "  If is orthogonal, show that is orthogonal if and only if or .   "
},
{
  "id": "prob-thirdrow",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-thirdrow",
  "type": "Exercise",
  "number": "7.5.3.8",
  "title": "",
  "body": "  If the first two rows of an orthogonal matrix are find all possible third rows.   "
},
{
  "id": "prob-findQa",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQa",
  "type": "Exercise",
  "number": "7.5.3.9",
  "title": "",
  "body": "      "
},
{
  "id": "prob-findQb",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQb",
  "type": "Exercise",
  "number": "7.5.3.10",
  "title": "",
  "body": "      "
},
{
  "id": "prob-findQc",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQc",
  "type": "Exercise",
  "number": "7.5.3.11",
  "title": "",
  "body": "      "
},
{
  "id": "prob-findQd",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQd",
  "type": "Exercise",
  "number": "7.5.3.12",
  "title": "",
  "body": "      "
},
{
  "id": "prob-findQe",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQe",
  "type": "Exercise",
  "number": "7.5.3.13",
  "title": "",
  "body": "      "
},
{
  "id": "prob-findQf",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQf",
  "type": "Exercise",
  "number": "7.5.3.14",
  "title": "",
  "body": "  As a challenge:    "
},
{
  "id": "prob-findQg",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-findQg",
  "type": "Exercise",
  "number": "7.5.3.15",
  "title": "",
  "body": "  As a challenge:    "
},
{
  "id": "prob-ortho15a",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho15a",
  "type": "Exercise",
  "number": "7.5.3.16",
  "title": "",
  "body": "  Show that the following are equivalent for a symmetric matrix .    is orthogonal.     .    All eigenvalues of are .       For (b) if and only if (c), use .   "
},
{
  "id": "ex-8212",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#ex-8212",
  "type": "Exercise",
  "number": "7.5.3.17",
  "title": "",
  "body": "  We call matrices and  orthogonally similar (and write ) if for an orthogonal matrix .   Show that for all ; ; and and . (This means that ``orthogonally similar\" is an equivalence relation .)    Show that the following are equivalent for any pair of symmetric matrices and :    and are similar.     and are orthogonally similar.     and have the same eigenvalues.         "
},
{
  "id": "prob-ortho14a",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho14a",
  "type": "Exercise",
  "number": "7.5.3.18",
  "title": "",
  "body": "  Assume that and are orthogonally similar ( ).   If and are invertible, show that and are orthogonally similar.    Show that and are orthogonally similar.    Show that, if is symmetric, so is .      "
},
{
  "id": "prob-ortho15",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho15",
  "type": "Exercise",
  "number": "7.5.3.19",
  "title": "",
  "body": "  If is symmetric, show that every eigenvalue of is nonnegative if and only if for some symmetric matrix .   "
},
{
  "id": "ex-8215",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#ex-8215",
  "type": "Exercise",
  "number": "7.5.3.20",
  "title": "",
  "body": "  Prove the converse of : If for all -columns and , then is symmetric.   "
},
{
  "id": "prob-ortho17",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho17",
  "type": "Exercise",
  "number": "7.5.3.21",
  "title": "",
  "body": "  Show that every eigenvalue of is zero if and only if is nilpotent ( for some ).   "
},
{
  "id": "prob-ortho18",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho18",
  "type": "Exercise",
  "number": "7.5.3.22",
  "title": "",
  "body": "  If has real eigenvalues, show that where is symmetric and is nilpotent.   "
},
{
  "id": "prob-ortho19",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho19",
  "type": "Exercise",
  "number": "7.5.3.23",
  "title": "",
  "body": "  Let be an orthogonal matrix.   Show that or .    Give examples of such that and .    If , show that has no inverse.    If is and , show that has no inverse.       For part (c): .  For part (d): .   "
},
{
  "id": "prob-ortho20",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho20",
  "type": "Exercise",
  "number": "7.5.3.24",
  "title": "",
  "body": "  We call a square matrix a projection matrix if .   If is a projection matrix, show that is orthogonal and symmetric.    If is orthogonal and symmetric, show that \\\\ is a projection matrix.    If is and (for example, a unit column in ), show that is a projection matrix.      "
},
{
  "id": "prob-ortho21",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho21",
  "type": "Exercise",
  "number": "7.5.3.25",
  "title": "",
  "body": "  A matrix that we obtain from the identity matrix by writing its rows in a different order is called a permutation matrix (see ). Show that every permutation matrix is orthogonal.   "
},
{
  "id": "prob-ortho22",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho22",
  "type": "Exercise",
  "number": "7.5.3.26",
  "title": "",
  "body": "  If the rows of the matrix are orthogonal, show that the -entry of is .   "
},
{
  "id": "prob-ortho23",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho23",
  "type": "Exercise",
  "number": "7.5.3.27",
  "title": "",
  "body": "     Let be an matrix. Show that the following are equivalent.      has orthogonal rows.     can be factored as , where is invertible and diagonal and has orthonormal rows.     is an invertible, diagonal matrix.     Show that an matrix has orthogonal rows if and only if can be factored as , where is orthogonal and is diagonal and invertible.      "
},
{
  "id": "prob-ortho24",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho24",
  "type": "Exercise",
  "number": "7.5.3.28",
  "title": "",
  "body": "  Let be a skew-symmetric matrix; that is, . Assume that is an matrix.   Show that is invertible.    Show that is orthogonal.    Show that every orthogonal matrix such that is invertible arises as in part (b) from some skew-symmetric matrix .       For (a): It suffices to show that , in , implies . Compute , and use the fact that and .  For (c): Solve for .   "
},
{
  "id": "prob-ortho25",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-ortho25",
  "type": "Exercise",
  "number": "7.5.3.29",
  "title": "",
  "body": "  Show that the following are equivalent for an matrix .    is orthogonal.     for all .     for all , .     for all columns , .       For (d) (a), show that column of equals , where is column of the identity matrix.   "
},
{
  "id": "Section-Orthogonal-Matrices-and-Symmetric-Matrices-5-21",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#Section-Orthogonal-Matrices-and-Symmetric-Matrices-5-21",
  "type": "Remark",
  "number": "7.5.15",
  "title": "",
  "body": "  The above exercise shows that linear transformations with orthogonal standard matrices are distance-preserving (b,c) and angle-preserving (d).   "
},
{
  "id": "prob-rotation-ortho",
  "level": "2",
  "url": "Section-Orthogonal-Matrices-and-Symmetric-Matrices.html#prob-rotation-ortho",
  "type": "Exercise",
  "number": "7.5.3.30",
  "title": "",
  "body": "     Show that is an orthogonal matrix.    Show that every orthogonal matrix has the form for some angle .       If , then and for some angle .   "
},
{
  "id": "Section-QR-Factorization-and-Least-Square-Approximations",
  "level": "1",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html",
  "type": "Section",
  "number": "7.6",
  "title": "Extra Topic: <span class=\"process-math\">\\(QR\\)<\/span> Factorization and Least Square Approximations",
  "body": " Extra Topic: Factorization and Least Square Approximations  One of the main virtues of orthogonal matrices is that they can be easily inverted---the transpose is the inverse. This fact, combined with the factorization theorem in this section, provides a useful way to simplify many matrix calculations.    Let be an matrix with independent columns. A QR-factorization of expresses it as where is with orthonormal columns and is an invertible and upper triangular matrix with positive diagonal entries.    The importance of the factorization lies in the fact that there are computer algorithms that accomplish it with good control over round-off error, making it particularly useful in matrix calculations.  The factorization is a matrix version of the Gram-Schmidt process. Suppose is an matrix with linearly independent columns . The Gram-Schmidt algorithm can be applied to these columns to provide orthogonal columns where and for each . Now write for each . Then are orthonormal columns, and the above equation becomes Using these equations, express each as a linear combination of the : These equations have a matrix form that gives the required factorization:  Here the first factor has orthonormal columns, and the second factor is an upper triangular matrix with positive diagonal entries (and so is invertible). We record this in the following theorem.   QR-Factorization   Every matrix with linearly independent columns has a QR-factorization where has orthonormal columns and is upper triangular with positive diagonal entries.    The matrices and in are uniquely determined by ; we return to this below.    Find the QR-factorization of .    Denote the columns of as , , and , and observe that is independent. If we apply the Gram-Schmidt algorithm to these columns, the result is:  Write for each , so is orthonormal. Then preceding gives where The reader can verify that indeed .    If a matrix has independent rows and we apply QR-factorization to , the result is:    If has independent rows, then factors uniquely as where has orthonormal rows and is an invertible lower triangular matrix with positive main diagonal entries.    Since a square matrix with orthonormal columns is orthogonal, we have:    Every square invertible matrix has factorizations and where and are orthogonal, is upper triangular with positive diagonal entries, and is lower triangular with positive diagonal entries.    We now take the time to prove the uniqueness of the QR-factorization.    Let be an matrix with independent columns. If and are QR-factorizations of , then and .    Write in terms of their columns, and observe first that because and have orthonormal columns. Hence it suffices to show that (then ). Since , the equation gives ; for convenience we write this matrix as This matrix is upper triangular with positive diagonal elements (since this is true for and ), so for each and if . On the other hand, the -entry of is , so we have for all and . But each is in because . We know how to write a vector as a linear combination of an orthonormal basis: because if . The first few equations here are The first of these equations gives whence . But then we have , so the second equation becomes . Now a similar argument gives , and then and follows in the same way. Hence and . Continue in this way to get for all . This proves that .     QR-Algorithm for approximating eigenvalues  We learned about an iterative method for computing eigenvalues in the preceding chapter. We also mentioned that a better method for approximating the eigenvalues of an invertible matrix depends on the QR-factorization of . While it is beyond the scope of this book to pursue a detailed discussion of this method, we give an example and conclude with some remarks on the QR-algorithm.  The QR-algorithm uses QR-factorization repeatedly to create a sequence of matrices as follows:   Define and factor it as .    Define and factor it as .    Define and factor it as .        In general, is factored as and we define . Then is similar to [in fact, ], and hence each has the same eigenvalues as . If the eigenvalues of are real and have distinct absolute values, the remarkable thing is that the sequence of matrices converges to an upper triangular matrix with these eigenvalues on the main diagonal. [See below for the case of complex eigenvalues.]  The example below goes through the whole QR business for a -matrix.    If use the QR-algorithm to approximate the eigenvalues.    The matrices , , and are as follows: where In the same vein: with And lastly, This is converging to and so is approximating the eigenvalues and on the main diagonal.       Least-Squares Approximation  Often an exact solution to a problem in applied mathematics is difficult or impossible to obtain. However, it is usually just as useful to find an approximation to a solution. In particular, finding ``linear approximations\" is a powerful technique in applied mathematics. One basic case is the situation where a system of linear equations has no solution, and it is desirable to find a ``best approximation\" to a solution to the system.  We begin by defining the ``best approximation'' in a natural way, and showing that computing the best approximation reduces to solving a related system of linear equations called the normal equations . Next, we demonstrate a common application where a collection of data points is approximated by a curve.  We conclude this section by showing that -factorization provides us with a more efficient way to solve the normal equations and compute the best approximation.   Let Consider the matrix equation . A quick examination of the last two rows should convince you that this equation has no solutions. In other words, is not in the span of the columns of . If were an exact solution to , then would be .  Since the equation does not have a solution, we will attempt to find the next best thing to a solution by finding such that is as small as possible. The quantity is called the error . The following GeoGebra interactive will help you understand the geometry behind finding . RIGHT-CLICK and DRAG to rotate the image for a better view.       Record your best guess for -- you will have a chance to check your answer in . Now, here is a few questions to keep you on yor toes.    What did you discover about the geometry of minimizing ? Select all that apply.    is orthogonal to the plane spanned by the columns of .     is orthogonal to .     is orthogonal to .     is orthogonal to .     is an orthogonal projection of onto .       Option (c) and (d).    Our geometric observations will help us develop a method for finding .   Suppose is an matrix, and is a column vector in . Consider the matrix equation . If this equation does not have a solution, we can attempt to find a best approximation by finding which minimizes the error , . The expression is also sometimes called the residual .  The error (or the residual) is given in terms of a vector norm. Recall that our definition of the norm involves the sum of squares of the vector components. When we minimize the norm, we minimize the sum of squares. This is why the method we are describing is often referred to as least squares . We will explore this idea further later in this section.  In the case when is a subspace of , we can see geometrically that is the best approximation if and only if is an orthogonal projection of onto , and the error is the magnitude of , as shown below.   Error vector pictured    What we observed above, holds in general. We will use this fact to find . Every vector in can be written in the form for some in . Our goal is to find such that is the orthogonal projection of onto .  By , every vector in is orthogonal to . This means is in the orthogonal complement of , which is .  Therefore, we have Since is normal to the subspace , we call the system in (9.6.1) the normal equations for  . If is invertible, then we can write We will return to the question of invertibility of in . For now, let's revisit the problem posed in .    We now return to the matrix equation of to find that best approximates a solution.    Recall that In this case, exists. Applying , we compute Compare this answer to your guess in . If your guess was correct, nice job! If your guess was different, try setting to the correct answer and use the GeoGebra interactive in to examine the geometry of the problem.    We now come back to the question of when is invertible.    If columns of matrix are linearly independent, then is invertible.    Let be a matrix with linearly independent columns. We will show that has only the trivial solution. For , a solution of , we have Therefore . By linear independence of the columns of we conclude that .    We summarize our findings in the following theorem.    Let be an matrix, let be a column vector in . Consider the matrix equation    Any solution to the normal equations is a best approximation to a solution to in the sense that is minimized.    If the columns of are linearly independent, then is invertible and is given uniquely by         The sytem of linear equations has no solution. Find the vector that best approximates a solution.   We have The normal equations are . We compute  We observe that is is invertible. Multiplying on the left by yields With this vector , the left sides of the equations become This is as close as possible to a solution.      The average number of goals per game scored by a hockey player seems to be related linearly to two factors: the number of years of experience and the number of goals in the preceding 10 games.  The data on the following page were collected on four players. Find the linear function that best fits the data.     If the relationship is given by , then the data can be described as follows: Using , we get Hence the best-fitting function is .      Application of Least Squares to Curve Fitting  In practice, one can fit a function to a set of data points, so that the graph of the function passes through each of the points as well as possible. However, this is sometimes impossible and may not even be desirable (overfitting). In this section, we will learn how to approximate a collection of data points with a line (or a curve) that fits the ``trend\" of the points. We will start with data that fit a linear pattern.   Consider the points , and . These points do not lie on a straight line, but they have a general upward linear trend. (Typically there would be many more points to consider, but we will limit our exploration to what we can do by hand.) Our goal is to find a line that fits these points as closely as possible.  We are looking for a function of the form such that the following infeasible system is satisfied as closely as possible From the first part of this section we know how to find a best approximation. By , we have According to our computations, the line that best fits the data is given by Let's take a look.   Linear regression    We found this fit by minimizing . We will now investigate the meaning of this expression in relation to the line and the data points. Observe that each entry of is the signed vertical distance between a particular point and the line. Instead of computing the error, , we compute to avoid the square root. Minimizing also minimizes . Therefore, what we have minimized is the sum of squares of the vertical distances between the data points and the line. The following GeoGebra interactive will help you explore this idea.        In we discovered that is the sum of squares of vertical distances between the given data points and the proposed line.  By minimizing , we minimize the sum of squares of vertical distances. This observation holds in general. Given a collection of points finding a linear function of the form that best fits the points we would find a best solution to the system by minimizing A geometric interpretation of is shown below.   Geometric picture of error    The line we obtain in this fashion is called a line of best fit or a trendline , and the method we used is referred to as the method of least squares . We can apply the method of least squares to find best fitting non-linear functions.    Find the least squares approximating quadratic polynomial of the form for the following points.     We are looking for an approximate solution to the system of equations This corresponds to the matrix equation Multiplying on the left by gives us the normal equations.  It turns out that is invertible, so it is easy to solve for . You can use technology to accomplish this. Feel free to use any online tool or Mathlab for this for practice. You arrive at the solution Therefore, the quadratic function of best fit is given by . You can see the graph and the points shown below. Before the end of this section we will return to this problem with a more computationally efficient approach.      Given the data points , , and , find the least squares approximating function of the form .    We are looking for an approximate solution to the system of equations This corresponds to the matrix equation Using the normal equations, we obtain  Solving for yields Therefore, the function of best fit (of the given form) is given by        -Factorization: A Quicker Way to do Least Squares  When solving the normal equations in (9.2.1) , it is advantageous to have a -factorization of . For then we can write Since is invertible, then also has an inverse, and multiplying on the left by it yields This last equation is easily solved by back-substitution, since is upper triangular. This greatly reduces the amount of computations we need to make, as we will observe by using Octave in our final example of the section.      In each case find the QR-factorization of .                                            If is upper triangular and invertible, show that there exists a diagonal matrix with diagonal entries such that is invertible, upper triangular, and has positive diagonal entries.      If has independent columns, let \\\\ where has orthonormal columns and is invertible and upper triangular. (Some authors do not require a -factorization to have positive diagonal entries.) Show that there is a diagonal matrix with diagonal entries such that is the QR-factorization of .   See .     In each case, find the exact eigenvalues and then approximate them using the QR-algorithm.           and                    If is symmetric, show that each matrix in the QR-algorithm is also symmetric. Deduce that they converge to a diagonal matrix.    Use induction on . If , . In general , so the fact that implies . The eigenvalues of are all real, so the converge to an upper triangular matrix . But must also be symmetric (it is the limit of symmetric matrices), so it is diagonal.      Apply the QR-algorithm to Explain.      Given a matrix , let , , and , , be the matrices constructed in the QR-algorithm. Show that for each and hence that this is a QR-factorization of .    Show that for each , and use this equality to compute ``from the centre out.'' Use the fact that for any square matrices and .       Find the best approximation to a solution to the system of equations. Enter answers in fraction form below.           Find a linear function of best fit for each of the following sets of data points. Examine how well your line fits the points by typing the equation of the line into the Desmos window.      Enter your answers in fraction form.                           Use Mathlab or another program\/tool to find the least squares approximating quadratic function for the following data points. Round your answers to three decimal places.           If is an matrix, it can be proved that there exists a unique matrix satisfying the following four conditions: ; ; and are symmetric. The matrix is called the Moore-Penrose inverse.   If is square and invertible, show that .    If , show that .    If , show that . (Notice the appearance of the Moore-Penrose inverse arrived when we solve the normal equations, arriving at Equation ).        "
},
{
  "id": "def-QR-factorization",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#def-QR-factorization",
  "type": "Definition",
  "number": "7.6.1",
  "title": "",
  "body": "  Let be an matrix with independent columns. A QR-factorization of expresses it as where is with orthonormal columns and is an invertible and upper triangular matrix with positive diagonal entries.   "
},
{
  "id": "th-QR-025133",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#th-QR-025133",
  "type": "Theorem",
  "number": "7.6.2",
  "title": "QR-Factorization.",
  "body": " QR-Factorization   Every matrix with linearly independent columns has a QR-factorization where has orthonormal columns and is upper triangular with positive diagonal entries.   "
},
{
  "id": "ex-QR4x3-025139",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-QR4x3-025139",
  "type": "Example",
  "number": "7.6.3",
  "title": "",
  "body": "  Find the QR-factorization of .    Denote the columns of as , , and , and observe that is independent. If we apply the Gram-Schmidt algorithm to these columns, the result is:  Write for each , so is orthonormal. Then preceding gives where The reader can verify that indeed .   "
},
{
  "id": "cor-QR-transpose-025162",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#cor-QR-transpose-025162",
  "type": "Corollary",
  "number": "7.6.4",
  "title": "",
  "body": "  If has independent rows, then factors uniquely as where has orthonormal rows and is an invertible lower triangular matrix with positive main diagonal entries.   "
},
{
  "id": "th-025166",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#th-025166",
  "type": "Theorem",
  "number": "7.6.5",
  "title": "",
  "body": "  Every square invertible matrix has factorizations and where and are orthogonal, is upper triangular with positive diagonal entries, and is lower triangular with positive diagonal entries.   "
},
{
  "id": "th-QR-unique-025187",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#th-QR-unique-025187",
  "type": "Theorem",
  "number": "7.6.6",
  "title": "",
  "body": "  Let be an matrix with independent columns. If and are QR-factorizations of , then and .    Write in terms of their columns, and observe first that because and have orthonormal columns. Hence it suffices to show that (then ). Since , the equation gives ; for convenience we write this matrix as This matrix is upper triangular with positive diagonal elements (since this is true for and ), so for each and if . On the other hand, the -entry of is , so we have for all and . But each is in because . We know how to write a vector as a linear combination of an orthonormal basis: because if . The first few equations here are The first of these equations gives whence . But then we have , so the second equation becomes . Now a similar argument gives , and then and follows in the same way. Hence and . Continue in this way to get for all . This proves that .   "
},
{
  "id": "Subsection-QR-Algorithm-for-approximating-eigenvalues-3",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#Subsection-QR-Algorithm-for-approximating-eigenvalues-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "QR-algorithm "
},
{
  "id": "QR-algortihm-2x2-025425",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#QR-algortihm-2x2-025425",
  "type": "Example",
  "number": "7.6.7",
  "title": "",
  "body": "  If use the QR-algorithm to approximate the eigenvalues.    The matrices , , and are as follows: where In the same vein: with And lastly, This is converging to and so is approximating the eigenvalues and on the main diagonal.   "
},
{
  "id": "exp-leastSq1",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#exp-leastSq1",
  "type": "Exploration",
  "number": "7.6.1",
  "title": "",
  "body": " Let Consider the matrix equation . A quick examination of the last two rows should convince you that this equation has no solutions. In other words, is not in the span of the columns of . If were an exact solution to , then would be .  Since the equation does not have a solution, we will attempt to find the next best thing to a solution by finding such that is as small as possible. The quantity is called the error . The following GeoGebra interactive will help you understand the geometry behind finding . RIGHT-CLICK and DRAG to rotate the image for a better view.       Record your best guess for -- you will have a chance to check your answer in . Now, here is a few questions to keep you on yor toes.    What did you discover about the geometry of minimizing ? Select all that apply.    is orthogonal to the plane spanned by the columns of .     is orthogonal to .     is orthogonal to .     is orthogonal to .     is an orthogonal projection of onto .       Option (c) and (d).    Our geometric observations will help us develop a method for finding .  "
},
{
  "id": "ex-leastSquares1",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-leastSquares1",
  "type": "Example",
  "number": "7.6.10",
  "title": "",
  "body": "  We now return to the matrix equation of to find that best approximates a solution.    Recall that In this case, exists. Applying , we compute Compare this answer to your guess in . If your guess was correct, nice job! If your guess was different, try setting to the correct answer and use the GeoGebra interactive in to examine the geometry of the problem.   "
},
{
  "id": "th-ATAinverse",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#th-ATAinverse",
  "type": "Theorem",
  "number": "7.6.11",
  "title": "",
  "body": "  If columns of matrix are linearly independent, then is invertible.    Let be a matrix with linearly independent columns. We will show that has only the trivial solution. For , a solution of , we have Therefore . By linear independence of the columns of we conclude that .   "
},
{
  "id": "th-bestApprox",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#th-bestApprox",
  "type": "Theorem",
  "number": "7.6.12",
  "title": "",
  "body": "  Let be an matrix, let be a column vector in . Consider the matrix equation    Any solution to the normal equations is a best approximation to a solution to in the sense that is minimized.    If the columns of are linearly independent, then is invertible and is given uniquely by       "
},
{
  "id": "ex-leastSq2",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-leastSq2",
  "type": "Example",
  "number": "7.6.13",
  "title": "",
  "body": " The sytem of linear equations has no solution. Find the vector that best approximates a solution.   We have The normal equations are . We compute  We observe that is is invertible. Multiplying on the left by yields With this vector , the left sides of the equations become This is as close as possible to a solution.   "
},
{
  "id": "ex-leastSquares3",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-leastSquares3",
  "type": "Example",
  "number": "7.6.14",
  "title": "",
  "body": "  The average number of goals per game scored by a hockey player seems to be related linearly to two factors: the number of years of experience and the number of goals in the preceding 10 games.  The data on the following page were collected on four players. Find the linear function that best fits the data.     If the relationship is given by , then the data can be described as follows: Using , we get Hence the best-fitting function is .   "
},
{
  "id": "exp-leastSq2",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#exp-leastSq2",
  "type": "Exploration",
  "number": "7.6.2",
  "title": "",
  "body": " Consider the points , and . These points do not lie on a straight line, but they have a general upward linear trend. (Typically there would be many more points to consider, but we will limit our exploration to what we can do by hand.) Our goal is to find a line that fits these points as closely as possible.  We are looking for a function of the form such that the following infeasible system is satisfied as closely as possible From the first part of this section we know how to find a best approximation. By , we have According to our computations, the line that best fits the data is given by Let's take a look.   Linear regression    We found this fit by minimizing . We will now investigate the meaning of this expression in relation to the line and the data points. Observe that each entry of is the signed vertical distance between a particular point and the line. Instead of computing the error, , we compute to avoid the square root. Minimizing also minimizes . Therefore, what we have minimized is the sum of squares of the vertical distances between the data points and the line. The following GeoGebra interactive will help you explore this idea.       "
},
{
  "id": "ex-leastSquaresPoly",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-leastSquaresPoly",
  "type": "Example",
  "number": "7.6.16",
  "title": "",
  "body": "  Find the least squares approximating quadratic polynomial of the form for the following points.     We are looking for an approximate solution to the system of equations This corresponds to the matrix equation Multiplying on the left by gives us the normal equations.  It turns out that is invertible, so it is easy to solve for . You can use technology to accomplish this. Feel free to use any online tool or Mathlab for this for practice. You arrive at the solution Therefore, the quadratic function of best fit is given by . You can see the graph and the points shown below. Before the end of this section we will return to this problem with a more computationally efficient approach.   "
},
{
  "id": "ex-leastSq3",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-leastSq3",
  "type": "Example",
  "number": "7.6.17",
  "title": "",
  "body": "  Given the data points , , and , find the least squares approximating function of the form .    We are looking for an approximate solution to the system of equations This corresponds to the matrix equation Using the normal equations, we obtain  Solving for yields Therefore, the function of best fit (of the given form) is given by     "
},
{
  "id": "prob-findQR-2",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-findQR-2",
  "type": "Exercise",
  "number": "7.6.5.1",
  "title": "",
  "body": "           "
},
{
  "id": "prob-findQR-3",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-findQR-3",
  "type": "Exercise",
  "number": "7.6.5.2",
  "title": "",
  "body": "           "
},
{
  "id": "prob-findQR-4",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-findQR-4",
  "type": "Exercise",
  "number": "7.6.5.3",
  "title": "",
  "body": "      "
},
{
  "id": "prob-findQR-5",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-findQR-5",
  "type": "Exercise",
  "number": "7.6.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "prob-take-diag-positive",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-take-diag-positive",
  "type": "Exercise",
  "number": "7.6.5.5",
  "title": "",
  "body": "  If is upper triangular and invertible, show that there exists a diagonal matrix with diagonal entries such that is invertible, upper triangular, and has positive diagonal entries.   "
},
{
  "id": "prob-fullQR",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-fullQR",
  "type": "Exercise",
  "number": "7.6.5.6",
  "title": "",
  "body": "  If has independent columns, let \\\\ where has orthonormal columns and is invertible and upper triangular. (Some authors do not require a -factorization to have positive diagonal entries.) Show that there is a diagonal matrix with diagonal entries such that is the QR-factorization of .   See .  "
},
{
  "id": "Section-QR-Factorization-and-Least-Square-Approximations-19-4-2",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#Section-QR-Factorization-and-Least-Square-Approximations-19-4-2",
  "type": "Exercise",
  "number": "7.6.5.7",
  "title": "",
  "body": "        and    "
},
{
  "id": "Section-QR-Factorization-and-Least-Square-Approximations-19-4-3",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#Section-QR-Factorization-and-Least-Square-Approximations-19-4-3",
  "type": "Exercise",
  "number": "7.6.5.8",
  "title": "",
  "body": "           "
},
{
  "id": "prob-QR-symmetric",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-QR-symmetric",
  "type": "Exercise",
  "number": "7.6.5.9",
  "title": "",
  "body": "  If is symmetric, show that each matrix in the QR-algorithm is also symmetric. Deduce that they converge to a diagonal matrix.    Use induction on . If , . In general , so the fact that implies . The eigenvalues of are all real, so the converge to an upper triangular matrix . But must also be symmetric (it is the limit of symmetric matrices), so it is diagonal.   "
},
{
  "id": "QR-special-2x2",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#QR-special-2x2",
  "type": "Exercise",
  "number": "7.6.5.10",
  "title": "",
  "body": "  Apply the QR-algorithm to Explain.   "
},
{
  "id": "prob-analyzeQRalgorithm",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-analyzeQRalgorithm",
  "type": "Exercise",
  "number": "7.6.5.11",
  "title": "",
  "body": "  Given a matrix , let , , and , , be the matrices constructed in the QR-algorithm. Show that for each and hence that this is a QR-factorization of .    Show that for each , and use this equality to compute ``from the centre out.'' Use the fact that for any square matrices and .   "
},
{
  "id": "prob-leastSq1",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-leastSq1",
  "type": "Exercise",
  "number": "7.6.5.12",
  "title": "",
  "body": "  Find the best approximation to a solution to the system of equations. Enter answers in fraction form below.        "
},
{
  "id": "prob-leastSq2a",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-leastSq2a",
  "type": "Exercise",
  "number": "7.6.5.13",
  "title": "",
  "body": "   Enter your answers in fraction form.         "
},
{
  "id": "prob-leastSq2b",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-leastSq2b",
  "type": "Exercise",
  "number": "7.6.5.14",
  "title": "",
  "body": "            "
},
{
  "id": "prob-leastSq3",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#prob-leastSq3",
  "type": "Exercise",
  "number": "7.6.5.15",
  "title": "",
  "body": "  Use Mathlab or another program\/tool to find the least squares approximating quadratic function for the following data points. Round your answers to three decimal places.        "
},
{
  "id": "ex-5-6-14",
  "level": "2",
  "url": "Section-QR-Factorization-and-Least-Square-Approximations.html#ex-5-6-14",
  "type": "Exercise",
  "number": "7.6.5.16",
  "title": "",
  "body": "  If is an matrix, it can be proved that there exists a unique matrix satisfying the following four conditions: ; ; and are symmetric. The matrix is called the Moore-Penrose inverse.   If is square and invertible, show that .    If , show that .    If , show that . (Notice the appearance of the Moore-Penrose inverse arrived when we solve the normal equations, arriving at Equation ).      "
},
{
  "id": "Section-Singular-Value-Decomposition",
  "level": "1",
  "url": "Section-Singular-Value-Decomposition.html",
  "type": "Section",
  "number": "7.7",
  "title": "Extra Topic: Singular Value Decomposition",
  "body": " Extra Topic: Singular Value Decomposition  We begin this section with an important definition.    Let be an matrix. The singular values of are the square roots of the positive eigenvalues of     Singular Value Decomposition (SVD) can be thought of as a generalization of orthogonal diagonalization of a symmetric matrix to an arbitrary matrix. This decomposition is the focus of this section. The following is a useful result that will help when computing the SVD of matrices.    Let be an matrix. Then and have the same eigenvalues.    Suppose is an matrix, and suppose that is a nonzero eigenvalue of . Then there exists a nonzero vector such that Multiplying both sides of this equation by yields: Since and , , and thus by , ; thus , implying that .  Therefore is an eigenvector of corresponding to eigenvalue . An analogous argument can be used to show that every nonzero eigenvalue of is an eigenvalue of , thus completing the proof.    Given an matrix , we will see how to express as a product where    is an orthogonal matrix whose columns are eigenvectors of .     is an orthogonal matrix whose columns are eigenvectors of .     is an matrix whose only nonzero values lie on its main diagonal, and are the singular values of .   How can we find such a decomposition? We are aiming to decompose in the following form: where is a block matrix of the form Thus and it follows that and so Similarly, Therefore, you would find an orthonormal basis of eigenvectors for make them the columns of a matrix such that the corresponding eigenvalues are decreasing. This gives You could then do the same for to get .  We formalize this discussion in the following theorem.   Singular Value Decomposition   Let be an matrix. Then there exist orthogonal matrices and of the appropriate size such that where is of the form and is a block matrix of the form for the the singular values of     There exists an orthonormal basis, such that where for and equals zero if Thus for  because For define by Thus Now, This means that when and when . Thus is an orthonormal set of vectors in Also, Using Gram-Schmidt, extend to an orthonormal basis for all of and let while Thus is the matrix which has the as columns and is defined as the matrix which has the as columns. Then  where is given in the statement of the theorem.    The SVD has as an immediate corollary which is given in the following interesting result.    Let be an matrix. Then the rank of (or of ) equals the number of singular values.    Let's compute the SVD of a simple matrix.    Let Find the SVD of .    To begin, we compute and .  Since is while is , and and have the same nonzero eigenvalues (by ), we compute the characteristic polynomial (because it is easier to compute than ). Therefore, the eigenvalues of are and . The eigenvalues of are , , and , and the singular values of are and . By convention, we list the eigenvalues (and corresponding singular values) in non increasing order (i.e., from largest to smallest).     To construct the matrix we need to find eigenvectors for . Since the eigenvalues of are distinct, the corresponding eigenvectors are orthogonal, and we need only normalize them.   : solve . so    : solve . so    : solve . so   With the eigenvectors found, let Then Also, and we use , , and to find . Since is orthogonal and , it follows that  Let , and let , where and are the two columns of . Then we have which implies that and . Thus, and Therefore, and       Find an SVD for .    Since is , is a matrix whose eigenvalues are easier to find than the eigenvalues of the matrix . Thus has eigenvalue , and the eigenvalues of are , , and . Furthermore, has only one singular value, .     To do so we find an eigenvector for and normalize it. In this case, finding a unit eigenvector is trivial: , and . Also, and we use , , and to find .  Now, with , and , where , , and are the columns of . Thus This gives us , so The vectors and are eigenvectors of corresponding to the eigenvalue . Instead of solving the system and then using the Gram-Schmidt process on the resulting set of two basic eigenvectors, the following approach may be used.  Find vectors and by first extending to a basis of , then using the Gram-Schmidt algorithm to orthogonalize the basis, and finally normalizing the vectors. Starting with instead of makes the arithmetic a bit easier. It is easy to verify that is a basis of . Set and apply the Gram-Schmidt algorithm to . This gives us Therefore, and Finally,       Find an SVD for the matrix     First consider  What are some eigenvalues and eigenvectors? Some computing shows that the eigenvalues are and . Furthermore, we can find a basis for each eigenspace. Thus the matrix is given by Next consider  Eigenvalues are and , and eigenspaces are Thus you can let be given by Let's check this.       This illustrates that if you have a good way to find the eigenvectors and eigenvalues for a Hermitian matrix which has nonnegative eigenvalues, then you also have a good way to find the SVD of an arbitrary matrix.  "
},
{
  "id": "singularvalues",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#singularvalues",
  "type": "Definition",
  "number": "7.7.1",
  "title": "",
  "body": "  Let be an matrix. The singular values of are the square roots of the positive eigenvalues of    "
},
{
  "id": "lem-samenonzeroeigenvalues",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#lem-samenonzeroeigenvalues",
  "type": "Lemma",
  "number": "7.7.2",
  "title": "",
  "body": "  Let be an matrix. Then and have the same eigenvalues.    Suppose is an matrix, and suppose that is a nonzero eigenvalue of . Then there exists a nonzero vector such that Multiplying both sides of this equation by yields: Since and , , and thus by , ; thus , implying that .  Therefore is an eigenvector of corresponding to eigenvalue . An analogous argument can be used to show that every nonzero eigenvalue of is an eigenvalue of , thus completing the proof.   "
},
{
  "id": "th-singvaldecomp",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#th-singvaldecomp",
  "type": "Theorem",
  "number": "7.7.3",
  "title": "Singular Value Decomposition.",
  "body": " Singular Value Decomposition   Let be an matrix. Then there exist orthogonal matrices and of the appropriate size such that where is of the form and is a block matrix of the form for the the singular values of     There exists an orthonormal basis, such that where for and equals zero if Thus for  because For define by Thus Now, This means that when and when . Thus is an orthonormal set of vectors in Also, Using Gram-Schmidt, extend to an orthonormal basis for all of and let while Thus is the matrix which has the as columns and is defined as the matrix which has the as columns. Then  where is given in the statement of the theorem.   "
},
{
  "id": "cor-ranksingularvalues",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#cor-ranksingularvalues",
  "type": "Corollary",
  "number": "7.7.4",
  "title": "",
  "body": "  Let be an matrix. Then the rank of (or of ) equals the number of singular values.   "
},
{
  "id": "ex-SVD2x3",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#ex-SVD2x3",
  "type": "Example",
  "number": "7.7.5",
  "title": "",
  "body": "  Let Find the SVD of .    To begin, we compute and .  Since is while is , and and have the same nonzero eigenvalues (by ), we compute the characteristic polynomial (because it is easier to compute than ). Therefore, the eigenvalues of are and . The eigenvalues of are , , and , and the singular values of are and . By convention, we list the eigenvalues (and corresponding singular values) in non increasing order (i.e., from largest to smallest).     To construct the matrix we need to find eigenvectors for . Since the eigenvalues of are distinct, the corresponding eigenvectors are orthogonal, and we need only normalize them.   : solve . so    : solve . so    : solve . so   With the eigenvectors found, let Then Also, and we use , , and to find . Since is orthogonal and , it follows that  Let , and let , where and are the two columns of . Then we have which implies that and . Thus, and Therefore, and    "
},
{
  "id": "ex-SVD3x1",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#ex-SVD3x1",
  "type": "Example",
  "number": "7.7.6",
  "title": "",
  "body": "  Find an SVD for .    Since is , is a matrix whose eigenvalues are easier to find than the eigenvalues of the matrix . Thus has eigenvalue , and the eigenvalues of are , , and . Furthermore, has only one singular value, .     To do so we find an eigenvector for and normalize it. In this case, finding a unit eigenvector is trivial: , and . Also, and we use , , and to find .  Now, with , and , where , , and are the columns of . Thus This gives us , so The vectors and are eigenvectors of corresponding to the eigenvalue . Instead of solving the system and then using the Gram-Schmidt process on the resulting set of two basic eigenvectors, the following approach may be used.  Find vectors and by first extending to a basis of , then using the Gram-Schmidt algorithm to orthogonalize the basis, and finally normalizing the vectors. Starting with instead of makes the arithmetic a bit easier. It is easy to verify that is a basis of . Set and apply the Gram-Schmidt algorithm to . This gives us Therefore, and Finally,    "
},
{
  "id": "SVDanother2x3",
  "level": "2",
  "url": "Section-Singular-Value-Decomposition.html#SVDanother2x3",
  "type": "Example",
  "number": "7.7.7",
  "title": "",
  "body": "  Find an SVD for the matrix     First consider  What are some eigenvalues and eigenvectors? Some computing shows that the eigenvalues are and . Furthermore, we can find a basis for each eigenspace. Thus the matrix is given by Next consider  Eigenvalues are and , and eigenspaces are Thus you can let be given by Let's check this.      "
},
{
  "id": "Section-Curve-Fitting",
  "level": "1",
  "url": "Section-Curve-Fitting.html",
  "type": "Section",
  "number": "7.8",
  "title": "Extra Topic: Curve Fitting",
  "body": " Extra Topic: Curve Fitting  We know that two points determine a line. Do you know how many points determine a quadratic function of the form ? Given any number of points in the plane, is it always possible to find a polynomial function whose graph contains every one of the given points? To address these questions we will start with an alternative way of finding an equation of a line.   Consider two points and . We will find a function whose graph is a line that passes through these points. We know that for some constants and . Because the graph of passes through and , we must have the following: To solve for and , we need to solve the following matrix equation: Solving the equation, we find that and . This gives us: The GeoGebra interactive below shows two points and , together with the matrix equation that produces function coefficients for the function whose graph passes through and . Drag the points around the plane to see how the matrix equation changes.       From a purely formal standpoint, we observe that the matrix equation has the form: where each row corresponds to one point.   Now we are ready to move to quadratic, and higher degree polynomial functions. Linear function in had two unknown coefficients that we needed to find in order to determine the function. Two points gave us a system of two equations and two unknowns.  A quadratic polynomial function, whose graph is a parabola, is given by: Three unknown coefficients will require three points to determine them.   We will find a quadratic function of the form whose graph passes through To do this, we need to find coefficients , and such that The following GeoGebra interactive shows points , , and , together with the matrix equation, and its solution.       Drag the points around the plane to observe changes in the coefficient matrix. Think geometrically to find locations of , and such that    ; .     ; .   Observe the structure of the matrix equation.    In general (provided that no one point lies directly above another), given points, we can always find an -degree polynomial function whose graph contains every one of the given points. To find such a polynomial function, given by , we need to solve a system of equations with unknowns which translates into the following matrix equation. In and you will show that the matrix equation in has a unique solution if and only if no two of the given points share an -coordinate.    On the Dangers of Overfitting  It is exciting to know that we can fit a function to a set of data points, but before we get carried away fitting a 299-degree polynomial function to 300 points, let's consider the following situation. In the GeoGebra interactive below, you can see that points - form a somewhat linear pattern.  A linear model can be used to describe these points. Click on the ``Display linear model\" check-box to see the trend line. (You learned how to find such models when discovering Least-Squares Approximation). You can see that even though the line does not pass through any of the given points, it fits the overall pattern of the points and can be used to estimate the -coordinates of other points whose -coordinates fall within the limits of the scatter plot.  It might be tempting to think that we can find a better model by finding a -degree polynomial function whose graph contains every one of the six points. Click on the ``Display 5th degree poly model\" check-box to see the alternative model. Can this model be successfully used to make predictions? Try moving individual points around to see how their placement affects the line and the curve.   A larger version of this activity is available here .    Any modeling process which insists on fitting the existing data points exactly, at the risk of failing to predict future observations, is referred to as overfitting . While sometimes it is beneficial to have a curve that passes through specific points, more often it is the trend, not the individual instances, that we try to capture. We will return to this topic when discussing least-squares approximations.      In each case, find a polynomial function of an appropriate degree that passes through the given points. You are encourage to plot the graph of in Desmos.                              Two GeoGebra screenshots are shown below:            In the first screenshot, points and coincide. In the second screenshot, point is located directly above point . In both cases, GeoGebra failed to produce a linear function whose graph passes through and .  Based on what you know about functions and geometry, explain why the process fails for these two examples. How do your observations correspond to what happens from an algebraic standpoint?      Both systems are inconsistent.      The first system is inconsistent, the second has infinitely many solutions.      Both systems have infinitely many solutions.      The first system has infinitely many solutions, the second system is inconsistent.        Prove that has a unique solution if and only if no two given points share an -coordinate. Under what circumstances is a solution not unique? Under what circumstances does a solution not exist?    Show that the rows of the matrix are linearly independent if and only if no two given points share an -coordinate.     "
},
{
  "id": "exp-curveFitLine",
  "level": "2",
  "url": "Section-Curve-Fitting.html#exp-curveFitLine",
  "type": "Exploration",
  "number": "7.8.1",
  "title": "",
  "body": " Consider two points and . We will find a function whose graph is a line that passes through these points. We know that for some constants and . Because the graph of passes through and , we must have the following: To solve for and , we need to solve the following matrix equation: Solving the equation, we find that and . This gives us: The GeoGebra interactive below shows two points and , together with the matrix equation that produces function coefficients for the function whose graph passes through and . Drag the points around the plane to see how the matrix equation changes.       From a purely formal standpoint, we observe that the matrix equation has the form: where each row corresponds to one point.  "
},
{
  "id": "exp-curveFitParabola",
  "level": "2",
  "url": "Section-Curve-Fitting.html#exp-curveFitParabola",
  "type": "Exploration",
  "number": "7.8.2",
  "title": "",
  "body": " We will find a quadratic function of the form whose graph passes through To do this, we need to find coefficients , and such that The following GeoGebra interactive shows points , , and , together with the matrix equation, and its solution.       Drag the points around the plane to observe changes in the coefficient matrix. Think geometrically to find locations of , and such that    ; .     ; .   Observe the structure of the matrix equation.   "
},
{
  "id": "Subsection-On-the-Dangers-of-Overfitting-5",
  "level": "2",
  "url": "Section-Curve-Fitting.html#Subsection-On-the-Dangers-of-Overfitting-5",
  "type": "Figure",
  "number": "7.8.3",
  "title": "",
  "body": " A larger version of this activity is available here .   "
},
{
  "id": "prob-polyFit1",
  "level": "2",
  "url": "Section-Curve-Fitting.html#prob-polyFit1",
  "type": "Exercise",
  "number": "7.8.2.1",
  "title": "",
  "body": "           "
},
{
  "id": "prob-polyFit2",
  "level": "2",
  "url": "Section-Curve-Fitting.html#prob-polyFit2",
  "type": "Exercise",
  "number": "7.8.2.2",
  "title": "",
  "body": "           "
},
{
  "id": "prob-systemProblems1",
  "level": "2",
  "url": "Section-Curve-Fitting.html#prob-systemProblems1",
  "type": "Exercise",
  "number": "7.8.2.3",
  "title": "",
  "body": "  Two GeoGebra screenshots are shown below:            In the first screenshot, points and coincide. In the second screenshot, point is located directly above point . In both cases, GeoGebra failed to produce a linear function whose graph passes through and .  Based on what you know about functions and geometry, explain why the process fails for these two examples. How do your observations correspond to what happens from an algebraic standpoint?      Both systems are inconsistent.      The first system is inconsistent, the second has infinitely many solutions.      Both systems have infinitely many solutions.      The first system has infinitely many solutions, the second system is inconsistent.     "
},
{
  "id": "prob-systemProblems2",
  "level": "2",
  "url": "Section-Curve-Fitting.html#prob-systemProblems2",
  "type": "Exercise",
  "number": "7.8.2.4",
  "title": "",
  "body": "  Prove that has a unique solution if and only if no two given points share an -coordinate. Under what circumstances is a solution not unique? Under what circumstances does a solution not exist?    Show that the rows of the matrix are linearly independent if and only if no two given points share an -coordinate.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
