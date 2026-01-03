   let toDo=JSON.parse(localStorage.getItem('toDo'))||[];
    printTask();

        document.querySelector('.toDoList').innerHTML = toDoListHTML;

       

        function addTask() {
            toDo = JSON.parse(localStorage.getItem('toDo'))||[];
            
            let name=document.querySelector('.input').value;
            let date=document.querySelector('.dated').value;
            let time=document.querySelector('.deadline').value;

            toDo.push({
                name:name,
                date:date,
                time:time,
            })
            printTask();
            document.querySelector('.input').value = '';
            document.querySelector('.dated').value='';
            document.querySelector('.deadline').value='';
           
        }

        function reset() {
            toDo=[];
            let toDoList = '';

            document.querySelector('.toDoList').innerHTML = toDoList;
            localStorage.setItem('toDo', JSON.stringify(toDo));

        }

        function key(event) {
            if (event.key === 'Enter') addTask();

        }

        function printTask(){
            let toDoListHTML = '';
            for (let i = 0; i < toDo.length; i++) {
                
                let HTML = `<div class="taskName">${toDo[i].name}</div> 
                            <div class="due-date"> ${toDo[i].date}</div>
                            <div class="due-time"> ${toDo[i].time}</div>
                            
                            <button class="delete" onclick="
                            toDo.splice(${i},1);
                            printTask();"
                            >
                            Delete
                            </button>   
                            `
                        ;
                toDoListHTML += HTML;
            }

           document.querySelector('.toDoList').innerHTML = toDoListHTML;
           localStorage.setItem('toDo',JSON.stringify(toDo));

        }
