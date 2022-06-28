from bs4 import BeautifulSoup
import requests

source = requests.get('https://pokemondb.net/pokedex/all').text
soup = BeautifulSoup(source, 'lxml')

table = soup.find('tbody')
for entry in table.find_all('tr'):
    identifier = entry.find('td', {'class': 'cell-num cell-fixed'})

    # imageWrapper = identifier.find('span', {'class': 'infocard-cell-img'})
    # image = imageWrapper.find('span', {'class': 'img-fixed icon-pkmn'}).get('data-src')
    # print(image)

    number = identifier.find('span', {'class': 'infocard-cell-data'}).text

    nameWrapper = entry.find('td', {'class': 'cell-name'})
    link = nameWrapper.find('a')['href']
    name = nameWrapper.find('a').text
    try:
        form = nameWrapper.find('small').text
    except:
        form = 'N/A'

    typingsWrapper = entry.find('td', {'class': 'cell-icon'})
    typings = typingsWrapper.find_all('a')
    type1 = typings[0].text
    try:
        type2 = typings[1].text
    except:
        type2 = 'N/A'
    
    bst = entry.find('td', {'class': 'cell-total'}).text
    allStats = entry.find_all('td', {'class': 'cell-num'})
    hp = allStats[0].text
    attack = allStats[1].text
    defense = allStats[2].text
    sp_attack = allStats[3].text
    sp_defense = allStats[4].text
    speed = allStats[5].text

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
