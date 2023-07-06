var animals= ["Voi","Nai","Chim"]
animals.push("Mèo","Chó")
console.log(animals)
animals.pop()
console.log(animals)
animals[1]= "Chuột"
console.log(animals)

var a= -1
var b= ["1","2","3"]
var c= 5
var d= a+c
console.log(d)
var e= a%c
console.log(e)
var f= a*c
console.log(f)

var point= 7.5
if (point<5){
    console.log("Học lực kém")
}
else if (point>=5 && point<6){
    console.log("Học lực trung bình")
}
else if (point>=6.5 && point<8){
    console.log("Học lực giỏi")
}
else{
    console.log("Học lực xuất sắc")
}

var a = 19
var b = a%2
if (b=0){
    console.log("a là số chẵn")
}
else if (b=1){
    console.log("a là số lẻ")
}