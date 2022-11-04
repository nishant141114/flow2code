// npm install fs

var hm_for_tags =  new Map();
var unique_ids_order =  [];
unique_ids_order[0] = '1';
unique_ids_order[1] = '300';
unique_ids_order[2] =  '299'; 

var curr_id = '';
var tag_id = 2;
var arrow_ids = 301 
var clicked_tag = 0;


let popup =  document.getElementById('popup');
function openPopup(evn){   
let b =  evn.target;
if(b != undefined){
     b =  evn.target.arrow_id_for_popup_fun;
     curr_id = b;
     console.log(b);
}
else{
    curr_id =  300;
} 
popup.classList.add("open-popup");
}


function closePopup(){
popup.classList.remove("open-popup");
}


/// assign popup  ///// on working
let assignPopup =  document.getElementById('assign_popup')

function openAssignPopup(){
    assignPopup.classList.add("open-assign_popup");


}
function closeAssignPopup(){
    assignPopup.classList.remove("open-assign_popup");
    let variable_name = document.getElementById('variable-name').value.toString();
    let expression = document.getElementById('value-assign').value.toString();
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
    if(variable_name != "" && expression != ""){
    div.innerHTML = variable_name + " = " + expression;
    document.getElementById('variable-name').value = "";
    document.getElementById('value-assign').value = "";
   }
} 

/////
let declarePopup =  document.getElementById('declare_popup')
function openDeclarePopup(){
declarePopup.classList.add("open-declare_popup");
}
function closeDeclarePopup(){
    declarePopup.classList.remove("open-declare_popup");
}


////
let inputPopup =  document.getElementById('input_popup');
function openInputPopup(){
    inputPopup.classList.add("open-input_popup");
}

function closeInputPopup(){
    inputPopup.classList.remove("open-input_popup");


    let variable_name = document.getElementById('variable-name-assign').value.toString();
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
    if(variable_name != "" ){
    div.innerHTML = variable_name;
    document.getElementById('variable-name-assign').value = "";
   }
}

    
//////
let outputPopup =  document.getElementById('output_popup');
function openOutputPopup(){
    outputPopup.classList.add("open-output_popup");
}
function closeOutputPopup(){
    outputPopup.classList.remove("open-output_popup");
}




//////

let forPopup =  document.getElementById('for_popup');
function openforPopup(){
    forPopup.classList.add("open-for_popup");
}
function closeforPopup(){
    forPopup.classList.remove("open-for_popup");
}



/////


let ifPopup =  document.getElementById('if_popup');
function openifPopup(){
    ifPopup.classList.add("open-if_popup");
}
function closeifPopup(){
    ifPopup.classList.remove("open-if_popup");
}

















function addTag(type_of_tag){
    
    var pos =  0; 
    for(let i   = 0; i<unique_ids_order.length;  i++){
        if(unique_ids_order[i] == curr_id){
            pos =  i;
            break ;
        }
    }
     
      

    //finding type tag type here
 let tag =  '';
 let color = '';
if(type_of_tag == 1){
tag  =  'declare.png'
color = '#eabbae';

}
else if(type_of_tag == 2){
tag =  'assign.png';
color = '#ffeeb5';

}
else if(type_of_tag == 3){
tag =  'input.png';
color = '#a4ea9e';

}
else if(type_of_tag == 4){
tag =  'output.png';
color = '#bdf7f5';

}
else if(type_of_tag == 5){
tag =  'for.png';
color = '#f9cece';

}
else if(type_of_tag ==  6){
tag =  'if.png';
color = '#fdcea0';
} 




// creating main div and setting its attribute
let m_div  = document.createElement('div');
m_div.setAttribute(
'style',
'height:fit-content; width:fit-content; '
)
m_div.style.backgroundColor = color;



m_div.id = tag_id;
//m_div.addEventListener('click', fun,false);


/////////////////******* working */  //////////////////////////
m_div.addEventListener('click',fun,false); 
m_div.id_after_onclick = m_div.id;

/////////////////******* working */  //////////////////////////




let d1 = tag_id;
/////////////////******* working */  //////////////////////////
hm_for_tags.set(tag_id,tag);
/////////////////******* working */  //////////////////////////
tag_id++;

// creting image and setting up its attribute
let img  = document.createElement('img');
img.src =  tag;
img.setAttribute(
    'style',
    'height:50px; width:100px;'
)



// creating child/editable div and setting its attribute
let data_div =  document.createElement('div');
data_div.setAttribute(
    'style',
    'height:fit-content; width:fit-content;',
    
)

// creating arrow image and setting its attribute
let new_arrow =  document.createElement('img');
new_arrow.src = 'down-arrow.png';
new_arrow.setAttribute(
    'style',
    'width:80px; height:70px',

)
new_arrow.id = arrow_ids;
new_arrow.addEventListener('click', openPopup, false);
new_arrow.arrow_id_for_popup_fun = new_arrow.id;
 // console.log("idd", new_arrow.id);
//arrow.onclick = openPopup(arrow.id) + "";

let d2 =  arrow_ids;
arrow_ids++;

m_div.appendChild(data_div);
m_div.appendChild(img) 
let sib =  nextSib(curr_id);


let after  =  document.getElementById(sib);

console.log(sib);
let parent = document.getElementById('flow');
parent.insertBefore(m_div, after);
parent.insertBefore( new_arrow, after);
  

// console.log(unique_ids_order)
insert_tag_id(d2,d1,pos);
}

function insert_tag_id( t_id, a_id, pos){
   

    for(let i = pos+1;  i<unique_ids_order.length;  i++){
        let a = unique_ids_order[i];
        let t =  unique_ids_order[i+1];
        unique_ids_order[i] = '' + a_id;
        unique_ids_order[i+1] = '' + t_id;
        t_id = t;
        a_id =  a;
        i++;
    }

    let l =  unique_ids_order.length;
    unique_ids_order[l] = a_id;
    unique_ids_order[l+1] = t_id;

  

}


function nextSib(curr){
    let p = 0;
    for(let i = 0; i<unique_ids_order.length;  i++){
        if(curr == unique_ids_order[i]){
            p = i;
            break;
        }
    }
   let d =  document.querySelector('#flow');
   //console.log(d);
    return unique_ids_order[p+1];

}
/////////////////******* working */  //////////////////////////
function fun(e){
    // console.log("hello");
    // console.log(e);
    let b =  e.target;
    // if(b != undefined){
       // console.log(b.parentElement.id);
    // }

    let id_of_tag = b.parentElement.id;
 
 var d = parseInt(id_of_tag);
 id_of_tag = d;
 let type_of_tag =   hm_for_tags.get(id_of_tag); 


 clicked_tag = id_of_tag;

 if(type_of_tag == 'assign.png'){
    openAssignPopup();
 } 

 else if(type_of_tag == 'declare.png'){
    openDeclarePopup();
 }

 else if(type_of_tag == 'input.png'){
    openInputPopup();
}

 else if(type_of_tag == 'output.png'){
    openOutputPopup();
 }
 
 else if(type_of_tag == 'if.png'){
openifPopup()
 }

 else if(type_of_tag == 'for.png'){
 openforPopup();
 } 
     
}
/////////////////******* working */  //////////////////////////
