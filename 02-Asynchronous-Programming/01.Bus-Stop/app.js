async function getInfo() {

    let stop = document.getElementById('stopId').value;

    let stopNameElement = document.getElementById('stopName');
    let timeTableElement = document.getElementById('buses')

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stop}`;

    try {
        stopNameElement.textContent = 'Loading...'
        timeTableElement.innerHTML = '';

        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('No Data')
        }
        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const li = document.createElement('li');
            li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timeTableElement.appendChild(li);
        })

        
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
   
}

