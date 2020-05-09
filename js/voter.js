class Voter{
    constructor(){
        this.id=createInput("Name:  ");
        this.name=createInput("EmailId: ");
    }
getCount(){
        var voterCountref=database.ref('voterCount')
        voterCountref.on("value",function(data){voterCount=data.val();})
        console.log(data);
        voterCountref.push(this.id,this.name)
    }

    update(){
        database.ref('voters').update({name:this.name,id:this.id});
        }
  
    }
    