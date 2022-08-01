var nums= document.querySelectorAll("#keyboard > div");
    var dis = document.querySelector("#input");

    for(i=0;i<nums.length;i++)
    {
        nums[i].addEventListener("click",mycalculator)
    }

    function mycalculator()
    {
        var targetnums = event.target.innerText;

        switch(targetnums)
        {
            case "C":
                dis.innerText = "";
                break;
            case "=":
                dis.innerText = eval(dis.innerText)    
                break;
            default:
            dis.innerText += targetnums;    
        }
    }

    