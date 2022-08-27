export const state = () => ({
  sharksTable: [
    {
      name: "Blue shark",
      path: "blue_shark",
      scientific_name: "Prionace glauca",
      length: "3.8 m", weight: "200 kg",
      description:
        "Blue sharks are curious, open-ocean predators that live throughout the global ocean, from the tropics to cold temperate waters. They spend most of their lives far from the coast and are truly a pelagic species. The common name comes from the blue color of the skin, unique among the sharks.",
      uicn_status: "NT",
    },
    {
      name: "Bronze whale shark",
      path: "bronze_whale_shark",
      scientific_name: "Carcharhinus brachyurus",
      length: "3.3 m", weight: "305 kg",
      uicn_status: "NT",
    },
    {
      name: "Bull shark",
      path: "bull_shark",
      scientific_name: "Carcharhinus leucas",
      length: "3.5 m", weight: "130 kg",
      description:
        "The bull shark is a predatory species that lives in coastal seas and is the shark with the best ability to move into freshwaters – particularly large, coastal rivers and lakes. They are able to move back and forth between saltwater and freshwater with ease. This behavior brings them into more contact with humans than most species of sharks, and they are therefore responsible for fatally biting more people than any other species.",
      uicn_status: "NT",
    },
    {
      name: "Dusty shark",
      path: "dusty_shark",
      scientific_name: "Carcharhinus obscurus",
      length: "4.2 m", weight: "347 kg",
      uicn_status: "EN",
    },
    {
      name: "Gray nurse shark",
      path: "gray_nurse_shark",
      scientific_name: "Carcharias taurus",
      length: "3.2 m", weight: "159 kg",
      description:
        "The sand tiger shark, also known as the gray nurse shark, is a slow-moving coastal predator distinguished by its flattened, conical snout and spiked, protruding teeth similar to the tiger shark. It has small eyes and light brown skin that resembles sand, helping the shark blend into its surroundings when looked at from above.",
      uicn_status: "CR",
    },
    {
      name: "Great Hammerhead shark",
      path: "hammerhead_shark",
      scientific_name: "Sphyrna zygaena",
      length: "6.1 m", weight: "230 kg",
      description:
        "The great hammerhead shark is the largest of all hammerhead species, reaching a maximum known length of 20 feet (6.1 m) and weight of 991 pounds (450 kg). The species is distinguished from other hammerheads by its nearly straight hammer-shaped head (cephalofoil) that has a prominent indentation in the middle.",
      uicn_status: "VU",
    },
    {
      name: "Tiger shark",
      path: "tiger_shark",
      scientific_name: "Galeocerdo cuvier",
      length: "3-4.2 m", weight: "635 kg",
      description:
        "The tiger shark gets its name from the characteristic vertical bars that cover the sides of its body. Though these bars fade slightly as individuals reach adulthood, they are very noticeable in juveniles and at least party visible throughout the lifetime. Reaching lengths of at least 18 feet (5.5 m) and 2000 pounds (nearly a metric tonne), the tiger shark is the fourth largest shark and second largest predatory shark, behind only the great white.",
      uicn_status: "NT",
    },
    {
      name: "Whale shark",
      path: "whale_shark",
      scientific_name: "Rhincodon typus",
      length: "14 m", weight: "23 tons (21,000 kg)",
      description:
        "The largest fish in the world is the graceful, harmless whale shark. Though they reach the size of a school bus, whale sharks eat tiny plankton and fish eggs, which they filter feed as they swim slowly along with their giant mouths wide open. They are one of only three species of filter feeding sharks.",
      uicn_status: "EN",
    },
    {
      name: "Great White shark",
      path: "white_shark",
      scientific_name: "Carcharodon carcharias",
      length: "7 m", weight: "2,5 tons (2,270 kg)",
      description:
        " Le requin blanc est un requin exceptionnellement grand mesurant en moyenne ente 4 et 6 m pour un poids d'environ 2 tonnes. Officiellement, le plus grand spécimen pêché et reconnu par les scientifiques mesurait 6,40 m et pesait 3 220 kg. Il possède un museau conique assez long. Ses dents, tranchantes comme des lames de rasoir, sont plates, triangulaires et dentelées et peuvent mesurer sept centimètres de long dont six centimètres dépassent des gencives. Sa mâchoire impressionnante comporte entre quatre et six rangées de dents dont seules les deux premières sont fonctionnelles. Quand il lui arrive de perdre une dent, une autre de la rangée arrière vient prendre sa place. La mâchoire de ce requin est dotée entre quarante-quatre à cinquante deux dents. Si les fentes branchiales sont très longues, elles n'encerclent pas totalement la tête. Ces branchies précèdent les nageoires pectorales de forme falciforme et bien développée. La nageoire caudale est courte, presque symétrique en forme de croissant. Super-prédateur des océans, le requin blanc a néanmoins son point faible. En effet, pour survivre, il doit être en mouvement constant afin de pouvoir s'oxygéner en permanence.",
      uicn_status: "VU",
    },
    {
      name: "Basking shark",
      path: "basking_shark",
      scientific_name: "Cetorhinus maximus",
      length: "10 m", weight: "16 tons (14,500 kg)",
      description:
        "The basking shark is the second largest fish in the world, and like the largest fish (the whale shark) and the largest animal (the great whales), basking sharks are filter feeders that eat tiny, planktonic prey. Reaching lengths of 40 feet (12 m) and resembling predatory sharks in appearance, the basking shark can give an intimidating impression, but they are quite harmless. They spend most of their time near the surface, swimming with their extraordinarily large mouths open, filtering out their preferred prey, but they may also make deeper, feeding dives.",
      uicn_status: "EN",
    },
    {
      name: "Spiny dogfish",
      path: "spiny_dogfish",
      scientific_name: "Squalus acanthias",
      length: "1.2 m", weight: "4.5 kg",
      description:
        "The spiny dogfish may go by many names, including piked dogfish, rock salmon and spiky dog, but only one truly represents this shark’s unique defense strategy. Using sharp, venomous spines in the front of each dorsal fin, the spiny dogfish is a small but mighty predator that isn’t afraid to take a jab at passing fish. They are considered one of the most abundant living shark species in the ocean, but are harmless to humans.",
      uicn_status: "VU",
    },
    {
      name: "Shortfin mako shark",
      path: "shortfin_mako_shark",
      scientific_name: "Isurus oxyrinchus",
      length: "3.7 m", weight: "450 kg",
      description:
        "The shortfin mako shark is a large, predatory shark that lives in the open ocean and reaches lengths of 12 feet (3.8 m) and weights of at least 1200 pounds (545 kg). With top speeds of 45 miles per hour (74 kilometers per hour), the shortfin mako is the fastest shark and is one of the fastest fishes on the planet. This species’ athleticism is not restricted to its swimming speeds. It is known for its incredible leaping ability and can be observed jumping to extreme heights (out of the water) when hunting.",
      uicn_status: "EN",
    },
    {
      name: "Grey shark",
      path: "grey_shark",
      scientific_name: "Carcharhinus amblyrhynchos",
      length: "2.6 m", weight: "33.7 kg",
      uicn_status: "NT",
    },
    {
      name: "Thresher shark",
      path: "thresher_shark",
      scientific_name: "Alopias vulpinus",
      length: "6.1 m", weight: "500 kg",
      description:
        "The pelagic thresher shark is one of three thresher sharks, all three known for their extremely long tails. Adult pelagic threshers’ tails are longer than the rest of the body. Scientists believe that they are highly migratory, but there have not been sufficient tagging studies to confirm that suspicion. Little is known about the ecology of pelagic thresher sharks, as they are difficult to study in their natural habitat (the open ocean).",
      uicn_status: "VU",
    },
    {
      name: "Porbeagle",
      path: "porbeagle",
      scientific_name: "Lamna nasus",
      length: "3.0 m", weight: "135 kg",
      description:
        "The porbeagle shark is a wide-ranging shark that’s recognized by its conical snout, white underbelly and dark gray top. Scholars have proposed that the porbeagle shark’s name originates from the combination of “porpoise” and “beagle” – referencing the shark’s rounded body and dogged hunting methods.",
      uicn_status: "VU",
    },
    {
      name: "Smalltooth sand tiger",
      path: "smalltooth_sand_tiger",
      scientific_name: "Odontaspis ferox",
      length: "4.1 m", weight: "289 kg",
      uicn_status: "NT",
    },
    {
      name: "Bluntnose sixgill shark",
      path: "bluntnose_sixgill_shark",
      scientific_name: "Hexanchus griseus",
      length: "3.5-4.2 m", weight: "500 kg",
      uicn_status: "NT",
    },
  ],
  iucnStatus: {
    EX: "extinct",
    EW: "extinct in the wild",
    CR: "critical endangered",
    EN: "endangered",
    VU: "vulnerable",
    NT: "near threatened",
    LT: "least concern",
  },
  questions: [
    {
      text: "Are sharks in danger ?",
      responses: [
        { text: "Yes", correct: true },
        { text: "No" },
        { text: "Maybe" },
      ],
      answer:
        "Yes definitly. Even if some of the species are not categorized by the iucn as 'in danger', that's not when it's too late that we'd change something. It should be done way before. Global warming, intensive fishing, destruction of their environments are some of the reasons why all type of sharks are actually in danger.",
    },
    {
      text: "Are sharks killers like in the movies ?",
      responses: [
        { text: " Very Small Aperture Terminal", correct: true },
        { text: "Varying Size Aperture Terminal " },
        { text: "None of the above" },
      ],
      answer: "Not at all. Human being often forget that all things are not thinking and acting like he does. Sharks are really unknown from us. Most of people don't like them just because they've always the bad role.",
    },
    {
      text: "What is shark finning ?",
      responses: [
        { text: "A movment made by associations to save and protect sharks" },
        {
          text: "Some barbaric practice",
          correct: true,
        },
        {
          text: "A specific behavior which occurs only when sharks are eating",
        },
      ],
      answer:
        "Shark finning is the act of removing fins from sharks and discarding the rest of the shark back into the ocean. This act is prohibited in many countries. The sharks are often still alive when discarded, but without their fins. Unable to swim effectively, they sink to the bottom of the ocean and die of suffocation or are eaten by other predators.",
    },
    {
      text: "Why can't we observe great white sharks in captivity ?",
      responses: [
        {
          text: "Because they're pelagic species so they can't survive",
          correct: true,
        },
        { text: "Hyphenation text markup language " },
        { text: "Hyper text markup language" },
      ],
      answer: "Because they're pelagic.",
    },
    {
      text: "Is Megalodon still alive ?",
      responses: [{ text: "Yes ", correct: true }, { text: "No" }, { text: "What is a Megalodon ?" }],
      answer: "Megalodon (Otodus megalodon) is the largest shark which has ever exists in our oceans. Went extinct millions years ago.",
    },
    {
      text: "Why can't we see skeleton of sharks ?",
      responses: [
        { text: "Strictly speaking, they've no skeleton", correct: true },
        { text: "It's very difficult to get them beacuse they're drawing deeply to the abysses" },
        { text: "Nobody mind about shark skeletons" }
      ],
      answer: "Sharks have cartilage skeleton, they don't have bones covering their body like a fish you can buy at the supermarket. As so, when they die, eveything can be eaten by their relatives into the ocean.",
    },
  ],
});
