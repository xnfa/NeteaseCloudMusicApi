const { song_wiki } = require('../main')

async function main() {
  const result = await song_wiki({
    id: '0102F41EADAB2052E39875865D18A1B04C4B',
  })
  console.log(result)
}
main()
