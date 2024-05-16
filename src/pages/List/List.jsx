import React, { useEffect, useState } from 'react';
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {

    const [list, setList] = useState([
        {
            image: "https://m.media-amazon.com/images/I/71c-7cjrG4L._AC_UL320_.jpg",
            name: "The Children's Place Girls' Short Sleeve Tie Front Top",
            category: "Girl top",
            price: "10",
        },
        {
            image: "https://m.media-amazon.com/images/I/91Ddfezr9iL._AC_UL320_.jpg",
            name: "Van Heusen Boys Long Sleeve Collared Button-Down Dress Shirt And Tie Set",
            category: "Boys shirt",
            price: "12",
        },
        {
            image: "https://m.media-amazon.com/images/I/51yL0dJH9gL._AC_UL320_.jpg",
            name: "adidas Girls' Short Sleeve Cotton Essential T-Shirt Top",
            category: "Girl t-shirt",
            price: "15",
        },
        {
            image: "https://m.media-amazon.com/images/I/81I8otK0PBL._AC_UL320_.jpg",
            name: "Gymboree Girls' and Toddler Sleeveless Summer Tops",
            category: "Girl top",
            price: "20",
        },
        {
            image: "https://m.media-amazon.com/images/I/61StNPUdbsL._AC_UL320_.jpg",
            name: "IZOD Boys 2-Piece Formal Suit Set, Includes Single Breasted Jacket & Straight Leg Dress Pants with Belt Loops & Pockets",
            category: "Boys dress",
            price: "18",
        },
        {
            image: "https://m.media-amazon.com/images/I/81FVyJeeBeL._MCnd_AC_UL320_.jpg",
            name: "Glamulice Flower Girls Spaghetti Strap Tulle Dress Long A Line Wedding Pageant Dresses Princess Birthday Party Ball",
            category: "Girl dress",
            price: "11",
        },
        {
            image: "https://m.media-amazon.com/images/I/61-gE5rr2kL._AC_UL320_.jpg",
            name: "Under Armour Boys' Pre School Assert 10 Alternate Closure",
            category: "Girl shoes",
            price: "21",
        },
        {
            image: "https://m.media-amazon.com/images/I/71OHgqkFlUL._AC_UL320_.jpg",
            name: "Skechers Girl's Ultra Flex 3.0 Sneaker",
            category: "Girl shoes",
            price: "18",
        },
        {
            image: "https://m.media-amazon.com/images/I/71xY+YoVqWL._AC_UL320_.jpg",
            name: "Gymboree Girl's and Toddler Slip on Casual Shoe Sneaker",
            category: "Girl shoes",
            price: "22",
        },
        {
            image: "https://m.media-amazon.com/images/I/61VyLsR2tkL._AC_UL320_.jpg",
            name: "Merrell Unisex-Child Trail Chaser Hiking Sneaker",
            category: "Boys shoes",
            price: "14",
        },
        {
            image: "https://m.media-amazon.com/images/I/716x3LzV-6L._AC_UL320_.jpg",
            name: "OshKosh B'Gosh Unisex-Child Sail Boat Shoe",
            category: "Boys shoes",
            price: "16",
        },
    ]);








    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            <dev className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format'>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                        </div>
                    )
                })}
            </dev>
        </div>
    );
};

export default List;