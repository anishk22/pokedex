from bs4 import BeautifulSoup
import requests
import csv
import urllib.request

source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
soup = BeautifulSoup(source, 'lxml')
csvFile = open('pokemonInfo.csv', 'w')
csvWriter = csv.writer(csvFile)
csvWriter.writerow(['Number', 'Image URL', 'Name', 'Typings', 'Abilities', 'Base Stat Total', 'HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense', 'Speed'])

table = soup.find('table', class_='dextable')
table = table.find_all('tr')
allImageURLs = []

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
        
    imageURLfull = 'https://www.serebii.net' + imageURL
    
    bst = int(hp) + int(attack) + int(defense) + int(sp_attack) + int(sp_defense) + int(speed)
    allImageURLs.append(imageURLfull)
    print(number, imageURLfull, name, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed)
    csvWriter.writerow([number, imageURLfull, name, typings, abilities, bst, hp, attack, defense, sp_attack, sp_defense, speed])

for i in range(len(allImageURLs)):
    if len(str(i + 1)) < 3:
        num = '0' * (3 - len(str(i + 1))) + str(i + 1)
    num = str(num)

    urllib.request.urlretrieve(allImageURLs[i], "sprites/{}.png".format(num)) 

csvFile.close()