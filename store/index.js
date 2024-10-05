export const useSharkTableStore = defineStore("sharks", {
  state: () => ({
    sharksTable: [
      {
        path: "blue_shark",
        scientific_name: "Prionace glauca",
        length: "3,8 m",
        uicn_status: "NT",
        cloudinary_object_id: "blue_shark_i851op.jpg",
      },
      {
        path: "bronze_whale_shark",
        scientific_name: "Carcharhinus brachyurus",
        length: "3.05 m",
        uicn_status: "NT",
        cloudinary_object_id: "bronze_whale_shark_wlnamm.jpg",
      },
      {
        path: "bull_shark",
        scientific_name: "Carcharhinus leucas",
        length: "4 m",
        uicn_status: "NT",
        cloudinary_object_id: "bull_shark_jtxo6z.jpg",
      },
      {
        path: "dusty_shark",
        scientific_name: "Carcharhinus obscurus",
        length: "4.2 m",
        uicn_status: "EN",
        cloudinary_object_id: "dusty_shark_ukopjd.jpg",
      },
      {
        path: "gray_nurse_shark",
        scientific_name: "Carcharias taurus",
        length: "3.2 m",
        uicn_status: "CR",
        cloudinary_object_id: "gray_nurse_shark_tlcayi.jpg",
      },
      {
        path: "hammerhead_shark",
        scientific_name: "Sphyrna zygaena",
        length: "6.1 m",
        uicn_status: "VU",
        cloudinary_object_id: "hammerhead_shark_uow3b3.webp",
      },
      {
        path: "tiger_shark",
        scientific_name: "Galeocerdo cuvier",
        length: "3-4.2 m",
        uicn_status: "NT",
        cloudinary_object_id: "tiger_shark_wbelg3.jpg",
      },
      {
        path: "whale_shark",
        scientific_name: "Rhincodon typus",
        length: "14 m",
        uicn_status: "EN",
        cloudinary_object_id: "whale_shark_aib9zk.jpg",
      },
      {
        path: "white_shark",
        scientific_name: "Carcharodon carcharias",
        length: "6.4 m",
        uicn_status: "VU",
        cloudinary_object_id: "white_shark_wiqksu.jpg",
      },
      {
        path: "basking_shark",
        scientific_name: "Cetorhinus maximus",
        length: "10 m",
        uicn_status: "EN",
        cloudinary_object_id: "basking_shark_hxcaaj.jpg",
      },
      {
        path: "spiny_dogfish",
        scientific_name: "Squalus acanthias",
        length: "1.2 m",
        uicn_status: "VU",
        cloudinary_object_id: "spiny_dogfish_t5kjmf.jpg",
      },
      {
        path: "shortfin_mako_shark",
        scientific_name: "Isurus oxyrinchus",
        length: "4 m",
        uicn_status: "EN",
        cloudinary_object_id: "shortfin_mako_shark_1_qud3zh.jpg",
      },
      {
        path: "grey_shark",
        scientific_name: "Carcharhinus amblyrhynchos",
        length: "2.6 m",
        uicn_status: "NT",
        cloudinary_object_id: "grey_shark_pvrpjo.webp",
      },
      {
        path: "thresher_shark",
        scientific_name: "Alopias vulpinus",
        length: "6.1 m",
        uicn_status: "VU",
        cloudinary_object_id: "thresher_shark_bshqfm.jpg",
        distribution: "",
      },
      {
        path: "porbeagle",
        scientific_name: "Lamna nasus",
        length: "3.0 m",
        uicn_status: "VU",
        cloudinary_object_id: "porbeagle_njgw9z.webp",
      },
      {
        path: "smalltooth_sand_tiger",
        scientific_name: "Odontaspis ferox",
        length: "4.1 m",
        uicn_status: "NT",
        cloudinary_object_id: "smalltooth_sand_tiger_1_ddcmgq.jpg",
      },
      {
        path: "bluntnose_sixgill_shark",
        scientific_name: "Hexanchus griseus",
        length: "3.5-4.2 m",
        uicn_status: "NT",
        cloudinary_object_id: "bluntnose_sixgill_shark_1_dde1nc.jpg",
      },
      {
        path: "salmon_shark",
        scientific_name: "Lamna ditropis",
        length: "2-2.60 m",
        uicn_status: "NT",
        cloudinary_object_id: "salmon_shark_lc1ssk.jpg",
      },
      {
        path: "blacktip_shark",
        scientific_name: "Carcharhinus limbatus",
        length: "3 m",
        uicn_status: "NT",
        cloudinary_object_id: "blacktip_shark",
      },
      {
        path: "broadnose_sevengill_shark",
        scientific_name: "Notorynchus cepedianus",
        length: "3 m",
        uicn_status: "NT",
        cloudinary_object_id: "",
      },
      {
        path: "caribbean_reef_shark",
        scientific_name: "Carcharhinus perezi",
        length: "3 m",
        uicn_status: "NT",
        cloudinary_object_id: "",
      },
      {
        path: "great_hammerhead_shark",
        scientific_name: "Sphyrna mokarran",
        length: "5,5 m",
        uicn_status: "EN",
        cloudinary_object_id: "",
      },
      {
        path: "lemon_shark",
        scientific_name: "Negaprion brevirostris",
        length: "3.4 m",
        uicn_status: "NT",
        cloudinary_object_id: "lemon_shark",
      },
      {
        path: "oceanic_whitetip_shark",
        scientific_name: "Carcharhinus longimanus",
        length: "4 m",
        uicn_status: "CR",
        cloudinary_object_id: "oceanic_whitetip",
      },
    ],
  }),
});

