function saveData() {
    a = prompt("Enter your data",)
    let fruits = [0, "Banana", "Pear", "Apple", "Mango", "Kiwi"];
    if ((a == 1 || a == 2 || a == 3 || a == 4 || a == 5)) {
        console.log(fruits[a]);
        return "Secret number!";
        // } else if (a == 0){
        //     return 0;
    } else {
        return a;
    }
};

////// hello
