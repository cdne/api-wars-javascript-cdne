// import {fetchData} from "./modules.js";

let tbody = document.querySelector('#tbody');


async function fetchData(api) {
    await fetch(api)
        .then((response) => response.json())
        .then((data) => {
            for (const element of data.results) {
                let tableData = `
               <tr>
                    <td>${element.name}</td>
                    <td>${formatNumber(element.diameter) + ' km'}</td>
                    <td>${element.climate}</td>
                    <td>${element.terrain}</td>
                    <td>${isNaN(element.surface_water) ? 'unknown' : element.surface_water + '%'}</td>
                    <td>${isNaN(element.population) ? 'unknown'
                    : formatNumber(element.population) + ' people'}</td>
                    <td>${modal()} <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
 </td>
                    <td><button type="button">Vote</button></td>
               </tr>
               `;
                tbody.innerHTML += tableData;

            }
        });
}

function formatNumber(number) {
    let final_number = new Intl.NumberFormat({style: 'decimal'}).format(number);
    return final_number;
}

function modal(){
    return `
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <table class="table">
                <thead>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Hair Color</th>
                    <th>Skin Color</th>
                    <th>Eye Color</th>
                    <th>Birth year</th>
                    <th>Gender</th>
                </thead>
                <tbody>
     
                </tbody>
      </table>
    </div>
  </div>
</div>
    `
}

fetchData('https://swapi.co/api/planets/');