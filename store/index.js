export const useSharkTableStore = defineStore('sharks', {
  state: () => ({
    sharksTable: [
      {
        name: "Blue shark",
        path: "blue_shark",
        scientific_name: "Prionace glauca",
        length: "2.20 m", weight: "200 kg",
        description:
          "Blue sharks are curious, open-ocean predators that live throughout the global ocean, from the tropics to cold temperate waters. They spend most of their lives far from the coast and are truly a pelagic species. The common name comes from the blue color of the skin, unique among the sharks.",
        uicn_status: "NT",
        cloudinary_object_id: "blue_shark_i851op.jpg",
        rangemap_description: "",
        distribution: "The shark is located world-wide in temperate and tropical oceanic waters. Possibly the most wide-ranging of sharks because they live in such a broad range of areas."
      },
      {
        name: "Bronze whaler shark",
        path: "bronze_whale_shark",
        scientific_name: "Carcharhinus brachyurus",
        description: "The copper shark (Carcharhinus brachyurus), bronze whaler, or narrowtooth shark, is a species of requiem shark, family Carcharhinidae, and the only member of its genus found mostly at temperate latitudes.",
        length: "3.05 m", weight: "305 kg",
        uicn_status: "NT",
        cloudinary_object_id: "bronze_whale_shark_wlnamm.jpg",
        distribution: "Warm temperate to subtropical waters of the Atlantic, Mediterranean and Indo Pacific. It is seasonally migratory in at least part of its range. Along the coast of southern Africa it follows the giant shoals of migrating sardines."
      },
      {
        name: "Bull shark",
        path: "bull_shark",
        scientific_name: "Carcharhinus leucas",
        length: "3.25 m", weight: "130 kg",
        description:
          "The bull shark is a predatory species that lives in coastal seas and is the shark with the best ability to move into freshwaters – particularly large, coastal rivers and lakes. They are able to move back and forth between saltwater and freshwater with ease. This behavior brings them into more contact with humans than most species of sharks, and they are therefore responsible for fatally biting more people than any other species.",
        uicn_status: "NT",
        cloudinary_object_id: "bull_shark_jtxo6z.jpg",
        distribution: "Tropical and subtropical shallow coastal waters worldwide. This species has the ability to penetrate fresh water; it has been caught 3,691 km up the Amazon River in Peru, 547 km up the Zambesi River, and Lake Nicaragua has a landlocked population."
      },
      {
        name: "Dusty shark",
        path: "dusty_shark",
        scientific_name: "Carcharhinus obscurus",
        description: "The dusky shark (Carcharhinus obscurus) is a species of requiem shark, in the family Carcharhinidae, occurring in tropical and warm-temperate continental seas worldwide.",
        length: "4.2 m", weight: "347 kg",
        uicn_status: "EN",
        cloudinary_object_id: "dusty_shark_ukopjd.jpg",
        distribution: "Cosmopolitan in warm temperate and tropical seas."
      },
      {
        name: "Gray nurse shark",
        path: "gray_nurse_shark",
        scientific_name: "Carcharias taurus",
        length: "3.2 m", weight: "159 kg",
        description:
          "The sand tiger shark, also known as the gray nurse shark, is a slow-moving coastal predator distinguished by its flattened, conical snout and spiked, protruding teeth similar to the tiger shark. It has small eyes and light brown skin that resembles sand, helping the shark blend into its surroundings when looked at from above.",
        uicn_status: "CR",
        cloudinary_object_id: "gray_nurse_shark_tlcayi.jpg",
        distribution: "Este tiburon se puede encontrar en el Atlántico, Pacífico e Índico, y también en los mares Mediterráneo y Adriático."
      },
      {
        name: "Great Hammerhead shark",
        path: "hammerhead_shark",
        scientific_name: "Sphyrna zygaena",
        length: "6.1 m", weight: "230 kg",
        description:
          "The great hammerhead shark is the largest of all hammerhead species, reaching a maximum known length of 20 feet (6.1 m) and weight of 991 pounds (450 kg). The species is distinguished from other hammerheads by its nearly straight hammer-shaped head (cephalofoil) that has a prominent indentation in the middle.",
        uicn_status: "VU",
        cloudinary_object_id: "hammerhead_shark_uow3b3.webp",
        distribution: "Circumtropical."
      },
      {
        name: "Tiger shark",
        path: "tiger_shark",
        scientific_name: "Galeocerdo cuvier",
        length: "3-4.2 m", weight: "635 kg",
        description:
          "The tiger shark gets its name from the characteristic vertical bars that cover the sides of its body. Though these bars fade slightly as individuals reach adulthood, they are very noticeable in juveniles and at least party visible throughout the lifetime. Reaching lengths of at least 18 feet (5.5 m) and 2000 pounds (nearly a metric tonne), the tiger shark is the fourth largest shark and second largest predatory shark, behind only the great white.",
        uicn_status: "NT",
        cloudinary_object_id: "tiger_shark_wbelg3.jpg",
        distribution: "Circumglobal in tropical and warm temperate seas."
      },
      {
        name: "Whale shark",
        path: "whale_shark",
        scientific_name: "Rhincodon typus",
        length: "14 m", weight: "23 tons (21,000 kg)",
        description:
          "Whale sharks are the largest shark, and indeed largest of any fishes alive today. They feed on plankton and travel large distances to find enough food to sustain their huge size, and to reproduce. Whale sharks are found in all the tropical oceans of the world. Their white spotted colouration makes these gentle giants easy to distinguish, and popular with snorkelers and divers at sites where they aggregate off the coast. The maximum size of whale sharks is not known, but could be as large as 20m. Females give birth to live young but this has never been observed. Where pupping occurs and where the youngest animals situate remains a mystery, as they are very rarely found. Adults are often found feeding at the surface, but may dive to 1000m. Whale sharks are protected from fishing in many countries these days, but are in decline in some areas.",
        uicn_status: "EN",
        cloudinary_object_id: "whale_shark_aib9zk.jpg",
        distribution: "Se encuentra en los océanos y mares cálidos, cerca de los trópicos."
      },
      {
        name: "Great White shark",
        path: "white_shark",
        scientific_name: "Carcharodon carcharias",
        length: "4.8-6 m", weight: "2,250 kg",
        description:
          "The great white shark is the world's largest known predatory fish. It has 300 teeth, yet does not chew its food. Sharks rip their prey into mouth-sized pieces which are swallowed whole.  The shark’s heavy, torpedo-shaped body allows it to cruise efficiently for long periods of time, and then suddenly switch to high speed bursts in pursuit of prey—sometimes leaping out of the water. It feeds on a broad spectrum of prey, from small fish, such as halibut, to large seals and dolphins.",
        uicn_status: "VU",
        cloudinary_object_id: "white_shark_wiqksu.jpg",
        distribution: "El tiburón blanco vive sobre las zonas de plataforma continental, cerca de las costas, donde el agua es menos profunda. Es en estas zonas donde la abundancia de luz y corrientes marinas genera una mayor concentración de vida animal, lo que para esta especie equivale a una mayor cantidad de alimento. Sin embargo, están ausentes de los fríos océanos Ártico y Antártico, a pesar de su gran abundancia en plancton, peces y mamíferos marinos."
      },
      {
        name: "Basking shark",
        path: "basking_shark",
        scientific_name: "Cetorhinus maximus",
        length: "10 m", weight: "16 tons (14,500 kg)",
        description:
          "The basking shark is the second largest fish in the world, and like the largest fish (the whale shark) and the largest animal (the great whales), basking sharks are filter feeders that eat tiny, planktonic prey. Reaching lengths of 40 feet (12 m) and resembling predatory sharks in appearance, the basking shark can give an intimidating impression, but they are quite harmless. They spend most of their time near the surface, swimming with their extraordinarily large mouths open, filtering out their preferred prey, but they may also make deeper, feeding dives.",
        uicn_status: "EN",
        cloudinary_object_id: "basking_shark_hxcaaj.jpg",
        distribution: "El peregrino es un tiburón pelágico que suele visitar con frecuencia zonas costeras, pudiendo ser hallado a lo largo de todo el mundo, desde las áreas polares hasta océanos tropicales, principalmente en las superficies de las plataformas continentales, si bien prefiere aguas frías, habitualmente entre los 8 y los 14 °C. Suele ser avistado en zonas próximas a las costas y es habitual que penetren en bahías y puertos.",
      },
      {
        name: "Spiny dogfish",
        path: "spiny_dogfish",
        scientific_name: "Squalus acanthias",
        length: "1.2 m", weight: "4.5 kg",
        description:
          "The spiny dogfish may go by many names, including piked dogfish, rock salmon and spiky dog, but only one truly represents this shark’s unique defense strategy. Using sharp, venomous spines in the front of each dorsal fin, the spiny dogfish is a small but mighty predator that isn’t afraid to take a jab at passing fish. They are considered one of the most abundant living shark species in the ocean, but are harmless to humans.",
        uicn_status: "VU",
        cloudinary_object_id: "spiny_dogfish_t5kjmf.jpg",
        distribution: "",
      },
      {
        name: "Shortfin mako shark",
        path: "shortfin_mako_shark",
        scientific_name: "Isurus oxyrinchus",
        length: "3.7 m", weight: "450 kg",
        description:
          "The shortfin mako shark is a large, predatory shark that lives in the open ocean and reaches lengths of 12 feet (3.8 m) and weights of at least 1200 pounds (545 kg). With top speeds of 45 miles per hour (74 kilometers per hour), the shortfin mako is the fastest shark and is one of the fastest fishes on the planet. This species’ athleticism is not restricted to its swimming speeds. It is known for its incredible leaping ability and can be observed jumping to extreme heights (out of the water) when hunting.",
        uicn_status: "EN",
        cloudinary_object_id: "shortfin_mako_shark_1_qud3zh.jpg",
        distribution: "Tiene una distribución muy amplia: se encuentra en el océano Pacífico, Atlántico, Índico, mar Mediterráneo y Mar caribe mar Rojo.",
      },
      {
        name: "Grey shark",
        path: "grey_shark",
        scientific_name: "Carcharhinus amblyrhynchos",
        description: "The grey reef shark (Carcharhinus amblyrhynchos, sometimes misspelled amblyrhynchus or amblyrhinchos)[2] is a species of requiem shark, in the family Carcharhinidae. One of the most common reef sharks in the Indo-Pacific, it is found as far east as Easter Island and as far west as South Africa. This species is most often seen in shallow water near the drop-offs of coral reefs. It has the typical 'reef shark' shape, with a broad, round snout and large eyes.",
        length: "2.6 m", weight: "33.7 kg",
        uicn_status: "NT",
        cloudinary_object_id: "grey_shark_pvrpjo.webp",
        distribution: "Indian Ocean, and Western Pacific eastward to Hawaiian Islands."
      },
      {
        name: "Thresher shark",
        path: "thresher_shark",
        scientific_name: "Alopias vulpinus",
        length: "6.1 m", weight: "500 kg",
        description:
          "The pelagic thresher shark is one of three thresher sharks, all three known for their extremely long tails. Adult pelagic threshers’ tails are longer than the rest of the body. Scientists believe that they are highly migratory, but there have not been sufficient tagging studies to confirm that suspicion. Little is known about the ecology of pelagic thresher sharks, as they are difficult to study in their natural habitat (the open ocean).",
        uicn_status: "VU",
        cloudinary_object_id: "thresher_shark_bshqfm.jpg",
        distribution: "",
      },
      {
        name: "Porbeagle",
        path: "porbeagle",
        scientific_name: "Lamna nasus",
        length: "3.0 m", weight: "135 kg",
        description:
          "The porbeagle shark is a wide-ranging shark that’s recognized by its conical snout, white underbelly and dark gray top. Scholars have proposed that the porbeagle shark’s name originates from the combination of “porpoise” and “beagle” – referencing the shark’s rounded body and dogged hunting methods.",
        uicn_status: "VU",
        cloudinary_object_id: "porbeagle_njgw9z.webp",
        distribution: "Se encuentra tanto en aguas cercanas al litoral como oceánicas, se mueve desde la superficie hasta los 370 metros de profundidad. Prefiere las aguas frías. En verano se acerca mucho a la costa, llegando a penetrar en playas y puertos.",
      },
      {
        name: "Smalltooth sand tiger",
        path: "smalltooth_sand_tiger",
        scientific_name: "Odontaspis ferox",
        description: "The smalltooth sand tiger or bumpytail ragged-tooth (Odontaspis ferox) is a species of mackerel shark in the family Odontaspididae, with a patchy but worldwide distribution in tropical and warm temperate waters. They usually inhabit deepwater rocky habitats, though they are occasionally encountered in shallow water, and have been known to return to the same location year after year.",
        length: "4.1 m", weight: "289 kg",
        uicn_status: "NT",
        cloudinary_object_id: "smalltooth_sand_tiger_1_ddcmgq.jpg",
        distribution: "Circuntropical",
      },
      {
        name: "Bluntnose sixgill shark",
        path: "bluntnose_sixgill_shark",
        scientific_name: "Hexanchus griseus",
        description: "The bluntnose sixgill shark (Hexanchus griseus), often simply called the cow shark, is the largest hexanchoid shark, growing to 20 ft (6.1 m) in length.[2] It is found in tropical and temperate waters worldwide and its diet is widely varied by region.",
        length: "3.5-4.2 m", weight: "500 kg",
        uicn_status: "NT",
        cloudinary_object_id: "bluntnose_sixgill_shark_1_dde1nc.jpg",
        distribution: "Se le encuentra en las costas oceánicas tropicales y templadas -desde Islandia a Namibia, estando presente en el Mediterráneo- a profundidades de hasta 1875 m, aunque en determinadas épocas del año, asciende por la noche hasta ambientes litorales, y es posible observarlo a pocos metros de la superficie.",
      },
      {
        name: "Salmon shark",
        path: "salmon_shark",
        scientific_name: "Lamna ditropis",
        description: "Adult salmon sharks are medium grey to black over most of the body, with a white underside with darker blotches. Juveniles are similar in appearance, but generally lack blotches. The snout is short and cone-shaped, and the overall appearance is similar to a small great white shark. The eyes are positioned well forward, enabling binocular vision to accurately locate prey.[5]",
        length: "2-2.60 m", weight: "220 kg",
        uicn_status: "NT",
        cloudinary_object_id: "salmon_shark_lc1ssk.jpg",
        distribution: "Tagging has revealed a range which includes sub-Arctic to subtropical waters. The salmon shark occurs in the North Pacific Ocean, in both coastal waters and the open ocean.It is believed to range as far south as the Sea of Japan and as far north as 65°N in Alaska."
      },
    ]
  }),
})

