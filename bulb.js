//DECLARING THE VARIABLE OUTSIDE OF THE FUNCTIONS SO IT'S GLOBAL
let userNum
let x = 0

function setNum()
{
    
    while(!userNum || userNum<1)
    {
        userNum = prompt("Enter a number")
    }
}


function changeBulb()
{
    let img = document.getElementById("image").src.replace(/^.*[\\\/]/, '')



    /*================================================================

    OLD WAY, EASY TO LEARN BUT LESS EFFICIENT
    let img = document.getElementById("image").src
    let nome_img = img.replace(/^.*[\\\/]/, '')
    console.log(nome_img)
    if(nome_img == "pic_bulboff.gif")
    {
       document.getElementById("image").src = "pic_bulbon.gif"
    }
    else
    {
        document
    }
    -------------------------------------------------------------------*/
    
    

    if(x < userNum-1)
    {
        if(img== "pic_bulboff.gif")
        {
            document.getElementById("image").src = "pic_bulbon.gif"
            document.getElementById('writtentext').innerHTML = "<span style = 'color:blue'> bulb on </span> click number " + (x+1)
        }
        else
        {
            document.getElementById("image").src ="pic_bulboff.gif"
            document.getElementById('writtentext').innerHTML = "<span style = 'color:red'> bulb off </span> click number " + (x+1)
        }
        x++
        console.log(x)
    }
    
    else
    {
      
        
        document.getElementById('writtentext').innerHTML = "<span style = 'color:black'> bulb off </span>"
        document.getElementById("coolbutton").disabled = true
        if(img === "pic_bulbon.gif")
        {
            document.getElementById("image").src ="pic_bulboff.gif"

        }
    }

    
}
document.addEventListener("DOMContentLoaded", setNum)
