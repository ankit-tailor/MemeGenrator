var getImgId = document.querySelector("#img-meme");
var nextBtn = document.querySelector("#btn-next");
var shareBtn = document.querySelector("#btn-next2");
var s = document.querySelector("#copy-text");
var memeURL = "https://meme-api.herokuapp.com/gimme";
fetch(memeURL)
    .then((response) => response.json())
    .then((json) => {
        var getMemeImageUrl = json.url;
        console.log(getMemeImageUrl);
        getImgId.src = getMemeImageUrl;
        s.value = getMemeImageUrl;
    });

nextBtn.addEventListener("click", () => {
    fetch(memeURL)
        .then((response) => response.json())
        .then((json) => {
            var getMemeImageUrl = json.url;
            console.log(getMemeImageUrl);
            getImgId.src = getMemeImageUrl;
            s.value = getMemeImageUrl;
        });
});


shareBtn.addEventListener("click", () => {
    var copyText = document.getElementById("copy-text");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the URL to the clipboard!");
})