
const api_url: string = "https://dummyjson.com/products";

async function getapi(url: string) {

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    show(data);
}

getapi(api_url);

function show(data: any): void {
    let tab: string =
        `<tr>
        <thead>
			<th>Id</th>
			<th>Brand</th>
			<th>Category</th>
			<th>Description</th>
			<th>DiscountPercentage</th>
        </thead>
		</tr>`;

    // Loop for generate dynamic rows
    for (let r of data.products) {
        tab += `<tr>
            <td>${r.id} </td>
			<td>${r.brand} </td>
			<td>${r.category}</td>
			<td>${r.description}</td>
			<td>${r.discountPercentage}</td>		
		</tr>`;
    }

    // Setting innerHTML as tab 
    document.getElementById("products")!.innerHTML = tab;
}
