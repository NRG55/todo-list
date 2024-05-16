import moment from "moment";

export function handleDate(dueDate) { 
        console.log(dueDate)
        if (dueDate === "") {
            console.log(typeof dueDate)
            dueDate = ""
            console.log(dueDate)
            return dueDate;            
        } else {  
       let date = moment(dueDate).format('DD MMM YY');
       console.log(date)
       return `Due: ` + date;
       };   
    };
