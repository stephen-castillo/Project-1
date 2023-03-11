console.log('Javascript working');

//Recipe API sample call
var recSearch = 'Tuna fish sandwich';
function getRecipe(callback, SearchParm){

    const url = 'https://api.edamam.com/api/recipes/v2';
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const query = new URLSearchParams({
        type: 'public',
        app_key: 'f20b386e34889b19ea6df95568e0ae4f',
        app_id: '172c19d1',
        q: SearchParm,
    });

    fetch(`${url}?${query.toString()}`, params)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        callback(data);
        //callback(apiData);
        //console.log(apiData);
    })
    .catch(error => console.error(error));
}

function handleData(data){
    console.log(data);
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission

    //create new form object on event.target  
    const formData = new FormData(event.target); // get the form data
    
    //add data to form object from input entries
    const data = Object.fromEntries(formData.entries()); // convert the FormData object to a plain object
    const data2 = formData.getAll('health');

    //console.log('Form data:', data);
    //console.log('checkboxes:', data2);

    //add checkboxes into form data object
    data.health = data2;

    //get infor from search bar
    data.search = $('#searchItem').val();
    
    console.log('Form data:', data);
});

// Hide recipe section for now
document.getElementById('recipe-view').style.display='none';

// Event listener for keyword search button

// Event listener for Fetch! button

