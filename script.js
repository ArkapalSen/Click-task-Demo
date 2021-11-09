'use strict';

const mainContainer = document.getElementById('mainContainer');
const container_btn = document.querySelector('.container_btn');
const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const blueBtn = document.getElementById('blueBtn');
const redBtn = document.getElementById('redBtn');
const resetBtn = document.getElementById('resetBtn');
const container_Text = document.getElementById('container_Text');


const extractVal = ()=>{
    return textInput.value;
}

function fontGetSize() {
    const style = window.getComputedStyle(container_Text);
    const font_size = style.getPropertyValue('font-size');
    return font_size;
}

function fontSizeZoom() {
    const font_size_css = fontGetSize();
    const size = font_size_css.slice(0,2);
    return size;
}


container_btn.addEventListener('click',function (e) {
    const clicked = e.target;

    if(clicked.id === 'submitBtn'){
        const extVal = extractVal()
        textInput.value = '';
        container_Text.innerText = extVal;
    }

    if(clicked.id === 'zoomInBtn'){
        const size = fontSizeZoom();
        container_Text.style.fontSize = `${ +size + 2}px`;
    }

    if(clicked.id === 'zoomOutBtn'){
         const size = fontSizeZoom();
        container_Text.style.fontSize = `${ +size - 2}px`;
    }

    if(clicked.id === 'blueBtn'){
        container_Text.style.color = 'blue';
    }

    if(clicked.id === 'redBtn'){
        container_Text.style.color = 'red';
    }

    if(clicked.id === 'resetBtn'){
        container_Text.innerText = ''
        container_Text.style.removeProperty('color');
        container_Text.style.removeProperty('font-size');
    }
    
})