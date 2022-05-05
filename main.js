
function sendValue() {
    let name = document.querySelector('input[name="name"]').value
    let age = document.querySelector('input[name="age"]').value
    

    let newWin = window.open('about:blank','childPage',"width=500,height=500" );
    let newContent = `
        Name: ${name}, 
        Age: ${age}, 
        Total price: <input type='number' name='totalPrice'> 
        <button id='price' onclick='sendPrice()'> Ok</button>
        <script>
            function sendPrice() {
                window.close();                
                return window.opener.document.body.innerHTML = document.querySelector('input[name="totalPrice"]').value
                
            }
        </script>`
    newWin.document.write(newContent);    
}

