const xhr =new XMLHttpRequest();

xhr.addEventListener('load', ()=>{   //Since we dont get responce instantly we use eventlistener for response which loads when responce is recieved.
    console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev');   //Here is request is generated
xhr.send();     //Here the request is sent