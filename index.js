function save(){
    var n = document.getElementById("inputname").value;
    document.getElementById("name").innerHTML = n;
    var e = document.getElementById("inputemail").value;
    document.getElementById("email").innerHTML = e;
    var a = document.getElementById("inputadd").value;
    document.getElementById("address").innerHTML = a;
    var gm = document.getElementById("inputgendermale").value;
    var gf = document.getElementById("inputgenderfemale").value;
    if(document.getElementById("inputgendermale").checked == true){
        document.getElementById("gender").innerHTML = gm;
    }
    else{
        document.getElementById("gender").innerHTML = gf;
    }

    if(n == ''){
        alert('Please enter Name');
    }

    if(e == ''){
        alert('Please enter Email Address')
    }

    if(a == ''){
        alert('Please enter Address')
    }
}

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

