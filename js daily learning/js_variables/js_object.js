document.getElementById('demo').innerHTML="hey i am now in js file..";
document.getElementById('demo').style.fontSize="35px";
console.log("creating a object:");
const info={
    fname:"raj",
    lname:"sharma",
    age:23,
    classId:"cs15",
    printInfo:function(){
        // console.log("first name is :"+this.fname+",last name is:"+this.lname+", age is :"+this.age);
        return "my name is " +this.fname + " " + this.lname+ " and my age is : "+ this.age;
    }
};
// info.printInfo();
document.getElementById('demo2').innerHTML=info.printInfo();