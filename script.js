// // Add a "checked" symbol when clicking on a list item
// // var list = document.querySelector('ul');
// // list.addEventListener('click', function(ev) {
// //     if (ev.target.tagName === 'LI') {
// //         ev.target.classList.toggle('checked');
// //         ev.target.style.backgroundColor = '#983245';
// //     }
// // }, false);

// // Create a new list item when clicking on the "Add" button
// var taskList = [];

// function newElement() {
//     if (!editMode) {
//         coverTaskList();
//     } else {
//         var inputValue = document.getElementById('myInput').value;
//         taskList.push(inputValue);
//         renderTaskList();
//         document.getElementById('myInput').value = '';
//     }
// }

// // var li = document.createElement("li");
// // var inputValue = document.getElementById("myInput").value;
// // var t = document.createTextNode(inputValue);
// // li.appendChild(t);
// // if (inputValue === '') {
// //     alert("You must write something!");
// // } else {
// //     document.getElementById("myUL").appendChild(li);
// // }
// // document.getElementById("myInput").value = "";

// // var span = document.createElement("SPAN");
// // var txt = document.createTextNode("\u00D7");
// // span.className = "close";
// // span.appendChild(txt);
// // li.appendChild(span);

// // for (i = 0; i < close.length; i++) {
// //     close[i].onclick = function() {
// //         var div = this.parentElement;
// //         div.style.display = "none";
// //     }
// // }
// // }
// // var myNodelist = document.getElementsByTagName("LI");
// // var i;
// // for (i = 0; i < myNodelist.length; i++) {
// //     var span = document.createElement("SPAN");
// //     var txt = document.createTextNode("\u00D7");
// //     span.className = "close";
// //     span.appendChild(txt);
// //     myNodelist[i].appendChild(span);
// // }
// // // Click on a close button to hide the current list item
// // var close = document.getElementsByClassName("close");
// // var i;
// // for (i = 0; i < close.length; i++) {
// //     close[i].onclick = function() {
// //         var div = this.parentElement;
// //         div.style.display = "none";
// //     }
// // }
// editMode = true;

// function deleteTask(index) {
//     taskList.splice(index, 1);
//     renderTaskList();
// }

// function setHTML(selector, content) {
//     var value = document.getElementById(selector);
//     value.innerHTML = content;

// }
// var taskIndex = -1;

// function editTask(index) {
//     taskIndex = index;
//     console.log(taskList[index]);
//     document.getElementById('create_task').innerHTML;
//     document.getElementById('myInput').value = taskList[index];
//     setHTML('create_task', 'Update');
//     editMode = false;
// }

// function coverTaskList() {
//     var updateTask = document.getElementById('myInput').value;
//     insteadTask(taskIndex, updateTask);
//     document.getElementById('myInput').value = '';
//     setHTML('create_task', 'ADD');
//     renderTaskList();
//     editMode = true;
// }

// function insteadTask(id, newTask) {
//     taskList[id] = newTask;
// }

// function renderTaskList() {
//     var html = '';
//     for (i = 0; i < taskList.length; i++) {
//         html += '<li>' +
//             taskList[i] + '</li>' +
//             '<span onclick="deleteTask(' + i + ')" id="close"> \u00D7</span>' +
//             '<span onclick="editTask(' + i + ')" id="edit"> Edit</span>';
//     }


//     document.getElementById('myUL').innerHTML = html;
// }
const maps = [1, 2, 7, 3, 7, 9];
const after = maps.map(mapNumber => mapNumber * 2);
console.log(after);