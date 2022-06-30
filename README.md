# Pokédex

## The Interface 

The app opens in the home page, which allows the user to scroll through all 905 Pokemon and view their respective typings and sprites. 

### Additional Info 

The user can then click on any Pokemon tab, which leads them to a screen displaying more information about the Pokemon, including the official in-game model and base stat totals.

<p float="left">
  <img src="https://user-images.githubusercontent.com/92560993/176733393-45d9279e-c4b8-45bb-8c0b-697f1c4ae394.PNG" width=30% height=30%>
  <img src="https://user-images.githubusercontent.com/92560993/176733391-d2148150-0f47-4882-9ccf-0e933e22c276.PNG" width=30% height=30%>
  <img src="https://user-images.githubusercontent.com/92560993/176733388-5ebea340-e34e-418c-9671-d8368f0f272c.PNG" width=30% height=30%>
</p>

### Even More Additional Info 
The user can also tap the additional info icon to see more information such as physical attributes and abilities. 

<p float="left">
  <img src="https://user-images.githubusercontent.com/92560993/176733387-370fc40a-7d63-4ae2-ab48-4b073129e658.PNG" width=30% height=30%>
  <img src="https://user-images.githubusercontent.com/92560993/176733381-f057640b-a88d-4a00-8038-17a5a3c78fae.PNG" width=30% height=30%>
</p>

## Data

The data is collected through a Python application that scrapes Serebii.net. 

### Sample CSV output 

Here is the output CSV file after running the scraper program.

```
|Number|Name        |Classification           |Height                |Weight                   |Typings                |Abilities                                       |Base Stat Total|HP |Attack|Defense|Sp.Attack|Sp.Defense|Speed|
|------|------------|-------------------------|----------------------|-------------------------|-----------------------|------------------------------------------------|---------------|---|------|-------|---------|----------|-----|
|#001  |Bulbasaur   |Seed Pokémon             |['2\'04"', '0.7m']    |['15.2lbs', '6.9kg']     |['Grass', 'Poison']    |['Overgrow', 'Chlorophyll']                     |318            |45 |49    |49     |65       |65        |45   |
|#002  |Ivysaur     |Seed Pokémon             |['3\'03"', '1.0m']    |['28.7lbs', '13.0kg']    |['Grass', 'Poison']    |['Overgrow', 'Chlorophyll']                     |405            |60 |62    |63     |80       |80        |60   |
|#003  |Venusaur    |Seed Pokémon             |['6\'07"', '2.0m']    |['220.5lbs', '100.0kg']  |['Grass', 'Poison']    |['Overgrow', 'Chlorophyll']                     |525            |80 |82    |83     |100      |100       |80   |
|...
|#903  |Sneasler    |Free Climb Pokémon       |['4\'03"', '1.3m']    |['94.8lbs', '43kg']      |['Fighting', 'Poison'] |['Pressure', 'Poison Touch']                    |510            |80 |130   |60     |40       |80        |120  |
|#904  |Overqwil    |Pin Cluster Pokémon      |['8\'02"', '2.5m'     |['133.4lbs', '60.5kg']   |['Dark', 'Poison']     |['Poison Point', 'Swift Swim', 'Intimidate']    |510            |85 |115   |95     |65       |65        |85   |
|#905  |Enamorus    |Love-Hate Pokémon        |['5\'03"', '1.6m']    |['105.8lbs', '48kg']     |['Fairy', 'Flying']    |['Healer', 'Contrary']                          |580            |74 |115   |70     |135      |80        |106  |
```
*Note to self: Separate Kanto Forms
