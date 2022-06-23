document.body.onload = addElement();

function addElement() {
    // gets url parameter for the trailer model
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // assigns model to a constant
    const model = urlParams.get('model').toUpperCase();

    // defines <div> as a variable; where HTML is added
    var node = document.getElementById('node-id');
    node.innerHTML += `<div style="padding-left: 3rem;
        padding - right: 3rem;
        position: block;
        width: 50 %;
        height: auto;
        margin - left: auto;
        margin - right: auto; ">`;
    node.innerHTML += `<div style="z-index: 1; position: block;" class="cloudimage-360" id="`+ model +`"
        data-folder="https://raw.githubusercontent.com/trailersbypremier/360-images/master/` + model + `/"
        data-filename-x="{index}.jpg" data-amount-x="8" data-play-once="true" data-autoplay="true" data-speed="30"
        data-bottom-circle="true" data-hide-360-logo="false" data-stop-at-edges="false" data-pointer-zoom="none">
    </div>`;
    node.innerHTML += `<div style='background-color: green; position: relative; z-index: 0; width: 100%; height: auto; top: -1rem;'>
            <img style='width: 40%; height: auto; position: relative; top: .5rem;'
                src="https://raw.githubusercontent.com/trailersbypremier/360-images/master/tbp-logo.webp">
            <h1 style="position: relative;color: white; float: right; font-size: calc(2vw + 2vh + 1vmin); font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">T612</h1>
        </div>`;
    node.innerHTML += '</div>';
}