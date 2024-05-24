
let bag_item_object;

onLoad();
function onLoad(){
  load_bag_item_object();
  display_bag_item();
  generate_item_html(bag_item_object);
  display_bag_summary();
}

function display_bag_summary(){
  let bag_summary_element = document.querySelector('.bag-summary');

  let Total_item = bag_items.length;
  let Total_discount = 0;
  let Total_MRP = 0;
  let  Convenience_fee = 99;
  let Final_payment = 0;


  bag_item_object.forEach( bag_items => {
    Total_MRP += bag_items.original_price;
    Total_discount += (bag_items.original_price)-(bag_items.current_price);
    Final_payment = (Total_MRP - Total_discount) + (Convenience_fee);

  })


  bag_summary_element.innerHTML = `
    <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${Total_item} Items) </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹ ${Total_MRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">₹ ${Total_discount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹ 99</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹ ${Final_payment}</span>
      </div>
    </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `
}


function load_bag_item_object(){  //created map func.
  console.log(bag_items);
  
  // bag item main logic. 
  bag_item_object = bag_items.map(item_id => {
    for(let i = 0 ; i < items.length ; i++){
      if(item_id == items[i].id){  //"==" used here for auto typcasting into string to check id.
        return items[i];

      }
    }
  });
  console.log(bag_item_object);
}

function display_bag_item(){
  
  let container_element = document.querySelector('.bag-items-container');
  
  //item card move into bag page.
  let innerHTML = ``; 
  bag_item_object.forEach(bag_items => {
    innerHTML+=generate_item_html(bag_items);
  });

  container_element.innerHTML = innerHTML;
}

function remove_from_bag(item_id){
  bag_items = bag_items.filter(bag_item_id => bag_item_id != item_id );
  localStorage.setItem('bag_items',JSON.stringify(bag_items));
  alert(`are u sure!, you want delete this item.`);

  load_bag_item_object(); //update bag items
  display_bag_icon();  //update bag count 
  display_bag_item(); //reload bag items
  display_bag_summary() //reload bag summary
}

function generate_item_html(item){

  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.item_image}">  
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percent}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
    </div>
    <div class="remove-from-cart" onclick="remove_from_bag(${item.id})">X</div>
    
    </div>
   
     `

}