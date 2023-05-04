import React from 'react';

const Table = () => {
    return (
        <div className='text-center my-2 bg-black p-4'>
            <p className='text-red-400 font-sans'>BOOK CHEF</p>
            <h2 className='text-4xl text-white'>Make a Reservation</h2>
            <p className='text-white'>You can book Chef online easily in just a minute. Reservations are for lunch and dinner, check the availability of your table & book it now!</p>
            <div className='grid md:grid-cols-3' >
                <input className='m-2 p-3 rounded-lg' type="text" placeholder='Frist Name' />
                <input className='m-2 p-3 rounded-lg' type="text" placeholder='Last Name' />
                <input className='m-2 p-3 rounded-lg' type="text" placeholder='Email'/>
                <select className='m-2 p-3 rounded-lg' name="Chefs" id="chef">
                    <option value="1People">One Chef</option>
                    <option value="2People">Two Chef</option>
                    <option value="3People">Three Chef</option>
                    <option value="4People">Four Chef</option>
                    <option value="5People">Five Chef</option>
                    <option value="6People">Six Chef</option>
                </select>
                <input className='m-2 p-3 rounded-lg' type="date"  />
                <input className='m-2 p-3 rounded-lg' type="time" />
            </div>
            <button type='submit' className='btn btn-primary w-50 text-2xl'>Find Chef  </button>
        </div>
    );
};

export default Table;