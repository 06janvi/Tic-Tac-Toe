var state=true;
var arr1=[1,0,1,0,1,0,0,1,0];
var user1,user2;

function SetVal(id)
{ 
    if(state)
    {
        document.getElementById(id).innerHTML=setIndex(id,'X');
        
    }
   else
    {
        document.getElementById(id).innerHTML=setIndex(id,'O');
    }
    console.log(arr1);
    getWinner();
}

function setIndex(index,val)
{
    
    if(arr1[index]==1 || arr1[index]==0)
    {
        arr1[index]=val;
        state=!state;
        
    }
    else
    {
        alert("Not Allowed ");
    }
   
    return arr1[index];
}


function getWinner()
{
    const winerIndex=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winerIndex.length;i++)
    {
        const[a,b,c]=winerIndex[i];
        if(arr1[a]==arr1[b] && arr1[b]==arr1[c])
        {
            if(state==false)
            {
                alert(user1 +" Winner ");
                color="#ADD8E6";
            }
            else{
                alert(user2+" Winner");
                color="#ADD8E6";
            }
            heighLight(a,b,c,color);
            resetArray();
			getScore();
            break;
        }
    }
   
}


function heighLight(x,y,z,c)
{
    document.getElementById(x).style.backgroundColor=c;
    document.getElementById(y).style.backgroundColor=c;
    document.getElementById(z).style.backgroundColor=c;
}
//Start Game

function start()
{
    user1=document.querySelector("#user1").value;
    user2=document.querySelector("#user2").value;
    if(user1=="" || user2=="")
    {
        alert("Please Fill User Name To Start The Game ");
    }
    else
    {
        document.querySelector(".info").style.display="none";
        document.querySelector(".game").style.display="block";
    }
	document.querySelector('#name1').innerHTML=user1;
	document.querySelector('#name2').innerHTML=user2;
}
function restart()
{
    state=true;
    arr1=[1,0,1,0,1,0,0,1,0];
    for(let i=0;i<=8;i++)
    {
        document.getElementById(i).innerHTML="";
		 document.getElementById(i).style.backgroundColor="black";
    }
}

function resetArray()
{
    arr1=[null,null,null,null,null,null,null,null,null];
	
}
function getScore(){
    var v1=document.querySelector("#value1");
    var v2=document.querySelector("#value2");
    if(state==false){
        v1.innerHTML=parseInt(v1.innerHTML)+1;
    }
    else{
        v2.innerHTML=parseInt(v2.innerHTML)+1;
    }

}