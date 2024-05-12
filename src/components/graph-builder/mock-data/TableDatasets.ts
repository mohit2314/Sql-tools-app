export const mockData = {
    datasets: [

        {
            name: 'Customer Satisfaction Survey',
            value: {
                columns: [
                    { name: 'region', type: 'string' },
                    { name: 'satisfaction', type: 'number' },
                    { name: 'responses', type: 'number' },
                    { name: 'gender', type: 'string' },
                    { name: 'age', type: 'number' }
                ],
                rows: [
                    { region: 'North America', satisfaction: 4.2, responses: 1250, gender: 'Male', age: 35 },
                    { region: 'Europe', satisfaction: 3.8, responses: 980, gender: 'Female', age: 42 },
                    { region: 'Asia', satisfaction: 4.5, responses: 1650, gender: 'Male', age: 28 },
                    { region: 'South America', satisfaction: 3.6, responses: 720, gender: 'Female', age: 31 },
                    { region: 'Africa', satisfaction: 4.1, responses: 450, gender: 'Male', age: 39 }
                ]
            }
        },
        {
            name: 'Website Traffic data',
            value: {
                "columns": [
                    { "name": "month", "type": "string" },
                    { "name": "visitors", "type": "number" },
                    { "name": "bounceRate", "type": "number" },
                    { "name": "source", "type": "string" }
                ],
                "rows": [
                    { "month": "January", "visitors": 45000, "bounceRate": 0.32, "source": "Organic" },
                    { "month": "February", "visitors": 38200, "bounceRate": 0.28, "source": "Paid" },
                    { "month": "March", "visitors": 51800, "bounceRate": 0.35, "source": "Organic" },
                    { "month": "April", "visitors": 42600, "bounceRate": 0.29, "source": "Referral" },
                    { "month": "May", "visitors": 49300, "bounceRate": 0.31, "source": "Organic" },
                    { "month": "June", "visitors": 55100, "bounceRate": 0.37, "source": "Paid" },
                    { "month": "July", "visitors": 48200, "bounceRate": 0.33, "source": "Referral" },
                    { "month": "August", "visitors": 52400, "bounceRate": 0.36, "source": "Organic" },
                    { "month": "September", "visitors": 46700, "bounceRate": 0.31, "source": "Paid" },
                    { "month": "October", "visitors": 57900, "bounceRate": 0.39, "source": "Organic" },
                    { "month": "November", "visitors": 43500, "bounceRate": 0.28, "source": "Referral" },
                    { "month": "December", "visitors": 61200, "bounceRate": 0.42, "source": "Paid" }
                ]
            }
        },
        {
            name: 'Product sales',// heatmap,
            value: {
                "columns": [
                    { "name": "product", "type": "string" },
                    { "name": "month", "type": "string" },
                    { "name": "sales", "type": "number" }
                ],
                "rows": [
                    { "product": "Product A", "month": "January", "sales": 1500 },
                    { "product": "Product A", "month": "February", "sales": 1200 },
                    { "product": "Product A", "month": "March", "sales": 1800 },
                    { "product": "Product B", "month": "January", "sales": 2000 },
                    { "product": "Product B", "month": "February", "sales": 1700 },
                    { "product": "Product B", "month": "March", "sales": 2300 },
                    { "product": "Product C", "month": "January", "sales": 1300 },
                    { "product": "Product C", "month": "February", "sales": 1100 },
                    { "product": "Product C", "month": "March", "sales": 1600 }
                ]
            }
        },
        {
            name: 'Population data', //bubble,
            value: {
                "columns": [
                    { "name": "country", "type": "string" },
                    { "name": "population", "type": "number" },
                    { "name": "gdp", "type": "number" },
                    { "name": "region", "type": "string" }
                ],
                "rows": [
                    { "country": "United States", "population": 329500000, "gdp": 21430000, "region": "North America" },
                    { "country": "China", "population": 1439324000, "gdp": 14340000, "region": "Asia" },
                    { "country": "Japan", "population": 126476000, "gdp": 5082000, "region": "Asia" },
                    { "country": "Germany", "population": 83783000, "gdp": 3846000, "region": "Europe" },
                    { "country": "United Kingdom", "population": 67886000, "gdp": 2827000, "region": "Europe" },
                    { "country": "France", "population": 65274000, "gdp": 2717000, "region": "Europe" },
                    { "country": "India", "population": 1380004000, "gdp": 2890000, "region": "Asia" },
                    { "country": "Brazil", "population": 212559000, "gdp": 1839000, "region": "South America" },
                    { "country": "Russia", "population": 144104000, "gdp": 1700000, "region": "Europe" },
                    { "country": "Mexico", "population": 128933000, "gdp": 1258000, "region": "North America" }
                ]
            }
        },
        {
            name: 'Product Categories data', // stacked bar
            value: {
                "columns": [
                    { "name": "category", "type": "string" },
                    { "name": "product1", "type": "number" },
                    { "name": "product2", "type": "number" },
                    { "name": "product3", "type": "number" }
                ],
                "rows": [
                    { "category": "Category A", "product1": 2000, "product2": 1500, "product3": 1200 },
                    { "category": "Category B", "product1": 1800, "product2": 2100, "product3": 1600 },
                    { "category": "Category C", "product1": 2200, "product2": 1700, "product3": 1900 },
                    { "category": "Category D", "product1": 1900, "product2": 2300, "product3": 1400 },
                    { "category": "Category E", "product1": 2400, "product2": 1800, "product3": 2000 }
                ]
            }
        },
        {
            name: 'Sales Data',
            value: {
                columns: [
                    { name: 'category', type: 'string' },
                    { name: 'sales', type: 'number' },
                    { name: 'year', type: 'number' },
                    { name: 'profit', type: 'number' }
                ],
                rows: [
                    { category: 'Automotive', sales: 24500, year: 2021, profit: 8500 },
                    { category: 'Electronics', sales: 18200, year: 2021, profit: 6200 },
                    { category: 'Furniture', sales: 14700, year: 2021, profit: 4100 },
                    { category: 'Grocery', sales: 32100, year: 2021, profit: 10200 },
                    { category: 'Automotive', sales: 27300, year: 2022, profit: 9800 },
                    { category: 'Electronics', sales: 21800, year: 2022, profit: 7500 },
                    { category: 'Furniture', sales: 16400, year: 2022, profit: 5300 },
                    { category: 'Grocery', sales: 35600, year: 2022, profit: 12100 }
                ]
            }
        }
    ]
}