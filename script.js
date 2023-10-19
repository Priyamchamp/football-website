document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('info-button');
    const infoBox = document.getElementById('info-box');
    
    infoButton.addEventListener('click', function() {
        const info = "Football, often referred to as the beautiful game, is one of the world's most beloved and widely followed sports. With a history dating back centuries, football has evolved into a global phenomenon, captivating the hearts and minds of millions. This sport combines athleticism, strategy, and teamwork, as players aim to score goals by propelling a ball into the opposing team's net. Whether played on meticulously manicured pitches in grand stadiums or on dusty fields in local communities, football unites people across cultures and continents, celebrating the universal language of passion, competition, and camaraderie. From grassroots levels to the grandest international stages, football continues to inspire and thrill, fostering unforgettable moments and heroics that transcend borders.";
        const newWindow = window.open('', '_blank', 'width=400,height=300');
        newWindow.document.write(info);
        newWindow.document.close();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageButton = document.getElementById('mybutton1');
    
    imageButton.addEventListener('click', function() {
        const imageUrl1 = "f3.jpg";
        const imageUrl2 = "f4.jpg";
        
        const newWindow = window.open('', '_blank', 'width=600,height=400');
        newWindow.document.write("<img src='" + imageUrl1 + "' alt='Image 1' style='width:100%; height:100%;'><br>");
        newWindow.document.write("<img src='" + imageUrl2 + "' alt='Image 2' style='width:100%; height:100%;'>");
        newWindow.document.close();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const videoButton = document.getElementById('mybutton2');
    
    videoButton.addEventListener('click', function() {
        const videoUrl = "movie.mp4"; // Replace with your video URL

        const newWindow = window.open('', '_blank', 'width=800,height=600');
        newWindow.document.write(`
            <video width="100%" height="100%" autoplay controls>
                <source src="${videoUrl}" type="video/mp4">
            </video>
        `);
    });
});