window.onload = function() {
    //第一个参数是边数，第二个参数是边长
   buildPolyhedron(10, 300);
}

function buildPolyhedron(n, sideLength) {
    var fragment = document.createDocumentFragment();
    var cube = document.getElementsByClassName("cube")[0];
    var face = null;
    //计算内接圆的半径
    var insCirRadius = sideLength/2/Math.tan(Math.PI/n);
    cube.style.cssText += "width:" + sideLength + "px;height:" + sideLength + "px;transform-origin:50% 50%" + (-insCirRadius) + "px";

    for (var i = 0; i < n; i++) {
        face = document.createElement("div");
        face.appendChild(document.createTextNode(i + 1));
        face.className += "face";
        face.style.cssText += "line-height:" + sideLength + "px;transform-origin:50% 50%" + (-insCirRadius) + "px";
        face.style.cssText += "transform:rotateY(-"+360/n*i+"deg)";
        fragment.appendChild(face);
    }
    cube.appendChild(fragment);
}
