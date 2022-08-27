//document.getElementById("click").addEventListener('click',loadData);

loadData();


function loadData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.jikan.moe/v3/top/anime/1/upcoming',true);
    
    xhr.onload=function(){
        if(this.status===200){
            const response=JSON.parse(this.responseText);
            let output='';
            if(this.status===200){
                response.top.forEach(function(joke){
                    output+=`<a href="${joke.url}" target="_blank"><div style="display:grid;grid-template-columns:1fr 1fr;">
                    <div><img src= ${joke.image_url} style="width:calc(70%)"></div>
                    <div><h4>${joke.title}</h4>
                    <p>${joke.type}</p>
                    
                    </div>
                    </div></a>`;
                })
            }else{
                output+='<div>something went wrong</div>';
            }
            
            document.querySelector('#container').innerHTML= output;
            
        }
    }
    xhr.send();
}