export const useQuestionsStore = defineStore('interactive', {
  state: () => ({
    questions: [
      {
        id: "1",
        text: "Are sharks in danger ?",
        responses: [
          { id: "1", text: "Yes", correct: true },
          { id: "2", text: "No" },
          { id: "3", text: "Maybe" },
        ],
        answer:
          "Definitely. Even if some of the species are not categorized by the iucn as 'in danger', that's not when it's too late that we'd change something. It should be done way before. Global warming, intensive fishing, destruction of their environments are some of the reasons why all type of sharks are actually in danger.",
      },
      {
        id: "2",
        text: "Are sharks killers like in the movies ?",
        responses: [
          { id: "1", text: "Yes, absolutely" },
          { id: "2", text: "Not at all", correct: true },
          { id: "3", text: "Sometimes they can kill for pleasure" },
        ],
        answer: "No, they're not killers. That's not because they're shown acting like killers that this is true. In fact sharks are rarely hunting because they're not eating much. Also, to them human flesh is not a very tasty meal. Finally, this notion of 'killer' is really human and shouldn't be applied to shark's behaviors.",
      },
      {
        id: "3",
        text: "What is shark finning ?",
        responses: [
          { id: "1", text: "A movement made by associations to save and protect sharks" },
          {
            id: "2",
            text: "Some barbaric practice",
            correct: true,
          },
          {
            id: "3", text: "A specific behavior which occurs only when sharks are eating",
          },
        ],
        answer:
          "Shark finning is the act of removing fins from sharks and discarding the rest of the shark back into the ocean. This act is prohibited in many countries. The sharks are often still alive when discarded, but without their fins. Unable to swim effectively, they sink to the bottom of the ocean and die of suffocation or are eaten by other predators.",
      },
      {
        id: "4",
        text: "Can we observe great white sharks in captivity ?",
        responses: [
          {
            id: "1",
            text: "Yes"
          },
          { id: "2", text: "No", correct: true, },
          { id: "3", text: "Sometimes" },
        ],
        answer: "It seems that they're incapable to survive in captivity. During the past some tries have been made such as the one in 2016 at Okinawa island in the south of Japan, Churaumi aquarium tried to conserve a male victim of unfortunate fishing. He died 3 days after being captured. Studies showed that he refused to eat. In fact great white sharks travel hundreds of kilometers, we can't image the size of the aquarium to contain such space. Moreover, they can develop psychological diseases being separated from their natural environment.",
      },
      {
        id: "5",
        text: "Why can't we see skeleton of sharks ?",
        responses: [
          { id: "1", text: "Strictly speaking, they've no skeleton", correct: true },
          { id: "2", text: "It's very difficult to get them because they're drowning deeply to the abysses" },
          { id: "3", text: "Nobody mind about shark skeletons" }
        ],
        answer: "Sharks have cartilage skeleton, they don't have bones covering their body like a fish you can buy at the supermarket. As so, when they die, everything can be eaten by their relatives into the ocean.",
      },
    ]
  }),
})

export const useIUCNStatusStore = defineStore('iucn', {
  state: () => ({
    iucnStatus: {
      EX: "extinct",
      EW: "extinct in the wild",
      CR: "critical endangered",
      EN: "endangered",
      VU: "vulnerable",
      NT: "near threatened",
      LT: "least concern",
    }
  }),
})