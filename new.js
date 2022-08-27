let output = '';
let list = '';
let i = 1;

function loadData() {
  //  if(target === undefined)    
  console.log(this);
  // $(this).parent().children().nextUntil(".wb").children().animate({height : 'toggle'},500);
}

function loadData2() {
  console.log(this);
  //$(this).parent().children().nextUntil(".db").parent().children().next().parent().children().next().animate({height : 'toggle'},500);
}


fetch('movie.json')
  .then(res => {
    return res.json();
  })
  .then(function (data) {
    data.top.map(function (ele) {
      output += `<div class="blog">
        <div class="blog-img"><img src="${ele.img_url}"></div>
        <div class="blog-content">
          <div class="blog-heading">
          <div class="b-head">
          <h1>${ele.title}</h1>
          </div>
          <div class="p-head">
<div><i class=" fas fa-regular fa-calendar coli"></i> <span class="coli">${ele.year}</span></div>
          <i class="fas fa-regular fa-video coli" "></i>
          <span class="coli">${ele.genre[0]}, ${ele.genre[1]} </span><i class="fas fa-building coli"></i><span class="coli">${ele.catogary}</span>
          </div>
          </div>
          <div class="blog-text">
             <div class="intro-text">
             <p>${ele.intro}</p>
             </div>
             <div class="download-button">
              <span class="next2">
                <div class="next2-in">
                <div>
                  <h3>Drive Download:</h3>
                  <div>
                  <div> <i class="fas fa-download"></i>&nbsp;&nbsp;<a href="${ele.batch_d.q720p}" target="_blank">Download in 720p</a></div>
                  </div >
                                  </div >

                </div >
             </span >
      <br>


      </div>
          </div >
        </div >
        </div >
      `;

      document.getElementById("blog-container").innerHTML = output;
      //     ele.episo.map(function(lik, i){
      //       if(i<ele.num)
      //       {
      //         list += `< li > <a href="${lik}">Episode${i + 1}</a></li > `;
      //       }

      // })
      //     document.getElementById("list").innerHTML = list;

      //   document.querySelector(".wb").addEventListener('click',loadData);
      //  document.querySelector(".db").addEventListener('click',loadData2);

      // document.querySelector(".wb").addEventListener('click',loadData);
      //  document.querySelector(".db").addEventListener('click',loadData2);

      // ele.foreach(function (){
      //  
      // })

    })
  })
  .catch(err => console.log(err));
{/* <span class="next">
  <div class="next-in">
    <div><h3>Batch Drive Download</h3>
      <i class="fas fa-file-archive"></i>&nbsp;&nbsp;<a href="${ele.batch_d}" target="_blank">Download ${ele.title} file.zip</a>
    </div>
    <div>
      <h3>Batch Direct Download</h3>
      <i class="fas fa-file-archive"></i>&nbsp;&nbsp;<a href="${ele.batch_i}" target="_blank">Download ${ele.title} file.zip</a>
    </div>
  </div>
</span> */}
//                   <i class="fas fa-download"></i>&nbsp;&nbsp;<a href="${ele.batch_d.q1080p}" target="_blank">Download in 1080p</a></div>

//                   <div> <i class="fas fa-download"></i>&nbsp;&nbsp;<a href="${ele.batch_d.q480p}" target="_blank">Download in 480p</a></div>
