let i=0;
let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let g=0;
let h=0;
let i1=0;
let draw=0;

// accessing the body.
let body=document.querySelector('body');
function but( b1)
{
    let b2=document.querySelector("#b"+b1);
    
    return b2;
}

let c1=document.querySelector(".container");
// for winning
function mid(wol){
    if(wol===10)
    {
        c1.innerHTML="<h1 >Winner is X</h1>";
        body.classList.add("wo");
        console.log("hi 1");
       
    }
    else if (wol==20){
        c1.innerHTML="<h1 ><i>Winner is O</i></h1>";
        body.classList.add("wo");
    }
else{
        c1.innerHTML="<h1 ><i>The match has been Draw</i></h1>";
        body.classList.add("wo");
}
}

but(1).addEventListener('click',(box)=>{
    draw++;
    if(i==0){
        but(1).innerText="X";
        i++;
        a=1;
        if(a===1 && b===1&&c===1 || a==1&&d==1&& g==1 || a==1&&e==1&&i1==1)
            {
                mid(10);
                
            }
            else if(draw==9){
                mid(30);
            }
        }
        else if(i==1){
            but(1).innerText="O";
            i--;
            a=2;
            if(a===2&&b===2&&c===2 || a==2&&d==2&& g==2 || a==2&&e==2&&i1==2)
                {
                    mid(20);
                }
            }
        but(1).disabled ="true";
    });
    
but(2).addEventListener('click',()=>{
    draw++;
    if(i==0){
        but(2).innerText="X";
        i++;
        b=1;
        if(a===1 && b===1&&c===1 || b==1&&e==1&&h==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(2).innerText="O";
            i--; 
            b=2;
            if(a===2&&b===2&&c===2 || b==2&&e==2&&h==2)
                {
                    mid(20);
                }
        }
        but(2).disabled ="true";
});
but(3).addEventListener('click',()=>{
    draw++;
    if(i==0){
        but(3).innerText="X";
        i++;
        c=1;
        if(a===1 && b===1&&c===1 || c==1&&e==1&&g==1||c==1&&f==1&i1==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(3).innerText="O";
            i--; 
            c=2;
            if(a===2&&b===2&&c===2|| c==2&&e==2&&g==2||c==2&&f==2&i1==2)
                {
                    mid(20);
                }
            }
            but(3).disabled ="true";
    });

        but(4).addEventListener('click',()=>{
            draw++;
    if(i==0){
        but(4).innerText="X";
        i++;
        d=1;
        if(a===1 && d===1&&g===1 || d==1&&e==1&&f==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else {
            but(4).innerText="O";
            i--;
            d=2; 
            if(a===2 && d===2&&g===2 || d==2&&e==2&&f==2)
                {
                    mid(20);
                }
            }
            but(4).disabled ="true";
    });
        but(5).addEventListener('click',()=>{
            draw++;
    if(i==0){
        but(5).innerText="X";
        i++;
        e=1;
        if(a===1 && e===1&&i1===1 || c==1&&e==1&&g==1||d==1&&e==1&f==1||b==1&&e==1&&h==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(5).innerText="O";
            i--; 
            e=2
            if(a===2 && e===2&&i1===2 || c==2&&e==2&&g==2||d==2&&e==2&f==2||b==2&&e==2&&h==2)
                {
                    mid(20);
                }
            }
            but(5).disabled ="true";
    });
        but(6).addEventListener('click',()=>{
            draw++;
    if(i==0){
        but(6).innerText="X";
        i++;
        f=1;
        if(c===1 && f===1&&i1===1 || d==1&&e==1&&f==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(6).innerText="O";
            i--;
            f=2; 
            if(c===2 && f===2&&i1===2 || d==2&&e==2&&f==2)
                {
                    mid(20);
                }
            }
            but(6).disabled ="true";
    });
        but(7).addEventListener('click',()=>{
            draw++;
    if(i==0){
        but(7).innerText="X";
        i++;
        g=1;
        if(a===1 && d===1&&g===1 || c==1&&e==1&&g==1||g==1&&h==1&i1==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(7).innerText="O";
            i--;
            g=2; 
            if(a===2 && d===2&&g===2 || c==2&&e==2&&g==2||g==2&&h==2&i1==2)
                {
                    mid(20);
                }
        }
        but(7).disabled ="true";});
but(8).addEventListener('click',()=>{
    draw++;
    if(i==0){
        but(8).innerText="X";
        i++;
        h=1;
        if(g===1 && h==1&&i1===1 || b==1&&e==1&&h==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(8).innerText="O";
            i--;
            h=2;
            if(g===2 && h==2&&i1===2 || b==2&&e==2&&h==2)
                {
                    mid(20);
                } 
        }
        but(8).disabled ="true";});
but(9).addEventListener('click',()=>{
    draw++;
    if(i==0){
        but(9).innerText="X";
        i++;
        i1=1;
        if(a===1 && e===1&&i1===1 || c==1&&f==1&&i1==1||g==1&&h==1&i1==1)
            {
                mid(10);
            }
            else if(draw==9){
                mid(30);
            }
    }
        else{
            but(9).innerText="O";
            i--;
            i1=2; 
            if(a===2 && e===2&&i1===2 || c==2&&f==2&&i1==2||g==2&&h==2&i1==2)
                {
                    mid(20);
                }
        }
        but(9).disabled ="true";});
