import React from 'react';
import './Orders.css'

const Orders = () => {
    return (
        <div className='w-4/5'>

            <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Place Your Order</h2>
                <div className="flex flex-col md:flex-row">
                    {/* Order Form */}
                    <div className="w-full md:w-2/3 mb-6 md:mb-0">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Shipping Address</label>
                                <textarea
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                    rows="4"
                                    placeholder="1234 Main St, Anytown, USA"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                                    placeholder="(123) 456-7890"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                            >
                                Submit Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full md:w-1/3 md:pl-6">
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span>Item 1</span>
                                <span>$10.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Item 2</span>
                                <span>$15.00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Item 3</span>
                                <span>$20.00</span>
                            </li>
                            <li className="flex justify-between font-semibold border-t pt-4">
                                <span>Total</span>
                                <span>$45.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;