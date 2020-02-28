function convert(inputFahrenheit){
    let celcius = (parseFloat(inputFahrenheit)-32)/1.8;
    document.getElementById("txtOutputCelcius").innerHTML = celcius;
}
