fetch("https://catfact.ninja/facts?limit=1&max_length=140")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var main = data;
        var original = main.data
        var real = original[0].fact
        console.log(real)

        var content = document.getElementById('content').innerHTML = real

    });



function refreshPage() {
    window.location.reload();
}