$(document).ready(()=>{
    //the DOM is done loading, go get em JS!
    const stockForm = document.querySelector('.stock-form');
    console.log(stockForm)

    $('.stock-form').submit((event)=>{
        event.preventDefault();
        console.log(event);

        //,val() is jQuery, .value isnatuve JS
        const symbol = $('#symbol').val();
        console.log(symbol);
        //our endpoint
        // and endpoint is a web accessible URL, that responds with data
        const url = `https://api.iextrading.com/1.0/stock/${symbol}/quote`
        // getJSON method takes two args: 
        // where to get the JSON, what function to run when I get back!
        $.getJSON(url,(theDataJSFound)=>{
            console.log(theDataJSFound)
            $('#stock-body').html(`
            <tr>
                <td>${theDataJSFound.symbol}</td>
                <td>${theDataJSFound.companyName}</td>
                <td>${theDataJSFound.high}</td>
                <td>${theDataJSFound.low}</td>
                <td>${theDataJSFound.change}</td>
            </tr>
            `)
        })
    })
});