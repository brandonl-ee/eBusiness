function download_images(text){

    const download = require('image-downloader')
    //foo is now loaded.
    //const download = require('image-downloader');
    //const links = require('./links.json');
    var text = document.getElementById("image_link").value;
    var link_arr = text_to_urls(text);
    (async () => { // `await` can only be used inside an async function.
    try {
        for (const url of link_arr) {
        // wait until downloading process finish then continue to solve next url
        const result = await download.image({ url: url, dest: "" });
        console.log("Image downloaded", result);
        }
        console.log("Done!");
    } catch(error) {
        console.log("downloaded error", error)
    }
    })();
}
function text_to_urls(text){
    var link_arr;
    link_arr = text.split(/[ ,	\r\n]+/);
    return link_arr;
}