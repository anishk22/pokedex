from pydoc import describe
from bs4 import BeautifulSoup
import requests
import csv
import urllib.request

# get the HTML from the URL
source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
soup = BeautifulSoup(source, 'lxml')

# initiliaze the csv file
csvFile = open('pokemonInfo.csv', 'w')
csvWriter = csv.writer(csvFile)
csvWriter.writerow(['Number', 'Name', 'Classification', 'Height', 'Weight', 'Typings', 'Abilities', 'Base Stat Total', 'HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense', 'Speed'])

# get the table
table = soup.find('table', class_='dextable')
table = table.find_all('tr')

# creates a list of all image and subpage links
allImageURLs = []
allSubpageURLs = []
allPokemonNames = []

# loops through the table and skips every other row
for i in range(0, len(table), 2):
    # skips the first row of the table 
    if i == 0:
        continue

    # compiles all pokemon info into a list
    allInfo = table[i].find_all('td', {'class': 'fooinfo'})

    # gets the attributes of the pokemon
    number = allInfo[0].text.strip()
    name = allInfo[2].text.strip()
    allPokemonNames.append(name.lower())

    # appends the typings as a list
    typings = allInfo[3].find_all('a')
    for i in range (len(typings)):
        typings[i] = typings[i].get('href')[14:].capitalize()

    # appends the abilities as a list
    abilities = allInfo[4].find_all('a')
    for i in range (len(abilities)):
        abilities[i] = abilities[i].text.strip()
    
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
    allImageURLs.append(imageURL)

    # gets the subpage link
    subpageURL = 'https://www.serebii.net' + allInfo[2].find('a').get('href')

    # pulls data from each pokemon's subpage
    subsource = requests.get(subpageURL).text
    subsoup = BeautifulSoup(subsource, 'lxml')
    subtable = subsoup.find('table', class_='dextable')
    allSubinfo = subtable.find_all('td', {'class': 'fooinfo'})

    # gets their physical attributes
    classification = allSubinfo[-3].text.strip()
    height = list(allSubinfo[-2].stripped_strings)
    weight = list(allSubinfo[-1].stripped_strings)

    print(name)
    # print(number, name, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed)
    csvWriter.writerow([number, name, classification, height, weight, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed])

csvFile.close()

# downloads all the pokemon sprites
# for i in range(len(allImageURLs)):
#     if len(str(i + 1)) < 3:
#         num = '0' * (3 - len(str(i + 1))) + str(i + 1)
#     else:
#         num = str(i + 1)
#     num = str(num)

#     urllib.request.urlretrieve(allImageURLs[i], "sprites/{}.png".format(num)) 

# # downloads all the pokemon models
for pokemon in allPokemonNames:
    modelURL = 'https://www.serebii.net/pokedex-swsh/' + pokemon + '/'
    modelSource = requests.get(modelURL).text
    modelSoup = BeautifulSoup(modelSource, 'lxml')

    modelTable = modelSoup.find('table', class_='dextable')
    modelImages = modelTable.find_all('td', {'class': 'pkmn'})
    modelURLfragment = modelImages[0].find('img')['src']
    modelURL = 'https://www.serebii.net' + modelURLfragment
    urllib.request.urlretrieve(modelURL, "images/{}.png".format(pokemon))
