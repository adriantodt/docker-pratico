import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const characters: Prisma.CharacterCreateInput[] = [
  {
    name: 'Luke Skywalker',
    species: 'Human',
    source: 'Star Wars',
    description: 'Protagonist of the original Star Wars trilogy.',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png',
  },
  {
    name: 'Evelyn Quan Wang',
    species: 'Human',
    source: 'Everything Everywhere All At Once',
    description: 'Protagonist of the film Everything Everywhere All At Once.',
    image: 'https://64.media.tumblr.com/39124205870536bb63262266706da281/2b3c35c8b947885b-ae/s500x750/d5ec8e0b3c95e9690d0c3f77e0e052cba42f45b0.png',
  },
  {
    name: 'Doctor Stephen Strange',
    species: 'Human',
    source: 'Doctor Strange',
    description: 'Protagonist of the film Doctor Strange.',
    image: 'https://lumiere-a.akamaihd.net/v1/images/doctor_strange_in_the_multiverse_of_madness_0_4be9d58f.jpeg?region=128,0,327,327',
  },
  {
    name: 'Darth Vader',
    species: 'Human (Cyborg)',
    source: 'Star Wars',
    description: 'Antagonist of the original Star Wars trilogy.',
    image: 'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
  },
  {
    name: 'Rocket Raccoon',
    species: 'Raccoon',
    source: 'Guardians of the Galaxy',
    description: 'Character of the film Guardians of the Galaxy.',
    image: 'https://oxentesensei.com.br/wp-content/uploads/2022/01/Rocket-Raccoon-capa.jpg',
  },
  {
    name: 'Thanos',
    species: 'Eternal-Deviant hybrid (Titan)',
    source: 'Infinity War',
    description: 'Antagonist of the film Infinity War.',
    image: 'https://turnmundonerd.com.br/wp-content/uploads/2021/11/poltrona-google-let-users-play-with-thanos-destructive-power.jpg',
  },
  {
    name: 'The Joker',
    species: 'Human',
    source: 'Batman',
    description: 'Antagonist of the Batman films.',
    image: 'https://imagens.brasil.elpais.com/resizer/nCpDbZnTqbBMJsTdXM6xmN17xpg=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6TIOUTQV4DCNJTPRHFBQQCYQGA.jpg',
  },
  {
    name: 'Gamora',
    species: 'Zen-Whoberis',
    source: 'Guardians of the Galaxy',
    description: 'Character of the film Guardians of the Galaxy.',
    image: 'https://rollingstone.uol.com.br/media/_versions/gamora_reproducao_widelg.jpg',
  },
  {
    name: 'Vision',
    species: 'Android',
    source: 'Avengers',
    description: 'Character of the film Avengers.',
    image: 'https://img.ibxk.com.br/2021/01/15/15114938801208.jpg',
  },
  {
    name: 'Tony Stark',
    species: 'Human',
    source: 'Iron Man',
    description: 'Protagonist of the film Iron Man.',
    image: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2019/07/robert-downey-jr-comenta-evolucao-de-tony-stark-ao-longo-do-mcu.jpg',
  },
];

async function main() {
  const names = await prisma.character.findMany({ select: { name: true } })
    .then(characters => characters.map(character => character.name));

  await prisma.character.createMany({
    data: characters.filter(character => !names.includes(character.name)),
  });
}

main().then(async () => prisma.$disconnect()).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
