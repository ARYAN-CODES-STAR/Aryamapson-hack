import React from "react";

function Search() {
  return (
    <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg w-screen h-128">
      {/* <h1 className="text-3xl font-bold mb-2">Pickup & Drop Date</h1> */}
      <div className="flex items-center my-4">
        <div className="w-1/2 pr-2">
          <label
            className="block text-3xl font-bold mb-2 text-black"
            for="pickupDate"
          >
            Pickup Address
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            type="text"
            id="pickupDate"
            name="pickupDate"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            className="block text-3xl font-bold mb-2 text-black"
            for="dropDate"
          >
            Drop Address
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            type="text"
            id="dropDate"
            name="dropDate"
          />
        </div>

        <div className="w-1/2 pl-2">
          <label
            className="block text-3xl font-bold mb-2 text-black"
            for="dropDate"
          >
            Date When
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            type="date"
            id="dropDate"
            name="dropDate"
          />
        </div>
      </div>
      {/* <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
        Save Changes
      </button> */}
      <div class="flex justify-center">
  <button class="transition text-4xl ease-in-out delay-150 bg-yellow-500 text-black hover:-translate-y-1 hover:scale-110 font-bold py-4 px-4 hover:bg-yellow-300 duration-300 my-16 shadow-[5px_5px_rgba(0,0,0),_10px_10px_rgba(0,0,0),_15px_15px_rgba(00,00,00,00),_20px_20px_rgba(00,00,00,00),_25px_25px_rgba(00,00,00,00)]">
    Save Changes
  </button>

  {/* shadow-[5px_5px_0px_0px_rgba(109,40,217)] */}

</div>
    </div>
  );
}

export default Search;
