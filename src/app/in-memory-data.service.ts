import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [



      {
        name: 'IRON MAN',
        description: `Wounded, captured and forced to build a weapon by his enemies, billionaire
          industrialist Tony Stark instead created an advanced suit of armor to save his life and
          escape captivity. Now with a new outlook on life, Tony uses his money and intelligence
          to make the world a safer, better place as Iron Man. less`,
        realName: 'Anthony Edward \"Tony\" Stark',
        height: '6\'1\"; (in armor) 6\'6\"',
        weight: '225 lbs.; (in armor) 425 lbs',
        powers: `None; Tony\'\'s body had been enhanced by the modified techno-organic virus,
          Extremis, but it is currently inaccessible and inoperable.`,
        abilities: `Tony has a genius level intellect that allows him to
          invent a wide range of sophisticated devices,
          specializing in advanced weapons and armor. He
          possesses a keen business mind.`,
        groups: `The Avengers, Initiative, Hellfire Club (outer circle), S.H.I.E.L.D., Illuminati,
          Thunderbolts, Force Works, Queen\'s Vengeance, Alcoholics Anonymous`,

        avatarLink: '/assets/img/IronManAvatar.jpg',
        imageLink: '/assets/img/IronManImage.jpg'
      },
      {
        name: 'SPIDER-MAN',
        description: `Bitten by a radioactive spider, high school student Peter Parker gained
          the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped
          to start a career using his new abilities. Taught that with great power comes great
          responsibility, Spidey has vowed to use his powers to help people.`,
        realName: 'Peter Benjamin Parker',
        height: '5\'10\"',
        weight: '167 lbs.',
        powers: `Peter can cling to most surfaces, has superhuman strength (able to lift 10
          tons optimally) and is roughly 15 times more agile than a regular human. The combination
          of his acrobatic leaps and web-slinging enables him to travel rapidly from place to place.
          His spider-sense provides an early warning detection system linked with his superhuman
          kinesthetics, enabling him the ability to evade most any injury, provided he doesn\'t
          cognitively override the autonomic reflexes. Note: his power enhancements through his
          transformation by the Queen and after battling Morlun - including his organic web glands
          and stingers - have been undone after Spider-Man\'s deal with Mephisto.`,
        abilities: 'Peter is an accomplished scientist, inventor and photographer.',
        groups: 'Avengers, formerly the Secret Defenders, "New Fantastic Four", the Outlaws',
        avatarLink: '/assets/img/SpiderManAvatar.jpg',
        imageLink: '/assets/img/SpiderManImage.jpg'
      },
      {
        name: 'CAPTAIN AMERICA',
        description: `Vowing to serve his country any way he could, young Steve Rogers took
          the super soldier serum to become America\'s one-man army. Fighting for the red, white
          and blue for over 60 years, Captain America is the living, breathing symbol of freedom
          and liberty.`,
        realName: 'Steven "Steve" Rogers',
        height: '6\'2\"',
        weight: '220 lbs',
        powers: `Captain America represented the pinnacle of human physical perfection. He
          experienced a time when he was augmented to superhuman levels, but generally performed
          just below superhuman levels for most of his career. Captain America had a very high
          intelligence as well as agility, strength, speed, endurance, and reaction time superior
          to any Olympic athlete who ever competed. The Super-Soldier formula that he had metabolized
          had enhanced all of his bodily functions to the peak of human efficiency. Most notably,
          his body eliminates the excessive build-up of fatigue-producing poisons in his muscles,
          granting him phenomenal endurance.`,
        abilities: `Captain America had mastered the martial arts of American-style boxing and judo,
          and had combined these disciplines with his own unique hand-to-hand style of combat.
          He had also shown skill and knowledge of a number of other martial arts. He engaged in a
          daily regimen of rigorous exercise (including aerobics, weight lifting, gymnastics, and
          simulated combat) to keep himself in peak condition. Captain America was one of the finest
          human combatants Earth had ever known.`,
        groups: `Secret Avengers; formerly the Avengers, Invaders, Captain\'s Unnamed Superhero Team,
          Redeemers; formerly partner of Winter Soldier, Bucky, Jones, Rick, Rick Jones, Falcon
          (Sam Wilson), Falcon, Demolition Man and Nomad (Jack Monroe)`,
        avatarLink: '/assets/img/CaptainAmericaAvatar.jpg',
        imageLink: '/assets/img/CaptainAmericaImage.jpg'
      },
      {
        name: 'PUNISHER',
        description: `Francis Castiglione is a former U.S. Marine Captain. Before Frank joined the
          Marines, he was studying to become a Catholic priest but changed his mind because he was
          unable to forgive those who did evil. After a tour in vietnam his family was murder because i
          they witnessed a gagng shooting. Since then he has waged a one-man war upon crime,
          taking the name Punisher.`,
        realName: 'Frank Castle (born Castiglione)',
        height: '6\'1\"',
        weight: '200 lbs.',
        powers: 'None',
        abilities: `Punisher is the recipient of multidisciplinary military training from the
          U.S. Marine Corps. While a Marine, he also received training from the U.S. Army and Navy.
          From this training, Punisher is proficient in not only basic infantry skills, but in
          special operations, which includes the use and maintenance of specialized firearms and
          explosive ordnance. He is highly trained in infiltration into heavily-guarded enemy
          territories and structures for the purpose of assassination, captures, and military
          intelligence. Also, he is trained in various forms of camouflage and stealth. From his
          airborne training, Punisher is able to pack and maintain his own parachute rigs, as well
          as professionally control his landings, in daylight and at night. From his Navy UDT training,
          Punisher is well-skilled in extended underwater operations, including demolitions. He
          is skilled with a great many types of explosives, ranging from simple dynamite to plastique
          to improvised explosives. His hand-to-hand combat skills are more then sufficient to allow
          him to incapacitate and kill men much stronger than he is, as well as to deal with groups
          of armed and unarmed enemies, killing them all without weapons if he deems it necessary.
          He is also extremely deadly in knife training, preferring the knife he learned to fight
          with in the USMC: the ka-bar. Additionally, he is a preternaturally-precise marksman.
          He is thoroughly trained and experienced in unconventional ("guerilla") warfare.
          He is an armorer, a gunsmith, and an expert in field medicine.r`,
        groups: `None; formerly Code Red, Secret Avengers, Marvel Knights, Daredevil\'s Unnamed
          Super-Hero Team, Green Berets, U.S. Marine Corps`,
        avatarLink: '/assets/img/PunisherAvatar.jpg',
        imageLink: '/assets/img/PunisherImage.jpg'
      },
      {
        name: 'BLACK PANTHER',
        description: `T\'Challa is heir to the centuries-old ruling dynasty of the African kingdom
          Wakanda, and ritual leader of its Panther Clan. After revenging his father death he began
          transforming his country into a high-tech wonderland and defending peace`,
        realName: 'T\'Challa',
        height: '6\'',
        weight: '200 lbs.',
        powers: `T\'Challa\'s senses and physical attributes have been enhanced to superhuman levels
          by the heart-shaped herb.`,
        abilities: `T'Challa is a brilliant tactician, strategist, scientist, tracker and a master
          of all forms of unarmed combat whose unique hybrid fighting style incorporates acrobatics
          and aspects of animal mimicry. T'Challa being a royal descendent of a warrior race is also
          a master of armed combat, able to use a variety of weapons but prefers unarmed combat.
          He is a master planner who always thinks several steps ahead and will go to extreme measures
          to achieve his goals and protect the kingdom of Wakanda.`,
        groups: `Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's
          Vengeance, former Fantastic Force financier`,
        avatarLink: '/assets/img/BlackPantherAvatar.jpg',
        imageLink: '/assets/img/BlackPantherImage.jpg'
      },
      {
        name: 'HULK',
        description: `Caught in a gamma bomb explosion while trying to save the life of a teenager,
          Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.
          An all too often misunderstood hero, the angrier the Hulk gets, the stronger
          the Hulk gets.`,
        realName: 'Robert Bruce Banner',
        height: `5\' 9½\" (Banner); 6\'6\" (gray Hulk); 7\' – 8\' (green/savageHulk); 7\'6\"
          (green/Professor Hulk)`,
        weight: `128 lbs. (Banner); 900 lbs. (gray Hulk); 1,040 – 1,400 lbs.(green/savage Hulk);
          1,150 lbs. (green/Professor Hulk)`,
        powers: `The Hulk possesses an incredible level of superhuman physical ability. His capacity
          for physical strength is potentially limitless due to the fact that the Hulk's strength
          increases proportionally with his level of great emotional stress, anger in particular.
          The Hulk uses his superhumanly strong leg muscles to leap great distances. The Hulk has
          been known to cover hundreds of miles in a single bound and once leaped almost into orbit
          around the Earth. The Hulk can also use his superhumanly leg muscles to run at super speeds,
          although his legs have limitless strength he does not have limitless speed and once he
          reaches a certain speed his legs become too strong and destroy the ground giving him no
          friction to run on, therefore he jumps to travel. The Hulk can slam his hands together
          creating a shock wave, this shock wave can deafen people, send objects flying and extinguish
          fires. His thunderclap has been compared to hurricanes and sonic booms. The Hulk has shown a
          high resistance to physical damage nearly regardless of the cause, and has also shown
          resistance to extreme temperatures, mind control, nuclear explosions, poisons, and all
          diseases. In addition to the regeneration of limbs, vital organs, and damaged or destroyed
          areas of tissue at an amazing rate. The Hulk also has superhuman endurance.The Hulk\'s
          body also has a gland that makes an "oxygenated per fluorocarbon emulsion", which
          creates pressure in the Hulk\'s lungs and effectively lets him breathe underwater and
          move quickly between varying depths without concerns about decompression or nitrogen
          narcosis.`,
        abilities: `Dr. Bruce Banner is a genius in nuclear physics, possessing a mind so brilliant
          that it cannot be measured on any known intelligence test. When Banner is the Hulk,
          Banner\'s consciousness is buried within the Hulk\'s, and can influence the Hulk\'s
          behavior only to a very limited extent.`,
        groups: `Formerly Avengers, Defenders, Fantastic Four, Pantheon, Horsemen of Apocalypse,
          Warbound`,
        avatarLink: '/assets/img/HulkAvatar.jpg',
        imageLink: '/assets/img/HulkImage.jpg'
      }


    ];

    return {heroes};
  }
}
