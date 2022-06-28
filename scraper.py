from bs4 import BeautifulSoup
import requests
import csv

# source = requests.get('https://pokemondb.net/pokedex/all').text
# soup = BeautifulSoup(source, 'lxml')

# table = soup.find('tbody')

# for entry in table.find_all('tr'):
#     allInfo = entry.find_all('td')

#     number = allInfo[0].find('span', {'class': 'infocard-cell-data'}).text
#     linkExtension = allInfo[1].find('a')['href']
#     name = allInfo[1].find('a').text
#     try:
#         form = allInfo[1].find('small').text
#     except:
#         form = 'N/A'

#     typings = allInfo[2].find_all('a')
#     type1 = typings[0].text
#     try:
#         type2 = typings[1].text
#     except:
#         type2 = 'N/A'
    
#     bst = allInfo[3].text
#     hp = allInfo[4].text
#     attack = allInfo[5].text
#     defense = allInfo[6].text
#     sp_attack = allInfo[7].text
#     sp_defense = allInfo[8].text
#     speed = allInfo[9].text

#     print(number, name, form, type1, type2, bst, hp, attack, defense, sp_attack, sp_defense, speed)
#     print()


source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
soup = BeautifulSoup(source, 'lxml')
csvFile = open('pokemonInfo.csv', 'w')
csvWriter = csv.writer(csvFile)
csvWriter.writerow(['Number', 'Image URL', 'Name', 'Typings', 'Abilities', 'Base Stat Total', 'HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense', 'Speed'])

table = soup.find('table', class_='dextable')
table = table.find_all('tr')

for i in range(0, len(table), 2):
    if i == 0:
        continue

    allInfo = table[i].find_all('td', {'class': 'fooinfo'})
    try:
        number = allInfo[0].text.strip()
        imageURL = allInfo[1].find('img')['src']
        name = allInfo[2].text.strip()

        typingLinks = allInfo[3].find_all('a')
        for i in range (len(typingLinks)):
            typingLinks[i] = typingLinks[i].get('href')

        typings = typingLinks
        for i in range (len(typings)):
            typings[i] = typings[i][14:].capitalize()

        abilities = allInfo[4].find_all('a')
        for i in range (len(abilities)):
            abilities[i] = abilities[i].text.strip()
        
        hp = allInfo[5].text.strip()
        attack = allInfo[6].text.strip()
        defense = allInfo[7].text.strip()
        sp_attack = allInfo[8].text.strip()
        sp_defense = allInfo[9].text.strip()
        speed = allInfo[10].text.strip()

    except:
        number = 'N/A'
        imageURL = 'N/A'
        name = 'N/A'
        typings = 'N/A'
        abilities = 'N/A'
        hp = 'N/A'
        attack = 'N/A'
        defense = 'N/A'
        sp_attack = 'N/A'
        sp_defense = 'N/A'
        speed = 'N/A'
        

    bst = int(hp) + int(attack) + int(defense) + int(sp_attack) + int(sp_defense) + int(speed)

    print(number, imageURL, name, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed)
    csvWriter.writerow([number, imageURL, name, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed])

csvFile.close()



# source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
# soup = BeautifulSoup(source, 'lxml')

# table = soup.find('table', class_='dextable')
# for entry in table.find_all('tr'):
#     for item in entry.find_all('td', {'class': 'fooinfo'}): 
#         print(item.text)

#     print('new entry')
#     print('\n')

# table.find_all('td', {'class': 'fooinfo'})
