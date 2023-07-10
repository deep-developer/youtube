export const randomImage = function() {
    const pics = [
        'url("https://media.geeksforgeeks.org/wp-content/uploads/20200316135008/red7.png")',
        'url("https://media.geeksforgeeks.org/wp-content/uploads/20200316135014/yellow3.png")',
        'url("https://media.geeksforgeeks.org/img-practice/MaskGroup58@2x-min-1637846347.png")',
        'url("https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-course-overview-image.png")',
        'url("https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png")',
        'url("https://media.geeksforgeeks.org/img-practice/banner/Amazon-Test-Series-thumbnail.png")',
        'url("https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-thumbnail.png")'
    ];
    const pic = document.querySelector('section');

    function showImage() {
        var a = Math.floor(Math.random() * pics.length);
        var img = pics[a];
        pic.style.backgroundImage = img;
    }

    setInterval(showImage, 1000);
}

