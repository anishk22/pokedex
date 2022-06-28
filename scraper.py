import numbers
from bs4 import BeautifulSoup
import requests

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

table = soup.find('table', class_='dextable')

for entry in table.find_all('tr'):
    allInfo = entry.find_all('td', {'class': 'fooinfo'})
    try:
        number = allInfo[0].text.strip()
        image = allInfo[1].find('img')['src']
        name = allInfo[2].text.strip()

        typing = allInfo[3].find_all('a')
        try:
            type1link = typing[0].get('href')
            type1 = type1link[14:].capitalize()
            type2link = typing[1].get('href')
            type2 = type2link[14:].capitalize()
        except:
            type2link = 'N/A'
            type2 = 'N/A'

        abilities = allInfo[4].find_all('a')
        try:
            ability1 = abilities[0].text.strip()
            ability2 = abilities[1].text.strip()
            ability3 = abilities[2].text.strip()
        except:
            ability3 = 'N/A'
        
        hp = allInfo[5].text.strip()
        attack = allInfo[6].text.strip()
        defense = allInfo[7].text.strip()
        sp_attack = allInfo[8].text.strip()
        sp_defense = allInfo[9].text.strip()
        speed = allInfo[10].text.strip()

    except:
        number = 'N/A'
        image = 'N/A'
        name = 'N/A'
        type1link = 'N/A'
        type1 = 'N/A'
        type2link = 'N/A'
        type2 = 'N/A'
        ability1 = 'N/A'
        ability2 = 'N/A'
        ability3 = 'N/A'
        hp = 'N/A'
        attack = 'N/A'
        defense = 'N/A'
        sp_attack = 'N/A'
        sp_defense = 'N/A'
        speed = 'N/A'
        
    print(number, image, name, type1, type2, ability1, ability2, ability3, hp, attack, defense, sp_attack, sp_defense, speed)










# source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
# soup = BeautifulSoup(source, 'lxml')

# table = soup.find('table', class_='dextable')
# for entry in table.find_all('tr'):
#     for item in entry.find_all('td', {'class': 'fooinfo'}): 
#         print(item.text)

#     print('new entry')
#     print('\n')

# table.find_all('td', {'class': 'fooinfo'})
