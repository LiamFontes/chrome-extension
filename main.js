const body = document.querySelector('body');
body.style.backgroundColor = 'blue';



let prevPress;

$(function (){
    body.addEventListener('keydown', (e) => {

        if (prevPress === 'ControlLeft' && e.key === 'q') window.open('Notepad.html')

        prevPress = e.code;
  });
}
);

/*


1. ACTIVITY TRACKER
2. "Best Of"
3. Unsubscribe
4. Censor
5. shuffle
6. Font changer
 - select whatever element and change the element only for that location
 - or for whatever is highlighted, change text
7. Click tracker
    - records total number of clicks over time, graphs over time, can break down by page
8. Insta-pad
    - one off sticky to be added to "notepad"
        - possible title/subject, 
                        - color coordinate each note

    - records website when written
    - records date/date
    - store in local chrome


    - MVP
        - opening sub-window to allow text to be written
            - opens after certain key-stroke combination
        - auto-saves on close
        - can access all notes whenever
    
    - Execution
       
        1) -Event listener
           X - do test cases (console log 'test')
        
        2) - Opening a text prompt/lightly styled page
        3) Allow user to edit page
        4) save page for later
             
                --

*/