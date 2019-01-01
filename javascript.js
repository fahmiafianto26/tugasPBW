function gantiwarna()
{
    var pesan=document.getElementById('container');
    var button=document.getElementById('buttonWarna');
    if(button.innerHTML=="Hijau")
    {
        pesan.style.cssText="background-color:green;";
        button.innerHTML="Merah";
    }
    else if(button.innerHTML=="Merah")
    {
        pesan.style.cssText="background-color:red;";
        button.innerHTML="Biru";
    }
    else if(button.innerHTML=="Biru")
    {
        pesan.style.cssText="background-color:blue;";
        button.innerHTML="Gray";
    }
    else if(button.innerHTML=="Gray")
    {
        pesan.style.cssText="background-color:gray;";
        button.innerHTML="Hitam";
    }
    else if(button.innerHTML=="Hitam")
    {
        pesan.style.cssText="background-color:black;";
        button.innerHTML="Hijau";
    }
}