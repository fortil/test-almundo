const fs = require('fs')
const dirIcons = './'
const files = fs.readdirSync(dirIcons).filter((e) => e.split('.')[1] === 'svg')

const ifExistIndex = fs.existsSync(`${dirIcons}index.js`)
fs.writeFileSync(`${dirIcons}index.js`, '')
const names = []

function icons(file) {
  const name = file.split('.')[0]
  return new Promise((resolve, reject) => {
    fs.readFile(`${dirIcons}${file}`, async (err, body) => {
      if (!err) {
        const str = body.toString()
        const result = str.match(/<path style(.|\W)*?"\/>/g)
        if (!result) {
          return resolve()
        }
        const nameFunction = camelCase(name)
        names.push(nameFunction)
        const filess = `const ${nameFunction} = \`${result[0].replace(/style="(.|\W)*?;"/g, '').replace(/(\t|\n|\r)/g, ' ').trim()}\`\n\n`
        fs.appendFileSync(`${dirIcons}index.js`, filess)
        resolve()
      }
    })
  })
}
async function as() {
  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      await icons(file)
    }
    fs.appendFileSync(`${dirIcons}index.js`, `const OBJ = {\n\t${names.join(',\n\t')}\n}\n`)
    fs.appendFileSync(`${dirIcons}index.js`, `export default (name) => {\n`)
    fs.appendFileSync(`${dirIcons}index.js`, `\treturn OBJ[name.replace(/-([a-z])/ig, (all, letter) => letter.toUpperCase())]\n`)
    fs.appendFileSync(`${dirIcons}index.js`, `}\n`)
  } catch (error) {
    console.log(`> Hubo un error ${JSON.stringify(error, null, 2)}`)
  }
}
as().then(() => console.log(`> Finish`))


function camelCase(string) {
  return string.replace(/-([a-z])/ig, (all, letter) => letter.toUpperCase())
}