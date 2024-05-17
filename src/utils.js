import { format } from "date-fns"; 

export function handleDate(dueDate) { 
        console.log(dueDate)
        if (dueDate === "") {            
            dueDate = "";            
            return dueDate;            
        } else {  
            let date = format(dueDate, "dd MMM yyyy");
            console.log(date)
            return `Due: ` + date;
       };   
    };
