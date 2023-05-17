
// var but=document.getElementsByClassName('button');
// but.onclick = function(hairstyle) {
//     image.src = './alpaca/hair/${hairstyle}.png';
// };

// function hairChange(hairstyle){
//     var hairsty = document.querySelector('#hair');
//     hairsty.src='./alpaca/hair/${hairstyle}.png'
// }

function hairChange(hairstyle){
    const content=`
    <div class="heading">
        <h1>Alpaca Geneator</h1>
    </div>
    
    <div class="whole">
        <div class="alpaca">
            <div class="ears">
               <img src="./alpaca/ears/default.png" alt="">
            </div>
            <div class="hair">
               <img src="./alpaca/hair/${hairstyle}.png" alt="">
            </div>
            <div class="eyes">
                <img src="./alpaca/eyes/default.png" alt="">
            </div>
            <div class="nose">
                <img src="./alpaca/nose.png" alt="nose">
            </div>
            <div class="leg">
                <img src="./alpaca/leg/default.png" alt="">
            </div>
            <div class="neck">
                <img src="./alpaca/neck/default.png" alt="">
            </div>
            <div class="accessories">
                <img src="./alpaca/accessories/headphone.png" alt="">
            </div>
            <div class="mouth">
                <img src="./alpaca/mouth/default.png" alt="">
            </div>
            <div class="background">
                <img src="./alpaca/backgrounds/darkblue70.png" alt="">
            </div>
        </div>
        <div class="buttons">
            <h3>Accessorize the Alpaca's</h3>
            <div class="eachbtn">                
                <div class="button">
                    <button >Hair</button>
                </div>
                <div class="button">
                    <button>Eyes</button>
                </div>
                <div class="button">
                    <button>Mouth</button>
                </div>
                <div class="button">
                    <button>Neck</button>
                </div>
                <div class="button">
                    <button>Leg</button>
                </div>
                <div class="button">
                    <button>Background</button>
                </div>
                <div class="button">
                    <button>Accessories</button>
                </div>
            </div>
            <h3>Style</h3>
            <div class="each">
            <div  class="button">
            <button onclick="hairChange('bang')">Bang</button>  
        </div>
        <div class="button">
            <button onclick="hairChange('curls')">Curls</button>
        </div>
        <div class="button">
            <button onclick="hairChange('elegant')">Elegant</button>
        </div>
        <div class="button">
            <button onclick="hairChange('fancy')">Fancy</button>
        </div>
        <div class="button">
            <button onclick="hairChange('quiff')">Quiff</button>
        </div>
        <div class="button">
            <button onclick="hairChange('short')">Short</button>
        </div>
        <div class="button">
            <button onclick="hairChange('de')">Default</button>
        </div>
            </div>
        </div>
    </div>
    `;
    document.body.innerHTML=content;
}