export const useQuestionsStore = defineStore("interactive", {
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
        answer:
          "No, they're not killers. That's not because they're shown acting like killers that this is true. In fact sharks are rarely hunting because they're not eating much. Also, to them human flesh is not a very tasty meal. Finally, this notion of 'killer' is really human and shouldn't be applied to shark's behaviors.",
      },
      {
        id: "3",
        text: "What is shark finning ?",
        responses: [
          {
            id: "1",
            text: "A movement made by associations to save and protect sharks",
          },
          {
            id: "2",
            text: "Some barbaric practice",
            correct: true,
          },
          {
            id: "3",
            text: "A specific behavior which occurs only when sharks are eating",
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
            text: "Yes",
          },
          { id: "2", text: "No", correct: true },
          { id: "3", text: "Sometimes" },
        ],
        answer:
          "It seems that they're incapable to survive in captivity. During the past some tries have been made such as the one in 2016 at Okinawa island in the south of Japan, Churaumi aquarium tried to conserve a male victim of unfortunate fishing. He died 3 days after being captured. Studies showed that he refused to eat. In fact great white sharks travel hundreds of kilometers, we can't image the size of the aquarium to contain such space. Moreover, they can develop psychological diseases being separated from their natural environment.",
      },
      {
        id: "5",
        text: "Why can't we see skeleton of sharks ?",
        responses: [
          {
            id: "1",
            text: "Strictly speaking, they've no skeleton",
            correct: true,
          },
          {
            id: "2",
            text: "It's very difficult to get them because they're drowning deeply to the abysses",
          },
          { id: "3", text: "Nobody mind about shark skeletons" },
        ],
        answer:
          "Sharks have cartilage skeleton, they don't have bones covering their body like a fish you can buy at the supermarket. As so, when they die, everything can be eaten by their relatives into the ocean.",
      },
    ],
  }),
});

export const useIUCNStatusStore = defineStore("iucn", {
  state: () => ({
    iucnStatus: {
      EX: "extinct",
      EW: "extinct in the wild",
      CR: "critical endangered",
      EN: "endangered",
      VU: "vulnerable",
      NT: "near threatened",
      LT: "least concern",
    },
  }),
});
