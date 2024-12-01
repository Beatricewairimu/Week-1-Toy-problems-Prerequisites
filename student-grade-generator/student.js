function studentGradeGenerator(marks){
    let grade;
    
    if (marks >= 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "c";
    } else if (marks >= 40) {
         grade = "D";
    }else if (marks >= 0) {
        grade = "E";
    }
    else {
        grade = "invalid input";
    }
    console.log(`grade ${grade}`)
}
studentGradeGenerator(85)
studentGradeGenerator(-0.1)
