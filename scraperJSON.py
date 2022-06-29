from bs4 import BeautifulSoup
import requests
import csv

# get the HTML from the URL
source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
soup = BeautifulSoup(source, 'lxml')

# initiliaze the csv file
csvFile = open('pokemonInfoJSON.csv', 'w')
csvWriter = csv.writer(csvFile)
csvWriter.writerow(['number', 'name', 'sprite', 'model', 'class', 'height', 'weight', 'type1', 'type2', 'ability1', 'ability2', 'ability3', 'bst', 'hp', 'attack', 'defense', 'sp_attack', 'sp_defense', 'speed'])

# get the table
table = soup.find('table', class_='dextable')
table = table.find_all('tr')

# loops through the table and skips every other row
for i in range(0, len(table), 2):
    # skips the first row of the table 
    if i == 0:
        continue

    # compiles all pokemon info into a list
    allInfo = table[i].find_all('td', {'class': 'fooinfo'})

    # gets the attributes of the pokemon
    number = allInfo[0].text.strip()[1:]
    name = allInfo[2].text.strip()

    # sets the sprite and model paths
    sprite = "require('../sprites/" + number + ".png')"
    model = "require('../models/" + name.lower() + ".png')"

    # appends the typings as a list
    typings = allInfo[3].find_all('a')
    for i in range (len(typings)):
        typings[i] = typings[i].get('href')[14:].capitalize()

    try:
        type1 = typings[0]
    except:
        type1 = None

    try:
        type2 = typings[1]
    except:
        type2 = None

    # appends the abilities as a list
    abilities = allInfo[4].find_all('a')
    for i in range (len(abilities)):
        abilities[i] = abilities[i].text.strip()

    try:
        ability1 = abilities[0]
    except:
        ability1 = None
    
    try:
        ability2 = abilities[1]
    except:
        ability2 = None

    try:
        ability3 = abilities[2]
    except:
        ability3 = None
    
    # gets the base stats
    hp = allInfo[5].text.strip()
    attack = allInfo[6].text.strip()
    defense = allInfo[7].text.strip()
    sp_attack = allInfo[8].text.strip()
    sp_defense = allInfo[9].text.strip()
    speed = allInfo[10].text.strip()
    bst = int(hp) + int(attack) + int(defense) + int(sp_attack) + int(sp_defense) + int(speed)

    # gets the image link
    partialURL = allInfo[1].find('img')['src']
    imageURL = 'https://www.serebii.net' + partialURL

    # gets the subpage link
    subpageURL = 'https://www.serebii.net' + allInfo[2].find('a').get('href')

    # pulls data from each pokemon's subpage
    subsource = requests.get(subpageURL).text
    subsoup = BeautifulSoup(subsource, 'lxml')
    subtable = subsoup.find('table', class_='dextable')
    allSubinfo = subtable.find_all('td', {'class': 'fooinfo'})

    # gets their physical attributes
    classification = allSubinfo[-3].text.strip()
    height = list(allSubinfo[-2].stripped_strings)[1]
    weight = list(allSubinfo[-1].stripped_strings)[1]

    print(name)
    # print(number, name, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed)
    csvWriter.writerow([number, name, sprite, model, classification, height, weight, type1, type2, ability1, ability2, ability3, bst, hp, attack, defense, sp_attack, sp_defense, speed])

csvFile.close()