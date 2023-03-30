"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api_url = "https://dummyjson.com/products";
function getapi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log(data);
        show(data);
    });
}
getapi(api_url);
function show(data) {
    let tab = `<tr>
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
    document.getElementById("products").innerHTML = tab;
}
//# sourceMappingURL=app.js.map