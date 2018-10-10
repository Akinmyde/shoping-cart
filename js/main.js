class Item {
    constructor(itemName,price,qty) {
       this.itemName = itemName;
        this.price = price;
        this.qty = qty;
    }

    get total() {
        return this.calcTotal();
    }

    calcTotal () {
       return this.price * this.qty;
    }

    calcSubTotal (total) {
        let sum = 0;
        for(let element of total) {
            sum += element;
        }
        return sum;  
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    let arrTotal = [];
    let sumTotalItem = 0;
    let itemName, price, qty, subTotal, totalItems, item;
    let addItem = () => {
        

        itemName = document.getElementById('name').value;
        price = document.getElementById('price').value;
        qty = document.getElementById('qty').value;
        subTotal = document.getElementById('subtotal');
        totalItems = document.getElementById('total-items');

        if(itemName !== "" && price !== "" && qty !== "") {
            item = new Item (itemName,price,qty);

            sumTotalItem +=1;
    
            let total = item.total;
            arrTotal.push(total)
    
           viewItem(sumTotalItem,itemName,price,qty,total);
    
           subTotal.innerHTML = item.calcSubTotal(arrTotal);
           totalItems.innerHTML = sumTotalItem;
        }
    }
    
    
    let viewItem = (id,itemName,price,qty,total) => {
        
        Id = document.createElement('tr');
        Id.textContent =  id;
        document.getElementById('id').appendChild(Id);

        Name = document.createElement('tr');
        Name.textContent =  itemName;
        document.getElementById('item').appendChild(Name);

        Price = document.createElement('tr');
        Price.textContent = price;
        document.getElementById('itmprice').appendChild(Price);

        Qty = document.createElement('tr');
        Qty.textContent = qty;
        document.getElementById('itmqty').appendChild(Qty);

        Total = document.createElement('tr');
        Total.textContent =  total;
        document.getElementById('total').appendChild(Total);

    }

    let clearNode = (name) => {
        while(name.firstChild) {
            name.removeChild(name.firstChild);
        }
    }

    let clearCart = () => {
        let id = document.getElementById('id'); 
        clearNode(id);

        let name = document.getElementById('item'); 
        clearNode(name);

        let price = document.getElementById('itmprice'); 
        clearNode(price);

        let qty = document.getElementById('itmqty'); 
        clearNode(itmqty);

        let total = document.getElementById('total'); 
        clearNode(total);

        arrTotal = [0]; 
        sumTotalItem = 0;

        subTotal = document.getElementById('subtotal');
        subTotal.innerHTML = arrTotal;

        totalItems = document.getElementById('total-items');
        totalItems.innerHTML = sumTotalItem;
    }

    let btnaddtocart = document.getElementById('btn-add-to-cart');
    btnaddtocart.addEventListener('click', addItem);

    let clear = document.getElementById('clear');
    clear.addEventListener('click', clearCart);

})


