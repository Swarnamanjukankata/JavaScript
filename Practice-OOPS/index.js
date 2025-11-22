const circle={
    radius:1,
    location:{
        x:1,
        y:1
    },
    draw:function(){
        console.log("draw");
    }
};

function Circle1(radius){
    this.radius=radius;
    let defaultLocation={x:0,y:0};
    this.getDefaultLocation=function(){
        return defaultLocation;
    }
    this.draw=function(){
        console.log("draw");
    }
    Object.defineProperty(this,"defaultLocation",{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            if(!value.x||!value.y)
                throw new Error("Invalid Location")
            defaultLocation=value;
        }
    });
}
const another=new Circle1(1);
Circle1.defaultLocation=1;


