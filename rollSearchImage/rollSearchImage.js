let roll=document.getElementById("roll");
let mainComp=document.getElementById("mainComp");

// data is a array to store details about the Friends
let data=[
    {roll:2844,name:"Friend 1 Name",imgSrc:"Enter Link of Friend image(like from facebook copy the image link)",desc:"detail about Friend"},
    {roll:2862,name:"Friend 2 Name",imgSrc:"Enter Link of Friend image(like from facebook copy the image link)",desc:"detail about Friend"},
    {roll:2899,name:"Friend 3 Name",imgSrc:"Enter Link of Friend image(like from facebook copy the image link)",desc:"detail about Friend"},
    {roll:2835,name:"Friend 4 Name",imgSrc:"Enter Link of Friend image(like from facebook copy the image link)",desc:"detail about Friend"},
    {roll:2865,name:"Friend 5 Name",imgSrc:"Enter Link of Friend image(like from facebook copy the image link)",desc:"detail about Friend"},
    {roll:2847,name:"Friend 6 Name",imgSrc:"Enter Link of Friend image(like from facebook copy the image link)", desc:"detail about Friend"}
]

// This function empty the mainComp Div if anything Present and Display all photos and detail present in data variable
function allPho()
{
    mainComp.innerHTML="";
    for(let i=0; i<data.length; i++)
    {
        show(i);
    }
}

// This function check Roll Number validation and display only the enter Roll Number detail
function oper()
{
    if(roll.value==="")
    {
        alert("Please Enter the Roll Number first.");
    }
    else
    {
        for(let i=0; i<data.length; i++)
        {
            if(parseInt(roll.value)===data[i].roll)
            {
                mainComp.innerHTML="";
                show(i)
            }
            else if(roll.value!==data[data.length-1].roll)
            {
                alert("Invalid Roll Number");
            }
        }
    }
}

// This function create tags to display details
function show(i)
{
    let div1=document.createElement("div");
    div1.style.width="18rem";
    div1.setAttribute("class","card mx-3 mb-4 col-md-3");

    let img=document.createElement("img")
    img.setAttribute("class","card-img-top")
    img.src=data[i].imgSrc
    img.alt="Image Not Found";

    let div2=document.createElement("div")
    div2.setAttribute("class","card-body")

    let h5=document.createElement("h5")
    h5.setAttribute("class","card-title")
    h5.innerHTML=data[i].name;

    let p=document.createElement("p")
    p.setAttribute("class","card-text")
    p.innerHTML=data[i].desc;

    mainComp.appendChild(div1);
    div1.appendChild(img)
    div1.appendChild(div2)
    div2.appendChild(h5)
    div2.appendChild(p)
}