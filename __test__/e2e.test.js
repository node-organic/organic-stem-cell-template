const path = require('path')
const os = require('os')
const generateCore = require('organic-stem-core-template')

let tempDir = path.join(os.tmpdir(), 'test-stack-upgrade-' + Math.random())

beforeAll(async () => {
  jest.setTimeout(60 * 1000)
  await generateCore({
    destDir: tempDir,
    answers: {
      'project-name': 'test'
    }
  })
})

test('stack upgrade', async () => {
  jest.setTimeout(60 * 1000)
  let execute = require('../index')
  await execute({
    destDir: tempDir,
    answers: {
      'cell-name': 'test',
      'cwd': 'folder/me',
      'cellKind': 'test'
    }
  })
})
