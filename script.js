function dobChecker(){

    let userDob = document.getElementById("dobInput").value
    let monthsArr = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]

    let currentSitutaions = new Date();
    let userMonth = monthsArr[currentSitutaions.getMonth() + 1];
    let userDate = currentSitutaions.getDate();
    let userYear = currentSitutaions.getFullYear();

    // console.log(`${userMonth} : ${userDate} : ${userYear}`)

    if(currentSitutaions > 18){
        alert("You Are 18+")
    }else if(currentSitutaions == 18){
        alert("You Are 18")
    }else{
        alert("You Are Elder than 18")
        userDob + currentSitutaions
    }
    document.getElementById("result").innerHTML = `${userMonth} : ${userDate} : ${userYear}`;
    
}