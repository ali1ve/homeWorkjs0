let mainDate = prompt("Zəhmət olmasa tarix qeyn edin (YYYY.MM.DD formatında)")
 mainDate = mainDate.split(".")
 datetwoIndex = +mainDate[2]
 

if (mainDate[1] == "01" && mainDate[2]<32 ){
    console.log(datetwoIndex +" "+ "Yanvar" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "02" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Fevral" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "03" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Mart" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "04" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Aprel" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "05" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "May" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "06" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Iyun" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "07" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Iyul" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "08" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Avqust" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "09" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Sentyabr" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "10" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Oktyabr" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "11" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Noyabr" +" "+ +mainDate[0] +" "+ "ci il");
}else if(mainDate[1] == "12" && +mainDate[2]<32){
    console.log(datetwoIndex +" "+ "Dekabr" +" "+ +mainDate[0] +" "+ "ci il");

}else{
    console.log("Duzgun tarix qeyd etmemiziniz");

}

let mounthNumber = +prompt("Ay nömrəsi qeyd edin")

switch(mounthNumber){
    case 1 :
        console.log("Yanvar");
        break;
    case 2 :
        console.log("Fevral");
        break;
    case 3 :
        console.log("Mart");
        break;
    case 4 :
        console.log("Aprel");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("Iyun");
        break;
    case 7 :
        console.log("Iyul");
        break;
    case 8 :
        console.log("Avqust");
        break;
    case 9 :
        console.log("Sentyabr");
        break;
    case 10 :
        console.log("Oktyabr");
        break;
    case 11 :
        console.log("Noyabr");
        break;
    case 12 :
        console.log("Dekabr");
        break;
        default:   
        console.log("Duzgun tarix qeyd etmemiziniz");
        break;
}
  
