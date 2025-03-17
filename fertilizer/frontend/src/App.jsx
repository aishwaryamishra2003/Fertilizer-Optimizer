import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
    const [temp, setTemp] = useState('');
    const [humid, setHumid] = useState('');
    const [mois, setMois] = useState('');
    const [soil, setSoil] = useState('0');
    const [crop, setCrop] = useState('0');
    const [nitro, setNitro] = useState('');
    const [pota, setPota] = useState('');
    const [phos, setPhos] = useState('');
    const [recommendation, setRecommendation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/fertilizer/recommend', {
                temp,
                humid,
                mois,
                soil,
                crop,
                nitro,
                pota,
                phos,
            });
            setRecommendation(response.data);
        } catch (err) {
            console.error(err);
            setRecommendation('Error fetching recommendation. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 p-4 w-screen">
            <div className="text-3xl font-extrabold text-gray-800 mb-8">
                Recommending Best Fertilizer for Your Crop
            </div>
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-2xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-black font-medium mb-2" htmlFor="temp">Temperature:</label>
                        <input 
                            type="number" 
                            className="shadow border rounded w-full py-2 px-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-400" 
                            name="temp" 
                            id="temp" 
                            value={temp} 
                            onChange={(e) => setTemp(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-black font-medium mb-2" htmlFor="humid">Humidity:</label>
                        <input 
                            type="number" 
                            className="shadow border rounded w-full py-2 px-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-400" 
                            name="humid" 
                            id="humid" 
                            value={humid} 
                            onChange={(e) => setHumid(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-black font-medium mb-2" htmlFor="mois">Moisture:</label>
                        <input 
                            type="number" 
                            className="shadow border rounded w-full py-2 px-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-400" 
                            name="mois" 
                            id="mois" 
                            value={mois} 
                            onChange={(e) => setMois(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-black font-medium mb-2" htmlFor="soil">Soil Type:</label>
                        <select 
                            name="soil" 
                            id="soil" 
                            value={soil} 
                            onChange={(e) => setSoil(e.target.value)} 
                            className="block w-full text-black bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="0">Black</option>
                            <option value="1">Clayey</option>
                            <option value="2">Loamy</option>
                            <option value="3">Red</option>
                            <option value="4">Sandy</option>
                        </select>
                    </div>
                    <div>
    <label className="block text-gray-700 font-medium mb-2" htmlFor="crop">Crop Type:</label>
    <select
        name="crop"
        id="crop"
        value={crop}
        onChange={(e) => setCrop(e.target.value)} 
        className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-black bg-white"
    >
        <option value="0" className="text-black">Barley</option>
        <option value="1" className="text-black">Cotton</option>
        <option value="2" className="text-black">Ground Nuts</option>
        <option value="3" className="text-black">Maize</option>
        <option value="4" className="text-black">Millets</option>
        <option value="5" className="text-black">Oil Seeds</option>
        <option value="6" className="text-black">Paddy</option>
        <option value="7" className="text-black">Pulses</option>
        <option value="8" className="text-black">Sugarcane</option>
        <option value="9" className="text-black">Tobacco</option>
        <option value="10" className="text-black">Wheat</option>
        <option value="11" className="text-black">Coffee</option>
        <option value="12" className="text-black">Kidney Beans</option>
        <option value="13" className="text-black">Orange</option>
        <option value="14" className="text-black">Pomegranate</option>
        <option value="15" className="text-black">Rice</option>
        <option value="16" className="text-black">Watermelon</option>
    </select>
</div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="nitro">Nitrogen:</label>
                        <input 
                            type="number" 
                            className="shadow border rounded w-full py-2 px-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-400" 
                            name="nitro" 
                            id="nitro" 
                            value={nitro} 
                            onChange={(e) => setNitro(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="pota">Potassium:</label>
                        <input 
                            type="number" 
                            className="shadow border rounded w-full py-2 px-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-400" 
                            name="pota" 
                            id="pota" 
                            value={pota} 
                            onChange={(e) => setPota(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phos">Phosphorous:</label>
                        <input 
                            type="number" 
                            className="shadow border rounded w-full py-2 px-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-green-400" 
                            name="phos" 
                            id="phos" 
                            value={phos} 
                            onChange={(e) => setPhos(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    >
                        Predict
                    </button>
                </div>
            </form>

            <div className="mt-6 text-center">
                <h1 
                    id="crop" 
                    className="text-lg font-bold text-gray-800"
                >
                    Recommended Fertilizer for Your Crop is: {recommendation}
                </h1>
            </div>
        </div>
    );
}

export default App;
