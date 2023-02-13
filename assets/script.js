//Text var, if conditional

/*var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

console.log(topic);

//array
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

*/

//loop
function list_topict(topic){
   
    for(var x=0;x<topic.length;x++){
        console.log(topic[x]);
    }
}


function select_topic(topic){
    var randomTopic = topic[Math.floor(Math.random() * topic.length)];
    console.log("Let's study "+randomTopic);    
}



var topics_array = ['HTML', 'CSS', 'Git', 'JavaScript'];

console.log('Here are the topics we learned through Prework:');
list_topict(topics_array);

console.log('\nWhich topic should we study first?');
select_topic(topics_array);