import express from 'express';

import { getPeelInspections, getTorontoInspections } from './inspections/inspection-provider';
import cacheMiddleware from './middleware/cache-middleware';

const app = express();
app.use(cacheMiddleware);
app.get('/inspections', (req, res) => {
    const inspections = {};
    getPeelInspections(data => {
        inspections['peel'] = data;

        getTorontoInspections(data => {
            inspections['toronto'] = data;
            res.json(inspections);
        });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});