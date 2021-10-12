
// set initial count
let count =0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

//forEach will loop thorugh the array and return the html elements
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        /*
        currentTarget return HTML elements
        classlist returns an array of its classes
        */ 
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else if(styles.contains('reset')){
            count=0;
        }

        if(count>0){
            value.style.color ='green'
        }else if(count<0){
            value.style.color='red'
        }else if(count===0){
            value.style.color='#222'
        }
        
        value.textContent = count;
    })
})


/*
what i learn from here:
1. how to get html elements rom a query selector using forEach
2. how to check if the class of the elements contain a class using e.currenttarget.classList.contains
3. how to change the color of the text by using style.color
*/