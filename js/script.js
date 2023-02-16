function contador(){
    // Declaração de variável
    var num = document.getElementById('num').value;


    // Repita... até
    do {
        alert(num);
        num--;
    } while (num >= 0);
}