const allRankedFighters = [
    {
        name: 'Demetrious Johnson',
        url: 'http://www.sherdog.com/fighter/Demetrious-Johnson-45452' 
    },
    {
        name: 'Joseph Benavidez',
        url: 'http://www.sherdog.com/fighter/Joseph-Benavidez-15008'
    },
    {
        name: 'Henry Cejudo',        
        url: 'http://www.sherdog.com/fighter/Henry-Cejudo-125297'
    },
    {
        name: 'Ray Borg',
        url: 'http://www.sherdog.com/fighter/Ray-Borg-84752'
    },
    {
        name: 'Jussier Formiga',
        url: 'http://www.sherdog.com/fighter/Jussier-da-Silva-36939'
    },
    {
        name: 'Sergio Pettis',
        url: 'http://www.sherdog.com/fighter/Sergio-Pettis-50987'
    },
    {
        name: 'Wilson Reis',
        url: 'http://www.sherdog.com/fighter/Wilson-Reis-23401'
    },
    {
        name: 'Brandon Moreno',
        url: 'http://www.sherdog.com/fighter/Brandon-Moreno-80173'
    },
    {
        name: 'Ben Nguyen',
        url: 'http://www.sherdog.com/fighter/Ben-Nguyen-8183'
    },
    {
        name: 'Dustin Ortiz',
        url: 'http://www.sherdog.com/fighter/Dustin-Ortiz-58097'
    },
    {
        name: 'John Moraga',
        url: 'http://www.sherdog.com/fighter/John-Moraga-55159'
    },
    {
        name: 'Matheus Nicolau',
        url: 'http://www.sherdog.com/fighter/Matheus-Nicolau-Pereira-69341'
    },
    {
        name: 'Tim Elliott',
        url: 'http://www.sherdog.com/fighter/Tim-Elliott-49213'
    },
    {
        name: 'Alexandre Pantoja',
        url: 'http://www.sherdog.com/fighter/Alexandre-Pantoja-25023'
    },
    {
        name: 'Deiveson Figueiredo',
        url: 'http://www.sherdog.com/fighter/Deiveson-Figueiredo-110485'
    },
    {
        name: 'Magomed Bibulatov',
        url: 'http://www.sherdog.com/fighter/Magomed-Bibulatov-141553'
    },
    {
        name: 'TJ Dillashaw',
        url: 'http://www.sherdog.com/fighter/TJ-Dillashaw-62507'
    },
    {
        name: 'Cody Garbrandt',
        url: 'http://www.sherdog.com/fighter/Cody-Garbrandt-50381'
    },
    {
        name: 'Dominick Cruz',
        url: 'http://www.sherdog.com/fighter/Dominick-Cruz-12107'
    },
    {
        name: 'Raphael Assuncao',
        url: 'http://www.sherdog.com/fighter/Raphael-Assuncao-9574'
    },
    {
        name: 'Jimmie Rivera',
        url: 'http://www.sherdog.com/fighter/Jimmie-Rivera-40954'
    },
    {
        name: 'Marlon Moraes',
        url: 'http://www.sherdog.com/fighter/Marlon-Moraes-30936'
    },
    {
        name: 'John Lineker',
        url: 'http://www.sherdog.com/fighter/John-Lineker-41906'
    },
    {
        name: 'Bryan Caraway',
        url: 'http://www.sherdog.com/fighter/Bryan-Caraway-13791'
    },
    {
        name: 'John Dodson',
        url: 'http://www.sherdog.com/fighter/John-Dodson-11660'
    },
    {
        name: 'Aljamain Sterling',
        url: 'http://www.sherdog.com/fighter/Aljamain-Sterling-66313'
    },
    {
        name: 'Pedro Munhoz',
        url: 'http://www.sherdog.com/fighter/Pedro-Munhoz-52407'
    },
    {
        name: 'Rob Font',
        url: 'http://www.sherdog.com/fighter/Rob-Font-76100'
    },
    {
        name: 'Thomas Almeida',
        url: 'http://www.sherdog.com/fighter/Thomas-Almeida-87865'
    },
    {
        name: 'Eddie Wineland',
        url: 'http://www.sherdog.com/fighter/Eddie-Wineland-4173'
    },
    {
        name: 'Brett Johns',
        url: 'http://www.sherdog.com/fighter/Brett-Johns-92891'
    },
    {
        name: 'Matthew Lopez',
        url: 'http://www.sherdog.com/fighter/Matthew-Lopez-136139'
    },
    {
        name: 'Max Holloway',
        url: 'http://www.sherdog.com/fighter/Max-Holloway-38671'
    },
    {
        name: 'Jose Aldo',
        url: 'http://www.sherdog.com/fighter/Jose-Aldo-11506'
    },
    {
        name: 'Frankie Edgar',
        url: 'http://www.sherdog.com/fighter/Frankie-Edgar-14204'
    },
    {
        name: 'Brian Ortega',
        url: 'http://www.sherdog.com/fighter/Brian-Ortega-65310'
    },
    {
        name: 'Josh Emmett',
        url: 'http://www.sherdog.com/fighter/Josh-Emmett-85885'
    },
    {
        name: 'Cub Swanson',
        url: 'http://www.sherdog.com/fighter/Cub-Swanson-11002'
    },
    {
        name: 'Ricardo Lamas',
        url: 'http://www.sherdog.com/fighter/Ricardo-Lamas-32051'
    },
    {
        name: 'Chan Sung Jung',
        url: 'http://www.sherdog.com/fighter/Chan-Sung-Jung-36155'
    },
    {
        name: 'Jeremy Stephens',
        url: 'http://www.sherdog.com/fighter/Jeremy-Stephens-12179'
    },
    {
        name: 'Darren Elkins',
        url: 'http://www.sherdog.com/fighter/Darren-Elkins-22094'
    },
    {
        name: 'Yair Rodriguez',
        url: 'http://www.sherdog.com/fighter/Yair-Rodriguez-106305'
    },
    {
        name: 'Renato Moicano',
        url: 'http://www.sherdog.com/fighter/Renato-Carneiro-61700'
    },
    {
        name: 'Mirsad Bektic',
        url: 'http://www.sherdog.com/fighter/Mirsad-Bektic-59766'
    },
    {
        name: 'Dooho Choi',
        url: 'http://www.sherdog.com/fighter/Doo-Ho-Choi-56689'
    },
    {
        name: 'Myles Jury',
        url: 'http://www.sherdog.com/fighter/Myles-Jury-34236'
    },
    {
        name: 'Calvin Kattar',
        url: 'http://www.sherdog.com/fighter/Calvin-Kattar-23782'
    },
    {
        name: 'Conor McGregor',
        url: 'http://www.sherdog.com/fighter/Conor-McGregor-29688'
    },
    {
        name: 'Tony Ferguson',
        url: 'http://www.sherdog.com/fighter/Tony-Ferguson-31239'
    },
    {
        name: 'Khabib Nurmagomedov',
        url: 'http://www.sherdog.com/fighter/Khabib-Nurmagomedov-56035'
    },
    {
        name: 'Eddie Alvarez',
        url: 'http://www.sherdog.com/fighter/Eddie-Alvarez-9265'
    },
    {
        name: 'Edson  Barboza',
        url: 'http://www.sherdog.com/fighter/Edson-Barboza-46259'
    },
    {
        name: 'Dustin Poirier',
        url: 'http://www.sherdog.com/fighter/Dustin-Poirier-50529'
    },
    {
        name: 'Justin Gaethje',
        url: 'http://www.sherdog.com/fighter/Justin-Gaethje-46648'
    },
    {
        name: 'Kevin Lee',
        url: 'http://www.sherdog.com/fighter/Kevin-Lee-84342'
    },
    {
        name: 'Nate Diaz',
        url: 'http://www.sherdog.com/fighter/Nate-Diaz-11451'
    },
    {
        name: 'Michael Chiesa',
        url: 'http://www.sherdog.com/fighter/Michael-Chiesa-46224'
    },
    {
        name: 'Al Iaquinta',
        url: 'http://www.sherdog.com/fighter/Al-Iaquinta-42817'
    },
    {
        name: 'Beneil Dariush',
        url: 'http://www.sherdog.com/fighter/Beneil-Dariush-56583'
    },
    {
        name: 'James Vick',
        url: 'http://www.sherdog.com/fighter/James-Vick-81956'
    },
    {
        name: 'Anthony Pettis',
        url: 'http://www.sherdog.com/fighter/Anthony-Pettis-26627'
    },
    {
        name: 'Francisco Trinaldo',
        url: 'http://www.sherdog.com/fighter/Francisco-Trinaldo-31103'
    },
    {
        name: 'Evan Dunham',
        url: 'http://www.sherdog.com/fighter/Evan-Dunham-22038'
    },
    {
        name: 'Tyron Woodley',
        url: 'http://www.sherdog.com/fighter/Tyron-Woodley-42605'
    },
    {
        name: 'Stephen Thompson',
        url: 'http://www.sherdog.com/fighter/Stephen-Thompson-59608'
    },
    {
        name: 'Rafael Dos Anjos',
        url: 'http://www.sherdog.com/fighter/Rafael-dos-Anjos-11675'
    },
    {
        name: 'Colby Covington',
        url: 'http://www.sherdog.com/fighter/Colby-Covington-57269'
    },
    {
        name: 'Robbie Lawler',
        url: 'http://www.sherdog.com/fighter/Robbie-Lawler-2245'
    },
    {
        name: 'Demian Maia',
        url: 'http://www.sherdog.com/fighter/Demian-Maia-14637'
    },
    {
        name: 'Jorge Masvidal',
        url: 'http://www.sherdog.com/fighter/Jorge-Masvidal-7688'
    },
    {
        name: 'Darren Till',
        url: 'http://www.sherdog.com/fighter/Jorge-Masvidal-7688'
    },
    {
        name: 'Neil Magny',
        url: 'http://www.sherdog.com/fighter/Neil-Magny-69166'
    },
    {
        name: 'Kamaru Usman',
        url: 'http://www.sherdog.com/fighter/Kamaru-Usman-120691'
    },
    {
        name: 'Santiago Ponzinibbio',
        url: 'http://www.sherdog.com/fighter/Santiago-Ponzinibbio-64593'
    },
    {
        name: 'Donald Cerrone',
        url: 'http://www.sherdog.com/fighter/Donald-Cerrone-15105'
    },
    {
        name: 'Carlos Condit',
        url: 'http://www.sherdog.com/fighter/Carlos-Condit-6765'
    },
    {
        name: 'Gunnar Nelson',
        url: 'http://www.sherdog.com/fighter/Gunnar-Nelson-25246'
    },
    {
        name: 'Dong Hyun Kim',
        url: 'http://www.sherdog.com/fighter/Dong-Hyun-Kim-16374'
    },
    {
        name: 'Yancy Medeiros',
        url: 'http://www.sherdog.com/fighter/Yancy-Medeiros-27738'
    },
    {
        name: 'Robert Whittaker',
        url: 'http://www.sherdog.com/fighter/Robert-Whittaker-45132'
    },
    {
        name: 'Yoel Romero',
        url: 'http://www.sherdog.com/fighter/Yoel-Romero-60762'
    },
    {
        name: 'Luke Rockhold',
        url: 'http://www.sherdog.com/fighter/Luke-Rockhold-23345'
    },
    {
        name: 'Ronaldo Souza',
        url: 'http://www.sherdog.com/fighter/Ronaldo-Souza-8394'
    },
    {
        name: 'Chris Weidman',
        url: 'http://www.sherdog.com/fighter/Chris-Weidman-42804'
    },
    {
        name: 'Kelvin Gastelum',
        url: 'http://www.sherdog.com/fighter/Kelvin-Gastelum-74700'
    },
    {
        name: 'Michael Bisping',
        url: 'http://www.sherdog.com/fighter/Michael-Bisping-10196'
    },
    {
        name: 'Derek Brunson',
        url: 'http://www.sherdog.com/fighter/Derek-Brunson-68494'
    },
    {
        name: 'David Branch',
        url: 'http://www.sherdog.com/fighter/David-Branch-32431'
    },
    {
        name: 'Uriah Hall',
        url: 'http://www.sherdog.com/fighter/Uriah-Hall-14210'
    },
    {
        name: 'Vitor Belfort',
        url: 'http://www.sherdog.com/fighter/Vitor-Belfort-156'
    },
    {
        name: 'Thiago Santos',
        url: 'http://www.sherdog.com/fighter/Thiago-Santos-90021'
    },
    {
        name: 'Lyoto Machida',
        url: 'http://www.sherdog.com/fighter/Lyoto-Machida-7513'
    },
    {
        name: 'Krzysztof Jotko',
        url: 'http://www.sherdog.com/fighter/Krzysztof-Jotko-53380'
    },
    {
        name: 'Paulo Costa',
        url: 'http://www.sherdog.com/fighter/Paulo-Henrique-Costa-147165'
    },
    {
        name: 'Brad Tavares',
        url: 'http://www.sherdog.com/fighter/Brad-Tavares-33095'
    },
    {
        name: 'Daniel Cormier',
        url: 'http://www.sherdog.com/fighter/Daniel-Cormier-52311'
    },
    {
        name: 'Alexander Gustafsson',
        url: 'http://www.sherdog.com/fighter/Alexander-Gustafsson-26162'
    },
    {
        name: 'Glover Teixeira',
        url: 'http://www.sherdog.com/fighter/Glover-Teixeira-4655'
    },
    {
        name: 'Volkan Oezdemir',
        url: 'http://www.sherdog.com/fighter/Volkan-Oezdemir-58503'
    },
    {
        name: 'Jimi Manuwa',
        url: 'http://www.sherdog.com/fighter/Jimi-Manuwa-37528'
    },
    {
        name: 'Ovince Saint Preux',
        url: 'http://www.sherdog.com/fighter/Ovince-St-Preux-38842'
    },
    {
        name: 'Mauricio Rua',
        url: 'http://www.sherdog.com/fighter/Mauricio-Rua-5707'
    },
    {
        name: 'Misha Cirkunov',
        url: 'http://www.sherdog.com/fighter/Misha-Cirkunov-59197'
    },
    {
        name: 'Corey Anderson',
        url: 'http://www.sherdog.com/fighter/Corey-Anderson-171723'
    },
    {
        name: 'Ilir Latifi',
        url: 'http://www.sherdog.com/fighter/Ilir-Latifi-40207'
    },
    {
        name: 'Patrick Cummins',
        url: 'http://www.sherdog.com/fighter/Patrick-Cummins-72981'
    },
    {
        name: 'Jan Blachowicz',
        url: 'http://www.sherdog.com/fighter/Jan-Blachowicz-25821'
    },
    {
        name: 'Gadzhimurad Antigulov',
        url: 'http://www.sherdog.com/fighter/Gadzhimurad-Antigulov-55325'
    },
    {
        name: 'Tyson Pedro',
        url: 'http://www.sherdog.com/fighter/Tyson-Pedro-146831'
    },
    {
        name: 'Gian Villante',
        url: 'http://www.sherdog.com/fighter/Gian-Villante-42802'
    },
    {
        name: 'Jared Cannonier',
        url: 'http://www.sherdog.com/fighter/Jared-Cannonier-78628'
    },
    {
        name: 'Stipe Miocic',
        url: 'http://www.sherdog.com/fighter/Stipe-Miocic-39537'
    },
    {
        name: 'Francis Ngannou',
        url: 'http://www.sherdog.com/fighter/Francis-Ngannou-152341'
    },
    {
        name: 'Alistair Overeem',
        url: 'http://www.sherdog.com/fighter/Alistair-Overeem-461'
    },
    {
        name: 'Fabricio Werdum',
        url: 'http://www.sherdog.com/fighter/Fabricio-Werdum-8390'
    },
    {
        name: 'Cain Velasquez',
        url: 'http://www.sherdog.com/fighter/Cain-Velasquez-19102'
    },
    {
        name: 'Mark Hunt',
        url: 'http://www.sherdog.com/fighter/Mark-Hunt-10668'
    },
    {
        name: 'Derrick Lewis',
        url: 'http://www.sherdog.com/fighter/Derrick-Lewis-59284'
    },
    {
        name: 'Alexander Volkov',
        url: 'http://www.sherdog.com/fighter/Alexander-Volkov-40951'
    },
    {
        name: 'Marcin Tybura',
        url: 'http://www.sherdog.com/fighter/Marcin-Tybura-86928'
    },
    {
        name: 'Curtis Blaydes',
        url: 'http://www.sherdog.com/fighter/Curtis-Blaydes-172939'
    },
    {
        name: 'Stefan Struve',
        url: 'http://www.sherdog.com/fighter/Stefan-Struve-15063'
    },
    {
        name: 'Aleksei Oleinik',
        url: 'http://www.sherdog.com/fighter/Alexey-Oleynik-2027'
    },
    {
        name: 'Andrei Arlovski',
        url: 'http://www.sherdog.com/fighter/Andrei-Arlovski-270'
    },
    {
        name: 'Timothy Johnson',
        url: 'http://www.sherdog.com/fighter/Timothy-Johnson-72706'
    },
    {
        name: 'Junior Albini',
        url: 'http://www.sherdog.com/fighter/Junior-Albini-67923'
    },
    {
        name: 'Shamil Abdurakhimov',
        url: 'http://www.sherdog.com/fighter/Shamil-Abdurakhimov-26808'
    },
    {
        name: 'Rose Namajunas',
        url: 'http://www.sherdog.com/fighter/Rose-Namajunas-69083'
    },
    {
        name: 'Joanna Jedrzejczyk',
        url: 'http://www.sherdog.com/fighter/Joanna-Jedrzejczyk-101411'
    },
    {
        name: 'Jessica Andrade',
        url: 'http://www.sherdog.com/fighter/Jessica-Andrade-100715'
    },
    {
        name: 'Claudia Gadelha',
        url: 'http://www.sherdog.com/fighter/Claudia-Gadelha-48404'
    },
    {
        name: 'Karolina Kowalkiewicz',
        url: 'http://www.sherdog.com/fighter/Karolina-Kowalkiewicz-101401'
    },
    {
        name: 'Tecia Torres',
        url: 'http://www.sherdog.com/fighter/Tecia-Torres-85096'
    },
    {
        name: 'Carla Esparza',
        url: 'http://www.sherdog.com/fighter/Carla-Esparza-63410'
    },
    {
        name: 'Michelle Waterson',
        url: 'http://www.sherdog.com/fighter/Michelle-Waterson-23091'
    },
    {
        name: 'Felice Herrig',
        url: 'http://www.sherdog.com/fighter/Felice-Herrig-42432'
    },
    {
        name: 'Cynthia Calvillo',
        url: 'http://www.sherdog.com/fighter/Cynthia-Calvillo-93095'
    },
    {
        name: 'Alexa Grasso',
        url: 'http://www.sherdog.com/fighter/Alexa-Grasso-142845'
    },
    {
        name: 'Randa Markos',
        url: 'http://www.sherdog.com/fighter/Randa-Markos-75417'
    },
    {
        name: 'Cortney Casey',
        url: 'http://www.sherdog.com/fighter/Cortney-CaseySanchez-91121'
    },
    {
        name: 'Joanne Calderwood',
        url: 'http://www.sherdog.com/fighter/Joanne-Calderwood-94103'
    },
    {
        name: 'Maryna Moroz',
        url: 'http://www.sherdog.com/fighter/Maryna-Moroz-151905'
    },
    {
        name: 'Tatiana Suarez',
        url: 'http://www.sherdog.com/fighter/Tatiana-Suarez-161107'
    },
    {
        name: 'Nicco Montano',
        url: 'http://www.sherdog.com/fighter/Nicco-Montano-138319'
    },
    {
        name: 'Valentina Shevchenko',
        url: 'http://www.sherdog.com/fighter/Valentina-Shevchenko-45384'
    },
    {
        name: 'Sijara Eubanks',
        url: 'http://www.sherdog.com/fighter/Sijara-Eubanks-193533'
    },
    {
        name: 'Lauren Murphy',
        url: 'http://www.sherdog.com/fighter/Lauren-Murphy-66725'
    },
    {
        name: 'Alexis Davis',
        url: 'http://www.sherdog.com/fighter/Alexis-Davis-22071'
    },
    {
        name: 'Roxanne Modafferi',
        url: 'http://www.sherdog.com/fighter/Roxanne-Modafferi-8785'
    },
    {
        name: 'Barb Honchak',
        url: 'http://www.sherdog.com/fighter/Barb-Honchak-41484'
    },
    {
        name: 'Liz Carmouche',
        url: 'http://www.sherdog.com/fighter/Liz-Carmouche-67007'
    },
    {
        name: 'Katlyn Chookagian',
        url: 'http://www.sherdog.com/fighter/Katlyn-Chookagian-119071'
    },
    {
        name: 'Jessica-Rose Clark',
        url: 'http://www.sherdog.com/fighter/JessicaRose-Clark-115991'
    },
    {
        name: 'Jessica Eye',
        url: 'http://www.sherdog.com/fighter/Jessica-Eye-39575'
    },
    {
        name: 'Montana De La Rosa',
        url: 'http://www.sherdog.com/fighter/Montana-De-La-Rosa-175479'
    },
    {
        name: 'Rachael Ostovich',
        url: 'http://www.sherdog.com/fighter/Rachael-Ostovich-69142'
    },
    {
        name: 'Mara Romero Borella',
        url: 'http://www.sherdog.com/fighter/Mara-Romero-Borella-164915'
    },
    {
        name: 'Paige VanZant',
        url: 'http://www.sherdog.com/fighter/Paige-VanZant-99019'
    },
    {
        name: 'Shana Dobson',
        url: 'http://www.sherdog.com/fighter/Shana-Dobson-222841'
    },
    {
        name: 'Amanda Nunes',
        url: 'http://www.sherdog.com/fighter/Amanda-Nunes-31496'
    },
    {
        name: 'Holly Holm',
        url: 'http://www.sherdog.com/fighter/Holly-Holm-75125'
    },
    {
        name: 'Julianna Peña',
        url: 'http://www.sherdog.com/fighter/Julianna-Pena-50883'
    },
    {
        name: 'Raquel Pennington',
        url: 'http://www.sherdog.com/fighter/Raquel-Pennington-75564'
    },
    {
        name: 'Germaine de Randamie',
        url: 'http://www.sherdog.com/fighter/Germaine-de-Randamie-41745'
    },
    {
        name: 'Ketlen Vieira',
        url: 'http://www.sherdog.com/fighter/Ketlen-Vieira-178961'
    },
    {
        name: 'Cat Zingano',
        url: 'http://www.sherdog.com/fighter/Cat-Zingano-33932'
    },
    {
        name: 'Sara McMann',
        url: 'http://www.sherdog.com/fighter/Sara-McMann-67094'
    },
    {
        name: 'Ronda Rousey',
        url: 'http://www.sherdog.com/fighter/Ronda-Rousey-73073'
    },
    {
        name: 'Marion Reneau',
        url: 'http://www.sherdog.com/fighter/Marion-Reneau-61266'
    },
    {
        name: 'Leslie Smith',
        url: 'http://www.sherdog.com/fighter/Leslie-Smith-46542'
    },
    {
        name: 'Bethe Correia',
        url: 'http://www.sherdog.com/fighter/Bethe-Correia-103069'
    },
    {
        name: 'Aspen Ladd',
        url: 'http://www.sherdog.com/fighter/Aspen-Ladd-141393'
    },
    {
        name: 'Sarah Moras',
        url: 'http://www.sherdog.com/fighter/Sarah-Moras-61600'
    },
    {
        name: 'Irene Aldana',
        url: 'http://www.sherdog.com/fighter/Irene-Aldana-148377'
    },
    {
        name: 'Ashlee Evans-Smith',
        url: 'http://www.sherdog.com/fighter/Ashlee-EvansSmith-75021'
    }
];

module.exports = {
    allRankedFighters
}