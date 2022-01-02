export const presets = [
  {name: 'normal'},
  {name: 'clarendon'},
  {name: 'moon'},
  {name: '1977'},
  {name: 'reyes'},
  {name: 'juno'},
  {name: 'crema'},
  {name: 'maven'},
  {name: 'stinson'},
  {name: 'amaro'},
  {name: 'valencia'},
  {name: 'nashville'},
  {name: 'xpro2'},
]

export default function handler(req, res) {
  res.status(200).json(presets)
}
