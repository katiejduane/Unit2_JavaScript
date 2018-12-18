$(document).ready(()=>{
    //the DOM is done loading, go get em JS!
    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm)

    $('.stock-form').submit((event)=>{
        event.preventDefault();

        //,val() is jQuery, .value isnatuve JS
        const symbol = $('#symbol').val();
        $('#symbol').val('')

        // const changeInd = $('theDataJSFound.change')

        //How can we make an array based out of a strinf on where the comma is?
        const symbols = symbol.split(',')
        console.log(symbols)
        //we must trip the space fro the string so the symbol can be searched!
        symbols.forEach((s)=>{
            s = s.trim();
            //our endpoint
            // and endpoint is a web accessible URL, that responds with data
            const url = `https://api.iextrading.com/1.0/stock/${s}/quote`
            // getJSON method takes two args: 
            // where to get the JSON, what function to run when I get back!
            $.getJSON(url,(theDataJSFound)=>{
                console.log(theDataJSFound)
                let changeClass = ""
                if (theDataJSFound.change > 0) {
                    changeClass = "bg-success";
                } else {
                    changeClass = "bg-danger"
                }
                $('#stock-body').append(`
                <tr>
                    <td>${theDataJSFound.symbol}</td>
                    <td>${theDataJSFound.companyName}</td>
                    <td>${theDataJSFound.high}</td>
                    <td>${theDataJSFound.low}</td>
                    <td class=${changeClass}>${theDataJSFound.change}</td>
                </tr>
               `); 
                //end append
            }) //end get JSON
        }) //end forEach
        $('#stock-table').DataTable();
    }) // end submit handler
}); // end event handler