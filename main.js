var Latido = 0
var Miado = 0

function startClassification() { 
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l9lanTJ2P/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResult)
}

function gotResult(error, results){  
    if(error){
        console.error(error)
    }
    else{
        
        if(results[0].label == "Latido"){
            document.getElementById("decta").innerHTML = 'Som detectado -' + results[0].label
            Latido = Latido + 1
            document.getElementById("giiif").src = "cachorrinho.gif"

        }
         else if(results[0].label == "Miado"){
            document.getElementById("decta").innerHTML = 'Som detectado -' + results[0].label
            Miado = Miado + 1
            document.getElementById("giiif").src = "gatinhoo.png"
        }
        else{
            document.getElementById("decta").innerHTML = 'Som detectado -' + results[0].label
            document.getElementById("giiif").src = "ruido.png"
        }
    }


}