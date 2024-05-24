let bag_items; //storing bag count in array.
let wishlist_items; //wishlist item count array.


onLoad();
function onLoad(){
  let bag_item_str =localStorage.getItem('bag_items');
  bag_items = bag_item_str ? JSON.parse(bag_item_str) : [] ; 

  let wishlist_item_str = localStorage.getItem('wishlist_items');
  wishlist_items = wishlist_item_str ? JSON.parse(wishlist_item_str) : [];

  display_bag_icon();    //showing empty bag.
  display_home_items();    //items showing.
  display_wishlist_item();  //showing empty wisht.
  
}

function addToBag(itemId){
  bag_items.push(itemId);
  localStorage.setItem('bag_items',JSON.stringify(bag_items));
  alert(`item added to Bag.`);
  display_bag_icon();  //bag count update
}

function add_wishlist(item_id){
  wishlist_items.push(item_id);
  localStorage.setItem('wishlist_items',JSON.stringify(wishlist_items));
  alert(`item added to Wishlist`);
  display_wishlist_item();
}

function display_bag_icon(){  //function for bag count.
  let bag_item_count = document.querySelector('.bag-item-count');
  if(bag_items.length > 0){
    bag_item_count.style.visibility = 'visible';
    bag_item_count.innerHTML= bag_items.length;
  }else{
    bag_item_count.style.visibility = 'hidden';
  }
  
}

function  display_wishlist_item(){
  let wishlist_item_count = document.querySelector('.wishlist-item-count');
  
  // if(wishlist_items.length > 0){
  //   wishlist_item_count.style.visibility = 'visible';
  //   wishlist_item_count.innerHTML= wishlist_items.length;
  // }else{
  //   wishlist_item_count.style.visibility = 'hidden';
  // }
  if (wishlist_item_count) {
    if (wishlist_items.length > 0) {
      wishlist_item_count.style.visibility = 'visible';
      wishlist_item_count.innerHTML = wishlist_items.length;
    } else {
      wishlist_item_count.style.visibility = 'hidden';
    }
  } else {
    console.error("Element with class 'wishlist-item-count' not found");
  }
}

function display_home_items(){
  let itemscontainerElement = document.querySelector('.items-container');

  if(!itemscontainerElement){
    return ;
  }

  let innerHTML = '';

  items.forEach((item) => {
    innerHTML+=`<div class="item-container">
      <img class = "item-image" src="${item.item_image}" alt="item-image">
      <div class="rating">
          ${item.rating.stars}★ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="orignal-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percent}% OFF)</span>
      </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})";>&#x1F45C; Add to Bag</button>
        <button class="btn-wishlist" onclick="add_wishlist(${item.id})";>&#x1F497; Wishlist</button>
      </div>`;
  
     });
  itemscontainerElement.innerHTML= innerHTML;
}





//---------intial item-----//

//items array created.

// let item =  {
//   id:'001',
//   item_image: './images/1.jpg',
//   rating: {
//     stars : 4.5,
//     count:1400,
//   },
//   company_name:'Carlton London',
//   item_name: 'Rhodium-Plated CZ Floral Studes',
//   current_price: 666,
//   orignal_price: 1045,
//   discount_percent:42,

// }



//---generic code of js----//

// itemscontainerElement.innerHTML = `
// <div class="item-container">
//   <img class = "item-image" src="${item.item_image}" alt="item-image">
//   <div class="rating">
//       ${item.rating.stars}★ | ${item.rating.count}
//   </div>
//   <div class="company-name">${item.company_name}</div>
//   <div class="item-name">${item.item_name}</div>
//   <div class="price">
//       <span class="current-price">Rs ${item.current_price}</span>
//       <span class="orignal-price">Rs ${item.orignal_price}</span>
//       <span class="discount">(${item.discount_percent}% OFF)</span>
//   </div>
//   <button class="btn-add-bag">&#x1F45C; Add to Bag</button>
//   <button class="btn-wishlist">&#x1F497; Wishlist</button>
// </div>`;





//--------------data file contents-----------------//

//  {
//   id: '002',
//   item_image: '',
//   company_name: 'CUKOO',
//   item_name: 'Women Padded Halter Neck Swimming Dress',
//   current_price: 1507,
//   original_price: 2599,
//   discount_percent: 42,
//   // return_period: 14,
//   // delivery_date: '10 Oct 2023',
//   rating: {
//       stars: 4.3,
//       count: 24,
//   }
//  }


// },
// {
//   id: '003',
//   item_image: 'images/3.jpg',
//   company_name: 'NUEVOSDAMAS',
//   item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
//   original_price: 1599,
//   current_price: 495,
//   discount_percent: 69,
//   // return_period: 14,
//   // delivery_date: '10 Oct 2023',
//   rating: {
//       stars: 4.1,
//       count: 249,
//   },
// },
// {
//   id: '004',
//   item_image: 'images/4.jpg',
//   company_name: 'ADIDAS',
//   item_name: 'Indian Cricket ODI Jersey',
//   original_price: 999,
//   current_price: 999,
//   discount_percent: 0,
//   // return_period: 14,
//   // delivery_date: '10 Oct 2023',
//   rating: {
//       stars: 5.0,
//       count: 10,
//   },
// },
// {
//   id: '005',
//   item_image: 'images/5.jpg',
//   company_name: 'Roadster',
//   item_name: 'Pure Cotton T-shirt',
//   original_price: 1399,
//   current_price: 489,
//   discount_percent: 65,
//   // return_period: 14,
//   // delivery_date: '10 Oct 2023',
//   rating: {
//       stars: 4.2,
//       count: 3500,
//   },
// },
// {
//   id: '006',
//   item_image: 'images/6.jpg',
//   company_name: 'Nike',
//   item_name: 'Men ReactX Running Shoes',
//   original_price: 14995,
//   current_price: 14995,
//   discount_percent: 0,
//   // return_period: 14,
//   // delivery_date: '10 Oct 2023',
//   rating: {
//       stars: 0.0,
//       count: 0,
//   },
// },
// {
//   id: '007',
//   item_image: 'images/7.jpg',
//   company_name: 'The Indian Garage Co',
//   item_name: 'Men Slim Fit Regular Shorts',
//   original_price: 1599,
//   current_price: 639,
//   discount_percent: 60,
//   rating: {
//       stars: 4.2,
//       count: 388,
//   },
// },
// {
//   id: '008',
//   item_image: 'images/8.jpg',
//   company_name: 'Nivea',
//   item_name: 'Men Fresh Deodrant 150ml',
//   original_price: 285,
//   current_price: 142,
//   discount_percent: 50,
//   // return_period: 14,
//   // delivery_date: '10 Oct 2023',
//   rating: {
//       stars: 4.2,
//       count: 5200,
//   },
// } ];


