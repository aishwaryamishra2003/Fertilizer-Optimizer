// routes/fertilizer.js
const express = require('express');
const router = express.Router();

// Example GET route for getting recommendations
router.get('/recommend', (req, res) => {
    const { cropType, soilHealth, weatherPattern } = req.query;

    let recommendation;

    // Logic to determine recommendations based on crop type, soil health, and weather pattern
    switch (cropType.toLowerCase()) {
        case 'paddy':
            if (soilHealth === 'good' && weatherPattern === 'rainy') {
                recommendation = {
                    fertilizerType: 'Urea',
                    quantity: '100 kg/ha',
                    notes: 'Apply during tillering and panicle initiation stages.',
                };
            } else if (soilHealth === 'poor' && weatherPattern === 'dry') {
                recommendation = {
                    fertilizerType: 'Organic Fertilizer',
                    quantity: '150 kg/ha',
                    notes: 'Use to improve soil health and moisture retention.',
                };
            }
            break;
        case 'corn':
            if (soilHealth === 'good' && weatherPattern === 'sunny') {
                recommendation = {
                    fertilizerType: 'Ammonium Nitrate',
                    quantity: '150 kg/ha',
                    notes: 'Apply at planting and side-dress during the growing season.',
                };
            } else if (soilHealth === 'average' && weatherPattern === 'cloudy') {
                recommendation = {
                    fertilizerType: 'Urea',
                    quantity: '120 kg/ha',
                    notes: 'Apply at planting for optimal growth.',
                };
            }
            break;
        case 'wheat':
            if (soilHealth === 'good' && weatherPattern === 'rainy') {
                recommendation = {
                    fertilizerType: 'DAP (Diammonium Phosphate)',
                    quantity: '80 kg/ha',
                    notes: 'Apply at planting for root development.',
                };
            } else if (soilHealth === 'poor' && weatherPattern === 'dry') {
                recommendation = {
                    fertilizerType: 'Potassium Chloride',
                    quantity: '70 kg/ha',
                    notes: 'Use to enhance drought resistance.',
                };
            }
            break;
        case 'soybeans':
            if (soilHealth === 'good' && weatherPattern === 'sunny') {
                recommendation = {
                    fertilizerType: 'Potassium Chloride',
                    quantity: '60 kg/ha',
                    notes: 'Apply before planting to enhance pod development.',
                };
            } else if (soilHealth === 'average' && weatherPattern === 'cloudy') {
                recommendation = {
                    fertilizerType: 'Organic Fertilizer',
                    quantity: '80 kg/ha',
                    notes: 'Use to improve soil health and nutrient availability.',
                };
            }
            break;
        default:
            return res.status(400).json({ error: 'Unknown crop type' });
    }

    if (!recommendation) {
        return res.status(400).json({ error: 'No recommendations available for the given inputs.' });
    }

    res.json(recommendation);
});

// Export the router
module.exports = router;