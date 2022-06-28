from bs4 import BeautifulSoup
import requests

source = requests.get('https://pokemondb.net/pokedex/all').text
soup = BeautifulSoup(source, 'lxml')

table = soup.find('tbody')

for entry in table.find_all('tr'):
    allInfo = entry.find_all('td')

    number = allInfo[0].find('span', {'class': 'infocard-cell-data'}).text
    linkExtension = allInfo[1].find('a')['href']
    name = allInfo[1].find('a').text
    try:
        form = allInfo[1].find('small').text
    except:
        form = 'N/A'

    typings = allInfo[2].find_all('a')
    type1 = typings[0].text
    try:
        type2 = typings[1].text
    except:
        type2 = 'N/A'
    
    bst = allInfo[3].text
    hp = allInfo[4].text
    attack = allInfo[5].text
    defense = allInfo[6].text
    sp_attack = allInfo[7].text
    sp_defense = allInfo[8].text
    speed = allInfo[9].text

    print(number, name, form, type1, type2, bst, hp, attack, defense, sp_attack, sp_defense, speed)
    print()














# source = requests.get('https://www.serebii.net/pokemon/nationalpokedex.shtml').text
# soup = BeautifulSoup(source, 'lxml')

# table = soup.find('table', class_='dextable')
# for entry in table.find_all('tr'):
#     for item in entry.find_all('td', {'class': 'fooinfo'}): 
#         print(item.text)

#     print('new entry')
#     print('\n')

# table.find_all('td', {'class': 'fooinfo'})
