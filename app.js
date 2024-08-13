//QUESTION 1
// document.write("Result:<br>");
// let a=10;
// document.write("The value of a is: "+a+ "<br>");
// document.write("---------------------------------------<br><br>");

// ++a;
// document.write("The value of ++a is: "+a+ "<br>");
// document.write("Now the value of a is: "+a+ "<br><br>");

// document.write("The value of a++ is: "+a+ "<br>");
// a++;
// document.write("Now the value of a is: "+a+ "<br><br>");

// --a;
// document.write("The value of --a is: "+a+ "<br>");
// document.write("Now the value of a is: "+a+ "<br><br>");

// document.write("The value of a-- is: "+a+ "<br>");
// a--;
// document.write("Now the value of a is: "+a+ "<br><br>");


//QUESTION 2
// let a=2;
// document.write("a is: "+a+ "<br>");

// let b=1;
// document.write("b is: "+b+ "<br>");

// var result = --a - --b + ++b + b--;
// document.write("result is: "+result+ "<br>");

//QUESTION 3
// let user_name=prompt("Enter your name:");

// if(user_name)
// {
//     alert("Hello, "+user_name);
// }
// else
// {
//     alert("You didn't enter your name");

// }

//QUESTION 5
// let input = prompt("Enter a number for the multiplication table (leave blank for default 5):");

// let num = (input === null || input.trim() === '') ? 5 : parseInt(input, 10);

// if (isNaN(num)) 
//     {
//     num = 5;
//     }

// for (let i = 1; i <= 10; i++) 
//     {
//     document.write(num + ' x ' + i + ' = ' + (num * i) + '<br>');
//     }

//QUESTION 6
        // let subject1 = prompt("Enter the name of the first subject:");
        // let subject2 = prompt("Enter the name of the second subject:");
        // let subject3 = prompt("Enter the name of the third subject:");

        // // Total marks for each subject
        // const totalMarksPerSubject = 100;

        // // Take obtained marks for the first subject
        // let obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

        // //  Take obtained marks for the remaining 2 subjects
        // let obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
        // let obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

        // // Calculate total obtained marks and percentage
        // let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        // let totalMarks = totalMarksPerSubject * 3; // 3 subjects
        // let percentage = (totalObtainedMarks / totalMarks) * 100;

        // // Display results in the browser
        // document.write("<table border='1' style='border-collapse: collapse; width: 50%;'>");
        // document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
        // document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
        // document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
        // document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
        // document.write("<tr><td><strong>Total</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + totalMarks + "</strong></td></tr>");
        // document.write("<tr><td colspan='3'><strong>Percentage: " + percentage.toFixed(2) + "%</strong></td></tr>");
        // document.write("</table>");