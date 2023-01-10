"use strict";

Immediately Invoked FUnction Expression (IIFE)

(() => {
    let btn1 = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');

    // Add an event listener to btn1
    btn.addEventListener('click', () => {
        alert('Great job following instructions.');
    });
    // Add an event listener to btn2
    btn2.addEventListener('click', () => {
        // Remove all button on the page
        btn1.remove();
        btn2.remove();
        let video = document.createElement('video');
        video.src = 'images/bomb.mp4';
        vido.autoplay = true;
        document.querySelector('.page-wrapper')
    })

    let header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0){
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky')
        }
    })
})();

