function datePick(){
    let dnesok = new Date();
    let narodenie = new Date(document.getElementById("date").value);
    let narodeniny = new Date(dnesok.getFullYear(), narodenie.getMonth(), narodenie.getDate());
    let day = 24 * 60 * 60 * 1000;
    let daysLeft = Math.ceil((narodeniny.getTime() - dnesok.getTime()) / (day));
    let month = narodenie.getMonth();
    let monthM = "";
   
   
   
    if(dnesok > narodeniny) {
        narodeniny.setFullYear(dnesok.getFullYear() + 1);
    }
  
    switch (month){
        case 11:
        case 0:
        case 1:
            monthM = "Zima";
        break;
        case 2:
        case 3:
        case 4:
            monthM = "Jar";
        break;
        case 5:
        case 6:
        case 7:
            monthM = "Leto";
        break;
        case 8:
        case 9:
        case 10:
            monthM = "Jesen";
        break;
    }


   
    document.getElementById("result").innerText = "Do najbližších narodenín ostáva "+ daysLeft + " den/dni" + "\nv ročnom období: " + monthM;
    console.log("najbližšíe narodeníny o "+ daysLeft + " den/dni" + "\nv ročnom období: " + monthM)
    window.alert("najbližšíe narodeníny o "+ daysLeft + " den/dni" + "\nv ročnom období: " + monthM)
}   